# GPT Clone

A full-stack chat application that mimics a GPT-style conversational experience using Google Gemini AI and MySQL-backed conversation persistence.

## Overview

This repository contains a React frontend and an Express backend for a lightweight AI chat clone.

- **Frontend**: Vite + React application with a chat UI, message history, and Axios-based API integration.
- **Backend**: Express server with MySQL persistence and Google Gemini chat generation using the `@google/genai` package.
- **Database**: MySQL stores chat messages and metadata in a `conversations` table.

## Features

- Chat interface with message history and auto-scrolling
- Stores user prompts and assistant responses in MySQL
- Builds conversation context from recent interactions
- Uses Google Gemini (`gemini-2.0-flash-lite` by default)
- Separate frontend and backend services for clean architecture

## Tech Stack

- Frontend: React, Vite, Axios, React Markdown, React Syntax Highlighter
- Backend: Node.js, Express, `@google/genai`, MySQL, dotenv
- Database: MySQL/MariaDB

## Folder Structure

- `backend/`: Express API server
  - `index.js`: server entry point
  - `src/api/`: route definitions and controllers
  - `src/service/`: AI and database business logic
  - `db/`: database configuration and schema
- `frontend/`: React UI application
  - `src/`: app components and main React entry
  - `public/`: static assets

## Prerequisites

- Node.js 18+ installed
- MySQL or compatible database running
- Google Cloud API key with Gemini access

## Setup

### 1. Backend

1. Navigate to the backend folder:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in `backend/` with the following values:

```env
GEMINI_API_KEY=your_google_gemini_api_key
GEMINI_MODEL=gemini-2.0-flash-lite
DB_HOST=localhost
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_DATABASE=your_db_name
```

4. Create the database table:

```bash
mysql -u your_db_user -p your_db_name < db/schema.sql
```

5. Start the backend server:

```bash
npm run dev
```

The API will be available at `http://localhost:3888/api`.

### 2. Frontend

1. Open a new terminal and navigate to the frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the frontend development server:

```bash
npm run dev
```

Visit the local Vite URL shown in the terminal, typically `http://localhost:5173`.

## API Endpoints

- `POST /api/chat/conversations`
  - Request body: `{ "question": "Your prompt here" }`
  - Creates a user message, sends the prompt to Gemini, stores the assistant response, and returns both messages.

- `GET /api/chat/conversations`
  - Returns the most recent conversation rows from the database.

## Database Schema

The `conversations` table is defined in `backend/db/schema.sql`:

- `id`: auto-incrementing message ID
- `role`: user or assistant
- `content`: text message content
- `token_count`: token usage count for assistant responses
- `created_at`: timestamp of record creation

## Notes

- The backend is configured to accept requests from `http://localhost:5173`.
- Adjust `GEMINI_MODEL` in `.env` if you want to use a different Gemini variant.
- The frontend assumes the backend is running at `http://localhost:3888`.

## Troubleshooting

- If the chat does not load, confirm the backend is running and the frontend is using the correct API URL.
- If database queries fail, verify MySQL credentials and that the `conversations` table exists.
- For AI failures, ensure your `GEMINI_API_KEY` is valid and has access to the chosen model.

## License

This project is provided as-is for experimentation and learning.
