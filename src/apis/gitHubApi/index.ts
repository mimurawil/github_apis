import { GitHubSearchResult } from '../interfaces/GitHubSearchResult';
import { GitHubUser } from '../interfaces/GitHubUser';

async function parseResponse(res: Response) {
  if (!res.ok) {
    try {
      const result = await res.json();
      throw new Error(`${result?.message} ${result?.documentation_url}`);
    } catch (err) {
      throw new Error(err);
    }
  }
  return res.json();
}

// could use something fancy like react-query, but let's keep it simple here :)
export function fetchGitHubSearchUserApi(text: string, page: number, size: number): Promise<GitHubSearchResult> {
  return fetch(fetchGitHubSearchUserApi.url(text, page, size)).then(parseResponse);
}
fetchGitHubSearchUserApi.url = (text: string, page: number, size: number) =>
  `https://api.github.com/search/users?q=${text}&per_page=${size}&page=${page}`;

export function fetchGitHubUserApi(username: string): Promise<GitHubUser> {
  return fetch(fetchGitHubUserApi.url(username)).then(parseResponse);
}
fetchGitHubUserApi.url = (username: string) => `https://api.github.com/users/${username}`;
