import SearchPage from '../pages/search';

export interface RouteDefinition {
  path: string;
  component: React.ElementType;
  routes?: RouteDefinition[];
}

// no lazy loading since this is a simple app, might implement later if needed
export const Routes: { [id: string]: RouteDefinition } = {
  home: {
    path: '/',
    component: SearchPage,
  },
};

export const rawRoutes: RouteDefinition[] = Object.values(Routes);
