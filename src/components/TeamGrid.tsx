import { motion } from 'framer-motion'
import { Linkedin, Instagram, Mail, Phone } from 'lucide-react'

const team = [
  // Institute Advisory Members
  { 
    name: 'Dr. Jyoti Deshmukh', role: 'Director', category: 'Institute Advisory Members', image: '/image/team-photo/director.jpg',
    email: 'groupdirector@sistec.ac.in', linkedin: 'https://www.linkedin.com/in/dr-jyoti-deshmukh-778714238'
  },
  { 
    name: 'Dr. Abhishek Choubey', role: 'Principal', category: 'Institute Advisory Members', image: '/image/team-photo/principal.jpg',
    email: 'principal.sistece@sistec.ac.in', linkedin: 'https://www.linkedin.com/in/dr-abhishek-choubey-a0271849'
  },
  { 
    name: 'Dr. Dinesh Ramchandani', role: 'Vice Principal', category: 'Institute Advisory Members', image: '/image/team-photo/vice_principal.jpg',
    email: 'vp.sistecrb@sistec.ac.in', linkedin: 'https://www.linkedin.com/in/dr-dinesh-ramchandani-97b22950', insta: 'https://www.instagram.com/dvramchandani'
  },
  
  // ISTE Coordinators
  { 
    name: 'Dr. Vibha Shrivastava', role: 'Faculty Advisor', category: 'ISTE Coordinators', image: '/image/team-photo/Dr-vibha.jpg',
    email: 'narendra.singh@sistec.ac.in', linkedin: 'https://www.linkedin.com/in/dr-vibha-shrivastava-338467a0', insta: 'https://www.instagram.com/shrivastavadr.vibha'
  },
  { 
    name: 'Dr. Narender Singh', role: 'ISTE Coordinator', category: 'ISTE Coordinators', image: '/image/team-photo/narendra_singh.jpg',
    email: 'narendra.singh@sistec.ac.in', linkedin: 'https://www.linkedin.com/in/dr-narender-kumar-97010547', insta: 'https://www.instagram.com/drnarender78'
  },
  
  // Technical Advisor
  { 
    name: 'Mr. Prasant Kumar Tiwari', role: 'Technical Advisor', category: 'Technical Advisor', image: '/image/team-photo/prasant_tiwari.jpg',
    email: 'pprasantkumar@sistec.ac.in', linkedin: 'https://www.linkedin.com/in/saiprasant07'
  },
  
  // Leadership
  { 
    name: 'Ankit Satnami', role: 'President', category: 'President', image: '/image/team-photo/president.jpg',
    email: 'ankitsatnami549@gmail.com', phone: '9340286546', linkedin: 'https://www.linkedin.com/in/ankitsatnami', insta: 'https://www.instagram.com/ankitsatnami__'
  },
  { 
    name: 'Siddarth Asati', role: 'VP (Admin)', category: 'Vice President (Administrative)', image: '/image/team-photo/vice-president.jpg',
    email: 'siddasati126@gmail.com', phone: '7828972392', linkedin: 'https://www.linkedin.com/in/siddarth-asati', insta: 'https://www.instagram.com/cyberfade2'
  },
  { 
    name: 'Ayush Bramhewanshi', role: 'VP (Tech)', category: 'Vice President (Technical)', image: '/image/team-photo/vice-president1.jpg',
    email: 'ayushbramhe0311@gmail.com', phone: '7489436850', linkedin: 'https://www.linkedin.com/in/ayush-bramhewansh-4abb0b338', insta: 'https://www.instagram.com/__ayush0_3'
  },

  // Coding & Programming Team
  { 
    name: 'Deepak Bhujade', role: 'Team Lead', category: 'Coding & Programming Team', image: '/image/team-photo/deepak.jpg',
    email: 'dipakbujhade123@gmail.com', phone: '9340557857', linkedin: 'https://www.linkedin.com/in/deepak-bujhade', insta: 'https://www.instagram.com/itzz__mr__bujhade__oo1__'
  },
  { 
    name: 'Purnima Satpude', role: 'Team Co-Lead', category: 'Coding & Programming Team', image: '/image/team-photo/purnima.jpg',
    email: 'Purnimasatpute16@gmail.com', phone: '9993305957', linkedin: 'https://www.linkedin.com/in/purnima-satpute-b50694311', insta: 'https://www.instagram.com/smart_soft_logic'
  },
  { name: 'Dhappi Maran', role: 'Member', category: 'Coding & Programming Team', image: '/image/team-photo/dhappi.jpg' },
  { name: 'BalKrishna Jaiswal', role: 'Member', category: 'Coding & Programming Team', image: '/image/team-photo/balkrishna.jpg' },
  { name: 'Prince Pandole', role: 'Member', category: 'Coding & Programming Team', image: '/image/team-photo/prince.jpg' },
  { name: 'Divyansh Sharma', role: 'Member', category: 'Coding & Programming Team', image: '/image/team-photo/divyansh.jpg' },
  { name: 'Sumit Verma', role: 'Member', category: 'Coding & Programming Team', image: '/image/team-photo/sumit.jpg' },
  { name: 'Piyush Bangde', role: 'Member', category: 'Coding & Programming Team', image: '/image/team-photo/piyush.jpg' },

  // IoT & Electronics Team
  { 
    name: 'Hari Shankar Prajapati', role: 'Team Lead', category: 'IoT & Electronics Team', image: '/image/team-photo/hari.jpg',
    email: 'harishankarprajapati2005@gmail.com', phone: '6261985079', linkedin: 'https://www.linkedin.com/in/hari-shankar-prajapati-5683bb335', insta: 'https://www.instagram.com/smart_harishankar/'
  },
  { 
    name: 'Khushi Khatik', role: 'Team Co-Lead', category: 'IoT & Electronics Team', image: '/image/team-photo/khushi.jpg',
    email: 'khushirajore574@gmail.com', phone: '9098900597', linkedin: 'https://www.linkedin.com/in/khushi-khatik-3635b5326'
  },
  { name: 'Pooja Malviya', role: 'Member', category: 'IoT & Electronics Team', image: '/image/team-photo/pooja.jpg' },
  { name: 'Sunanda Gokhe', role: 'Member', category: 'IoT & Electronics Team', image: '/image/team-photo/sunanda.jpg' },
  { name: 'Tamanna Verma', role: 'Member', category: 'IoT & Electronics Team', image: '/image/team-photo/tamanna.jpg' },
  { name: 'Yashpal Yadav', role: 'Member', category: 'IoT & Electronics Team', image: '/image/team-photo/yashpal.jpg' },
  { name: 'Krishna Sarathe', role: 'Member', category: 'IoT & Electronics Team', image: '/image/team-photo/krishna.jpg' },
  { name: 'Mayank Madankar', role: 'Member', category: 'IoT & Electronics Team', image: '/image/team-photo/mayank.jpg' },
  { name: 'Aryan Jamre', role: 'Member', category: 'IoT & Electronics Team', image: '/image/team-photo/aryan.jpg' },

  // Hardware & Design Team
  { 
    name: 'Shivam Patel', role: 'Team Lead', category: 'Hardware & Design Team', image: '/image/team-photo/shivam.jpg',
    email: 'spatel8817306095@gmail.com', phone: '9303369886', linkedin: 'https://www.linkedin.com/in/shivam-patel-460530339', insta: 'https://www.instagram.com/mr_shivam___patel1'
  },
  { 
    name: 'Santosh Tekam', role: 'Team Co-Lead', category: 'Hardware & Design Team', image: '/image/team-photo/santosh.jpg',
    email: 'santoshtekam750dhanwar@gmail.com', phone: '8815771607', linkedin: 'https://www.linkedin.com/in/santosh-tekam-2009a4310', insta: 'https://www.instagram.com/santosh_tekam001'
  },
  { name: 'Palak Vishwakarma', role: 'Member', category: 'Hardware & Design Team', image: '/image/team-photo/palak_vishwakarma.jpg' },
  { name: 'Bhoomi Vishwakarma', role: 'Member', category: 'Hardware & Design Team', image: '/image/team-photo/bhoomi_vishwakarma.jpg' },
  { name: 'Adarsh Shukla', role: 'Member', category: 'Hardware & Design Team', image: '/image/team-photo/adarsh_shukla.jpg' },
  { name: 'Avina Ade', role: 'Member', category: 'Hardware & Design Team', image: '/image/team-photo/avina_ade.jpg' },
  { name: 'Ritu Bangde', role: 'Member', category: 'Hardware & Design Team', image: '/image/team-photo/ritu_bangde.jpg' },

  // Creative Team
  { 
    name: 'Adeeba Khan', role: 'Team Lead', category: 'Creative Team', image: '/image/team-photo/adeeba.jpg',
    email: 'Adeebakhan2807@gmail.com', phone: '9893740635', linkedin: 'https://www.linkedin.com/in/adeeba-khan-82878535a'
  },
  { 
    name: 'Palak Satvai', role: 'Team Co-Lead', category: 'Creative Team', image: '/image/team-photo/palak_satvai.jpg',
    email: 'palaksatvai@gmail.com', phone: '8982702555', linkedin: 'https://www.linkedin.com/in/palak-satvai-943977339'
  },
  { name: 'Shivani Jangde', role: 'Member', category: 'Creative Team', image: '/image/team-photo/shivani_jangde.jpg' },
  { name: 'Harshita Patel', role: 'Member', category: 'Creative Team', image: '/image/team-photo/harshita_patel.jpg' },
  { name: 'Vanisha Bagwan', role: 'Member', category: 'Creative Team', image: '/image/team-photo/vanisha_bagwan.jpg' },
  { name: 'Palak Khuswaha', role: 'Member', category: 'Creative Team', image: '/image/team-photo/palak_khuswaha.jpg' },
  { name: 'Ananya Bhagat', role: 'Member', category: 'Creative Team', image: '/image/team-photo/ananya_bhagat.jpg' },
  { name: 'Pawan Jaiswal', role: 'Member', category: 'Creative Team', image: '/image/team-photo/pawan_jaiswal.jpg' },
  { name: 'Abhisekh Gupta', role: 'Member', category: 'Creative Team', image: '/image/team-photo/abhisekh_gupta.jpg' },
  { name: 'Vedika Chopde', role: 'Member', category: 'Creative Team', image: '/image/team-photo/vedika_chopde.jpg' },

  // Social Media & IT Team
  { 
    name: 'Nirjala Maran', role: 'Team Lead', category: 'Social Media & IT Team', image: '/image/team-photo/nirjala.jpg',
    email: 'nirjalamaran@gmail.com', phone: '8827397532', linkedin: 'https://www.linkedin.com/in/nirjala-maran-ba99b2308'
  },
  { 
    name: 'Raj Rajguru', role: 'Team Co-Lead', category: 'Social Media & IT Team', image: '/image/team-photo/raj.jpg',
    email: 'rajgururaj1765@gmail.com', phone: '9244106261', linkedin: 'https://www.linkedin.com/in/raj-rajguru-1957302b2', insta: 'https://www.instagram.com/mr_rajguru__'
  },
  { name: 'Pratham Jothe', role: 'Member', category: 'Social Media & IT Team', image: '/image/team-photo/pratham_jothe.jpg' },
  { name: 'Atul Kumar Tiwari', role: 'Member', category: 'Social Media & IT Team', image: '/image/team-photo/atul_tiwari.jpg' },
  { name: 'Sanskar Sahu', role: 'Member', category: 'Social Media & IT Team', image: '/image/team-photo/sanskar_sahu.jpg' },
  { name: 'Jay Prajapati', role: 'Member', category: 'Social Media & IT Team', image: '/image/team-photo/jay_prajapati.jpg' },
  { name: 'Akshat Jaiswal', role: 'Member', category: 'Social Media & IT Team', image: '/image/team-photo/akshat_jaiswal.jpg' },
  { name: 'Ojaswa Mahobiya', role: 'Member', category: 'Social Media & IT Team', image: '/image/team-photo/ojaswa_mahobiya.jpg' },
]

