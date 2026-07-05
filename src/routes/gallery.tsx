import { createFileRoute } from '@tanstack/react-router'
import { motion, AnimatePresence } from 'framer-motion'
import { Folder, Video, X } from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/gallery')({
  component: Gallery,
})

const galleries = [
  { id: 'line-following-workshop', title: 'Line Following Workshop', date: '27 December 2025', icon: '📸', isVideo: false },
  { id: 'club-inauguration', title: 'Club Inauguration', date: '27 December 2025', icon: '📸', isVideo: false },
  { id: 'old-videos', title: 'Other College Old Videos', date: 'Previous College Events', icon: '🎬', isVideo: true },
  { id: 'ies-collage-event', title: 'IES Collage Event', date: '27 December 2025', icon: '📸', isVideo: false },
  { id: 'iit-kharagpur', title: 'IIT Kharagpur – Kshitij', date: '16-18 January 2026', icon: '📂', isVideo: false },
  { id: 'iiit-bhopal', title: 'IIIT Bhopal Visit', date: '20 Feb 2026', icon: '📂', isVideo: false },
  { id: 'ieee-stb-sistec-e-bhopal', title: 'IEEE STB SISTec E', date: '20 Feb 2026', icon: '📂', isVideo: false },
  { id: 'iit-kanpur', title: 'IIT Kanpur Visit', date: 'Academic / Industrial Visit', icon: '📂', isVideo: false },
  { id: 'iit-bombay', title: 'IIT Bombay Visit', date: 'Academic / Industrial Visit', icon: '📂', isVideo: false },
]

function Gallery() {
  const [selectedEvent, setSelectedEvent] = useState<typeof galleries[0] | null>(null)
  const [fullscreenMedia, setFullscreenMedia] = useState<string | null>(null)

  // Pre-generate arrays for 30 images and 10 videos
  const imageNumbers = Array.from({ length: 30 }, (_, i) => i + 1)
  const videoNumbers = Array.from({ length: 10 }, (_, i) => i + 1)

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-space font-bold text-white mb-6">📸 Event Gallery</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Explore the memories, workshops, and industrial visits of the Drone and Robotics Club.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleries.map((gal, idx) => (
          <motion.div
            key={gal.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            className="glass-panel p-6 rounded-xl neon-border hover:-translate-y-2 transition-transform cursor-pointer group flex flex-col items-center justify-between"
            onClick={() => setSelectedEvent(gal)}
          >
            <div className="text-5xl mb-4">{gal.icon}</div>
            <h3 className="text-xl font-space font-bold text-white text-center mb-2">{gal.title}</h3>
            <p className="text-gray-400 text-sm text-center mb-6">📅 {gal.date}</p>
            
            <button className="bg-electric/20 group-hover:bg-electric text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2">
              {gal.isVideo ? <Video size={18} /> : <Folder size={18} />}
              {gal.isVideo ? 'View Videos' : 'View Photos'}
            </button>
          </motion.div>
        ))}
      </div>

      {/* EVENT MODAL */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 overflow-y-auto"
          >
            <div className="absolute top-4 right-4 z-50">
               <button onClick={() => setSelectedEvent(null)} className="text-white bg-white/10 hover:bg-red-500 p-2 rounded-full transition-colors">
                 <X size={32} />
               </button>
            </div>

            <div className="max-w-6xl w-full my-auto">
              <h2 className="text-3xl font-space font-bold text-electric text-center mb-8">{selectedEvent.title}</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {selectedEvent.isVideo ? (
                  videoNumbers.map(num => (
                    <video
                      key={num}
                      src={`${import.meta.env.BASE_URL}image/events/${selectedEvent.id}/${num}.mp4`}
                      className="w-full h-48 object-cover rounded-lg border border-white/10 cursor-pointer hover:border-electric transition-colors"
                      muted
                      playsInline
                      preload="metadata"
                      onClick={(e) => setFullscreenMedia((e.target as HTMLVideoElement).src)}
                      onError={(e) => { e.currentTarget.style.display = 'none' }}
                    />
                  ))
                ) : (
                  imageNumbers.map(num => (
                    <img
                      key={num}
                      src={`${import.meta.env.BASE_URL}image/events/${selectedEvent.id}/${num}.jpg`}
                      className="w-full h-48 object-cover rounded-lg border border-white/10 cursor-pointer hover:border-electric transition-colors"
                      onClick={(e) => setFullscreenMedia((e.target as HTMLImageElement).src)}
                      onError={(e) => { e.currentTarget.style.display = 'none' }}
                    />
                  ))
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FULLSCREEN MEDIA VIEWER */}
      <AnimatePresence>
        {fullscreenMedia && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4"
            onClick={() => setFullscreenMedia(null)}
          >
            <button className="absolute top-4 right-4 text-white bg-white/10 hover:bg-red-500 p-2 rounded-full transition-colors z-50" onClick={() => setFullscreenMedia(null)}>
               <X size={32} />
            </button>
            
            {fullscreenMedia.endsWith('.mp4') ? (
               <video src={fullscreenMedia} controls autoPlay className="max-w-full max-h-[90vh] rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()} />
            ) : (
               <img src={fullscreenMedia} className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain" onClick={(e) => e.stopPropagation()} />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
