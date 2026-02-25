import { ImageResponse } from "next/og"
import { siteConfig } from "@/config/site"

export const runtime = "edge"

export const alt = siteConfig.name
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to bottom right, #1a1a1a, #000000)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid rgba(255,255,255,0.1)",
            borderRadius: "20px",
            padding: "40px",
            background: "rgba(255,255,255,0.05)",
          }}
        >
          <div style={{ fontSize: 80, fontWeight: "bold", color: "white", marginBottom: 20 }}>
            {siteConfig.name}
          </div>
          <div style={{ fontSize: 30, color: "#cbd5e1", textAlign: "center", maxWidth: 800 }}>
            {siteConfig.description}
          </div>
          <div
            style={{
              marginTop: 40,
              padding: "10px 30px",
              background: "#ea580c",
              color: "white",
              borderRadius: "50px",
              fontSize: 24,
            }}
          >
            Order Online
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
