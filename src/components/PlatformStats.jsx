"use client";

import { animate } from "motion";
import { useEffect, useRef, useState } from "react";

const PlatformStats = () => {
  const stats = [
    {
      value: 200,
      title: "Registered Tutors",
      icon: "👨‍🏫",
    },
    {
      value: 265,
      title: "Total Applications",
      icon: "📋",
    },
    {
      value: 150,
      title: "Live Tuition Jobs",
      icon: "💼",
    },
    {
      value: 300,
      title: "Total Stakeholders",
      icon: "🤝",
    },
  ];

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-600">
            Platform Statistics
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Growing Together,{" "}
            <span className="text-blue-600">Every Day</span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-500 sm:text-base">
            Our platform continues to connect tutors, students, and
            stakeholders across the education community.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ stat, isVisible }) => {
  const countRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!countRef.current) return;

    // Section থেকে বের হলে animation stop + number reset
    if (!isVisible) {
      animationRef.current?.stop();

      countRef.current.textContent = "0";
      return;
    }

    // Section এ ঢুকলে নতুন করে animation
    animationRef.current?.stop();

    animationRef.current = animate(0, stat.value, {
      duration: 2,
      ease: "circOut",

      onUpdate: (latest) => {
        if (countRef.current) {
          countRef.current.textContent =
            Math.round(latest).toLocaleString();
        }
      },
    });

    return () => {
      animationRef.current?.stop();
    };
  }, [isVisible, stat.value]);

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg">

      {/* Decoration */}
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-100/60 blur-3xl transition-all duration-300 group-hover:bg-blue-200/60" />

      <div className="relative">

        {/* Icon */}
        <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-xl shadow-sm">
          {stat.icon}
        </div>

        {/* Count */}
        <h3
          ref={countRef}
          className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
        >
          0
        </h3>

        {/* Title */}
        <p className="mt-2 text-sm font-medium text-slate-500">
          {stat.title}
        </p>

        {/* Divider */}
        <div className="mt-6 h-px w-full bg-slate-200" />

        <p className="mt-4 text-xs text-slate-400">
          Trusted platform community
        </p>
      </div>
    </div>
  );
};

export default PlatformStats;