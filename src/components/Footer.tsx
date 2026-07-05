import { Link } from '@tanstack/react-router'
import { Github, Linkedin, Instagram, Disc as Discord } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy/80 border-t border-white/10 pt-12 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Funding & Support Partners */}
        <div className="mb-16 text-center border-b border-white/10 pb-12">
          <h2 className="text-2xl font-space font-bold text-white mb-8">🤝 Our Funding & Support Partners</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <img src={`${import.meta.env.BASE_URL}image/team-photo/iste.png`} alt="ISTE" className="h-16 md:h-20 object-contain bg-white rounded-lg p-2" onError={(e) => { e.currentTarget.style.display = 'none' }} />
            <img src={`${import.meta.env.BASE_URL}image/team-photo/iic.png`} alt="Institution Innovation Council" className="h-16 md:h-20 object-contain bg-white rounded-lg p-2" onError={(e) => { e.currentTarget.style.display = 'none' }} />
            <img src={`${import.meta.env.BASE_URL}image/team-photo/sistec.png`} alt="SISTec College" className="h-16 md:h-20 object-contain bg-white rounded-lg p-2" onError={(e) => { e.currentTarget.style.display = 'none' }} />
            <img src={`${import.meta.env.BASE_URL}logo1.png`} alt="Drone and Robotics Club" className="h-16 md:h-20 object-contain" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-space font-bold text-2xl text-electric mb-2">Drone and Robotics Club</h3>
            <p className="text-white/80 font-medium mb-4">Innovation | Robotics | Drone Technology</p>
            <p className="text-gray-400 mb-6 max-w-md text-sm leading-relaxed">
              Sagar Institute of Science Technology & Engineering/ Research<br />
              Bhopal, Madhya Pradesh, India
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-electric transition-colors"><Discord size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-electric transition-colors"><Github size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-electric transition-colors"><Linkedin size={20} /></a>
              <a href="https://www.instagram.com/robotics_club_sistec" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-electric transition-colors"><Instagram size={20} /></a>
            </div>
          </div>
          <div>
            <h4 className="font-space font-semibold text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-electric">About Us</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-electric">Projects</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-electric">Events</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-electric">Gallery</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-electric">Team</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-space font-semibold text-lg mb-4 text-white">Join Community</h4>
            <a 
              href="https://whatsapp.com/channel/0029Vb0H7HgL7UVeWgxpmK1K" 
              target="_blank" 
              rel="noreferrer"
              className="inline-block bg-green-600 hover:bg-green-500 text-white rounded px-4 py-2 text-sm font-medium transition-colors"
            >
              💬 WhatsApp Channel
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Drone and Robotics Club. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
