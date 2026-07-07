import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: '30+', label: 'Members' },
]

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 border-y border-white/5 bg-navy/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 max-w-sm mx-auto gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 rounded-2xl glass-panel neon-border hover:bg-white/5 transition-colors"
            >
              <div className="font-space font-bold text-5xl text-amber mb-2">{stat.value}</div>
              <div className="text-gray-400 font-medium uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
