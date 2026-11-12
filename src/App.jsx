import { motion } from 'framer-motion'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import DesignChatbot from './components/DesignChatbot'            

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <main className="min-h-screen bg-[#F3EFE7]">

      {/* NAVBAR */}
      
{/* NAVBAR */}
<nav className="relative z-50 w-full px-6 md:px-16 py-6 flex items-center justify-between border-b border-[#B5A18A]/30 bg-[#F3EFE7]">

  <a href="#home" className="text-3xl font-serif tracking-widest text-[#343A32]">
    AUREN
  </a>

  {/* DESKTOP LINKS */}
  <div className="hidden md:flex items-center gap-10 text-sm tracking-wide text-[#343A32]">
    <a href="#home">Home</a>
    <a href="#projects">Projects</a>
    <a href="#services">Services</a>
    <a href="#about">About</a>
  </div>

  <div className="flex items-center gap-4">

    <a
      href="#contact"
      className="hidden md:inline-block bg-[#343A32] text-white px-6 py-3 text-xs tracking-widest"
    >
      LET'S TALK
    </a>

    {/* MOBILE MENU BUTTON */}
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="md:hidden text-[#343A32]"
      aria-label="Toggle navigation menu"
    >
      {menuOpen ? <X size={26} /> : <Menu size={26} />}
    </button>

  </div>

  {/* MOBILE LINKS */}
  {menuOpen && (
    <div className="absolute top-full left-0 w-full bg-[#F3EFE7] px-6 py-8 flex flex-col gap-6 shadow-lg md:hidden">

      {[
        ["Home", "#home"],
        ["Projects", "#projects"],
        ["Services", "#services"],
        ["About", "#about"],
        ["Contact", "#contact"],
      ].map(([label, link]) => (
        <a
          key={label}
          href={link}
          onClick={() => setMenuOpen(false)}
          className="text-[#343A32] text-sm tracking-widest"
        >
          {label}
        </a>
      ))}

    </div>
  )}

</nav>


   
{/* HERO SECTION */}
<section id="home" className="grid md:grid-cols-2 min-h-[650px]">

  {/* LEFT CONTENT */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    className="flex flex-col justify-center px-8 md:px-16 py-20"
  >
    <p className="text-xs tracking-[0.3em] text-[#8B806F] mb-8">
      INTERIOR DESIGN STUDIO · PUNE
    </p>

    <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-[#343A32]">
      Spaces that
      <br />
      feel like
      <br />
      <span className="italic">you.</span>
    </h1>

    <p className="text-[#77736C] text-base leading-8 max-w-md mt-8">
      Thoughtful interiors for modern homes. Designed around your
      lifestyle, your space and the little details that make it yours.
    </p>

    <div className="mt-10">
      <a
        href="#contact"
        className="inline-block bg-[#343A32] text-white px-9 py-5 text-xs tracking-[0.2em] hover:bg-[#B5A18A] transition-colors"
      >
        START YOUR PROJECT ↗
      </a>
    </div>

    <p className="text-xs text-[#8B806F] mt-12 tracking-wide">
      THOUGHTFULLY DESIGNED. MADE FOR EVERYDAY LIVING.
    </p>
  </motion.div>

  {/* RIGHT IMAGE */}
  <div className="min-h-[400px] md:min-h-full overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400&q=85"
      alt="Warm contemporary living room interior"
      className="w-full h-full object-cover"
    />
  </div>

</section>



      

{/* STUDIO INTRODUCTION */}
<section className="px-8 md:px-16 py-28 md:py-36 bg-[#EAE5DB]">

  <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-start">

    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <p className="text-xs tracking-[0.3em] text-[#8B806F] mb-8">
        A LITTLE ABOUT AUREN
      </p>

      <h2 className="font-serif text-5xl md:text-6xl leading-tight text-[#343A32]">
        A home should
        <br />
        feel like <span className="italic">yours.</span>
      </h2>
    </motion.div>

    {/* RIGHT CONTENT */}
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      className="pt-2 md:pt-12"
    >
      <p className="text-[#625F57] text-lg leading-9">
        We believe good design is not just about how a space looks.
        It is about how it makes you feel, how naturally it fits your
        everyday life and how every little detail finds its place.
      </p>

      <p className="text-[#625F57] text-lg leading-9 mt-6">
        At AUREN, we imagine thoughtful, functional and beautiful
        interiors that make everyday living feel a little more special.
      </p>

      <a
        href="#about"
        className="inline-block mt-10 pb-2 border-b border-[#343A32] text-xs tracking-[0.2em] text-[#343A32] hover:text-[#8B806F] transition-colors"
      >
        DISCOVER OUR APPROACH ↗
      </a>
    </motion.div>

  </div>

</section>



{/* SERVICES SECTION */}
<section id="services" className="px-8 md:px-16 py-28 md:py-36 bg-[#F3EFE7]">

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="flex flex-col md:flex-row justify-between md:items-end gap-8 mb-16"
  >
    <div>
      <p className="text-xs tracking-[0.3em] text-[#8B806F] mb-6">
        WHAT WE DO
      </p>

      <h2 className="font-serif text-5xl md:text-6xl text-[#343A32]">
        Designed for
        <br />
        <span className="italic">everyday living.</span>
      </h2>
    </div>

    <p className="text-[#77736C] leading-8 max-w-sm">
      From thoughtful layouts to the finishing touches,
      we bring every part of your home together.
    </p>
  </motion.div>

  <div className="grid md:grid-cols-2 border-t border-[#B5A18A]/50">

    {[
      {
        number: "01",
        title: "Complete Home Interiors",
        description: "A cohesive design approach for every corner of your home."
      },
      {
        number: "02",
        title: "Smart Space Planning",
        description: "Making the most of your space with functional, thoughtful layouts."
      },
      {
        number: "03",
        title: "Room Makeovers",
        description: "Giving individual spaces a fresh identity and renewed character."
      },
      {
        number: "04",
        title: "Renovation & Styling",
        description: "Bringing new life to existing spaces through considered details."
      }
    ].map((service, index) => (
      <motion.div
        key={service.number}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: index * 0.12 }}
        className="group py-12 md:py-14 border-b border-[#B5A18A]/50 md:pr-12 cursor-default"
      >
        <p className="text-xs tracking-widest text-[#A18D72] mb-6">
          {service.number}
        </p>

        <h3 className="font-serif text-3xl md:text-4xl text-[#343A32] transition-transform duration-300 group-hover:translate-x-2">
          {service.title}
        </h3>

        <p className="text-[#77736C] leading-7 mt-4 max-w-md">
          {service.description}
        </p>
      </motion.div>
    ))}

  </div>

