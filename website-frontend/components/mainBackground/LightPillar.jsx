"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";

const LightPillar = ({
  topColor = "#FFA500",
  bottomColor = "#E65100",
  intensity = 1.1,
  rotationSpeed = 0.3,
  className = "",
  glowAmount = 0.003,
  pillarWidth = 2.5,
  pillarHeight = 0.3,
  pillarRotation = 92,
  mixBlendMode = "screen",
}) => {
  const containerRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const isMobile = window.innerWidth < 768;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false, // Force disable for speed
      powerPreference: "high-performance",
    });

    // Performance Cap: Force a lower resolution for the background shader
    const dpr = Math.min(window.devicePixelRatio || 1, 1.2);
    renderer.setPixelRatio(dpr);

    const qualityScale = isMobile ? 0.3 : 0.5;

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

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const parseColor = (hex) => {
      const c = new THREE.Color(hex);
      return new THREE.Vector3(c.r, c.g, c.b);
    };

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
        uSteps: { value: isMobile ? 15 : 30 }, // SIGNIFICANTLY reduced steps
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        precision mediump float; // Lower precision for speed

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
          float s = sin(a); float c = cos(a);
          return mat2(c, -s, s, c);
        }

        void main() {
          vec2 uv = vUv * 2.0 - 1.0;
          uv.x *= uResolution.x / uResolution.y;
          uv *= rot(radians(uPillarRotation));

          vec3 ro = vec3(0.0, 0.0, -8.0);
          vec3 rd = normalize(vec3(uv, 1.2));

          float depth = 0.0;
          vec3 col = vec3(0.0);

          // Optimized raymarching loop
          for (int i = 0; i < 40; i++) {
            if (i >= uSteps) break;

            vec3 p = ro + rd * depth;
            p.xz *= rot(uTime * 0.1);

            vec3 dP = p;
            dP.y *= uPillarHeight;
            
            // Simplified wave math
            float wave = cos(dP.x * 1.2 + uTime) * 0.4;
            float d = length(cos(dP.xz + wave)) - 0.2;
            
            float bounds = length(p.xz) - uPillarWidth;
            d = max(d, bounds);
            d = abs(d) * 0.2 + 0.01;

            vec3 grad = mix(uBottomColor, uTopColor, smoothstep(5.0, -5.0, p.y));
            col += grad * (uGlowAmount / d);
            depth += d * 1.6;

            if (depth > 15.0) break;
          }

          gl_FragColor = vec4(tanh(col * uIntensity), 1.0);
        }
      `,
    });

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(mesh);

    setSize();

    const animate = (t) => {
      material.uniforms.uTime.value = t * 0.001 * rotationSpeed;
      renderer.render(scene, camera);
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    const onResize = () => setSize();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, [topColor, bottomColor, intensity, rotationSpeed, glowAmount, pillarWidth, pillarHeight, pillarRotation]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 ${className}`}
      style={{ mixBlendMode, pointerEvents: "none" }}
    />
  );
};

export default LightPillar;