# WhereIsIt - Lost and Found Website

## Purpose

WhereIsIt is a full-stack web application designed to help users report, browse, and recover lost or found items. It connects individuals who have lost personal belongings with those who may have found them, providing a user-friendly platform with secure authentication, responsive design, and robust functionality.

## Live URL

[Visit WhereIsIt Live](https://whereisit-sma.netlify.app/)

## Key Features

- **User Authentication**: Email/password-based login and registration, with Google social login integration using Firebase Authentication.
- **Lost & Found Items**: Users can add, search, update, and delete, and manage lost or found items via private routes.
- **Responsive Design**: Fully responsive UI for mobile, tablet, and desktop, styled with Tailwind CSS for a modern look.
- **Dynamic Home Page**: Includes a banner slider, latest lost/found items section, and two additional sections (e.g., testimonials, statistics) with Framer Motion animations.
- **Search Functionality**: Filter lost/found items by title or location on the All Items page.
- **JWT Authentication**: Secure private routes with JSON Web Tokens for user verification.
- **CRUD Operations**: Add, update, and delete, and mark items as recovered, with toast notifications for all actions.
- **Dynamic Layout**: Toggle between card and table layouts on the All Recovered Items page.
- **Error Handling**: Custom 404 page and loading spinners for data fetching during data loading.
- **404 Page**: Displays user-friendly page for invalid routes.
- **Database Integration**: MongoDB for storing item and recovery data, with secure credentials via environment variables.
- **Private Routes**: Protected pages (e.g., Add Item, Manage My Items, All Recovered Items) accessible only to logged-in users.
- **Dynamic Titles**: Page titles update dynamically based on the current route.
- **Deployment**: Server and client deployed without CORS, 404, or 504 errors, with proper Firebase domain authorization.

## NPM Packages Used

### Client-Side

- `react`: ^18.2.0 - Core library for building UI components.
- `react-router-dom`: ^6.14.0 - For client-side routing.
- `firebase`: ^10.0.0 - For authentication (email/password, Google).
- `axios`: ^1.4.0 - For making HTTP requests to the server.
- `framer-motion`: ^10.12.16 - For animations on the home page.
- `react-datepicker`: ^4.8.0 - For date selection in forms.
- `sweetalert2`: ^11.7.12 - For toast notifications and alerts.
- `tailwindcss`: ^3.3.2 - For responsive styling.
- `react-icons`: ^4.10.1 - For icons in UI components.

### Server-Side

- `express`: ^4.18.2 - For building the REST API.
- `mongoose`: ^7.4.0 - For MongoDB object modeling.
- `jsonwebtoken`: ^9.0.0 - For JWT authentication.
- `cors`: ^2.8.5 - To handle CORS in production.
- `dotenv`: ^16.3.1 - For managing environment variables.

## Setup Instructions

1. **Clone Repositories**:
   - Client: `git clone https://github.com/Programming-Hero-Web-Course4/b11a11-client-side-mdazizulbari`
   - Server: `git clone https://github.com/Programming-Hero-Web-Course4/b11a11-server-side-mdazizulbari`
2. **Install Dependencies**:
   - Run `npm install` in both client and server directories.
3. **Environment Variables**:
   - Create `.env.local` in the client root with Firebase config keys.
   - Create `.env` in the server root with MongoDB URI and JWT secret.
4. **Run Locally**:
   - Client: `npm start` (runs on `http://localhost:3000`).
   - Server: `npm start` (runs on `https://b11a11-server-side-mdazizulbari.vercel.app`).
5. **Deploy**:
   - Client: Deploy to Netlify/Vercel.
   - Server: Deploy to Render/Heroku.
   - Ensure Firebase domain authorization for production.

## Notes

- The project includes at least 15 meaningful client-side commits and 8 server-side commits with descriptive messages.
- All private routes are protected, and reloading does not redirect logged-in users to the login page.
- The website is free of CORS, 404, or 504 errors in production.
