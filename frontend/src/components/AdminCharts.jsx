import React from 'react'

const AdminCharts = () => {
  return (
    <div className="space-y-6">
      {/* Revenue Chart */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Overview</h3>
        <div className="h-64 flex items-end justify-between space-x-2">
          {[3480000, 3600000, 3710000, 3782000, 3900000, 4050000].map((value, index) => {
            const height = (value / 4050000) * 100
            return (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div
                  className="w-full bg-gradient-to-t from-green-400 to-green-600 rounded-t-lg"
                  style={{ height: `${height}%` }}
                />
                <span className="text-xs text-gray-500 mt-2">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][index]}
                </span>
              </div>
            )
          })}
        </div>
        <div className="mt-4 text-center">
          <p className="text-2xl font-bold text-gray-900">₹40,50,000</p>
          <p className="text-sm text-gray-500">Current Month Revenue</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Total Users</h4>
          <p className="text-3xl font-bold text-blue-600">1,234</p>
          <p className="text-sm text-gray-500 mt-2">+12% from last month</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Active Subscriptions</h4>
          <p className="text-3xl font-bold text-green-600">5,678</p>
          <p className="text-sm text-gray-500 mt-2">+8% from last month</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Monthly Revenue</h4>
          <p className="text-3xl font-bold text-purple-600">₹37,82,000</p>
          <p className="text-sm text-gray-500 mt-2">+15% from last month</p>
        </div>
      </div>

      {/* Category Distribution */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Category Distribution</h4>
        <div className="space-y-3">
          {[
            { name: 'Entertainment', percentage: 35, color: 'bg-purple-500' },
            { name: 'Productivity', percentage: 25, color: 'bg-blue-500' },
            { name: 'Music', percentage: 22, color: 'bg-green-500' },
            { name: 'Gaming', percentage: 18, color: 'bg-orange-500' }
          ].map((item, index) => (
            <div key={index}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-700">{item.name}</span>
                <span className="text-sm text-gray-500">{item.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${item.color}`}
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdminCharts