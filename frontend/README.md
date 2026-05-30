# GPT Clone Frontend

A modern React frontend built with Vite for the GPT Clone chat application.

This application provides a responsive chat interface that connects to the backend API, displays historical messages, and supports user prompts with real-time assistant responses.

## Key Features

- Clean, mobile-friendly chat interface
- Sidebar and header layout for a compact chat experience
- Message list with auto-scroll to the latest entry
- Message input component with loading state support
- Axios-powered HTTP client for backend communication

## Tech Stack

- React
- Vite
- Axios
- ESLint
- React Markdown
- React Syntax Highlighter

## Installation

1. Open a terminal and navigate to the frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

## Development

Start the frontend development server:

```bash
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`). The frontend expects the backend API to run at `http://localhost:3888/api`.

## Available Scripts

- `npm run dev` - Launches the Vite development server.
- `npm run build` - Builds the application for production.
- `npm run lint` - Runs ESLint over the frontend source.
- `npm run preview` - Serves the production build locally for preview.

## Project Structure

- `src/App.jsx` - Main application entry and chat state management.
- `src/components/Sidebar/Sidebar.jsx` - Sidebar UI component.
- `src/components/ChatHeader/ChatHeader.jsx` - Header component for chat branding.
- `src/components/MessageList/MessageList.jsx` - Renders chat messages and loading state.
- `src/components/ChatInput/ChatInput.jsx` - Input field and send button.

## Backend Requirements

This frontend relies on the backend API to provide conversation history and AI-generated responses. Make sure the backend server is running before using the app.

- Backend API root: `http://localhost:3888/api`
- Expected endpoints:
  - `GET /api/chat/conversations`
  - `POST /api/chat/conversations`

## Notes

- Update `API_BASE_URL` in `src/App.jsx` if the backend runs on a different host or port.
- The frontend is configured for local development and may require environment adjustments before production deployment.
