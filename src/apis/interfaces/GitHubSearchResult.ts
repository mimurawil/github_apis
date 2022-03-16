import { GitHubSearchUser } from './GitHubSearchUser';

export interface GitHubSearchResult {
  total_count: number;
  incomplete_results: boolean;
  items: GitHubSearchUser[];
}
