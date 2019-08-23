// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

// 原来的全部加载
// import { WelcomePage, CounterPage, RedditListPage, Layout } from './';
// import {
//   WelcomePage,
//   CounterPage,
//   // RedditListPage,
//   Layout,
// } from './';


// 按需加载方案二
// import DynamicImport from '../common/DynamicImport';
// import React from 'react';
// const WelcomePage = (props) => (
//   <DynamicImport load={() => import('./WelcomePage')}>
//     {(Component) => Component === null
//       ? ''
//       : <Component {...props} />}
//   </DynamicImport>
// )
//
// const CounterPage = (props) => (
//   <DynamicImport load={() => import('./CounterPage')}>
//     {(Component) => Component === null
//       ? ''
//       : <Component {...props} />}
//   </DynamicImport>
// )
//
// const RedditListPage = (props) => (
//   <DynamicImport load={() => import('./RedditListPage')}>
//     {(Component) => Component === null
//       ? ''
//       : <Component {...props} />}
//   </DynamicImport>
// )
//
// const Layout = (props) => (
//   <DynamicImport load={() => import('./Layout')}>
//     {(Component) => Component === null
//       ? ''
//       : <Component {...props} />}
//   </DynamicImport>
// )

// 按需加载方案一
import loadable from 'react-loadable';
import ReactLoadableLoading from '../common/ReactLoadableLoading.js';

let Layout = loadable({
  loader: () => import('./Layout.js'),
  loading: ReactLoadableLoading
});

let WelcomePage = loadable({
  loader: () => import('./WelcomePage.js'),
  loading: ReactLoadableLoading
});

let CounterPage = loadable({
  loader: () => import('./CounterPage.js'),
  loading: ReactLoadableLoading
});

let RedditListPage = loadable({
  loader: () => import('./RedditListPage.js'),
  loading: ReactLoadableLoading
});




export default {
  path: 'examples',
  component: Layout,
  childRoutes: [
    { path: '', component: WelcomePage, isIndex: true },
    { path: 'counter', component: CounterPage },
    { path: 'reddit', component: RedditListPage },
  ],
};
