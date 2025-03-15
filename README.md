# MindfulConnect Backend

This is the serverless backend for MindfulConnect, a mental wellness platform for GMIT students. It uses Express.js and Supabase for authentication, database, storage, and real-time features.

## Features

- User authentication (signup, login, logout, password reset)
- User profiles
- Forums with real-time updates
- Mood tracking
- Mental wellness resources
- Events
- Wellness challenges

## Tech Stack

- Express.js (Node.js framework)
- Supabase (PostgreSQL database, authentication, storage, real-time)
- Serverless deployment ready (Vercel, Netlify, AWS Lambda)

## Setup Instructions

### 1. Create a Supabase Project

1. Go to [Supabase](https://supabase.com) and create a new project
2. Note your project URL and service key (not the anon key, as we need admin privileges for the backend)
3. Run the SQL script in `supabase/schema.sql` in the SQL editor of your Supabase project

### 2. Set Environment Variables

Create a `.env` file in the root of your project with the following variables:

