"use client";

import { useEffect, useRef, useState } from "react";
import { Download, FileText, ExternalLink, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ResumeModal } from "@/components/resume-modal";
import {
  getResumeInfo,
  checkResumeAvailability,
  downloadStoredResume,
} from "@/lib/resume-storage";

export function ResumeSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isResumeAvailable, setIsResumeAvailable] = useState(true);
  const [isDownloading, setIsDownloading] = useState(false);
  const sectionRef = useRef(null);

  const resumeInfo = getResumeInfo();

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
    // Check if resume file is available
    const checkAvailability = async () => {
      try {
        const available = await checkResumeAvailability();
        setIsResumeAvailable(available);
      } catch (error) {
        console.error("Error checking resume availability:", error);
        // If there's an error checking availability, assume the file is available
        // since it's part of the public directory
        setIsResumeAvailable(true);
      }
    };

    checkAvailability();
  }, []);

  const handleViewFull = () => {
    setIsModalOpen(true);
  };

  const handleDownloadPDF = async () => {
    const handleDownloadPDF = async () => {
      if (!isResumeAvailable) {
        alert("Resume file is currently unavailable. Please try again later.");
        return;
      }
    };

    setIsDownloading(true);
    try {
      await downloadStoredResume();
    } catch (error) {
      console.error("Error downloading PDF:", error);
      alert("Error downloading resume. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <>
      <section
        id="resume"
        ref={sectionRef}
        className="py-20 bg-gray-50 dark:bg-gray-800"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Resume
              </h2>
              <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                View my complete resume or download the PDF to learn more about
                my experience, skills, and achievements.
              </p>
            </div>

            {/* Resume Availability Alert */}
            {!isResumeAvailable && (
              <div className="max-w-4xl mx-auto mb-6">
                <Alert className="border-yellow-200 bg-yellow-50 dark:bg-yellow-900/20">
                  <AlertCircle className="h-4 w-4 text-yellow-600" />
                  <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                    Resume file is currently being loaded. Some features may be
                    temporarily unavailable.
                  </AlertDescription>
                </Alert>
              </div>
            )}

            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden shadow-lg">
                <CardContent className="p-0">
                  {/* Resume Preview */}
                  <div className="bg-white dark:bg-gray-900 p-8 border-b">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <FileText className="w-8 h-8 text-emerald-600" />
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                            {resumeInfo.displayName}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            Full Stack Engineer | Software Engineer
                          </p>
                          <div className="flex items-center gap-4 mt-2">
                            {/* <Badge variant="secondary" className="text-xs">
                              {resumeInfo.fileSize}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              PDF Format
                            </Badge>
                            <span className="text-xs text-gray-500">
                              Updated: {new Date(resumeInfo.lastUpdated).toLocaleDateString()}
                            </span> */}
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-3">
                        <Button
                          variant="outline"
                          className="hover:bg-emerald-50 dark:hover:bg-emerald-900"
                          onClick={handleViewFull}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Full
                        </Button>
                        <Button
                          className="bg-emerald-600 hover:bg-emerald-700"
                          onClick={handleDownloadPDF}
                          disabled={!isResumeAvailable || isDownloading}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          {isDownloading ? "Downloading..." : "Download PDF"}
                        </Button>
                      </div>
                    </div>

                    {/* Resume Preview Content */}
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 min-h-[600px] relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-white dark:from-gray-700 to-gray-100 dark:to-gray-800 opacity-50"></div>
                      <div className="relative z-10">
                        {/* Simulated Resume Content */}
                        <div className="space-y-6">
                          <div className="text-center border-b pb-4">
                            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                              Nipun Manjunath Davasam
                            </h1>
                            <p className="text-gray-600 dark:text-gray-400">
                              Full Stack Engineer | Software Engineer
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              nipun.davasam@gmail.com | (945) 278-1790 |
                              Potsdam, NY, USA
                            </p>
                          </div>

                          <div>
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 border-b border-gray-300 dark:border-gray-600">
                              Professional Summary
                            </h2>
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                              Software Engineer with 3+ years of experience in
                              developing scalable and high-performance web
                              applications and backend services using Java,
                              Python, Spring Boot, and React.js. Proven ability
                              in microservices architecture, RESTful API design,
                              and cloud-native application development on AWS.
                            </p>
                          </div>

                          <div>
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 border-b border-gray-300 dark:border-gray-600">
                              Experience
                            </h2>
                            <div className="space-y-3">
                              <div>
                                <h3 className="font-medium text-gray-900 dark:text-gray-100">
                                  Software Engineer - Oracle Cerner
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                  12/2021 - 07/2023
                                </p>
                                <ul className="text-sm text-gray-700 dark:text-gray-300 mt-1 space-y-1">
                                  <li>
                                    • Redesigned backend service caching
                                    mechanism, reducing release cycles by 25%
                                  </li>
                                  <li>
                                    • Improved system performance by 30% through
                                    CI/CD pipeline integration
                                  </li>
                                </ul>
                              </div>
                              <div>
                                <h3 className="font-medium text-gray-900 dark:text-gray-100">
                                  Systems Engineer - Infosys
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                  01/2021 - 11/2021
                                </p>
                                <ul className="text-sm text-gray-700 dark:text-gray-300 mt-1 space-y-1">
                                  <li>
                                    • Enhanced website UI using RESTful APIs
                                  </li>
                                  <li>
                                    • Improved user satisfaction by 25% through
                                    dynamic filtering
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 border-b border-gray-300 dark:border-gray-600">
                              Education
                            </h2>
                            <div className="space-y-2">
                              <div>
                                <h3 className="font-medium text-gray-900 dark:text-gray-100">
                                  Master of Science, Computer Science
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                  Clarkson University, Potsdam, NY (08/2023 -
                                  05/2025)
                                </p>
                              </div>
                              <div>
                                <h3 className="font-medium text-gray-900 dark:text-gray-100">
                                  Bachelor of Technology, Electronics and
                                  Communication
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                  Amrita School of Engineering, Bengaluru, India
                                  (08/2016 - 08/2020)
                                </p>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 border-b border-gray-300 dark:border-gray-600">
                              Skills
                            </h2>
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                              Java, Python, JavaScript, React.js, Spring Boot,
                              AWS, Docker, Jenkins, MySQL...
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Download Section */}
                  <div className="bg-emerald-50 dark:bg-emerald-950 p-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between">
                      <div className="mb-4 sm:mb-0">
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                          Ready to learn more?
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          View the complete resume or download the PDF version.
                        </p>
                      </div>
                      <div className="flex space-x-3">
                        <Button
                          size="lg"
                          variant="outline"
                          onClick={handleViewFull}
                          className="hover:bg-emerald-100 dark:hover:bg-emerald-900"
                        >
                          <ExternalLink className="w-5 h-5 mr-2" />
                          View Full Resume
                        </Button>
                        <Button
                          size="lg"
                          className="bg-emerald-600 hover:bg-emerald-700"
                          onClick={handleDownloadPDF}
                          disabled={!isResumeAvailable || isDownloading}
                        >
                          <Download className="w-5 h-5 mr-2" />
                          {isDownloading ? "Downloading..." : "Download PDF"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onDownload={handleDownloadPDF}
      />
    </>
  );
}
