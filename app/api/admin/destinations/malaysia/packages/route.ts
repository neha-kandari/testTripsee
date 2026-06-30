import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongoose';
import Package from '@/lib/models/Package';

// GET all Malaysia packages
export async function GET() {
  try {
    await connectDB();
    
    const packages = await Package.find({ destination: 'malaysia' })
      .sort({ createdAt: -1 });
    
    const transformedPackages = packages.map((pkg: any) => ({
      id: pkg._id.toString(),
      image: pkg.image || 'https://res.cloudinary.com/djmx4c5jq/image/upload/q_auto,f_auto,w_1920,c_limit/v1782838439/Destination/MalaysiaHero/img1.webp',
      days: pkg.days || pkg.duration || 'N/A',
      title: pkg.name || 'Malaysia Package',
      location: pkg.location || 'Malaysia',
      price: pkg.price ? `₹${pkg.price.toLocaleString()}/-` : '₹0/-',
      type: pkg.type || 'Standard',
      hotelRating: pkg.hotelRating || 3,
      features: pkg.features || [],
      highlights: pkg.highlights ? pkg.highlights.join(' • ') : '',
      createdAt: pkg.createdAt,
      updatedAt: pkg.updatedAt
    }));
    return NextResponse.json(transformedPackages);
  } catch (error) {
    console.error('Error fetching Malaysia packages:', error);
    return NextResponse.json([]);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    await connectDB();

    const newPackage = new Package({
      ...body,
      destination: 'malaysia'
    });

    const savedPackage = await newPackage.save();
    return NextResponse.json({ 
      success: true,
      message: 'Package created successfully',
      package: savedPackage 
    });
  } catch (error) {
    console.error('Error creating Malaysia package:', error);
    return NextResponse.json({ 
      error: 'Failed to create package',
      success: false,
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
