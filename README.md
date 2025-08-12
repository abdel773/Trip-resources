# Trip Resources - Ressources de Voyage

Une application Next.js moderne pour découvrir et partager des ressources de voyage avec un aperçu optimisé pour les réseaux sociaux.

## 🚀 Fonctionnalités

- **6 ressources de voyage** avec des **images réelles de haute qualité**
- **Aperçu optimisé** pour WhatsApp, Facebook, Twitter et autres réseaux sociaux
- **Images professionnelles** depuis Unsplash pour chaque destination
- **Métadonnées complètes** pour le SEO et le partage social
- **Interface responsive** et moderne
- **Système de partage** intégré

## 🌍 Destinations disponibles

1. **Paris Romantique** - Weekend romantique avec croisière sur la Seine
2. **Japon - Cerisiers** - Tour des cerisiers en fleurs
3. **Islande - Aurores** - Chasse aux aurores boréales
4. **Îles Grecques** - Santorin, Mykonos et Crète
5. **Pérou - Machu Picchu** - Découverte de la culture inca
6. **Nouvelle-Zélande** - Aventure et nature

## 🖼️ Images de haute qualité

Toutes les images sont des **photos réelles professionnelles** provenant d'Unsplash :

- **Paris** : Tour Eiffel au coucher de soleil
- **Japon** : Cerisiers en fleurs avec Mont Fuji
- **Islande** : Aurores boréales sur des glaciers
- **Grèce** : Santorin avec ses toits blancs
- **Pérou** : Machu Picchu dans les montagnes
- **Nouvelle-Zélande** : Fjords et paysages naturels

### Avantages des vraies images :
- ✅ **Qualité professionnelle** - Photos de haute résolution
- ✅ **Authenticité** - Vraies destinations, pas de dessins
- ✅ **Impact visuel** - Attire l'attention des utilisateurs
- ✅ **SEO optimisé** - Meilleur référencement
- ✅ **Partage social** - Aperçus riches sur WhatsApp, Facebook, etc.

## 🛠️ Installation

```bash
# Cloner le projet
git clone <repository-url>
cd trip-resources

# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev
```

## ⚙️ Configuration

### Variables d'environnement

Créez un fichier `.env.local` à la racine du projet :

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

Pour la production, remplacez par votre URL de domaine.

### Configuration des images

Le projet est configuré pour utiliser des images externes depuis Unsplash. La configuration se trouve dans `next.config.ts` :

```typescript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
      port: '',
      pathname: '/**',
    },
  ],
},
```

### Configuration de l'aperçu sur WhatsApp

L'application est configurée pour afficher un aperçu optimal sur WhatsApp et autres réseaux sociaux grâce à :

- **Métadonnées Open Graph** complètes
- **Images réelles** de haute qualité
- **Métadonnées Twitter Card** configurées
- **Favicons** et icônes Apple Touch

## 📱 Aperçu sur les réseaux sociaux

### WhatsApp
- Titre de la ressource
- Description courte
- **Image réelle de la destination**
- Prix et informations clés

### Facebook/Twitter
- Aperçu riche avec **vraie photo**
- Métadonnées complètes
- URL canonique

### LinkedIn
- Métadonnées professionnelles
- **Images optimisées et authentiques**

## 🎨 Personnalisation des images

Les images sont hébergées sur Unsplash et peuvent être facilement modifiées :

1. **Trouvez une nouvelle image** sur [Unsplash](https://unsplash.com)
2. **Copiez l'URL** de l'image
3. **Ajoutez les paramètres** de redimensionnement : `?w=1200&h=800&fit=crop&crop=center`
4. **Mettez à jour** le fichier `src/data/resources.ts`

### Exemple de modification :
```typescript
// Avant
image: 'https://images.unsplash.com/photo-1502602898534-37dd6c393c4d?w=1200&h=800&fit=crop&crop=center'

// Après (nouvelle image)
image: 'https://images.unsplash.com/photo-NOUVELLE_ID?w=1200&h=800&fit=crop&crop=center'
```

## 🔧 Structure du projet

```
trip-resources/
├── src/
│   ├── app/
│   │   ├── api/og/          # API pour les images OG
│   │   ├── resources/[slug]/ # Pages des ressources
│   │   ├── layout.tsx       # Layout principal
│   │   └── page.tsx         # Page d'accueil
│   ├── components/           # Composants réutilisables
│   ├── data/                # Données des ressources
│   └── types/               # Types TypeScript
├── public/
│   └── images/              # Images et assets
├── next.config.ts           # Configuration Next.js
└── package.json
```

## 📊 Métadonnées et SEO

### Métadonnées globales
- Titre et description optimisés
- Mots-clés ciblés
- Auteur et créateur
- Robots et indexation

### Métadonnées par ressource
- Titre et description spécifiques
- **Images Open Graph réelles**
- Mots-clés localisés
- URL canonique

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
npm run build
vercel --prod
```

### Autres plateformes
```bash
npm run build
npm start
```

## 🧪 Tests

```bash
# Tests unitaires
npm run test

# Tests E2E
npm run test:e2e

# Vérification des types
npm run type-check
```

## 📈 Améliorations futures

- [ ] Système de réservation
- [ ] Filtres et recherche
- [ ] Système d'avis
- [ ] Intégration de cartes
- [ ] Mode sombre
- [ ] PWA complète
- [ ] **Galerie d'images multiples** par destination
- [ ] **Vidéos 360°** des destinations

## 🤝 Contribution

1. Fork le projet
2. Créez une branche feature (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Support

Pour toute question ou problème :
- Ouvrez une issue sur GitHub
- Contactez l'équipe de développement

---

**Trip Resources** - Découvrez le monde avec nous ! 🌍✈️📸
