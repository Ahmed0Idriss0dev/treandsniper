export interface Cardtype{
    product_name?:string
                description?: string,
                target_audience?: string[],
                trending_reason?: {

                    social_signals?: string[],
                    market_demand?: string
                } ,
            
                source_platform?: string[] | undefined,
                resale_platforms?: string ,
                pricing?: {
                    buy_price: number,
                    suggested_resale_price: number

                }
            
                estimated_profit_margin?: string, 
                unique_selling_points?:string,
                product_image?: string ,
}
export interface ProductsData{
    id:string ,
    ProductData:Cardtype[] ,
}
export interface ZutandsToretype{
    data:ProductsData[],
    isStarted:boolean ,
    isComplet:boolean ,
    setdate:(aregument:ProductsData)=> void
}