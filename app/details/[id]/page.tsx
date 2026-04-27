import { ArrowLeft, Heart, Minus, Plus, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { popularFood } from '../../data';

export default async function DetailsScreen({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const dish = popularFood.find(d => d.id === parseInt(id)) ?? popularFood[0];

  return (
    <main className="flex flex-col bg-gradient-peach-inverse min-h-full relative overflow-hidden">

      {/* ── Header ── */}
      <header className="px-6 pt-10 pb-4 flex items-center justify-between z-20 relative">
        <Link href="/home">
          <button className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-subtle text-gray-900">
            <ArrowLeft size={20} />
          </button>
        </Link>
        <span className="font-poppins font-bold text-base text-gray-900">Details</span>
        <button className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-subtle">
          <Heart size={20} className="fill-gray-900 text-gray-900" />
        </button>
      </header>

      {/* ── Floating dish image (top-right) ── */}
      <div
        className="absolute z-10"
        style={{ top: '80px', right: '-60px', width: '260px', height: '260px' }}
      >
        <div className="w-full h-full rounded-full bg-white shadow-2xl border-8 border-white overflow-hidden relative">
          <Image
            src={`/images/${dish.imageDetail}`}
            alt={dish.title}
            fill
            className="object-cover"
            sizes="260px"
            priority
          />
        </div>
      </div>

      {/* ── Content ── */}
      <div className="px-6 flex-1 flex flex-col relative z-20 mt-2">

        {/* Title & rating */}
        <section className="mb-6 max-w-[55%]">
          <h1 className="font-poppins font-bold text-2xl text-gray-900 mb-1 leading-tight">
            {dish.title.charAt(0).toUpperCase() + dish.title.slice(1)} Bliss
          </h1>
          <div className="flex items-center gap-1">
            <Star size={13} className="fill-brand text-brand" />
            <span className="font-bold text-gray-700 text-xs">{dish.rating}</span>
            <span className="text-gray-400 text-xs">({dish.reviews} review)</span>
          </div>
        </section>

        {/* Price */}
        <section className="mb-4">
          <p className="text-gray-500 font-semibold text-xs mb-0.5">Price</p>
          <p className="font-poppins font-bold text-2xl text-gray-900">$ {dish.price.toFixed(2)}</p>
        </section>

        {/* Calories */}
        <section className="mb-4">
          <p className="text-gray-500 font-semibold text-xs mb-0.5">Calories</p>
          <p className="font-poppins font-bold text-lg text-gray-900">{dish.calories}</p>
        </section>

        {/* Diameter */}
        <section className="mb-6">
          <p className="text-gray-500 font-semibold text-xs mb-0.5">Diameter</p>
          <p className="font-poppins font-bold text-lg text-gray-900">{dish.diameter}</p>
        </section>

        {/* Quantity */}
        <section className="flex items-center gap-4 mb-6">
          <button className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white shadow-md">
            <Minus size={16} />
          </button>
          <span className="font-poppins font-bold text-lg">01</span>
          <button className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white shadow-md">
            <Plus size={16} />
          </button>
        </section>

        {/* Size */}
        <section className="mb-5">
          <p className="text-gray-500 font-semibold text-xs mb-3">Size</p>
          <div className="flex items-center gap-3">
            <button className="px-5 py-2.5 rounded-full bg-brand text-white font-poppins font-bold text-sm shadow-md">Small</button>
            <button className="px-5 py-2.5 rounded-full bg-white text-gray-500 font-poppins font-bold text-sm shadow-subtle border border-gray-100">Medium</button>
            <button className="px-5 py-2.5 rounded-full bg-white text-gray-500 font-poppins font-bold text-sm shadow-subtle border border-gray-100">Large</button>
          </div>
        </section>

        {/* Description */}
        <section className="mb-8">
          <p className="text-gray-600 text-xs leading-relaxed">
            {dish.description}
            <span className="font-bold text-gray-900 cursor-pointer">more_</span>
          </p>
        </section>

        {/* Add to Cart */}
        <section className="mt-auto pb-8">
          <button className="w-full bg-brand text-white font-poppins font-semibold text-base py-4 rounded-full shadow-hover hover:opacity-90 active:scale-[0.98] transition-all duration-200">
            Add to Cart
          </button>
          <div className="mt-4 flex justify-center">
            <div className="w-28 h-1 bg-gray-300 rounded-full" />
          </div>
        </section>

      </div>
    </main>
  );
}
