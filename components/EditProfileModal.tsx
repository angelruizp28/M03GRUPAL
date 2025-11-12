
import React, { useState } from 'react';
import type { User } from '../types';

interface EditProfileModalProps {
    currentUser: User;
    onSave: (updatedUser: User) => void;
    onClose: () => void;
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({ currentUser, onSave, onClose }) => {
    const [username, setUsername] = useState(currentUser.username);
    const [bio, setBio] = useState(currentUser.bio || '');

    const handleSave = () => {
        onSave({
            ...currentUser,
            username,
            bio,
        });
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-gray-900 rounded-2xl w-full max-w-sm m-4 p-6 shadow-2xl flex flex-col">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold">Edit Profile</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">&times;</button>
                </div>

                <div className="flex flex-col items-center mb-6">
                    <img src={currentUser.avatarUrl} alt="avatar" className="w-24 h-24 rounded-full object-cover mb-2" />
                    <button className="text-sm text-purple-400 hover:text-purple-300 font-semibold">Change Photo</button>
                </div>

                <div className="space-y-4">
                    <div>
                        <label htmlFor="username" className="text-sm font-medium text-gray-400">Username</label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg p-2 text-sm placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="bio" className="text-sm font-medium text-gray-400">Bio</label>
                        <textarea
                            id="bio"
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            rows={3}
                            className="w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg p-2 text-sm placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500"
                        ></textarea>
                    </div>
                </div>

                <div className="flex gap-2 mt-6">
                    <button onClick={onClose} className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                        Cancel
                    </button>
                    <button onClick={handleSave} className="flex-1 bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditProfileModal;
