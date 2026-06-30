import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongoose';
import Package from '@/lib/models/Package';
import { processImageData } from '@/lib/imageUtils';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectDB();
    
    const packageData = await Package.findOne({ 
      _id: params.id, 
      destination: 'maldives' 
    });

    if (!packageData) {
      return NextResponse.json({ error: 'Package not found' }, { status: 404 });
    }
    return NextResponse.json(packageData);
  } catch (error) {
    console.error('Error fetching Maldives package:', error);
    return NextResponse.json({ error: 'Failed to fetch package' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const updateData = await request.json();
    await connectDB();
    
    // Process image data if provided
    if (updateData.image) {
      updateData.image = await processImageData(updateData.image, 'maldives');
    }
    
    // Update the package
    const updatedPackage = await Package.findByIdAndUpdate(
      params.id,
      { 
        ...updateData,
        destination: 'maldives', // Ensure destination is maldives
        updatedAt: new Date()
      },
      { new: true, runValidators: true }
    );

    if (!updatedPackage) {
      return NextResponse.json({ error: 'Package not found' }, { status: 404 });
    }
    return NextResponse.json(updatedPackage);
  } catch (error) {
    console.error('Error updating Maldives package:', error);
    return NextResponse.json({ error: 'Failed to update package' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectDB();
    
    const deletedPackage = await Package.findOneAndDelete({ 
      _id: params.id, 
      destination: 'maldives' 
    });

    if (!deletedPackage) {
      return NextResponse.json({ error: 'Package not found' }, { status: 404 });
    }
    return NextResponse.json({ 
      success: true, 
      message: 'Package deleted successfully',
      package: deletedPackage 
    });
  } catch (error) {
    console.error('Error deleting Maldives package:', error);
    return NextResponse.json({ error: 'Failed to delete package' }, { status: 500 });
  }
} 