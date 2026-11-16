"use client";
import { useState } from "react"
import { Mail, Send, User, MessageSquare, MapPin, Phone } from "lucide-react"

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:dagimgirma1234@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section className="w-full bg-[#303030] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16">
        {/* Left info */}
        <div className="flex flex-col gap-6 lg:w-1/3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Lets <span className="text-[#cb7949]">Connect</span>
          </h2>
          <p className="text-white/80 text-base sm:text-lg">
            Have a project in mind or want to discuss opportunities? Drop me a message.
          </p>

          <div className="flex flex-col gap-4 mt-4">
            <div className="flex items-center gap-3 text-white">
              <MapPin className="h-5 w-5 text-[#cb7949]" />
              <span className="text-sm sm:text-base">Addis Ababa, Ethiopia</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <Mail className="h-5 w-5 text-[#cb7949]" />
              <a href="mailto:dagimgirma1234@gmail.com" className="text-sm sm:text-base hover:text-[#cb7949] transition-colors">
                dagimgirma1234@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-white">
              <Phone className="h-5 w-5 text-[#cb7949]" />
              <a href="tel:+251939744076" className="text-sm sm:text-base hover:text-[#cb7949] transition-colors">
                +251 939 744 076
              </a>
            </div>
          </div>
        </div>

        {/* Right form */}
        <div className="lg:w-2/3">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10"
          >
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-white text-sm font-medium flex items-center gap-2">
                <User className="h-4 w-4 text-[#cb7949]" />
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#cb7949] focus:border-transparent transition"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-white text-sm font-medium flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#cb7949]" />
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#cb7949] focus:border-transparent transition"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-white text-sm font-medium flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-[#cb7949]" />
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#cb7949] focus:border-transparent transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center cursor-pointer justify-center gap-2 bg-[#E9BF4C]  font-medium py-3.5 px-8 rounded-lg transition-all duration-300 hover:gap-3 hover:shadow-lg"
            >
              Send Message
              <Send className="h-4 w-4 text-black" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact