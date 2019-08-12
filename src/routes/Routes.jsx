import React from 'react';
import Loadable from 'react-loadable';
import { ClipLoader } from 'react-spinners';

const loading = () => (
  <div className="w-100 text-center">
    <div className="sweet-loading">
      <ClipLoader sizeUnit="px" size={150} color="#123abc" loading />
    </div>
  </div>
);

const App = Loadable({
  loader: () => import('./App'),
  loading
});

const Home = Loadable({
  loader: () => import('../containers/home/Home'),
  loading
});

const About = Loadable({
  loader: () => import('../containers/about/About'),
  loading
});

const NotFound = Loadable({
  loader: () => import('../containers/404/404'),
  loading
});

const Blog = Loadable({
  loader: () => import('../containers/blog/Blog'),
  loading
});

const BlogDetail = Loadable({
  loader: () => import('../containers/blogDetail/BlogDetail'),
  loading
});

export default [
  {
    component: App,
    path: '/',
    routes: [
      {
        component: Home,
        path: '/',
        exact: true
      },
      {
        component: About,
        path: '/about',
        exact: true
      },
      {
        component: Blog,
        path: '/blog',
        exact: true
      },
      {
        component: BlogDetail,
        path: '/blog/:id',
        exact: true
      },
      {
        component: NotFound,
        path: '*'
      }
    ]
  }
];
