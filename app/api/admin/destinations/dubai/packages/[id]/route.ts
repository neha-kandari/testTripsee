import { NextRequest, NextResponse } from 'next/server';
import connectDB from '../../../../../../../lib/mongoose';
import Package from '../../../../../../../lib/models/Package';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectDB();
    const packageData = await Package.findById(params.id);
    
    if (!packageData) {
      return NextResponse.json({ error: 'Package not found' }, { status: 404 });
    }
    return NextResponse.json(packageData);
  } catch (error) {
    console.error('Error fetching Dubai package:', error);
    return NextResponse.json({ error: 'Failed to fetch package' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectDB();
    
    const updateData = await request.json();
    const updatedPackage = await Package.findByIdAndUpdate(
      params.id,
      updateData,
      { new: true, runValidators: true }
    );
    
    if (!updatedPackage) {
      return NextResponse.json({ error: 'Package not found' }, { status: 404 });
    }
    return NextResponse.json(updatedPackage);
  } catch (error) {
    console.error('Error updating Dubai package:', error);
    return NextResponse.json({ error: 'Failed to update package' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectDB();
    const deletedPackage = await Package.findByIdAndDelete(params.id);
    
    if (!deletedPackage) {
      return NextResponse.json({ error: 'Package not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Package deleted successfully' });
  } catch (error) {
    console.error('Error deleting Dubai package:', error);
    return NextResponse.json({ error: 'Failed to delete package' }, { status: 500 });
  }
} 