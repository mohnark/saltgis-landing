import { Card } from "@/components/ui/card"
import dynamic from "next/dynamic"

const MapClient = dynamic(() => import("@/components/site/MapClient"), { ssr: false })

export default function DemoPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Live Demo</h1>
      <p className="text-slate-600 mt-2">A lightweight MapLibre preview.</p>
      <Card className="mt-6 p-3">
        <MapClient />
      </Card>
    </main>
  )
} 