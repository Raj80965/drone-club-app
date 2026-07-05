import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'

export default function EventsList() {
  return (
    <div>
      <div className="space-y-6">
        {/* STATIC EVENT */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel p-6 sm:p-8 rounded-xl neon-border flex flex-col md:flex-row gap-6"
        >
          <div className="w-full md:w-64 h-48 rounded-lg overflow-hidden shrink-0">
            <img src={`${import.meta.env.BASE_URL}image/events/line-following-workshop/workshop1.jpg`} alt="Workshop" className="w-full h-full object-cover bg-navy/50" onError={(e) => { e.currentTarget.src = `${import.meta.env.BASE_URL}logo1.png` }} />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-2xl font-space font-bold text-white mb-2">Line Following Robot Workshop</h3>
            <div className="flex items-center gap-2 text-sm text-electric mb-4">
              <Calendar size={16} /> December 27, 2025
            </div>
            <p className="text-gray-400 mb-6">Our first workshop on Line Following Robot where students learned robotics basics, sensors and hands-on robot building.</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
