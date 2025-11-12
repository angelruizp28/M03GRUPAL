
import React, { useState, useCallback } from 'react';
import { generatePostCaption } from '../services/geminiService';
import { SparklesIcon } from './icons';

interface CreatePostModalProps {
    onClose: () => void;
    onGoLive: () => void;
}

const CreatePostModal: React.FC<CreatePostModalProps> = ({ onClose, onGoLive }) => {
    const [imagePreview, setImagePreview] = useState<string | null>('https://picsum.photos/seed/newpost/500/500');
    const [caption, setCaption] = useState('');
    const [prompt, setPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleGenerateCaption = useCallback(async () => {
        if (!prompt.trim() || isLoading) return;
        setIsLoading(true);
        try {
            const generatedCaption = await generatePostCaption(prompt);
            setCaption(generatedCaption);
        } catch (error) {
            console.error("Failed to generate caption:", error);
            setCaption("Sorry, couldn't generate a caption. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }, [prompt, isLoading]);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-gray-900 rounded-2xl w-full max-w-sm m-4 p-6 shadow-2xl flex flex-col relative pb-16">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Create Post</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white">&times;</button>
                </div>

                <div className="aspect-square bg-gray-800 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    {imagePreview ? (
                        <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                    ) : (
                       <div className="text-center text-gray-500">
                         <p>Select an image</p>
                         <input type="file" accept="image/*" onChange={handleFileChange} className="absolute inset-0 opacity-0 cursor-pointer" />
                       </div>
                    )}
                </div>

                <div className="relative mb-4">
                    <input
                        type="text"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Describe the photo for AI..."
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2 pr-28 text-sm placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500"
                    />
                    <button 
                        onClick={handleGenerateCaption} 
                        disabled={isLoading}
                        className="absolute right-1 top-1 bottom-1 flex items-center bg-purple-600 text-white px-3 rounded-md text-xs font-semibold hover:bg-purple-500 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
                    >
                       {isLoading ? 'Generating...' : <> <SparklesIcon className="w-4 h-4 mr-1"/> Generate </> }
                    </button>
                </div>
                
                <textarea
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    placeholder="Write a caption..."
                    rows={3}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2 text-sm placeholder-gray-500 focus:ring-purple-500 focus:border-purple-500"
                ></textarea>

                <button className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-lg mt-4 transition-colors">
                    Post
                </button>

                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-800/50 backdrop-blur-sm flex justify-center items-center gap-8 rounded-b-2xl border-t border-gray-700">
                    <button className="font-semibold text-white">Post</button>
                    <button onClick={onGoLive} className="font-semibold text-gray-500 hover:text-white">Live</button>
                </div>
            </div>
        </div>
    );
};

export default CreatePostModal;
