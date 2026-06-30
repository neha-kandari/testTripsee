'use client';

import React, { useState } from 'react';

interface ItineraryBookingFormProps {
  packageTitle?: string;
}

export default function ItineraryBookingForm({ packageTitle = 'this package' }: ItineraryBookingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    adults: '2 Adults',
    children: '0 Children',
    requirements: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `Hello! I'm interested in booking the *${packageTitle}* package.

*Contact Information:*
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone}

*Trip Details:*
• Travel Date: ${formData.date}
• Adults: ${formData.adults}
• Children: ${formData.children}
• Special Requirements: ${formData.requirements || 'None'}

Please help me plan my perfect trip!`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/918595682910?text=${encodedMessage}`;

    // Open Thank You page in a new tab with the pre-filled WhatsApp URL.
    window.open(`/thank-you?wa=${encodeURIComponent(whatsappUrl)}`, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      adults: '2 Adults',
      children: '0 Children',
      requirements: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
        <input 
          type="text" 
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Enter your full name"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input 
          type="email" 
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Enter your email"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
        <input 
          type="tel" 
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Enter your phone number"
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Adults</label>
          <select 
            value={formData.adults}
            onChange={(e) => setFormData({ ...formData, adults: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option>1 Adult</option>
            <option>2 Adults</option>
            <option>3 Adults</option>
            <option>4 Adults</option>
            <option>5+ Adults</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Children</label>
          <select 
            value={formData.children}
            onChange={(e) => setFormData({ ...formData, children: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option>0 Children</option>
            <option>1 Child</option>
            <option>2 Children</option>
            <option>3 Children</option>
            <option>4+ Children</option>
          </select>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Travel Date</label>
        <input 
          type="date" 
          required
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Special Requirements</label>
        <textarea 
          rows={3}
          value={formData.requirements}
          onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Any special requests or requirements..."
        ></textarea>
      </div>
      
      <button 
        type="submit"
        className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition duration-300"
      >
        Submit Inquiry
      </button>
    </form>
  );
}
