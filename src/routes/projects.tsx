import { createFileRoute } from '@tanstack/react-router'
import ProjectGallery from '../components/ProjectGallery'

export const Route = createFileRoute('/projects')({
  component: Projects,
})

function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-space font-bold text-white mb-6">Our Projects</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Explore our latest innovations across aerial, ground, and underwater robotics domains.
        </p>
      </div>
      <ProjectGallery />
    </div>
  )
}
