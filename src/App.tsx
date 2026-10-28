import React, { useState } from 'react';

interface Service {
  id: number;
  title: string;
  description: string;
  duration: string;
  price: string;
  icon: React.ReactNode;
}

interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
}

const services: Service[] = [
  {
    id: 1,
    title: "Standard Clean",
    description: "Thorough cleaning of all rooms, dusting, vacuuming, and sanitizing surfaces.",
    duration: "2-3 hrs",
    price: "From $149",
    icon: <path d="M3 12l2-2 4 4 8-8" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
  },
  {
    id: 2,
    title: "Deep Clean",
    description: "Comprehensive cleaning including inside appliances, baseboards, windows, and hard-to-reach areas.",
    duration: "4-5 hrs",
    price: "From $249",
    icon: <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2 2 2 0 012 2v2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
  },
  {
    id: 3,
    title: "Move-In/Move-Out",
    description: "Complete turnover cleaning for new tenants or homeowners. Every corner, every surface.",
    duration: "5-7 hrs",
    price: "From $329",
    icon: <path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
  }
];

const testimonials: Testimonial[] = [
  { name: "Sarah Mitchell", location: "Upper East Side", text: "Absolutely impeccable work. My apartment has never looked cleaner. The team was punctual and professional.", rating: 5 },
  { name: "[Client Name]", location: "[Client City]", text: "[Insert authentic testimonial here]", rating: 5 },
  { name: "[Client Name]", location: "[Client City]", text: "[Insert authentic testimonial here]", rating: 5 }
];

const trustSignals = [
  "Fully Insured & Bonded",
  "Background-Checked Staff",
  "100% Satisfaction Guarantee",
  "Eco-Friendly Products"
];

