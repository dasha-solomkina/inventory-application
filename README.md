# Inventory Application

This project was created to demonstrate proficiency in building a full-stack inventory management system using Node.js, Express, and PostgreSQL. The primary objective was to apply concepts such as CRUD operations, routing, database management, and deployment while creating a functional and visually appealing inventory management app.

<img src="https://github.com/user-attachments/assets/ccaa303c-4c8a-41d1-9d3d-b86fb58e13a8" alt="image" height="200" />
<img src="https://github.com/user-attachments/assets/c6e17ede-5732-4b3d-b086-3ff2cad115a0" alt="image" height="200"/>

## Key Features
- **Category and item pages**: view and select categories to see a list of items.
- **Category and item management**: create and delete categories and items. When a cateory is deleted all items in this category are deleted automatically. 
- **Database integration**: utilizes PostgreSQL for managing categories and items.
- **Deployment ready**: configured for deployment on Railway with proper routing and database connection.

## How to Run the Project on a Local Machine

### Prerequisites

- Node.js installed on your machine.
- PostgreSQL database server installed and running.
- npm or yarn package manager.

### Steps

1. **Clone the repository**:

```
git@github.com:dasha-solomkina/inventory-application.git
cd inventory-application
```

2. **Install dependencies**:

```
npm install
# or
yarn install
```

3. **Configure environment variables**:
 - Create a `.env` file in the root directory. Add the .env to the `.gitignore` file.
 - Add the following environment variables:  user, host, database, password, port.

4. **Start the development server**:
```
npm run dev
# or
yarn dev
```

5. **Open your browser** and navigate to http://localhost:3000 to see the project in action.

## Live project

You can access the [live project here](https://inventory-application-production-130e.up.railway.app/).
