# 🎙️ VoiceMate - AI Voice Assistant

An intelligent voice-powered chatbot that uses Meta's Llama 3.2 3B Instruct model to provide natural conversational responses. Users can interact via voice or text input.

## ✨ Features

- 🎤 **Voice Input** - Speak directly to the assistant using Web Speech API
- 💬 **Text Chat** - Type messages for instant AI responses
- 🤖 **Powered by Meta Llama 3.2 3B** - Advanced language understanding
- ⚡ **Real-time Responses** - Fast and intelligent conversation
- 🌐 **Live Deployment** - Accessible anywhere via Vercel

## 🚀 Demo

**Live Site:** https://noodles-ai-alpha.vercel.app/

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **AI Model:** Meta Llama 3.2 3B Instruct (Hugging Face API)
- **Deployment:** Vercel
- **Version Control:** Git & GitHub

## 📦 Installation

1. **Clone the repository**
git clone https://github.com/rohith-0099/Noodles-assistant.git
cd Noodles-assistant


2. **Install dependencies**
npm install

3. **Create `.env` file**
touch .env


4. **Add your Hugging Face API key to `.env`**
HF_API_KEY=your_huggingface_api_key_here


5. **Run locally**
npm start


6. **Open in browser**
http://localhost:5000


## 🌍 Deployment

Deployed on **Vercel** with automatic CI/CD from GitHub.

### Environment Variables
Make sure to add `HF_API_KEY` in your Vercel project settings.

## 📁 Project Structure

voicemate/
├── api/
│ └── index.js # Express backend API
├── frontend/
│ └── index.html # Main UI
├── package.json # Dependencies
├── vercel.json # Vercel configuration
├── .gitignore # Ignored files
└── README.md # Project documentation


## 💡 How It Works

1. User speaks or types a message
2. Frontend sends the message to the Express backend
3. Backend calls Hugging Face API with Meta Llama 3.2 3B model
4. AI generates a response
5. Response is displayed to the user

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Rohith Chandran**
- GitHub: [@rohith-0099](https://github.com/rohith-0099)

## 🙏 Acknowledgments

- [Hugging Face](https://huggingface.co/) for API access
- [Meta AI](https://ai.meta.com/) for Llama 3.2 model
- [Vercel](https://vercel.com/) for hosting

---

⭐ If you found this project helpful, please give it a star!
How to Add This to Your GitHub
Create the README file:


cd ~/voicemate
nano README.md
Paste the content above, then save (Ctrl+X, Y, Enter)

Push to GitHub:

git add README.md
git commit -m "Add comprehensive README"
git push origin main
