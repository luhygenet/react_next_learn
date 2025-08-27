"use client" // required because we use state and event handlers

import { useState } from "react"

export default function ChatPage() {
  const [input, setInput] = useState("")
  const [response, setResponse] = useState("")

  async function handleSubmit() {
    setResponse("") // clear previous response

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: [{ role: "user", content: input }],
      }),
    })

    if (!res.body) return

    const reader = res.body.getReader()
    const decoder = new TextDecoder()

    let text = ""
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      text += decoder.decode(value)
      setResponse(text) // append streamed text to UI
    }
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Chat with AI</h1>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={4}
        cols={50}
        placeholder="Type your message here..."
      />
      <br />
      <button onClick={handleSubmit} style={{ marginTop: "1rem" }}>
        Send
      </button>
      <pre style={{ marginTop: "2rem", whiteSpace: "pre-wrap" }}>{response}</pre>
    </div>
  )
}
