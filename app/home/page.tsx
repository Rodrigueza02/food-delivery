'use client';

import { useState } from 'react';
import BottomNav from '@/components/mobile/BottomNav';
import DishCard from '@/components/mobile/DishCard';
import { Search, MapPin, ChevronDown, SlidersHorizontal } from 'lucide-react';
import Image from 'next/image';
import { popularFood, categories } from '../data';

export default function HomeDashboard() {
  const [activeCategory, setActiveCategory] = useState('biryani');

  const filtered = popularFood.filter(f => f.category === activeCategory);

  return (
    <main className="flex flex-col bg-gradient-peach min-h-full pb-28 relative">

      {/* ── Header ── */}
      <header className="px-6 pt-10 pb-4 flex items-center justify-between">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-gray-200 border-2 border-white overflow-hidden shadow-sm relative flex-shrink-0">
          <Image src="/images/Ellipse 3.png" alt="Profile" fill className="object-cover" sizes="48px" />
        </div>

        {/* Location */}
        <div className="flex items-center gap-1 cursor-pointer">
          <MapPin size={16} className="text-gray-900" />
          <span className="font-poppins font-bold text-sm text-gray-900">Canada</span>
          <ChevronDown size={16} className="text-gray-900" />
        </div>

        {/* Menu button */}
        <button className="w-12 h-12 rounded-full bg-white/60 backdrop-blur-md flex items-center justify-center shadow-sm text-gray-900 flex-shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="8" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </header>

      <div className="px-6 flex-1 flex flex-col">

        {/* ── Hero title ── */}
        <section className="mb-6">
          <h1 className="font-poppins font-bold text-[26px] text-gray-900 leading-tight max-w-[260px]">
            Ready to order your<br />favourite food ?
          </h1>
        </section>

        {/* ── Search bar ── */}
        <section className="mb-6">
          <div className="relative shadow-subtle">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search your food"
              className="w-full bg-white pl-14 pr-14 py-4 rounded-full text-sm font-medium outline-none text-gray-500 placeholder:text-gray-400"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-brand rounded-full flex items-center justify-center text-white shadow-hover">
              <SlidersHorizontal size={16} />
            </button>
          </div>
        </section>

        {/* ── Categories ── */}
        <section className="mb-6">
          <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-1 -mx-6 px-6">
            {categories.map((cat) => {
              const isActive = cat.id === activeCategory;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 pr-5 pl-1.5 py-1.5 rounded-full transition-all flex-shrink-0 shadow-sm ${
                    isActive
                      ? 'bg-[#efa9a1] text-white'
                      : 'bg-black/15 text-white backdrop-blur-sm'
                  }`}
                >
                  <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-white/60 relative flex-shrink-0">
                    <Image src={`/images/${cat.image}`} alt={cat.name} fill className="object-cover" sizes="36px" />
                  </div>
                  <span className="font-poppins font-bold text-sm tracking-wide whitespace-nowrap">
                    {cat.name}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* ── Popular Food ── */}
        <section className="flex-1">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-poppins font-bold text-xl text-gray-900">Popular Food</h2>
            <button className="text-gray-600 text-xs font-semibold">See all</button>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-20">
            {filtered.map((food) => (
              <DishCard key={food.id} {...food} />
            ))}
          </div>
        </section>

      </div>

      <BottomNav />
    </main>
  );
}
