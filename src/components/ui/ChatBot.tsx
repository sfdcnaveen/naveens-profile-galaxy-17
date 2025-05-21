import React, { useState, useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useChatContext } from '@/contexts/ChatContext';

interface ChatBotProps {
  className?: string;
}

const ChatBot = ({ className }: ChatBotProps) => {
  const { isOpen, toggleChat } = useChatContext();
  const [messages, setMessages] = useState<{ text: string; sender: 'bot' | 'user' }[]>([
    { text: "👋 Hi there! I'm Naveen's virtual assistant. You can send me a message, and I'll forward it directly to Naveen's WhatsApp for a quick response.", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [userName, setUserName] = useState('');
  const [askingName, setAskingName] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Check if mobile on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkIfMobile = () => {
        setIsMobile(window.innerWidth <= 640);
      };

      checkIfMobile();
      window.addEventListener('resize', checkIfMobile);

      return () => {
        window.removeEventListener('resize', checkIfMobile);
      };
    }
  }, []);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Ask for name after first message if not already provided
  useEffect(() => {
    if (messages.length === 2 && messages[1].sender === 'user' && !userName && !askingName) {
      setAskingName(true);
      setTimeout(() => {
        setMessages(prev => [...prev, {
          text: "Before we continue, could you please tell me your name so I can better assist you?",
          sender: 'bot'
        }]);
      }, 1000);
    }
  }, [messages, userName, askingName]);

  // Close chat when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatContainerRef.current && !chatContainerRef.current.contains(event.target as Node) && isOpen) {
        toggleChat();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, toggleChat]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    const userMessage = inputValue;

    // Add user message
    setMessages([...messages, { text: userMessage, sender: 'user' }]);
    setInputValue('');

    // Check if we're asking for the user's name
    if (askingName) {
      setUserName(userMessage);
      setAskingName(false);

      // Thank the user for providing their name
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          {
            text: `Thanks, ${userMessage}! How can I help you today? Feel free to ask any questions about Naveen's services or experience.`,
            sender: 'bot'
          }
        ]);
      }, 1000);

      return;
    }

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponses = [
        "Thanks for your message! You can forward this directly to Naveen's WhatsApp for a faster response.",
        "I've noted your query. Use the 'Send to WhatsApp' button below to reach Naveen directly.",
        "For immediate assistance, you can forward this message to Naveen's WhatsApp using the button below.",
        "To get a quicker response from Naveen, try forwarding this conversation to WhatsApp.",
      ];

      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];

      // Prepare WhatsApp message with user name if available
      const whatsAppMessage = userName
        ? `Message from ${userName} via website: ${userMessage}`
        : `Message from website: ${userMessage}`;

      // Add bot response with a WhatsApp forward button
      setMessages(prev => [
        ...prev,
        { text: randomResponse, sender: 'bot' },
        {
          text: `<div class="mt-2">
                  <a href="https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsAppMessage)}"
                     target="_blank"
                     rel="noopener noreferrer"
                     class="inline-flex items-center justify-center gap-2 px-3 py-1.5 bg-green-500 hover:bg-green-600 text-white rounded-lg text-xs transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    Send to WhatsApp
                  </a>
                </div>`,
          sender: 'bot'
        }
      ]);
    }, 1000);
  };

  // WhatsApp phone number - using a default Indian format
  const whatsappNumber = "+919490380061"; // Replace with your actual number

  return (
    <div className={cn("fixed bottom-6 right-6 z-50", className)}>
      {/* Chat bubble button */}
      <motion.button
        onClick={toggleChat}
        className={cn(
          "w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg",
          "hover:bg-primary/90 transition-colors duration-300",
          isOpen ? "opacity-0 scale-90" : "opacity-100 scale-100"
        )}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.3 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatContainerRef}
            className="absolute bottom-20 right-0 w-[calc(100vw-32px)] sm:w-96 max-w-md bg-background border border-border rounded-xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            style={{
              right: isMobile ? '50%' : '0',
              transform: isMobile ? 'translateX(50%)' : 'none'
            }}
          >
            {/* Chat header */}
            <div className="bg-primary p-4 text-white flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Chat with Naveen</h3>
                  <p className="text-xs opacity-80">Usually replies within an hour</p>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="text-white/80 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Chat messages */}
            <div className="p-4 h-80 overflow-y-auto bg-muted/20">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn(
                    "mb-3 max-w-[80%] p-3 rounded-lg",
                    message.sender === 'bot'
                      ? "bg-muted/50 text-foreground mr-auto"
                      : "bg-primary/90 text-white ml-auto"
                  )}
                  dangerouslySetInnerHTML={{ __html: message.text }}
                ></div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* WhatsApp button */}
            <div className="p-3 border-t border-border bg-muted/10">
              <div className="text-xs text-muted-foreground mb-2 text-center">
                For direct communication, reach out on WhatsApp
              </div>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(userName ? `Hello, this is ${userName} from your website.` : 'Hello, I found your website and would like to connect.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full p-2.5 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Chat input */}
            <form onSubmit={handleSubmit} className="p-3 border-t border-border flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Type a message..."
                className="flex-1 p-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                type="submit"
                className="p-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot;
