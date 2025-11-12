
import React from 'react';

interface SubscriptionModalProps {
    onClose: () => void;
}

const PlanCard: React.FC<{title: string, price: string, features: string[], primary?: boolean}> = ({ title, price, features, primary = false}) => (
    <div className={`border rounded-lg p-4 flex flex-col h-full ${primary ? 'bg-purple-600/20 border-purple-500' : 'bg-gray-800 border-gray-700'}`}>
        <h3 className={`font-bold text-lg ${primary ? 'text-purple-400' : 'text-white'}`}>{title}</h3>
        <p className="text-2xl font-bold my-2">{price}<span className="text-sm font-normal text-gray-400">{price !== 'Gratuito' && '/mes'}</span></p>
        <ul className="text-sm text-gray-300 list-disc list-inside space-y-1 my-4 flex-grow">
            {features.map((feature, i) => <li key={i}>{feature}</li>)}
        </ul>
        <button className={`w-full mt-4 font-semibold py-2 rounded-lg transition-colors text-sm ${primary ? 'bg-purple-600 hover:bg-purple-500 text-white' : 'bg-gray-700 hover:bg-gray-600 text-white'}`}>
            {primary ? 'Current Plan' : 'Choose Plan'}
        </button>
    </div>
);


const SubscriptionModal: React.FC<SubscriptionModalProps> = ({ onClose }) => {
    const plans = [
        { 
            title: 'Plan Básico',
            price: 'Gratuito',
            features: [
                'Acceso a todas las funcionalidades sociales (Reels, Historias, Matches, Chats)',
                '5% de comisión en ventas y donaciones'
            ]
        },
        { 
            title: 'Plan Creador',
            price: '€4,99',
            features: [
                'Comisión reducida al 2% en ventas y donaciones',
                'Estadísticas avanzadas de engagement',
                'Herramientas de promoción de contenido'
            ],
            primary: true,
        },
        { 
            title: 'Plan Empresa',
            price: '€19,99',
            features: [
                'Tienda personalizada con branding',
                '0% de comisión en ventas propias',
                'Acceso a publicidad segmentada y API de integración',
                'Soporte prioritario'
            ]
        }
    ];

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" onClick={onClose}>
            <div className="bg-gray-900 rounded-2xl w-full max-w-4xl m-4 p-6 shadow-2xl flex flex-col" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Manage Subscription</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">&times;</button>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                    {plans.map(plan => <PlanCard key={plan.title} {...plan} />)}
                </div>
            </div>
        </div>
    );
};

export default SubscriptionModal;
