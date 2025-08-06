import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getResourceBySlug } from '@/data/resources';
import ShareBar from '@/components/ShareBar';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Star, 
  Euro, 
  CheckCircle, 
  XCircle,
  ArrowLeft
} from 'lucide-react';
import Link from 'next/link';

interface ResourcePageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ResourcePageProps): Promise<Metadata> {
  const resource = getResourceBySlug(params.slug);
  
  if (!resource) {
    return {
      title: 'Ressource non trouvée',
    };
  }

  const url = `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/resources/${resource.slug}`;
  const imageUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/og?title=${encodeURIComponent(resource.title)}&description=${encodeURIComponent(resource.shortDescription)}&price=${resource.price}&currency=${resource.currency}&startCity=${resource.startCity}&arrivalCity=${resource.arrivalCity}`;

  return {
    title: resource.title,
    description: resource.shortDescription,
    openGraph: {
      title: resource.title,
      description: resource.shortDescription,
      url: url,
      siteName: 'Trip Resources',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
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
    },
    alternates: {
      canonical: url,
    },
  };
}

export default function ResourcePage({ params }: ResourcePageProps) {
  const resource = getResourceBySlug(params.slug);

  if (!resource) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'text-green-600 bg-green-100';
      case 'medium':
        return 'text-yellow-600 bg-yellow-100';
      case 'hard':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'Facile';
      case 'medium':
        return 'Moyen';
      case 'hard':
        return 'Difficile';
      default:
        return 'Non spécifié';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-6">
            <Link 
              href="/"
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Retour aux ressources
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Section */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="h-64 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <MapPin size={64} className="mx-auto mb-4" />
                  <h1 className="text-3xl font-bold mb-2">{resource.title}</h1>
                  <p className="text-lg opacity-90">
                    {resource.startCity} → {resource.arrivalCity}
                  </p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {resource.category}
                  </span>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(resource.difficulty)}`}>
                    <Star size={16} className="mr-1" />
                    {getDifficultyText(resource.difficulty)}
                  </span>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {resource.description}
                </p>

                {/* Key Details */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar size={16} className="mr-2" />
                    <span>{resource.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users size={16} className="mr-2" />
                    <span>Max {resource.maxTravelers}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin size={16} className="mr-2" />
                    <span>{resource.startCity}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin size={16} className="mr-2" />
                    <span>{resource.arrivalCity}</span>
                  </div>
                </div>

                {/* Dates */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Dates du voyage</h3>
                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <span className="text-gray-600">Départ:</span>
                      <span className="ml-2 font-medium">{formatDate(resource.startDate)}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Retour:</span>
                      <span className="ml-2 font-medium">{formatDate(resource.endDate)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Points forts</h2>
              <div className="grid gap-3 md:grid-cols-2">
                {resource.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Included/Not Included */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle size={24} className="text-green-500 mr-2" />
                  Inclus
                </h2>
                <ul className="space-y-2">
                  {resource.included.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <XCircle size={24} className="text-red-500 mr-2" />
                  Non inclus
                </h2>
                <ul className="space-y-2">
                  {resource.notIncluded.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <XCircle size={16} className="text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-center mb-4">
                <div className="flex items-center justify-center mb-2">
                  <Euro size={24} className="text-gray-600 mr-2" />
                  <span className="text-3xl font-bold text-gray-900">
                    {resource.price.toLocaleString()}
                  </span>
                  <span className="text-gray-500 ml-1 text-lg">{resource.currency}</span>
                </div>
                <p className="text-sm text-gray-600">par personne</p>
              </div>
              
              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Réserver maintenant
              </button>
            </div>

            {/* Share Bar */}
            <ShareBar
              url={`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/resources/${resource.slug}`}
              title={resource.title}
              description={resource.shortDescription}
            />
          </div>
        </div>
      </main>
    </div>
  );
} 