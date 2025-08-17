'use client'

import { useEffect, useRef } from 'react'

export default function MapClient() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    // Dynamically import MapLibre to avoid SSR issues
    const initMap = async () => {
      try {
        const maplibregl = (await import('maplibre-gl')).default
        await import('maplibre-gl/dist/maplibre-gl.css')

        const map = new maplibregl.Map({
          container: ref.current!,
          style: 'https://demotiles.maplibre.org/style.json',
          center: [24.7536, 59.4370], // Tallinn
          zoom: 10,
        })

        map.addControl(
          new maplibregl.NavigationControl({ visualizePitch: true }),
          'top-right'
        )

        return () => map.remove()
      } catch (error) {
        console.error('Failed to load MapLibre:', error)
      }
    }

    initMap()
  }, [])

  return <div ref={ref} className="h-[60vh] w-full rounded-2xl" />
} 