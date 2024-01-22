import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Contact page',
    description: 'Page to show company contact',
    keywords: ['Contact page', 'Fernando', 'Information', 'Adrian']
}

export default function ContactPage(){
    return(
        <>
            <span>Contact page !</span>
        </>
    )
}