</section>




{/* FEATURED PROJECTS */}
<section id="projects" className="px-8 md:px-16 py-28 md:py-36 bg-[#EAE5DB]">

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-16"
  >
    <div>
      <p className="text-xs tracking-[0.3em] text-[#8B806F] mb-6">
        SELECTED CONCEPTS
      </p>

      <h2 className="font-serif text-5xl md:text-6xl text-[#343A32]">
        Spaces we've
        <br />
        <span className="italic">imagined.</span>
      </h2>
    </div>

    <p className="text-[#77736C] leading-8 max-w-sm">
      A collection of thoughtfully imagined spaces,
      created around the way people live.
    </p>
  </motion.div>

  <div className="grid md:grid-cols-2 gap-8">

    {/* PROJECT 01 */}
    <motion.article
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="group"
    >
      <div className="overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000&q=85"
          alt="Warm contemporary apartment living room"
          className="w-full h-[350px] md:h-[480px] object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
        />
      </div>

      <div className="flex justify-between items-start mt-6">
        <div>
          <h3 className="font-serif text-3xl text-[#343A32] transition-colors duration-300 group-hover:text-[#8B806F]">
            The Olive Apartment
          </h3>
          <p className="text-sm text-[#77736C] mt-2">
            2BHK · Contemporary Living
          </p>
        </div>
        <span className="text-xs tracking-widest text-[#A18D72]">
          01
        </span>
      </div>

      <p className="text-xs tracking-widest text-[#A18D72] mt-4">
        CONCEPT PROJECT
      </p>
    </motion.article>

    {/* PROJECT 02 */}
    <motion.article
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="group md:mt-24"
    >
      <div className="overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&q=85"
          alt="Warm minimalist residential interior"
          className="w-full h-[350px] md:h-[480px] object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
        />
      </div>

      <div className="flex justify-between items-start mt-6">
        <div>
          <h3 className="font-serif text-3xl text-[#343A32] transition-colors duration-300 group-hover:text-[#8B806F]">
            The Sunday Home
          </h3>
          <p className="text-sm text-[#77736C] mt-2">
            3BHK · Warm Minimalism
          </p>
        </div>
        <span className="text-xs tracking-widest text-[#A18D72]">
          02
        </span>
      </div>

      <p className="text-xs tracking-widest text-[#A18D72] mt-4">
        CONCEPT PROJECT
      </p>
    </motion.article>

  </div>
