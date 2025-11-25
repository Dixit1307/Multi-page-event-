import { motion } from 'motion/react';
import { HelpCircle, ChevronDown, Search, MessageCircle, Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

interface FAQPageProps {
  onNavigate: (page: string) => void;
}

export function FAQPage({ onNavigate }: FAQPageProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const faqCategories = [
    {
      category: 'Getting Started',
      icon: '🚀',
      questions: [
        {
          q: 'How do I create an event?',
          a: 'Creating an event is super simple! Just sign up, click "Create Event", fill in your event details (name, date, type), and you\'ll get a unique QR code and link instantly. Share it with your guests and you\'re done!',
        },
        {
          q: 'Do guests need to download an app?',
          a: 'Absolutely not! That\'s the beauty of Kululu. Guests simply scan your QR code or click your link, and they can upload photos directly from their phone browser. No downloads, no sign-ups required.',
        },
        {
          q: 'How long does it take to set up?',
          a: 'Less than 60 seconds! Just enter your event name and date, and you\'re ready to go. You\'ll get your QR code immediately.',
        },
        {
          q: 'Can I try it before my event?',
          a: 'Yes! Create a free test event and try uploading photos yourself. You can delete it and create a new one for your actual event.',
        },
      ],
    },
    {
      category: 'Features & Usage',
      icon: '✨',
      questions: [
        {
          q: 'How many photos can guests upload?',
          a: 'On the Free plan, up to 100 photos total. On Plus plan, unlimited photos and videos. On Premium, unlimited everything with 4K video support!',
        },
        {
          q: 'What is a Live Photo Wall?',
          a: 'It\'s a real-time slideshow of all uploaded photos. Perfect to display on a TV or projector at your event. Photos appear as soon as guests upload them - it creates amazing energy!',
        },
        {
          q: 'Can I customize the event page?',
          a: 'Yes! On Plus and Premium plans, you can customize colors, add your event banner, and even add custom messages. Premium plan offers full white-label branding.',
        },
        {
          q: 'Does it work in my language?',
          a: 'Yes! Kululu supports 7 Indian languages: Hindi, English, Gujarati, Marathi, Tamil, Telugu, and Bengali. Guests can choose their preferred language.',
        },
        {
          q: 'Can guests upload videos too?',
          a: 'Yes! Plus and Premium plans support HD video uploads. Premium also supports 4K videos.',
        },
      ],
    },
    {
      category: 'Pricing & Plans',
      icon: '💳',
      questions: [
        {
          q: 'Is the Free plan really free?',
          a: 'Yes! Completely free forever. Perfect for small gatherings up to 50 guests with 100 photos. No credit card required to start.',
        },
        {
          q: 'When should I upgrade to Plus or Premium?',
          a: 'Upgrade to Plus for weddings, birthdays, or any event with 50+ guests. Choose Premium for grand weddings, corporate events, or if you want lifetime album access and custom branding.',
        },
        {
          q: 'Can I upgrade during my event?',
          a: 'Absolutely! You can upgrade anytime during your event. All existing photos will be included in your upgraded plan.',
        },
        {
          q: 'What payment methods do you accept?',
          a: 'We accept UPI, Credit/Debit Cards, Net Banking, and digital wallets (Paytm, PhonePe, Google Pay). All payments are secure and encrypted.',
        },
        {
          q: 'Do you offer refunds?',
          a: 'Yes, full refund within 24 hours if you haven\'t started using the service. Contact our support team.',
        },
      ],
    },
    {
      category: 'Technical Questions',
      icon: '⚙️',
      questions: [
        {
          q: 'What phones/devices are supported?',
          a: 'Kululu works on all modern smartphones (iPhone 6+, Android 5+), tablets, and computers. Works on Chrome, Safari, Firefox, and Edge browsers.',
        },
        {
          q: 'What if internet is slow at my venue?',
          a: 'Photos will upload automatically when connection improves. Guests can continue taking photos offline and they\'ll upload when they get signal.',
        },
        {
          q: 'How do I download all photos?',
          a: 'Go to your host dashboard and click "Download All". You\'ll get a zip file with all high-resolution photos and videos organized by upload time.',
        },
        {
          q: 'Are my photos safe and private?',
          a: 'Yes! Only people with your unique event link can view and upload photos. All data is encrypted and stored securely on cloud servers. You can delete your event anytime.',
        },
        {
          q: 'What happens after my event access period ends?',
          a: 'You\'ll get email reminders to download your photos. After the period ends, you can still view but need to upgrade to download. Premium plan has lifetime access.',
        },
      ],
    },
    {
      category: 'For Event Organizers',
      icon: '🎉',
      questions: [
        {
          q: 'Can I manage multiple events?',
          a: 'Yes! Your dashboard shows all your events. You can create and manage multiple events simultaneously.',
        },
        {
          q: 'Can I see who uploaded which photo?',
          a: 'On Plus and Premium plans, yes! You can see which guest uploaded which photo (if they provide their name).',
        },
        {
          q: 'Can I moderate/remove photos?',
          a: 'Yes! As the host, you have full control. You can remove any photo or video from your event album.',
        },
        {
          q: 'Do you have an Enterprise plan for wedding planners?',
          a: 'Yes! Contact our sales team for Enterprise plans with unlimited events, white-label solution, API access, and dedicated support.',
        },
      ],
    },
    {
      category: 'Troubleshooting',
      icon: '🔧',
      questions: [
        {
          q: 'QR code is not scanning',
          a: 'Make sure the QR code is clear and well-lit. If scanning doesn\'t work, guests can manually type the short link shown below the QR code.',
        },
        {
          q: 'Photos are not uploading',
          a: 'Check internet connection. Large videos may take time. If problem persists, try refreshing the page or contact support.',
        },
        {
          q: 'Live Photo Wall is not updating',
          a: 'Refresh the page. If using TV/projector, make sure it stays connected to internet. Live wall auto-refreshes every 10 seconds.',
        },
        {
          q: 'Forgot my event link',
          a: 'Check your email - we sent the link when you created the event. Or login to your dashboard to find all your events.',
        },
      ],
    },
  ];

  const filteredFaqs = faqCategories
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (faq) =>
          faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.a.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.questions.length > 0);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-white via-[#B8E4D0]/5 to-[#FFB200]/5 relative overflow-hidden">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={fadeInUp} className="text-center max-w-4xl mx-auto">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block text-6xl mb-6"
            >
              <HelpCircle className="w-16 h-16 mx-auto text-[#FFB200]" />
            </motion.div>

            <h1 className="mb-6">
              <span className="block text-4xl md:text-6xl lg:text-7xl mb-4">
                How Can We
              </span>
              <span className="block text-4xl md:text-6xl lg:text-7xl bg-gradient-to-r from-[#FFB200] via-[#FF4D67] to-[#176B87] bg-clip-text text-transparent">
                Help You?
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Find answers to common questions about Kululu
            </p>

            {/* Search Bar */}
            <motion.div variants={fadeInUp} className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 text-lg rounded-2xl border-2 border-gray-200 focus:border-[#FFB200] shadow-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {(searchQuery ? filteredFaqs : faqCategories).map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="text-4xl">{category.icon}</div>
                <h2 className="text-3xl md:text-4xl">{category.category}</h2>
              </div>

              {/* Questions Accordion */}
              <Accordion type="single" collapsible className="space-y-3">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem
                    key={faqIndex}
                    value={`${categoryIndex}-${faqIndex}`}
                    className="bg-gradient-to-br from-white to-gray-50 rounded-2xl px-6 border border-gray-100 shadow-sm hover:shadow-md transition-all"
                  >
                    <AccordionTrigger className="hover:no-underline py-5 text-left">
                      <span className="pr-4">{faq.q}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-5">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}

          {searchQuery && filteredFaqs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-xl text-gray-600 mb-4">
                No results found for "{searchQuery}"
              </p>
              <Button
                onClick={() => setSearchQuery('')}
                variant="outline"
                className="border-2 border-[#FFB200] text-[#FFB200] hover:bg-[#FFB200] hover:text-white"
              >
                Clear Search
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-[#B8E4D0]/10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4">Still Need Help?</h2>
            <p className="text-xl text-gray-600">Our support team is here for you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-center cursor-pointer"
              onClick={() => onNavigate('contact')}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FFB200] to-[#FF4D67] flex items-center justify-center mx-auto mb-4 shadow-lg"
              >
                <MessageCircle className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="mb-2">WhatsApp Support</h3>
              <p className="text-gray-600 mb-4">Get instant replies</p>
              <p className="text-[#FFB200]">Chat Now →</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-center cursor-pointer"
              onClick={() => onNavigate('contact')}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF4D67] to-[#176B87] flex items-center justify-center mx-auto mb-4 shadow-lg"
              >
                <Mail className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">support@kululu.in</p>
              <p className="text-[#FF4D67]">Send Email →</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-center cursor-pointer"
              onClick={() => onNavigate('contact')}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#176B87] to-[#B8E4D0] flex items-center justify-center mx-auto mb-4 shadow-lg"
              >
                <Phone className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">+91 98765 43210</p>
              <p className="text-[#176B87]">Call Now →</p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
