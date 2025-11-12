
import React from 'react';
import { mockLives } from '../constants';
import type { Live, User } from '../types';
import { HeartIcon, CommentIcon, ShareIcon, GiftIcon } from './icons';

interface LiveStreamProps {
    live: Live;
    onDonateClick: (user: User) => void;
}

const LiveStream: React.FC<LiveStreamProps> = ({ live, onDonateClick }) => (
    <div className="h-full w-full relative flex-shrink-0 snap-start flex flex-col justify-between"
        style={{
            backgroundImage: `url(${live.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
    >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
        
        <header className="relative z-10 p-4 flex justify-between items-start">
            <div className="flex items-center gap-3">
                <img src={live.user.avatarUrl} alt={live.user.username} className="w-10 h-10 rounded-full object-cover border-2 border-white"/>
                <div>
                    <p className="font-bold text-white">{live.user.username}</p>
                    <p className="text-xs text-gray-200">{live.viewers.toLocaleString()} viewers</p>
                </div>
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-md">LIVE</span>
            </div>
        </header>

        <footer className="relative z-10 p-4 flex items-end gap-3">
            <div className="flex-grow flex flex-col gap-2 text-white text-sm">
                <p><span className="font-semibold">alex.o</span>: this is so cool!</p>
                <p><span className="font-semibold">angel.r</span>: wow 🔥</p>
                <input
                    type="text"
                    placeholder="Add comment..."
                    className="w-full bg-black/40 border border-gray-600 rounded-full px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
            </div>
            <div className="flex flex-col gap-4">
                 <button className="text-white hover:text-pink-400 transition-colors flex flex-col items-center">
                    <HeartIcon className="w-8 h-8"/>
                    <span className="text-xs">1.2M</span>
                 </button>
                 <button className="text-white hover:text-blue-400 transition-colors flex flex-col items-center">
                    <CommentIcon className="w-8 h-8"/>
                    <span className="text-xs">15k</span>
                 </button>
                 <button className="text-white hover:text-green-400 transition-colors flex flex-col items-center">
                    <ShareIcon className="w-8 h-8"/>
                    <span className="text-xs">8k</span>
                 </button>
                 <button onClick={() => onDonateClick(live.user)} className="text-white hover:text-yellow-400 transition-colors flex flex-col items-center">
                    <GiftIcon className="w-8 h-8"/>
                    <span className="text-xs">Donate</span>
                 </button>
            </div>
        </footer>
    </div>
);

interface LiveFeedViewProps {
    onDonateClick: (user: User) => void;
}

const LiveFeedView: React.FC<LiveFeedViewProps> = ({ onDonateClick }) => {
    // Override main content overflow style for this view
    React.useEffect(() => {
        const mainElement = document.querySelector('main');
        if (mainElement) {
            mainElement.style.overflowY = 'hidden';
            mainElement.style.paddingBottom = '0';
        }
        return () => {
            if (mainElement) {
                mainElement.style.overflowY = 'auto';
                mainElement.style.paddingBottom = '4rem'; // 16 * 0.25rem
            }
        };
    }, []);

    return (
        <div className="h-full w-full overflow-y-scroll snap-y snap-mandatory">
            {mockLives.map(live => (
                <LiveStream key={live.id} live={live} onDonateClick={onDonateClick} />
            ))}
        </div>
    );
};

export default LiveFeedView;
