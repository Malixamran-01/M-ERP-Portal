"use client";

import { Button } from "@/components/ui/button";
import SmallBadge from "./small-badge";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ChevronRight, Building2, Users, Sparkles } from "lucide-react";

export default function PricingSection() {
  return (
    <section className="w-full py-24 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="text-center mb-16 px-4 sm:px-6 lg:px-8">
        <SmallBadge title="Pricing" />
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-teal-900">
          Simple, Transparent Pricing
        </h2>
        <p className="text-teal-700 md:text-lg max-w-3xl mx-auto mt-4">
              Transparent pricing designed to fit institutions of all sizes. No hidden fees, just powerful features.
            </p>
        </div>
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="flex flex-col gap-4">
            <div className="inline-flex">
            </div>
            <h3 className="text-2xl font-bold text-teal-900">
              Choose the plan that fits your institution's needs.
            </h3>
            <p className="text-gray-700">
              Whether you're a small madarsa or a large educational institution, our pricing plans are designed to scale with you.
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-4">
              <div className="text-teal-700">
                <span className="text-sm flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500" />
                  Enterprise-grade security and reliability
                </span>
              </div>
              <p className="text-gray-700">
                 Get lifetime updates and dedicated support for your institution.
              </p>
              <div className="inline-flex items-center gap-3">
                <Button className="rounded-lg bg-teal-600 hover:bg-teal-700 text-white">
                  Contact Sales
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
                <span className="text-gray-600 text-sm">
                  For custom enterprise solutions
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-6">
          {/* Free Plan */}
          <Card className="border-2 border-emerald-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 bg-emerald-100 rounded-lg">
                      <Sparkles className="w-5 h-5 text-teal-600" />
                    </div>
                    <Button
                      variant="outline"
                      className="px-4 text-teal-700 border-emerald-200 bg-emerald-50"
                    >
                      MADARSA
                    </Button>
                  </div>
                  <div className="flex items-baseline mb-2">
                    <span className="text-4xl font-bold text-teal-900">$0</span>
                    <span className="text-2xl font-bold text-gray-400">/mo</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Perfect for getting started (up to 100 students)
                  </p>
                  <p className="text-xs text-emerald-600 font-medium">
                    + Database costs only (~$5-10/mo)
                  </p>
                </div>
                
                <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white w-full shadow-lg shadow-emerald-500/30">
                  Register as Madarsa
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Button>

                <ul className="grid gap-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">All core modules</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Basic RBAC (3 roles)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Student enrollment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Attendance tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Basic exam management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Fee records</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Community support</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Standard Plan */}
          <Card className="relative border-2 border-emerald-300 shadow-xl hover:shadow-2xl transition-shadow ring-2 ring-emerald-200">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="px-4 py-1 text-xs font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full shadow-lg">
                MOST POPULAR
              </span>
            </div>
            <CardContent className="p-6">
              <div className="flex flex-col gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 bg-emerald-100 rounded-lg">
                      <Building2 className="w-5 h-5 text-teal-600" />
                    </div>
                    <Button
                      variant="outline"
                      className="px-4 text-teal-700 border-emerald-200 bg-emerald-50"
                    >
                      STANDARD
                    </Button>
                  </div>
                  <div className="flex items-baseline mb-2">
                    <span className="text-4xl font-bold text-teal-900">$299</span>
                    <span className="text-2xl font-bold text-gray-400">/mo</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    For small to medium institutions (up to 500 students)
                  </p>
                  <p className="text-xs text-gray-500">
                    $2,990/year (Save 17%)
                  </p>
                </div>
                
                <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white w-full shadow-lg shadow-emerald-500/30">
                  Get Started
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Button>

                <ul className="grid gap-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">Everything in Free, plus:</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Up to 500 students</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Advanced RBAC (unlimited roles)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Complete exam system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Fee management & payments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Analytics & reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Email & chat support</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Enterprise Plan */}
          <Card className="border-2 border-teal-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 bg-teal-100 rounded-lg">
                      <Users className="w-5 h-5 text-teal-600" />
                    </div>
                    <Button
                      variant="outline"
                      className="px-4 text-teal-700 border-teal-200 bg-teal-50"
                    >
                      ENTERPRISE
                    </Button>
                  </div>
                  <div className="flex items-baseline mb-2">
                    <span className="text-4xl font-bold text-teal-900">$799</span>
                    <span className="text-2xl font-bold text-gray-400">/mo</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    For large institutions (500+ students)
                  </p>
                  <p className="text-xs text-gray-500">
                    Custom pricing for 1000+ students
                  </p>
                </div>
                
                <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white w-full shadow-lg shadow-emerald-500/30">
                  Contact Sales
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
                <ul className="grid gap-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">Everything in Standard, plus:</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Unlimited students</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Multi-institution support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Hostel management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Custom fields & entities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">AI-powered insights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">24/7 priority support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Dedicated account manager</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <p className="text-sm text-gray-600 text-center max-w-3xl mx-auto">
            <span className="font-medium text-teal-700">Free tier note:</span> Database hosting costs are separate and vary based on usage (~$5-10/month for small institutions). 
            We offer special discounts for non-profit organizations and educational institutions in developing regions.
          </p>
        </div>

        {/* Additional Features Banner */}
        <div className="mt-8 p-6 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl border border-emerald-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-teal-900 mb-1">All plans include:</h3>
              <p className="text-sm text-gray-600">
                Free onboarding, training sessions, regular updates, data migration assistance, and 99.9% uptime SLA
              </p>
            </div>
            <Button variant="outline" className="border-emerald-300 hover:bg-emerald-50 text-teal-700 whitespace-nowrap">
              View Full Feature Comparison
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}