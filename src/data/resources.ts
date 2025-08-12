import { Resource } from '@/types/resource';

export const resources: Resource[] = [
  // {
  //   id: '1',
  //   slug: 'paris-romantic-weekend',
  //   title: 'Weekend Romantique à Paris',
  //   description: 'Découvrez la ville de l\'amour avec ce weekend romantique incluant une croisière sur la Seine, une visite de la Tour Eiffel et un dîner dans un restaurant gastronomique.',
  //   shortDescription: 'Weekend romantique à Paris avec croisière sur la Seine et dîner gastronomique',
  //   price: 899,
  //   currency: 'EUR',
  //   startDate: '2024-06-15',
  //   endDate: '2024-06-17',
  //   startCity: 'Paris',
  //   arrivalCity: 'Paris',
  //   image: 'https://images.unsplash.com/photo-1502602898534-37dd6c393c4d?w=800&h=600&fit=crop',
  //   category: 'Romantique',
  //   duration: '3 jours',
  //   maxTravelers: 2,
  //   difficulty: 'easy',
  //   highlights: [
  //     'Croisière sur la Seine au coucher du soleil',
  //     'Visite de la Tour Eiffel avec accès prioritaire',
  //     'Dîner gastronomique dans un restaurant étoilé',
  //     'Balade romantique dans le Marais',
  //     'Visite du Musée du Louvre'
  //   ],
  //   included: [
  //     'Hébergement 4 étoiles en chambre double',
  //     'Petit-déjeuner inclus',
  //     'Croisière sur la Seine',
  //     'Billets d\'entrée pour la Tour Eiffel',
  //     'Dîner gastronomique',
  //     'Guide touristique privé'
  //   ],
  //   notIncluded: [
  //     'Transport vers Paris',
  //     'Dépenses personnelles',
  //     'Assurance voyage',
  //     'Pourboires'
  //   ],
  //   createdAt: '2024-01-15T10:00:00Z',
  //   updatedAt: '2024-01-15T10:00:00Z'
  // },
  {
    id: '1',
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
    image: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800&h=600&fit=crop',
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
  // {
  //   id: '3',
  //   slug: 'iceland-northern-lights',
  //   title: 'Aurores Boréales en Islande',
  //   description: 'Chassez les aurores boréales dans les paysages spectaculaires de l\'Islande. Inclut la visite du Cercle d\'Or et des sources thermales.',
  //   shortDescription: 'Chasse aux aurores boréales dans les paysages islandais',
  //   price: 1899,
  //   currency: 'EUR',
  //   startDate: '2024-12-15',
  //   endDate: '2024-12-22',
  //   startCity: 'Reykjavik',
  //   arrivalCity: 'Reykjavik',
  //   image: 'https://source.unsplash.com/random',
  //   category: 'Aventure',
  //   duration: '8 jours',
  //   maxTravelers: 8,
  //   difficulty: 'medium',
  //   highlights: [
  //     'Chasse aux aurores boréales guidée',
  //     'Visite du Cercle d\'Or',
  //     'Baignade dans le Blue Lagoon',
  //     'Exploration des glaciers',
  //     'Découverte de la géothermie'
  //   ],
  //   included: [
  //     'Hébergement en hôtels confortables',
  //     'Tous les repas',
  //     'Transport en minibus',
  //     'Guide expert en aurores boréales',
  //     'Équipement de protection contre le froid',
  //     'Assurance voyage'
  //   ],
  //   notIncluded: [
  //     'Vol international',
  //     'Activités optionnelles',
  //     'Dépenses personnelles',
  //     'Pourboires'
  //   ],
  //   createdAt: '2024-01-05T09:15:00Z',
  //   updatedAt: '2024-01-05T09:15:00Z'
  // },
  {
    id: '2',
    slug: 'santorini-greek-islands',
    title: 'Îles Grecques : Santorin',
    description: 'Explorez les plus belles îles grecques avec ce circuit incluant Santorin, Mykonos et la Crète. Profitez des plages paradisiaques et de la culture méditerranéenne.',
    shortDescription: 'Circuit des îles grecques : Santorin, Mykonos et Crète',
    price: 1699,
    currency: 'EUR',
    startDate: '2024-07-20',
    endDate: '2024-07-30',
    startCity: 'Athènes', 
    arrivalCity: 'Athènes',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop',
    category: 'Plage',
    duration: '11 jours',
    maxTravelers: 15,
    difficulty: 'easy',
    highlights: [
      'Coucher de soleil sur les toits blancs de Santorin',
      'Plages de sable fin de Mykonos',
      'Palais de Knossos en Crète',
      'Navigation en catamaran',
      'Dégustation de vins locaux'
    ],
    included: [
      'Hébergement en hôtels 4 étoiles',
      'Petit-déjeuner et dîner',
      'Transport entre les îles en ferry',
      'Guide francophone',
      'Excursions guidées',
      'Transferts aéroport'
    ],
    notIncluded: [
      'Vol international',
      'Déjeuners',
      'Activités optionnelles',
      'Assurance voyage'
    ],
    createdAt: '2024-01-20T11:00:00Z',
    updatedAt: '2024-01-20T11:00:00Z'
  },
  {
    id: '3',
    slug: 'peru-machu-picchu',
    title: 'Pérou : Machu Picchu & Cuzco',
    description: 'Découvrez les merveilles du Pérou avec la visite du Machu Picchu, la ville de Cuzco et la Vallée Sacrée des Incas.',
    shortDescription: 'Découverte du Machu Picchu et de la culture inca',
    price: 2199,
    currency: 'EUR',
    startDate: '2024-09-10',
    endDate: '2024-09-20',
    startCity: 'Lima',
    arrivalCity: 'Lima',
    image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&h=600&fit=crop',
    category: 'Culturel',
    duration: '11 jours',
    maxTravelers: 10,
    difficulty: 'medium',
    highlights: [
      'Visite du Machu Picchu au lever du soleil',
      'Découverte de Cuzco, capitale inca',
      'Vallée Sacrée des Incas',
      'Lac Titicaca et îles flottantes',
      'Dégustation de cuisine péruvienne'
    ],
    included: [
      'Hébergement en hôtels 3-4 étoiles',
      'Tous les repas',
      'Transport en bus touristique',
      'Guide francophone spécialisé',
      'Billets d\'entrée pour tous les sites',
      'Train vers Machu Picchu'
    ],
    notIncluded: [
      'Vol international',
      'Dépenses personnelles',
      'Assurance voyage',
      'Pourboires'
    ],
    createdAt: '2024-01-25T15:30:00Z',
    updatedAt: '2024-01-25T15:30:00Z'
  },
  {
    id: '4',
    slug: 'new-zealand-adventure',
    title: 'Nouvelle-Zélande : Aventure & Nature',
    description: 'Partez à l\'aventure en Nouvelle-Zélande avec des activités outdoor, la découverte des fjords et la culture maorie.',
    shortDescription: 'Aventure et nature en Nouvelle-Zélande',
    price: 3299,
    currency: 'EUR',
    startDate: '2024-11-15',
    endDate: '2024-12-01',
    startCity: 'Auckland',
    arrivalCity: 'Christchurch',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    category: 'Aventure',
    duration: '17 jours',
    maxTravelers: 8,
    difficulty: 'hard',
    highlights: [
      'Randonnée sur les sentiers de randonnée',
      'Croisière dans les fjords de Milford Sound',
      'Découverte de la culture maorie',
      'Sports d\'aventure (rafting, saut à l\'élastique)',
      'Observation des baleines'
    ],
    included: [
      'Hébergement en lodges et hôtels',
      'Tous les repas',
      'Transport en minibus 4x4',
      'Guide expert en activités outdoor',
      'Équipement de randonnée',
      'Assurance voyage complète'
    ],
    notIncluded: [
      'Vol international',
      'Activités optionnelles extrêmes',
      'Dépenses personnelles',
      'Pourboires'
    ],
    createdAt: '2024-01-30T08:45:00Z',
    updatedAt: '2024-01-30T08:45:00Z'
  }
];

export const getResourceBySlug = (slug: string): Resource | undefined => {
  return resources.find(resource => resource.slug === slug);
};

export const getAllResources = (): Resource[] => {
  return resources;
}; 