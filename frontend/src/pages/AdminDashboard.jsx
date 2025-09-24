import React, { useState } from 'react'
import AdminCharts from '../components/AdminCharts'

const AdminDashboard = () => {
  const [dark, setDark] = useState(false)

  return (
    <div className={dark ? 'p-6 bg-gray-900 min-h-screen text-gray-100' : 'p-6 bg-gray-50 min-h-screen'}>
      <div className="max-w-7xl mx-auto transition-colors duration-300">
        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold">{dark ? 'Admin Dashboard (Dark)' : 'Admin Dashboard'}</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Manage plans, pricing, and view analytics
            </p>
          </div>
          <button
            onClick={() => setDark(!dark)}
            className="mt-4 md:mt-0 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow transition-colors duration-200"
          >
            Toggle {dark ? 'Light' : 'Dark'} Mode
          </button>
        </div>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Stats Cards */}
          {[
            { label: 'Total Users', value: '1,234', color: 'blue', iconPath: 'M17 20h5v-2a3 3...' },
            { label: 'Active Plans', value: '12', color: 'green', iconPath: 'M9 12l2 2 4-4m6 2...' },
            { label: 'Revenue', value: '₹37,82,000', color: 'purple', iconPath: 'M12 8c-1.657 0-3...' },
            { label: 'Discounts', value: '8', color: 'orange', iconPath: 'M7 7h.01M7 3h5c...' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transform hover:-translate-y-1 hover:shadow-xl transition">
              <div className="flex items-center">
                <div className={`p-3 bg-${stat.color}-100 rounded-lg`}>
                  <svg className={`w-6 h-6 text-${stat.color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.iconPath} />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Management Sections */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Plan Management */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h3 className="text-lg font-semibold">Plan Management</h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">2 Active</span>
            </div>
            <div className="p-6 space-y-4">
              {[
                { name: 'Basic Plan', price: '₹799/month' },
                { name: 'Pro Plan', price: '₹1,599/month' },
              ].map((plan, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div>
                    <h4 className="font-medium">{plan.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{plan.price}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">Edit</button>
                    <button className="text-red-600 dark:text-red-400 hover:underline text-sm font-medium">Delete</button>
                  </div>
                </div>
              ))}
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-200">
                Add New Plan
              </button>
            </div>
          </div>

          {/* Discount Management */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h3 className="text-lg font-semibold">Discount Management</h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">2 Active</span>
            </div>
            <div className="p-6 space-y-4">
              {[
                { name: 'Summer Sale', details: '20% off - Expires Dec 31' },
                { name: 'New User', details: '50% off first month' },
              ].map((disc, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div>
                    <h4 className="font-medium">{disc.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{disc.details}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">Edit</button>
                    <button className="text-red-600 dark:text-red-400 hover:underline text-sm font-medium">Delete</button>
                  </div>
                </div>
              ))}
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors duration-200">
                Create Discount
              </button>
            </div>
          </div>
        </div>

        {/* Extra Panel: Recent Activity */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <ul className="space-y-3">
            {[
              'New user “alex99” subscribed to Pro Plan',
              'Discount “Summer Sale” applied to 3 users',
              'Admin edited Basic Plan price',
            ].map((item, idx) => (
              <li key={idx} className="text-sm text-gray-700 dark:text-gray-300 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Analytics Section */}
        <div className="mt-8">
          <AdminCharts />
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
