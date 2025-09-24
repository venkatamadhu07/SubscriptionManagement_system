import React, { useState, useEffect } from 'react'
import UserPlanCard from '../components/UserPlanCard'

const UserDashboard = () => {
  const [subscriptions, setSubscriptions] = useState([])
  const [loading, setLoading] = useState(true)
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'list'
  const [showPlanModal, setShowPlanModal] = useState(false)
  const [modalType, setModalType] = useState('') // 'upgrade' or 'downgrade'

  useEffect(() => {
    loadSubscriptions()
  }, [])

  const loadSubscriptions = async () => {
    try {
      setLoading(true)
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubscriptions([
        {
          id: 1,
          name: 'Netflix',
          price: 649,
          billingCycle: 'monthly',
          category: 'Entertainment',
          status: 'active',
          nextBilling: '2024-02-15',
          description: 'Video streaming service'
        },
        {
          id: 2,
          name: 'Spotify Premium',
          price: 119,
          billingCycle: 'monthly',
          category: 'Music',
          status: 'active',
          nextBilling: '2024-02-20',
          description: 'Music streaming service'
        }
      ])
    } catch (error) {
      console.error('Error loading subscriptions:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubscribe = async (subscription) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubscriptions([...subscriptions, { ...subscription, id: Date.now() }])
      alert('Successfully subscribed!')
    } catch (error) {
      console.error('Error subscribing:', error)
      alert('Failed to subscribe. Please try again.')
    }
  }

  const handleUnsubscribe = async (subscription) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 500))
      setSubscriptions(subscriptions.filter(sub => sub.id !== subscription.id))
      alert('Successfully unsubscribed!')
    } catch (error) {
      console.error('Error unsubscribing:', error)
      alert('Failed to unsubscribe. Please try again.')
    }
  }

  const handlePause = async (subscription) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 500))
      setSubscriptions(subscriptions.map(sub => 
        sub.id === subscription.id ? { ...sub, status: 'paused' } : sub
      ))
      alert('Subscription paused!')
    } catch (error) {
      console.error('Error pausing subscription:', error)
      alert('Failed to pause subscription. Please try again.')
    }
  }

  const handleResume = async (subscription) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 500))
      setSubscriptions(subscriptions.map(sub => 
        sub.id === subscription.id ? { ...sub, status: 'active' } : sub
      ))
      alert('Subscription resumed!')
    } catch (error) {
      console.error('Error resuming subscription:', error)
      alert('Failed to resume subscription. Please try again.')
    }
  }

  const openPlanModal = (type) => {
    setModalType(type)
    setShowPlanModal(true)
  }

  const closePlanModal = () => {
    setShowPlanModal(false)
    setModalType('')
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center lg:text-left">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            User Dashboard
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Manage your subscriptions and view recommendations
          </p>
        </div>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quick Stats */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Stat Card */}
            {[
              { color: 'blue', title: 'Active Subscriptions', value: '5', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
              { color: 'green', title: 'Monthly Cost', value: '₹7,499', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1' },
              { color: 'purple', title: 'Savings This Month', value: '₹1,290', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707' },
              { color: 'orange', title: 'Upcoming Renewals', value: '3', icon: 'M12 9v2m0 4h.01m-6.938 4h13.856' }
            ].map(stat => (
              <div key={stat.title} className="bg-white p-6 rounded-xl shadow-md flex items-center">
                <div className={`p-3 bg-${stat.color}-100 rounded-lg`}>
                  <svg className={`w-6 h-6 text-${stat.color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
                Add New Subscription
              </button>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg">
                View Recommendations
              </button>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg">
                Manage Billing
              </button>
              <button className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg">
                Download Report
              </button>
              <button
                onClick={() => openPlanModal('upgrade')}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg"
              >
                Upgrade Plan
              </button>
              <button
                onClick={() => openPlanModal('downgrade')}
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded-lg"
              >
                Downgrade Plan
              </button>
            </div>
          </div>
        </div>

        {/* Subscriptions Section */}
        <div className="mt-10">
          <div className="bg-white rounded-xl shadow-md">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900">My Subscriptions</h3>
              <div className="flex items-center space-x-4">
                <div className="flex bg-gray-100 rounded-lg p-1">
                  {['grid', 'list'].map(mode => (
                    <button
                      key={mode}
                      onClick={() => setViewMode(mode)}
                      className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${
                        viewMode === mode ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {mode.charAt(0).toUpperCase() + mode.slice(1)}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => alert('Add subscription feature coming soon!')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
                >
                  Add Subscription
                </button>
              </div>
            </div>
            <div className="p-6">
              {loading ? (
                <div className="flex items-center justify-center py-12">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                  <span className="ml-2 text-gray-600">Loading subscriptions...</span>
                </div>
              ) : subscriptions.length === 0 ? (
                <div className="text-center py-12">
                  <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">No subscriptions yet</h4>
                  <p className="text-gray-600 mb-4">Start by adding your first subscription to get insights and recommendations.</p>
                  <button
                    onClick={() => alert('Add subscription feature coming soon!')}
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg"
                  >
                    Add Subscription
                  </button>
                </div>
              ) : (
                <div className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                    : 'space-y-4'
                }>
                  {subscriptions.map((subscription) => (
                    <UserPlanCard
                      key={subscription.id}
                      subscription={subscription}
                      variant={viewMode === 'list' ? 'compact' : 'default'}
                      onSubscribe={handleSubscribe}
                      onUnsubscribe={handleUnsubscribe}
                      onPause={handlePause}
                      onResume={handleResume}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ===== Plan Comparison Modal ===== */}
      {showPlanModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full p-8 relative">
            <button
              onClick={closePlanModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
            >
              ✕
            </button>
            <h2 className="text-3xl font-bold mb-6 capitalize text-center">
              {modalType} Plan Options
            </h2>
            <p className="text-gray-600 mb-8 text-center max-w-xl mx-auto">
              Compare the available plans below and choose the one that fits you best.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'Basic', price: 299, features: ['1 Device', 'SD Quality'] },
                { name: 'Standard', price: 649, features: ['2 Devices', 'HD Quality'], highlight: true },
                { name: 'Premium', price: 999, features: ['4 Devices', '4K Quality'] },
              ].map(plan => (
                <div
                  key={plan.name}
                  className={`border rounded-xl p-6 text-center flex flex-col justify-between shadow-sm hover:shadow-lg transition ${
                    plan.highlight ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                  }`}
                >
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                    <p className="text-3xl font-bold text-gray-800 mb-4">₹{plan.price}/month</p>
                    <ul className="text-gray-600 mb-6 space-y-1">
                      {plan.features.map(f => <li key={f}>• {f}</li>)}
                    </ul>
                  </div>
                  <button
                    onClick={() => {
                      alert(`${modalType === 'upgrade' ? 'Upgraded' : 'Downgraded'} to ${plan.name}`)
                      closePlanModal()
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
                  >
                    Select Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserDashboard
