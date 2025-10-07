import React from 'react'
import Logo from '@/components/logo'
import {Button} from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
export default function SiteFooter() {
  return (
    <footer className="w-full bg-[#020617] text-gray-300 border-t border-emerald-900/40">
      <div className="container px-4 py-16 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo + Description */}
          <div className="space-y-4">
            <Logo/>
            <p className="text-sm text-gray-400">
              From admissions to acdemics, simplify every aspect of your institution&rsquo;s
              management with M-ERP&rsquo;s all-in-one solution.
            </p>

            {/* Socials */}
            <div className="flex space-x-4 pt-2">
              {[
                { Icon: Twitter, label: "Twitter" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Youtube, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <Link
                  key={label}
                  href="#"
                  className="rounded-full p-2 bg-emerald-500/10 hover:bg-emerald-400/20 transition"
                >
                  <Icon className="h-4 w-4 text-emerald-400" />
                  <span className="sr-only">{label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-l-4 border-emerald-500 pl-2">
              Get In Touch
            </h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>support@merp.com</p>
              <p>+91 945 658 3256</p>
              <p>61-A, Elm Street, Gujarat, India</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white border-l-4 border-emerald-500 pl-2">
                Quick Links
              </h3>
              <nav className="flex flex-col space-y-2 text-sm">
                {["Home", "FAQs", "Pricing", "Features"].map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="hover:text-emerald-400 transition"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white border-l-4 border-emerald-500 pl-2 invisible sm:visible">
                Links
              </h3>
              <nav className="flex flex-col space-y-2 text-sm">
                {["Careers", "About", "Contact", "Products"].map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="hover:text-emerald-400 transition"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-l-4 border-emerald-500 pl-2">
              Newsletter
            </h3>
            <form className="space-y-3">
              <Input
                className="bg-emerald-950/30 border border-emerald-800 text-white placeholder:text-gray-500 focus-visible:ring-emerald-400"
                placeholder="Enter your email..."
                type="email"
              />
              <Button
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black font-semibold"
                type="submit"
              >
                Subscribe
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-emerald-900/40 mt-10">
        <div className="container flex flex-col items-center justify-center gap-3 py-6 text-center text-sm md:flex-row md:justify-between">
          <div className="text-gray-500">
            © {new Date().getFullYear()} M-ERP. All rights reserved.
          </div>
          <div className="flex space-x-4 text-xs text-gray-500">
            <Link href="#" className="hover:text-emerald-400 transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-emerald-400 transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
