import { createFileRoute } from '@tanstack/react-router'
import ContactForm from '../components/ContactForm'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-space font-bold text-white mb-6">Contact Us</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Have questions, ideas, or want to join the club? Send us a message directly on WhatsApp.
        </p>
      </div>
      <ContactForm />
    </div>
  )
}
