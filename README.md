# KnowledgeNest

## 📌 Overview
**KnowledgeNest** is a student-friendly platform designed to help students who cannot afford tuition or courses. It provides various features to facilitate learning, collaboration, and self-assessment.

## 🚀 Features
- **Peer Chat:** Students can chat with peers to clarify doubts.
- **Notes Section:** Students can upload and download notes based on class or topic.
- **Time Table Schedular:** Helps students schedule their day efficiently.
- **AI Bot:** Helps students clarify their doubts with AI.
- **Meeting Option:** Volunteers can conduct free classes for students.
- **Quiz & Self-Assessments (AI-powered):** Personalized assessments and feedback.

## 🛠️ Tech Stack
### **Frontend:**
- React.js (for UI)
- HTML, CSS, JavaScript

### **Backend:**
- Node.js with Express.js (for API and server logic)
- MongoDB Atlas (for database management)

### **Additional Integrations:**
- AI-powered chatbot for scheduling and learning guidance
- WebSockets (for real-time chat feature)
- Video SDK (for online classes)

## 🚀 Getting Started
### **1. Clone the repository**
```bash
git clone https://github.com/Vidyashree-H-Shetty/KnowledgeNest.git
cd KnowledgeNest
```

### **2. Install dependencies**
#### **Backend:**
```bash
cd dashboard/backend
npm install
```
#### **Frontend:**
```bash
cd dashboard/frontend
npm install
```
#### **Video:**
```bash
cd videosdk
npm install
```

### **3. Set up environment variables**
Create a `.env` file in the **backend** folder with the following:
```env
MONGODB_URI=
PORT=5001
JWT_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
GOOGLE_API_KEY=

```

Create a `.env` file in the **videosdk** folder with the following:
```env
REACT_APP_VIDEOSDK_TOKEN=
```


### **4. Run the project**
#### **Start the backend server:**
```bash
cd dashboard/backend
npm run dev
```
#### **Start the frontend:**
```bash
cd dashboard/frontend
npm run dev
```
#### **Start the videosdk server:**
```bash
cd videosdk
npm run dev
```

## 🤝 Contributing
We welcome contributions! Feel free to fork the repository and submit pull requests.


