import { Banner } from '@/components';
import { Avatar, Container } from '@mantine/core';
import sell1 from '@/assets/Images/sell-1.jpg';
import sell2 from '@/assets/Images/sell-2.jpg';
import { ChevronDown } from 'react-feather';

const Home = () => {
	const bestSeller = [
		{ image: sell1 },
		{ image: sell2 },
		{ image: sell1 },
		{ image: sell2 },
		{ image: sell1 },
		{ image: sell2 },
		{ image: sell2 },
		{ image: sell2 },
		{ image: sell2 },
		{ image: sell2 },
	];
	const category = [{ name: 'Nhà cửa', isActive: true }, { name: 'Sàn Epoxy' }];
	return (
		<div className='container h-full '>
			<Container size='lg' className='mx-auto  w-fit'>
				<Banner />
				{/* Best seller */}
				<section className='text-secondary flex justify-between py-6'>
					<h3 className='text-[44px] font-semibold'>Best Seller</h3>
					<div className='flex gap-1'>
						{bestSeller.slice(0, 6).map((seller, idx) => (
							<Avatar key={idx} size={64} src={seller.image} />
						))}

						{bestSeller.length > 6 && (
							<Avatar size={64} color='gray' radius='xl'>
								+{bestSeller.slice(6).length}
							</Avatar>
						)}
					</div>
				</section>
				{/* Category */}
				<section className='flex py-6 gap-5'>
					<div className='flex flex-wrap gap-4'>
						{category.map((item, idx) => (
							<div
								key={idx}
								className={`border border-solid border-borderColor rounded-full text-[16px] py-1 px-7 ${
									item.isActive ? 'bg-[#e8e8e8] font-bold' : ''
								}`}
							>
								{item.name}
							</div>
						))}
					</div>
					<ChevronDown size={30} />
				</section>
			</Container>
		</div>
	);
};

export default Home;
