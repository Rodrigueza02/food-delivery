import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface DishCardProps {
  id: number;
  title: string;
  price: number;
  rating: number;
  deliveryTime: string;
  distance: string;
  imagePlaceholder: string;
}

export default function DishCard({ id, title, rating, deliveryTime, distance, imagePlaceholder }: DishCardProps) {
  return (
    <Link href={`/details/${id}`} className="block">
      <div className="bg-[#fce8e6]/60 rounded-[28px] px-3 pb-4 pt-2 relative mt-14 flex flex-col items-center cursor-pointer transition-transform hover:-translate-y-1 active:scale-[0.98]">

        {/* Floating circular image */}
        <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full bg-white shadow-xl border-4 border-white overflow-hidden">
          <Image
            src={`/images/${imagePlaceholder}`}
            alt={title}
            fill
            className="object-cover"
            sizes="112px"
          />
        </div>

        {/* Spacer for the floating image */}
        <div className="h-16" />

        {/* Title */}
        <h3 className="font-poppins font-bold text-sm text-gray-900 mb-2 leading-tight text-center px-1 line-clamp-2">
          {title}
        </h3>

        {/* Stars */}
        <div className="flex items-center justify-center gap-0.5 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className={i < Math.floor(rating) ? 'fill-brand text-brand' : 'text-gray-300 fill-gray-200'}
            />
          ))}
        </div>

        {/* Distance & time */}
        <div className="flex items-center justify-center gap-1.5 text-[11px] font-semibold text-gray-700">
          <span>{distance}</span>
          <span className="text-brand text-base leading-none -mt-0.5">•</span>
          <span>{deliveryTime}</span>
        </div>
      </div>
    </Link>
  );
}
