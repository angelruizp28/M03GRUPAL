
import React, { useState, useMemo } from 'react';
import { mockConversations, mockMessages, mockUsers } from '../constants';
import type { Message } from '../types';
import { ChevronLeftIcon, SendIcon } from './icons';

interface ChatViewProps {
    conversationId: string;
    onBack: () => void;
}

const MessageBubble: React.FC<{ message: Message }> = ({ message }) => {
    const isMe = message.sender === 'me';
    return (
        <div className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs md:max-w-md px-4 py-2 rounded-2xl ${isMe ? 'bg-purple-600 rounded-br-lg' : 'bg-gray-700 rounded-bl-lg'}`}>
                <p className="text-sm text-white">{message.text}</p>
            </div>
        </div>
    );
};

const ChatView: React.FC<ChatViewProps> = ({ conversationId, onBack }) => {
    const conversation = useMemo(() => mockConversations.find(c => c.id === conversationId), [conversationId]);
    const messages = useMemo(() => mockMessages[conversationId] || [], [conversationId]);
    const [newMessage, setNewMessage] = useState('');

    if (!conversation) {
        return <div className="p-4 text-center">Conversation not found.</div>;
    }
    
    const partner = conversation.user;

    return (
        <div className="h-full flex flex-col">
            {/* Header */}
            <div className="flex-shrink-0 flex items-center p-3 border-b border-gray-800 bg-black/80 backdrop-blur-sm">
                <button onClick={onBack} className="mr-2 text-gray-300 hover:text-white">
                    <ChevronLeftIcon className="w-6 h-6" />
                </button>
                <img src={partner.avatarUrl} alt={partner.username} className="w-10 h-10 rounded-full object-cover" />
                <span className="ml-3 font-semibold">{partner.username}</span>
            </div>

            {/* Messages */}
            <div className="flex-grow p-4 space-y-4 overflow-y-auto">
                {messages.map(msg => <MessageBubble key={msg.id} message={msg} />)}
            </div>

            {/* Input */}
            <div className="flex-shrink-0 p-2 border-t border-gray-800 bg-black">
                <div className="flex items-center space-x-2">
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type a message..."
                        className="flex-grow bg-gray-800 border border-gray-700 rounded-full py-2 px-4 text-sm placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500 outline-none"
                    />
                    <button className="bg-purple-600 hover:bg-purple-500 text-white rounded-full p-3 transition-colors disabled:bg-gray-600" disabled={!newMessage.trim()}>
                        <SendIcon className="w-5 h-5"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatView;
