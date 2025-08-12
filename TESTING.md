# Guide de Test - Aperçu sur les Réseaux Sociaux

Ce guide vous aide à tester l'aperçu de vos ressources de voyage sur WhatsApp et autres réseaux sociaux.

## 🧪 Tests Locaux

### 1. Démarrer l'application
   ```bash
   npm run dev
   ```

### 2. Tester les pages
- **Page d'accueil** : http://localhost:3000
- **Ressource Paris** : http://localhost:3000/resources/paris-romantic-weekend
- **Ressource Japon** : http://localhost:3000/resources/japan-cherry-blossom-tour
- **Ressource Islande** : http://localhost:3000/resources/iceland-northern-lights
- **Ressource Grèce** : http://localhost:3000/resources/santorini-greek-islands
- **Ressource Pérou** : http://localhost:3000/resources/peru-machu-picchu
- **Ressource NZ** : http://localhost:3000/resources/new-zealand-adventure

## 📱 Test WhatsApp

### Méthode 1 : Partage direct
1. Ouvrez WhatsApp sur votre téléphone
2. Partagez le lien d'une ressource avec vous-même ou un contact
3. Vérifiez que l'aperçu affiche :
   - ✅ Titre de la ressource
   - ✅ Description courte
   - ✅ Image de la destination
   - ✅ URL du site

### Méthode 2 : Test avec WhatsApp Web
1. Ouvrez WhatsApp Web
2. Partagez un lien dans une conversation
3. Vérifiez l'aperçu

### Méthode 3 : Test avec l'API WhatsApp
```bash
# Utilisez l'API WhatsApp Business pour tester
curl -X POST "https://graph.facebook.com/v17.0/YOUR_PHONE_NUMBER_ID/messages" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "messaging_product": "whatsapp",
    "to": "YOUR_PHONE_NUMBER",
    "type": "text",
    "text": {
      "body": "http://localhost:3000/resources/paris-romantic-weekend"
    }
  }'
```

## 🌐 Test Facebook

### Facebook Sharing Debugger
1. Allez sur : https://developers.facebook.com/tools/debug/
2. Entrez l'URL de votre ressource
3. Cliquez sur "Debug"
4. Vérifiez les métadonnées Open Graph

### Test sur Facebook
1. Créez un post sur Facebook
2. Collez l'URL de la ressource
3. Attendez que l'aperçu se charge
4. Vérifiez l'affichage

## 🐦 Test Twitter

### Twitter Card Validator
1. Allez sur : https://cards-dev.twitter.com/validator
2. Entrez l'URL de votre ressource
3. Cliquez sur "Preview card"
4. Vérifiez l'aperçu de la carte

### Test sur Twitter
1. Créez un tweet
2. Collez l'URL de la ressource
3. Vérifiez l'aperçu de la carte

## 💼 Test LinkedIn

### LinkedIn Post Inspector
1. Allez sur : https://www.linkedin.com/post-inspector/
2. Entrez l'URL de votre ressource
3. Vérifiez l'aperçu

### Test sur LinkedIn
1. Créez un post LinkedIn
2. Collez l'URL de la ressource
3. Vérifiez l'aperçu

## 🔍 Test des Métadonnées

### Vérification des balises Open Graph
```html
<!-- Vérifiez que ces balises sont présentes dans le HTML -->
<meta property="og:title" content="Titre de la ressource" />
<meta property="og:description" content="Description de la ressource" />
<meta property="og:image" content="URL de l'image" />
<meta property="og:url" content="URL de la page" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="fr_FR" />
```

### Vérification des Twitter Cards
```html
<!-- Vérifiez que ces balises sont présentes -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Titre de la ressource" />
<meta name="twitter:description" content="Description de la ressource" />
<meta name="twitter:image" content="URL de l'image" />
```

## 🖼️ Test des Images

### Vérification des images SVG
1. Ouvrez les images dans le navigateur
2. Vérifiez qu'elles s'affichent correctement
3. Testez différentes tailles d'écran

### Test de l'API OG
```bash
# Test de l'API de génération d'images
curl "http://localhost:3000/api/og?title=Test&description=Description&price=999&currency=EUR&startCity=Paris&arrivalCity=Lyon"
```

## 📱 Test Mobile

### Test sur différents appareils
- **iPhone** : Safari, Chrome
- **Android** : Chrome, Samsung Internet
- **Tablette** : iPad, Android tablet

### Test de la responsivité
1. Redimensionnez la fenêtre du navigateur
2. Utilisez les outils de développement
3. Testez en mode portrait et paysage

## 🚨 Problèmes Courants

### Aperçu ne s'affiche pas
- Vérifiez que l'URL est accessible publiquement
- Vérifiez les métadonnées dans le code source
- Utilisez les outils de debug des réseaux sociaux

### Image ne s'affiche pas
- Vérifiez que l'URL de l'image est correcte
- Vérifiez que l'image est accessible
- Testez avec une image JPG/PNG si SVG pose problème

### Métadonnées incorrectes
- Vérifiez le fichier `[slug]/page.tsx`
- Vérifiez la fonction `generateMetadata`
- Vérifiez les variables d'environnement

## ✅ Checklist de Test

### Fonctionnalités de base
- [ ] Application se lance sans erreur
- [ ] Page d'accueil affiche 6 ressources
- [ ] Images SVG s'affichent correctement
- [ ] Navigation entre les pages fonctionne

### Métadonnées
- [ ] Balises Open Graph présentes
- [ ] Twitter Cards configurées
- [ ] Images OG correctement référencées
- [ ] URLs canoniques correctes

### Aperçu social
- [ ] WhatsApp affiche l'aperçu
- [ ] Facebook affiche l'aperçu
- [ ] Twitter affiche la carte
- [ ] LinkedIn affiche l'aperçu

### Responsivité
- [ ] Interface s'adapte au mobile
- [ ] Images se redimensionnent
- [ ] Navigation mobile fonctionne

## 🎯 Outils de Test Recommandés

- **WhatsApp** : Application mobile ou WhatsApp Web
- **Facebook** : Facebook Sharing Debugger
- **Twitter** : Twitter Card Validator
- **LinkedIn** : LinkedIn Post Inspector
- **Général** : Open Graph Debugger, Meta Tags Checker

## 📞 Support

Si vous rencontrez des problèmes :
1. Vérifiez les logs de la console
2. Utilisez les outils de debug des réseaux sociaux
3. Vérifiez la configuration des métadonnées
4. Testez avec une URL publique

---

**Note** : Pour un test complet, déployez l'application sur un serveur public, car certains réseaux sociaux ne peuvent pas accéder aux localhost. 