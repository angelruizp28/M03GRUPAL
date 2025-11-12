import type { User, Post, Story, Product, Conversation, Live, Message, Moment, MatchProfile } from './types';

// Define the new user
const laFaleteUser: User = { 
  id: 'u10', 
  username: 'soylafalete', 
  avatarUrl: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/10/25/16982485122104.jpg', 
  bio: 'Artista y figura pública. La que vale, vale.' 
};


export const mockUsers: User[] = [
  { id: 'u1', username: 'lucas.v', avatarUrl: 'https://picsum.photos/seed/u1/100/100', bio: 'Digital Creator | Building ALLIN 🚀' },
  { id: 'u2', username: 'lluc.f', avatarUrl: 'https://picsum.photos/seed/u2/100/100', bio: 'Filmmaker and storyteller.' },
  { id: 'u3', username: 'alex.o', avatarUrl: 'https://picsum.photos/seed/u3/100/100', bio: 'Music producer. Sound on 🎧' },
  { id: 'u4', username: 'angel.r', avatarUrl: 'https://picsum.photos/seed/u4/100/100', bio: 'Coffee enthusiast & photographer.' },
  { id: 'u5', username: 'alex.a', avatarUrl: 'https://picsum.photos/seed/u5/100/100', bio: 'Exploring the world one city at a time.' },
  laFaleteUser, // Added the new user here to mix her in with others
  { id: 'u6', username: 'bixiang.z', avatarUrl: 'https://picsum.photos/seed/u6/100/100', bio: 'Tech and gadgets.' },
  { id: 'u7', username: 'synthwave_dreamer', avatarUrl: 'https://picsum.photos/seed/u7/100/100', bio: 'Riding the vaporwave 🌴' },
  { id: 'u8', username: 'sofia.m', avatarUrl: 'https://picsum.photos/seed/u8/100/100', bio: 'Fashion & lifestyle. 💖' },
  { id: 'u9', username: 'ben.c', avatarUrl: 'https://picsum.photos/seed/u9/100/100', bio: 'Fitness coach and nature lover.' },
];

// This will now automatically include a story for 'soylafalete'
export const mockStories: Story[] = mockUsers.map((user, i) => ({ id: `s-${user.id}`, user, imageUrl: `https://picsum.photos/seed/s${i}/600/1067` }));

