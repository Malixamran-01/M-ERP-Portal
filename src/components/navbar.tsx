"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Shield,
  GraduationCap,
  Calculator,
  Building2,
  CalendarCheck,
  CreditCard,
  Settings,
  BarChart3,
  Bell,
  FileText,
  Users,
  Zap,
  Menu,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "./logo";

const features = [
  {
    icon: Shield,
    title: "Role-Based Access Control",
    description:
      "Dynamic RBAC system with customizable roles and granular permissions for complete institutional hierarchy management",
  },
  {
    icon: GraduationCap,
    title: "Comprehensive Academic Management",
    description:
      "End-to-end student lifecycle management from admission to results with departments, sections, and detailed performance tracking",
  },
  {
    icon: Calculator,
    title: "Advanced Examination System",
    description:
      "Flexible grading, passing, and ranking criteria with automated result calculation, GPA/CGPA computation, and transcript generation",
  },
  {
    icon: Building2,
    title: "Hostel Management",
    description:
      "Complete hostel administration with floor and room allocation, occupancy tracking, and student accommodation management",
  },
  {
    icon: CalendarCheck,
    title: "Smart Attendance Tracking",
    description:
      "Automated attendance monitoring with configurable rules, low-attendance alerts, and comprehensive reporting across subjects and periods",
  },
  {
    icon: CreditCard,
    title: "Fee & Financial Management",
    description:
      "Flexible fee structures, payment tracking, discount management, automated reminders, and detailed financial reports",
  },
  {
    icon: Settings,
    title: "Dynamic Custom Fields",
    description:
      "Create custom entities and fields without code changes - adapt the system to your institution's unique requirements instantly",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description:
      "Powerful dashboards with attendance analytics, academic performance insights, financial reports, and predictive analytics",
  },
  {
    icon: Bell,
    title: "Multi-Channel Notifications",
    description:
      "Scheduled and instant notifications across multiple channels with role-based targeting and automated alerts for critical events",
  },
  {
    icon: FileText,
    title: "Complete Audit Trail",
    description:
      "Comprehensive logging of all system actions with user activity tracking, compliance reports, and security event monitoring",
  },
  {
    icon: Users,
    title: "Multi-Institution Support",
    description:
      "Manage multiple institutions with hierarchical structure, affiliate management, and institution-specific customization",
  },
  {
    icon: Zap,
    title: "Background Job Processing",
    description:
      "Automated processing for bulk operations, report generation, result calculations, and system maintenance tasks",
  },
];

