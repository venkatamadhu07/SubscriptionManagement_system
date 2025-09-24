# Subscription Management System - Frontend

A modern, responsive React frontend for the Subscription Management System built with React, React Router, and Tailwind CSS.

## Features

### 🏠 **Home Page**
- Attractive landing page with gradient backgrounds
- Welcome message and call-to-action buttons
- Feature showcase with animated cards
- Responsive design for all screen sizes

### 🔐 **Authentication**
- **Login Page**: Email/password authentication with role selection (User/Admin)
- **Register Page**: User registration with form validation
- **AuthContext**: Centralized authentication state management
- **Protected Routes**: Role-based access control

### 👤 **User Dashboard**
- Overview of active subscriptions
- Quick stats and metrics
- Quick action buttons
- Placeholder for subscription management

### 👨‍💼 **Admin Dashboard**
- User and plan management
- Revenue and analytics overview
- Plan and discount management interfaces
- Administrative controls

### 🤖 **AI Recommendations**
- Personalized subscription recommendations
- Savings opportunities
- Usage pattern analysis
- AI-powered insights

### 🎨 **UI/UX Features**
- Modern, clean design with Tailwind CSS
- Responsive navigation with mobile menu
- Smooth animations and transitions
- Professional color scheme and typography
- Hover effects and interactive elements

## Tech Stack

- **React 18** - Modern React with hooks
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **Context API** - State management

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
frontend/
├── public/
├── src/
│   ├── components/
│   │   └── shared/
│   │       ├── Navbar.jsx      # Main navigation component
│   │       └── Sidebar.jsx     # Sidebar navigation
│   ├── context/
│   │   └── AuthContext.jsx     # Authentication context
│   ├── pages/
│   │   ├── Home.jsx            # Landing page
│   │   ├── Login.jsx           # Login page
│   │   ├── Register.jsx        # Registration page
│   │   ├── UserDashboard.jsx   # User dashboard
│   │   ├── AdminDashboard.jsx  # Admin dashboard
│   │   └── Recommendations.jsx # AI recommendations
│   ├── App.jsx                 # Main app component with routing
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles with Tailwind
├── package.json
├── tailwind.config.js
├── vite.config.js
└── postcss.config.js
```

## Authentication

The app includes a complete authentication system with:

- **Role-based access**: Users and Admins have different dashboards
- **Form validation**: Client-side validation for all forms
- **Simulated API calls**: Mock authentication for demo purposes
- **Persistent sessions**: Uses localStorage for session persistence

### Demo Credentials

**User Account:**
- Email: `user@demo.com`
- Password: `password123`

**Admin Account:**
- Email: `admin@demo.com`
- Password: `password123`

## Key Components

### AuthContext
Centralized authentication state management with:
- Login/logout functionality
- User session persistence
- Role-based access control
- Loading states

### Protected Routes
- Automatic redirection for unauthenticated users
- Role-based route protection
- Admin-only routes

### Responsive Design
- Mobile-first approach
- Collapsible navigation on mobile
- Responsive grid layouts
- Touch-friendly interface

## Styling

The app uses Tailwind CSS with:
- Custom utility classes
- Gradient backgrounds
- Smooth animations
- Professional color scheme
- Responsive breakpoints

## Future Enhancements

- Real API integration
- Advanced analytics dashboard
- Subscription management features
- Payment integration
- Real-time notifications
- Dark mode support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is part of the Subscription Management System and is intended for educational and demonstration purposes.
