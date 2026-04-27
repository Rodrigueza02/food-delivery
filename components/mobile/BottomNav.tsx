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
    <div className="fixed bottom-0 w-full max-w-[430px] bg-white px-8 py-5 rounded-t-[40px] shadow-[0_-10px_30px_rgba(0,0,0,0.05)] z-50">
      <div className="flex items-center justify-between">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link 
              key={index} 
              href={item.href}
              className={`flex items-center justify-center transition-colors ${
                item.active ? 'text-white' : 'text-gray-500 hover:text-brand'
              }`}
            >
              <div className={`relative p-3 rounded-full ${item.active ? 'bg-brand shadow-hover' : ''}`}>
                <Icon size={24} className={item.active ? 'text-white' : ''} strokeWidth={2} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