</section>




{/* OUR PROCESS */}
<section className="px-8 md:px-16 py-28 md:py-36 bg-[#343A32] text-[#F3EFE7]">

  <motion.div
    initial={{ opacity: 0, y: 35 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="max-w-2xl mb-20"
  >
    <p className="text-xs tracking-[0.3em] text-[#C3B39B] mb-6">
      HOW WE WORK
    </p>

    <h2 className="font-serif text-5xl md:text-6xl leading-tight">
      From first conversation
      <br />
      to <span className="italic">final detail.</span>
    </h2>

    <p className="text-[#D0C9BD] leading-8 mt-8 max-w-lg">
      Every home has a story. Our process helps us understand yours
      and translate it into a space that feels right.
    </p>
  </motion.div>

  <div className="grid md:grid-cols-4 border-t border-[#F3EFE7]/30">

    {[
      {
        number: "01",
        title: "Discover",
        description: "We understand your lifestyle, needs, preferences and vision."
      },
      {
        number: "02",
        title: "Design",
        description: "We develop layouts, materials, colours and design concepts."
      },
      {
        number: "03",
        title: "Develop",
        description: "We refine the details and bring the design plan together."
      },
      {
        number: "04",
        title: "Deliver",
        description: "We move towards a thoughtfully finished space made for you."
      }
    ].map((step, index) => (
      <motion.div
        key={step.number}
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: index * 0.15 }}
        className="group py-12 md:pr-8 border-b md:border-b-0 md:border-r border-[#F3EFE7]/30 md:pl-6 first:pl-0"
      >
        <p className="text-sm tracking-widest text-[#C3B39B] mb-12 transition-transform duration-300 group-hover:translate-x-2">
          {step.number}
        </p>

        <h3 className="font-serif text-3xl mb-5 transition-colors duration-300 group-hover:text-[#C3B39B]">
          {step.title}
        </h3>

        <p className="text-sm text-[#D0C9BD] leading-7">
          {step.description}
        </p>
      </motion.div>
    ))}

  </div>

</section>




