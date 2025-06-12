"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Github, ExternalLink, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Target E-Commerce Sales Data",
      description:
        "This project leverages the e-commerce dataset from Kaggle to extract valuable insights and identify trends that can inform and optimize business strategies. The dataset includes various attributes such as customer demographics, product details, and transaction data, which are essential for understanding behavior and sales patterns.",
      image: "/public/target-sales.png",
      technologies: ["Flask", "Python", "MySQL", "Pandas", "Matplotlib"],
      githubUrl: "https://github.com/nipun-davasam/IA626_NIPUN_DEVA_JSP",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "This app is a simplified project management tool. It allows users to create, track, and manage tasks across various stages of a project. The app includes features for task creation, categorization, assignment, and status tracking, enabling teams to collaborate and stay organized.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: [
        "Flask",
        "Python",
        "MySQL",
        "Pandas",
        "Framer",
        "Material UI",
      ],
      githubUrl:
        "https://github.com/Clarkson-Applied-Data-Science/IA637-NIPUN_DEVA",
    },
    {
      id: 3,
      title: "MALARIA DETECTION USING NEURAL NETWORK",
      description:
        "The neural network model architecture employed for malaria detection is based on Convolutional Neural Networks (CNNs). CNNs are well-suited for image classification tasks due to their ability to learn hierarchical features directly from raw pixel data. The model is designed to learn discriminative features from cell images and classify them into infected or uninfected classes.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Pytton", "Tensorflow", "Keras", "Matplotlib", "Seaborn "],
      githubUrl:
        "https://github.com/nipun-davasam/IA651-Applied-Machine-Learning",
    },
    {
      id: 4,
      title: "Computer Vision Projects",
      description: "My academic coursework related to computer vision",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["MATLAB", "Open CV", "Matrices", "Linear Algebra"],
      githubUrl: "https://github.com/nipun-davasam/Computer-Vision",
    },
    {
      id: 5,
      title: "NYC_Taxi-_trips_Part",
      description:
        "A modern, responsive portfolio website with smooth animations and optimized performance.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Python", "Matplotlib", "Numpy", "Folium"],
      githubUrl:
        "https://github.com/Clarkson-Applied-Data-Science/IA626_Nipun_NYC_Taxi-_trips_Part1",
    },
  ];

  // const categories = ["All", "Full Stack", "Frontend", "Backend"];

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

  useEffect(() => {
    if (selectedFilter === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === selectedFilter)
      );
    }
  }, [selectedFilter]);

  return (
    <section
      id="projects"
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              passion for development.
            </p>
          </div>

          {/* Filter Buttons */}
          {/* <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedFilter === category ? "default" : "outline"}
                onClick={() => setSelectedFilter(category)}
                className={`${
                  selectedFilter === category
                    ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                    : "hover:bg-emerald-50 hover:border-emerald-300 dark:hover:bg-emerald-900 dark:hover:border-emerald-700 dark:text-gray-300"
                }`}
              >
                <Filter className="w-4 h-4 mr-2" />
                {category}
              </Button>
            ))}
          </div> */}

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className={`group hover:shadow-xl transition-all duration-300 overflow-hidden dark:bg-gray-800 dark:border-gray-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                        <Button size="sm" variant="secondary" asChild>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>
                        {/* {project.liveUrl && (
                          <Button size="sm" variant="secondary" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </Button>
                        )} */}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-emerald-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 dark:bg-emerald-900 dark:text-emerald-200 dark:hover:bg-emerald-800"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-center items-center">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="w-20"
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {/* {project.liveUrl && (
                      <Button size="sm" className="flex-1 bg-emerald-600 hover:bg-emerald-700" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )} */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-emerald-50 hover:border-emerald-300 dark:hover:bg-emerald-900 dark:hover:border-emerald-700 dark:text-gray-300"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
