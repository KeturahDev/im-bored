import { NextRequest, NextResponse } from 'next/server'


export async function POST (req: NextRequest) {
  console.log("API route hit!", req);
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