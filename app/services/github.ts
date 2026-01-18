
import personal from '../data/personal.json';

const GITHUB_API_URL = 'https://api.github.com';

export const getRepositories = async () => {
  try {
    const response = await fetch(`${GITHUB_API_URL}/users/${personal.name}/repos`, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch repositories: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
