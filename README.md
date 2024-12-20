# NovaRide

NovaRide is an Uber-like application built using the **MERN stack** (MongoDB, Express, React, Node.js) with **Google Maps** integration. This project provides users with a seamless ride-booking experience, complete with real-time location tracking and navigation.

## Features
- User authentication and profile management.
- Google Maps integration for ride tracking and route navigation.
- Booking and managing rides.
- Real-time updates for ride status.

## Tech Stack
- **Frontend**: React
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Mapping API**: Google Maps API

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Aapush01/NovaRide.git
   cd NovaRide
   ```

2. Install dependencies for both the frontend and backend:
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the `backend` directory and configure your MongoDB URI, JWT secret, and Google Maps API key.
   - Example:
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     GOOGLE_MAPS_API_KEY=your_google_maps_api_key
     ```

4. Start the application:
   ```bash
   # Start backend server
   cd backend
   npm start

   # Start frontend server
   cd ../frontend
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to access the application.

## Project Structure
```
NovaRide/
├── backend/     # Backend code (Node.js + Express)
├── frontend/    # Frontend code (React)
├── README.md    # Project documentation
└── ...          # Other configuration files
```

## Contributing
Contributions are welcome! If you want to contribute:
- Fork the repository
- Create a new branch for your feature or bug fix
- Submit a pull request

## License
This project is licensed under the [MIT License](LICENSE).

## Author
- **MD. Shahid Afridi**  
  - [GitHub](https://github.com/Aapush01)
  - [LinkedIn](https://www.linkedin.com/in/md-shahidafridi/)
  - Email: mdshahidafridia31@gmail.com
