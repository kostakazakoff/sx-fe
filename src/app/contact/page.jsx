import ClientContact from './clientContact';

export const metadata = {
    title: 'Contact',
    description: 'Get in touch with Studio X for inquiries and quotes.',
    tags: ['contact', 'inquiries', 'construction', 'renovation', 'контакт', 'запитвания', 'строителство', 'ремонт'],
}

export default function ContactPage() {
    return (
        <div className="p-12">
            <ClientContact />
        </div>
    );
}