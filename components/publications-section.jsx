"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, FileText, Calendar, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function PublicationsSection() {
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

  // Sample publications data - replace with your actual publications
  const publications = [
    {
      id: 1,
      title: "Smart Farming Using IoT and Machine Learning Techniques",
      authors: ["Sanjana G", "Nipun M Davasam", "N Mohan Krishna"],
      journal: "2020 IEEE Bangalore Humanitarian Technology Conference (B-HTC)",
      year: "2020",
      volume: "",
      issue: "",
      pages: "1-5",
      doi: "10.1109/B-HTC50970.2020.9297916",
      abstract:
        "This paper presents an IoT and machine learning-based solution for smart farming, aiming to improve crop yield and resource optimization through real-time data monitoring and analysis.",
      keywords: ["Smart Farming", "IoT", "Machine Learning", "Precision Agriculture"],
      type: "Conference Paper",
      status: "Published",
      url:  "https://doi.org/10.1109/B-HTC50970.2020.9297916",
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "Published":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "In Press":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "Under Review":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  const getTypeIcon = (type) => {
    switch (type) {
      case "Journal Article":
        return <FileText className="w-4 h-4" />
      case "Conference Paper":
        return <Users className="w-4 h-4" />
      default:
        return <Award className="w-4 h-4" />
    }
  }

  return (
    <section id="publications" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">IEEE Publications</h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
            {/* <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A collection of my research publications in IEEE journals and conferences, focusing on software
              engineering, healthcare technology, and web application development.
            </p> */}
          </div>

          {/* Publications List */}
          <div className="space-y-8 max-w-6xl mx-auto">
            {publications.map((publication, index) => (
              <Card
                key={publication.id}
                className={`hover:shadow-xl transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                        {publication.title}
                      </CardTitle>
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <Badge variant="outline" className="flex items-center gap-1">
                          {getTypeIcon(publication.type)}
                          {publication.type}
                        </Badge>
                        <Badge className={getStatusColor(publication.status)}>{publication.status}</Badge>
                        <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span>{publication.year}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        <strong>Authors:</strong> {publication.authors.join(", ")}
                      </p>
                      <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                        {publication.journal || publication.conference}
                        {publication.volume && `, Vol. ${publication.volume}`}
                        {publication.issue && `, Issue ${publication.issue}`}
                        {publication.pages && `, pp. ${publication.pages}`}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2 lg:flex-shrink-0">
                      <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700" asChild>
                        <a href={publication.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Paper
                        </a>
                      </Button>
                      {/* {publication.doi && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={`https://doi.org/${publication.doi}`} target="_blank" rel="noopener noreferrer">
                            DOI: {publication.doi.split(".").pop()}
                          </a>
                        </Button>
                      )} */}
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Abstract</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{publication.abstract}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Keywords</h4>
                      <div className="flex flex-wrap gap-2">
                        {publication.keywords.map((keyword, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200"
                          >
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>


        </div>
      </div>
    </section>
  )
}
