import { NextApiResponse } from 'next'


export default async (queryString: string, res: NextApiResponse) => {
  console.log("API route hit!");
  const lambdaResponse = await fetch(`${process.env.LAMBDA_ENDPOINT}${queryString}`);

  const lambdaData = await lambdaResponse.json()
  res.status(200).json({ data: lambdaData })
  }