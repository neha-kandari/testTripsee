import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongoose';
import Itinerary from '@/lib/models/Itinerary';

// GET single itinerary
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    
    const { id } = await params;
    const itinerary = await Itinerary.findById(id);
    
    if (!itinerary) {
      return NextResponse.json({ error: 'Itinerary not found' }, { status: 404 });
    }
    
    return NextResponse.json({
      success: true,
      itinerary
    });
  } catch (error) {
    console.error('Error fetching itinerary:', error);
    return NextResponse.json({ error: 'Failed to fetch itinerary' }, { status: 500 });
  }
}

// PUT update itinerary
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const body = await request.json();
    await connectDB();
    
    const { id } = await params;
    const updatedItinerary = await Itinerary.findByIdAndUpdate(
      id,
      {
        title: body.title,
        destination: body.destination,
        duration: body.duration,
        overview: body.overview,
        packageId: body.packageId,
        hotelName: body.hotelName,
        hotelRating: body.hotelRating,
        hotelDescription: body.hotelDescription,
        hotelImages: body.hotelImages || [],
        days: body.days || [],
        inclusions: body.inclusions || [],
        exclusions: body.exclusions || [],
        isActive: body.isActive !== undefined ? body.isActive : true,
        updatedAt: new Date()
      },
      { new: true }
    );
    
    if (!updatedItinerary) {
      return NextResponse.json({ error: 'Itinerary not found' }, { status: 404 });
    }
    return NextResponse.json({
      success: true,
      itinerary: updatedItinerary
    });
  } catch (error) {
    console.error('Error updating itinerary:', error);
    return NextResponse.json({ error: 'Failed to update itinerary' }, { status: 500 });
  }
}

// DELETE itinerary
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    
    const { id } = await params;
    const itinerary = await Itinerary.findByIdAndDelete(id);
    
    if (!itinerary) {
      return NextResponse.json({ error: 'Itinerary not found' }, { status: 404 });
    }
    return NextResponse.json({
      success: true,
      message: 'Itinerary deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting itinerary:', error);
    return NextResponse.json({ error: 'Failed to delete itinerary' }, { status: 500 });
  }
}