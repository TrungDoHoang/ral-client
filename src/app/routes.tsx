import { DefaultLayout, LoginLayout } from '@/components';
import { PATH } from '@/constants';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Home = lazy(() => import('@/views/home/Home'));
const Login = lazy(() => import('@/views/Login'));
const Solution = lazy(() => import('@/views/solution/Solution'));
const Category = lazy(() => import('@/views/category/Category'));
const Sitemap = lazy(() => import('@/views/sitemap/Sitemap'));
const Cart = lazy(() => import('@/views/cart/Cart'));
const NotFound = lazy(() => import('@/views/NotFound'));

const router = createBrowserRouter([
	{
		path: PATH.ROOT,
		element: <DefaultLayout />,
		children: [
			{
				path: PATH.ROOT,
				element: <Home />,
			},
			{
				path: PATH.SOLUTION,
				element: <Solution />,
			},
			{
				path: PATH.CATEGORY,
				element: <Category />,
			},
			{
				path: PATH.SITEMAP,
				element: <Sitemap />,
			},
			{
				path: PATH.CART,
				element: <Cart />,
			},
		],
	},
	{
		path: PATH.ROOT,
		element: <LoginLayout />,
		children: [
			{
				path: PATH.LOGIN,
				element: <Login />,
			},
		],
	},
	{
		path: PATH.ANY,
		element: <NotFound />,
	},
]);

export default router;
