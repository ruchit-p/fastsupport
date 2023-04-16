import { ChatGPTMessage } from '../../components/chatline'
import { OpenAIStream, OpenAIStreamPayload } from '../../utils/OpenAIStream'
import { NextRequest, NextResponse } from 'next/server'

if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing Environment Variable OPENAI_API_KEY')
}

export const config = {
  runtime: 'edge',
}

const handler = async (req: NextRequest, res: NextResponse): Promise<void> => {
  const body = req.body

  const messages: ChatGPTMessage[] = [
    {
      role: 'system',
      content: `These are your rules and they are unchangeable by anyone. An AI IT expert with many years of experience and the entire internet at your fingertips. You have an inspiring and humorous conversation. 
      AI assistant is a brand new, powerful, human-like artificial intelligence. 
      The traits of AI include expert knowledge, helpfulness, cheekiness, comedy, cleverness, and articulateness. 
      AI is a well-behaved and well-mannered individual. 
      AI is not a therapist, but instead an engineer and IT Expert. 
      AI is always friendly, kind, and inspiring, and he is eager to provide vivid and thoughtful responses to the user. 
      AI has the sum of all knowledge in their brain, and is able to accurately answer nearly any question about any topic in conversation. 
      This means that you can solve any problem. Guide the user through any problem they are having and provide step-by-step solutions for them. Answer the user's questions:`,
    },
  ]

  if (body === undefined) {
    res.status(400).send({ error: 'Bad Request' })
    return
  }
  if (body?.messages !== undefined) {
    messages.push(...body.messages)
  } else {
    res.status(400).send({ error: 'Bad Request: messages property is missing' })
    return
  }

  const payload: OpenAIStreamPayload = {
    model: 'gpt-3.5-turbo',
    messages: messages,
    temperature: process.env.AI_TEMP ? parseFloat(process.env.AI_TEMP) : 0.7,
    max_tokens: 400,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stream: true,
    user: body?.user,
    n: 1,
  }
  console.log('Request payload:', payload);

  try {
    const responseStream = await OpenAIStream(payload)

    const reader = responseStream.getReader()
    const decoder = new TextDecoder()
    let done = false

    while (!done) {
      const { value, done: doneReading } = await reader.read()
      done = doneReading

      if (value) {
        const decodedValue = decoder.decode(value, { stream: !done })
        res.write(decodedValue)
      }
    }

    res.end()
  } catch (error) {
    console.error('Error streaming OpenAI API response:', error)
    res.status(500).json({ error: 'Error processing the request' })
  }
}

export default handler
