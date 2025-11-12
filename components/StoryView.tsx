
import React from 'react';
import type { Story } from '../types';
import { CloseIcon } from './icons';

interface StoryViewProps {
    story: Story;
    onClose: () => void;
}

const StoryView: React.FC<StoryViewProps> = ({ story, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black z-50 flex flex-col p-4 max-w-md mx-auto">
            {/* Progress Bar */}
            <div className="w-full h-1 bg-gray-600 rounded-full mt-2">
                <div className="h-1 bg-white rounded-full" style={{ width: '50%' }}></div>
            </div>

            {/* Header */}
            <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-3">
                    <img src={story.user.avatarUrl} alt={story.user.username} className="w-10 h-10 rounded-full object-cover" />
                    <span className="font-semibold text-white">{story.user.username}</span>
                </div>
                <button onClick={onClose} className="text-white">
                    <CloseIcon className="w-7 h-7" />
                </button>
            </div>

            {/* Story Image */}
            <div className="flex-grow flex items-center justify-center mt-4">
                <img src={story.imageUrl} alt={`Story by ${story.user.username}`} className="max-h-full w-auto object-contain rounded-lg" />
            </div>

            {/* Footer Input */}
            <div className="mt-4">
                <input
                    type="text"
                    placeholder={`Reply to ${story.user.username}...`}
                    className="w-full bg-gray-800 border border-gray-700 rounded-full px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
            </div>
        </div>
    );
};

export default StoryView;
