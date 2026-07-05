import { motion } from 'framer-motion'
import { useState } from 'react'

const categories = ['All', 'Aerial', 'Ground', 'Embedded']

const projects = [
  { title: 'Quadcopter Drone', category: 'Aerial', desc: 'Drone built for aerial control and learning.', stack: ['Betaflight', 'ESP32'], image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=800' },
  { title: 'Line Following Robot', category: 'Ground', desc: 'Robot that follows a black line using IR sensors.', stack: ['Arduino', 'IR Sensors'], image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800' },
  { title: 'Obstacle Avoiding Robot', category: 'Ground', desc: 'Robot that detects and avoids obstacles automatically.', stack: ['Arduino', 'Ultrasonic'], image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800' },
  { title: 'Metal Detector Robot', category: 'Ground', desc: 'Detects underground metal objects.', stack: ['Arduino', 'Coil Sensor'], image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80&w=800' },
  { title: 'ESP32 Smart Street Light', category: 'Embedded', desc: 'Automatic street light using sensors and ESP32.', stack: ['ESP32', 'LDR'], image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800' },
  { title: 'IoT Home Automation', category: 'Embedded', desc: 'Control home appliances using mobile.', stack: ['IoT', 'NodeMCU'], image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800' },
]

export default function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory)

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              activeCategory === cat 
                ? 'bg-electric text-white shadow-[0_0_15px_rgba(59,130,246,0.6)]' 
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((project) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="group glass-panel rounded-xl overflow-hidden neon-border block"
          >
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors z-10" />
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <span className="text-amber text-xs font-bold uppercase tracking-wider mb-2 block">{project.category}</span>
              <h3 className="text-xl font-space font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-6">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map(tech => (
                  <span key={tech} className="bg-electric/20 text-blue-300 px-2 py-1 rounded text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
