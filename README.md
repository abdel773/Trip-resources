# Trip Resources - Site de Partage de Ressources de Voyage

Un site web moderne pour lister des ressources de voyage et permettre aux visiteurs de partager facilement les liens sur les réseaux sociaux avec des aperçus riches.

## 🚀 Fonctionnalités

- **Page d'accueil** : Liste toutes les ressources de voyage disponibles
- **Pages de détail** : Affichage complet de chaque ressource avec toutes les informations
- **Partage social** : Boutons de partage pour Twitter, Facebook, LinkedIn, WhatsApp
- **Images Open Graph** : Génération automatique d'images 1200x630 pour les réseaux sociaux
- **Métadonnées complètes** : Open Graph et Twitter Cards pour un partage optimal
- **Design responsive** : Interface moderne et adaptative

## 🛠️ Technologies

- **Next.js 15.1.0** avec App Router
- **TypeScript** pour la sécurité des types
- **Tailwind CSS** pour le styling
- **@vercel/og** pour la génération d'images Open Graph
- **Lucide React** pour les icônes

## 📁 Structure du Projet

```
src/
├── app/
│   ├── api/og/route.tsx          # API pour générer les images OG
│   ├── resources/[slug]/page.tsx  # Page de détail d'une ressource
│   ├── layout.tsx                 # Layout principal avec métadonnées
│   └── page.tsx                   # Page d'accueil
├── components/
│   └── ShareBar.tsx              # Composant de partage social
├── data/
│   └── resources.ts              # Données des ressources
└── types/
    └── resource.ts               # Types TypeScript
```

## 🚀 Installation et Démarrage

1. **Cloner le projet**
   ```bash
   git clone <repository-url>
   cd trip-resources
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

## 📱 Fonctionnalités de Partage

### Réseaux Sociaux Supportés
- **Twitter (X)** : Partage avec texte et URL
- **Facebook** : Partage avec aperçu riche
- **LinkedIn** : Partage professionnel
- **WhatsApp** : Partage direct avec texte

### Images Open Graph
- **Taille** : 1200x630 pixels
- **Format** : PNG généré dynamiquement
- **Contenu** : Titre, description, prix, villes de départ/arrivée
- **Design** : Gradient moderne avec éléments visuels

## 🔧 Configuration

### Variables d'Environnement

Créez un fichier `.env.local` :

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### Déploiement

Le projet est optimisé pour le déploiement sur Vercel :

1. Connectez votre repository GitHub à Vercel
2. Configurez la variable d'environnement `NEXT_PUBLIC_BASE_URL`
3. Déployez automatiquement

## 📊 Métadonnées et SEO

### Open Graph
- `og:title` : Titre de la ressource
- `og:description` : Description courte
- `og:url` : URL canonique
- `og:image` : Image générée dynamiquement
- `og:type` : website
- `og:locale` : fr_FR

### Twitter Cards
- `twitter:card` : summary_large_image
- `twitter:title` : Titre de la ressource
- `twitter:description` : Description courte
- `twitter:image` : Image générée dynamiquement

## 🎨 Design

- **Interface moderne** avec Tailwind CSS
- **Responsive design** pour tous les appareils
- **Animations fluides** et transitions
- **Couleurs cohérentes** et typographie lisible
- **Composants réutilisables** et modulaires

## 📝 Ajout de Nouvelles Ressources

Pour ajouter une nouvelle ressource, modifiez le fichier `src/data/resources.ts` :

```typescript
{
  id: 'unique-id',
  slug: 'url-friendly-slug',
  title: 'Titre de la ressource',
  description: 'Description complète...',
  shortDescription: 'Description courte pour les aperçus',
  price: 999,
  currency: 'EUR',
  startDate: '2024-06-15',
  endDate: '2024-06-17',
  startCity: 'Paris',
  arrivalCity: 'Lyon',
  // ... autres champs
}
```

## 🧪 Tests

Pour tester les images Open Graph :

1. **Twitter Card Validator** : https://cards-dev.twitter.com/validator
2. **Facebook Sharing Debugger** : https://developers.facebook.com/tools/debug/
3. **LinkedIn Post Inspector** : https://www.linkedin.com/post-inspector/

## 📄 Licence

Ce projet est sous licence MIT.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche feature
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## 📞 Support

Pour toute question ou problème, ouvrez une issue sur GitHub.
