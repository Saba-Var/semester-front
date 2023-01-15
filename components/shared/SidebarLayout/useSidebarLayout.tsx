import { useState } from 'react'

export const useSidebarLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return { sidebarOpen, setSidebarOpen }
}
