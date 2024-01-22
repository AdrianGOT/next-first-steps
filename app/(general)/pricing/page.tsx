import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Pricing page',
    description: 'Page to show product price ',
    keywords: ['Pricing page', 'Fernando', 'Information', 'Adrian']
}

export default function PricingPage() {
    return(
        <>
            <span>Pricing page!</span>
        </>
    )
}