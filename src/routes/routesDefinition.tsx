import qs from 'query-string';
import HomePage from '../pages/home';
import SearchPage from '../pages/search';

function addQs(query = {}) {
  const queryString = qs.stringify(query);
  return queryString ? `?${queryString}` : queryString;
}
export interface RouteDefinition {
  path: string;
  component: React.ElementType;
  build: (...args: any[]) => string;
}

// no lazy loading since this is a simple app, might implement later if needed
export const Routes: { [id: string]: RouteDefinition } = {
  home: {
    path: '/',
    component: HomePage,
    build: () => '/',
  },
  search: {
    path: '/search',
    component: SearchPage,
    build: (query?: { text: string; page: number }) => `/search${addQs(query)}`,
  },
};

export const rawRoutes: RouteDefinition[] = Object.values(Routes);
