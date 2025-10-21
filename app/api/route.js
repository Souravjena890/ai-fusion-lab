import connectToDatabase from '../lib/mongodb';
import { NextResponse } from 'next/server';

/**
 * Handles GET requests to the API endpoint
 * Connects to MongoDB and returns success response
 * @param {Request} request - The incoming HTTP request
 * @returns {NextResponse} JSON response indicating connection status
 */
export async function GET(request) {
  try {
    await connectToDatabase();
    // Your DB logic here
    return NextResponse.json({ message: 'Connected to MongoDB' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Database connection failed' }, { status: 500 });
  }
}

/**
 * Handles POST requests to the API endpoint  
 * Connects to MongoDB and returns success response
 * @param {Request} request - The incoming HTTP request
 * @returns {NextResponse} JSON response indicating connection status
 */
export async function POST(request) {
  try {
    await connectToDatabase();
    // Your DB logic here
    return NextResponse.json({ message: 'Connected to MongoDB' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Database connection failed' }, { status: 500 });
  }
}