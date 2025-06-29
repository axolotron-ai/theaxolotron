"use client";
import { useEffect } from "react";

export default function Chatbot() {
    useEffect(() => {
        window.difyChatbotConfig = {
            token: "VeBBFkR8ZEajooh9",
            systemVariables: {},
            userVariables: {},
        };

        const scriptId = "dify-chatbot-script";
        if (!document.getElementById(scriptId)) {
            const script = document.createElement("script");
            script.src = "https://udify.app/embed.min.js";
            script.id = scriptId;
            script.defer = true;
            document.body.appendChild(script);
        }

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

    return null;
}
