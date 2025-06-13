"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Profile Photo */}
          <div className="my-1 flex justify-center">
            <div className="relative w-60 h-60 rounded-full overflow-hidden border-4 border-white shadow-xl hover:scale-105 transition-transform duration-300">
              <Image
                src="/profile_pic.jpg"
                alt="Professional headshot"
                width={240}
                height={240}
                className="object-fit "
                priority
              />
            </div>
          </div>

          {/* Introduction */}
          <div className="space-y-4 mb-5">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              Hi, I'm{" "}
              <span className="text-emerald-600 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Nipun Davasam
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-medium">
              Full Stack Developer & Software Engineer
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              I craft beautiful, functional web experiences that solve
              real-world problems. Passionate about clean code, intuitive
              design, and continuous learning.
            </p>
          </div>

          {/* Social Links */}
          {/* <div className="flex justify-center space-x-4 mb-12">
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-emerald-50 hover:border-emerald-300 dark:hover:bg-emerald-900 dark:hover:border-emerald-700"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-emerald-50 hover:border-emerald-300 dark:hover:bg-emerald-900 dark:hover:border-emerald-700"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-emerald-50 hover:border-emerald-300 dark:hover:bg-emerald-900 dark:hover:border-emerald-700"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email
            </Button>
          </div> */}

          {/* CTA Button */}
          <Button
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg mb-5"
            onClick={scrollToAbout}
          >
            Explore My Work
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute mt-2 bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToAbout}
          className="text-emerald-600 hover:text-emerald-700"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}