export default function GlassmorphismNavbar() {
  const [open, setOpen] = React.useState(false);
  const [showFeatures, setShowFeatures] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 pt-3 sm:pt-4">
      <div className="max-w-7xl mx-auto">
        <nav className="glass-navbar rounded-2xl border border-white/20 shadow-2xl">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6">
            {/* LEFT SIDE */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <Logo />

              {/* DESKTOP MENU */}
              <NavigationMenu className="hidden md:flex">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-teal-500 transition-all hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none">
                        Home
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="rounded-xl bg-white/5 px-4 text-teal-500 hover:bg-white/10 hover:text-white data-[state=open]:bg-white/15 data-[state=open]:text-white border-0">
                      Features
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="dropdown-animate overflow-hidden border-0">
                      <div className="w-[90vw] max-w-[800px] p-6 glass-dropdown-smooth rounded-2xl shadow-2xl">
                        <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
                          <h4 className="text-lg font-medium text-white">Features</h4>
                          <Link
                            href="/features"
                            className="text-sm text-emerald-300 hover:text-emerald-200 hover:underline transition-colors"
                          >
                            View all
                          </Link>
                        </div>
                        <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-4">
                          {features.map((feature, index) => (
                            <Link
                              key={index}
                              href={`/feature/${feature.title
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                              className="block group"
                            >
                              <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-200">
                                <div className="p-2.5 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-all duration-200">
                                  <feature.icon className="h-5 w-5 text-emerald-300" />
                                </div>
                                <div className="flex-1">
                                  <h5 className="font-medium mb-1 text-white/90 group-hover:text-white transition-colors text-sm">
                                    {feature.title}
                                  </h5>
                                  <p className="text-xs text-white/50 line-clamp-2 leading-relaxed">
                                    {feature.description}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/#pricing" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-teal-500 transition-all hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none">
                        Pricing
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/#admintraining" legacyBehavior passHref>
                      <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-teal-500 transition-all hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none">
                        Become an Admin
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* RIGHT SIDE BUTTONS */}
            <div className="hidden md:flex items-center space-x-3">
              <Button
                variant="ghost"
                className="text-white/90 hover:bg-white/10 hover:text-white border-0"
              >
                Log in
              </Button>
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white border-0 shadow-lg shadow-emerald-500/30">
                <Link href="/contact-us">Book Demo</Link>
              </Button>
            </div>

            {/* MOBILE MENU (SHEET) */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[85vw] sm:w-[400px] glass-sheet border-r border-white/20 overflow-y-auto"
              >
                <SheetHeader className="border-b border-white/20 p-4">
                  <SheetTitle className="text-left text-white text-lg font-semibold">
                    Navigation
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col py-4 space-y-2">
                  <Link
                    href="/"
                    className="px-4 py-2 text-base font-medium text-white/90 hover:bg-white/10 hover:text-white transition-colors rounded-lg"
                    onClick={() => setOpen(false)}
                  >
                    Home
                  </Link>

                  {/* COLLAPSIBLE FEATURES */}
                  <button
                    className="flex items-center justify-between px-4 py-2 text-base font-medium text-white/90 hover:bg-white/10 hover:text-white rounded-lg transition-colors"
                    onClick={() => setShowFeatures(!showFeatures)}
                  >
                    Features
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 transition-transform",
                        showFeatures && "rotate-180"
                      )}
                    />
                  </button>
                  {showFeatures && (
                    <div className="px-2 py-2 space-y-3 bg-white/5 rounded-xl mx-2">
                      {features.slice(0, 6).map((feature, index) => (
                        <Link
                          key={index}
                          href={`/feature/${feature.title
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="flex items-start gap-3 p-2 hover:bg-white/10 rounded-md transition-colors"
                          onClick={() => setOpen(false)}
                        >
                          <div className="p-2 bg-white/10 rounded-md">
                            <feature.icon className="h-5 w-5 text-emerald-300" />
                          </div>
                          <div>
                            <h5 className="font-medium mb-1 text-white text-sm">
                              {feature.title}
                            </h5>
                            <p className="text-xs text-white/60 line-clamp-2">
                              {feature.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                      <Link
                        href="/features"
                        className="block text-sm text-emerald-300 hover:text-emerald-200 px-2 py-1 text-center transition-colors"
                      >
                        View all features →
                      </Link>
                    </div>
                  )}

                  <Link
                    href="/#pricing"
                    className="px-4 py-2 text-base font-medium text-white/90 hover:bg-white/10 hover:text-white transition-colors rounded-lg"
                    onClick={() => setOpen(false)}
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/#admintraining"
                    className="px-4 py-2 text-base font-medium text-white/90 hover:bg-white/10 hover:text-white transition-colors rounded-lg"
                    onClick={() => setOpen(false)}
                  >
                    Become an Admin
                  </Link>
                </div>

                <div className="sticky bottom-0 left-0 right-0 p-4 border-t border-white/20 bg-white/5 backdrop-blur-xl">
                  <div className="grid gap-2">
                    <Button
                      variant="outline"
                      className="w-full border-white/20 text-teal-500 hover:bg-white/10"
                      onClick={() => setOpen(false)}
                    >
                      Log in
                    </Button>
                    <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white border-0">
                      Sign up
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>

      {/* 🔧 STYLES */}
      <style jsx global>{`
        .glass-navbar {
          background: rgba(13, 148, 136, 0.1);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          animation: fadeInDown 0.5s ease-out;
          transition: all 0.3s ease;
        }

        .glass-navbar:hover {
          background: rgba(13, 148, 136, 0.15);
          box-shadow: 0 25px 50px -12px rgba(13, 148, 136, 0.25);
        }

        .glass-dropdown-smooth {
          background: rgba(6, 40, 35, 0.85);
          backdrop-filter: blur(32px) saturate(180%);
          border: 1px solid rgba(16, 185, 129, 0.1);
        }

        .dropdown-animate {
          animation: dropdownSlide 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes dropdownSlide {
          from {
            opacity: 0;
            transform: translateY(-10px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .glass-sheet {
          background: rgba(19, 78, 74, 0.95);
          backdrop-filter: blur(20px);
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ✅ Fix mobile layout spacing */
        @media (max-width: 768px) {
          .glass-navbar {
            border-radius: 1rem;
          }
        }
      `}</style>
    </header>
  );
}
