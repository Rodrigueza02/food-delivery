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

export default function DishCard({ id, title, price, rating, deliveryTime, distance, imagePlaceholder }: DishCardProps) {
  return (
    <Link href={`/details/${id}`}>
      <div className="bg-brand-light/30 rounded-[30px] p-4 relative mt-16 flex flex-col items-center cursor-pointer transition-transform hover:-translate-y-2">
        {/* Floating Image */}
        <div className="absolute -top-16 w-36 h-36 rounded-full bg-white shadow-xl flex items-center justify-center overflow-hidden border-4 border-white relative">
          <Image src={`/images/${imagePlaceholder}`} alt={title} fill className="object-cover" />
        </div>

        {/* Content spacing to push text down below the floating image */}
        <div className="mt-20 w-full text-center">
          <h3 className="font-poppins font-bold text-lg text-gray-900 mb-2 leading-tight px-2">{title}</h3>
          
          {/* Rating */}
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className={i < Math.floor(rating) ? "fill-brand text-brand" : "text-gray-300"} />
            ))}
          </div>

          {/* Meta info */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-gray-800">
            <span>{distance}</span>
            <span className="text-brand text-xl leading-none -mt-1">•</span>
            <span>{deliveryTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
