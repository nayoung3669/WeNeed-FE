import { NextResponse } from 'next/server';
import { updatePortfolio } from 'service/patchRequests';
import { getCookie } from 'utils/cookieUtils';

export async function PATCH(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('articleId') || '';
  const accessToken = getCookie(request, 'accessToken');
  const content = await request.json();

  try {
    const data = await updatePortfolio(content, accessToken, id);
    return NextResponse.json(data);
  } catch (error) {
    throw new Error('Error submitting recruiter data');
  }
}
