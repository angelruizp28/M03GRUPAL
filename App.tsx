
import React, { useState, useCallback } from 'react';
import HomeFeed from './components/HomeFeed';
import LiveFeedView from './components/LiveFeedView';
import ShopView from './components/ShopView';
import ProfileView from './components/ProfileView';
import MessagesView from './components/MessagesView';
import ChatView from './components/ChatView';
import BottomNav from './components/BottomNav';
import CreatePostModal from './components/CreatePostModal';
import GoLiveView from './components/GoLiveView';
import EditProfileModal from './components/EditProfileModal';
import StoryView from './components/StoryView';
import DonationModal from './components/DonationModal';
import { LogoIcon, MessageIcon } from './components/icons';
import { mockUsers } from './constants';
import type { View, User, Story } from './types';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<View>('home');
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [isGoLiveOpen, setGoLiveOpen] = useState(false);
  const [isEditProfileOpen, setEditProfileOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<User>(mockUsers[0]);
  const [activeConversationId, setActiveConversationId] = useState<string | null>(null);
  const [activeStory, setActiveStory] = useState<Story | null>(null);
  const [isDonationModalOpen, setDonationModalOpen] = useState(false);
  const [donationRecipient, setDonationRecipient] = useState<User | null>(null);

  const handleOpenCreateModal = useCallback(() => setCreateModalOpen(true), []);
  const handleCloseCreateModal = useCallback(() => setCreateModalOpen(false), []);

  const handleGoLive = useCallback(() => {
    setCreateModalOpen(false);
    setGoLiveOpen(true);
  }, []);
  const handleCloseGoLive = useCallback(() => setGoLiveOpen(false), []);

  const handleOpenEditProfile = useCallback(() => setEditProfileOpen(true), []);
  const handleCloseEditProfile = useCallback(() => setEditProfileOpen(false), []);
  const handleSaveProfile = useCallback((updatedUser: User) => {
    setCurrentUser(updatedUser);
    setEditProfileOpen(false);
  }, []);

  const handleSelectConversation = useCallback((conversationId: string) => {
      setActiveConversationId(conversationId);
  }, []);
  
  const handleBackToMessages = useCallback(() => {
      setActiveConversationId(null);
  }, []);

  const handleStoryClick = useCallback((story: Story) => {
    setActiveStory(story);
  }, []);

  const handleCloseStory = useCallback(() => {
    setActiveStory(null);
  }, []);

  const handleOpenDonationModal = useCallback((user: User) => {
    setDonationRecipient(user);
    setDonationModalOpen(true);
  }, []);

  const handleCloseDonationModal = useCallback(() => {
    setDonationRecipient(null);
    setDonationModalOpen(false);
  }, []);


  const renderView = () => {
    switch (activeView) {
      case 'home':
        return <HomeFeed onStoryClick={handleStoryClick} onDonateClick={handleOpenDonationModal} />;
      case 'live':
        return <LiveFeedView onDonateClick={handleOpenDonationModal} />;
      case 'shop':
        return <ShopView />;
      case 'messages':
        return <MessagesView onConversationSelect={handleSelectConversation} />;
      case 'profile':
        return <ProfileView currentUser={currentUser} onEditProfileClick={handleOpenEditProfile} />;
      default:
        return <HomeFeed onStoryClick={handleStoryClick} onDonateClick={handleOpenDonationModal} />;
    }
  };

  const MainContent: React.FC = () => {
    if (activeConversationId) {
      return <ChatView conversationId={activeConversationId} onBack={handleBackToMessages} />;
    }
    return renderView();
  };

  return (
    <div className="h-screen w-screen bg-black text-white font-sans flex flex-col max-w-md mx-auto border-x border-gray-800">
      <header className="flex-shrink-0 flex items-center justify-between p-4 border-b border-gray-800 sticky top-0 bg-black/80 backdrop-blur-sm z-10">
        <div className="flex items-center gap-2">
            <LogoIcon className="h-10 w-10 text-gray-800" />
            <span className="font-poppins text-2xl font-bold tracking-tighter text-white">ALLIN</span>
        </div>
        <button onClick={() => setActiveView('messages')} className="text-gray-300 hover:text-white">
          <MessageIcon className="h-7 w-7"/>
        </button>
      </header>
      
      <main className="flex-grow overflow-y-auto pb-16">
        <MainContent />
      </main>
      
      {!activeConversationId && (
         <BottomNav 
          activeView={activeView} 
          setActiveView={setActiveView}
          onPlusClick={handleOpenCreateModal}
        />
      )}

      {isCreateModalOpen && <CreatePostModal onClose={handleCloseCreateModal} onGoLive={handleGoLive} />}
      {isGoLiveOpen && <GoLiveView onClose={handleCloseGoLive} />}
      {isEditProfileOpen && <EditProfileModal currentUser={currentUser} onSave={handleSaveProfile} onClose={handleCloseEditProfile} />}
      {activeStory && <StoryView story={activeStory} onClose={handleCloseStory} />}
      {isDonationModalOpen && donationRecipient && <DonationModal recipient={donationRecipient} onClose={handleCloseDonationModal} />}
    </div>
  );
};

export default App;
