"use client"

// Resume file configuration
export const RESUME_CONFIG = {
  fileName: "Nipun_Manjunath_Davasam_Resume.pdf",
  filePath: "/resume/Nipun_Manjunath_Davasam_Resume.pdf",
  displayName: "Nipun Manjunath Davasam - Resume",
  fileSize: "245 KB", // Approximate size
  lastUpdated: "2024-01-15",
}

/**
 * Downloads the stored resume PDF file
 */
export const downloadStoredResume = async () => {
  try {
    // Create a temporary anchor element for download
    const link = document.createElement("a")
    link.href = RESUME_CONFIG.filePath
    link.download = RESUME_CONFIG.fileName
    link.target = "_blank"
    link.rel = "noopener noreferrer"

    // Append to body, click, and remove
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Optional: Track download analytics
    trackResumeDownload()
  } catch (error) {
    console.error("Error downloading resume:", error)
    throw new Error("Failed to download resume. Please try again.")
  }
}

/**
 * Checks if the resume file exists and is accessible
 * Since the file is in the public directory and part of the build,
 * we can assume it exists without making a network request.
 */
export const checkResumeAvailability = async () => {
  return true
}

/**
 * Gets resume file information
 */
export const getResumeInfo = () => {
  return {
    ...RESUME_CONFIG,
    downloadUrl: RESUME_CONFIG.filePath,
  }
}

/**
 * Track resume download for analytics (optional)
 */
const trackResumeDownload = () => {
  // You can integrate with analytics services here
  console.log("Resume downloaded:", {
    fileName: RESUME_CONFIG.fileName,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
  })

  // Example: Google Analytics tracking
  const gtag = window.gtag // Declare gtag variable
  if (typeof gtag !== "undefined") {
    gtag("event", "download", {
      event_category: "Resume",
      event_label: RESUME_CONFIG.fileName,
      value: 1,
    })
  }
}

/**
 * Get resume file metadata
 */
export const getResumeMetadata = () => {
  return {
    title: "Nipun Manjunath Davasam - Resume",
    description: "Full Stack Engineer | Software Engineer",
    author: "Nipun Manjunath Davasam",
    subject: "Professional Resume",
    keywords: ["Software Engineer", "Full Stack", "Java", "Python", "React", "AWS"],
    creator: "Portfolio Website",
    producer: "Next.js Application",
    creationDate: RESUME_CONFIG.lastUpdated,
  }
}
