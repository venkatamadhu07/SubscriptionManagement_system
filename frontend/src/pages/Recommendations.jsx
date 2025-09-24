import React, { useState, useEffect } from 'react'
import UserPlanCard from '../components/UserPlanCard'

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadRecommendations()
  }, [])

  const loadRecommendations = async () => {
    try {
      setLoading(true)
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setRecommendations([
        {
          id: 1,
          name: 'Spotify Premium',
          price: 119,
          matchPercentage: 95,
          reason: 'Based on your music listening habits',
          category: 'Music',
          logo: 'https://via.placeholder.com/60x60/1DB954/FFFFFF?text=S'
        },
        {
          id: 2,
          name: 'Netflix',
          price: 649,
          matchPercentage: 87,
          reason: 'Your viewing patterns suggest you\'d enjoy Netflix',
          category: 'Entertainment',
          logo: 'https://via.placeholder.com/60x60/FF0000/FFFFFF?text=N'
        },
        {
          id: 3,
          name: 'Adobe Creative Cloud',
          price: 4199,
          matchPercentage: 92,
          reason: 'Based on your creative projects',
          category: 'Productivity',
          logo: 'https://via.placeholder.com/60x60/FF0000/FFFFFF?text=A'
        }
      ])
    } catch (error) {
      console.error('Error loading recommendations:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubscribe = async (subscription) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      alert('Successfully subscribed!')
      // Remove from recommendations
      setRecommendations(recommendations.filter(rec => rec.id !== subscription.id))
    } catch (error) {
      console.error('Error subscribing:', error)
      alert('Failed to subscribe. Please try again.')
    }
  }
  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">AI Recommendations</h1>
          <p className="text-gray-600 mt-2">Personalized subscription recommendations based on your usage patterns</p>
        </div>

        {/* Recommendation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <div className="col-span-full flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <span className="ml-2 text-gray-600">Loading recommendations...</span>
            </div>
          ) : recommendations.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <h4 className="text-lg font-medium text-gray-900 mb-2">No recommendations available</h4>
              <p className="text-gray-600">We need more data about your preferences to provide personalized recommendations.</p>
            </div>
          ) : (
            recommendations.map((recommendation) => (
              <UserPlanCard
                key={recommendation.id}
                subscription={recommendation}
                variant="recommendation"
                onSubscribe={handleSubscribe}
                showActions={true}
              />
            ))
          )}
        </div>

        {/* Savings Opportunities */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Savings Opportunities</h2>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-center">
                  <svg className="w-8 h-8 text-yellow-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <div>
                    <h4 className="font-medium text-gray-900">Annual Plan Available</h4>
                    <p className="text-sm text-gray-600">Save 20% by switching to annual billing for Spotify Premium</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-green-600">Save ₹1,999/year</p>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Switch Now</button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center">
                  <svg className="w-8 h-8 text-blue-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  <div>
                    <h4 className="font-medium text-gray-900">Bundle Discount</h4>
                    <p className="text-sm text-gray-600">Get 15% off when you bundle Netflix with Disney+</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-green-600">Save ₹2,999/year</p>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Insights */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">AI Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Usage Patterns</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Most used service</span>
                  <span className="font-medium text-gray-900">Spotify</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Peak usage time</span>
                  <span className="font-medium text-gray-900">Evening (6-10 PM)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Average session</span>
                  <span className="font-medium text-gray-900">2.5 hours</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Spending Analysis</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Monthly average</span>
                  <span className="font-medium text-gray-900">₹7,499</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">vs. last month</span>
                  <span className="font-medium text-green-600">-12%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Potential savings</span>
                  <span className="font-medium text-blue-600">₹1,290</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recommendations
