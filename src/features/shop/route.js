// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

// 最初代码
// import {
//   DefaultPage,
// } from './';

//按需加载方案一, 但是没有成功
// import loadableComponent from '@loadable/component';

//按需加载方案二 自己写按需加载功能
// import React from 'react';
// import DynamicImport from '../common/DynamicImport';
// const DefaultPage = React.lazy(() => import('./DefaultPage'))
// const DefaultPage = (props) => (
//   <DynamicImport load={() => import('./DefaultPage')}>
//     {(Component) => Component === null
//       ? ''
//       : <Component {...props} />}
//   </DynamicImport>
// );
//
// const ShopCategory = (props) => (
//   <DynamicImport load={() => import('./ShopCategory')}>
//     {(Component) => Component === null
//       ? ''
//       : <Component {...props} />}
//   </DynamicImport>
// );


// 按需加载方案三
import loadable from 'react-loadable';
import ReactLoadableLoading from '../common/ReactLoadableLoading.js';
let DefaultPage = loadable({
  loader: () => import('./DefaultPage.js'),
  loading: ReactLoadableLoading
});
let ShopCategory = loadable({
  loader: () => import('./ShopCategory.js'),
  loading: ReactLoadableLoading
});
let Layout = loadable({
  loader: () => import('./Layout.js'),
  loading: ReactLoadableLoading
});

let Book = loadable({
  loader: () => import('./Book.js'),
  loading: ReactLoadableLoading
});

let Apple = loadable({
  loader: () => import('./Apple.js'),
  loading: ReactLoadableLoading
});

let Food = loadable({
  loader: () => import('./Food.js'),
  loading: ReactLoadableLoading
});

export default {
  name: 'Shop',
  path: 'shop',
  component: Layout,
  childRoutes: [
    { path: 'default-page', name: 'Default page', component: DefaultPage, isIndex: true },
    { path: 'category', name: 'category', component: ShopCategory },
    { path: 'book', name: 'book', component: Book },
    { path: 'apple', name: 'Apple', component: Apple },
    { path: 'food', name: 'Food', component: Food },
  ],
};
