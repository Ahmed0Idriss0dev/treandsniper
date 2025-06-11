import { NextRequest } from "next/server";
import { any } from "zod";

export async function POST(req: NextRequest) {
    const {license_key} = await req.json() 
    const Url = 'https://api.gumroad.com/v2/licenses/verify';
    const product_id = '4KRRU1DLCekQlo2-Ov42eg==';
    try {
        const response = await fetch(Url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                product_id: '4KRRU1DLCekQlo2-Ov42eg==',
                license_key: '002A3608-A1D34F7A-AB1A77A7-F1EBA307',
            })
        })
        const data = await response.json()
        console.log(data)
        return Response.json({ data })
    } catch (error) {

    }
}