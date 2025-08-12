import { Metadata } from 'next';
import { getResourceBySlug } from '@/data/resources';
import { Calendar, MapPin, Users, Star, Check, X } from 'lucide-react';
import Image from 'next/image';
import ShareBar from '@/components/ShareBar';

interface ResourcePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ResourcePageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);

  if (!resource) {
    return {
      title: 'Ressource non trouvée',
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const url = `${baseUrl}/resources/${resource.slug}`;
  const imageUrl = resource.image; // URL directe de l'image

  return {
    title: resource.title,
    description: resource.shortDescription,
    keywords: [
      'voyage',
      'tourisme',
      resource.category.toLowerCase(),
      resource.startCity,
      resource.arrivalCity,
      'trip resources',
      'ressources voyage'
    ],
    authors: [{ name: 'Trip Resources' }],
    openGraph: {
      title: resource.title,
      description: resource.shortDescription,
      url: url,
      siteName: 'Trip Resources',
      images: [
        {
          url: imageUrl,
          width: 400,
          height: 300,
          alt: resource.title,
        }, 
      ],
      locale: 'fr_FR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: resource.title,
      description: resource.shortDescription,
      images: [imageUrl],
      creator: '@tripresources',
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function ResourcePage({ params }: ResourcePageProps) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);

  if (!resource) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Ressource non trouvée 
          </h1>
          <p className="text-gray-600"> 
            Aucune ressource trouvée. 
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {resource.title}
              </h1>
              <p className="text-gray-600 mt-1">
                {resource.shortDescription}
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-blue-600">
                {resource.price.toLocaleString()} {resource.currency}
              </div>
              <div className="text-sm text-gray-500">
                par personne
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - Image and Details */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            <div className="mb-8">
              <div className="h-96 bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={resource.image}
                  alt={resource.title}
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Description
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {resource.description}
              </p>
            </div>

            {/* Highlights */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Points forts
              </h2>
              <ul className="space-y-3">
                {resource.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <Star size={20} className="text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What's Included */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Ce qui est inclus
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-medium text-green-700 mb-3 flex items-center">
                    <Check size={20} className="mr-2" />
                    Inclus
                  </h3>
                  <ul className="space-y-2">
                    {resource.included.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-red-700 mb-3 flex items-center">
                    <X size={20} className="mr-2" />
                    Non inclus
                  </h3>
                  <ul className="space-y-2">
                    {resource.notIncluded.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <X size={16} className="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            {/* Quick Info Card */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6 sticky top-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Informations rapides
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <Calendar size={20} className="mr-3 text-blue-500" />
                  <div>
                    <div className="font-medium">Durée</div>
                    <div className="text-sm text-gray-600">{resource.duration}</div>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-700">
                  <MapPin size={20} className="mr-3 text-blue-500" />
                  <div>
                    <div className="font-medium">Départ</div>
                    <div className="text-sm text-gray-600">{resource.startCity}</div>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-700">
                  <MapPin size={20} className="mr-3 text-blue-500" />
                  <div>
                    <div className="font-medium">Arrivée</div>
                    <div className="text-sm text-gray-600">{resource.arrivalCity}</div>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-700">
                  <Users size={20} className="mr-3 text-blue-500" />
                  <div>
                    <div className="font-medium">Voyageurs max</div>
                    <div className="text-sm text-gray-600">{resource.maxTravelers}</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {resource.price.toLocaleString()} {resource.currency}
                </div>
                <div className="text-sm text-gray-500 mb-4">
                  par personne
                </div>
                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Réserver maintenant
                </button>
              </div>
            </div>

            {/* Share Bar */}
            <ShareBar 
              title={resource.title}
              description={resource.shortDescription}
              url={`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/resources/${resource.slug}`}
            />
          </div>
        </div>
      </main>
    </div>
  );
} 