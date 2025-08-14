# Réunion Creole Translator

A pet project for testing text generation capabilities with **Gemini 2.5 Flash Lite**. This web application translates text into Réunion Creole (Créole réunionnais), preserving the rich cultural heritage of La Réunion island.

## Project Overview

This is a Next.js-based translation tool that leverages Google's Gemini AI to translate various languages into Réunion Creole. The project serves as a testing ground for exploring AI-powered text generation while celebrating the unique linguistic heritage of Réunion.

### Key Features

- **AI-Powered Translation**: Uses Gemini 2.5 Flash Lite for accurate translations
- **Cultural Preservation**: Focuses on Réunion Creole, a language born from the island's unique cultural melting pot
- **Modern UI**: Clean, responsive interface built with React and Tailwind CSS
- **Real-time Translation**: Instant text conversion with proper safety settings
- **Cultural Context**: Includes educational content about Réunion's linguistic heritage

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4, Radix UI components
- **AI Integration**: Google GenAI SDK (@google/genai)
- **Development**: ESLint, Prettier, Turbopack
- **Deployment**: Ready for Vercel deployment

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- A Google Gemini API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd reunion-creole-translator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
reunion-creole-translator/
├── src/
│   ├── app/
│   │   ├── api/gemini/route.ts    # Gemini AI integration
│   │   ├── page.tsx               # Main application page
│   │   └── layout.tsx             # Root layout
│   ├── components/
│   │   ├── translation-group.tsx  # Translation interface
│   │   ├── from-textarea.tsx      # Input text area
│   │   ├── to-textarea.tsx        # Output text area
│   │   └── ui/                    # Reusable UI components
│   └── lib/
│       └── utils.ts               # Utility functions
├── public/
│   └── images/                    # Static assets
└── package.json
```

## Configuration

The Gemini AI integration is configured with:

- **Model**: `gemini-2.5-flash-lite`
- **Temperature**: 0.7 (balanced creativity and accuracy)
- **Safety Settings**: Configured to block harassment and hate speech
- **System Instructions**: Specialized prompts for Réunion Creole translation

## Features in Detail

### Translation Interface
- Clean, intuitive text input/output areas
- Real-time translation with loading indicators
- Responsive design for all device sizes

### Cultural Elements
- Hero image showcasing Réunion's cultural diversity
- Educational content about Creole heritage
- Motto: "Nou lé fièr nout lang kréol" (We are proud of our Creole language)

### AI Safety
- Built-in content filtering
- Harmful content detection and blocking
- Secure API key handling

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your `GEMINI_API_KEY` to Vercel environment variables
4. Deploy!

## Contributing

This is a personal pet project for testing AI text generation capabilities. Feel free to fork and experiment with your own modifications!

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Google Gemini AI for providing the text generation capabilities
- The Réunion community for preserving and celebrating Creole heritage
- Next.js team for the excellent framework

---

*"Le créole réunionnais, né du métissage unique de La Réunion, est bien plus qu'une langue : c'est une mémoire vivante, un lien entre générations et cultures."*

*"Réunion Creole, born from the unique cultural melting pot of Réunion, is much more than a language: it's a living memory, a link between generations and cultures."*
