"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Montserrat } from "next/font/google";
import {
  Mail,
  Phone,
  User,
  Send,
  Loader2,
  CheckCircle2,
  Building2,
  ChevronDown,
  Check,
  Shield,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [alert, setAlert] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    control,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      services: [],
      role: "",
      stage: "",
      plan: "",
      currentSetup: "",
      budget: "",
      urgency: "ASAP",
    },
  });

  // Validate Step 1 before proceeding
  const handleNextStep = async () => {
    const fieldsToValidate = [
      "name",
      "email",
      "phone",
      "company",
      "budget",
      "plan",
    ];
    const isValid = await trigger(fieldsToValidate);
    if (isValid) setStep(2);
  };

  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();

      setAlert({
        type: "success",
        message: "Request submitted successfully!",
      });

      reset();
      setStep(1);
    } catch {
      setAlert({
        type: "error",
        message: "Submission failed. Please try again.",
      });
    }
    setTimeout(() => setAlert(null), 3500);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-10 md:py-16 bg-transparent overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-orange-600/5 blur-[120px] rounded-full pointer-events-none" />

      <AnimatePresence>
        {alert && (
          <Alert
            type={alert.type}
            message={alert.message}
            onClose={() => setAlert(null)}
          />
        )}
      </AnimatePresence>

      <div className="w-full max-w-4xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[2.5rem] p-6 md:p-10 bg-zinc-900/60 backdrop-blur-xl border border-white/10"
        >
          {/* Header & Progress */}
          <div className="flex justify-between items-start mb-6 md:mb-8">
            <div>
              <h1
                className={`${montserrat.className} text-2xl md:text-3xl font-bold text-white mb-1`}
              >
                {step === 1 ? "The Basics" : "Project Details"}
              </h1>
              <p className="text-zinc-400 text-sm">
                {step === 1 ? "Tell us who you are." : "Tell us what you need."}
              </p>
            </div>
            <div className="text-right">
              <span className="text-orange-500 font-bold text-xs uppercase tracking-widest">
                Step {step} of 2
              </span>
              <div className="flex gap-1 mt-2">
                <div
                  className={`h-1 w-8 rounded-full transition-colors ${step >= 1 ? "bg-orange-500" : "bg-white/10"}`}
                />
                <div
                  className={`h-1 w-8 rounded-full transition-colors ${step >= 2 ? "bg-orange-500" : "bg-white/10"}`}
                />
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-4"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      icon={User}
                      placeholder="Full Name"
                      {...register("name", { required: true })}
                      error={errors.name}
                    />
                    <Input
                      icon={Mail}
                      type="email"
                      placeholder="Email Address"
                      {...register("email", { required: true })}
                      error={errors.email}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      icon={Phone}
                      placeholder="Phone Number"
                      {...register("phone", { required: true })}
                      error={errors.phone}
                    />
                    <Input
                      icon={Building2}
                      placeholder="Company Name"
                      {...register("company", { required: true })}
                      error={errors.company}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Controller
                      name="budget"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <CustomDropdown
                          label="Monthly Ops Spend"
                          value={field.value}
                          onChange={field.onChange}
                          error={errors.budget}
                          options={[
                            "< ₹50k",
                            "₹50k – ₹2L",
                            "₹2L – ₹5L",
                            "₹5L+",
                          ]}
                        />
                      )}
                    />
                    <Controller
                      name="plan"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <CustomDropdown
                          label="Interested Plan"
                          value={field.value}
                          onChange={field.onChange}
                          error={errors.plan}
                          options={[
                            {
                              label: "Coordinator",
                              description: "We manage your existing agencies",
                            },
                            {
                              label: "Sourcing",
                              description: "We find agencies, you manage them",
                            },
                            {
                              label: "Full Stack",
                              description:
                                "We find + manage everything for you",
                            },
                            {
                              label: "Mini (Beta)",
                              description:
                                "Budget-friendly for bootstrap startups",
                            },
                            {
                              label: "Not sure yet",
                              description: "We'll help you decide",
                            },
                            {
                              label: "just exploring",
                              description:
                                "Facing Problem but need more information",
                            },
                          ]}
                        />
                      )}
                    />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <Controller
                      name="role"
                      control={control}
                      render={({ field }) => (
                        <CustomDropdown
                          label="Your Role"
                          value={field.value}
                          onChange={field.onChange}
                          options={[
                            "Founder / Co-Founder",
                            "CXO",
                            "Ops / Marketing Lead",
                            "Other",
                          ]}
                        />
                      )}
                    />
                    <Controller
                      name="stage"
                      control={control}
                      render={({ field }) => (
                        <CustomDropdown
                          label="Company Stage"
                          value={field.value}
                          onChange={field.onChange}
                          options={[
                            "Bootstrapped",
                            "Seed",
                            "Series A+",
                            "₹1Cr–₹10Cr ARR",
                          ]}
                        />
                      )}
                    />
                  </div>

                  <CustomCheckboxGroup
                    label="Services Needed"
                    options={[
                      "Marketing",
                      "Finance",
                      "HR",
                      "Multiple / Full Stack / Any other agency",
                    ]}
                    register={register("services")}
                  />

                  <textarea
                    {...register("description")}
                    placeholder="what else you want us to know... (optional)"
                    className={`${montserrat.className} w-full bg-black/40 border border-white/10 rounded-xl py-3 px-4 text-white text-sm min-h-[80px] focus:border-orange-500/50 focus:outline-none transition-colors resize-none`}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex gap-4 pt-3">
              {step === 2 && (
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-4 rounded-xl border border-white/10 text-white hover:bg-white/5 transition-colors"
                >
                  <ArrowLeft size={20} />
                </button>
              )}

              {step === 1 ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="flex-1 bg-white text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all"
                >
                  Continue <ArrowRight size={18} />
                </button>
              ) : (
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 shadow-lg shadow-orange-900/20"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />{" "}
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Request <Send size={18} />
                    </>
                  )}
                </motion.button>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

