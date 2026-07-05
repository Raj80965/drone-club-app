import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const domains = [
  { icon: '⚙️', title: 'Robotics', desc: 'Line follower, obstacle avoiding & smart robots.' },
  { icon: '🛩️', title: 'Drone Technology', desc: 'Drone assembly, flight control & safety.' },
  { icon: '📡', title: 'IoT & Electronics', desc: 'Sensors, motors, Arduino, ESP32 & circuits.' },
  { icon: '💻', title: 'Coding', desc: 'Software development and logic building.' },
  { icon: '🧠', title: 'AI & Machine Learning', desc: 'Basics of Python, data & machine learning concepts.' },
]

export default function DomainCards() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-space font-bold text-4xl mb-4 text-white">Our Domains & Learnings</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">We specialize in various interdisciplinary fields to build complete autonomous systems.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {domains.map((domain, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="w-full md:w-[30%] lg:w-[28%] glass-panel p-8 rounded-xl neon-border hover:bg-white/5 transition-colors group cursor-pointer text-center"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{domain.icon}</div>
                <h3 className="font-space font-bold text-xl mb-3 text-white">{domain.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{domain.desc}</p>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-24">
          <h2 className="font-space font-bold text-3xl mb-12 text-white text-center">Why Join Our Club?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {icon: '🎓', title: 'Practical Exposure', desc: 'Real-world projects beyond classroom learning.'},
              {icon: '🤝', title: 'Team Collaboration', desc: 'Work with seniors and juniors in a friendly environment.'},
              {icon: '🚀', title: 'Skill Development', desc: 'Improve technical, communication and leadership skills.'},
              {icon: '🏆', title: 'Events & Competitions', desc: 'Participate in hackathons, workshops and tech events.'}
            ].map((item, i) => (
              <motion.div key={i} className="glass-panel p-6 rounded-xl neon-border flex flex-col items-center text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
