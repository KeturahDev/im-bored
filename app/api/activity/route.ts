import { NextRequest, NextResponse } from 'next/server'


export async function POST (req: NextRequest) {
  console.log("POST API route hit!");
  const lambdaResponse = await fetch(`${process.env.LAMBDA_ENDPOINT}${req.nextUrl.search}`);
  
  try {
    const lambdaData = await lambdaResponse.json() 
    console.log("lambdaData!", lambdaData);
    return NextResponse.json({data: lambdaData})
  } catch (err) {
    console.log("ERR!", err);
    return NextResponse.json({error: 'Error from lambda'})  
  }
}

export async function GET(req: NextRequest) {
  console.log("GET API route hit!");

  const lambdaResponse = await fetch(`${process.env.LAMBDA_ENDPOINT}?retrieve=TRUE`);

  try {
    const lambdaData = await lambdaResponse.json() 
    console.log("lambdaData!", lambdaData);
    return NextResponse.json({data: lambdaData})
  } catch (err) {
    console.log("ERR!", err);
    return NextResponse.json({error: 'Error from lambda'})  
  }
}