// Refactored to use find() for robustness and added a post for the new user
export const mockPosts: Post[] = [
  { id: 'p1', user: mockUsers.find(u => u.id === 'u1')!, imageUrl: 'https://picsum.photos/seed/p1/600/800', caption: 'Exploring the city vibes. This place is amazing! #citylife #travel', likes: 1245, commentsCount: 88 },
  { id: 'p2', user: mockUsers.find(u => u.id === 'u2')!, imageUrl: 'https://picsum.photos/seed/p2/600/800', caption: 'Chasing sunsets and dreams. ✨', likes: 3421, commentsCount: 152 },
  { id: 'p6', user: laFaleteUser, imageUrl: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/10/25/16982485122104.jpg', caption: '¡Aquí estoy yo! Fuerte y fabulosa. 💃 #reina #poderosa', likes: 9876, commentsCount: 432 },
  { id: 'p3', user: mockUsers.find(u => u.id === 'u3')!, imageUrl: 'https://picsum.photos/seed/p3/600/800', caption: 'New gear for the studio! Can\'t wait to create something new.', likes: 830, commentsCount: 45 },
  { id: 'p4', user: mockUsers.find(u => u.id === 'u4')!, imageUrl: 'https://picsum.photos/seed/p4/600/800', caption: 'Perfect coffee to start a perfect day. ☕️', likes: 2198, commentsCount: 112 },
  { id: 'p5', user: mockUsers.find(u => u.id === 'u7')!, imageUrl: 'https://picsum.photos/seed/p5/600/800', caption: 'Lost in the neon glow.', likes: 5678, commentsCount: 231 },
];

// Refactored to use find() for robustness
export const mockLives: Live[] = [
    { id: 'l1', user: mockUsers.find(u => u.id === 'u5')!, imageUrl: 'https://picsum.photos/seed/l1/600/1200', viewers: 12500 },
    { id: 'l2', user: mockUsers.find(u => u.id === 'u6')!, imageUrl: 'https://picsum.photos/seed/l2/600/1200', viewers: 8700 },
    { id: 'l3', user: mockUsers.find(u => u.id === 'u7')!, imageUrl: 'https://picsum.photos/seed/l3/600/1200', viewers: 23400 },
];

export const mockProducts: Product[] = [
    { id: 'prod1', name: 'Wireless Bluetooth Earbuds', price: 19.99, originalPrice: 39.99, imageUrl: 'https://picsum.photos/seed/earbuds/400/400', shipping: 'Free Shipping' },
    { id: 'prod2', name: 'Portable Power Bank 10000mAh', price: 24.50, imageUrl: 'https://picsum.photos/seed/powerbank/400/400', shipping: 'Free Shipping' },
    { id: 'prod3', name: 'Smart LED RGB Strip Lights', price: 15.00, originalPrice: 25.00, imageUrl: 'https://picsum.photos/seed/ledstrip/400/400' },
    { id: 'prod4', name: 'Adjustable Phone Stand', price: 9.99, imageUrl: 'https://picsum.photos/seed/phonestand/400/400' },
    { id: 'prod5', name: 'Miniature Drone with Camera', price: 45.99, originalPrice: 69.99, imageUrl: 'https://picsum.photos/seed/drone/400/400', shipping: 'Free Shipping' },
    { id: 'prod6', name: 'Sunrise Simulation Alarm Clock', price: 32.00, imageUrl: 'https://picsum.photos/seed/alarmclock/400/400' },
    { id: 'prod7', name: 'Electric Milk Frother', price: 12.99, imageUrl: 'https://picsum.photos/seed/frother/400/400' },
    { id: 'prod8', name: 'Gaming Mouse with RGB', price: 28.50, originalPrice: 40.00, imageUrl: 'https://picsum.photos/seed/gamingmouse/400/400', shipping: 'Free Shipping' },
];

// Refactored to use find() for robustness
export const mockConversations: Conversation[] = [
    { id: 'c1', user: mockUsers.find(u => u.id === 'u2')!, lastMessage: "Hey, saw your last reel, it was awesome!", timestamp: "15m", unread: true },
    { id: 'c2', user: mockUsers.find(u => u.id === 'u3')!, lastMessage: "Yeah, I'm down for the collab. Let's talk details.", timestamp: "1h", unread: false },
    { id: 'c3', user: mockUsers.find(u => u.id === 'u4')!, lastMessage: "Thanks for the donation! Really appreciate it 🙏", timestamp: "3h", unread: false },
    { id: 'c4', user: mockUsers.find(u => u.id === 'u7')!, lastMessage: "That neon print I bought looks amazing on my wall.", timestamp: "yesterday", unread: false },
];

export const mockMessages: { [conversationId: string]: Message[] } = {
    c1: [
        { id: 'm1', text: 'That was a sick transition!', sender: 'u2', timestamp: '17m' },
        { id: 'm2', text: 'Thanks man! Appreciate it.', sender: 'me', timestamp: '16m' },
        { id: 'm3', text: 'Hey, saw your last reel, it was awesome!', sender: 'u2', timestamp: '15m' },
    ],
    c2: [
        { id: 'm4', text: "Let's link up next week to plan it out.", sender: 'me', timestamp: '1h' },
        { id: 'm5', text: "Yeah, I'm down for the collab. Let's talk details.", sender: 'u3', timestamp: '1h' },
    ],
};

// Refactored to use find() for robustness
export const mockMoments: Moment[] = [
    { id: 'm1', user: mockUsers.find(u => u.id === 'u5')!, primaryImageUrl: 'https://picsum.photos/seed/m1p/600/800', secondaryImageUrl: 'https://picsum.photos/seed/m1s/200/267', caption: 'Late night coding session.', timestamp: '2h ago' },
    { id: 'm2', user: mockUsers.find(u => u.id === 'u8')!, primaryImageUrl: 'https://picsum.photos/seed/m2p/600/800', secondaryImageUrl: 'https://picsum.photos/seed/m2s/200/267', caption: 'Dinner with friends!', timestamp: '5h ago' },
    { id: 'm3', user: mockUsers.find(u => u.id === 'u9')!, primaryImageUrl: 'https://picsum.photos/seed/m3p/600/800', secondaryImageUrl: 'https://picsum.photos/seed/m3s/200/267', caption: 'Just finished my workout 💪', timestamp: 'yesterday' },
];

// Define the new match profile
const laFaleteMatchProfile: MatchProfile = {
    id: 'mp0',
    user: laFaleteUser,
    images: ['https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/10/25/16982485122104.jpg', 'https://picsum.photos/seed/mp0b/600/800'],
    age: 45,
    bio: 'Busco a alguien con chispa. Si me haces reír, tienes medio camino hecho. No me van los dramas.'
};

// Prepend the new profile and refactor/correct existing ones for data consistency
export const mockMatchProfiles: MatchProfile[] = [
    laFaleteMatchProfile,
    { id: 'mp1', user: mockUsers.find(u => u.id === 'u7')!, images: ['https://picsum.photos/seed/mp1a/600/800', 'https://picsum.photos/seed/mp1b/600/800'], age: 24, bio: 'Looking for someone to share playlists and late-night drives with. Lover of art, music, and spontaneous adventures.' },
    { id: 'mp2', user: mockUsers.find(u => u.id === 'u8')!, images: ['https://picsum.photos/seed/mp2a/600/800', 'https://picsum.photos/seed/mp2b/600/800', 'https://picsum.photos/seed/mp2c/600/800'], age: 22, bio: 'Fashion enthusiast and foodie. Let’s find the best brunch spot in the city.  Brunch is on me if you can make me laugh.' },
    { id: 'mp3', user: mockUsers.find(u => u.id === 'u2')!, images: ['https://picsum.photos/seed/mp3a/600/800'], age: 26, bio: 'Filmmaker trying to find a co-star for my life. My hobbies include hiking, photography, and getting lost in new places.'},
];