import { Image } from '@mantine/core';
import prod from '@/assets/Images/ral-prd.png';
const DuplicateImg = () => {
	return (
		<div className='flex items-end'>
			<Image src={prod} className='h-[137px]' />
			<Image src={prod} className='h-[97px] -translate-x-[20%]' />
		</div>
	);
};

export default DuplicateImg;
