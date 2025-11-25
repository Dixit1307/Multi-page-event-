import { motion } from 'framer-motion';
import {
  Upload,
  Globe,
  Download,
  Smartphone,
  Zap,
  Lock,
  Cloud,
  Palette,
  MessageCircle,
  Video,
  Image as ImageIcon,
  Clock,
  Users,
  BarChart,
  Settings,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { Button } from './ui/button';

interface FeaturesPageProps {
  onNavigate: (page: string) => void;
}

export function FeaturesPage({ onNavigate }: FeaturesPageProps) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const mainFeatures = [
    {
      image: '/images/qrcode&linksharing.jpg',
      title: 'QR Code & Link Sharing',
      description:
        'Generate instant QR codes for your event. Print them, share digitally, or display on screens. Guests scan and start uploading immediately.',
      gradient: 'from-[#FFB200] to-[#FF4D67]',
      benefits: ['Instant access', 'No app download', 'Works everywhere', 'Print-friendly'],
      animation: 'qr',
    },
    {
      image: '/images/unlimiteduploads.jpg',
      title: 'Unlimited Uploads',
      description:
        'Photos, videos, boomerangs — upload as many as you want. No file size limits, no restrictions. HD quality preserved.',
      gradient: 'from-[#FF4D67] to-[#176B87]',
      benefits: ['Unlimited photos', 'HD video support', 'Bulk upload', 'Auto-compress'],
      animation: 'upload',
    },
    {
      image: '/images/livephotowall.jpg',
      title: 'Live Photo Wall',
      description:
        'Display uploaded photos in real-time on any screen. Perfect for receptions, parties, and events. Auto-updates as guests upload.',
      gradient: 'from-[#176B87] to-[#B8E4D0]',
      benefits: ['Real-time updates', 'Fullscreen mode', 'Slideshow options', 'TV compatible'],
      animation: 'slideshow',
    },
    {
      image: '/images/multilanguages.jpg',
      title: 'Multi-Language Support',
      description:
        'Available in 7 Indian languages — Hindi, English, Gujarati, Marathi, Tamil, Telugu, Bengali — so everyone feels at home.',
      gradient: 'from-[#B8E4D0] to-[#FFB200]',
      benefits: ['7 languages', 'Auto-detect', 'Easy switching', 'Regional comfort'],
      animation: 'language',
    },
    {
      image: '/images/whatsappintegration.jpg',
      title: 'WhatsApp Integration',
      description:
        'Share event links directly on WhatsApp. Guests receive instant notifications when new photos are uploaded.',
      gradient: 'from-[#FFB200] to-[#176B87]',
      benefits: ['WhatsApp ready', 'Instant sharing', 'Group support', 'Notifications'],
      animation: 'share',
    },
    {
      image: '/images/oneclickdownload.jpg',
      title: 'One-Click Download',
      description:
        'Download all your event photos and videos in one click — high-resolution originals preserved.',
      gradient: 'from-[#FF4D67] to-[#B8E4D0]',
      benefits: ['Bulk download', 'Original quality', 'Album creation', 'Cloud backup'],
      animation: 'download',
    },
  ];

  const additionalFeatures = [
    { icon: Smartphone, title: 'Mobile First', description: 'Optimized for all devices' },
    { icon: Zap, title: 'Lightning Fast', description: 'Upload & view in seconds' },
    { icon: Lock, title: 'Private & Secure', description: 'Your memories, protected' },
    { icon: Cloud, title: 'Cloud Storage', description: 'Safe backup included' },
    { icon: Palette, title: 'Custom Themes', description: 'Match your event style' },
    { icon: MessageCircle, title: 'Photo Comments', description: 'Add captions & reactions' },
    { icon: Video, title: 'Video Support', description: 'Full HD video uploads' },
    { icon: ImageIcon, title: 'Smart Gallery', description: 'Auto‑organized albums' },
    { icon: Clock, title: 'Timeline View', description: 'Chronological sorting' },
    { icon: Users, title: 'Guest List', description: 'Track who uploaded' },
    { icon: BarChart, title: 'Analytics', description: 'View upload stats' },
    { icon: Settings, title: 'Customizable', description: 'Full control options' },
  ];

  const comparisonFeatures = [
    { feature: 'Unlimited Uploads', kululu: true, traditional: false },
    { feature: 'No App Required', kululu: true, traditional: false },
    { feature: 'Multi‑Language', kululu: true, traditional: false },
    { feature: 'Live Photo Wall', kululu: true, traditional: false },
    { feature: 'HD Quality', kululu: true, traditional: true },
    { feature: 'One‑Click Download', kululu: true, traditional: false },
    { feature: 'WhatsApp Integration', kululu: true, traditional: false },
    { feature: 'Free Plan Available', kululu: true, traditional: false },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-white via-[#B8E4D0]/5 to-[#FFB200]/5 relative overflow-hidden">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={fadeInUp} className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg mb-6 border border-[#FFB200]/20"
            >
              <Sparkles className="w-4 h-4 text-[#FFB200]" />
              <span className="text-sm">Everything You Need & More</span>
            </motion.div>

            <h1 className="mb-6">
              <span className="block text-4xl md:text-6xl lg:text-7xl mb-4">Powerful Features.</span>
              <span className="block text-4xl md:text-6xl lg:text-7xl bg-gradient-to-r from-[#FFB200] via-[#FF4D67] to-[#176B87] bg-clip-text text-transparent">
                Simple Experience.
              </span>
            </h1>

            <p className="text-xl text-gray-600">
              Everything you need to collect, share, and cherish memories from every event
            </p>
          </motion.div>
        </motion.div>

        <div className="absolute inset-0 overflow-hidden opacity-5">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/4 left-1/4 w-64 h-64"
          >
            <Sparkles className="w-full h-full text-[#FFB200]" />
          </motion.div>
        </div>
      </section>

      {/* Main Features (Alternating Layout) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {mainFeatures.map((feature, index) => {
              const isEven = index % 2 === 1; // alternate layout direction
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? 'lg:flex-row-reverse' : ''
                    }`}
                >
                  {/* Text */}
                  <div className={`${isEven ? 'lg:order-2' : ''}`}>
                    <motion.div whileHover={{ x: 10 }} className="space-y-6">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`inline-flex w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} items-center justify-center shadow-lg`}
                      >
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-10 h-10 object-cover rounded-lg"
                        />
                      </motion.div>

                      <h2 className="text-3xl md:text-4xl lg:text-5xl">{feature.title}</h2>
                      <p className="text-xl text-gray-600">{feature.description}</p>

                      <div className="grid grid-cols-2 gap-3">
                        {feature.benefits.map((benefit, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2 px-3 py-2 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 shadow-sm"
                          >
                            <CheckCircle2 className="w-5 h-5 text-[#FFB200]" />
                            <span className="text-sm">{benefit}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Image */}
                  <motion.div
                    className={`${isEven ? 'lg:order-1' : ''}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <div
                      className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${feature.gradient} p-12 shadow-2xl`}
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.05, 1],
                          rotate: feature.animation === 'qr' ? [0, 5, 0] : 0,
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="bg-white rounded-2xl p-12 shadow-xl flex items-center justify-center"
                      >
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-45 h-45 object-cover rounded-2xl shadow-md"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-[#B8E4D0]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">And There's More...</h2>
            <p className="text-xl text-gray-600">
              Packed with features to make your event unforgettable
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100 group cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FFB200] to-[#FF4D67] flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow"
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-[#FFB200] to-[#FF4D67] bg-clip-text text-transparent">
                Kululu
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-600">See how we compare</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
          >
            <div className="grid grid-cols-3 bg-gradient-to-r from-[#FFB200] to-[#FF4D67] text-white p-6">
              <div />
              <div className="text-center font-medium">Kululu</div>
              <div className="text-center font-medium">Traditional</div>
            </div>

            {comparisonFeatures.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`grid grid-cols-3 items-center p-6 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                  }`}
              >
                <div className="text-gray-700">{item.feature}</div>
                <div className="text-center">
                  {item.kululu ? (
                    <CheckCircle2 className="w-6 h-6 text-green-500 mx-auto" />
                  ) : (
                    <span className="text-red-500 text-xl">✕</span>
                  )}
                </div>
                <div className="text-center">
                  {item.traditional ? (
                    <CheckCircle2 className="w-6 h-6 text-green-500 mx-auto" />
                  ) : (
                    <span className="text-red-500 text-xl">✕</span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#FFB200] via-[#FF4D67] to-[#176B87]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl md:text-6xl text-white mb-6">
              Experience All Features Free
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Start with our free plan. Upgrade anytime as your needs grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => onNavigate('pricing')}
                className="bg-white text-[#FF4D67] hover:bg-gray-100 hover:scale-105 transition-all px-8 py-6 text-lg shadow-xl flex items-center"
              >
                See Pricing
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                onClick={() => onNavigate('use-cases')}
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 hover:scale-105 transition-all px-8 py-6 text-lg shadow-xl"
              >
                Explore Use Cases
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}