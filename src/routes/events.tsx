import { createFileRoute } from '@tanstack/react-router'
import EventsList from '../components/EventsList'

export const Route = createFileRoute('/events')({
  component: Events,
})

function Events() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-space font-bold text-white mb-6">Upcoming Events</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Join our workshops, hackathons, and guest lectures to upskill and network.
        </p>
      </div>
      <EventsList />
    </div>
  )
}
