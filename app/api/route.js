import connectToDatabase from '../lib/mongodb';
import { NextResponse } from 'next/server';

/**
 * Shared handler logic for database connection
 */
async function handleDatabaseConnection() {
  try {
    await connectToDatabase();
    // Your common DB logic here
    return NextResponse.json({ message: 'Connected to MongoDB' }, { status: 200 });
  } catch (error) {
    console.error('Database connection failed:', error);
    return NextResponse.json({ error: 'Database connection failed' }, { status: 500 });
  }
}

/**
 * Handles GET requests to the API endpoint
 * Connects to MongoDB and returns success response
 * @param {Request} request - The incoming HTTP request
 * @returns {NextResponse} JSON response indicating connection status
 */
export async function GET(request) {
  return handleDatabaseConnection();
}

/**
 * Handles POST requests to the API endpoint  
 * Connects to MongoDB and returns success response
 * @param {Request} request - The incoming HTTP request
 * @returns {NextResponse} JSON response indicating connection status
 */
export async function POST(request) {
  // For POST requests, you might want to parse the request body:
  // try {
  //   const body = await request.json();
  //   // Process POST-specific logic here
  // } catch (error) {
  //   return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  // }
  
  return handleDatabaseConnection();
}