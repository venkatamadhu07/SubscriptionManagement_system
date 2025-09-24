import React from 'react'

const UserPlanCard = ({ 
  subscription = {}, 
  onSubscribe, 
  onUnsubscribe, 
  onPause, 
  onResume,
  // ➕ NEW props
  onUpgrade,
  onDowngrade,
  showActions = true,
  variant = 'default' // 'default', 'recommendation', 'compact'
}) => {
  const {
    id = 0,
    name = 'Unknown',
    price = 0,
    billingCycle = 'monthly',
    category = 'Other',
    status = 'active',
    nextBilling,
    description = '',
    logo,
    matchPercentage,
    reason
  } = subscription

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800'
      case 'paused': return 'bg-yellow-100 text-yellow-800'
      case 'cancelled': return 'bg-red-100 text-red-800'
      case 'expired': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Entertainment': return 'bg-purple-100 text-purple-800'
      case 'Music': return 'bg-green-100 text-green-800'
      case 'Productivity': return 'bg-blue-100 text-blue-800'
      case 'Gaming': return 'bg-orange-100 text-orange-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const formatPrice = (price, cycle) => {
    const symbol = cycle === 'yearly' ? '/year' : '/month'
    return `₹${price}${symbol}`
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  if (variant === 'compact') {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
              {logo ? (
                <img src={logo} alt={name} className="w-8 h-8 rounded" />
              ) : (
                <span className="text-lg font-bold text-gray-600">
                  {name.charAt(0)}
                </span>
              )}
            </div>
            <div>
              <h3 className="font-medium text-gray-900">{name}</h3>
              <p className="text-sm text-gray-500">{category}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-semibold text-gray-900">{formatPrice(price, billingCycle)}</p>
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
              {status}
            </span>
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'recommendation') {
    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        {/* Header with gradient background */}
        <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative">
          <div className="text-center text-white">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2">
              {logo ? (
                <img src={logo} alt={name} className="w-12 h-12 rounded" />
              ) : (
                <span className="text-2xl font-bold">{name.charAt(0)}</span>
              )}
            </div>
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-blue-100 text-sm">{category}</p>
          </div>
          
          {/* Match percentage badge */}
          {matchPercentage && (
            <div className="absolute top-4 right-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-3 py-1">
              <span className="text-white text-sm font-medium">{matchPercentage}% Match</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl font-bold text-gray-900">{formatPrice(price, billingCycle)}</span>
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(category)}`}>
              {category}
            </span>
          </div>

          <p className="text-gray-600 text-sm mb-4">
            {reason || description || 'Recommended based on your usage patterns'}
          </p>

          {showActions && (
            <div className="flex space-x-2">
              <button
                onClick={() => onSubscribe && onSubscribe(subscription)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200"
              >
                Subscribe
              </button>
              <button className="text-gray-600 hover:text-gray-800 py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200">
                Learn More
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }

  // Default variant
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              {logo ? (
                <img src={logo} alt={name} className="w-10 h-10 rounded" />
              ) : (
                <span className="text-xl font-bold text-gray-600">
                  {name.charAt(0)}
                </span>
              )}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
              <p className="text-sm text-gray-500">{description}</p>
            </div>
          </div>
          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
            {status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-sm text-gray-500">Price</p>
            <p className="text-lg font-semibold text-gray-900">{formatPrice(price, billingCycle)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Category</p>
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(category)}`}>
              {category}
            </span>
          </div>
        </div>

        {nextBilling && (
          <div className="mb-4">
            <p className="text-sm text-gray-500">Next Billing</p>
            <p className="text-sm font-medium text-gray-900">{formatDate(nextBilling)}</p>
          </div>
        )}

        {/* Actions */}
        {showActions && (
          <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200">
            {status === 'active' && (
              <>
                <button
                  onClick={() => onPause && onPause(subscription)}
                  className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  Pause
                </button>
                <button
                  onClick={() => onUnsubscribe && onUnsubscribe(subscription)}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  Cancel
                </button>
                {/* ➕ NEW Upgrade / Downgrade buttons */}
                <button
                  onClick={() => onUpgrade && onUpgrade(subscription)}
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  Upgrade
                </button>
                <button
                  onClick={() => onDowngrade && onDowngrade(subscription)}
                  className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  Downgrade
                </button>
              </>
            )}
            {status === 'paused' && (
              <button
                onClick={() => onResume && onResume(subscription)}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200"
              >
                Resume
              </button>
            )}
            {status === 'cancelled' && (
              <button
                onClick={() => onSubscribe && onSubscribe(subscription)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200"
              >
                Reactivate
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default UserPlanCard
