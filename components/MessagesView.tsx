
import React from 'react';
import { mockConversations } from '../constants';
import type { Conversation } from '../types';

interface ConversationItemProps {
    convo: Conversation;
    onClick: () => void;
}
const ConversationItem: React.FC<ConversationItemProps> = ({ convo, onClick }) => (
    <button onClick={onClick} className="w-full text-left flex items-center p-3 hover:bg-gray-900 transition-colors rounded-lg cursor-pointer">
        <div className="relative">
            <img src={convo.user.avatarUrl} alt={convo.user.username} className="w-14 h-14 rounded-full object-cover"/>
            {convo.unread && <span className="absolute top-0 right-0 block h-3 w-3 rounded-full bg-purple-500 ring-2 ring-black"></span>}
        </div>
        <div className="flex-grow ml-4">
            <div className="flex justify-between items-center">
                <p className={`font-semibold ${convo.unread ? 'text-white' : 'text-gray-300'}`}>{convo.user.username}</p>
                <p className="text-xs text-gray-500">{convo.timestamp}</p>
            </div>
            <p className={`text-sm truncate ${convo.unread ? 'text-gray-300' : 'text-gray-500'}`}>{convo.lastMessage}</p>
        </div>
    </button>
);

interface MessagesViewProps {
    onConversationSelect: (conversationId: string) => void;
}

const MessagesView: React.FC<MessagesViewProps> = ({ onConversationSelect }) => {
  return (
    <div className="p-2">
      <h2 className="text-xl font-bold p-2">Chats</h2>
      <div className="flex flex-col">
        {mockConversations.map(convo => (
          <ConversationItem key={convo.id} convo={convo} onClick={() => onConversationSelect(convo.id)} />
        ))}
      </div>
    </div>
  );
};

export default MessagesView;
