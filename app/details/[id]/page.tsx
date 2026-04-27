import PrimaryButton from '@/components/mobile/PrimaryButton';
import { ArrowLeft, Heart, Minus, Plus, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { popularFood } from '../../data';

export default function DetailsScreen({ params }: { params: { id: string } }) {
  const dish = popularFood.find(d => d.id === parseInt(params.id)) || popularFood[0];

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
          <Heart size={24} className="fill-gray-900 text-gray-900" />
        </button>
      </header>

      {/* Main Content */}
      <div className="px-6 flex-1 flex flex-col relative z-20 mt-4">
        
        {/* Title & Rating */}
        <h1 className="font-poppins font-bold text-3xl text-gray-900 mb-2">{dish.title}</h1>
        <div className="flex items-center gap-1.5 mb-8">
          <Star size={14} className="fill-brand text-brand" />
          <span className="font-bold text-gray-700 text-sm">{dish.rating}</span>
          <span className="text-gray-400 text-sm">({dish.reviews} review)</span>
        </div>

        {/* Price */}
        <div className="mb-6">
          <p className="text-gray-500 font-semibold text-sm mb-1">Price</p>
          <p className="font-poppins font-bold text-2xl text-gray-900">$ {dish.price.toFixed(2)}</p>
        </div>

        {/* Nutritional Info */}
        <div className="mb-6">
          <p className="text-gray-500 font-semibold text-sm mb-1">Calories</p>
          <p className="font-poppins font-bold text-lg text-gray-900">{dish.calories}</p>
        </div>

        <div className="mb-8">
          <p className="text-gray-500 font-semibold text-sm mb-1">Diameter</p>
          <p className="font-poppins font-bold text-lg text-gray-900">{dish.diameter}</p>
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center gap-4 mb-8">
          <button className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white shadow-md">
            <Minus size={18} />
          </button>
          <span className="font-poppins font-bold text-xl">01</span>
          <button className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white shadow-md">
            <Plus size={18} />
          </button>
        </div>

        {/* Size Selector */}
        <div className="mb-6">
          <p className="text-gray-500 font-semibold text-sm mb-3">Size</p>
          <div className="flex items-center gap-3">
            <button className="px-5 py-2.5 rounded-full bg-[#efa9a1] text-white font-poppins font-bold text-sm shadow-md">Small</button>
            <button className="px-5 py-2.5 rounded-full bg-white text-gray-500 font-poppins font-bold text-sm shadow-subtle border border-gray-100">Medium</button>
            <button className="px-5 py-2.5 rounded-full bg-white text-gray-500 font-poppins font-bold text-sm shadow-subtle border border-gray-100">Large</button>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-xs leading-relaxed mb-8 max-w-[240px]">
          {dish.description}<span className="font-bold text-gray-900 cursor-pointer">more_</span>
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
        <Image src={`/images/${dish.imagePlaceholder}`} alt={dish.title} fill className="object-cover" />
      </div>

    </main>
  );
}
