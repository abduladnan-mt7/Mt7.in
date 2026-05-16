// this os is perfect the bottom one

// import { useRef, useEffect, useState } from 'react';
// import * as THREE from 'three';

// const LightPillar = ({
//   topColor = '#FFA500', 
//   bottomColor = '#E65100', 
//   intensity = 1.1,
//   rotationSpeed = 0.4,
//   className = '',
//   glowAmount = 0.002,
//   pillarWidth = 3.0,
//   pillarHeight = 0.4,
//   noiseIntensity = 0.3,
//   mixBlendMode = 'screen',
//   pillarRotation = 92
// }) => {
//   const containerRef = useRef(null);
//   const rendererRef = useRef(null);
//   const materialRef = useRef(null);
//   const rafRef = useRef(null);
//   const timeRef = useRef(0);
//   const [webGLSupported, setWebGLSupported] = useState(true);

//   useEffect(() => {
//     if (!containerRef.current) return;
//     const container = containerRef.current;

//     // --- Scene Setup ---
//     const scene = new THREE.Scene();
//     const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    
//     let renderer;
//     try {
//       renderer = new THREE.WebGLRenderer({ 
//         alpha: true, 
//         antialias: false,
//         powerPreference: "high-performance" 
//       });
//       // OPTIMIZATION: Cap resolution to 1.2x (Native is often 3x). 
//       // This is the biggest performance boost.
//       renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.2));
//       renderer.setSize(container.clientWidth, container.clientHeight);
//       container.appendChild(renderer.domElement);
//       rendererRef.current = renderer;
//     } catch (e) {
//       // eslint-disable-next-line react-hooks/set-state-in-effect
//       setWebGLSupported(false);
//       return;
//     }

//     const parseColor = hex => {
//       const c = new THREE.Color(hex);
//       return new THREE.Vector3(c.r, c.g, c.b);
//     };

//     const material = new THREE.ShaderMaterial({
//       transparent: true,
//       uniforms: {
//         uTime: { value: 0 },
//         uResolution: { value: new THREE.Vector2(container.clientWidth, container.clientHeight) },
//         uTopColor: { value: parseColor(topColor) },
//         uBottomColor: { value: parseColor(bottomColor) },
//         uIntensity: { value: intensity },
//         uGlowAmount: { value: glowAmount },
//         uPillarWidth: { value: pillarWidth },
//         uPillarHeight: { value: pillarHeight },
//         uNoiseIntensity: { value: noiseIntensity },
//         uPillarRotation: { value: pillarRotation }
//       },
//       vertexShader: `
//         varying vec2 vUv;
//         void main() {
//           vUv = uv;
//           gl_Position = vec4(position, 1.0);
//         }
//       `,
//       fragmentShader: `
//         uniform float uTime;
//         uniform vec2 uResolution;
//         uniform vec3 uTopColor;
//         uniform vec3 uBottomColor;
//         uniform float uIntensity;
//         uniform float uGlowAmount;
//         uniform float uPillarWidth;
//         uniform float uPillarHeight;
//         uniform float uNoiseIntensity;
//         uniform float uPillarRotation;
//         varying vec2 vUv;

//         mat2 rot(float a) {
//           float s = sin(a); float c = cos(a);
//           return mat2(c, -s, s, c);
//         }

//         float noise(vec2 p) {
//           return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
//         }

//         // RESTORED: Your original wave logic
//         vec3 applyWave(vec3 pos, float t) {
//           vec3 d = pos;
//           for(float i = 0.0; i < 3.0; i++) { // Optimized 4 -> 3 iterations
//             d.xz *= rot(0.4);
//             d += cos(d.zxy * (1.0 + i * 0.5) - t * (1.0 + i)) * 0.5;
//           }
//           return d;
//         }

//         void main() {
//           vec2 uv = (vUv * 2.0 - 1.0);
//           uv.x *= uResolution.x / uResolution.y;
//           uv *= rot(uPillarRotation * 3.14159 / 180.0);

//           vec3 ro = vec3(0.0, 0.0, -8.0);
//           vec3 rd = normalize(vec3(uv, 1.2));
//           float depth = 0.0;
//           vec3 col = vec3(0.0);

//           // OPTIMIZATION: Lower steps (40) but larger step multiplier (1.4)
//           for(int i = 0; i < 40; i++) {
//             vec3 p = ro + rd * depth;
//             p.xz *= rot(uTime * 0.15);
            
//             vec3 pDeformed = p;
//             pDeformed.y *= uPillarHeight;
//             pDeformed = applyWave(pDeformed + vec3(0.0, uTime, 0.0), uTime);
            
//             float d = length(cos(pDeformed.xz)) - 0.2;
//             float bounds = length(p.xz) - uPillarWidth;
//             d = max(d, bounds);
//             d = abs(d) * 0.2 + 0.01;

//             vec3 grad = mix(uBottomColor, uTopColor, smoothstep(8.0, -8.0, p.y));
//             col += grad * (uGlowAmount / d);
            
//             depth += d * 1.4; 
//             if(depth > 20.0) break;
//           }

//           col = tanh(col * uIntensity);
//           float n = noise(vUv * uTime) * uNoiseIntensity * 0.05;
//           gl_FragColor = vec4(col - n, 1.0);
//         }
//       `
//     });
//     materialRef.current = material;

//     const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
//     scene.add(mesh);

//     const animate = (t) => {
//       timeRef.current = t * 0.001 * rotationSpeed;
//       if (materialRef.current) materialRef.current.uniforms.uTime.value = timeRef.current;
//       renderer.render(scene, camera);
//       rafRef.current = requestAnimationFrame(animate);
//     };
//     rafRef.current = requestAnimationFrame(animate);

