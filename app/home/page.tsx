import BottomNav from '@/components/mobile/BottomNav';
import DishCard from '@/components/mobile/DishCard';
import { Search, MapPin, ChevronDown, Menu, SlidersHorizontal } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import { popularFood } from '../data';

const categories = [
  { id: 1, name: 'Biryani', image: 'Hyderabadi Veg Biryani 2.png', active: true },
  { id: 2, name: 'Pizza', image: 'paneer-pizza 1.png', active: false },
  { id: 3, name: 'Burger', image: 'images 2.png', active: false },
];

export default function HomeDashboard() {
  return (
    <main className="flex-1 flex flex-col bg-gradient-peach h-screen overflow-y-auto pb-28 relative">
      
      {/* Top Header */}
      <header className="px-6 pt-12 pb-6 flex items-center justify-between z-10">
        <div className="w-12 h-12 rounded-full bg-gray-200 border-2 border-white overflow-hidden shadow-sm flex items-center justify-center relative">
          <Image src="/images/Ellipse 3.png" alt="Profile" fill className="object-cover" />
        </div>
        
        <div className="flex items-center gap-1.5 cursor-pointer">
          <MapPin size={18} className="text-gray-900" />
          <span className="font-poppins font-bold text-base text-gray-900">Canada</span>
          <ChevronDown size={18} className="text-gray-900" />
        </div>
        
        <button className="w-12 h-12 rounded-full bg-white/50 backdrop-blur-md flex items-center justify-center shadow-sm text-gray-900">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="8" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </header>

      <div className="px-6 flex-1 flex flex-col z-10">
        
        {/* Main Title */}
        <h1 className="font-poppins font-bold text-3xl text-gray-900 mb-8 leading-tight max-w-[280px]">
          Ready to order your favourite food ?
        </h1>

        {/* Search Bar */}
        <div className="relative mb-8 shadow-subtle">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
          <input 
            type="text" 
            placeholder="Search your food" 
            className="w-full bg-white pl-16 pr-16 py-4 rounded-full text-sm font-medium outline-none text-gray-500"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-brand rounded-full flex items-center justify-center text-white shadow-hover">
            <SlidersHorizontal size={18} />
          </button>
        </div>
        
        {/* Categories Section */}
        <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2 mb-8 -mx-6 px-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`flex items-center gap-3 pr-6 pl-2 py-2 rounded-full transition-all flex-shrink-0 shadow-sm ${
                cat.active 
                  ? 'bg-[#efa9a1] text-white' 
                  : 'bg-black/20 text-white backdrop-blur-sm'
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-white/50 relative">
                <Image src={`/images/${cat.image}`} alt={cat.name} fill className="object-cover" />
              </div>
              <span className="font-poppins font-bold text-sm tracking-wide">
                {cat.name}
              </span>
            </button>
          ))}
        </div>

        {/* Popular Food List */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-poppins font-bold text-xl text-gray-900">Popular Food</h2>
            <button className="text-gray-700 text-xs font-semibold">See all</button>
          </div>
          
          <div className="grid grid-cols-2 gap-x-4 gap-y-16">
            {popularFood.map((food) => (
              <DishCard key={food.id} {...food} />
            ))}
          </div>
        </section>
      </div>

      <BottomNav />
    </main>
  );
}
