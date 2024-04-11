import { PATH } from '@/constants';
import { Helmet } from 'react-helmet';

const Sitemap = () => {
	return (
		<div>
			<Helmet>
				<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
				<title>Sitemap</title>
				<base href={PATH.SITEMAP} />
			</Helmet>
			Sitemap
		</div>
	);
};

export default Sitemap;
