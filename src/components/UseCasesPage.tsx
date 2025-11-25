import { motion } from 'motion/react';
import {
  Heart,
  Users,
  Briefcase,
  GraduationCap,
  Plane,
  Sparkles,
  Home,
  Baby,
  PartyPopper,
  Camera,
  Video,
  Share2,
  Download,
  ArrowRight,
} from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface UseCasesPageProps {
  onNavigate: (page: string) => void;
}

export function UseCasesPage({ onNavigate }: UseCasesPageProps) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const useCases = [
    {
      id: 'weddings',
      title: 'Indian Weddings',
      emoji: '💒',
      icon: Heart,
      description: 'From Haldi to Vidaai, capture every precious moment',
      image: 'https://images.unsplash.com/photo-1645856052472-95fe99103c11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzYyMjI5MTE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Multi-day event support',
        'Separate albums for each ceremony',
        'Live slideshow during reception',
        'WhatsApp sharing for relatives',
      ],
      gradient: 'from-[#FF4D67] to-[#FFB200]',
      stats: { photos: '1000+', guests: '500+', events: '5,000+' },
    },
    {
      id: 'birthdays',
      title: 'Birthday Parties',
      emoji: '🎂',
      icon: PartyPopper,
      description: 'Celebrate another year with memories from everyone',
      image: 'https://images.unsplash.com/photo-1650584997985-e713a869ee77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5JTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzYyMjI3ODA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Fun photo filters',
        'Instant photo booth wall',
        'Birthday video messages',
        'Easy album download',
      ],
      gradient: 'from-[#FFB200] to-[#FF4D67]',
      stats: { photos: '200+', guests: '50+', events: '15,000+' },
    },
    {
      id: 'corporate',
      title: 'Corporate Events',
      emoji: '💼',
      icon: Briefcase,
      description: 'Professional events, streamlined memory collection',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudHxlbnwxfHx8fDE3NjIyNDA0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Team building moments',
        'Conference coverage',
        'Product launch galleries',
        'Branded event pages',
      ],
      gradient: 'from-[#176B87] to-[#B8E4D0]',
      stats: { photos: '300+', guests: '200+', events: '3,000+' },
    },
    {
      id: 'college',
      title: 'College Fests',
      emoji: '🎓',
      icon: GraduationCap,
      description: 'Capture the energy of youth and celebration',
      image: 'https://images.unsplash.com/photo-1653285634338-9481a8ed9c12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwZmVzdGl2YWwlMjBjcm93ZHxlbnwxfHx8fDE3NjIyNDA0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'High volume uploads',
        'Live photo wall on stage',
        'Student-friendly pricing',
        'Competitions & contests',
      ],
      gradient: 'from-[#FF4D67] to-[#176B87]',
      stats: { photos: '2000+', guests: '1000+', events: '2,000+' },
    },
    {
      id: 'trips',
      title: 'Family Trips',
      emoji: '✈️',
      icon: Plane,
      description: 'Collect memories from everyone on your journey',
      image: '/images/familytrip.jpg',
      features: [
        'Multi-day trip albums',
        'Location-based galleries',
        'Offline upload support',
        'Collaborative storytelling',
      ],
      gradient: 'from-[#B8E4D0] to-[#176B87]',
      stats: { photos: '500+', guests: '20+', events: '8,000+' },
    },
    {
      id: 'festivals',
      title: 'Festival Celebrations',
      emoji: '🪔',
      icon: Sparkles,
      description: 'Diwali, Holi, Eid, Christmas - all celebrations',
      image: 'https://images.unsplash.com/photo-1674735663722-443292281fe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXN0aXZhbCUyMGNlbGVicmF0aW9uJTIwbGlnaHRzfGVufDF8fHx8MTc2MjI0MDQxNHww&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Cultural photo collections',
        'Family moments preserved',
        'Multi-language support',
        'Festival-themed templates',
      ],
      gradient: 'from-[#FFB200] to-[#176B87]',
      stats: { photos: '300+', guests: '100+', events: '12,000+' },
    },
    {
      id: 'housewarming',
      title: 'Housewarming',
      emoji: '🏠',
      icon: Home,
      description: 'Celebrate your new beginning with loved ones',
      image: '/images/housewarming.jpg',
      features: [
        'Home tour videos',
        'Guest blessings collection',
        'Puja ceremony photos',
        'Family gathering memories',
      ],
      gradient: 'from-[#B8E4D0] to-[#FFB200]',
      stats: { photos: '150+', guests: '40+', events: '4,000+' },
    },
    {
      id: 'babyshower',
      title: 'Baby Showers',
      emoji: '👶',
      icon: Baby,
      description: 'Precious moments before the arrival',
      image: '/images/babyshower.jpg',
      features: [
        'Adorable photo albums',
        'Wishes & blessings',
        'Games & fun moments',
        'Memory book creation',
      ],
      gradient: 'from-[#FF4D67] to-[#B8E4D0]',
      stats: { photos: '100+', guests: '30+', events: '6,000+' },
    },
  ];

  const howItHelps = [
    {
      icon: Camera,
      title: 'Everyone Contributes',
      description: 'No more "Send me photos later" messages',
    },
    {
      icon: Video,
      title: 'Photos & Videos',
      description: 'Support for all media types',
    },
    {
      icon: Share2,
      title: 'Easy Sharing',
      description: 'QR code or simple link',
    },
    {
      icon: Download,
      title: 'Instant Download',
      description: 'Get all memories in one album',
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
          <motion.div variants={fadeInUp} className="text-center max-w-4xl mx-auto mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg mb-6 border border-[#FFB200]/20"
            >
              <Sparkles className="w-4 h-4 text-[#FFB200]" />
              <span className="text-sm">Every Celebration Covered</span>
            </motion.div>

            <h1 className="mb-6">
              <span className="block text-4xl md:text-6xl lg:text-7xl mb-4">
                Made for Every
              </span>
              <span className="block text-4xl md:text-6xl lg:text-7xl bg-gradient-to-r from-[#FFB200] via-[#FF4D67] to-[#176B87] bg-clip-text text-transparent">
                Indian Celebration
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              From intimate family gatherings to grand celebrations, Kululu makes memory
              collection effortless
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {howItHelps.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-3 bg-white rounded-xl shadow-md"
                >
                  <item.icon className="w-5 h-5 text-[#FFB200]" />
                  <span className="text-sm">{item.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="space-y-6"
                  >
                    {/* Icon & Title */}
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center text-3xl shadow-lg`}
                      >
                        {useCase.emoji}
                      </div>
                      <div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl">{useCase.title}</h2>
                      </div>
                    </div>

                    <p className="text-xl text-gray-600">{useCase.description}</p>

                    {/* Features */}
                    <div className="space-y-3">
                      {useCase.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${useCase.gradient} flex items-center justify-center flex-shrink-0`}>
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex gap-8 pt-4">
                      <div>
                        <p className={`text-2xl bg-gradient-to-r ${useCase.gradient} bg-clip-text text-transparent`}>
                          {useCase.stats.photos}
                        </p>
                        <p className="text-sm text-gray-500">Avg. Photos</p>
                      </div>
                      <div>
                        <p className={`text-2xl bg-gradient-to-r ${useCase.gradient} bg-clip-text text-transparent`}>
                          {useCase.stats.guests}
                        </p>
                        <p className="text-sm text-gray-500">Avg. Guests</p>
                      </div>
                      <div>
                        <p className={`text-2xl bg-gradient-to-r ${useCase.gradient} bg-clip-text text-transparent`}>
                          {useCase.stats.events}
                        </p>
                        <p className="text-sm text-gray-500">Events Hosted</p>
                      </div>
                    </div>

                    <Button
                      onClick={() => onNavigate('pricing')}
                      className={`bg-gradient-to-r ${useCase.gradient} hover:shadow-xl hover:scale-105 transition-all text-white border-0 px-6 py-5 group`}
                    >
                      Create Event
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </div>

                {/* Image */}
                <motion.div
                  className={index % 2 === 1 ? 'lg:order-1' : ''}
                  whileHover={{ scale: 1.03, rotate: index % 2 === 0 ? 2 : -2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <ImageWithFallback
                      src={useCase.image}
                      alt={useCase.title}
                      className="w-full h-[400px] md:h-[500px] object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-20`} />

                    {/* Floating Badge */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute top-6 right-6 bg-white rounded-2xl px-4 py-3 shadow-xl"
                    >
                      <p className="text-sm text-gray-500">Perfect for</p>
                      <p className={`bg-gradient-to-r ${useCase.gradient} bg-clip-text text-transparent`}>
                        {useCase.title}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#FFB200] via-[#FF4D67] to-[#176B87]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl md:text-6xl text-white mb-6">
              Ready for Your Event?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of hosts who trust Kululu for their celebrations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => onNavigate('pricing')}
                className="bg-white text-[#FF4D67] hover:bg-gray-100 hover:scale-105 transition-all px-8 py-6 text-lg shadow-xl"
              >
                Start Free Event
                <Sparkles className="ml-2 w-5 h-5" />
              </Button>

              <Button
                onClick={() => onNavigate('features')}
                className="bg-white text-[#FF4D67] hover:bg-gray-100 hover:scale-105 transition-all px-8 py-6 text-lg shadow-xl"
              >
                Explore Features
              </Button>

            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
