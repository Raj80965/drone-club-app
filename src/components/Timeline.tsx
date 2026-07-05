import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div className="py-12" ref={ref}>
      <h2 className="text-3xl font-space font-bold mb-12 text-center text-white">Club Inauguration</h2>
      <div className="relative max-w-4xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="glass-panel p-8 rounded-xl neon-border hover:bg-white/5 transition-colors text-center"
        >
          <span className="text-amber font-space font-bold text-3xl mb-4 block">27 December 2025</span>
          <p className="text-gray-300 text-lg mb-6">
            The <strong>Drone and Robotics Club</strong> was officially inaugurated with the vision of promoting innovation, hands-on learning, and emerging technologies among engineering students.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-400">
            <div className="bg-navy/50 p-4 rounded-lg">
              <strong className="text-white block mb-1">📍 Venue</strong>
              SISTec-R Campus, Bhopal
            </div>
            <div className="bg-navy/50 p-4 rounded-lg">
              <strong className="text-white block mb-1">🎤 Inaugurated By</strong>
              Principal & Management, SISTec-R
            </div>
            <div className="bg-navy/50 p-4 rounded-lg">
              <strong className="text-white block mb-1">🎯 Objective</strong>
              Encourage robotics, drones, IoT & practical engineering skills
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
