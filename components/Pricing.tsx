"use client";

import { useState } from "react";
import PopupModal from "./PopupModal";
import Image from "next/image";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals and small projects",
      monthlyPrice: 49,
      yearlyPrice: 490,
      icon: "/images/Earnytics LLc Icon/Brown.png",
      gradient: "from-blue-500 to-cyan-500",
      features: [
        "Up to 5 Pages",
        "Basic SEO Setup",
        "Mobile Responsive Design",
        "1 GB Storage",
        "Email Support",
        "SSL Certificate",
        "Free Domain for 1 Year"
      ],
      highlighted: false
    },
    {
      name: "Professional",
      description: "Best for growing businesses and agencies",
      monthlyPrice: 149,
      yearlyPrice: 1490,
      icon: "/images/Earnytics LLc Icon/Platinum.png",
      gradient: "from-orange-500 to-pink-500",
      features: [
        "Up to 20 Pages",
        "Advanced SEO & Analytics",
        "E-Commerce Integration",
        "10 GB Storage",
        "Priority Support",
        "Custom Domain",
        "Social Media Integration",
        "Blog & CMS",
        "Contact Forms"
      ],
      highlighted: true,
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large organizations and complex needs",
      monthlyPrice: 399,
      yearlyPrice: 3990,
      icon: "/images/Earnytics LLc Icon/Diamond.png",
      gradient: "from-purple-500 to-pink-500",
      features: [
        "Unlimited Pages",
        "Premium SEO Package",
        "Advanced E-Commerce",
        "Unlimited Storage",
        "24/7 Dedicated Support",
        "Custom Development",
        "API Integration",
        "Multi-language Support",
        "Advanced Analytics",
        "Team Collaboration Tools"
      ],
      highlighted: false
    }
  ];

  const getPrice = (plan: typeof plans[0]) => {
    return billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
  };

  const getSavings = (plan: typeof plans[0]) => {
    return plan.monthlyPrice * 12 - plan.yearlyPrice;
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 text-sm font-semibold mb-3 uppercase tracking-wider">
            Pricing Plans
          </p>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Flexible pricing options designed to scale with your business
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white rounded-full p-1.5 shadow-lg border border-gray-200">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                billingCycle === "monthly"
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 relative ${
                billingCycle === "yearly"
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards - Equal Heights with Hover Effects */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl overflow-hidden transition-all duration-500 group cursor-pointer ${
                plan.highlighted
                  ? "shadow-2xl ring-2 ring-orange-500 lg:scale-105 hover:scale-110"
                  : "shadow-lg hover:shadow-2xl hover:scale-105"
              }`}
              style={{ minHeight: '750px' }}
            >
              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                plan.highlighted 
                  ? "bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10" 
                  : "bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"
              }`}></div>

              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0 z-10">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-bl-2xl font-semibold text-xs flex items-center space-x-1 group-hover:scale-110 transition-transform duration-300">
                    <span>⭐</span>
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              {/* Header - Fixed Height */}
              <div className={`relative bg-gradient-to-br ${plan.gradient} p-8 text-white text-center h-[180px] flex flex-col justify-center transition-all duration-300 group-hover:brightness-110`}>
                <div className="w-20 h-20 mx-auto mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  <Image 
                    src={plan.icon} 
                    alt={plan.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain drop-shadow-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-white/90 text-sm">{plan.description}</p>
              </div>

              {/* Pricing - Fixed Height */}
              <div className="relative p-6 text-center bg-white h-[120px] flex flex-col justify-center">
                <div className="flex items-baseline justify-center mb-1">
                  <span className="text-xl text-gray-500">$</span>
                  <span className="text-5xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors duration-300">{getPrice(plan)}</span>
                  <span className="text-gray-600 ml-1">
                    /{billingCycle === "monthly" ? "mo" : "yr"}
                  </span>
                </div>
                {billingCycle === "yearly" ? (
                  <p className="text-green-600 text-sm font-medium mt-2">
                    💰 Save ${getSavings(plan)}/year
                  </p>
                ) : (
                  <div className="h-6"></div>
                )}
              </div>

              {/* Features - No Scroll, Adjusted Height */}
              <div className="relative px-8 pb-8">
                <ul className="space-y-2.5 mb-6" style={{ minHeight: '320px' }}>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start transform group-hover:translate-x-1 transition-transform duration-200" style={{ transitionDelay: `${featureIndex * 30}ms` }}>
                      <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5 group-hover:bg-green-600 group-hover:scale-110 transition-all duration-200">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-900 transition-colors duration-200">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button - Fixed Position */}
                <button
                  className={`relative w-full py-4 rounded-xl font-semibold transition-all duration-300 overflow-hidden group/btn ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg hover:shadow-2xl hover:from-orange-600 hover:to-red-600"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Get Started Now 
                    <span className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                  {/* Button Shine Effect */}
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                </button>
                
                {plan.highlighted ? (
                  <p className="text-center text-xs text-gray-500 mt-3 h-8">
                    ⚡ Setup in minutes • No credit card required
                  </p>
                ) : (
                  <div className="h-8 mt-3"></div>
                )}
              </div>

              {/* Bottom Border Accent on Hover */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${plan.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Why Choose Earnytics LLC?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: "/images/Earnytics LLc Icon/Fast & Speed.png", title: "Lightning Fast", desc: "Optimized for speed" },
                { icon: "/images/Earnytics LLc Icon/Secure.png", title: "100% Secure", desc: "Enterprise security" },
                { icon: "/images/Earnytics LLc Icon/SEO.png", title: "SEO Optimized", desc: "Built for rankings" },
                { icon: "/images/Earnytics LLc Icon/Mobile first.png", title: "Mobile First", desc: "Perfect on any device" },
                { icon: "/images/Earnytics LLc Icon/Custom Design.png", title: "Custom Design", desc: "Tailored to your brand" },
                { icon: "/images/Earnytics LLc Icon/7 Support.png", title: "24/7 Support", desc: "Always here to help" }
              ].map((item, idx) => (
                <div key={idx} className="text-center group hover:scale-105 transition-transform">
                  <div className="w-16 h-16 mx-auto mb-3 relative">
                    <Image 
                      src={item.icon} 
                      alt={item.title}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm">{item.title}</h4>
                  <p className="text-gray-600 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-10 text-center text-white">
          <h3 className="text-3xl font-bold mb-3">Ready to Get Started?</h3>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            Join hundreds of successful businesses using Earnytics LLC
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact">
              <button className="bg-white text-orange-500 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all">
                Start Free Trial
              </button>
            </a>
            <button 
              onClick={() => setIsPopupOpen(true)}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all"
            >
              Contact Sales
            </button>
          </div>
          <p className="text-white/80 text-sm mt-4">
            ✓ No credit card required • ✓ 14-day money-back guarantee
          </p>
        </div>
      </div>

      {/* Popup Modal */}
      <PopupModal isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </section>
  );
}
