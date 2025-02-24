# Simple CRUD API

This is a simple CRUD (Create, Read, Update, Delete) API built with Node.js, Express, and MongoDB.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Ofor-David/Express-CRUDAPI.git
    ```
2. Navigate to the project directory:
    ```bash
    cd express-crudapi
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

### Configuration

1. Create a `.env` file in the root directory of the project.
2. Copy the contents of `.env.example` into the `.env` file.
3. Replace `your-mongodb-connection-string` with your actual MongoDB connection string.

### Running the Application

To start the application in development mode, run:
```bash
npm run dev
```

To start the application in production mode, run:
```bash
npm start
```

The API will be running at `http://localhost:<port specified in your .env>`.

## API Endpoints

### Create
- **POST** `/api/products`
    To create a product, you need to specify a body with the appropriate parameters:
    ```json
    {
        "name": "Product Name",
        "price": 100,
        "quantity": 20,
        "imageUrl": "url of image",
        "description": "optional Product Description",
    }
    ```

### Read
- **GET** `/api/products`
    - Get all products.
- **GET** `/api/products/:id`
    - Get a product by ID.

### Update
- **PUT** `/api/products/:id`
    - To update a product by ID, you need to specify a body with the appropriate parameters wished to updated:
    ```json
    {
        "name": "Product Name",
        "price": 100,
        "quantity": 20,
        "imageUrl": "url of image",
        "description": "optional Product Description",
    }
    ```

### Delete
- **DELETE** `/api/products/:id`
    - Delete a product by ID.

## License

This project is licensed under the MIT License.
