
import React from 'react';
import type { View } from '../types';
import { HomeIcon, LiveIcon, PlusCircleIcon, UserCircleIcon, ShopIcon } from './icons';

interface BottomNavProps {
  activeView: View;
  setActiveView: (view: View) => void;
  onPlusClick: () => void;
}

const NavItem: React.FC<{
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}> = ({ icon, isActive, onClick }) => (
  <button onClick={onClick} className={`flex flex-col items-center justify-center w-full transition-colors duration-200 ${isActive ? 'text-purple-400' : 'text-gray-400 hover:text-white'}`}>
    {icon}
  </button>
);

const BottomNav: React.FC<BottomNavProps> = ({ activeView, setActiveView, onPlusClick }) => {
  const navItems = [
    { view: 'home', icon: <HomeIcon className="h-7 w-7" /> },
    { view: 'shop', icon: <ShopIcon className="h-7 w-7" /> },
    { view: 'create', icon: <PlusCircleIcon className="h-10 w-10 text-purple-400 hover:text-purple-300" /> },
    { view: 'live', icon: <LiveIcon className="h-7 w-7" /> },
    { view: 'profile', icon: <UserCircleIcon className="h-7 w-7" /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-black/80 backdrop-blur-sm border-t border-gray-800 max-w-md mx-auto z-10">
      <div className="flex justify-around items-center h-full">
        {navItems.map((item) => (
          <NavItem
            key={item.view}
            icon={item.icon}
            isActive={activeView === item.view}
            onClick={() => {
              if (item.view === 'create') {
                onPlusClick();
              } else {
                setActiveView(item.view as View);
              }
            }}
          />
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
