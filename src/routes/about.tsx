import { createFileRoute } from '@tanstack/react-router'
import Timeline from '../components/Timeline'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-space font-bold text-white mb-6">About Us</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Drone and Robotics Club is a technical student club focused on robotics, drones, and modern technologies. The club provides hands-on learning opportunities to students.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <div className="glass-panel p-8 rounded-xl neon-border">
          <h2 className="text-2xl font-space font-bold text-electric mb-4">Mission & Vision</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Mission</h3>
              <p className="text-gray-400">To develop practical skills in robotics, drones, and automation through hands-on projects and activities.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Vision</h3>
              <p className="text-gray-400">To create future-ready engineers through innovation, creativity, and real-world problem solving.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Why This Club Was Formed</h3>
              <p className="text-gray-400">This club was formed to help students gain practical knowledge beyond classroom learning and to encourage innovation and teamwork.</p>
            </div>
          </div>
        </div>
        
        <div className="glass-panel p-8 rounded-xl neon-border">
          <h2 className="text-2xl font-space font-bold text-electric mb-4">About Our College</h2>
          <p className="text-gray-400 mb-6">
            <strong className="text-white">Sagar Institute of Science, Technology & Engineering (SISTec-E)</strong> is one of the premier technical institutions in Bhopal, Madhya Pradesh, dedicated to excellence in engineering, innovation, and research.
          </p>
          <ul className="text-gray-400 space-y-3">
            <li><strong className="text-white">📍 Location:</strong> Ratibad, Bhopal, Madhya Pradesh – 462044</li>
            <li><strong className="text-white">🎓 Affiliated To:</strong> Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)</li>
            <li><strong className="text-white">🏛️ Approved By:</strong> AICTE, New Delhi</li>
            <li><strong className="text-white">📚 Courses Offered:</strong> B.Tech, Pharmacy, Managements</li>
            <li><strong className="text-white">🏆 Focus Areas:</strong> Engineering, Innovation, Research & Entrepreneurship</li>
          </ul>
        </div>
      </div>

      <Timeline />
    </div>
  )
}
