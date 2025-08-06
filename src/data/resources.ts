import { Resource } from '@/types/resource';

export const resources: Resource[] = [
  {
    id: '1',
    slug: 'paris-romantic-weekend',
    title: 'Weekend Romantique à Paris',
    description: 'Découvrez la ville de l\'amour avec ce weekend romantique incluant une croisière sur la Seine, une visite de la Tour Eiffel et un dîner dans un restaurant gastronomique.',
    shortDescription: 'Weekend romantique à Paris avec croisière sur la Seine et dîner gastronomique',
    price: 899,
    currency: 'EUR',
    startDate: '2024-06-15',
    endDate: '2024-06-17',
    startCity: 'Paris',
    arrivalCity: 'Paris',
    image: '/images/paris-romantic.jpg',
    category: 'Romantique',
    duration: '3 jours',
    maxTravelers: 2,
    difficulty: 'easy',
    highlights: [
      'Croisière sur la Seine au coucher du soleil',
      'Visite de la Tour Eiffel avec accès prioritaire',
      'Dîner gastronomique dans un restaurant étoilé',
      'Balade romantique dans le Marais',
      'Visite du Musée du Louvre'
    ],
    included: [
      'Hébergement 4 étoiles en chambre double',
      'Petit-déjeuner inclus',
      'Croisière sur la Seine',
      'Billets d\'entrée pour la Tour Eiffel',
      'Dîner gastronomique',
      'Guide touristique privé'
    ],
    notIncluded: [
      'Transport vers Paris',
      'Dépenses personnelles',
      'Assurance voyage',
      'Pourboires'
    ],
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    slug: 'japan-cherry-blossom-tour',
    title: 'Tour des Cerisiers au Japon',
    description: 'Partez à la découverte du Japon pendant la saison des cerisiers en fleurs. Visitez Tokyo, Kyoto et Osaka avec des guides locaux expérimentés.',
    shortDescription: 'Découvrez le Japon pendant la saison des cerisiers en fleurs',
    price: 2499,
    currency: 'EUR',
    startDate: '2024-04-01',
    endDate: '2024-04-10',
    startCity: 'Tokyo',
    arrivalCity: 'Osaka',
    image: '/images/japan-cherry.jpg',
    category: 'Culturel',
    duration: '10 jours',
    maxTravelers: 12,
    difficulty: 'medium',
    highlights: [
      'Visite des plus beaux spots de cerisiers en fleurs',
      'Séjour dans un ryokan traditionnel',
      'Cérémonie du thé authentique',
      'Visite du Mont Fuji',
      'Découverte de la cuisine japonaise'
    ],
    included: [
      'Hébergement en hôtels 3-4 étoiles',
      'Tous les repas',
      'Transport en train à grande vitesse',
      'Guide francophone',
      'Billets d\'entrée pour les sites',
      'Assurance voyage'
    ],
    notIncluded: [
      'Vol international',
      'Dépenses personnelles',
      'Pourboires',
      'Activités optionnelles'
    ],
    createdAt: '2024-01-10T14:30:00Z',
    updatedAt: '2024-01-10T14:30:00Z'
  },
  {
    id: '3',
    slug: 'iceland-northern-lights',
    title: 'Aurores Boréales en Islande',
    description: 'Chassez les aurores boréales dans les paysages spectaculaires de l\'Islande. Inclut la visite du Cercle d\'Or et des sources thermales.',
    shortDescription: 'Chasse aux aurores boréales dans les paysages islandais',
    price: 1899,
    currency: 'EUR',
    startDate: '2024-12-15',
    endDate: '2024-12-22',
    startCity: 'Reykjavik',
    arrivalCity: 'Reykjavik',
    image: '/images/iceland-aurora.jpg',
    category: 'Aventure',
    duration: '8 jours',
    maxTravelers: 8,
    difficulty: 'medium',
    highlights: [
      'Chasse aux aurores boréales guidée',
      'Visite du Cercle d\'Or',
      'Baignade dans le Blue Lagoon',
      'Exploration des glaciers',
      'Découverte de la géothermie'
    ],
    included: [
      'Hébergement en hôtels confortables',
      'Tous les repas',
      'Transport en minibus',
      'Guide expert en aurores boréales',
      'Équipement de protection contre le froid',
      'Assurance voyage'
    ],
    notIncluded: [
      'Vol international',
      'Activités optionnelles',
      'Dépenses personnelles',
      'Pourboires'
    ],
    createdAt: '2024-01-05T09:15:00Z',
    updatedAt: '2024-01-05T09:15:00Z'
  }
];

export const getResourceBySlug = (slug: string): Resource | undefined => {
  return resources.find(resource => resource.slug === slug);
};

export const getAllResources = (): Resource[] => {
  return resources;
}; 