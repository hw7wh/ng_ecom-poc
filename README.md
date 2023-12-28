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
- **Database**: MongoDB Atlas
- **Additional Tools**: RxJs,

## Installation & Usage

### Requirements

- Node.js and npm
- Java JDK 11 or later
- MongoDB Atlas account

### Setting Up the Development Environment

1. Clone the repository:
   ```
   git clone https://github.com/hw7wh/ng_ecom-poc ecomm-poc
   ```
2. Navigate to the project directory:
   ```
   cd frontend
   ```
3. Install dependencies:
   ```
   npm install
   ```

### Running the Application

#### Configuration

1. Create a `.env` file at the project root (refer to `.env.example` as a template).
2. Add the following environment variables:
   ```
   MONGO_URI=your_mongodb_uri
   ```
3. Alternatively, set these variables in `config/settings.py` (not recommended for sensitive data like `MONGO_URI`).

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
2. Start the Angular development server:
   ```
   ng serve
   ```
3. Open a browser and navigate to `http://localhost:4200`.

## Architecture

Our e-commerce platform is designed with a microservices architecture to provide a robust, scalable, and maintainable system. The architecture is composed of several key microservices, each responsible for a distinct part of the platform's functionality. Below is an overview of each microservice and its primary responsibilities:

- **User Service**: Handles user registration, authentication, and basic profile management. This is crucial for personalization and securing the application.
- **Inventory Service**: Manages product listings, including adding, updating, and removing products. It is the core of any e-commerce platform. It also keeps track of inventory levels and updates stock quantities. This service can be simplified in the MVP to just ensure that stock levels are adjusted when orders are placed.
- **Order Service**: Takes care of creating and managing orders, which includes integrating the shopping cart functionality and keeping track of order history.
- **API Gateway**: Serves as the entry point for all client requests, routing them to the appropriate services, and can provide additional functionalities like authentication, SSL termination, and request logging.

The architecture is designed to prioritize core functionalities essential to an MVP, focusing on user experience and operational efficiency. As we scale, the platform will evolve to include more sophisticated features, based on user feedback and business analytics, to continually enhance our services.

## Angular Folder structure

Below is the Angular folder structure of the project, along with a brief description of each file and directory:

```
frontend/
│
|── src/
│   |── app/
│   │   |── core/    # Core module for singleton services and components that should
│   │   |   |          be instantiated once and shared across the application, like
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

This project is licensed under the [MIT License](LICENSE).