export default function App() {
  const [, setSelectedService] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    date: '',
    service: '',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const openBooking = (serviceId?: number) => {
    if (serviceId) {
      const service = services.find(s => s.id === serviceId);
      if (service) {
        setFormData(prev => ({ ...prev, service: service.title }));
        setSelectedService(serviceId);
      }
    }
    setShowBooking(true);
    setIsSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setShowBooking(false);
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', address: '', date: '', service: '', notes: '' });
      setSelectedService(null);
      alert("Thank you! We've received your booking request. Our team will contact you within 30 minutes to confirm.");
    }, 1500);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-2xl tracking-tight text-slate-900">[Your Company]</div>
              <div className="text-[10px] text-slate-500 -mt-1">EST 2012</div>
            </div>
          </div>
          <div className="flex items-center gap-10 text-sm font-medium">
            <button onClick={() => scrollToSection('services')} className="text-slate-600 hover:text-slate-900 transition-colors">Services</button>
            <button onClick={() => scrollToSection('how')} className="text-slate-600 hover:text-slate-900 transition-colors">How it Works</button>
            <button onClick={() => scrollToSection('reviews')} className="text-slate-600 hover:text-slate-900 transition-colors">Reviews</button>
            <button onClick={() => openBooking()} className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full transition-all active:scale-[0.985]">Book Now</button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <div className="pt-20 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-8 pt-20 pb-24 text-center">
          <div className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm tracking-[3px] mb-6">[YOUR TAGLINE HERE]</div>
          <h1 className="text-7xl font-semibold tracking-tighter leading-none mb-6">
            Spotless homes.<br />Effortless booking.
          </h1>
          <p className="text-2xl text-slate-400 max-w-xl mx-auto mb-10">Premium cleaning tailored to your schedule.<br />Book today. Relax tonight.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => openBooking()} className="px-10 py-4 bg-white text-slate-900 font-semibold rounded-2xl text-lg hover:bg-emerald-50 active:bg-white transition-all shadow-xl">Schedule Your Clean</button>
            <button onClick={() => scrollToSection('services')} className="px-10 py-4 bg-white/10 hover:bg-white/20 font-semibold rounded-2xl text-lg border border-white/30 transition-all">View Services &amp; Pricing</button>
          </div>

          <div className="flex justify-center gap-8 mt-16 text-sm text-slate-400">
            {trustSignals.map((signal, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1 h-1 bg-emerald-500 rounded-full" />{signal}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STATS BAR */}
      <div className="border-b border-slate-100 bg-slate-50 py-6">
        <div className="max-w-5xl mx-auto px-8 flex justify-between text-center">
          {[
            { number: "12k+", label: "Homes Cleaned" },
            { number: "98%", label: "Repeat Clients" },
            { number: "4.98", label: "Average Rating" },
            { number: "4hrs", label: "Avg. Response" }
          ].map((stat, idx) => (
            <div key={idx}>
              <div className="text-3xl font-semibold tracking-tighter text-slate-900">{stat.number}</div>
              <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <div id="services" className="max-w-6xl mx-auto px-8 py-24">
        <div className="text-center mb-16">
          <div className="text-emerald-600 text-sm tracking-[4px] font-medium mb-3">EXCEPTIONAL CLEANING</div>
          <h2 className="text-6xl font-semibold tracking-tighter text-slate-900">Choose your service</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="group border border-slate-200 rounded-3xl p-9 hover:border-emerald-200 hover:shadow-xl transition-all bg-white flex flex-col">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-600 transition-colors">
                <svg className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {service.icon}
                </svg>
              </div>
              <h3 className="text-3xl font-semibold tracking-tight mb-3">{service.title}</h3>
              <p className="text-slate-600 flex-1 leading-relaxed mb-8">{service.description}</p>
              <div className="flex items-baseline justify-between mb-8 pt-6 border-t">
                <div>
                  <div className="text-xs text-slate-500">STARTING AT</div>
                  <div className="text-4xl font-semibold tracking-tighter text-emerald-600">{service.price}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-500">TYPICALLY</div>
                  <div className="text-lg text-slate-600">{service.duration}</div>
                </div>
              </div>
              <button 
                onClick={() => openBooking(service.id)} 
                className="w-full py-4 bg-slate-900 hover:bg-emerald-600 text-white rounded-2xl font-semibold transition-all active:scale-[0.985]"
              >
                Book This Service
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div id="how" className="bg-slate-950 text-white py-24">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="text-emerald-400 text-sm tracking-[4px] font-medium mb-3">SIMPLE PROCESS</div>
            <h2 className="text-6xl font-semibold tracking-tighter">Three steps to a cleaner home</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Book Online", desc: "Choose your service, pick a time, and tell us about your space." },
              { step: "02", title: "We Arrive Prepared", desc: "Our vetted team arrives on time with premium supplies and equipment." },
              { step: "03", title: "Enjoy the Results", desc: "Walk into a pristine space. Love it or we return free within 24 hours." }
            ].map((item, idx) => (
              <div key={idx} className="border-l-2 border-emerald-600 pl-8">
                <div className="text-emerald-500 text-6xl font-semibold tracking-[-3px] mb-6">{item.step}</div>
                <div className="text-3xl font-semibold tracking-tight mb-4">{item.title}</div>
                <p className="text-xl text-slate-400 leading-tight">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div id="reviews" className="max-w-5xl mx-auto px-8 py-24">
        <div className="text-center mb-16">
          <div className="text-emerald-600 text-sm tracking-[4px] font-medium mb-3">REAL RESULTS</div>
          <h2 className="text-6xl font-semibold tracking-tighter text-slate-900">[Your City] Clients Love Us</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white border border-slate-100 p-9 rounded-3xl">
              <div className="flex mb-6">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <svg key={idx} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-xl leading-tight text-slate-700 mb-8">"{t.text}"</p>
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-slate-500">{t.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="bg-emerald-600 text-white py-20">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="text-6xl font-semibold tracking-tighter mb-5">Ready for a cleaner home?</h2>
          <p className="text-emerald-100 text-2xl mb-10">[Insert call to action text]</p>
          <button onClick={() => openBooking()} className="px-14 py-5 bg-white text-emerald-700 rounded-2xl text-xl font-semibold hover:bg-emerald-50 transition-all active:scale-[0.985] shadow-2xl">Book Your Clean Now →</button>
          <div className="mt-6 text-sm text-emerald-200">Available 7 days a week • Same-day service often available</div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-16 text-sm">
        <div className="max-w-5xl mx-auto px-8 grid md:grid-cols-2 gap-y-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-emerald-600 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
              <span className="text-white text-2xl font-semibold tracking-tight">[Your Company]</span>
            </div>
              <div>[Insert short company description]</div>
          </div>
          <div className="grid grid-cols-2 text-sm">
            <div>
              <div className="text-white font-medium mb-4">Contact</div>
              <div>[Phone Number]</div>
              <div>[Email Address]</div>
            </div>
            <div>
              <div className="text-white font-medium mb-4">Service Areas</div>
              <div>[Service Area 1] • [Service Area 2]</div>
              <div>[Service Area 3] • [Service Area 4]</div>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-slate-600 mt-16">© {new Date().getFullYear()} [Your Company]. All rights reserved.</div>
      </footer>

      {/* BOOKING MODAL */}
      {showBooking && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] flex items-center justify-center p-6" onClick={() => setShowBooking(false)}>
          <div className="bg-white w-full max-w-lg rounded-3xl p-10 relative" onClick={e => e.stopPropagation()}>
            {!isSubmitted ? (
              <>
                <button onClick={() => setShowBooking(false)} className="absolute top-8 right-8 text-slate-400 hover:text-slate-900">✕</button>
                <div className="text-4xl font-semibold tracking-tight mb-2">Book Your Clean</div>
                <div className="text-slate-500 mb-9">We'll confirm within 30 minutes.</div>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-5">
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Full Name" required className="col-span-2 md:col-span-1 border border-slate-200 focus:border-emerald-600 rounded-2xl px-6 py-4 outline-none" />
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone Number" required className="col-span-2 md:col-span-1 border border-slate-200 focus:border-emerald-600 rounded-2xl px-6 py-4 outline-none" />
                  </div>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email Address" required className="w-full border border-slate-200 focus:border-emerald-600 rounded-2xl px-6 py-4 outline-none" />
                  <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="Service Address" required className="w-full border border-slate-200 focus:border-emerald-600 rounded-2xl px-6 py-4 outline-none" />
                  
                  <div className="grid grid-cols-2 gap-5">
                    <input type="date" name="date" value={formData.date} onChange={handleInputChange} required className="border border-slate-200 focus:border-emerald-600 rounded-2xl px-6 py-4 outline-none" />
                    <select name="service" value={formData.service} onChange={handleInputChange} required className="border border-slate-200 focus:border-emerald-600 rounded-2xl px-6 py-4 outline-none text-slate-600">
                      <option value="">Select Service</option>
                      {services.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                    </select>
                  </div>
                  <textarea name="notes" value={formData.notes} onChange={handleInputChange} placeholder="Any special instructions?" rows={3} className="w-full border border-slate-200 focus:border-emerald-600 rounded-3xl px-6 py-4 outline-none resize-y" />
                  
                  <button type="submit" className="mt-3 w-full py-5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-xl font-semibold rounded-2xl transition-all">Confirm Booking</button>
                  <div className="text-center text-xs text-slate-500">No payment required to book. Pay after service.</div>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="mx-auto mb-6 w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div className="text-3xl font-semibold tracking-tight">Booking Received</div>
                <div className="text-slate-500 mt-3">Please wait while we confirm your appointment...</div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
