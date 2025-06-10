"use client"

import { useEffect, useRef, useState } from "react"
import { GraduationCap, Briefcase, Code, Palette, Coffee, Music } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Git",
    "Figma",
  ]

  const timeline = [
    {
      icon: GraduationCap,
      title: "Computer Science Degree",
      subtitle: "University of Technology",
      year: "2018-2022",
      description: "Bachelor's in Computer Science with focus on Software Engineering",
    },
    {
      icon: Briefcase,
      title: "Frontend Developer",
      subtitle: "TechStart Inc.",
      year: "2022-2023",
      description: "Built responsive web applications using React and modern JavaScript",
    },
    {
      icon: Briefcase,
      title: "Full Stack Developer",
      subtitle: "InnovateCorp",
      year: "2023-Present",
      description: "Leading development of scalable web applications and mentoring junior developers",
    },
  ]

  const interests = [
    { icon: Code, label: "Open Source" },
    { icon: Palette, label: "Design" },
    { icon: Coffee, label: "Coffee" },
    { icon: Music, label: "Music" },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I'm a passionate developer who loves creating digital experiences that make a difference. With a strong
              foundation in both frontend and backend technologies, I enjoy tackling complex problems and turning ideas
              into reality.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Bio */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">My Story</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  My journey into tech started during college when I built my first website. What began as curiosity
                  quickly became a passion for creating beautiful, functional digital experiences.
                </p>
                <p>
                  Over the years, I've had the opportunity to work on diverse projects, from e-commerce platforms to
                  data visualization tools. Each project has taught me something new and reinforced my love for
                  continuous learning.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects,
                  or enjoying a good cup of coffee while listening to music.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 rounded-full text-sm font-medium transition-all duration-300 hover:bg-emerald-200 dark:hover:bg-emerald-800 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              Experience & Education
            </h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <Card
                  key={index}
                  className={`transition-all duration-500 hover:shadow-lg ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
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
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                          <span className="text-sm text-emerald-600 font-medium">{item.year}</span>
                        </div>
                        <p className="text-emerald-700 font-medium mb-2">{item.subtitle}</p>
                        <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div>
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
          </div>
        </div>
      </div>
    </section>
  )
}