//     const handleResize = () => {
//       renderer.setSize(container.clientWidth, container.clientHeight);
//       material.uniforms.uResolution.value.set(container.clientWidth, container.clientHeight);
//     };
//     window.addEventListener('resize', handleResize);

//     return () => {
//       cancelAnimationFrame(rafRef.current);
//       window.removeEventListener('resize', handleResize);
//       renderer.dispose();
//     };
//   }, [topColor, bottomColor, intensity, rotationSpeed, pillarWidth, pillarHeight, pillarRotation]);

//   if (!webGLSupported) return null;

//   return (
//     <div ref={containerRef} className={`w-full h-full absolute inset-0 ${className}`} style={{ mixBlendMode, pointerEvents: 'none' }} />
//   );
// };

// export default LightPillar;

"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";

const LightPillar = ({
  topColor = "#FFA500",
  bottomColor = "#E65100",
  intensity = 1.43, // Increased by 10% (1.3 * 1.1)
  rotationSpeed = 0.5,
  className = "",
  glowAmount = 0.0055, // Increased by 10% (0.005 * 1.1)
  pillarWidth = 3.0,
  pillarHeight = 0.4,
  pillarRotation = 92,
  mixBlendMode = "screen",
}) => {
  const containerRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const isMobile = window.innerWidth < 768;

    /* ---------------- RENDERER ---------------- */
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: "high-performance",
    });

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    renderer.setPixelRatio(dpr);

    const qualityScale = isMobile ? 0.35 : 0.6;

    const setSize = () => {
      const w = Math.max(1, container.clientWidth * qualityScale);
      const h = Math.max(1, container.clientHeight * qualityScale);
      renderer.setSize(w, h, false);
      material.uniforms.uResolution.value.set(w, h);
    };

    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.inset = "0";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    container.appendChild(renderer.domElement);

    /* ---------------- SCENE ---------------- */
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const parseColor = (hex) => {
      const c = new THREE.Color(hex);
      return new THREE.Vector3(c.r, c.g, c.b);
    };

    /* ---------------- MATERIAL ---------------- */
    const material = new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(1, 1) },
        uTopColor: { value: parseColor(topColor) },
        uBottomColor: { value: parseColor(bottomColor) },
        uIntensity: { value: intensity },
        uGlowAmount: { value: glowAmount },
        uPillarWidth: { value: pillarWidth },
        uPillarHeight: { value: pillarHeight },
        uPillarRotation: { value: pillarRotation },
        uSteps: { value: isMobile ? 22 : 35 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        precision highp float;

        uniform float uTime;
        uniform vec2 uResolution;
        uniform vec3 uTopColor;
        uniform vec3 uBottomColor;
        uniform float uIntensity;
        uniform float uGlowAmount;
        uniform float uPillarWidth;
        uniform float uPillarHeight;
        uniform float uPillarRotation;
        uniform int uSteps;

        varying vec2 vUv;

        mat2 rot(float a) {
          float s = sin(a);
          float c = cos(a);
          return mat2(c, -s, s, c);
        }

        vec3 wave(vec3 p, float t) {
          p.xz *= rot(0.4);
          p += cos(p.zxy * 1.2 - t) * 0.45;
          return p;
        }

        void main() {
          vec2 uv = vUv * 2.0 - 1.0;
          uv.x *= uResolution.x / uResolution.y;
          uv *= rot(radians(uPillarRotation));

          vec3 ro = vec3(0.0, 0.0, -8.0);
          vec3 rd = normalize(vec3(uv, 1.2));

          float depth = 0.0;
          vec3 col = vec3(0.0);

          for (int i = 0; i < 64; i++) {
            if (i >= uSteps) break;

            vec3 p = ro + rd * depth;
            p.xz *= rot(uTime * 0.15);

            vec3 dP = p;
            dP.y *= uPillarHeight;
            dP = wave(dP + vec3(0.0, uTime, 0.0), uTime);

            float d = length(cos(dP.xz)) - 0.2;
            float bounds = length(p.xz) - uPillarWidth;
            d = max(d, bounds);
            d = abs(d) * 0.2 + 0.01;

            vec3 grad = mix(
              uBottomColor,
              uTopColor,
              smoothstep(6.0, -6.0, p.y)
            );

            // Using uGlowAmount to feed the brightness of each step
            col += grad * (uGlowAmount / d);
            depth += d * 1.4;

            if (depth > 20.0) break;
          }

          // Apply intensity and use a slightly more aggressive tone mapping for bloom effect
          vec3 finalCol = col * uIntensity;
          gl_FragColor = vec4(tanh(finalCol), 1.0);
        }
      `,
    });

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(mesh);

    setSize();

    /* ---------------- ANIMATION ---------------- */
    const animate = (t) => {
      material.uniforms.uTime.value =
        Math.min(t * 0.001 * rotationSpeed, 10000);
      renderer.render(scene, camera);
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    /* ---------------- RESIZE (DEBOUNCED) ---------------- */
    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(setSize, 150);
    };

    window.addEventListener("resize", onResize);

    /* ---------------- CLEANUP ---------------- */
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, [
    topColor,
    bottomColor,
    intensity,
    rotationSpeed,
    glowAmount,
    pillarWidth,
    pillarHeight,
    pillarRotation,
  ]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 ${className}`}
      style={{ mixBlendMode, pointerEvents: "none" }}
    />
  );
};

export default LightPillar;