# TaideHub AI - Lesson Presentation Generator

Transform your teaching ideas into professional presentations instantly with TaideHub AI. Our tool helps educators create engaging, curriculum-aligned lesson presentations with just a topic input.

## 🚀 Features

- **Instant Lesson Planning**
  - Transform any topic into a complete 5-slide lesson presentation
  - Built-in starter activities and plenaries
  - Knowledge check questions throughout

- **Education-Focused Design**
  - Professional UK curriculum-aligned layouts
  - Color-coded sections for activities and assessments
  - Consistent branding and typography

- **Smart Content Generation**
  - Automatic Think-Pair-Share activities
  - Differentiated learning points
  - Built-in assessment opportunities
  - Exit tickets for lesson closure

## 🛠️ Technical Requirements

- Node.js (v16 or higher)
- Python (v3.8 or higher)
- Google API key with Gemini access

## 📦 Installation

1. **Clone and Setup**
   ```bash
   # Clone the repository
   git clone [repository-url]
   cd [project-directory]
   ```

2. **Backend Setup**
   ```bash
   # Create and activate virtual environment
   python -m venv venv
   # On Windows:
   venv\Scripts\activate
   # On Unix or MacOS:
   source venv/bin/activate

   # Install dependencies
   pip install -r requirements.txt

   # Configure environment
   # Create .env file and add your Google API key
   echo "GOOGLE_API_KEY=your_google_api_key_here" > .env
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   ```

## 🚀 Running the Application

1. **Start Backend Server**
   ```bash
   # From the root directory
   python -m uvicorn backend.main:app --reload
   ```

2. **Start Frontend Development Server**
   ```bash
   # From the frontend directory
   cd frontend
   npm run dev
   ```

3. Access the application at `http://localhost:5173`

## 💡 How to Use

1. Enter your lesson topic in the input field
2. Click "Generate Lesson Presentation"
3. Your presentation will include:
   - Professional title slide
   - Interactive starter activity
   - Main content with knowledge checks
   - Real-world applications
   - Plenary with exit ticket
4. Download your PowerPoint presentation

## 🎨 Presentation Structure

Each generated presentation follows this structure:
- **Slide 1:** Title and Introduction
- **Slide 2:** Starter Activity (Think-Pair-Share)
- **Slide 3:** Main Content with Knowledge Check
- **Slide 4:** Real-World Applications
- **Slide 5:** Plenary Review and Exit Ticket

## ⚠️ Important Note

You'll need a valid Google API key with access to the Gemini model. Get yours from the [Google AI Studio](https://makersuite.google.com/app/apikey). 