
import React from 'react';
import type { MatchProfile } from '../types';

interface MatchCardProps {
    profile: MatchProfile;
    isActive: boolean;
}

const MatchCard: React.FC<MatchCardProps> = ({ profile, isActive }) => {
    return (
        <div 
            className={`absolute w-full h-full transition-transform duration-500 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'}`}
        >
            <div className="relative w-full h-full bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                <img src={profile.images[0]} alt={profile.user.username} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10"></div>
                <div className="absolute bottom-0 left-0 p-5 text-white">
                    <h3 className="text-2xl font-bold">{profile.user.username}, {profile.age}</h3>
                    <p className="text-sm mt-1">{profile.bio}</p>
                </div>
            </div>
        </div>
    );
};

export default MatchCard;
