require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const compression = require('compression');

const app = express();

app.use(compression());
app.use(cors());
app.use(express.json({ limit: '10kb' }));

const HF_API_URL = "https://router.huggingface.co/v1/chat/completions";
const HF_API_KEY = process.env.HF_API_KEY;

if (!HF_API_KEY) {
    console.error('ERROR: HF_API_KEY is not set');
}

const apiClient = axios.create({
    baseURL: HF_API_URL,
    timeout: 30000,
    headers: {
        'Authorization': `Bearer ${HF_API_KEY}`,
        'Content-Type': 'application/json'
    }
});

app.post('/api/message', async (req, res) => {
    const { message } = req.body;
    
    if (!message || typeof message !== 'string' || !message.trim()) {
        return res.status(400).json({ 
            reply: "Please send a valid message.",
            error: true 
        });
    }

    try {
        const response = await apiClient.post('', {
            model: "meta-llama/Llama-3.2-3B-Instruct",
            messages: [
                { role: "system", content: "You are a friendly AI assistant. Keep responses concise." },
                { role: "user", content: message.trim() }
            ],
            max_tokens: 100,
            temperature: 0.7
        });

        const reply = response.data?.choices?.[0]?.message?.content?.trim();
        
        if (!reply) {
            throw new Error('Empty response from AI');
        }

        res.json({ reply });

    } catch (err) {
        console.error("Error:", err.response?.data || err.message);
        res.status(500).json({ 
            reply: "Sorry, I couldn't process your request.",
            error: true 
        });
    }
});

// For Vercel
module.exports = app;
