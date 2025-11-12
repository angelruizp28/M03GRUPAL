
import React, { useState } from 'react';
import { mockPosts } from '../constants';
import SubscriptionModal from './SubscriptionModal';
import type { User } from '../types';

interface ProfileViewProps {
  currentUser: User;
  onEditProfileClick: () => void;
}

const StatItem: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="text-center">
    <p className="font-bold text-lg">{value}</p>
    <p className="text-sm text-gray-400">{label}</p>
  </div>
);

const ProfileView: React.FC<ProfileViewProps> = ({ currentUser, onEditProfileClick }) => {
  const [isSubModalOpen, setSubModalOpen] = useState(false);
  const userPosts = mockPosts.filter(p => p.user.id === currentUser.id);

  return (
    <>
      <div className="p-4">
        <div className="flex items-center space-x-4">
          <img src={currentUser.avatarUrl} alt={currentUser.username} className="w-20 h-20 rounded-full object-cover" />
          <div className="flex-grow flex justify-around">
              <StatItem value={userPosts.length.toString()} label="Posts" />
              <StatItem value="1.2M" label="Followers" />
              <StatItem value="150" label="Following" />
          </div>
        </div>
        <div className="mt-4">
          <h2 className="font-semibold">{currentUser.username}</h2>
          <p className="text-sm text-gray-300">{currentUser.bio}</p>
        </div>
        <div className="flex space-x-2 mt-4">
          <button onClick={onEditProfileClick} className="flex-grow bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">Edit Profile</button>
          <button className="flex-grow bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">Share Profile</button>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-800">
          <h3 className="font-bold text-lg mb-2">My Plan: Creator</h3>
          <div className="bg-gray-900 p-4 rounded-lg">
              <p className="text-purple-400 font-semibold">Creator Plan - €4,99/mes</p>
              <ul className="text-sm text-gray-300 list-disc list-inside mt-2 space-y-1">
                  <li>Reduced 2% commission</li>
                  <li>Advanced engagement stats</li>
                  <li>Content promotion tools</li>
              </ul>
              <button onClick={() => setSubModalOpen(true)} className="w-full mt-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold py-2 rounded-lg transition-colors text-sm">Manage Subscription</button>
          </div>
        </div>

        <div className="mt-6">
          <div className="grid grid-cols-3 gap-1">
            {userPosts.map(post => (
              <div key={post.id} className="aspect-square">
                <img src={post.imageUrl} alt={`Post by ${currentUser.username}`} className="w-full h-full object-cover" />
              </div>
            ))}
            {/* Fill empty grid cells for aesthetics */}
            {[...Array(Math.max(0, 6 - userPosts.length))].map((_, i) => <div key={i} className="aspect-square bg-gray-900"></div>)}
          </div>
        </div>
      </div>
      {isSubModalOpen && <SubscriptionModal onClose={() => setSubModalOpen(false)} />}
    </>
  );
};

export default ProfileView;
