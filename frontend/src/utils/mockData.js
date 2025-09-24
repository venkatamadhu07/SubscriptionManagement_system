// Mock data for testing frontend without backend

export const mockSubscriptions = [
  {
    id: 1,
    name: 'Netflix',
    price: 649,
    billingCycle: 'monthly',
    category: 'Entertainment',
    status: 'active',
    nextBilling: '2024-02-15',
    description: 'Video streaming service',
    logo: 'https://via.placeholder.com/40x40/FF0000/FFFFFF?text=N'
  },
  {
    id: 2,
    name: 'Spotify Premium',
    price: 119,
    billingCycle: 'monthly',
    category: 'Music',
    status: 'active',
    nextBilling: '2024-02-20',
    description: 'Music streaming service',
    logo: 'https://via.placeholder.com/40x40/1DB954/FFFFFF?text=S'
  },
  {
    id: 3,
    name: 'Adobe Creative Cloud',
    price: 4199,
    billingCycle: 'monthly',
    category: 'Productivity',
    status: 'active',
    nextBilling: '2024-02-10',
    description: 'Creative software suite',
    logo: 'https://via.placeholder.com/40x40/FF0000/FFFFFF?text=A'
  },
  {
    id: 4,
    name: 'Microsoft 365',
    price: 489,
    billingCycle: 'monthly',
    category: 'Productivity',
    status: 'active',
    nextBilling: '2024-02-25',
    description: 'Office productivity suite',
    logo: 'https://via.placeholder.com/40x40/0078D4/FFFFFF?text=M'
  },
  {
    id: 5,
    name: 'Disney+',
    price: 599,
    billingCycle: 'monthly',
    category: 'Entertainment',
    status: 'paused',
    nextBilling: '2024-03-01',
    description: 'Disney streaming service',
    logo: 'https://via.placeholder.com/40x40/113CCF/FFFFFF?text=D'
  }
]

export const mockPlans = [
  {
    id: 1,
    name: 'Basic Plan',
    price: 799,
    billingCycle: 'monthly',
    features: ['Up to 5 subscriptions', 'Basic analytics', 'Email support'],
    isPopular: false
  },
  {
    id: 2,
    name: 'Pro Plan',
    price: 1599,
    billingCycle: 'monthly',
    features: ['Unlimited subscriptions', 'Advanced analytics', 'AI recommendations', 'Priority support'],
    isPopular: true
  },
  {
    id: 3,
    name: 'Enterprise Plan',
    price: 3999,
    billingCycle: 'monthly',
    features: ['Everything in Pro', 'Team management', 'Custom integrations', '24/7 support'],
    isPopular: false
  }
]

export const mockDiscounts = [
  {
    id: 1,
    name: 'Summer Sale',
    code: 'SUMMER2024',
    discount: 20,
    type: 'percentage',
    validUntil: '2024-12-31',
    description: '20% off all plans'
  },
  {
    id: 2,
    name: 'New User Special',
    code: 'WELCOME50',
    discount: 50,
    type: 'percentage',
    validUntil: '2024-06-30',
    description: '50% off first month'
  }
]

export const mockAnalytics = {
  totalUsers: 1234,
  activeSubscriptions: 5678,
  monthlyRevenue: 3782000,
  averageSpending: 7499,
  topCategories: [
    { name: 'Entertainment', count: 45, percentage: 35 },
    { name: 'Productivity', count: 32, percentage: 25 },
    { name: 'Music', count: 28, percentage: 22 },
    { name: 'Gaming', count: 23, percentage: 18 }
  ],
  monthlyTrend: [
    { month: 'Jan', revenue: 3480000 },
    { month: 'Feb', revenue: 3600000 },
    { month: 'Mar', revenue: 3710000 },
    { month: 'Apr', revenue: 3782000 }
  ]
}

export const mockRecommendations = [
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
]

// Mock API functions
export const mockAPI = {
  // Simulate API delay
  delay: (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms)),

  // Mock subscription API
  getSubscriptions: async () => {
    await mockAPI.delay(800)
    return { success: true, data: mockSubscriptions }
  },

  addSubscription: async (subscription) => {
    await mockAPI.delay(1000)
    const newSub = { ...subscription, id: Date.now() }
    return { success: true, data: newSub }
  },

  updateSubscription: async (id, updates) => {
    await mockAPI.delay(800)
    return { success: true, data: { id, ...updates } }
  },

  deleteSubscription: async (id) => {
    await mockAPI.delay(600)
    return { success: true, message: 'Subscription deleted' }
  },

  // Mock plans API
  getPlans: async () => {
    await mockAPI.delay(500)
    return { success: true, data: mockPlans }
  },

  // Mock analytics API
  getAnalytics: async () => {
    await mockAPI.delay(1000)
    return { success: true, data: mockAnalytics }
  },

  // Mock recommendations API
  getRecommendations: async () => {
    await mockAPI.delay(1200)
    return { success: true, data: mockRecommendations }
  }
}
