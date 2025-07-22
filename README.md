# BASIQ 360 - Loyalty Program Platform

A comprehensive loyalty program platform featuring an admin dashboard and mobile client application, built with modern web technologies.

## 🚀 Features

### Admin Dashboard
- **Influencer Management**: Complete user management with KYC verification
- **QR Code Generation**: Bulk QR code creation and management
- **Analytics Dashboard**: Real-time charts and performance metrics
- **Redemption Management**: Handle reward redemption requests
- **Points Management**: Configure point values and bonuses
- **Reporting**: Comprehensive analytics and reports

### Mobile Application
- **QR Code Scanning**: Camera-based QR code scanning for points
- **Points Management**: View balance, history, and transactions
- **Reward Catalog**: Browse and redeem available rewards
- **Profile Management**: User account and preferences
- **Gamification**: Spin & win, badges, and achievements

### Technical Features
- **Role-Based Access Control**: Admin, Influencer, and Customer roles
- **Real-Time Updates**: Live data synchronization
- **Responsive Design**: Works seamlessly across all devices
- **Secure Authentication**: JWT-based authentication with Supabase
- **Progressive Web App**: Native app-like experience

## 🛠️ Technology Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **React Router** for navigation
- **React Hook Form** with Zod validation
- **Recharts** for data visualization
- **React Query** for state management

### Backend & Database
- **Supabase** (PostgreSQL with real-time subscriptions)
- **Row Level Security** for data protection
- **JWT Authentication** with role-based access

### Development Tools
- **Vite** for fast development and building
- **ESLint** and **TypeScript** for code quality
- **Vitest** for testing

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js 18+ installed
- A Supabase account and project
- Modern web browser with camera support (for QR scanning)

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone <repository-url>
cd basiq360-loyalty-platform
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Setup
```bash
cp src/env.example .env
```

Edit `.env` and add your Supabase credentials:
```env
VITE_SUPABASE_URL=your_supabase_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

### 4. Database Setup

Connect to Supabase and run the database migrations. The platform will automatically create the necessary tables and security policies.

### 5. Run the development server
```bash
npm run dev
```

Visit `http://localhost:5173` to see the application.

## 📱 Usage

### Admin Access
1. Create an admin account during registration
2. Access the admin dashboard at `/admin`
3. Manage influencers, generate QR codes, and view analytics

### Mobile/Customer Access  
1. Register as a customer or influencer
2. Access the mobile interface at `/mobile`
3. Scan QR codes, earn points, and redeem rewards

### Demo Credentials
For testing purposes, you can create accounts with different roles:
- Admin: Full platform management access
- Influencer: Enhanced features with KYC requirements
- Customer: Basic loyalty program participation

## 🏗️ Architecture

### Database Schema
- **users**: User profiles with role-based permissions
- **qr_codes**: QR code management and tracking
- **transactions**: Point earning and redemption history
- **redemption_requests**: Reward redemption processing
- **products**: Reward catalog management

### Security Features
- Row Level Security (RLS) on all tables
- JWT-based authentication with automatic token refresh
- Role-based access control throughout the application
- Input validation and sanitization
- Secure API endpoints with rate limiting

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run tests with UI
npm run test:ui
```

## 🏭 Building for Production

```bash
# Build the application
npm run build

# Preview the production build
npm run preview
```

## 📊 Features Overview

### Admin Dashboard Features
- Real-time analytics with interactive charts
- Influencer network management with tier classifications
- Bulk QR code generation with expiry management
- KYC verification workflow
- Redemption request processing
- Comprehensive reporting system

### Mobile App Features
- Intuitive QR code scanning interface
- Points balance and transaction history
- Reward catalog with filtering and search
- Profile management with KYC status
- Gamification elements (badges, spin wheel)
- Push notification support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Contact the development team

## 🔄 Version History

### v1.0.0 (Current)
- Initial release with complete admin dashboard
- Mobile-responsive customer application  
- QR code generation and scanning
- Points management and redemption system
- Role-based authentication and authorization
- Real-time analytics and reporting

---

Built with ❤️ by the BASIQ 360 Team