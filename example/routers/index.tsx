import { lazy } from 'react';
import { RouteProps } from 'react-router-dom';

const routers: RouteProps[] = [
  {
    path: '/test',
    element: lazy(() => import('../views/Test')),
  },
];

export default routers;
