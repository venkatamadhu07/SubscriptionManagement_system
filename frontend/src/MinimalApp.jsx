import React from 'react'

const MinimalApp = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: 'blue', marginBottom: '20px' }}>Subscription Management System</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <h2>Welcome to the Subscription Management System</h2>
        <p>This is a minimal version to test if React is working.</p>
      </div>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button 
          style={{ 
            padding: '10px 20px', 
            backgroundColor: 'blue', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px',
            cursor: 'pointer'
          }}
          onClick={() => alert('Login clicked!')}
        >
          Login
        </button>
        <button 
          style={{ 
            padding: '10px 20px', 
            backgroundColor: 'green', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px',
            cursor: 'pointer'
          }}
          onClick={() => alert('Register clicked!')}
        >
          Register
        </button>
      </div>

      <div style={{ 
        backgroundColor: '#f0f0f0', 
        padding: '20px', 
        borderRadius: '5px',
        marginBottom: '20px'
      }}>
        <h3>Features:</h3>
        <ul>
          <li>User Authentication</li>
          <li>Subscription Management</li>
          <li>Admin Dashboard</li>
          <li>AI Recommendations</li>
        </ul>
      </div>

      <div style={{ 
        backgroundColor: '#e8f4fd', 
        padding: '15px', 
        borderRadius: '5px',
        border: '1px solid #bee5eb'
      }}>
        <p><strong>Status:</strong> React is working correctly!</p>
        <p><strong>Next Step:</strong> If you can see this page, we can restore the full application.</p>
      </div>
    </div>
  )
}

export default MinimalApp
