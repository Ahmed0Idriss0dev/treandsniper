import { google } from "@ai-sdk/google"
import { generateObject } from 'ai';
import { NextRequest } from 'next/server';
import { z } from "zod";


export async function POST(req: NextRequest) {
    const { prompt } = await req.json()
    const { object } = await generateObject({
        model: google("gemini-2.0-flash-exp", {
            useSearchGrounding: true,
        }),
        schema: z.object({
            product_name: z.string(),
            description: z.string(),
            target_audience: z.array(z.string()),
            trending_reason: z.object({
                market_demand: z.number().describe('analays the market domad per%') ,
                social_signals:z.number().describe('analays thesocial_signals per%')
            }),
            source_platform: z.array(z.string()),
            resale_platforms: z.array(z.string()),
            pricing: z.object({
                buy_price: z.number(),
                suggested_resale_price: z.number()
            }),
            estimated_profit_margin: z.string(), 
            unique_selling_points: z.array(z.string()),
            product_image: z.string().describe('Auto-scraped image URL from the provided product link')
        }),

        prompt: `Search the web and find the best trending digital products in the niche of [${prompt}] that are ideal for buying or reselling. Focus on products with strong online traction, high user engagement, and proven or potential profitability. Evaluate current trends across platforms like Etsy, Amazon, Gumroad, Shopify, and social media. Provide a concise report including:
                 1. Product Name and Description
                 2. Target Audience within the niche
                 3. Why it's currently trending (data or social signals)
                 4. Where to source or buy it (platform or website)
                 5. Potential Resale Platforms
                 6. Pricing (buy and suggested resale)
                 7. Estimated Profit Margin
                 8. Any unique selling points or competitive advantages
                 Ensure the data is fresh, ideally from the last 30-60 days, and prioritize products that align with current digital consumer behavior and demand."i need you to find 3 products`,
    });
    return Response.json({ object })
}

export async function GET(req: NextRequest) {

    return Response.json({ mess: 'hello world' })
}