{/* ABOUT SECTION */}
<section id="about" className="px-8 md:px-16 py-28 md:py-36 bg-[#F3EFE7]">

  <div className="grid md:grid-cols-2 gap-16 items-center">

    {/* IMAGE */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1 }}
      className="h-[450px] md:h-[600px] overflow-hidden group"
    >
      <img
        src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=85"
        alt="Thoughtfully designed contemporary home interior"
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
      />
    </motion.div>

    {/* CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay: 0.15 }}
      className="md:pl-8"
    >

      <p className="text-xs tracking-[0.3em] text-[#8B806F] mb-8">
        THE THINKING BEHIND AUREN
      </p>

      <h2 className="font-serif text-5xl md:text-6xl leading-tight text-[#343A32]">
        More than
        <br />
        just beautiful
        <br />
        <span className="italic">spaces.</span>
      </h2>

      <p className="text-[#77736C] leading-8 mt-8">
        AUREN is built around a simple belief: your home should
        reflect the way you live, not just the latest trends.
      </p>

      <p className="text-[#77736C] leading-8 mt-5">
        We bring together thoughtful planning, timeless materials
        and considered details to imagine spaces that feel personal,
        comfortable and naturally yours.
      </p>

      <div className="grid grid-cols-2 gap-8 mt-12 pt-8 border-t border-[#B5A18A]/50">

        <div>
          <h3 className="font-serif text-2xl text-[#343A32]">
            Thoughtful
          </h3>
          <p className="text-sm text-[#77736C] mt-2">
            Every detail has a purpose.
          </p>
        </div>

        <div>
          <h3 className="font-serif text-2xl text-[#343A32]">
            Personal
          </h3>
          <p className="text-sm text-[#77736C] mt-2">
            Designed around your life.
          </p>
        </div>

      </div>

    </motion.div>

  </div>
</section>



{/* CONTACT SECTION */}
<section id="contact" className="px-8 md:px-16 py-28 md:py-36 bg-[#EAE5DB]">

  <div className="grid md:grid-cols-2 gap-16">

    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: -35 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <p className="text-xs tracking-[0.3em] text-[#8B806F] mb-8">
        LET'S CREATE SOMETHING MEANINGFUL
      </p>

      <h2 className="font-serif text-5xl md:text-7xl leading-tight text-[#343A32]">
        Your space,
        <br />
        your <span className="italic">story.</span>
      </h2>

      <p className="text-[#77736C] leading-8 mt-8 max-w-md">
        Have a space in mind? Tell us a little about your project.
        We'd love to hear what you're imagining.
      </p>

      <p className="text-xs tracking-widest text-[#8B806F] mt-12">
        INTERIOR DESIGN STUDIO · PUNE, INDIA
      </p>
    </motion.div>

    {/* RIGHT FORM */}
    <motion.form
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.15 }}
      action="https://formsubmit.co/YOUR_EMAIL@example.com"
      method="POST"
      className="space-y-8"
    >
      <input type="hidden" name="_subject" value="New AUREN Project Enquiry" />
      <input type="hidden" name="_captcha" value="true" />

      <div>
        <label className="block text-xs tracking-widest text-[#77736C] mb-3">
          YOUR NAME
        </label>
        <input
          type="text"
          name="name"
          required
          placeholder="Enter your name"
          className="w-full bg-transparent border-b border-[#B5A18A] py-4 outline-none focus:border-[#343A32] transition-colors placeholder:text-[#A9A398]"
        />
      </div>

      <div>
        <label className="block text-xs tracking-widest text-[#77736C] mb-3">
          EMAIL ADDRESS
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          className="w-full bg-transparent border-b border-[#B5A18A] py-4 outline-none focus:border-[#343A32] transition-colors placeholder:text-[#A9A398]"
        />
      </div>

      <div>
        <label className="block text-xs tracking-widest text-[#77736C] mb-3">
          WHAT ARE YOU LOOKING FOR?
        </label>
        <select
          name="service"
          required
          defaultValue=""
          className="w-full bg-transparent border-b border-[#B5A18A] py-4 outline-none focus:border-[#343A32]"
        >
          <option value="" disabled>Select a service</option>
          <option>Complete Home Interiors</option>
          <option>Space Planning</option>
          <option>Room Makeover</option>
          <option>Renovation & Styling</option>
        </select>
      </div>

      <div>
        <label className="block text-xs tracking-widest text-[#77736C] mb-3">
          TELL US ABOUT YOUR SPACE
        </label>
        <textarea
          name="message"
          required
          rows="4"
          placeholder="Share a few details about your project..."
          className="w-full bg-transparent border-b border-[#B5A18A] py-4 outline-none resize-none focus:border-[#343A32] transition-colors placeholder:text-[#A9A398]"
        />
      </div>

      <button
        type="submit"
        className="bg-[#343A32] text-white px-9 py-5 text-xs tracking-[0.2em] hover:bg-[#B5A18A] transition-all duration-300"
      >
        SEND ENQUIRY ↗
      </button>

    </motion.form>

  </div>
</section>




{/* FOOTER */}
<footer className="bg-[#242421] text-[#F3EFE7] px-8 md:px-16 pt-20 pb-8">

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="grid md:grid-cols-3 gap-12 pb-16"
  >

    {/* BRAND */}
    <div>
      <h2 className="font-serif text-5xl tracking-widest">
        AUREN
      </h2>
      <p className="text-sm text-[#B5A18A] mt-5 leading-7 max-w-xs">
        Thoughtful interiors for the way you live today.
      </p>
    </div>

    {/* NAVIGATION */}
    <div>
      <p className="text-xs tracking-[0.2em] text-[#B5A18A] mb-6">
        EXPLORE
      </p>

      <div className="flex flex-col gap-4 text-sm text-[#EAE5DB]">
        {[
          ["Home", "#home"],
          ["Projects", "#projects"],
          ["Services", "#services"],
          ["About", "#about"],
          ["Contact", "#contact"]
        ].map(([label, link]) => (
          <a
            key={label}
            href={link}
            className="w-fit hover:text-[#B5A18A] hover:translate-x-1 transition-all duration-300"
          >
            {label}
          </a>
        ))}
      </div>
    </div>

    {/* CONTACT */}
    <div>
      <p className="text-xs tracking-[0.2em] text-[#B5A18A] mb-6">
        GET IN TOUCH
      </p>

      <p className="text-sm text-[#EAE5DB] leading-7">
        Pune, Maharashtra
        <br />
        India
      </p>

      <a
        href="#contact"
        className="inline-block mt-5 text-sm border-b border-[#B5A18A] pb-2 hover:text-[#B5A18A] transition-colors"
      >
        Start a conversation ↗
      </a>
    </div>

  </motion.div>

  {/* COPYRIGHT */}
  <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-[#B5A18A]">
    <p>© 2026 AUREN. Concept design project.</p>
    <p>SPACES THAT FEEL LIKE YOU.</p>
  </div>

</footer>
   <DesignChatbot />
    </main>
  )
}

export default App
