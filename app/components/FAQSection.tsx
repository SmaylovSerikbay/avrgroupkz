import { motion } from 'framer-motion';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  subtitle: string;
  faqs: FAQItem[];
  className?: string;
}

export default function FAQSection({ title, subtitle, faqs, className = '' }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-20 px-4 bg-black relative ${className}`}>
      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{title}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/10 transition-colors"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-xl font-bold text-white pr-4">{faq.question}</h3>
                  <svg
                    className={`w-6 h-6 text-white/60 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div
                  id={`faq-answer-${index}`}
                  className={`px-6 transition-all duration-300 ${
                    openIndex === index ? 'pb-6 max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                >
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
