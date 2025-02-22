import axios, { AxiosError } from 'axios';

const USER_OR_ORG = process.env.USER_OR_ORG!;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN!;

async function getAllRepos() {
  const repositories = [];
  let page = 1;

  try {
    while (true) {
      const response = await axios.get(
        `https://api.github.com/users/${USER_OR_ORG}/repos`,
        {
          params: { per_page: 100, page },
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
          },
        }
      );

      const repos = response.data;

      repositories.push(...repos);

      if (repos.length < 100) {
        break;
      }
      page++;
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(
        'Error fetching repositories:',
        error.response?.data || error.message
      );
    }
  }
  return repositories;
}

async function getTotalCommitsForRepo(owner: string, repo: string) {
  console.log(`Fetching commits for repository: ${repo}`);

  let totalCommits = 0;
  let page = 1;

  try {
    while (true) {
      const response = await axios.get(
        `https://api.github.com/repos/${owner}/${repo}/commits`,
        {
          params: { per_page: 100, page },
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
          },
        }
      );

      const commits = response.data;

      totalCommits += commits.length;

      if (commits.length < 100) {
        break;
      }
      page++;
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(
        `Error fetching commits for ${repo}:`,
        error.response?.data || error.message
      );
    }
  }

  console.log(`Total commits for ${repo}: ${totalCommits}`);

  return totalCommits;
}

async function getTotalCommitsAcrossAllRepos() {
  const repositories = await getAllRepos();

  const totalCommitsPromise = repositories.map((repo) => {
    return getTotalCommitsForRepo(USER_OR_ORG, repo.name);
  });

  const totalCommits = await Promise.all(totalCommitsPromise);

  const totalCommitsAcrossAllRepos = totalCommits.reduce(
    (val, acc) => val + acc,
    0
  );

  console.log(
    `Total commits across all repositories: ${totalCommitsAcrossAllRepos}`
  );

  return totalCommitsAcrossAllRepos;
}

export default getTotalCommitsAcrossAllRepos;
