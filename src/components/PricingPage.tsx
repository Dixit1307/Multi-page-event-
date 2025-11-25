import { motion } from 'motion/react';
import {
  Check,
  Sparkles,
  Zap,
  Crown,
  ArrowRight,
  Users,
  Camera,
  Clock,
  Download,
  Smartphone,
  Shield,
  Headphones,
  Star,
} from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface PricingPageProps {
  onNavigate: (page: string) => void;
}

export function PricingPage({ onNavigate }: PricingPageProps) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const plans = [
    {
      name: 'Free',
      icon: Sparkles,
      price: '₹0',
      period: 'Forever',
      description: 'Perfect for small gatherings',
      gradient: 'from-[#B8E4D0] to-[#176B87]',
      features: [
        { text: 'Up to 50 guests', included: true },
        { text: '100 photo uploads', included: true },
        { text: 'Basic live photo wall', included: true },
        { text: 'QR code & link sharing', included: true },
        { text: '7 days album access', included: true },
        { text: 'Standard download', included: true },
        { text: 'WhatsApp sharing', included: true },
        { text: 'Multi-language support', included: true },
        { text: 'HD video uploads', included: false },
        { text: 'Custom branding', included: false },
        { text: 'Priority support', included: false },
      ],
      cta: 'Start Free',
      popular: false,
    },
    {
      name: 'Plus',
      icon: Zap,
      price: '₹499',
      period: 'Per Event',
      description: 'Most popular for celebrations',
      gradient: 'from-[#FFB200] to-[#FF4D67]',
      features: [
        { text: 'Up to 200 guests', included: true },
        { text: 'Unlimited photos & videos', included: true },
        { text: 'Premium live photo wall', included: true },
        { text: 'QR code & custom link', included: true },
        { text: '30 days album access', included: true },
        { text: 'HD bulk download', included: true },
        { text: 'WhatsApp integration', included: true },
        { text: 'Multi-language support', included: true },
        { text: 'HD video uploads', included: true },
        { text: 'Basic customization', included: true },
        { text: 'Email support', included: true },
        { text: 'Remove watermark', included: true },
      ],
      cta: 'Get Plus',
      popular: true,
      badge: 'Most Popular',
    },
    {
      name: 'Premium',
      icon: Crown,
      price: '₹1,499',
      period: 'Per Event',
      description: 'For grand celebrations',
      gradient: 'from-[#FF4D67] to-[#176B87]',
      features: [
        { text: 'Unlimited guests', included: true },
        { text: 'Unlimited photos & videos', included: true },
        { text: 'Premium live photo wall', included: true },
        { text: 'Custom branded pages', included: true },
        { text: 'Lifetime album access', included: true },
        { text: '4K video support', included: true },
        { text: 'WhatsApp + SMS integration', included: true },
        { text: 'Multi-language support', included: true },
        { text: 'Custom themes', included: true },
        { text: 'Advanced analytics', included: true },
        { text: 'Priority 24/7 support', included: true },
        { text: 'Dedicated event manager', included: true },
      ],
      cta: 'Go Premium',
      popular: false,
    },
  ];

  const paymentMethods = [
    { name: 'UPI', icon: '📱' },
    { name: 'Cards', icon: '💳' },
    { name: 'Net Banking', icon: '🏦' },
    { name: 'Wallets', icon: '👛' },
  ];

  const testimonials = [
    {
      name: 'Ananya Kapoor',
      event: 'Wedding - Plus Plan',
      text: "Best ₹499 I spent on my wedding! Got 800+ photos from guests. Totally worth it!",
      rating: 5,
    },
    {
      name: 'Rohit Mehta',
      event: 'Corporate Event - Premium',
      text: 'Used Premium for our company annual day. The analytics and branding options were perfect!',
      rating: 5,
    },
  ];

  const faqs = [
    {
      q: 'Can I upgrade my plan later?',
      a: 'Yes! You can upgrade from Free to Plus or Premium anytime during your event.',
    },
    {
      q: 'What happens after the access period ends?',
      a: 'You can download all photos before the period ends. Or upgrade to Premium for lifetime access.',
    },
    {
      q: 'Are there any hidden charges?',
      a: 'Absolutely not! The price you see is the price you pay. No surprises.',
    },
    {
      q: 'Can I get a refund?',
      a: 'Yes, full refund within 24 hours if you haven\'t started your event.',
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
              <Star className="w-4 h-4 text-[#FFB200]" />
              <span className="text-sm">Simple & Transparent Pricing</span>
            </motion.div>

            <h1 className="mb-6">
              <span className="block text-4xl md:text-6xl lg:text-7xl mb-4">
                Plans for Every
              </span>
              <span className="block text-4xl md:text-6xl lg:text-7xl bg-gradient-to-r from-[#FFB200] via-[#FF4D67] to-[#176B87] bg-clip-text text-transparent">
                Celebration
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              Start free, upgrade anytime. No contracts, cancel anytime.
            </p>

            {/* Payment Methods */}
            <div className="flex flex-wrap justify-center gap-4 items-center">
              <span className="text-sm text-gray-500">Accept payments via:</span>
              {paymentMethods.map((method, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-md"
                >
                  <span className="text-2xl">{method.icon}</span>
                  <span className="text-sm">{method.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: plan.popular ? 1.05 : 1.02 }}
                className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all border-2 ${
                  plan.popular ? 'border-[#FFB200] lg:-mt-4 lg:mb-4' : 'border-gray-100'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className={`bg-gradient-to-r ${plan.gradient} text-white border-0 px-4 py-1.5`}>
                      ⭐ {plan.badge}
                    </Badge>
                  </div>
                )}

                <div className="p-8">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.gradient} items-center justify-center mb-6 shadow-lg`}
                  >
                    <plan.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Plan Name */}
                  <h3 className="text-2xl md:text-3xl mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className={`text-5xl bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                        {plan.price}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">{plan.period}</p>
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={() => onNavigate('contact')}
                    className={`w-full mb-8 py-6 ${
                      plan.popular
                        ? `bg-gradient-to-r ${plan.gradient} hover:shadow-xl text-white border-0`
                        : 'border-2 border-gray-300 hover:border-[#FFB200]'
                    } transition-all group`}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  {/* Features */}
                  <div className="space-y-4">
                    <p className="text-sm text-gray-500 uppercase tracking-wide">
                      What's included:
                    </p>
                    {plan.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + idx * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        {feature.included ? (
                          <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <Check className="w-3 h-3 text-white" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-gray-400 text-xs">—</span>
                          </div>
                        )}
                        <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                          {feature.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enterprise Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-[#176B87] to-[#B8E4D0] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl mb-3">Enterprise Plan</h3>
                    <p className="text-white/90 text-lg mb-4">
                      For event companies, wedding planners & large organizations
                    </p>
                    <ul className="space-y-2 text-white/90">
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5" />
                        <span>Unlimited events</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5" />
                        <span>White-label solution</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5" />
                        <span>API access</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5" />
                        <span>Dedicated account manager</span>
                      </li>
                    </ul>
                  </div>
                  <Button
                    onClick={() => onNavigate('contact')}
                    className="bg-white text-[#176B87] hover:bg-gray-100 px-8 py-6 text-lg shadow-xl whitespace-nowrap"
                  >
                    Contact Sales
                  </Button>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-[#B8E4D0]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Real reviews from real events</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FFB200] text-[#FFB200]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-4">Pricing FAQs</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <h3 className="mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Button
              onClick={() => onNavigate('faq')}
              variant="outline"
              className="border-2 border-[#FFB200] text-[#FFB200] hover:bg-[#FFB200] hover:text-white"
            >
              View All FAQs
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#FFB200] via-[#FF4D67] to-[#176B87]">
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
              Start Your Event Today
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Begin with our free plan. No credit card required. Upgrade anytime.
            </p>
            <Button
              onClick={() => onNavigate('contact')}
              className="bg-white text-[#FF4D67] hover:bg-gray-100 hover:scale-105 transition-all px-8 py-6 text-lg shadow-xl"
            >
              Create Free Event
              <Sparkles className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
