'use client'

import { useEffect } from 'react'

export function ThemeScript() {
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      document.documentElement.classList.contains('light')
    ) {
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
    }
  }, [])

  return null
}
