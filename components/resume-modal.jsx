"use client";

import { useEffect, useRef } from "react";
import {
  X,
  Download,
  Mail,
  Phone,
  MapPin,
  Calendar,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function ResumeModal({ isOpen, onClose, onDownload }) {
  const contentRef = useRef(null);

  // Close modal on escape key and handle body scroll
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Scroll to top when modal opens
  useEffect(() => {
    if (isOpen && contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const contactInfo = {
    name: "Nipun Manjunath Davasam",
    title: "Full Stack Engineer | Software Engineer",
    email: "nipun.davasam@gmail.com",
    phone: "(945) 278-1790",
    location: "Potsdam, NY, USA",
    linkedin: "linkedin.com/in/nipun-davasam/",
    github: "GitHub",
  };

  const skills = {
    "Programming Languages": ["Java", "Python", "JavaScript"],
    "Technical Skills": ["Data Warehousing", "Web Scraping"],
    "Web Development": ["HTML5", "CSS", "React.js"],
    "Tools and Technologies": [
      "Postman",
      "GitHub",
      "JIRA",
      "Jenkins",
      "Docker",
      "Swagger",
      "Azure",
      "Maven",
      "Kafka",
      "Framer",
    ],
    Frameworks: ["Spring Boot", "Junit", "Flask"],
    "Cloud & Databases": ["AWS (EC2, S3, RDS)", "Firebase", "MySQL"],
    Certification: ["AWS Cloud Practitioner"],
  };

  const experience = [
    {
      company: "ORACLE CERNER",
      location: "Bengaluru, Karnataka, India",
      position: "Software Engineer",
      duration: "12/2021 - 07/2023",
      achievements: [
        "Redesigned backend service caching mechanism between the service layer and database, integrating Jenkins based CI/CD pipelines to automate deployment and testing, reducing release cycles by 25% and improving system performance by 30%",
        "Redesigned the UI of real-time medical data visualization, ensuring 100% visibility of patient vitals. Eliminated previous data loss issues, improving usability for healthcare personnel and hospitals by 60%",
        "Classified and rectified 40% of the code's CVEs (Common Vulnerabilities and Exposures) to comply with federal rules and requirements",
        "Collaborated with designers & product managers to refine UI/UX based on user feedback.",
      ],
    },
    {
      company: "INFOSYS",
      location: "Bengaluru, Karnataka, India",
      position: "Systems Engineer",
      duration: "01/2021 - 11/2021",
      achievements: [
        "Consumed RESTful APIs to develop and independently enhance the website's UI used by both the client and the organization.",
        "Added functionality to the website's UI that allowed users to dynamically create filters based on their needs and view raw data sent by networking devices, improving user satisfaction by 25%.",
        "Refactored the website architecture to support multiple backend services, improving code reusability and reducing onboarding time for new integrations by 40%",
      ],
    },
  ];

  const projects = [
    {
      title: "Integrated Data Warehouse and Web Application Development",
      organization: "Clarkson University",
      details: [
        "Designed and implemented an end-to-end ETL pipeline, leveraging Dimensional Database Modeling for seamless data integration.",
        "Developed a Flask-based web application to enable efficient database access and management.",
        "Optimized SQL queries, improving data retrieval performance and analytical capabilities.",
      ],
    },
    {
      title: "E-Prescription",
      organization: "Oracle Cerner",
      details: [
        "Developed a React web app, focusing on reusable UI components, responsive/pixel-perfect design, with a Spring Boot backend to streamline prescription record-keeping.",
        "Improved patient readability by adding dosage, duration, and ingestion time details.",
        "Enabled dynamic prescription modifications for doctors, ensuring accuracy and flexibility.",
      ],
    },
    {
      title: "Voice Enabled AI Website",
      organization: "",
      details: [
        "Developed a web app using React, Spring Boot, and AI-powered speech recognition for voice-based navigation and interaction.",
        "Integrated speech-to-text processing for real-time command execution and text-to-speech feedback for accessibility.",
        "Optimized for fast, accurate voice interactions using both client-side and backend AI models, deployed on the cloud for scalability and reliability.",
      ],
    },
  ];

  const education = [
    {
      degree: "Master of Science, Computer Science",
      institution: "Clarkson University, Potsdam, NY",
      duration: "08/2023 - 05/2025",
    },
    {
      degree: "Bachelor of Technology, Electronics and Communication",
      institution: "Amrita School of Engineering, Bengaluru, India",
      duration: "08/2016 - 08/2020",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-4xl max-h-[90vh] w-full mx-4 overflow-y-auto scroll-smooth">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Resume - {contactInfo.name}
          </h2>
          <div className="flex items-center gap-2">
            <Button
              onClick={onDownload}
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div
          ref={contentRef}
          className="overflow-y-auto max-h-[calc(90vh-80px)] p-6 scroll-smooth"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#10b981 #f3f4f6",
          }}
        >
          <div className="space-y-6 bg-white dark:bg-gray-900">
            {/* Header */}
            <div className="text-center border-b pb-6">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {contactInfo.name}
              </h1>
              <h2 className="text-xl text-emerald-600 font-semibold mb-4">
                {contactInfo.title}
              </h2>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  <span>{contactInfo.phone}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{contactInfo.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <ExternalLink className="w-4 h-4" />
                  <span>{contactInfo.linkedin}</span>
                </div>
                <span>IEEE | {contactInfo.github}</span>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 border-b border-emerald-200 pb-1">
                PROFESSIONAL SUMMARY
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Software Engineer with 3+ years of experience in developing
                scalable and high-performance web applications and backend
                services using Java, Python, Spring Boot, and React.js. Proven
                ability in microservices architecture, RESTful API design, and
                cloud-native application development on AWS.
              </p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 border-b border-emerald-200 pb-1">
                SKILLS
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {category}:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {items.map((skill, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Experience */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 border-b border-emerald-200 pb-1">
                PROFESSIONAL EXPERIENCE
              </h3>
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <Card key={index} className="border-l-4 border-l-emerald-500">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white">
                            {job.company}
                          </h4>
                          <p className="text-emerald-600 font-semibold">
                            {job.position}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {job.location}
                          </p>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span>{job.duration}</span>
                        </div>
                      </div>
                      <ul className="space-y-2 mt-3">
                        {job.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="text-gray-700 dark:text-gray-300 text-sm flex items-start"
                          >
                            <span className="text-emerald-600 mr-2">●</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 border-b border-emerald-200 pb-1">
                PROJECTS
              </h3>
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <Card key={index} className="border-l-4 border-l-emerald-500">
                    <CardContent className="p-4">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                        {project.title}
                        {project.organization && (
                          <span className="text-emerald-600 font-normal">
                            {" "}
                            ({project.organization})
                          </span>
                        )}
                      </h4>
                      <ul className="space-y-2 mt-2">
                        {project.details.map((detail, idx) => (
                          <li
                            key={idx}
                            className="text-gray-700 dark:text-gray-300 text-sm flex items-start"
                          >
                            <span className="text-emerald-600 mr-2">●</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 border-b border-emerald-200 pb-1">
                EDUCATION
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card key={index} className="border-l-4 border-l-emerald-500">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white">
                            {edu.degree}
                          </h4>
                          <p className="text-emerald-600">{edu.institution}</p>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.duration}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .overflow-y-auto::-webkit-scrollbar {
          width: 8px;
        }

        .overflow-y-auto::-webkit-scrollbar-track {
          background: #f3f4f6;
          border-radius: 4px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #10b981;
          border-radius: 4px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #059669;
        }

        .dark .overflow-y-auto::-webkit-scrollbar-track {
          background: #374151;
        }
      `}</style>
    </div>
  );
}
