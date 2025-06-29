// app/layout.jsx
"use client";
import "./globals.css";
import Script from "next/script";
import { useEffect } from "react";

export default function RootLayout({ children }) {
  useEffect(() => {
    window.difyChatbotConfig = {
      token: "VeBBFkR8ZEajooh9",
      systemVariables: {},
      userVariables: {},
    };

    const styleId = "dify-chatbot-style";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.innerHTML = `
        #dify-chatbot-bubble-button {
          background-color: #1C64F2 !important;
        }
        #dify-chatbot-bubble-window {
          width: 24rem !important;
          height: 40rem !important;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <Script
          src="https://udify.app/embed.min.js"
          id="VeBBFkR8ZEajooh9"
          strategy="afterInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
