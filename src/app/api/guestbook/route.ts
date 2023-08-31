import { NextResponse } from 'next/server';

export const POST = async (request: Request) => {
  try {
    await request.json();

    return NextResponse.json({});
  } catch (error) {
    return NextResponse.json({}, { status: 500 });
  }
};

export const PUT = async (request: Request) => {
  try {
    await request.json();

    return NextResponse.json({});
  } catch (error) {
    return NextResponse.json({}, { status: 500 });
  }
};

export const DELETE = async (request: Request) => {
  try {
    await request.json();

    return NextResponse.json({});
  } catch (error) {
    return NextResponse.json({}, { status: 500 });
  }
};
