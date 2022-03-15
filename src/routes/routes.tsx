import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouteDefinition, rawRoutes } from './routesDefinition';

function createRouteDefinition(route: RouteDefinition) {
  const { path, component: Component } = route;

  return <Route key={path} path={path} element={<Component />} />;
}

const AllRoutes = rawRoutes.map((route) => createRouteDefinition(route));

const AppRoutes: React.FC = () => <Routes>{AllRoutes}</Routes>;
export default AppRoutes;
