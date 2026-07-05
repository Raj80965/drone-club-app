import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { Link } from '@tanstack/react-router'

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-16">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-space font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6 text-white">
            Drone and Robotics Club
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-electric mb-6 max-w-3xl mx-auto font-dm font-bold tracking-widest uppercase text-sm">
            Innovation | Robotics | Drone Technology
          </p>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-dm">
            Drone and Robotics Club is a technical student community where members learn, build, and innovate using robotics, drones, electronics, and automation technologies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link 
            to="/contact" 
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-electric rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-electric"
          >
            Join the Club
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 max-w-7xl mx-auto px-4 w-full"
      >
        <h2 className="text-3xl font-space font-bold text-center text-white mb-8">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            {icon: '🤖', title: 'Robotics Projects', desc: 'Design and build smart robots using sensors and controllers.'},
            {icon: '🚁', title: 'Drone Technology', desc: 'Assemble, test and fly drones with real-world applications.'},
            {icon: '🌐', title: 'IoT & Automation', desc: 'Create smart systems using ESP32, sensors and automation.'},
            {icon: '🛠', title: 'Hands-on Workshops', desc: 'Learn practically through workshops, events and competitions.'},
            {icon: '👥', title: 'Peer Learning', desc: 'Learn together by sharing knowledge and collaborating.'}
          ].map((item, i) => (
            <div key={i} className="glass-panel p-6 rounded-xl neon-border text-center hover:bg-white/5 transition-colors">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
