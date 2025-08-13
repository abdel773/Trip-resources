'use client';

import { useState, useEffect } from 'react';
import { 
  Twitter, 
  Facebook, 
  Linkedin, 
  MessageCircle, 
  Copy,
  Check,
  Smartphone,
  Monitor
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
  const [isMobile, setIsMobile] = useState(false);

  // Détection mobile/desktop
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
      // URL différente selon mobile/desktop
      url: isMobile 
        ? `whatsapp://send?text=${encodeURIComponent(`${enrichedDescription} ${url}`)}`
        : `https://wa.me/?text=${encodeURIComponent(`${enrichedDescription} ${url}`)}`,
      icon: MessageCircle,
      label: isMobile ? 'Partager sur WhatsApp' : 'Partager sur WhatsApp Web',
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
    
    if (platform === 'whatsapp' && isMobile) {
      // Sur mobile, essayer d'ouvrir l'app WhatsApp
      window.location.href = data.url;
    } else {
      // Sur desktop, ouvrir dans une popup
      window.open(data.url, '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Partager cette ressource
      </h3>
      
      {/* Indicateur mobile/desktop */}
      <div className="mb-4 p-2 bg-gray-50 rounded-lg text-sm text-gray-600 flex items-center gap-2">
        {isMobile ? (
          <>
            <Smartphone size={16} />
            <span>Mode mobile - L'application WhatsApp s'ouvrira directement</span>
          </>
        ) : (
          <>
            <Monitor size={16} />
            <span>Mode desktop - WhatsApp Web s'ouvrira</span>
          </>
        )}
      </div>
      
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
      
      {/* Instructions pour le partage mobile */}
      {!isMobile && (
        <div className="mt-4 p-3 bg-blue-50 rounded-lg text-sm text-blue-700">
          <p className="font-medium mb-1">💡 Pour partager sur votre téléphone :</p>
          <ol className="list-decimal list-inside space-y-1 text-xs">
            <li>Copiez le lien avec le bouton "Copier le lien"</li>
            <li>Ouvrez WhatsApp sur votre téléphone</li>
            <li>Collez le lien dans une conversation</li>
            <li>WhatsApp affichera automatiquement l'aperçu avec toutes les informations</li>
          </ol>
        </div>
      )}
    </div>
  );
} 