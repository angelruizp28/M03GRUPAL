
export type View = 'home' | 'live' | 'shop' | 'messages' | 'profile';

export interface User {
  id: string;
  username: string;
  avatarUrl: string;
  bio?: string;
}

export interface Story {
  id: string;
  user: User;
  imageUrl: string;
}

export interface Post {
  id: string;
  user: User;
  imageUrl: string;
  caption: string;
  likes: number;
  commentsCount: number;
}

export interface Live {
  id: string;
  user: User;
  imageUrl: string;
  viewers: number;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  originalPrice?: number;
  shipping?: string;
}

export interface Conversation {
    id: string;
    user: User;
    lastMessage: string;
    timestamp: string;
    unread: boolean;
}

export interface Message {
    id: string;
    text: string;
    sender: 'me' | string; // 'me' or a user ID
    timestamp: string;
}

export interface Moment {
    id: string;
    user: User;
    primaryImageUrl: string;
    secondaryImageUrl: string;
    caption: string;
    timestamp: string;
}

export interface MatchProfile {
    id: string;
    user: User;
    images: string[];
    age: number;
    bio: string;
}
