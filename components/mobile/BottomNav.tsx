import { Home, Heart, Trash2, Bell } from 'lucide-react';
import Link from 'next/link';

export default function BottomNav() {
  const navItems = [
    { icon: Home, label: 'Home', active: true, href: '/home' },
    { icon: Heart, label: 'Favorites', active: false, href: '#' },
    { icon: Trash2, label: 'Cart', active: false, href: '#' },
    { icon: Bell, label: 'Notifications', active: false, href: '#' },
  ];

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white px-8 py-4 rounded-t-[36px] shadow-[0_-8px_24px_rgba(0,0,0,0.07)] z-50">
      <div className="flex items-center justify-between">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
              key={index}
              href={item.href}
              className="flex items-center justify-center"
            >
              <div className={`p-3 rounded-full transition-all ${item.active ? 'bg-brand shadow-hover' : 'text-gray-400 hover:text-brand'}`}>
                <Icon size={22} className={item.active ? 'text-white' : ''} strokeWidth={2} />
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
