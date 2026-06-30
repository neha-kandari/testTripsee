import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../../../lib/mongoose';
import Itinerary from '../../../../../../lib/models/Itinerary';

// GET all Dubai itineraries or filter by packageId
export async function GET(request: NextRequest) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const packageId = searchParams.get('packageId');
    
    let query: any = { destination: 'dubai' };
    if (packageId) {
      query.packageId = packageId;
    }
    
    const itineraries = await Itinerary.find(query).sort({ createdAt: -1 });
    return NextResponse.json(itineraries);
  } catch (error) {
    console.error('Error fetching Dubai itineraries:', error);
    return NextResponse.json({ error: 'Failed to fetch Dubai itineraries' }, { status: 500 });
  }
}

// POST new Dubai itinerary
export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const itineraryData = await request.json();
    const newItinerary = new Itinerary({
      ...itineraryData,
      destination: 'dubai'
    });

    const savedItinerary = await newItinerary.save();
    return NextResponse.json(savedItinerary, { status: 201 });
  } catch (error) {
    console.error('Error creating Dubai itinerary:', error);
    return NextResponse.json(
      { error: 'Failed to create itinerary' },
      { status: 500 }
    );
  }
} 