/* ================= COMPONENTS (Corrected/Refined) ================= */

const Alert = ({ type, message, onClose }) => (
  <motion.div
    initial={{ y: -40, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -40, opacity: 0 }}
    className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] px-6 py-4 rounded-2xl backdrop-blur-2xl border shadow-2xl
      ${type === "success" ? "bg-green-500/10 border-green-500/20 text-green-400" : "bg-red-500/10 border-red-500/20 text-red-400"}`}
  >
    <div className="flex items-center gap-3 text-sm font-bold">
      {type === "success" ? (
        <CheckCircle2 size={20} />
      ) : (
        <AlertCircle size={20} />
      )}
      {message}
    </div>
  </motion.div>
);

const AlertCircle = ({ size, className }) => (
  <Shield size={size} className={className} />
);

const Input = React.forwardRef(({ icon: Icon, error, ...props }, ref) => (
  <div className="w-full">
    <div className="relative group">
      {Icon && (
        <Icon
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-orange-500 transition-colors"
        />
      )}
      <input
        ref={ref}
        {...props}
        className={`${montserrat.className} w-full bg-black/40 border ${error ? "border-red-500/50" : "border-white/10 group-focus-within:border-orange-500/50"} rounded-xl py-3.5 ${Icon ? "pl-12" : "pl-4"} pr-4 text-white text-sm transition-all focus:outline-none`}
      />
    </div>
    {error && (
      <p className="text-red-500/80 text-[10px] uppercase font-bold tracking-tight mt-1.5 ml-2">
        Required
      </p>
    )}
  </div>
));
Input.displayName = "Input";

/* ================= UPDATED DROPDOWN COMPONENT ================= */

const CustomDropdown = ({ label, options, value, onChange, error }) => {
  const [open, setOpen] = React.useState(false);
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const handleClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target))
        setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isObjectOptions = options.length > 0 && typeof options[0] === "object";
  const displayValue = isObjectOptions
    ? options.find((opt) => opt.label === value)?.label || value
    : value;

  return (
    <div className="relative w-full" ref={containerRef}>
      <label className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest mb-1.5 block ml-1">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`w-full bg-black/40 border ${
          error ? "border-red-500/50" : "border-white/10"
        } rounded-xl px-4 py-3 md:py-3.5 flex justify-between items-center text-sm transition-all hover:border-white/20`}
      >
        <span className={`${value ? "text-white" : "text-zinc-600"} truncate`}>
          {displayValue || "Select option"}
        </span>
        <ChevronDown
          size={16}
          className={`text-zinc-500 flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            /* Added max-h and responsive positioning */
            className="absolute mt-2 w-full bg-zinc-900 border border-white/10 rounded-xl overflow-hidden z-[110] shadow-2xl max-h-[220px] md:max-h-[300px] overflow-y-auto scrollbar-hide"
          >
            {options.map((opt) => {
              const optLabel = isObjectOptions ? opt.label : opt;
              const optDesc = isObjectOptions ? opt.description : null;

              return (
                <li
                  key={optLabel}
                  onClick={() => {
                    onChange(optLabel);
                    setOpen(false);
                  }}
                  className="px-4 py-3 cursor-pointer hover:bg-orange-500 transition-colors group border-b border-white/5 last:border-none"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 md:gap-3">
                    <div className="flex flex-col flex-1 min-w-0">
                      <span className="text-sm font-semibold text-white group-hover:text-white">
                        {optLabel}
                      </span>
                      {optDesc && (
                        <span className="text-[10px] md:text-[11px] text-zinc-500 group-hover:text-white/80 leading-snug">
                          {optDesc}
                        </span>
                      )}
                    </div>
                    {value === optLabel && (
                      <Check
                        size={14}
                        className="text-white flex-shrink-0 hidden md:block"
                      />
                    )}
                  </div>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ================= UPDATED CHECKBOX GROUP (MOBILE OPTIMIZED) ================= */

const CustomCheckboxGroup = ({ label, options, register }) => (
  <div className="w-full">
    <label className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest mb-2 block ml-1">
      {label}
    </label>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
      {options.map((opt) => (
        <label
          key={opt}
          className="group flex items-center gap-3 p-3 rounded-xl bg-black/40 border border-white/10 cursor-pointer hover:border-orange-500/40 transition-all active:scale-[0.98]"
        >
          <input
            type="checkbox"
            value={opt}
            {...register}
            className="peer sr-only"
          />
          <div className="w-5 h-5 rounded-md border-2 border-white/20 flex items-center justify-center peer-checked:bg-orange-500 peer-checked:border-orange-500 transition-all flex-shrink-0">
            <Check
              size={12}
              className="text-white opacity-0 peer-checked:opacity-100"
            />
          </div>
          <span className="text-zinc-400 text-[11px] md:text-xs peer-checked:text-white transition-colors leading-tight">
            {opt}
          </span>
        </label>
      ))}
    </div>
  </div>
);
