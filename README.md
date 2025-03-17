# websocket-app

Build a simple basic real-time event dispatching application using Node.js, Express, and WebSockets. The app should allow multiple users to connect and you broadcast connected user identifier in real time.

# Application Setup Guide

# WebSocket Application

This project is a WebSocket-based application that runs on `ws://localhost:8080`. It includes both a backend and a React.js frontend.

Before setting up the project, ensure you have the following installed:

- **Node.js 20 or higher** ([Download Node.js](https://nodejs.org/))
- **Git** ([Download Git](https://git-scm.com/))

## Backend Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/akojamsy/websocket-app (backend)
   cd <websocket-app>
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Run the WebSocket server:**
   ```sh
   npm run dev
   ```
   The WebSocket server will be running on `ws://localhost:8080`.

## Frontend Setup (React.js)

The frontend application connects to the WebSocket server. You can find it on GitHub:
[akojamsy/websocket-frontend](https://github.com/akojamsy/websocket-frontend)

1. **Clone the frontend repository:**

   ```sh
   git clone https://github.com/akojamsy/websocket-frontend.git
   cd websocket-frontend
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Run the frontend application:**
   ```sh
   npm run dev
   ```

## Additional Notes

- Ensure the backend is running before starting the frontend.
- If you encounter any errors, check that all dependencies are installed correctly.
- You may need to update environment variables depending on your setup.

Thanks! 🚀
