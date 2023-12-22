# Wearables E-Commerce Platform

## Overview
This project is an e-commerce platform focused on selling a wide range of wearables including clothes and accessories. The application is built using Angular for the frontend and Spring Boot for the backend, leveraging a microservices architecture to ensure scalability and maintainability.

## Features
- **User Management**: Registration, authentication, and user profile management.
- **Product Catalog**: Browse and search through a variety of wearables, filtered by categories, sizes, and colors.
- **Shopping Cart**: Add items to the cart, modify quantities, and proceed to checkout.
- **Order Processing**: Manage orders from placement to delivery with real-time updates on order status.
- **Admin Panel**: Product management and order oversight for administrators.
- **Responsive Design**: A user-friendly interface that adapts to different screen sizes.

## Technology Stack
- **Frontend**: Angular
- **Backend**: Spring Boot (Java)
- **Database**: [To be chosen]
- **Additional Tools**: RxJs, 

## Getting Started

### Requirements
- Node.js and npm
- Java JDK 11 or later
- [Any other prerequisites]

### Setting Up the Development Environment
1. Clone the repository:
   ```
   git clone https://github.com/hw7wh/ecomm-poc.git
   ```
2. Navigate to the project directory:
   ```
   cd ecomm-poc
   ```

### Running the Application

#### Backend
1. Navigate to the backend directory:
   ```
   cd backend
   ```
2. Start the Spring Boot application:
   ```
   ./mvnw spring-boot:run
   ```

#### Frontend
1. Navigate to the frontend directory:
   ```
   cd frontend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the Angular development server:
   ```
   ng serve
   ```
4. Open a browser and navigate to `http://localhost:4200`.

## Architecture

**Microservices Overview** : Our e-commerce platform is designed with a microservices architecture to provide a robust, scalable, and maintainable system. The architecture is composed of several key microservices, each responsible for a distinct part of the platform's functionality. Below is an overview of each microservice and its primary responsibilities:

### User Service

The User Service is the backbone of user management and authentication across the platform. It includes:

- **User Registration**: Secure handling of user sign-ups with data validation and persistence.
- **Authentication**: Management of the login process and secure session management using JWT tokens.
- **Authorization**: Role-based access controls to ensure users have appropriate permissions.
- **User Profile Management**: Features for users to manage their profiles and credentials.
- **Account Recovery**: Robust account recovery mechanisms, including email-based password resets.
- **User Data Persistence**: Reliable storage and retrieval of user data.
- **Security**: High-standard security measures to protect sensitive user data.

### Order Service

The Order Service oversees the order lifecycle, from the shopping cart to final delivery:

- **Shopping Cart Management**: Dynamic management of cart items, including add, update, and remove functionalities.
- **Order Placement**: Seamless conversion of carts into orders with validation and data persistence.
- **Payment Integration**: Secure payment processing in coordination with external payment services.
- **Order History**: Access for users to view their order history for better tracking and management.
- **Order Status Tracking**: Real-time updates on order progress, visible to both users and admins.
- **Order Modification**: Flexibility for post-purchase order modifications under specific business rules.
- **Inventory Integration**: Synchronization with Inventory Service to ensure accurate stock levels.
- **Shipping Details**: Comprehensive management of shipping information tied to each order.
- **Order Notifications**: Prompt notifications to users about their order statuses and updates.

### Inventory Service

The Product Service handles the catalog of products available on the platform and ensures that product availability is always accurate and up-to-date

- **Product Catalog Management**: Full lifecycle management of product listings, including CRUD operations.
- **Product Details**: Detailed product information provision, enhancing the shopping experience.
- **Search and Filtering**: Advanced search capabilities allowing users to find products easily.

- **Stock Management**: Monitoring and adjusting stock levels in response to sales and deliveries.
- **Availability Checks**: Guaranteeing product availability during shopping to avoid overselling.
- **Low Stock Alerts**: Notification system for when products reach low stock levels.
- **Inventory Adjustments**: Tools for manual stock adjustments for various operational reasons.


The architecture is designed to prioritize core functionalities essential to an MVP, focusing on user experience and operational efficiency. As we scale, the platform will evolve to include more sophisticated features, based on user feedback and business analytics, to continually enhance our services.


## Folder structure
Below is the Angular folder structure of the project, along with a brief description of each file and directory:

```
frontend/ 
│
|── src/
│   |── app/
│   │   |── core/    # Core module for singleton services and components that should │   |   |              be instantiated once and shared across the application, like    
│   │   |   |          authentication services and route guards.
│   │   |   |                                     
│   │   │   |── services/                # Global services
│   │   │   │   |── auth.service.ts      # Authentication service
│   │   │   │   |── api.service.ts       # API service for HTTP requests (user, product ...)
│   │   │   │   └── ...
│   │   │   |── models/                  # Application-wide models  
│   │   │   |── interfaces/                  # Application-wide  interfaces
│   │   │   |── guards/                        # Route guards (e.g., for authenticated routes)
│   │   │   └── core.module.ts           # Core module file
│   │   │
│   │   |── shared/                      # Shared module (common components, directives, and pipes)
│   │   │   |── components/              # Common components like buttons, modals, etc.
│   │   │   |── validators/                  # Application-wide validators  
│   │   │   |── constants/                  # Application-wide constants 
│   │   │   |── interceptors/                  # Application-wide interceptor like loading 
│   │   │   |── directives/              # Common directives
│   │   │   |── pipes/                   # Common pipes
│   │   │   └── shared.module.ts         # Shared module file
│   │   │
│   │   |── features/         # Feature modules each feature (home, product, cart, checkout, 
│   │   │   |                   and user) is correctly encapsulated within its own module. This 
│   │   │   |                   modular approach facilitates lazy loading and better separation
│   │   │   |                   of concerns, which is especially useful in a MS architecture. 
│   │   │   |
│   │   │   |── home/                    # Home page module
│   │   │   |── product/                 # Product module (list, details, etc.)
│   │   │   |── cart/                    # Shopping cart module
│   │   │   |── checkout/                # Checkout module
│   │   │   |── user/                    # User module (profile, login, registration)
│   │   │   └── admin/                    # User module (CRUD tables & statistics dashboard )
│   │   │
│   │   |── app-routing.module.ts        # Application main routing module
│   │   └── app.module.ts                # Application main module
│   │
│   |── assets/                          # Static assets (images, fonts, etc.)
│   │
│   |── environments/                    # Environment-specific settings
│   │   |── environment.prod.ts          # Production environment
│   │   └── environment.ts               # Development environment
│   │
│   |── styles/                          # Global styles
│   │   |── _variables.scss              # Sass variables
│   │   └── styles.scss                  # Main stylesheet
│   │
│   └── index.html                       # Main HTML file
│
|── angular.json                         # Angular CLI configuration
|── tsconfig.json                        # TypeScript configuration
└── package.json                         # NPM package configuration
```

## Contributing
If you would like to contribute to this project, please feel free to submit a pull request.

## License
This project is licensed under the [Your License Choice] - see the [LICENSE.md](LICENSE.md) file for details.