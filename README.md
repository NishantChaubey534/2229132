# Social Media Analytics Frontend Web Application

## Overview
This is a React-based Social Media Analytics application that displays:
- **Top Users:** Users with the most posts.
- **Trending Posts:** Posts with the highest number of comments.
- **Real-Time Feed:** The newest posts appear first.

## Features
- **Responsive Design:** Works on both web and mobile.
- **Optimized API Calls:** Minimizes requests for better performance.
- **Dynamic Sorting:** Updates the order of users and posts based on real-time data.

## Tech Stack
- **Frontend:** React.js, Tailwind CSS
- **Routing:** React Router
- **State Management:** useState, useEffect
- **API Handling:** Axios

## Installation

### Prerequisites
Ensure you have Node.js and npm installed.

### Steps to Run Locally
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/social-media-analytics.git
   cd social-media-analytics
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open `http://localhost:3000` in your browser.

## Folder Structure
```
/social-media-analytics
│── src
│   ├── components
│   │   ├── Navbar.jsx
│   ├── pages
│   │   ├── Feed.jsx
│   │   ├── TopUsers.jsx
│   │   ├── TrendingPosts.jsx
│   ├── api.js
│   ├── App.jsx
│   ├── main.jsx
│── public
│── package.json
│── tailwind.config.js
```

## API Endpoints Used
- **Fetch Users:** `GET /users`
- **Fetch User Posts:** `GET /users/:userId/posts`
- **Fetch Comments:** `GET /posts/:postId/comments`

## Screenshots
### Web View
(Add screenshots of the web interface here)

### Mobile View
(Add screenshots of the mobile interface here)

## Contributing
Feel free to fork this project and submit pull requests with improvements!

## License
This project is licensed under the MIT License.

