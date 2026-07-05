import { createFileRoute } from '@tanstack/react-router'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import DomainCards from '../components/DomainCards'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div>
      <Hero />
      <Stats />
      <DomainCards />
    </div>
  )
}
