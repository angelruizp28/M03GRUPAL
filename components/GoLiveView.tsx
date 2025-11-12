
import React from 'react';
import { mockUsers } from '../constants';
import { CloseIcon, FlipIcon, SparklesIcon, EffectsIcon, ShareIcon, SettingsIcon, PencilIcon } from './icons';

interface GoLiveViewProps {
    onClose: () => void;
}

const GoLiveView: React.FC<GoLiveViewProps> = ({onClose}) => {
    return (
        <div className="fixed inset-0 bg-gradient-to-b from-gray-800 via-gray-900 to-red-900/80 text-white flex flex-col p-4 z-50">
            <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/livebg/600/1200')] bg-cover bg-center opacity-20 blur-md"></div>
            <div className="relative flex-grow flex flex-col">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <button onClick={onClose}><CloseIcon className="w-7 h-7" /></button>
                </div>

                {/* Main Content */}
                <div className="flex-grow flex flex-col items-start">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="relative">
                            <img src={mockUsers[0].avatarUrl} alt="User" className="w-20 h-20 rounded-md object-cover" />
                            <button className="absolute -bottom-1 -right-1 bg-white text-black text-xs font-semibold px-2 py-1 rounded">Change</button>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2 text-xl font-semibold">
                                <span className="text-gray-200">Add a title</span>
                                <PencilIcon className="w-5 h-5 text-gray-400" />
                            </div>
                             <div>
                                <span className="bg-white/10 text-yellow-300 text-sm font-medium px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                                    <SparklesIcon className="w-4 h-4"/>
                                    Chitchat
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar Actions */}
                <div className="absolute top-28 right-4 flex flex-col gap-8 text-sm">
                    <button className="flex flex-col items-center gap-1 opacity-90 hover:opacity-100"><FlipIcon className="w-8 h-8" /> Flip</button>
                    <button className="flex flex-col items-center gap-1 opacity-90 hover:opacity-100"><SparklesIcon className="w-8 h-8" /> Enhance</button>
                    <button className="flex flex-col items-center gap-1 opacity-90 hover:opacity-100"><EffectsIcon className="w-8 h-8" /> Effects</button>
                    <button className="flex flex-col items-center gap-1 opacity-90 hover:opacity-100"><ShareIcon className="w-8 h-8" /> Share</button>
                    <button className="flex flex-col items-center gap-1 opacity-90 hover:opacity-100"><SettingsIcon className="w-8 h-8" /> Settings</button>
                </div>


                {/* Footer */}
                <div className="flex flex-col items-center pb-4">
                    <button className="w-full max-w-xs bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-4 rounded-full transition-colors text-lg shadow-lg shadow-pink-600/30">
                        Go LIVE
                    </button>
                    <div className="flex gap-4 text-sm mt-4 text-gray-200">
                        <span>❐ Video live</span>
                        <span>❐ Connect to PC/Mac</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoLiveView;
