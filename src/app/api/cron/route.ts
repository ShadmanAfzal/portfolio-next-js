import { NextResponse } from 'next/server';
import getTotalCommitsAcrossAllRepos from '@/services/github/getTotalCommits';
import updateCommitCount from '@/services/vercel/updateTotalCommits';
import triggerRedeployment from '@/services/vercel/triggerRedeployment';

export async function GET(req: Request) {
  const headers = req.headers;

  if (headers.get('Authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  console.log('Cron job triggered');

  const totalCount = await getTotalCommitsAcrossAllRepos();

  if (Number(process.env.NEXT_PUBLIC_GITHUB_TOTAL_COMMITS) === totalCount) {
    console.log('Environment variable is already up to date');
    return NextResponse.json({
      totalCount,
      message: 'environment variable is already up to date',
    });
  }

  await updateCommitCount(totalCount);

  if (process.env.NODE_ENV === 'production') {
    await triggerRedeployment();
  }

  console.log('Cron job completed successfully');

  return NextResponse.json({
    totalCount,
    message: 'environment variable has been updated',
  });
}
