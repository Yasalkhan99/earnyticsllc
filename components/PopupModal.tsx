"use client";

import { useState } from "react";

interface PopupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PopupModal({ isOpen, onClose }: PopupModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal - Compact Size */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-slideUp">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors z-10 shadow-md"
        >
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Compact Header */}
        <div className="bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 p-6 text-white text-center">
          <h2 className="text-2xl font-bold mb-1">Let&apos;s Get Started!</h2>
          <p className="text-white/90 text-sm">We&apos;ll respond within 24 hours</p>
        </div>

        {/* Compact Form */}
        <div className="p-6">
          <form className="space-y-4">
            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Your Name *"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 focus:outline-none transition-all text-sm"
                required
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email Address *"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 focus:outline-none transition-all text-sm"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <input
                type="tel"
                placeholder="Phone Number (Optional)"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 focus:outline-none transition-all text-sm"
              />
            </div>

            {/* Service */}
            <div>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 focus:outline-none transition-all text-sm text-gray-600">
                <option>What service do you need?</option>
                <option>Website Design</option>
                <option>Development</option>
                <option>E-Commerce</option>
                <option>SEO Services</option>
                <option>Branding</option>
                <option>Other</option>
              </select>
            </div>

            {/* Message - Compact */}
            <div>
              <textarea
                rows={3}
                placeholder="Brief message about your project..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 focus:outline-none transition-all resize-none text-sm"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:via-cyan-600 hover:to-teal-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02]"
            >
              Send Message ✉️
            </button>

            {/* Quick Info */}
            <div className="flex items-center justify-center space-x-4 text-xs text-gray-500 pt-2">
              <span className="flex items-center">
                <svg className="w-3 h-3 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Free Consultation
              </span>
              <span className="flex items-center">
                <svg className="w-3 h-3 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Quick Response
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
