# GPT Clone Backend

A Node.js Express backend for the GPT Clone project. This service provides chat persistence, conversation management, and AI response generation using Google Gemini.

## Overview

The backend exposes a simple REST API for the frontend chat application. It stores all conversation messages in a MySQL database and uses the Google Gemini API to generate assistant responses based on recent chat history.

## Core Responsibilities

- Receive user questions from the frontend
- Persist user and assistant messages in MySQL
- Fetch recent conversation history
- Send chat context to Google Gemini for response generation
- Return structured conversation objects to the client

## Technology Stack

- Node.js
- Express
- MySQL via `mysql2/promise`
- Google Gemini SDK via `@google/genai`
- dotenv for environment configuration
- cors for cross-origin support

## Project Structure

- `index.js` - server entry point and main application setup
- `src/api/main.routes.js` - root router for the API
- `src/api/chat/chat.routes.js` - chat-specific endpoints
- `src/api/chat/controller/chat.controller.js` - request handlers
- `src/api/chat/service/chat.service.js` - business logic, AI integration, and database operations
- `db/db.config.js` - MySQL connection pool configuration
- `db/schema.sql` - conversation table schema

## Installation

1. Navigate to the backend directory:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the backend directory with the following values:

```env
GEMINI_API_KEY=your_google_gemini_api_key
GEMINI_MODEL=gemini-2.0-flash-lite
DB_HOST=localhost
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_DATABASE=your_db_name
```

- `GEMINI_API_KEY`: API key for Google Gemini
- `GEMINI_MODEL`: Gemini model to use
- `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_DATABASE`: MySQL database connection settings

## Database Setup

Create the MySQL schema using the provided SQL file:

```bash
mysql -u your_db_user -p your_db_name < db/schema.sql
```

## Running the Server

Start the backend in development mode:

```bash
npm run dev
```

Or run the server normally:

```bash
npm start
```

The backend listens on `http://localhost:3888` by default.

## API Endpoints

### POST `/api/chat/conversations`

Creates a user message, generates an assistant response, and stores both messages.

Request body:

```json
{ "question": "Your prompt here" }
```

Response:

- `success`: boolean
- `message`: status text
- `data.userConversation`: stored user message
- `data.assistantConversation`: stored assistant message

### GET `/api/chat/conversations`

Returns the latest stored conversation history.

Response:

- `success`: boolean
- `message`: status text
- `data`: array of recent conversation rows

## Notes

- The backend is configured to allow cross-origin requests from `http://localhost:5173`.
- The AI history is built from the most recent rows in the `conversations` table.
- If the `GEMINI_MODEL` environment variable is not set, the service uses `gemini-2.0-flash-lite` by default.

## Troubleshooting

- Verify MySQL is running and credentials in `.env` are correct.
- Confirm the `conversations` table exists and the schema has been applied.
- Ensure `GEMINI_API_KEY` is valid and has access to the configured model.
- If startup fails, inspect the console for connection or dependency errors.

## License

This backend implementation is provided for learning and experimentation.
