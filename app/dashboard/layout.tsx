import type { ReactNode } from "react"
import { Sidebar } from "@/components/dashboard/sidebar"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-background p-2">
      <Sidebar />

      <main className="relative ml-2 flex-1 overflow-y-auto rounded-lg border-0 bg-card px-7 py-6">
        {children}
      </main>
    </div>
  )
}
