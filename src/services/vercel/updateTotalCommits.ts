import axios from 'axios';

const PROJECT_ID = process.env.PROJECT_ID!;
const VERCEL_API_TOKEN = process.env.VERCEL_API_TOKEN!;
const ENVIRONMENT_KEY = process.env.ENVIRONMENT_KEY!;

const updateCommitCount = async (totalCommits: number) => {
  await axios.patch(
    `https://api.vercel.com/v9/projects/${PROJECT_ID}/env/${ENVIRONMENT_KEY}`,
    {
      key: 'NEXT_PUBLIC_GITHUB_TOTAL_COMMITS',
      type: 'encrypted',
      value: totalCommits.toString(),
      comment: 'Total updated commits across all repositories',
    },
    {
      headers: {
        Authorization: `Bearer ${VERCEL_API_TOKEN}`,
      },
    }
  );
  console.log('Total commits updated successfully');
};

export default updateCommitCount;