export default function TeamGrid() {
  const categories = [
    'Institute Advisory Members',
    'ISTE Coordinators',
    'Technical Advisor',
    'President',
    'Vice President (Administrative)',
    'Vice President (Technical)',
    'Coding & Programming Team', 
    'IoT & Electronics Team', 
    'Hardware & Design Team', 
    'Creative Team', 
    'Social Media & IT Team'
  ]

  return (
    <div className="space-y-16">
      {categories.map(category => {
        const members = team.filter(member => member.category === category)
        if (members.length === 0) return null

        return (
          <div key={category}>
            <h2 className="text-2xl font-space font-bold text-electric mb-8 border-b border-white/10 pb-4">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {members.map((member, idx) => (
                <motion.div 
                  key={member.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: (idx % 4) * 0.1 }}
                  className="glass-panel p-6 rounded-xl text-center neon-border hover:-translate-y-2 transition-transform duration-300 flex flex-col"
                >
                  <img 
                    src={`${import.meta.env.BASE_URL}${member.image.startsWith('/') ? member.image.slice(1) : member.image}`}
                    alt={member.name} 
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-electric object-cover bg-navy/50" 
                    onError={(e) => { e.currentTarget.src = `${import.meta.env.BASE_URL}logo1.png` }}
                  />
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-amber text-sm font-medium mb-4">{member.role}</p>
                  
                  <div className="mt-auto flex justify-center gap-4 pt-4 border-t border-white/5">
                    {member.phone && (
                      <a href={`tel:${member.phone}`} title="Call" className="text-gray-400 hover:text-green-400 transition-colors">
                        <Phone size={18} />
                      </a>
                    )}
                    {member.email && (
                      <a href={`mailto:${member.email}`} title="Email" className="text-gray-400 hover:text-red-400 transition-colors">
                        <Mail size={18} />
                      </a>
                    )}
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noreferrer" title="LinkedIn" className="text-gray-400 hover:text-[#0a66c2] transition-colors">
                        <Linkedin size={18} />
                      </a>
                    )}
                    {member.insta && (
                      <a href={member.insta} target="_blank" rel="noreferrer" title="Instagram" className="text-gray-400 hover:text-[#e1306c] transition-colors">
                        <Instagram size={18} />
                      </a>
                    )}
                    {!member.phone && !member.email && !member.linkedin && !member.insta && (
                       <span className="text-xs text-gray-500 italic">Member</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
