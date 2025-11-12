
import React from 'react';
import type { Post, User } from '../types';
import { HeartIcon, CommentIcon, ShareIcon, GiftIcon } from './icons';

interface PostCardProps {
  post: Post;
  onDonateClick: (user: User) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onDonateClick }) => {
  return (
    <div className="w-full border-b border-gray-800">
      <div className="flex items-center p-3">
        <img src={post.user.avatarUrl} alt={post.user.username} className="w-8 h-8 rounded-full object-cover" />
        <span className="ml-3 font-semibold text-sm">{post.user.username}</span>
      </div>
      
      <img src={post.imageUrl} alt="Post content" className="w-full h-auto object-cover" />
      
      <div className="flex justify-between items-center p-3">
        <div className="flex space-x-4">
          <button className="text-gray-300 hover:text-white transition-colors"><HeartIcon className="w-7 h-7" /></button>
          <button className="text-gray-300 hover:text-white transition-colors"><CommentIcon className="w-7 h-7" /></button>
          <button className="text-gray-300 hover:text-white transition-colors"><ShareIcon className="w-7 h-7" /></button>
        </div>
        <button
          onClick={() => onDonateClick(post.user)}
          className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold py-2 px-4 rounded-full transition-colors text-sm"
        >
          <GiftIcon className="w-5 h-5" />
          <span>Donate</span>
        </button>
      </div>

      <div className="px-3 pb-3">
        <p className="font-semibold text-sm">{post.likes.toLocaleString()} likes</p>
        <p className="text-sm mt-1">
          <span className="font-semibold">{post.user.username}</span>
          <span className="ml-2 text-gray-300">{post.caption}</span>
        </p>
        <p className="text-xs text-gray-500 mt-2">View all {post.commentsCount} comments</p>
      </div>
    </div>
  );
};

export default PostCard;
