//Layouts
import { HeaderOnly } from '~/components/Layout';

import Home from '~/Pages/Home';
import Login from '~/Pages/Login';
import Posts from '~/Pages/Posts';
import Upload from '~/Pages/Upload';
// public Route
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login, layout: null },
    { path: '/posts', component: Posts },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
