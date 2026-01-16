import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Newspaper, Calendar, ArrowRight, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const newsArticles = [
  {
    id: 1,
    title: 'Dubai Tourism Reaches Record Heights in 2024',
    excerpt: 'Dubai welcomes over 17 million visitors in 2024, marking a significant milestone in the city\'s tourism sector with luxury vacation rentals seeing unprecedented demand.',
    category: 'Market Trends',
    date: '2024-01-10',
    readTime: '5 min read',
    featured: true,
  },
  {
    id: 2,
    title: 'New Regulations for Short-Term Rentals in Dubai',
    excerpt: 'Dubai Tourism announces updated guidelines for vacation rental properties, focusing on quality standards and guest experience enhancement.',
    category: 'Regulations',
    date: '2024-01-08',
    readTime: '4 min read',
    featured: false,
  },
  {
    id: 3,
    title: 'Palm Jumeirah Property Values Surge 15%',
    excerpt: 'Luxury properties on Palm Jumeirah see significant appreciation as demand for beachfront vacation rentals continues to grow.',
    category: 'Real Estate',
    date: '2024-01-05',
    readTime: '6 min read',
    featured: true,
  },
  {
    id: 4,
    title: 'Sustainable Tourism Initiatives in Dubai',
    excerpt: 'Dubai launches new eco-friendly programs for vacation rentals, encouraging property owners to adopt sustainable practices.',
    category: 'Sustainability',
    date: '2024-01-03',
    readTime: '5 min read',
    featured: false,
  },
  {
    id: 5,
    title: 'Smart Home Technology Trends in Luxury Rentals',
    excerpt: 'The latest smart home innovations are transforming guest experiences in Dubai\'s premium vacation properties.',
    category: 'Technology',
    date: '2023-12-28',
    readTime: '4 min read',
    featured: false,
  },
  {
    id: 6,
    title: 'Dubai Marina Development Projects 2024',
    excerpt: 'New luxury developments in Dubai Marina promise to add premium vacation rental inventory to the market.',
    category: 'Development',
    date: '2023-12-25',
    readTime: '7 min read',
    featured: false,
  },
]

export default function NewsPage() {
  const featuredArticles = newsArticles.filter(article => article.featured)
  const regularArticles = newsArticles.filter(article => !article.featured)

  return (
    <main className="min-h-screen bg-white">
      <Header variant="solid" />

      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime/20 border border-lime/30 rounded-full mb-6">
              <Newspaper className="h-4 w-4 text-lime-dark" />
              <span className="text-sm font-medium text-lime-dark">Latest News</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              News & Insights
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest trends, regulations, and developments in Dubai&apos;s luxury vacation rental market
            </p>
          </div>

          {/* Featured Articles */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Featured Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <div key={article.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="relative h-64 bg-gradient-to-br from-lime/20 to-gray-100 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Newspaper className="h-20 w-20 text-lime/40" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-lime text-black text-xs font-medium rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-lime-dark transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {article.excerpt}
                    </p>

                    <button className="inline-flex items-center gap-2 text-lime-dark font-medium hover:gap-3 transition-all">
                      Read More <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Regular Articles */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Recent Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularArticles.map((article) => (
                <div key={article.id} className="bg-white rounded-2xl border border-gray-200 p-6 group hover:shadow-lg transition-all duration-300">
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-lime-dark transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    </div>
                    <button className="text-sm text-lime-dark font-medium hover:underline">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gradient-to-br from-lime/10 to-lime/5 rounded-2xl border border-lime/30 p-8 md:p-12">
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime/20 border border-lime/30 rounded-full mb-6">
                <TrendingUp className="h-4 w-4 text-lime-dark" />
                <span className="text-sm font-medium text-lime-dark">Stay Informed</span>
              </div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-gray-600 mb-6">
                Get the latest news, market insights, and exclusive updates delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-lime focus:border-transparent"
                />
                <button className="px-6 py-3 bg-lime text-black font-semibold rounded-full hover:bg-lime-light transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
