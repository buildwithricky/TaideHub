# PowerPoint Slide Generator

This project allows you to generate PowerPoint presentations with AI-generated images using a React frontend and Python backend.

## Prerequisites

- Node.js (v16 or higher)
- Python (v3.8 or higher)
- OpenAI API key

## Setup

1. Clone the repository
2. Set up the backend:
   ```bash
   # Create a virtual environment (optional but recommended)
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   
   # Install dependencies
   pip install -r requirements.txt
   
   # Create a .env file and add your OpenAI API key
   echo "OPENAI_API_KEY=your_api_key_here" > .env
   ```

3. Set up the frontend:
   ```bash
   cd frontend
   npm install
   ```

## Running the Application

1. Start the backend server:
   ```bash
   # From the root directory
   uvicorn backend.main:app --reload
   ```

2. Start the frontend development server:
   ```bash
   # From the frontend directory
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000`

## Features

- Create multiple slides with titles and content
- Generate relevant images using DALL-E AI
- Download the generated PowerPoint presentation
- Modern, responsive UI using Material-UI

## Usage

1. Add slides using the "Add Slide" button
2. Fill in the title and content for each slide
3. Provide an image prompt to generate relevant images using DALL-E
4. Click "Generate Presentation" to create and download your PowerPoint file

## Note

Make sure you have a valid OpenAI API key and sufficient credits for image generation. 