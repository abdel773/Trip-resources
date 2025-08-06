# 🧪 Guide de Test - Trip Resources

Ce guide vous aide à tester toutes les fonctionnalités du projet Trip Resources.

## 🚀 Démarrage Rapide

1. **Installer les dépendances**
   ```bash
   npm install
   ```

2. **Démarrer le serveur de développement**
   ```bash
   npm run dev
   ```

3. **Ouvrir le navigateur**
   ```
   http://localhost:3000
   ```

## 📋 Checklist de Test

### ✅ Page d'Accueil
- [ ] La page se charge correctement
- [ ] Toutes les ressources sont affichées
- [ ] Les cartes sont cliquables
- [ ] Le design est responsive
- [ ] Les prix sont formatés correctement

### ✅ Pages de Détail des Ressources
- [ ] Navigation vers `/resources/[slug]` fonctionne
- [ ] Toutes les informations de la ressource sont affichées
- [ ] Les dates sont formatées en français
- [ ] Les sections "Inclus" et "Non inclus" sont présentes
- [ ] Le bouton "Réserver maintenant" est visible

### ✅ Barre de Partage
- [ ] Les boutons de partage sont présents
- [ ] Twitter/X fonctionne
- [ ] Facebook fonctionne
- [ ] LinkedIn fonctionne
- [ ] WhatsApp fonctionne
- [ ] Le bouton "Copier le lien" fonctionne
- [ ] La notification "Lien copié" s'affiche

### ✅ Images Open Graph
- [ ] L'API `/api/og` répond
- [ ] Les images sont générées avec les bons paramètres
- [ ] Les images font 1200x630 pixels
- [ ] Le design est cohérent
- [ ] Les textes sont lisibles

### ✅ Métadonnées
- [ ] Les balises Open Graph sont présentes
- [ ] Les Twitter Cards sont configurées
- [ ] Les URLs canoniques sont correctes
- [ ] Les descriptions sont appropriées

## 🛠️ Outils de Test

### Test des Images Open Graph

1. **Test Direct**
   ```
   http://localhost:3000/api/og?title=Test&description=Description&price=999&currency=EUR&startCity=Paris&arrivalCity=Lyon
   ```

2. **Page de Test**
   ```
   http://localhost:3000/test-og.html
   ```

### Validation sur les Réseaux Sociaux

1. **Twitter Card Validator**
   - URL : https://cards-dev.twitter.com/validator
   - Collez l'URL d'une ressource
   - Vérifiez l'aperçu

2. **Facebook Sharing Debugger**
   - URL : https://developers.facebook.com/tools/debug/
   - Collez l'URL d'une ressource
   - Vérifiez l'aperçu

3. **LinkedIn Post Inspector**
   - URL : https://www.linkedin.com/post-inspector/
   - Collez l'URL d'une ressource
   - Vérifiez l'aperçu

## 🔗 URLs de Test

### Ressources Disponibles
- **Paris Romantique** : `http://localhost:3000/resources/paris-romantic-weekend`
- **Japon Cerisiers** : `http://localhost:3000/resources/japan-cherry-blossom-tour`
- **Islande Aurores** : `http://localhost:3000/resources/iceland-northern-lights`

### Images Open Graph
- **Test Simple** : `http://localhost:3000/api/og?title=Test&description=Description`
- **Avec Prix** : `http://localhost:3000/api/og?title=Test&description=Description&price=1500&currency=EUR`
- **Avec Villes** : `http://localhost:3000/api/og?title=Test&description=Description&startCity=Paris&arrivalCity=Lyon`

## 🐛 Dépannage

### Problèmes Courants

1. **Images Open Graph ne se chargent pas**
   - Vérifiez que le serveur fonctionne
   - Vérifiez les paramètres de l'URL
   - Consultez les logs du serveur

2. **Partage social ne fonctionne pas**
   - Vérifiez que les URLs sont correctes
   - Testez avec des URLs publiques
   - Vérifiez les paramètres de partage

3. **Design responsive**
   - Testez sur différentes tailles d'écran
   - Vérifiez les breakpoints Tailwind
   - Testez sur mobile

### Logs de Développement

Pour voir les logs détaillés :
```bash
npm run dev
```

Puis ouvrez les outils de développement du navigateur (F12) pour voir les erreurs console.

## 📱 Test Mobile

1. **Ouvrez les outils de développement**
2. **Activez le mode responsive**
3. **Testez différentes tailles d'écran**
4. **Vérifiez la navigation tactile**

## 🌐 Test de Performance

1. **Lighthouse Audit**
   - Ouvrez Chrome DevTools
   - Allez dans l'onglet "Lighthouse"
   - Lancez un audit complet

2. **Vérifiez les métriques**
   - First Contentful Paint
   - Largest Contentful Paint
   - Cumulative Layout Shift

## ✅ Critères de Validation

### Fonctionnalités Obligatoires
- [ ] Next.js 15.1.0 avec TypeScript
- [ ] App Router configuré
- [ ] Pages de ressources fonctionnelles
- [ ] Barre de partage complète
- [ ] Images Open Graph 1200x630
- [ ] Métadonnées Open Graph et Twitter
- [ ] Design responsive

### Fonctionnalités Bonus
- [ ] Interface moderne et attrayante
- [ ] Animations fluides
- [ ] Code bien structuré
- [ ] Documentation complète
- [ ] Prêt pour le déploiement

## 🚀 Déploiement

Une fois tous les tests validés :

1. **Préparez pour Vercel**
   ```bash
   npm run build
   ```

2. **Déployez**
   - Connectez votre repo à Vercel
   - Configurez les variables d'environnement
   - Déployez automatiquement

3. **Testez en production**
   - Validez les images Open Graph
   - Testez le partage social
   - Vérifiez les performances

---

**Note** : Ce guide doit être suivi pour s'assurer que toutes les spécifications du projet sont respectées. 