import { motion } from 'motion/react';
import {
  QrCode,
  Upload,
  Monitor,
  ArrowRight,
  Check,
  Star,
  Zap,
  Heart,
  Camera,
  Video,
  Sparkles,
  Users,
  Globe,
  Download,
  Settings,
  BarChart,
  Clock,
  MessageCircle,
  ImageIcon,
  Palette,
  Cloud,
  Smartphone,
  LucideIcon,
  MessageSquareText,
  Mail,
  Lock,
  Wrench,
} from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const steps = [
    {
      icon: QrCode,
      title: 'Share QR or Link',
      description: 'Guests scan the QR code or click your event link. No app download needed!',
      color: 'from-[#FFB200] to-[#FF4D67]',
    },
    {
      icon: Upload,
      title: 'Upload Memories',
      description: 'Everyone uploads photos & videos instantly from their phones.',
      color: 'from-[#FF4D67] to-[#176B87]',
    },
    {
      icon: Monitor,
      title: 'Live Photo Wall',
      description: 'Watch memories appear in real-time on your live slideshow & download album.',
      color: 'from-[#176B87] to-[#B8E4D0]',
    },
  ];

  const useCases = [
    {
      title: 'Weddings',
      emoji: '💒',
      description: 'Capture every ritual, every smile',
      image: 'https://images.unsplash.com/photo-1645856052472-95fe99103c11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzYyMjI5MTE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Birthdays',
      emoji: '🎂',
      description: 'From cake cutting to party time',
      image: 'https://images.unsplash.com/photo-1650584997985-e713a869ee77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5JTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzYyMjI3ODA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'College Fests',
      emoji: '🎓',
      description: 'Capture the energy and memories',
      image: 'https://images.unsplash.com/photo-1653285634338-9481a8ed9c12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwZmVzdGl2YWwlMjBjcm93ZHxlbnwxfHx8fDE3NjIyNDA0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Corporate Events',
      emoji: '💼',
      description: 'Professional memories made easy',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudHxlbnwxfHx8fDE3NjIyNDA0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Family Trips',
      emoji: '✈️',
      description: 'Collect memories from everyone',
      image: '/images/familytrip.jpg',
    },
    {
      title: 'Festivals',
      emoji: '🪔',
      description: 'Diwali, Holi, and all celebrations',
      image: 'https://images.unsplash.com/photo-1674735663722-443292281fe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXN0aXZhbCUyMGNlbGVicmF0aW9uJTIwbGlnaHRzfGVufDF8fHx8MTc2MjI0MDQxNHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      event: 'Wedding in Delhi',
      avatar: '👰',
      text: 'Got 500+ photos from guests! So much easier than asking everyone separately. Best decision for our wedding! 🙏',
      rating: 5,
    },
    {
      name: 'Rajesh Kumar',
      event: 'Corporate Annual Day',
      avatar: '👨‍💼',
      text: 'Organized our company event with 200+ employees. Everyone loved the live photo wall! Very professional.',
      rating: 5,
    },
    {
      name: 'Aisha Patel',
      event: 'Birthday Party',
      avatar: '👧',
      text: "My daughter's 1st birthday was perfect! Relatives from different cities uploaded photos. Made an amazing album! ❤️",
      rating: 5,
    },
  ];

  const features = [
    { icon: Camera, text: 'Unlimited Photos' },
    { icon: Video, text: 'HD Video Support' },
    { icon: Globe, text: '7 Languages' },
    { icon: Download, text: 'Instant Download' },
  ];

  const additionalFeatures: { icon: React.ElementType; title: string; description: string; }[] = [
    {
      icon: ImageIcon,
      title: "Digital Album",
      description: "All photos and videos are automatically saved in a digital album for you to access at any time.",
    },
    {
      icon: Download,
      title: "One-click Download",
      description: "With just one click, you can download all photos to your device or cloud storage.",
    },
    {
      icon: Smartphone,
      title: "No Apps Required",
      description: "Neither you nor your guests need to waste time on downloads to participate.",
    },
    {
      icon: QrCode,
      title: "QR Code Templates",
      description: "Get a unique QR code to print on cards and signs for guests to access your digital album easily.",
    },
    {
      icon: Monitor,
      title: "Live Photo Wall",
      description: "A live slideshow featuring photos and videos uploaded by you and your guests.",
    },
    {
      icon: Wrench,
      title: "Customizations",
      description: "Create a personalized experience by customizing everything with your brand's colors and style.",
    },
    {
      icon: Mail,
      title: "Text & Captions",
      description: "Guests can add decorated text posts or captions alongside their photos/videos.",
    },
    {
      icon: Lock,
      title: "Private & Secured",
      description: "Your photos are private. Only you and those you share them with can access them.",
    },

  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-[#B8E4D0]/5 to-[#FFB200]/5">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-[#FFB200] to-[#FF4D67] rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-[#176B87] to-[#B8E4D0] rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg mb-8 border border-[#FFB200]/20"
            >
              <Sparkles className="w-4 h-4 text-[#FFB200]" />
              <span className="text-sm">India's #1 Event Memory Platform</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6"
            >
              <span className="block text-5xl md:text-7xl lg:text-8xl mb-4">
                No app. No signup.
              </span>
              <span className="block text-5xl md:text-7xl lg:text-8xl bg-gradient-to-r from-[#FFB200] via-[#FF4D67] to-[#176B87] bg-clip-text text-transparent">
                Just memories.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              From <span className="text-[#FF4D67]">Shaadi</span> to{' '}
              <span className="text-[#FFB200]">Startup Parties</span> — collect photos & videos
              from everyone. Works in your language 🇮🇳
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Button
                onClick={() => onNavigate('pricing')}
                className="bg-gradient-to-r from-[#FFB200] to-[#FF4D67] hover:shadow-2xl hover:scale-105 transition-all text-white border-0 px-8 py-6 text-lg group"
              >
                Create Free Event
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => onNavigate('use-cases')}
                variant="outline"
                className="border-2 border-[#176B87] text-[#176B87] hover:bg-[#176B87] hover:text-white px-8 py-6 text-lg transition-all"
              >
                See Demo
              </Button>
            </motion.div>

            {/* Quick Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-6 mb-8"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-md"
                >
                  <feature.icon className="w-5 h-5 text-[#FFB200]" />
                  <span className="text-sm text-gray-700">{feature.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Animated QR Demo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="relative mx-auto max-w-2xl"
            >
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="flex items-center justify-center gap-8 flex-wrap">
                  {/* QR Code */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    className="p-6 bg-gradient-to-br from-[#FFB200]/10 to-[#FF4D67]/10 rounded-2xl"
                  >
                    <QrCode className="w-24 h-24 text-[#176B87]" />
                  </motion.div>

                  {/* Arrow */}
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight className="w-8 h-8 text-[#FFB200]" />
                  </motion.div>

                  {/* Upload */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="p-6 bg-gradient-to-br from-[#FF4D67]/10 to-[#176B87]/10 rounded-2xl"
                  >
                    <Upload className="w-24 h-24 text-[#FF4D67]" />
                  </motion.div>

                  {/* Arrow */}
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight className="w-8 h-8 text-[#FF4D67]" />
                  </motion.div>

                  {/* Live Wall */}
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="p-6 bg-gradient-to-br from-[#176B87]/10 to-[#B8E4D0]/10 rounded-2xl"
                  >
                    <Monitor className="w-24 h-24 text-[#176B87]" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section>
        {/* step-1 */}
        <div className="py-12 md:py-6 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* div Heading */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                How does it work?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Hassle-free experience — for you and your guests.
              </p>
            </motion.div>

            {/* Two-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

              {/* Left Side - Text Content */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-col justify-center max-w-lg mx-auto"
              >
                {/* Step Label */}
                <div className="flex items-center mb-4">
                  {/* <div className="bg-gradient-to-r from-[#FFB200] to-[#FF4D67] text-white rounded-full flex justify-center items-center w-[32px] h-[32px] mr-2 font-semibold text-sm shadow-md">
                    1
                  </div> */}
                  <div className="flex justify-center items-center mr-2 w-8 h-8 rounded-full bg-gradient-to-r from-[#FFB200] to-[#FF4D67] text-white font-semibold text-[14px] leading-none shadow-md">
                    1
                  </div>

                  <span className="text-[#FF4D67] font-semibold text-lg">
                    Step 1:
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Create your event
                </h2>

                {/* Description */}
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Create a private digital album for guests to add photos, videos, and
                  messages. Customize the title, date, colors, and backgrounds to make it
                  your own!
                </p>

                {/* Button */}
                <button className="inline-flex items-center w-fit justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 bg-gradient-to-r from-[#FFB200] to-[#FF4D67] hover:shadow-lg hover:scale-105 transition-all text-white border-0">
                  Create Your Event
                </button>
              </motion.div>

              {/* Right Side - Image */}
              <motion.div variants={fadeInUp} className="flex justify-center">
                <img
                  src="https://cdn.prod.website-files.com/5ddbd5d1cd7d378da32a8223/65db0b4d121420dd8b1c384e_Group%2025-min.png"
                  alt="Event Preview"
                  className="w-full max-w-md rounded-2xl drop-shadow-xl h-[400px]"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* step-2 */}
        <div className="py-12 md:py-6 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

              {/* LEFT — Video (replaces image) */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex justify-center md:justify-end"
              >
                <div className="relative max-w-md   rounded-2xl overflow-hidden">
                  <video
                    className="  h-[400px]"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="https://cdn.prod.website-files.com/5ddbd5d1cd7d378da32a8223/65b8ee0bea37bcbfe971e817_Kululu%20(1)-poster-00001.jpg"
                  >
                    <source src="https://cdn.prod.website-files.com/5ddbd5d1cd7d378da32a8223/65b8ee0bea37bcbfe971e817_Kululu%20(1)-transcode.mp4" type="video/mp4" />
                    <source src="https://cdn.prod.website-files.com/5ddbd5d1cd7d378da32a8223/65b8ee0bea37bcbfe971e817_Kululu%20(1)-transcode.webm" type="video/webm" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Optional overlay for tint */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                </div>

              </motion.div>

              {/* RIGHT — Text */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col justify-center max-w-lg mx-auto md:mx-0"
              >
                {/* Step label */}
                <div className="flex items-center mb-4">
                  <div className="flex justify-center items-center mr-2 w-8 h-8 rounded-full bg-gradient-to-r from-[#FFB200] to-[#FF4D67] text-white font-semibold text-[14px] leading-none shadow-md">
                    2
                  </div>
                  <span className="text-[#FF4D67] font-semibold text-lg">Step 2:</span>
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
                  Share it with your guests
                </h2>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Your guests can easily view or contribute photos and videos to your
                  digital album by scanning the unique QR code or using the album URL —
                  before, during, and after your event!
                </p>

                {/* Bullet points */}
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#FF4D67] mr-2 text-lg">✔</span>
                    <span>Share as a link through email, SMS, chat apps etc.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF4D67] mr-2 text-lg">✔</span>
                    <span>Share as a QR code on printed cards and signs.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF4D67] mr-2 text-lg">✔</span>
                    <span>No app downloads. No registrations needed.</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* step-3 */}
        <div className="py-12 md:py-6 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

              {/* LEFT — Text */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col justify-center max-w-lg mx-auto md:mx-0"
              >
                {/* Step label */}
                <div className="flex items-center mb-4">
                  <div className="flex justify-center items-center mr-2 w-8 h-8 rounded-full bg-gradient-to-r from-[#FFB200] to-[#FF4D67] text-white font-semibold text-[14px] leading-none shadow-md">
                    3
                  </div>
                  <span className="bg-gradient-to-r from-[#FFB200] to-[#FF4D67] bg-clip-text text-transparent font-bold text-lg">
                    Step 3 (optional):
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
                  Display it all on a live slideshow
                </h2>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Up for some fun? Add to the event a <strong>Live Photo Wall</strong> (slideshow)
                  that updates in real time with every photo and video added by you or
                  your guests. Easily display it on projectors, TVs, tablets, or wherever you like.
                </p>

                {/* Button */}
                <button className="inline-flex items-center w-fit justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 bg-gradient-to-r from-[#FFB200] to-[#FF4D67] hover:shadow-lg hover:scale-105 transition-all text-white border-0">
                  See Live Example →
                </button>
              </motion.div>

              {/* RIGHT — New Video Embed */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex justify-center md:justify-start"
              >
                <div className="relative max-w-md md:max-w-lg aspect-[2/2.6]  h-fit  ">
                  <video
                    className="w-full h-300px object-contain livePhotoWallDemo"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="https://storage.googleapis.com/media.kululu.me/1_utils/website-assets/photo-wall-animation-poster.jpg"
                  >
                    <source
                      src="https://storage.googleapis.com/media.kululu.me/1_utils/website-assets/photo-wall-example.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </motion.div>

            </div>
          </div>
        </div>

        {/* step-4 */}
        <div className="py-12 md:py-6 bg-white overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

              {/* LEFT — Image + Floating Bubbles */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative flex justify-center md:justify-end"
              >
                {/* Main Album Image */}
                <img
                  src="https://cdn.prod.website-files.com/5ddbd5d1cd7d378da32a8223/65db09e75be9c83c1a745d1b_album-min.png"
                  srcSet="
                    https://cdn.prod.website-files.com/5ddbd5d1cd7d378da32a8223/65db09e75be9c83c1a745d1b_album-min-p-500.png 500w,
                    https://cdn.prod.website-files.com/5ddbd5d1cd7d378da32a8223/65db09e75be9c83c1a745d1b_album-min-p-800.png 800w,
                    https://cdn.prod.website-files.com/5ddbd5d1cd7d378da32a8223/65db09e75be9c83c1a745d1b_album-min-p-1080.png 1080w"
                  alt="Event Photo Sharing App"
                  className=" w-full max-w-md md:max-w-lg"
                />

                {/* Floating Bubbles */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute top-10 left-4 bg-white/90 px-3 py-1 rounded-full shadow-md text-sm font-medium flex items-center gap-1"
                >
                  🌅 Candid Photos
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  className="absolute bottom-2 left-4 bg-white/90 px-3 py-1 rounded-full shadow-md text-sm font-medium flex items-center gap-1"
                >
                  ❤️ Love
                </motion.div>

                <motion.div
                  animate={{ y: [-15, 15, -15] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  className="absolute top-10 right-6 bg-white/90 px-3 py-1 rounded-full shadow-md text-sm font-medium flex items-center gap-1"
                >
                  🎉 Celebrations
                </motion.div>

                <motion.div
                  animate={{ y: [15, -15, 15] }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                  className="absolute bottom-8 right-8 bg-white/90 px-3 py-1 rounded-full shadow-md text-sm font-medium flex items-center gap-1"
                >
                  📣 Greetings
                </motion.div>
              </motion.div>

              {/* RIGHT — Text div */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col justify-center max-w-lg mx-auto md:mx-0"
              >
                {/* Step label */}
                <div className="flex items-center mb-4">
                  <div className="flex justify-center items-center mr-2 w-8 h-8 rounded-full bg-gradient-to-r from-[#FFB200] to-[#FF4D67] text-white font-semibold text-[14px] leading-none shadow-md ">
                    4
                  </div>
                  <span className="bg-gradient-to-r from-[#FFB200] to-[#FF4D67] bg-clip-text text-transparent font-semibold text-lg hover:drop-shadow-md transition-all">
                    Step 4:
                  </span>

                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
                  Enjoy all captured moments
                </h2>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  At any given moment you can view all the photos and videos captured by
                  your guests in your own digital album. Revisit and cherish those
                  unforgettable memories!
                </p>

                {/* Bullet Points */}
                <ul className="space-y-3 text-gray-700 mb-8">
                  <li className="flex items-start">
                    <span className="text-[#FF00B8] mr-2 text-lg">✔</span>
                    <span>Every moment is captured in a stunning digital album.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF00B8] mr-2 text-lg">✔</span>
                    <span>Download everything as a zipped folder in a click.</span>
                  </li>
                </ul>

                {/* Button */}
                <button className="inline-flex items-center w-fit justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 bg-gradient-to-r from-[#FFB200] to-[#FF4D67] hover:shadow-lg hover:scale-105 transition-all text-white border-0">
                  Create Your Event
                </button>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Preview Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-[#B8E4D0]/10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="mb-4">
              <span className="text-4xl md:text-6xl">Perfect for Every</span>{' '}
              <span className="text-4xl md:text-6xl bg-gradient-to-r from-[#FFB200] to-[#FF4D67] bg-clip-text text-transparent">
                Celebration
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer"
                onClick={() => onNavigate('use-cases')}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all bg-white">
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={useCase.image}
                      alt={useCase.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    {/* Emoji Badge */}
                    <div className="absolute top-4 left-4 text-4xl bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                      {useCase.emoji}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="mb-2">{useCase.title}</h3>
                    <p className="text-gray-600">{useCase.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="text-center">
            <Button
              onClick={() => onNavigate('use-cases')}
              className="bg-gradient-to-r from-[#FFB200] to-[#FF4D67] hover:shadow-xl hover:scale-105 transition-all text-white border-0 px-8 py-6 text-lg group"
            >
              Explore All Use Cases
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </section>
      <section className="py-20 bg-gradient-to-br from-gray-50 to-[#B8E4D0]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">All you need for a perfect event</h2>
            <p className="text-xl text-gray-600">
              From digital albums to QR code templates - we've got it all covered
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
      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="mb-4">
              <span className="text-4xl md:text-6xl">Loved by</span>{' '}
              <span className="text-4xl md:text-6xl bg-gradient-to-r from-[#FFB200] to-[#FF4D67] bg-clip-text text-transparent">
                10,000+ Hosts
              </span>
            </h2>
            <p className="text-xl text-gray-600">Real stories from real celebrations</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FFB200] text-[#FFB200]" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFB200] to-[#FF4D67] flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.event}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#FFB200] via-[#FF4D67] to-[#176B87] relative overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto">
            <h2 className="mb-6 text-white">
              <span className="block text-4xl md:text-6xl">
                Ready to collect memories?
              </span>
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Start your first event in under 60 seconds. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => onNavigate('pricing')}
                className="bg-white text-[#FF4D67] hover:bg-gray-100 hover:scale-105 transition-all px-8 py-6 text-lg shadow-xl"
              >
                Create Free Event
                <Sparkles className="ml-2 w-5 h-5" />
              </Button>

              <Button
                onClick={() => onNavigate('contact')}
                className="bg-white text-[#FF4D67] hover:bg-gray-100 hover:scale-105 transition-all px-8 py-6 text-lg shadow-xl"
              >
                Talk to Sales
              </Button>

            </div>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute top-10 left-10 w-32 h-32"
          >
            <Camera className="w-full h-full text-white" />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-10 right-10 w-40 h-40"
          >
            <Heart className="w-full h-full text-white" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
