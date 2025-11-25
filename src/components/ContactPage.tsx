import { motion } from 'motion/react';
import {
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  HeartHandshake,
  Zap,
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp Support',
      description: 'Get instant help on WhatsApp',
      detail: '+91 98765 43210',
      action: 'Chat on WhatsApp',
      gradient: 'from-[#25D366] to-[#128C7E]',
      available: '24/7 Support',
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us your questions',
      detail: 'support@kululu.in',
      action: 'Send Email',
      gradient: 'from-[#FF4D67] to-[#FFB200]',
      available: 'Reply within 2 hours',
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Talk to our support team',
      detail: '+91 98765 43210',
      action: 'Call Now',
      gradient: 'from-[#176B87] to-[#B8E4D0]',
      available: 'Mon-Sat, 9AM-8PM',
    },
  ];

  const officeLocations = [
    {
      city: 'Mumbai',
      address: 'Andheri East, Mumbai 400069',
      emoji: '🏢',
    },
    {
      city: 'Delhi',
      address: 'Connaught Place, New Delhi 110001',
      emoji: '🏛️',
    },
    {
      city: 'Bangalore',
      address: 'Koramangala, Bangalore 560034',
      emoji: '🌆',
    },
  ];

  const reasons = [
    {
      icon: Zap,
      title: 'Quick Response',
      description: 'Average reply time: 30 minutes',
    },
    {
      icon: HeartHandshake,
      title: 'Friendly Support',
      description: 'Real humans, not bots',
    },
    {
      icon: Clock,
      title: 'Available 24/7',
      description: 'We\'re here when you need us',
    },
  ];

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
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block text-6xl mb-6"
            >
              👋
            </motion.div>

            <h1 className="mb-6">
              <span className="block text-4xl md:text-6xl lg:text-7xl mb-4">
                Let's Talk!
              </span>
              <span className="block text-4xl md:text-6xl lg:text-7xl bg-gradient-to-r from-[#FFB200] via-[#FF4D67] to-[#176B87] bg-clip-text text-transparent">
                We're Here to Help
              </span>
            </h1>

            <p className="text-xl text-gray-600">
              Questions? Feedback? Just want to say hi? We'd love to hear from you!
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-4">Choose Your Way to Connect</h2>
            <p className="text-xl text-gray-600">Pick whichever is easiest for you</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-gray-100 cursor-pointer group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow`}
                >
                  <method.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl mb-2 text-center">{method.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{method.description}</p>

                <div className="text-center mb-4">
                  <p className={`bg-gradient-to-r ${method.gradient} bg-clip-text text-transparent text-lg`}>
                    {method.detail}
                  </p>
                </div>

                <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-6">
                  <Clock className="w-4 h-4" />
                  <span>{method.available}</span>
                </div>

                <Button
                  className={`w-full bg-gradient-to-r ${method.gradient} hover:shadow-xl text-white border-0 group-hover:scale-105 transition-all`}
                >
                  {method.action}
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Why Contact Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFB200] to-[#FF4D67] flex items-center justify-center flex-shrink-0">
                  <reason.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg">{reason.title}</h3>
                  <p className="text-sm text-gray-600">{reason.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-[#B8E4D0]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl mb-4">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form and we'll get back to you within 24 hours
              </p>

              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="mt-2 h-12"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="mt-2 h-12"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="mt-2 h-12"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      className="mt-2 h-12"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more..."
                      rows={6}
                      className="mt-2"
                    />
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-[#FFB200] to-[#FF4D67] hover:shadow-xl text-white border-0 py-6 text-lg group"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to our privacy policy
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Office Locations */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl mb-6 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-[#FFB200]" />
                  Our Offices
                </h3>
                <div className="space-y-6">
                  {officeLocations.map((location, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 cursor-pointer hover:shadow-md transition-all"
                    >
                      <div className="text-3xl">{location.emoji}</div>
                      <div>
                        <h4 className="mb-1">{location.city}</h4>
                        <p className="text-sm text-gray-600">{location.address}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-gradient-to-br from-[#FFB200] to-[#FF4D67] rounded-3xl p-8 shadow-xl text-white">
                <h3 className="text-2xl mb-4">Need Immediate Help?</h3>
                <p className="mb-6 text-white/90">
                  For urgent support, WhatsApp is your best bet. We're online and ready to
                  help!
                </p>
                <Button
                  className="w-full bg-white text-[#FF4D67] hover:bg-gray-100 py-6 text-lg"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Chat on WhatsApp
                </Button>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl mb-6 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-[#176B87]" />
                  Business Hours
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span>Monday - Friday</span>
                    <span className="text-[#FFB200]">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span>Saturday</span>
                    <span className="text-[#FFB200]">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span>Sunday</span>
                    <span className="text-gray-400">Closed</span>
                  </div>
                  <p className="text-sm text-gray-500 pt-3">
                    WhatsApp support available 24/7
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Ready to Create Your Event?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Don't wait! Start collecting memories in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => onNavigate('pricing')}
              className="bg-gradient-to-r from-[#FFB200] to-[#FF4D67] hover:shadow-xl hover:scale-105 transition-all text-white border-0 px-8 py-6 text-lg"
            >
              Create Free Event
            </Button>
            <Button
              onClick={() => onNavigate('faq')}
              variant="outline"
              className="border-2 border-[#176B87] text-[#176B87] hover:bg-[#176B87] hover:text-white px-8 py-6 text-lg"
            >
              View FAQs
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
