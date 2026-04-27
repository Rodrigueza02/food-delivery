import Image from 'next/image';
import Link from 'next/link';

export default function WelcomeScreen() {
  return (
    <main className="flex flex-col bg-gradient-peach min-h-full">
      
      {/* ── Floating food images section ── */}
      <section className="relative flex-1 w-full overflow-hidden" style={{ minHeight: '60%' }}>

        {/* Top-left: Dim Sum / dumplings */}
        <div className="absolute top-10 -left-6 w-32 h-32 rounded-full bg-white shadow-lg border-4 border-white overflow-hidden">
          <Image
            src="/images/Group 3.png"
            alt="Dim Sum"
            fill
            className="object-cover"
            sizes="128px"
          />
        </div>

        {/* Top-right: Biryani bowl */}
        <div className="absolute top-16 -right-8 w-40 h-40 rounded-full bg-white shadow-lg border-4 border-white overflow-hidden">
          <Image
            src="/images/Group 4.png"
            alt="Biryani"
            fill
            className="object-cover"
            sizes="160px"
          />
        </div>

        {/* Center: Pizza (largest, on top) */}
        <div className="absolute top-[28%] left-1/2 -translate-x-1/2 w-52 h-52 rounded-full bg-white shadow-2xl border-4 border-white overflow-hidden z-10">
          <Image
            src="/images/paneer-pizza 2.png"
            alt="Pizza"
            fill
            className="object-cover"
            sizes="208px"
          />
        </div>

        {/* Bottom-left: Burger (partially off-screen) */}
        <div className="absolute top-[52%] -left-10 w-48 h-48 rounded-full bg-white shadow-xl border-4 border-white overflow-hidden">
          <Image
            src="/images/Group 8.png"
            alt="Burger"
            fill
            className="object-cover"
            sizes="192px"
          />
        </div>

        {/* Bottom-center-right: Spring rolls */}
        <div className="absolute top-[62%] right-6 w-36 h-36 rounded-full bg-white shadow-xl border-4 border-white overflow-hidden">
          <Image
            src="/images/Group 12.png"
            alt="Spring Rolls"
            fill
            className="object-cover"
            sizes="144px"
          />
        </div>

        {/* Extra: Paneer tikka (bottom-right corner) */}
        <div className="absolute top-[72%] -right-6 w-32 h-32 rounded-full bg-white shadow-lg border-4 border-white overflow-hidden">
          <Image
            src="/images/Group 13.png"
            alt="Paneer Tikka"
            fill
            className="object-cover"
            sizes="128px"
          />
        </div>
      </section>

      {/* ── Bottom content card ── */}
      <section className="bg-white w-full rounded-t-[40px] pt-10 pb-10 px-8 flex flex-col items-center text-center shadow-[0_-20px_40px_rgba(0,0,0,0.06)] z-20">
        <h1 className="font-poppins font-extrabold text-[28px] leading-tight text-gray-900 mb-3">
          Test the Joy of<br />Delivery
        </h1>

        <p className="text-gray-500 text-sm mb-10 max-w-[260px] leading-relaxed">
          Unlock a world of culinary delights,<br />right at your fingertips
        </p>

        <Link href="/home" className="w-full">
          <button className="w-full bg-brand text-white font-poppins font-semibold text-base py-4 rounded-full shadow-hover hover:opacity-90 active:scale-[0.98] transition-all duration-200">
            Get Started
          </button>
        </Link>

        {/* Home indicator bar */}
        <div className="mt-6 w-28 h-1 bg-gray-300 rounded-full" />
      </section>
    </main>
  );
}
