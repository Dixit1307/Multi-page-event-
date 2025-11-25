import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Plus,
  Calendar,
  Users,
  Image as ImageIcon,
  Video,
  Download,
  Share2,
  QrCode,
  BarChart,
  Settings,
  Eye,
  Trash2,
  ExternalLink,
  Sparkles,
  TrendingUp,
  Folder,
  LogOut,
  User,
  Home,
  ChevronDown,
} from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Modal } from "./ui/modal";
import { ImageWithFallback } from './figma/ImageWithFallback';
import EventForm from './EventForm';


interface HostDashboardProps {
  onNavigate: (page: string) => void;
}

interface HostSidebarProps {
  onNavigate: (page: string) => void;
  events: { id: number; name: string }[];
  userEmail?: string;
  hostId?: string;
}

function HostSidebar({
  onNavigate,
  events,
  userEmail = 'dixitaryamind@gmail.com',
  hostId = '#EPL-1023',
}: HostSidebarProps) {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openCreateEvent, setOpenCreateEvent] = useState(false);




  // Fallback: normal useState if above hack not needed
  // Note: The file already imports React hooks elsewhere; if not, this will still work at runtime.

  return (
    <>
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-72 bg-white border-r border-gray-100 shadow-md fixed top-0 left-0 bottom-0">
        {/* Logo / Header */}
        <div className="px-6 py-5 border-b border-gray-100">
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-[white] to-[white] bg-clip-text text-transparent">
            Event Platform
          </h2>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-6">
          {/* Create Event */}
          <div>
            <Button
              onClick={() => setOpenCreateEvent(true)}
              className="w-full bg-gradient-to-r from-[#FFB200] to-[#FF4D67] hover:shadow-xl hover:scale-105 transition-all text-white font-medium py-5 mt-2"
            >
              <Plus className="mr-2 w-5 h-5" />
              Create New Event
            </Button>
          </div>

          {/* View All with dropdown */}
          <div className="relative">
            <Button
              variant="outline"
              className="w-full flex justify-between items-center py-5"
              onClick={() => setOpenDropdown(!openDropdown)}
            >
              <span className="flex items-center gap-2">
                <Folder className="w-4 h-4" />
                View All Events
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${openDropdown ? "rotate-180" : ""
                  }`}
              />
            </Button>

            {openDropdown && (
              <div className="mt-2 bg-gray-50 rounded-xl shadow-inner p-2 border border-gray-100 space-y-1">
                {events.map((ev) => (
                  <button
                    key={ev.id}
                    onClick={() => onNavigate(`event/${ev.id}`)}
                    className="block w-full text-left text-sm px-4 py-2 rounded-lg hover:bg-white"
                  >
                    {ev.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Middle Links*/}
          <div className="space-y-2 pt-4 border-t border-gray-100">
            <button
              onClick={() => onNavigate("home")}
              className="flex items-center w-full gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              <Home className="w-5 h-5 text-[#FF4D67]" />
              Home
            </button>

            <button
              onClick={() => onNavigate("photos")}
              className="flex items-center w-full gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              <ImageIcon className="w-5 h-5 text-[#FFB200]" />
              Photos & Videos
            </button>

            <button
              onClick={() => onNavigate("events")}
              className="flex items-center w-full gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              <Calendar className="w-5 h-5 text-[#FF4D67]" />
              Events
            </button>
          </div>
        </nav>

        {/* Bottom User Section */}
        <div className="border-t border-gray-100 px-6 py-5">
          <div className="flex items-center gap-3 mb-3">
            <User className="w-8 h-8 text-[#FF4D67]" />
            <div>
              <p className="text-sm font-medium">{userEmail}</p>
              <p className="text-xs text-gray-500">Host ID: {hostId}</p>
            </div>
          </div>
          <div className="space-y-1">
            <button
              onClick={() => onNavigate("account")}
              className="block w-full text-left text-sm px-3 py-2 rounded-lg hover:bg-gray-100"
            >
              Manage Account
            </button>
            <button
              onClick={() => onNavigate("myevents")}
              className="block w-full text-left text-sm px-3 py-2 rounded-lg hover:bg-gray-100"
            >
              My Events
            </button>
            <button
              onClick={() => onNavigate("logout")}
              className="block w-full text-left text-sm px-3 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Popup Form Here */}
      <Modal open={openCreateEvent} onClose={() => setOpenCreateEvent(false)}>
        <EventForm />
      </Modal>
    </>
  );
}


export function HostDashboard({ onNavigate }: HostDashboardProps) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const stats = [
    {
      icon: Calendar,
      label: 'Total Events',
      value: '12',
      change: '+3 this month',
      gradient: 'from-[#FFB200] to-[#FF4D67]',
    },
    {
      icon: ImageIcon,
      label: 'Photos Collected',
      value: '2,847',
      change: '+432 this week',
      gradient: 'from-[#FF4D67] to-[#176B87]',
    },
    {
      icon: Video,
      label: 'Videos Collected',
      value: '186',
      change: '+24 this week',
      gradient: 'from-[#176B87] to-[#B8E4D0]',
    },
    {
      icon: Users,
      label: 'Active Guests',
      value: '847',
      change: 'Across all events',
      gradient: 'from-[#B8E4D0] to-[#FFB200]',
    },
  ];

  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [qrModalOpen, setQrModalOpen] = useState(false);
  const [selectedQr, setSelectedQr] = useState<string | null>(null);

  async function fetchQrCode(eventId: string) {
    try {
      const token = localStorage.getItem("token"); // JWT token stored on login
      if (!token) return;

      const res = await fetch(`http://localhost:5000/api/events/${eventId}/qrcode`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        const errData = await res.json();
        console.error("QR code fetch error:", errData);
        throw new Error(errData.message);
      }

      const data = await res.json();
      setSelectedQr(data.qrCode); // data.qrCode is a data URL
      setQrModalOpen(true);
    } catch (err) {
      console.error("QR code fetch error:", err);
      alert("Failed to fetch QR code");
    }
  }

  useEffect(() => {
    const fetchEvents = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found in localStorage");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("http://localhost:5000/api/events", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errData = await response.json();
          throw new Error(`${response.status}: ${errData.message}`);
        }

        const data = await response.json();
        console.log("Fetched events:", data);
        setEvents(data);
      } catch (err) {
        console.error("Fetch events error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);



  const planColors: { [key: string]: string } = {
    Free: 'bg-gray-100 text-gray-700',
    Plus: 'bg-gradient-to-r from-[#FFB200] to-[#FF4D67] text-white',
    Premium: 'bg-gradient-to-r from-[#FF4D67] to-[#176B87] text-white',
  };

  const statusColors: { [key: string]: string } = {
    Active: 'bg-green-100 text-green-700',
    Completed: 'bg-blue-100 text-blue-700',
    Draft: 'bg-gray-100 text-gray-700',
  };

  return (
    <div className="relative min-h-screen pt-20 bg-gradient-to-br from-gray-50 to-[#B8E4D0]/10"
      style={{
        marginLeft: window.innerWidth >= 768 ? "18rem" : "0",
        position: "relative",
        zIndex: 1,
      }}
    >
      <HostSidebar onNavigate={onNavigate} events={events} userEmail={'dixitaryamind@gmail.com'} hostId={'#EPL-1023'} />
      {/* Header */}
      <section className="py-12 bg-white border-b border-gray-100">
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
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <motion.div variants={fadeInUp}>
              <h1 className="text-4xl md:text-5xl mb-2">
                Welcome back, <span className="bg-gradient-to-r from-[#FFB200] to-[#FF4D67] bg-clip-text text-transparent">Host</span>! 👋
              </h1>
              <p className="text-xl text-gray-600">
                Manage your events and collect beautiful memories
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Button
                onClick={() => onNavigate('pricing')}
                className="bg-gradient-to-r from-[#FFB200] to-[#FF4D67] hover:shadow-xl hover:scale-105 transition-all text-white border-0 px-8 py-6 text-lg group"
              >
                <Plus className="mr-2 w-5 h-5" />
                Create New Event
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Overview */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <TrendingUp className="w-5 h-5 text-green-500" />
                </div>
                <h3 className="text-3xl mb-1">{stat.value}</h3>
                <p className="text-sm text-gray-500 mb-2">{stat.label}</p>
                <p className="text-xs text-[#FFB200]">{stat.change}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl">Your Events</h2>
            <Button variant="outline" className="gap-2">
              <BarChart className="w-4 h-4" />
              View Analytics
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {loading ? (
              <p className="text-center text-gray-500">Loading events...</p>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {events.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-gray-100 group"
                  >
                    {/* Event Image */}
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback
                        src={event.image}
                        alt={event.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge className={statusColors[event.status]}>
                          {event.status}
                        </Badge>
                        <Badge className={planColors[event.plan]}>
                          {event.plan}
                        </Badge>
                      </div>

                      {/* Quick Actions */}
                      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-white rounded-lg shadow-lg hover:bg-gray-100 transition-colors"
                        >
                          <Eye className="w-4 h-4 text-gray-700" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-white rounded-lg shadow-lg hover:bg-gray-100 transition-colors"
                        >
                          <Settings className="w-4 h-4 text-gray-700" />
                        </motion.button>
                      </div>
                    </div>

                    {/* Event Info */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl mb-1">{event.name}</h3>
                          <p className="text-sm text-gray-500 flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {event.title} • {event.type}
                          </p>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-t border-b border-gray-100">
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-1 mb-1">
                            <ImageIcon className="w-4 h-4 text-[#FFB200]" />
                            <p className="text-lg">{event.photos}</p>
                          </div>
                          <p className="text-xs text-gray-500">Photos</p>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-1 mb-1">
                            <Video className="w-4 h-4 text-[#FF4D67]" />
                            <p className="text-lg">{event.videos}</p>
                          </div>
                          <p className="text-xs text-gray-500">Videos</p>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-1 mb-1">
                            <Users className="w-4 h-4 text-[#176B87]" />
                            <p className="text-lg">{event.guests}</p>
                          </div>
                          <p className="text-xs text-gray-500">Guests</p>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col gap-2">
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            className="flex-1 gap-2 group/btn"
                            onClick={() => fetchQrCode(event.id)}
                          >
                            <QrCode className="w-4 h-4" />
                            QR Code
                          </Button>

                          <Button
                            variant="outline"
                            className="flex-1 gap-2 group/btn"
                          >
                            <Share2 className="w-4 h-4" />
                            Share
                          </Button>
                          <Button
                            className="flex-1 gap-2 bg-gradient-to-r from-[#FFB200] to-[#FF4D67] text-white border-0 group/btn"
                          >
                            <Download className="w-4 h-4" />
                            Download
                          </Button>
                        </div>
                        <Button
                          onClick={() => onNavigate(`event/${event.id}/photos`)}
                          className="w-full gap-2 bg-gradient-to-r from-[#176B87] to-[#B8E4D0] text-white border-0 group/btn"
                        >
                          <ImageIcon className="w-4 h-4" />
                          View Photos
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#FFB200] via-[#FF4D67] to-[#176B87] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl"
          >
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-3xl md:text-4xl mb-3">Need Help?</h3>
                  <p className="text-white/90 text-lg mb-4">
                    Check out our guides or contact support anytime
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      onClick={() => onNavigate('faq')}
                      variant="outline"
                      className="bg-white text-[#FF4D67] hover:bg-gray-100"
                    >
                      View FAQs
                    </Button>
                    <Button
                      onClick={() => onNavigate('contact')}
                      className="bg-white text-[#FF4D67] hover:bg-gray-100"
                    >
                      Contact Support
                    </Button>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-6xl md:text-8xl"
                >
                  <Sparkles className="w-20 h-20 md:w-24 md:h-24" />
                </motion.div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>
      {qrModalOpen && selectedQr && (
        <Modal open={qrModalOpen} onClose={() => setQrModalOpen(false)}>
          <div className="flex flex-col items-center p-6">
            <h2 className="text-xl font-semibold mb-4">Event QR Code</h2>
            <img src={selectedQr} alt="QR Code" className="w-64 h-64 mb-4" />
            <a
              href={selectedQr}
              download="event-qrcode.png"
              className="bg-gradient-to-r from-[#FFB200] to-[#FF4D67] text-white px-6 py-2 rounded-lg hover:opacity-90"
            >
              Download
            </a>
          </div>
        </Modal>
      )}

    </div>
  );
}
