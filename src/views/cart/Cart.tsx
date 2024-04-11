import { PATH } from '@/constants';
import { Helmet } from 'react-helmet';

const Cart = () => {
	return (
		<div>
			<Helmet>
				<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
				<title>Shopping Cart | Giỏ Hàng</title>
				<base href={PATH.CART} />
			</Helmet>
			Cart
		</div>
	);
};

export default Cart;
