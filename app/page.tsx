import PrimaryButton from '@/components/mobile/PrimaryButton';
import Image from 'next/image';
import Link from 'next/link';

export default function WelcomeScreen() {
  return (
    <main className="flex-1 flex flex-col bg-gradient-peach relative min-h-screen">
      
      {/* Floating Circular Images Area */}
      <div className="flex-1 relative w-full overflow-hidden">
        {/* These divs represent the floating plates in the screenshot. 
            Replace the 'Insert ...' spans with actual Next.js Images when ready. */}
            
        {/* Top Left - Dim Sum */}
        <div className="absolute top-12 -left-8 w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center border-4 border-white overflow-hidden">
          <Image src="/images/Group 3.png" alt="Dim Sum" fill className="object-cover" />
        </div>

        {/* Top Right - Biryani */}
        <div className="absolute top-20 -right-12 w-40 h-40 rounded-full bg-white shadow-lg flex items-center justify-center border-4 border-white overflow-hidden">
          <Image src="/images/Group 4.png" alt="Biryani" fill className="object-cover" />
        </div>

        {/* Center - Pizza */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-white shadow-2xl flex items-center justify-center border-4 border-white overflow-hidden z-10">
          <Image src="/images/Group 10.png" alt="Pizza" fill className="object-cover" />
        </div>

        {/* Bottom Left - Burger */}
        <div className="absolute top-[55%] -left-10 w-44 h-44 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-white overflow-hidden">
          <Image src="/images/Group 8.png" alt="Burger" fill className="object-cover" />
        </div>

        {/* Bottom Right - Spring Rolls */}
        <div className="absolute top-[65%] right-8 w-36 h-36 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-white overflow-hidden">
          <Image src="/images/Group 12.png" alt="Spring Rolls" fill className="object-cover" />
        </div>
      </div>

      {/* Bottom Content Card */}
      <div className="bg-white w-full rounded-t-[40px] pt-10 pb-12 px-8 flex flex-col items-center text-center shadow-[0_-20px_40px_rgba(0,0,0,0.05)] relative z-20">
        <h1 className="font-poppins font-extrabold text-3xl mb-4 text-gray-900 leading-tight">
          Test the Joy of <br />
          Delivery
        </h1>
        
        <p className="text-gray-500 text-sm mb-10 max-w-[280px]">
          Unlock a world of culinary delights, right at your fingertips
        </p>

        <Link href="/home" className="w-full">
          <PrimaryButton>
            Get Started
          </PrimaryButton>
        </Link>
      </div>
    </main>
  );
}
