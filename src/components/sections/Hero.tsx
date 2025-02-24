"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const deviceRef = useRef(null);
  const containerRef = useRef(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const bgParallaxRef = useRef(null);

  useEffect(() => {
    // Initial Animation
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }
    );

    // Parallax Background Effect
    gsap.to(bgParallaxRef.current, {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1
      }
    });

    // Device Animation on Scroll
    gsap.to(deviceRef.current, {
      scale: 1.1,
      y: -30,
      scrollTrigger: {
        trigger: deviceRef.current,
        start: "top center",
        end: "bottom top",
        scrub: 1.5
      }
    });

    // Content Grid Animation
    const gridItems = gridRef.current?.children || [];
    gsap.fromTo(
      gridItems,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Animated Background Elements */}
      <div ref={bgParallaxRef} className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-[30rem] h-[30rem] bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] transition-all duration-300 hover:bg-[size:28px_28px]" />

      <div className="container mx-auto px-6 py-16 flex flex-col items-center text-center relative z-10" ref={containerRef}>
        {/* Text Content */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
          Discover the Power of
          <span className="block bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-400 text-transparent bg-clip-text bg-size-200 animate-gradient">
            AI Tools Library
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mt-4 leading-relaxed">
          Leverage a comprehensive suite of AI tools to transform your workflow
          and unleash unlimited possibilities.
        </p>
        <div className="flex gap-6 pt-8">
          <a
            href="/signup"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full font-semibold hover:opacity-90 transition-all flex items-center gap-2 group text-lg"
          >
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/tools"
            className="px-8 py-4 border border-white/20 rounded-full font-semibold hover:bg-white/10 transition-all text-lg"
          >
            Explore Tools
          </a>
        </div>

        {/* Larger Device Preview */}
        <div className="relative mt-16" ref={deviceRef}>
          <div className="relative bg-gray-900 rounded-2xl p-3 border border-gray-800 shadow-2xl w-[48rem] h-[30rem]">
            {/* Device Frame */}
            <div className="absolute top-0 left-0 right-0 h-10 bg-gray-800 rounded-t-2xl flex items-center px-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
            </div>

            {/* Content Inside Device */}
            <div className="pt-12 rounded-b-xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 h-full">
              <div className="p-6 space-y-6">
                <div className="h-10 bg-gray-700/50 rounded-lg w-3/4 animate-pulse" />
                <div className="h-6 bg-gray-700/50 rounded w-1/2 animate-pulse delay-100" />
                <div className="h-6 bg-gray-700/50 rounded w-2/3 animate-pulse delay-200" />
                <div className="grid grid-cols-4 gap-4 pt-6" ref={gridRef}>
                  {[...Array(8)].map((_, i) => (
                    <div 
                      key={i}
                      className={`h-32 rounded-lg animate-pulse ${
                        i % 3 === 0 ? 'bg-purple-500/20' : 
                        i % 3 === 1 ? 'bg-blue-500/20' : 'bg-indigo-500/20'
                      }`}
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Floating Elements */}
          <div className="absolute -top-6 -right-6 w-12 h-12 bg-purple-500/30 rounded-full blur-sm animate-bounce" />
          <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-500/30 rounded-full blur-sm animate-bounce delay-500" />
          <div className="absolute top-1/2 -right-8 w-10 h-10 bg-indigo-500/30 rounded-full blur-sm animate-bounce delay-300" />
          <div className="absolute bottom-1/3 -left-8 w-10 h-10 bg-purple-500/30 rounded-full blur-sm animate-bounce delay-700" />
        </div>
      </div>
      
    </section>
  );
};

export default Hero;