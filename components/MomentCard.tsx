
import React from 'react';
import type { Moment } from '../types';

const MomentCard: React.FC<{ moment: Moment }> = ({ moment }) => {
    return (
        <div className="bg-gray-900 rounded-2xl overflow-hidden">
            <div className="p-3 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <img src={moment.user.avatarUrl} alt={moment.user.username} className="w-8 h-8 rounded-full" />
                    <div>
                        <p className="font-semibold text-sm">{moment.user.username}</p>
                        <p className="text-xs text-gray-400">{moment.timestamp}</p>
                    </div>
                </div>
            </div>
            
            <div className="relative aspect-[3/4]">
                <img src={moment.primaryImageUrl} alt="Primary moment" className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 w-1/3 aspect-[3/4] rounded-xl overflow-hidden border-2 border-black shadow-lg">
                    <img src={moment.secondaryImageUrl} alt="Secondary moment" className="w-full h-full object-cover" />
                </div>
            </div>
            <div className="p-3">
                <p className="text-sm">{moment.caption}</p>
            </div>
        </div>
    );
};

export default MomentCard;
