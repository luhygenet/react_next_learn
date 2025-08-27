// app/api/chat/route.ts
import { NextRequest } from "next/server";
import OpenAI from "openai";

if (!process.env.OPENAI_API_KEY) {
  throw new Error("Missing OPENAI_API_KEY in environment variables");
}

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages,
    stream: true, // enable streaming
  });

  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      try {
        for await (const event of completion) {
          // OpenAI SDK types event as `any` for streaming
          if ("choices" in event) {
            const text = event.choices[0].delta?.content;
            if (text) controller.enqueue(encoder.encode(text));
          }
        }
      } catch (err) {
        console.error(err);
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream);
}
