
import React from 'react';
import { mockMoments } from '../constants';
import MomentCard from './MomentCard';

const MomentsFeed: React.FC = () => {
  return (
    <div className="p-2 flex flex-col gap-4">
      {mockMoments.map(moment => (
        <MomentCard key={moment.id} moment={moment} />
      ))}
    </div>
  );
};

export default MomentsFeed;
