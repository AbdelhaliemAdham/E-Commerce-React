# E-Commerce React App

This is an E-Commerce web application built with React. The application allows users to browse products, view product details, add products to the cart, and proceed to checkout. It also includes authentication, search functionality, and theme switching.

## Features

- **Product Listing**: Browse all available products.
- **Product Details**: View detailed information about a specific product.
- **Add to Cart**: Add products to the shopping cart.
- **Search**: Search for products by title.
- **Authentication**: User login and registration.
- **Protected Routes**: Access control for certain pages.
- **Theme Switching**: Toggle between light and dark modes.
- **Responsive Design**: Mobile-friendly layout.

## Technologies Used

- React
- React Router
- Context API
- Tailwind CSS
- React Helmet
- Motion
- Fake Store API

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/E-Commerce-React.git
   cd E-Commerce-React
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

```
src/
├── components/
│   ├── Banner.jsx
│   ├── Head.jsx
│   ├── HomeView.jsx
│   ├── NavBar.jsx
│   ├── ProductItem.jsx
│   ├── ProductCard.jsx
│   ├── Rating.jsx
│   └── ProtectedRoute.jsx
├── pages/
│   ├── Home.jsx
│   ├── AllProducts.jsx
│   ├── ProductDetails.jsx
│   ├── About.jsx
│   ├── Cart-Page.jsx
│   ├── Login.jsx
│   └── Register.jsx
├── store/
│   ├── CartContext.js
│   ├── ThemeContext.js
│   ├── SearchContext.js
│   └── AuthContext.js
├── Modules/
│   ├── AllProducts.module.css
│   ├── product-item.module.css
│   ├── product-details.module.css
│   ├── home-view.module.css
│   └── head.module.css
├── App.jsx
├── index.jsx
└── index.css
```

## Usage

### Authentication

- **Login**: Navigate to `/login` to log in with your credentials.
- **Register**: Navigate to `/register` to create a new account.

### Browsing Products

- **All Products**: Navigate to `/allProducts` to view all available products.
- **Product Details**: Click on a product to view its details.

### Cart

- **Add to Cart**: Click the "Add to Cart" button on a product to add it to your cart.
- **View Cart**: Navigate to `/cart` to view the items in your cart.

### Search

- Use the search bar in the navigation to search for products by title.

### Theme Switching

- Toggle between light and dark modes using the theme switcher in the navigation.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License.