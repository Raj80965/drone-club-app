import { createFileRoute } from '@tanstack/react-router'
import TeamGrid from '../components/TeamGrid'

export const Route = createFileRoute('/team')({
  component: Team,
})

function Team() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-space font-bold text-white mb-6">Meet The Team</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          The brilliant minds driving the innovation at Drone & Robotics Club.
        </p>
      </div>
      <TeamGrid />
    </div>
  )
}
