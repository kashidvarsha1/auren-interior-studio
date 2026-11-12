
import { useState } from 'react'
import { MessageCircle, X, Send, Sparkles } from 'lucide-react'

const options = [
  "Explore interior styles",
  "View our services",
  "Discuss my budget",
  "Start a project enquiry",
]

const replies = {
  "Explore interior styles":
    "We love creating spaces that feel personal. Which style do you prefer: Modern, Minimal, Contemporary or Warm & Natural?",
  "View our services":
    "AUREN offers concept services for Living Room Design, Bedroom Design, Complete Home Interiors and Space Planning.",
  "Discuss my budget":
    "Every space is different! For a better recommendation, what's your approximate interior budget?",
  "Start a project enquiry":
    "Wonderful! We'd love to hear about your space. Is it a new apartment, a renovation or a single-room project?",
}

export default function DesignChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hello! Welcome to AUREN. ✨ I'm your design assistant. How can I help you shape your space today?",
    },
  ])
  const [input, setInput] = useState('')

  const sendMessage = (text) => {
    if (!text.trim()) return

    setMessages((prev) => [
      ...prev,
      { sender: 'user', text },
      {
        sender: 'bot',
        text:
          replies[text] ||
          "Thank you for sharing! Our design team would love to understand your vision. Explore our services or start a project enquiry to continue.",
      },
    ])
    setInput('')
  }

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      {isOpen && (
        <div className="mb-4 flex h-[520px] w-[340px] max-w-[calc(100vw-32px)] flex-col overflow-hidden rounded-2xl border border-[#B5A18A]/40 bg-[#F3EFE7] shadow-2xl">

          <div className="flex items-center justify-between bg-[#343A32] p-4 text-[#F3EFE7]">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B5A18A]">
                <Sparkles size={19} />
              </div>
              <div>
                <h3 className="font-serif text-lg">AUREN Assistant</h3>
                <p className="text-xs text-white/65">Here to help you design</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} aria-label="Close chat">
              <X size={21} />
            </button>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    message.sender === 'user'
                      ? 'rounded-br-sm bg-[#343A32] text-white'
                      : 'rounded-bl-sm border border-[#B5A18A]/30 bg-white text-[#343A32]'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {messages.length === 1 && (
              <div className="space-y-2">
                {options.map((option) => (
                  <button
                    key={option}
                    onClick={() => sendMessage(option)}
                    className="block w-full rounded-xl border border-[#B5A18A]/50 bg-white px-3 py-2.5 text-left text-sm text-[#343A32] transition hover:border-[#343A32] hover:bg-[#EAE3D8]"
                  >
                    {option} →
                  </button>
                ))}
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              sendMessage(input)
            }}
            className="flex items-center gap-2 border-t border-[#B5A18A]/30 bg-white p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Write a message..."
              className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm outline-none"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="rounded-full bg-[#343A32] p-2.5 text-white transition hover:bg-[#4B5548]"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      <div className="flex justify-end">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close chatbot' : 'Open chatbot'}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#343A32] text-[#F3EFE7] shadow-xl transition hover:scale-105 hover:bg-[#4B5548]"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={25} />}
        </button>
      </div>
    </div>
  )
}
