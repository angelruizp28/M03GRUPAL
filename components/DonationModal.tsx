
import React, { useState } from 'react';
import type { User } from '../types';
import { GiftIcon } from './icons';

interface DonationModalProps {
    recipient: User;
    onClose: () => void;
}

const DonationModal: React.FC<DonationModalProps> = ({ recipient, onClose }) => {
    const [amount, setAmount] = useState<number | string>(5);
    const presetAmounts = [1, 5, 10, 20];

    const handleSendDonation = () => {
        alert(`You have successfully sent €${amount} to ${recipient.username}!`);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-gray-900 rounded-2xl w-full max-w-sm m-4 p-6 shadow-2xl flex flex-col relative">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Send a Gift</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">&times;</button>
                </div>
                
                <div className="flex flex-col items-center my-4">
                    <img src={recipient.avatarUrl} alt={recipient.username} className="w-20 h-20 rounded-full object-cover mb-2" />
                    <p className="font-semibold text-white">To: {recipient.username}</p>
                </div>

                <div className="mb-4">
                    <p className="text-sm font-medium text-gray-400 mb-2">Select amount</p>
                    <div className="grid grid-cols-4 gap-2">
                        {presetAmounts.map(preset => (
                            <button
                                key={preset}
                                onClick={() => setAmount(preset)}
                                className={`py-2 rounded-lg font-semibold transition-colors ${amount === preset ? 'bg-purple-600 text-white' : 'bg-gray-800 hover:bg-gray-700'}`}
                            >
                                €{preset}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <label htmlFor="customAmount" className="text-sm font-medium text-gray-400">Or enter a custom amount</label>
                    <div className="relative mt-1">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">€</span>
                        <input
                            id="customAmount"
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2 pl-7 text-sm placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500"
                        />
                    </div>
                </div>

                <button
                    onClick={handleSendDonation}
                    disabled={!amount || Number(amount) <= 0}
                    className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-4 rounded-lg mt-6 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed"
                >
                    <GiftIcon className="w-5 h-5" />
                    Send Donation
                </button>
            </div>
        </div>
    );
};

export default DonationModal;
