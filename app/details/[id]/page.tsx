import PrimaryButton from '@/components/mobile/PrimaryButton';
import { ArrowLeft, Heart, Minus, Plus, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function DetailsScreen() {
  return (
    <main className="flex-1 flex flex-col bg-gradient-peach-inverse min-h-screen relative overflow-hidden">
      
      {/* Top Header */}
      <header className="px-6 pt-12 pb-6 flex items-center justify-between z-20">
        <Link href="/home">
          <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-subtle text-gray-900">
            <ArrowLeft size={24} />
          </button>
        </Link>
        <span className="font-poppins font-bold text-lg text-gray-900">Details</span>
        <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-subtle text-gray-900">
          <Heart size={24} className="fill-gray-300 text-gray-300" />
        </button>
      </header>

      {/* Main Content */}
      <div className="px-6 flex-1 flex flex-col relative z-20 mt-4">
        
        {/* Title & Rating */}
        <h1 className="font-poppins font-bold text-3xl text-gray-900 mb-2">Pizza Bliss</h1>
        <div className="flex items-center gap-1.5 mb-8">
          <Star size={14} className="fill-brand text-brand" />
          <span className="font-bold text-gray-700 text-sm">4.9</span>
          <span className="text-gray-400 text-sm">(1550 review)</span>
        </div>

        {/* Price */}
        <div className="mb-6">
          <p className="text-gray-500 font-semibold text-sm mb-1">Price</p>
          <p className="font-poppins font-bold text-2xl text-gray-900">$ 10.50</p>
        </div>

        {/* Nutritional Info */}
        <div className="mb-6">
          <p className="text-gray-500 font-semibold text-sm mb-1">Calories</p>
          <p className="font-poppins font-bold text-lg text-gray-900">480 Cal</p>
        </div>

        <div className="mb-8">
          <p className="text-gray-500 font-semibold text-sm mb-1">Diameter</p>
          <p className="font-poppins font-bold text-lg text-gray-900">18.05 Cm</p>
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center gap-4 mb-8">
          <button className="w-8 h-8 rounded-full bg-brand flex items-center justify-center text-white shadow-md">
            <Minus size={16} />
          </button>
          <span className="font-poppins font-bold text-lg">01</span>
          <button className="w-8 h-8 rounded-full bg-brand flex items-center justify-center text-white shadow-md">
            <Plus size={16} />
          </button>
        </div>

        {/* Size Selector */}
        <div className="mb-6">
          <p className="text-gray-500 font-semibold text-sm mb-3">Size</p>
          <div className="flex items-center gap-3">
            <button className="px-5 py-2 rounded-full bg-[#efa9a1] text-white font-poppins font-bold text-sm shadow-md">Small</button>
            <button className="px-5 py-2 rounded-full bg-white text-gray-500 font-poppins font-bold text-sm shadow-subtle">Medium</button>
            <button className="px-5 py-2 rounded-full bg-[#efa9a1] text-white font-poppins font-bold text-sm shadow-md opacity-70">Large</button>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-xs leading-relaxed mb-8 max-w-[240px]">
          Onion capsicum pizza is a culinary masterpiece that tantalizes the senses with its aromatic spices, tender onion and capsicum and fragrant pizza base. originating from the vibrant city of the Hyaderabad in india, this is iconic dish......<span className="font-bold text-gray-900 cursor-pointer">more_</span>
        </p>

        {/* Add to Cart Button */}
        <div className="mt-auto pb-8">
          <PrimaryButton>
            Add to Cart
          </PrimaryButton>
        </div>
      </div>

      {/* Floating Large Dish Image */}
      <div className="absolute top-[20%] -right-48 w-96 h-96 rounded-full bg-white shadow-2xl flex items-center justify-center overflow-hidden z-10 border-8 border-white">
        <Image src="/images/paneer-pizza 2.png" alt="Pizza" fill className="object-cover" />
      </div>

    </main>
  );
}
