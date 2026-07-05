import { motion } from 'framer-motion'
import { useState } from 'react'
import { Send, MapPin, Mail, Phone } from 'lucide-react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [enrollment, setEnrollment] = useState('')
  const [contact, setContact] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const sendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `*New Contact Message*\n\n*Name:* ${name}\n*Email:* ${email}\n*Enrollment No:* ${enrollment}\n*Subject:* ${subject}\n\n*Message:*\n${message}`
    const phone = "917489391648"
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
    window.open(url, "_blank")
  }

  return (
    <div className="grid md:grid-cols-2 gap-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="glass-panel p-8 rounded-xl neon-border"
      >
        <h3 className="text-2xl font-space font-bold text-white mb-6">Send us a Message</h3>
        <form className="space-y-6" onSubmit={sendWhatsApp}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input type="text" placeholder="Your Name" value={name} onChange={e=>setName(e.target.value)} required className="w-full bg-navy/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric transition-colors" />
            </div>
            <div>
              <input type="email" placeholder="Your Email" value={email} onChange={e=>setEmail(e.target.value)} required className="w-full bg-navy/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric transition-colors" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input type="text" placeholder="Enrollment No." value={enrollment} onChange={e=>setEnrollment(e.target.value)} required className="w-full bg-navy/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric transition-colors" />
            </div>
            <div>
              <input type="tel" placeholder="Contact Number" value={contact} onChange={e=>setContact(e.target.value)} required className="w-full bg-navy/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric transition-colors" />
            </div>
          </div>
          <div>
            <input type="text" placeholder="Subject" value={subject} onChange={e=>setSubject(e.target.value)} className="w-full bg-navy/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric transition-colors" />
          </div>
          <div>
            <textarea rows={5} placeholder="Your Message" value={message} onChange={e=>setMessage(e.target.value)} required className="w-full bg-navy/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric transition-colors"></textarea>
          </div>
          <button type="submit" className="w-full bg-electric hover:bg-blue-600 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(59,130,246,0.4)]">
            <Send size={20} /> Send via WhatsApp
          </button>
        </form>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-8"
      >
        <div className="glass-panel p-8 rounded-xl neon-border">
          <h3 className="text-2xl font-space font-bold text-white mb-6">Contact Information</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-electric/20 p-3 rounded-lg"><MapPin className="text-electric" /></div>
              <div>
                <h4 className="font-bold text-white mb-1">Our Location</h4>
                <p className="text-gray-400">Sagar Institute of Science, Technology & Research (SISTec-R)<br/>Ratibad, Sikandarabad, Bhopal, Madhya Pradesh – 462044</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-electric/20 p-3 rounded-lg"><Mail className="text-electric" /></div>
              <div>
                <h4 className="font-bold text-white mb-1">Email Us</h4>
                <p className="text-gray-400">droneroboticsclub@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-electric/20 p-3 rounded-lg"><Phone className="text-electric" /></div>
              <div>
                <h4 className="font-bold text-white mb-1">Call Us</h4>
                <p className="text-gray-400">+91 7489391648</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel p-2 rounded-xl neon-border overflow-hidden h-64">
          <iframe 
            src="https://www.google.com/maps?q=Sagar+Institute+of+Science+Technology+and+Research+Ratibad+Bhopal&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }} 
            allowFullScreen={false} 
            loading="lazy"
          ></iframe>
        </div>
      </motion.div>
    </div>
  )
}
