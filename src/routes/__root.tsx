import { createRootRoute, Outlet } from '@tanstack/react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-navy text-white font-dm bg-grid-pattern bg-[length:40px_40px]">
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  ),
})
