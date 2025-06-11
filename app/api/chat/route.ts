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
                market_demand: z.number().describe('analays the market domad per%'),
                social_signals: z.number().describe('analays thesocial_signals per%')
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
        system: `    Search the web and identify 3 trending digital products within a specific niche that are ideal for buying or reselling. Focus on products that:
        Have strong online traction (high search volume, trending tags, popular listings)
        Show high user engagement (likes, shares, saves, reviews)
        Have proven or high potential profitability
    Evaluate recent trends across platforms such as:
        Etsy, Amazon, Gumroad, Shopify
        Social media platforms (Instagram, TikTok, Pinterest, Twitter)
    For each product, provide a concise report including:
    Product Name & Description
    Target Audience
    Why It’s Currently Trending (include social signals or search demand if available)
    Where to Source or Buy It (with a link to the platform or product)
    Recommended Resale Platforms
    Pricing Details (buy price and suggested resale price)
    Estimated Profit Margin
    Unique Selling Points or Competitive Advantages
    Relevant Image(s) (1 image per product showing example or aesthetic)
    Link to Product or Store Page
    ✅ Summarize the findings in a comparison table for quick evaluation.
    ✅ Include links and product images when available to improve clarity and visualization.
    ✅ Ensure all data is current (within the last 30–60 days) and focused on what aligns with modern consumer digital buying behavior.`,
        prompt: prompt,
    });
    return Response.json({ object })
}

export async function GET(req: NextRequest) {

    return Response.json({ mess: 'hello world' })
}
