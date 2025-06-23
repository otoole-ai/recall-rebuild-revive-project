
import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Menu,
  ChevronDown,
  ArrowRight,
  MessageCircle,
  Mail,
  ShoppingCart,
  Calendar,
  Palette,
  Users,
  LayoutDashboard,
  Sparkles,
  Target,
  DollarSign,
  X,
} from "lucide-react"

const SiteHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const solutionsItems = [
    {
      label: "Salons",
      href: "/solutions/salons",
      desc: "Beauty industry specialists",
      emoji: "✂️",
      isActive: true,
    },
    {
      label: "Restaurants",
      href: "#",
      desc: "Coming Soon, in Development",
      emoji: "🍽️",
      isActive: false,
    },
    {
      label: "Cafes",
      href: "#",
      desc: "Coming Soon, in Development",
      emoji: "☕",
      isActive: false,
    },
    {
      label: "Contractors",
      href: "#",
      desc: "Coming Soon, in Development",
      emoji: "🔨",
      isActive: false,
    },
    {
      label: "Personal Trainers",
      href: "#",
      desc: "Coming Soon, in Development",
      emoji: "💪",
      isActive: false,
    },
    {
      label: "Gyms",
      href: "#",
      desc: "Coming Soon, in Development",
      emoji: "🏋️",
      isActive: false,
    },
  ]

  const featuresItems = [
    {
      label: "AI Chat Bots",
      href: "/features/chatbots",
      desc: "24/7 customer support automation",
      icon: "chat",
    },
    {
      label: "AI Email Responder",
      href: "/features/email-responder",
      desc: "Intelligent email management",
      icon: "mail",
    },
    {
      label: "Online Ordering",
      href: "/features/online-ordering",
      desc: "Seamless order processing",
      icon: "cart",
    },
    {
      label: "Booking System",
      href: "/features/booking",
      desc: "Smart appointment scheduling",
      icon: "calendar",
    },
    {
      label: "Design Changes",
      href: "/features/design-changes",
      desc: "Unlimited design & content changes",
      icon: "palette",
    },
    {
      label: "AI-Powered Team",
      href: "/features/ai-team",
      desc: "Your dedicated AI development team",
      icon: "users",
    },
  ]

  const renderFeatureIcon = (iconType: string) => {
    switch (iconType) {
      case "chat":
        return <MessageCircle className="h-5 w-5 text-purple-400" />
      case "mail":
        return <Mail className="h-5 w-5 text-blue-400" />
      case "cart":
        return <ShoppingCart className="h-5 w-5 text-green-400" />
      case "calendar":
        return <Calendar className="h-5 w-5 text-orange-400" />
      case "palette":
        return <Palette className="h-5 w-5 text-pink-400" />
      case "users":
        return <Users className="h-5 w-5 text-cyan-400" />
      default:
        return <MessageCircle className="h-5 w-5 text-gray-400" />
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-out ${
        isScrolled
          ? "bg-black/40 md:bg-black/20 backdrop-blur-xl border-b border-white/20 md:border-white/10 shadow-2xl"
          : "bg-black/30 md:bg-black/10 backdrop-blur-md border-b border-white/15 md:border-white/5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group" aria-label="Humexa.ai Home">
            <span className="text-2xl font-bold text-white">Humexa.ai</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-all duration-300 font-medium text-base px-6 py-3 rounded-lg hover:bg-white/10 border border-transparent hover:border-white/20">
                  <span>Solutions</span>
                  <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[750px] bg-black/90 backdrop-blur-2xl border border-white/30 shadow-2xl rounded-xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/30 rounded-xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="font-semibold text-white mb-2">Industry Solutions</h3>
                        <p className="text-sm text-gray-300">Tailored websites for your specific business needs</p>
                      </div>
                      <Link
                        to="/solutions"
                        className="text-sm font-medium text-white hover:text-gray-100 transition-colors duration-200 px-3 py-1.5 rounded-md border border-gray-400/30 hover:border-gray-300/50 bg-gradient-to-r from-[#CADCFF]/10 to-[#EAF3FF]/10 hover:from-[#CADCFF]/20 hover:to-[#EAF3FF]/20"
                        style={{
                          borderColor: "rgba(202, 220, 255, 0.3)",
                        }}
                      >
                        Learn More →
                      </Link>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {solutionsItems.map((item) => {
                        if (item.isActive) {
                          return (
                            <Link
                              key={item.href}
                              to={item.href}
                              className="flex items-start space-x-3 p-4 text-gray-200 hover:text-white hover:bg-white/15 rounded-lg transition-all duration-200 border border-transparent hover:border-white/30"
                            >
                              <div className="w-10 h-10 bg-gradient-to-br from-purple-400/30 to-cyan-400/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-lg">{item.emoji}</span>
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="font-semibold text-white text-sm leading-tight mb-1">{item.label}</div>
                                <div className="text-xs text-gray-300 leading-relaxed">{item.desc}</div>
                              </div>
                            </Link>
                          )
                        } else {
                          return (
                            <div
                              key={item.label}
                              className="flex items-start space-x-3 p-4 text-gray-400 rounded-lg border border-transparent opacity-60 cursor-not-allowed"
                            >
                              <div className="w-10 h-10 bg-gray-700/50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-lg opacity-50">{item.emoji}</span>
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="font-semibold text-gray-400 text-sm leading-tight mb-1">
                                  {item.label}
                                </div>
                                <div className="text-xs text-gray-500 leading-relaxed">{item.desc}</div>
                              </div>
                            </div>
                          )
                        }
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-all duration-300 font-medium text-base px-6 py-3 rounded-lg hover:bg-white/10 border border-transparent hover:border-white/20">
                  <span>Features</span>
                  <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[750px] bg-black/90 backdrop-blur-2xl border border-white/30 shadow-2xl rounded-xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-visible">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/30 rounded-xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="font-semibold text-white mb-2">Platform Features</h3>
                        <p className="text-sm text-gray-300">Everything you need to run your business online</p>
                      </div>
                      <Link
                        to="/features"
                        className="text-sm font-medium text-white hover:text-gray-100 transition-colors duration-200 px-3 py-1.5 rounded-md border border-gray-400/30 hover:border-gray-300/50 bg-gradient-to-r from-[#CADCFF]/10 to-[#EAF3FF]/10 hover:from-[#CADCFF]/20 hover:to-[#EAF3FF]/20"
                        style={{
                          borderColor: "rgba(202, 220, 255, 0.3)",
                        }}
                      >
                        View All →
                      </Link>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {featuresItems.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className="flex items-start space-x-3 p-4 text-gray-200 hover:text-white hover:bg-white/15 rounded-lg transition-all duration-200 border border-transparent hover:border-white/30"
                        >
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-400/30 to-cyan-400/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            {renderFeatureIcon(item.icon)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-white text-sm leading-tight mb-1">{item.label}</div>
                            <div className="text-xs text-gray-300 leading-relaxed">{item.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Link
                to="/pricing"
                className="text-gray-300 hover:text-white transition-all duration-300 font-medium text-base px-6 py-3 rounded-lg hover:bg-white/10 border border-transparent hover:border-white/20"
              >
                Pricing
              </Link>
            </div>

            <div className="ml-8 pl-8 border-l border-white/20 flex items-center space-x-4">
              <Button className="group relative px-8 py-3 rounded-lg bg-gradient-to-r from-[#CADCFF] to-[#EAF3FF] text-gray-800 font-semibold text-base shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-400/30">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/30 via-purple-400/30 to-blue-400/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-60 transition-opacity duration-1000 blur-md"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#EAF3FF] to-[#CADCFF] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-100/50 via-purple-100/50 to-blue-100/50 opacity-0 group-hover:opacity-30 transition-opacity duration-700 rounded-lg"></div>
                <div className="relative z-10 font-medium flex items-center transform group-hover:scale-[1.05] group-hover:-translate-y-1 transition-all duration-300 ease-out">
                  <Palette className="w-5 h-5 mr-2 group-hover:rotate-12 transition-all duration-300 ease-out text-gray-800 group-hover:text-gray-900" />
                  <span className="transition-colors duration-300 text-gray-800 group-hover:text-gray-900">
                    Design Now
                  </span>
                </div>
              </Button>

              <a
                href="https://v0-humexa-dashboard.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white/10 backdrop-blur-sm border-white/20 text-white font-semibold shadow-sm hover:shadow-md transition-all duration-300 px-8 py-3 text-base rounded-lg overflow-hidden hover:bg-white/20 hover:border-white/30 inline-flex items-center"
              >
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                <span className="relative z-10 font-medium flex items-center transform group-hover:scale-[1.02] group-hover:-translate-y-0.5 transition-transform duration-200">
                  <LayoutDashboard className="w-5 h-5 mr-2 text-white group-hover:text-white transition-transform duration-300" />
                  <span className="text-white group-hover:text-white">Client Dashboard</span>
                </span>
              </a>
            </div>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:text-white transition-all duration-300 rounded-xl shadow-lg h-8 w-8 p-0"
                >
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full max-w-sm border-l border-white/20 z-[200] overflow-hidden"
                style={{
                  background: `
                    radial-gradient(ellipse 400px 200px at 65% 45%, rgba(255,0,150,0.08) 0%, transparent 65%),
                    radial-gradient(ellipse 350px 175px at 35% 65%, rgba(0,255,255,0.07) 0%, transparent 65%),
                    radial-gradient(ellipse 300px 150px at 75% 25%, rgba(255,255,0,0.06) 0%, transparent 65%),
                    radial-gradient(ellipse 250px 125px at 25% 75%, rgba(150,0,255,0.08) 0%, transparent 65%),
                    radial-gradient(ellipse 200px 100px at 80% 60%, rgba(0,255,0,0.06) 0%, transparent 65%),
                    radial-gradient(ellipse 275px 140px at 20% 30%, rgba(255,100,0,0.07) 0%, transparent 65%),
                    radial-gradient(ellipse 225px 115px at 85% 80%, rgba(255,0,255,0.05) 0%, transparent 65%),
                    radial-gradient(ellipse 325px 165px at 15% 85%, rgba(0,150,255,0.06) 0%, transparent 65%),
                    radial-gradient(ellipse at 30% 40%, rgba(255,0,0,0.12) 0%, transparent 45%),
                    radial-gradient(ellipse at 32% 42%, rgba(0,255,0,0.12) 0%, transparent 45%),
                    radial-gradient(ellipse at 34% 44%, rgba(0,0,255,0.12) 0%, transparent 45%),
                    rgba(0,0,0,0.95)
                  `,
                  backdropFilter: "blur(24px)",
                }}
              >
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex flex-col items-center justify-center py-4 border-b border-white/10 relative">
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all duration-300 group"
                    >
                      <X className="h-4 w-4 text-gray-300 group-hover:text-white transition-colors duration-300" />
                    </button>
                    <div className="relative h-20 overflow-hidden flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">Humexa.ai</span>
                    </div>
                  </div>

                  <div className="flex-1 py-8 space-y-2">
                    <Link
                      to="/solutions"
                      className="group flex items-center justify-between p-4 rounded-xl hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-white/20 hover:shadow-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500/30 to-purple-600/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Target className="h-5 w-5 text-purple-300" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-semibold text-white text-lg group-hover:text-purple-200 transition-colors duration-300">
                            Solutions
                          </span>
                          <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                            Industry-specific websites
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                    </Link>

                    <Link
                      to="/features"
                      className="group flex items-center justify-between p-4 rounded-xl hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-white/20 hover:shadow-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/30 to-cyan-600/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Sparkles className="h-5 w-5 text-cyan-300" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-semibold text-white text-lg group-hover:text-cyan-200 transition-colors duration-300">
                            Features
                          </span>
                          <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                            Platform capabilities
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                    </Link>

                    <Link
                      to="/pricing"
                      className="group flex items-center justify-between p-4 rounded-xl hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-white/20 hover:shadow-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-500/30 to-green-600/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <DollarSign className="h-5 w-5 text-green-300" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-semibold text-white text-lg group-hover:text-green-200 transition-colors duration-300">
                            Pricing
                          </span>
                          <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                            Flexible plans
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                    </Link>

                    <a
                      href="https://v0-humexa-dashboard.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-4 rounded-xl hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-white/20 hover:shadow-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500/30 to-blue-600/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <LayoutDashboard className="h-5 w-5 text-blue-300" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-semibold text-white text-lg group-hover:text-blue-200 transition-colors duration-300">
                            Client Dashboard
                          </span>
                          <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                            Manage your projects
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                    </a>
                  </div>

                  <div className="p-6 border-t border-white/10">
                    <Button
                      onClick={() => {
                        setIsMobileMenuOpen(false)
                      }}
                      className="group relative w-full bg-gradient-to-r from-[#CADCFF] to-[#EAF3FF] text-gray-800 font-bold text-lg py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border-2 border-gray-400/30 hover:border-gray-300/50"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#EAF3FF] to-[#CADCFF] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"></div>
                      <span className="relative z-10 flex items-center justify-center space-x-3 transform group-hover:scale-[1.02] group-hover:-translate-y-1 transition-all duration-300 ease-out">
                        <Palette className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300 ease-out text-gray-800" />
                        <span className="font-bold tracking-wide text-gray-800">Design Now</span>
                        <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300 ease-out text-gray-800" />
                      </span>
                    </Button>

                    <div className="flex items-center justify-center mt-4 space-x-4 text-xs text-gray-400">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span>Free Setup</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        <span>24/7 Support</span>
                      </div>
                    </div>

                    <div className="flex justify-center mt-3">
                      <span className="text-xs font-mono text-gray-500">Humexa v2.1.4</span>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
