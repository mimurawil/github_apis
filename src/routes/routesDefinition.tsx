import HomePage from '../pages/home';
import SearchPage from '../pages/search';

export interface RouteDefinition {
  path: string;
  component: React.ElementType;
  routes?: RouteDefinition[]; // maybe we won't need this
}

// no lazy loading since this is a simple app, might implement later if needed
export const Routes: { [id: string]: RouteDefinition } = {
  home: {
    path: '/',
    component: HomePage,
  },
  search: {
    path: '/search',
    component: SearchPage,
  },
};

export const rawRoutes: RouteDefinition[] = Object.values(Routes);
