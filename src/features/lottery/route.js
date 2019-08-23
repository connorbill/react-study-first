
import loadable from 'react-loadable';
import ReactLoadableLoading from '../common/ReactLoadableLoading.js';


let Layout = loadable({
  loader: () => import('./Layout.js'),
  loading: ReactLoadableLoading
});
let DefaultPage = loadable({
  loader: () => import('./DefaultPage.js'),
  loading: ReactLoadableLoading
});

export default {
  name: 'Lottery',
  path: 'lottery',
  component: Layout,
  childRoutes: [
    { path: 'index', name: 'Default page', component: DefaultPage, isIndex: true },
  ],
};
