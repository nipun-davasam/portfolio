"use client";

import { useEffect, useRef, useState } from "react";
import {
  GraduationCap,
  Briefcase,
  Code,
  Palette,
  Coffee,
  Music,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    "JavaScript",
    "React.js",
    "Next.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Git",
    "Figma",
    "Tailwind CSS",
    "Framer",
    "MySQL",
    "SpringBoot",
  ];

  const experience = [
    {
      icon: Briefcase,
      title: "Software Engineer",
      subtitle: "Cerner Healthcare",
      year: "2021-2023",
      description:
        "Redesigned and optimized backend and frontend systems for real-time medical data applications, enhancing performance, security, and usability across CI/CD pipelines and UI/UX workflows",
    },
    {
      icon: Briefcase,
      title: "Systems Engineer",
      subtitle: "Infosys",
      year: "2020-2021",
      description:
        "Developed and enhanced UI features using RESTful APIs, enabling dynamic data filtering and improving system architecture for scalable backend integration and improved user experience",
    },
  ];

  const education = [
    {
      icon: GraduationCap,
      title: "Computer Science Degree",
      subtitle: "Clarkson University",
      year: "2023-2025",
      description: "Masters's in Computer Science",
    },
    {
      icon: GraduationCap,
      title: "Electronics and Communication Engineering",
      subtitle: "Amrita School of Engineering",
      year: "2016-2020",
      description: "Bachelor's in Electronics and Communication Engineering",
    },
  ];

  const interests = [
    { icon: Code, label: "Open Source" },
    { icon: Palette, label: "Design" },
    { icon: Coffee, label: "Coffee" },
    { icon: Music, label: "Music" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I'm a passionate developer who loves creating digital experiences
              that make a difference. With a strong foundation in both frontend
              and backend technologies, I enjoy tackling complex problems and
              turning ideas into reality.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Bio */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                My Story
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  My journey into tech began with a fascination for how things
                  work behind the screen. During my undergraduate years, I dove
                  into programming, and what started as academic curiosity
                  quickly evolved into a passion for building impactful digital
                  systems.
                </p>
                <p>
                  With over 3 years of experience as a Full Stack Engineer, I’ve
                  contributed to projects ranging from real-time healthcare
                  dashboards to voice-enabled web platforms. Working with Java,
                  Python, React.js, and Spring Boot, I’ve learned how to blend
                  performance with intuitive user experiences—especially while
                  optimizing backend services and streamlining CI/CD pipelines.
                </p>
                <p>
                  When I’m not coding or tackling cloud architecture, I enjoy
                  experimenting with UI/UX design in Framer, staying current on
                  tech trends, or just recharging with music and a strong cup of
                  coffee. I graduated with my Master’s in Computer Science at
                  Clarkson University and always looking for the next
                  challenge to grow and innovate.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Skills & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 rounded-full text-sm font-medium transition-all duration-300 hover:bg-emerald-200 dark:hover:bg-emerald-800 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              Experience
            </h3>
            <div className="space-y-6">
              {experience.map((item, index) => (
                <Card
                  key={index}
                  className={`transition-all duration-500 hover:shadow-lg ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                          <item.icon className="w-6 h-6 text-emerald-600" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {item.title}
                          </h4>
                          <span className="text-sm text-emerald-600 font-medium">
                            {item.year}
                          </span>
                        </div>
                        <p className="text-emerald-700 font-medium mb-2">
                          {item.subtitle}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              Education
            </h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <Card
                  key={index}
                  className={`transition-all duration-500 hover:shadow-lg ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                          <item.icon className="w-6 h-6 text-emerald-600" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {item.title}
                          </h4>
                          <span className="text-sm text-emerald-600 font-medium">
                            {item.year}
                          </span>
                        </div>
                        <p className="text-emerald-700 font-medium mb-2">
                          {item.subtitle}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Interests */}
          {/* <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">Interests</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {interests.map((interest, index) => (
                <div
                  key={interest.label}
                  className={`text-center group cursor-pointer transition-all duration-300 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800 transition-colors">
                    <interest.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">{interest.label}</p>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
