
import React, { useState } from 'react';
import { mockStories, mockPosts } from '../constants';
import type { Story, User } from '../types';
import PostCard from './PostCard';
import MomentsFeed from './MomentsFeed';
import MatchView from './MatchView';

interface StoryBubbleProps {
    story: Story;
    onClick: (story: Story) => void;
}
const StoryBubble: React.FC<StoryBubbleProps> = ({ story, onClick }) => (
  <button onClick={() => onClick(story)} className="flex-shrink-0 flex flex-col items-center space-y-1">
    <div className="w-16 h-16 rounded-full p-0.5 bg-gradient-to-tr from-purple-500 to-pink-500">
      <div className="bg-black p-0.5 rounded-full">
        <img
          src={story.user.avatarUrl}
          alt={story.user.username}
          className="w-full h-full rounded-full object-cover"
        />
      </div>
    </div>
    <span className="text-xs text-gray-300 truncate w-16 text-center">{story.user.username}</span>
  </button>
);

interface StoryCarouselProps {
    onStoryClick: (story: Story) => void;
}
const StoryCarousel: React.FC<StoryCarouselProps> = ({ onStoryClick }) => (
  <div className="w-full px-4 py-3 border-b border-gray-800">
    <div className="flex space-x-4 overflow-x-auto pb-2 -mb-2">
      {mockStories.map(story => (
        <StoryBubble key={story.id} story={story} onClick={onStoryClick} />
      ))}
    </div>
  </div>
);

const TabButton: React.FC<{title: string, isActive: boolean, onClick:() => void}> = ({ title, isActive, onClick }) => (
    <button onClick={onClick} className={`flex-1 py-3 text-sm font-semibold transition-colors ${isActive ? 'text-white border-b-2 border-white' : 'text-gray-500'}`}>
        {title}
    </button>
);

interface HomeFeedProps {
    onStoryClick: (story: Story) => void;
    onDonateClick: (user: User) => void;
}

const HomeFeed: React.FC<HomeFeedProps> = ({ onStoryClick, onDonateClick }) => {
  const [activeTab, setActiveTab] = useState('feed');

  const renderContent = () => {
    switch(activeTab) {
        case 'feed':
            return <div className="flex flex-col">{mockPosts.map(post => (<PostCard key={post.id} post={post} onDonateClick={onDonateClick} />))}</div>;
        case 'moments':
            return <MomentsFeed />;
        case 'match':
            return <MatchView />;
        default:
            return null;
    }
  }

  return (
    <div className="w-full">
      <StoryCarousel onStoryClick={onStoryClick}/>
      <div className="flex justify-around border-b border-gray-800 sticky top-0 bg-black z-[5]">
          <TabButton title="Feed" isActive={activeTab === 'feed'} onClick={() => setActiveTab('feed')} />
          <TabButton title="Moments" isActive={activeTab === 'moments'} onClick={() => setActiveTab('moments')} />
          <TabButton title="Match" isActive={activeTab === 'match'} onClick={() => setActiveTab('match')} />
      </div>
      {renderContent()}
    </div>
  );
};

export default HomeFeed;
