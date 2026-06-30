import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../../../../lib/mongoose';
import Itinerary from '../../../../../../../lib/models/Itinerary';

// GET specific Dubai itinerary
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const itinerary = await Itinerary.findById(params.id);
    
    if (!itinerary) {
      return NextResponse.json({ error: 'Itinerary not found' }, { status: 404 });
    }
    return NextResponse.json(itinerary);
  } catch (error) {
    console.error('Error fetching Dubai itinerary:', error);
    return NextResponse.json({ error: 'Failed to fetch itinerary' }, { status: 500 });
  }
}

// PUT update specific Dubai itinerary
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    
    const updateData = await request.json();
    const updatedItinerary = await Itinerary.findByIdAndUpdate(
      params.id,
      updateData,
      { new: true, runValidators: true }
    );
    
    if (!updatedItinerary) {
      return NextResponse.json({ error: 'Itinerary not found' }, { status: 404 });
    }
    return NextResponse.json(updatedItinerary);
  } catch (error) {
    console.error('Error updating Dubai itinerary:', error);
    return NextResponse.json({ error: 'Failed to update itinerary' }, { status: 500 });
  }
}

// DELETE specific Dubai itinerary
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const deletedItinerary = await Itinerary.findByIdAndDelete(params.id);
    
    if (!deletedItinerary) {
      return NextResponse.json({ error: 'Itinerary not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Itinerary deleted successfully' });
  } catch (error) {
    console.error('Error deleting Dubai itinerary:', error);
    return NextResponse.json({ error: 'Failed to delete itinerary' }, { status: 500 });
  }
} 