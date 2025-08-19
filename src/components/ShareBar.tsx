'use client';

import { useState } from 'react';
import { 
  Twitter, 
  Facebook, 
  Linkedin, 
  MessageCircle, 
  Copy,
  Check,
  Share2,
  X,
  Globe,
  MessageSquare
} from 'lucide-react';
import { Icon } from 'next/dist/lib/metadata/types/metadata-types';

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
  facebookUsername?: string;
  facebookAppId?: string;
  facebookRedirectUri?: string;
}

interface ShareOption {
  id: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  url: string;
  color: string;
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
  currency,
  facebookUsername,
  facebookAppId,
  facebookRedirectUri
}: ShareBarProps) {
  const [copied, setCopied] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<string>('');

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

  // Message de partage personnalisable (sans les détails techniques)
  const shareMessage = `${title} - ${description}`;

  // Options de partage pour chaque plateforme
  const getShareOptions = (platform: string): ShareOption[] => {
    switch (platform) {
      case 'facebook':
        return [
          {
            id: 'facebook-post',
            label: 'Publier sur le mur',
            description: 'Partager publiquement sur votre profil',
            icon: Globe,
            url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
            color: 'bg-blue-600 hover:bg-blue-700'
          },
          {
            id: 'facebook-message',
            label: 'Partager en message privé',
            description: 'Envoyer à un ami en privé',
            url: facebookAppId && facebookRedirectUri
              ? `https://www.facebook.com/dialog/send?app_id=${encodeURIComponent(facebookAppId)}&link=${encodeURIComponent(url)}&redirect_uri=${encodeURIComponent(facebookRedirectUri)}&display=popup`
              : facebookUsername
                ? `https://m.me/${encodeURIComponent(facebookUsername)}?link=${encodeURIComponent(url)}`
                : `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
            icon: MessageSquare,
            color: 'bg-green-600 hover:bg-green-700'
          }
        ];
      
      case 'twitter':
        return [
          {
            id: 'twitter-tweet',
            label: 'Publier un tweet',
            description: 'Partager publiquement sur Twitter',
            icon: Globe,
                         url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessage)}&url=${encodeURIComponent(url)}`,
            color: 'bg-blue-500 hover:bg-blue-600'
          },
          {
            id: 'twitter-dm',
            label: 'Envoyer en message privé',
            description: 'Partager en message direct',
                         url: `https://twitter.com/messages/compose?text=${encodeURIComponent(`${shareMessage} ${url}`)}`,
            icon: MessageSquare,
            color: 'bg-green-500 hover:bg-green-600'
          }
        ];
      
      case 'linkedin':
        return [
          {
            id: 'linkedin-post',
            label: 'Publier un post',
            description: 'Partager publiquement sur LinkedIn',
            icon: Globe,
            url: (() => {
              const source = typeof window !== 'undefined' ? window.location.hostname : '';
              return `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(description)}&source=${encodeURIComponent(source)}`;
            })(),
            color: 'bg-blue-700 hover:bg-blue-800'
          },
          {
            id: 'linkedin-message',
            label: 'Partager en message',
            description: 'Envoyer en message privé LinkedIn',
                         url: `https://www.linkedin.com/messaging/compose?message=${encodeURIComponent(`${shareMessage} ${url}`)}`,
            icon: MessageSquare,
            color: 'bg-green-600 hover:bg-green-700'
          }
        ];
      
      default:
        return [];
    }
  };

  const shareData = {
    whatsapp: {
             url: `https://wa.me/?text=${encodeURIComponent(`${shareMessage} ${url}`)}`,
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

  // Utilisation de l'API Web Share native (plus moderne et efficace)
  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
                 await navigator.share({
           title: title,
           text: shareMessage,
           url: url,
         });
      } catch (err) {
        console.log('Erreur lors du partage natif:', err);
        // Fallback vers la méthode classique
        handleShare('whatsapp');
      }
    } else {
      // Fallback pour les navigateurs qui ne supportent pas l'API Web Share
      handleShare('whatsapp');
    }
  };

  const handleShare = (platform: keyof typeof shareData) => {
    const data = shareData[platform];
    window.open(data.url, '_blank', 'width=600,height=400');
  };

  const handlePlatformClick = (platform: string) => {
    if (platform === 'whatsapp') {
      // WhatsApp n'a qu'une option, on partage directement
             const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${shareMessage} ${url}`)}`;
      window.open(whatsappUrl, '_blank', 'width=600,height=400');
    } else {
      // Restaurer le modal pour LinkedIn, Facebook, Twitter
      setSelectedPlatform(platform);
      setShowShareModal(true);
    }
  };

  const handleShareOption = (option: ShareOption) => {
    window.open(option.url, '_blank', 'width=600,height=400');
    setShowShareModal(false);
    setSelectedPlatform('');
  };

  const closeModal = () => {
    setShowShareModal(false);
    setSelectedPlatform('');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Partager cette ressource
      </h3>
      
      {/* Bouton de partage natif (prioritaire) */}
      <div className="mb-4">
        <button
          onClick={handleNativeShare}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white bg-green-600 hover:bg-green-700 transition-colors duration-200 font-medium"
        >
          <Share2 size={20} />
          <span>Partager</span>
        </button>
        <p className="text-xs text-gray-500 mt-2 text-center">
          Utilise le menu de partage de votre système (WhatsApp, Messages, Email, etc.)
        </p>
      </div>
      
      <div className="flex flex-wrap gap-3">
        {/* Facebook */}
        <button
          onClick={() => handlePlatformClick('facebook')}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-white transition-colors duration-200 hover:bg-blue-600 bg-gray-600"
          title="Partager sur Facebook"
        >
          <Facebook size={18} />
          <span className="hidden sm:inline">Facebook</span>
        </button>

        {/* Twitter */}
        <button
          onClick={() => handlePlatformClick('twitter')}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-white transition-colors duration-200 hover:bg-blue-500 bg-gray-600"
          title="Partager sur Twitter"
        >
          <Twitter size={18} />
          <span className="hidden sm:inline">Twitter</span>
        </button>

        {/* LinkedIn */}
        <button
          onClick={() => handlePlatformClick('linkedin')}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-white transition-colors duration-200 hover:bg-blue-700 bg-gray-600"
          title="Partager sur LinkedIn"
        >
          <Linkedin size={18} />
          <span className="hidden sm:inline">LinkedIn</span>
        </button>

        {/* WhatsApp */}
        <button
          onClick={() => handlePlatformClick('whatsapp')}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-white transition-colors duration-200 hover:bg-green-500 bg-gray-600"
          title="Partager sur WhatsApp"
        >
          <MessageCircle size={18} />
          <span className="hidden sm:inline">WhatsApp</span>
        </button>
        
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
      
      {/* Instructions pour le partage optimal */}
      <div className="mt-4 p-3 bg-blue-50 rounded-lg text-sm text-blue-700">
        <p className="font-medium mb-2">- Conseils de partage :</p>
        <ul className="list-disc list-inside space-y-1 text-xs">
          <li><strong>Copier le lien</strong> : Pour partager manuellement ou par message</li>
        </ul>
      </div>

             {/* Modal de sélection du mode de partage */}
       {showShareModal && selectedPlatform && (
         <div className="fixed inset-0 bg-gray-300 bg-opacity-20 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Choisir le mode de partage
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="space-y-3">
              {getShareOptions(selectedPlatform).map((option) => {
                const Icon = option.icon;
                return (
                  <button
                    key={option.id}
                    onClick={() => handleShareOption(option)}
                    className={`w-full flex items-center gap-3 p-4 rounded-lg text-white transition-colors duration-200 ${option.color}`}
                  >
                    <Icon size={20} />
                    <div className="text-left">
                      <div className="font-medium">{option.label}</div>
                      <div className="text-sm opacity-90">{option.description}</div>
                    </div>
                  </button>
                );
              })}
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <button
                onClick={closeModal}
                className="w-full px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
