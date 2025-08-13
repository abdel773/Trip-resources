'use client';

import { useState } from 'react';
import { 
  Twitter, 
  Facebook, 
  Linkedin, 
  MessageCircle, 
  Copy,
  Check
} from 'lucide-react';

interface ShareBarProps {
  url: string;
  title: string;
  description: string;
  startCity?: string;
  arrivalCity?: string;
  startDate?: string;
  endDate?: string;
  price?: number;
  currency?: string;
}

export default function ShareBar({ 
  url, 
  title, 
  description, 
  startCity, 
  arrivalCity, 
  startDate, 
  endDate, 
  price, 
  currency 
}: ShareBarProps) {
  const [copied, setCopied] = useState(false);

  // Formatage des dates pour l'affichage
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('fr-FR', { 
        day: 'numeric', 
        month: 'short', 
        year: 'numeric' 
      });
    } catch {
      return dateString;
    }
  };

  // Création d'une description enrichie pour le partage
  const enrichedDescription = startCity && arrivalCity && startDate && endDate && price && currency
    ? `${title} | Départ: ${startCity} → Arrivée: ${arrivalCity} | ${formatDate(startDate)} - ${formatDate(endDate)} | ${price.toLocaleString()} ${currency}`
    : description;

  const shareData = {
    twitter: {
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(enrichedDescription)}&url=${encodeURIComponent(url)}`,
      icon: Twitter,
      label: 'Partager sur Twitter',
      color: 'hover:bg-blue-500'
    },
    facebook: {
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      icon: Facebook,
      label: 'Partager sur Facebook',
      color: 'hover:bg-blue-600'
    },
    linkedin: {
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      icon: Linkedin,
      label: 'Partager sur LinkedIn',
      color: 'hover:bg-blue-700'
    },
    whatsapp: {
      url: `https://wa.me/?text=${encodeURIComponent(`${enrichedDescription} ${url}`)}`,
      icon: MessageCircle,
      label: 'Partager sur WhatsApp',
      color: 'hover:bg-green-500'
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Erreur lors de la copie:', err);
    }
  };

  const handleShare = (platform: keyof typeof shareData) => {
    const data = shareData[platform];
    window.open(data.url, '_blank', 'width=600,height=400');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Partager cette ressource
      </h3>
      
      <div className="flex flex-wrap gap-3">
        {Object.entries(shareData).map(([platform, data]) => {
          const Icon = data.icon;
          return (
            <button
              key={platform}
              onClick={() => handleShare(platform as keyof typeof shareData)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-white transition-colors duration-200 ${data.color} bg-gray-600`}
              title={data.label}
            >
              <Icon size={18} />
              <span className="hidden sm:inline">{data.label}</span>
            </button>
          );
        })}
        
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-200"
          title="Copier le lien"
        >
          {copied ? <Check size={18} /> : <Copy size={18} />}
          <span className="hidden sm:inline">
            {copied ? 'Lien copié !' : 'Copier le lien'}
          </span>
        </button>
      </div>
      
      {copied && (
        <div className="mt-3 text-sm text-green-600 flex items-center gap-2">
          <Check size={16} />
          Lien copié dans le presse-papiers !
        </div>
      )}
    </div>
  );
} 