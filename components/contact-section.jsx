"use client"

import React from "react"

import { useEffect, useRef, useState } from "react"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
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

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nipun.davasam.com",
      href: "#",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (945) 278-1790",
      href: "#",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Potsdam, NY",
      href: "#",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/username",
      color: "hover:text-gray-900",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/username",
      color: "hover:text-blue-600",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/username",
      color: "hover:text-blue-400",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:alex.johnson@email.com",
      color: "hover:text-emerald-600",
    },
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about
              technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            {/* <Card className="shadow-lg bg-white dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-gray-100">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1 focus:ring-emerald-500 focus:border-emerald-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-50"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1 focus:ring-emerald-500 focus:border-emerald-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-50"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="mt-1 focus:ring-emerald-500 focus:border-emerald-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-50"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3"
                    size="lg"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card> */}

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="shadow-lg bg-white dark:bg-gray-900">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 dark:text-gray-100">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div
                      key={info.label}
                      className={`flex items-center space-x-3 p-3 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950 transition-colors ${
                        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="flex-shrink-0">
                        {React.createElement(info.icon, { className: "w-5 h-5 text-emerald-600" })}
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                        <a
                          href={info.href}
                          className="text-gray-900 dark:text-gray-50 hover:text-emerald-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="shadow-lg bg-white dark:bg-gray-900">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 dark:text-gray-100">Connect With Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-3 p-3 rounded-lg border hover:shadow-md transition-all duration-300 ${social.color} dark:text-gray-50 dark:border-gray-700 hover:dark:shadow-emerald-500/30 ${
                          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        {React.createElement(social.icon, { className: "w-5 h-5" })}
                        <span className="font-medium">{social.label}</span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Call to Action */}
              {/* <div className="text-center p-6 bg-emerald-50 dark:bg-emerald-950 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Ready to work together?</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Let's discuss your project and see how I can help bring your ideas to life.
                </p>
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
                  <a href="mailto:alex.johnson@email.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Start a Conversation
                  </a>
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
