import { PATH } from '@/constants';
import { Helmet } from 'react-helmet';

const Category = () => {
	return (
		<div>
			<Helmet>
				<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
				<title>Category | Danh mục sản phẩm</title>
				<base href={PATH.CATEGORY} />
			</Helmet>
			Category
		</div>
	);
};

export default Category;
