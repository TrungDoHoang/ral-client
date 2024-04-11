import { PATH } from '@/constants';
import { Helmet } from 'react-helmet';

const Solution = () => {
	return (
		<div>
			<Helmet>
				<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
				<title>Giải pháp</title>
				<base href={PATH.SOLUTION} />
			</Helmet>
			Solution
		</div>
	);
};

export default Solution;
