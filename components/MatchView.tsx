
import React, { useState } from 'react';
import { mockMatchProfiles } from '../constants';
import MatchCard from './MatchCard';
import { XMarkIcon, SolidHeartIcon } from './icons';

const MatchView: React.FC = () => {
    const [profiles, setProfiles] = useState(mockMatchProfiles);

    const handleSwipe = () => {
        setProfiles(prev => prev.slice(1));
    };
    
    // Reset profiles when stack is empty
    if (profiles.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-96">
                <p className="text-gray-400">No more profiles for now!</p>
                <button onClick={() => setProfiles(mockMatchProfiles)} className="mt-4 bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg">
                    Refresh
                </button>
            </div>
        )
    }

    return (
        <div className="relative h-[calc(100vh-200px)] flex items-center justify-center p-4">
            {/* Profile Stack */}
            <div className="relative w-full h-full max-w-sm max-h-[600px]">
                {profiles.map((profile, index) => (
                    <MatchCard key={profile.id} profile={profile} isActive={index === 0} />
                )).reverse()}
            </div>
            
            {/* Action Buttons */}
            <div className="absolute bottom-4 flex gap-8">
                <button onClick={handleSwipe} className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-red-500 hover:bg-white/20 transition-colors">
                    <XMarkIcon className="w-10 h-10" />
                </button>
                <button onClick={handleSwipe} className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-green-400 hover:bg-white/20 transition-colors">
                    <SolidHeartIcon className="w-10 h-10" />
                </button>
            </div>
        </div>
    );
};

export default MatchView;
