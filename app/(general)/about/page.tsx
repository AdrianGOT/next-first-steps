import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'SEO Title',
    description: 'SEO Description',
    keywords: ['About page', 'Fernando', 'Information', 'Adrian']
}

export default function AboutPage(){
    return(
        <main>
            <span >About page!</span>
        </main>
    )
} 