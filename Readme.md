# Playstream - Backend

A combined backend server for a YouTube + X (Twitter)-like application, where users can upload videos, stream content, and post microblogs (tweets), with support for likes, comments, and follow features.

## 🚀 Features

### 🎥 Video Module (YouTube)
- Upload videos with metadata (title, description, tags)
- Video streaming in multiple resolutions
- Thumbnails and duration auto-generated
- Like, comment, and view tracking
- Video search and recommendations

### 🐦 Post Module (Twitter)
- Create text/image posts (tweets)
- Like, retweet, and comment on posts
- Follow/unfollow users
- User timeline with real-time feed
- Trending hashtags

### 🔐 Authentication & User System
- JWT-based Auth (Login/Signup)
- User profile (bio, avatar, followers)
- Role-based access control (admin/mod/user)

---

## ⚙️ Tech Stack

| Layer         | Technology                      |
|---------------|----------------------------------|
| Server        | Node.js, Express.js             |
| Database      | MongoDB + Mongoose              |
| Video Storage | AWS S3 / Cloudinary (or local)  |
| Auth          | JWT, Bcrypt                     |
| Realtime Feed | WebSockets / Socket.IO (Optional) |
| Video Streaming | FFmpeg + Streams / HLS         |
| Other Tools   | Multer (file upload), dotenv     |

---

## 🛠️ Installation

```bash
git clone https://github.com/Ravindra0999999/Playstream-Backend.git
cd streamx-backend
npm install
npm run dev

## 📂 Project Structure

```
├── controllers/
│   ├── authController.js
│   ├── videoController.js
│   └── postController.js
├── models/
│   ├── User.js
│   ├── Video.js
│   └── Post.js
├── routes/
│   ├── auth.js
│   ├── videos.js
│   └── posts.js
├── middlewares/
│   ├── authMiddleware.js
│   └── errorHandler.js
├── utils/
│   └── videoProcessor.js
├── uploads/
│   └── (for temporary video/image storage)
├── .env
├── server.js
└── README.md
```

---
