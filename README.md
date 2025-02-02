# README - Blog Website (MERN Stack)

## Project Overview
This blog website is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and integrates Razorpay for handling payments. Users can browse blogs, subscribe to plans, and access premium content.

## Backend Development
### Tech Stack
- **Node.js**: JavaScript runtime
- **Express.js**: Backend framework
- **MongoDB & Mongoose**: Database & ODM
- **JWT (JSON Web Token)**: Authentication
- **Razorpay**: Payment Gateway

### API Endpoints
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auth/register` | POST | User registration |
| `/api/auth/login` | POST | User login |
| `/api/blogs` | GET | Fetch all blogs |
| `/api/blogs/daily` | GET | Fetch daily blogs |
| `/api/blogs/recent` | GET | Fetch recent blogs |
| `/api/blogs/category/:category` | GET | Fetch blogs by category |
| `/api/blogs/:id` | GET | Fetch single blog |
| `/api/payments/order` | POST | Create Razorpay order |
| `/api/payments/verify` | POST | Verify Razorpay payment |

### Database Structure
#### User Model
- Name
- Email
- Password
- Subscription Plan
- Payment Status

#### Blog Model
- Title
- Content
- Category
- Author
- Created Date

#### Payment Model
- User ID
- Plan ID
- Razorpay Transaction ID
- Status

### Payment Integration
- Create orders using Razorpay API
- Verify payments using webhook responses
- Update user subscription status post-payment verification

## Frontend Development
### Tech Stack
- **React.js**: Frontend framework
- **React Router**: Navigation
- **Axios**: API calls
- **Tailwind CSS**: Styling

### UI Components
- **Homepage**: Displays featured, daily, and recent blogs
- **Blog Page**: Displays individual blog content
- **Subscription Page**: Lists available plans and payment options
- **Dashboard**: Shows user subscriptions and blog access

### Frontend Workflow
- User registers/logs in
- User selects a subscription plan
- Payment is processed via Razorpay
- User gains access to premium blogs based on their plan

## Site Flow
1. **User Registration & Login**
   - Users create an account or log in to access features.
2. **Blog Browsing**
   - Users can browse daily blogs, recent blogs, and category-wise blogs.
3. **Subscription & Payment**
   - Users choose a plan and complete the payment process.
4. **Blog Access**
   - Based on the plan, users get access to a limited number of blogs.
5. **Admin Panel (Future Feature)**
   - Admins can add, edit, or delete blogs.

## Deployment & Maintenance
- **Frontend**: Deployed on Vercel or Netlify
- **Backend**: Hosted on AWS, Heroku, or Render
- **Database**: MongoDB Atlas for scalability
- **Monitoring**: Logging and error tracking

