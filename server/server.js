
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { GoogleGenAI } from '@google/genai'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
})

app.get('/', (req, res) => {
  res.json({ message: 'TravelMateNE AI server is running!' })
})

app.post('/api/itinerary', async (req, res) => {
  try {
    const {
      startingCity,
      destination,
      days,
      budget,
      travellers,
      interests,
    } = req.body

    if (!startingCity || !destination || !days || !budget) {
      return res.status(400).json({
        error: 'Please provide starting city, destination, days and budget.',
      })
    }

    const prompt = `
You are TravelMateNE, an expert travel planner for Northeast India.

Create a practical ${days}-day travel itinerary.

Starting city: ${startingCity}
Destination: ${destination}
Budget: ${budget}
Number of travellers: ${travellers || 1}
Interests: ${interests || 'Nature, culture and local food'}

Include:
1. A day-by-day itinerary.
2. Suggested places and experiences.
3. Approximate transport and food costs in INR.
4. Local food recommendations.
5. Travel tips and safety advice.
6. Important permit requirements, if applicable.

Be realistic about travel distances and timings.
Do not invent live prices, transport schedules or current opening hours.
Clearly mention that travellers should verify current details before departure.
Keep the response organised and easy to read.
`

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash-lite',
      contents: prompt,
    })

    res.json({
      success: true,
      itinerary: response.text,
    })

  } catch (error) {
    console.error('Gemini error:', error.message)

    res.status(500).json({
        error: 'Unable to generate your itinerary.',
        details: error.message,
    })
  }
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`TravelMateNE server running on port ${PORT}`)
})
