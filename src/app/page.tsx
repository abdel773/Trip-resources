import Link from 'next/link';
import { getAllResources } from '@/data/resources';
import { Calendar, MapPin, Users, Star } from 'lucide-react';

export default function HomePage() {
  const resources = getAllResources();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Trip Resources
              </h1>
              <p className="text-gray-600 mt-1">
                Découvrez nos meilleures ressources de voyage
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <Link
              key={resource.id}
              href={`/resources/${resource.slug}`}
              className="group"
            >
              <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <MapPin size={48} className="mx-auto mb-2" />
                    <p className="text-sm font-medium">
                      {resource.startCity} → {resource.arrivalCity}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {resource.category}
                    </span>
                    <div className="flex items-center text-yellow-400">
                      <Star size={16} className="fill-current" />
                      <span className="text-sm text-gray-600 ml-1">
                        {resource.difficulty === 'easy' ? 'Facile' : 
                         resource.difficulty === 'medium' ? 'Moyen' : 'Difficile'}
                      </span>
                    </div>
                  </div>

                  <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {resource.title}
                  </h2>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {resource.shortDescription}
                  </p>

                  {/* Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={16} className="mr-2" />
                      <span>{resource.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users size={16} className="mr-2" />
                      <span>Max {resource.maxTravelers} voyageurs</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">
                        {resource.price.toLocaleString()}
                      </span>
                      <span className="text-gray-500 ml-1">{resource.currency}</span>
                    </div>
                    <span className="text-sm text-blue-600 font-medium">
                      Voir les détails →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
} 