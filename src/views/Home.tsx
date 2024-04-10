import { Banner, DuplicateImg, TitleSection } from '@/components';
import { Avatar, Card, Container, Image } from '@mantine/core';
import sell1 from '@/assets/Images/sell-1.jpg';
import sell2 from '@/assets/Images/sell-2.jpg';
import everyone from '@/assets/Images/everyone.jpg';
import itemImg from '@/assets/Images/item.jpg';
import itemImg2 from '@/assets/Images/item-2.jpg';
import { ChevronDown } from 'react-feather';
import { Link } from 'react-router-dom';
import { PATH } from '@/constants';

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
	const category = [
		{ name: 'Nhà cửa', isActive: true },
		{ name: 'Sàn Epoxy' },
		{ name: 'Sắt Thép' },
		{ name: 'Giao Thông' },
		{ name: 'Đồ Gỗ' },
		{ name: 'Tĩnh Điện' },
	];
	const subCategory = [
		{ image: itemImg, name: 'Nội thất', quantity: 18, slug: PATH.ROOT },
		{ image: itemImg2, name: 'Ngoại thất', quantity: 18, slug: PATH.ROOT },
		{ image: itemImg, name: 'Chống thấm', quantity: 18, slug: PATH.ROOT },
		{ image: itemImg2, name: 'Tự nhiên', quantity: 18, slug: PATH.ROOT },
		{ image: itemImg, name: 'Nghệ thuật', quantity: 18, slug: PATH.ROOT },
		{ image: itemImg2, name: 'Dụng cụ', quantity: 18, slug: PATH.ROOT },
	];
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
				{/* For everyone */}
				<section className='py-6'>
					<TitleSection
						en='For everyone'
						vi='Dành cho mọi người'
						desc='Trang trí và bảo vệ công trình nhà ở, thương mại'
					/>
					<div className='flex gap-x-[10px] gap-y-4'>
						<div className='relative max-w-[362px] max-h-[443px] flex justify-center mb-[30px]'>
							<Image src={everyone} w={362} h={443} className='rounded' />
							<Link
								to={PATH.ROOT}
								className='uppercase px-[20px] py-[8px] bg-[#ffecefad] text-primaryBg 
							absolute rounded-md border-primaryBg border border-solid top-14'
							>
								Xem tất cả
							</Link>
							<div className='border border-solid border-borderColor rounded absolute bg-white w-[80%] h-[60px] bottom-0 translate-y-[50%]'></div>
							<div className='absolute -bottom-[3%]'>
								<DuplicateImg />
							</div>
						</div>
						<div className='grid grid-cols-3 gap-x-[10px] gap-y-4'>
							{subCategory.slice(0, 6).map((item, idx) => (
								<Card
									key={idx}
									component='a'
									className='w-[171px] h-fit border border-solid border-borderColor rounded p-0'
									href={item.slug}
								>
									<Card.Section>
										<div className='relative'>
											<Image
												src={item.image}
												h={171}
												className='aspect-square'
											/>
											<div className='bg-gradient-to-t from-[#00000098] to-transparent bg-opacity-10 absolute left-0 bottom-0 w-full h-[70%]'></div>
										</div>
									</Card.Section>

									<p className='text-xl font-semibold px-4 py-5 flex justify-between items-baseline'>
										{item.name}
										<span className='text-secondary text-xs'>
											{item.quantity}
										</span>
									</p>
								</Card>
							))}
						</div>
					</div>
				</section>
				{/* For Industry */}
				<section className='py-6'>
					<TitleSection
						en='For industry'
						vi='Dành cho công nghiệp'
						desc='Sơn hiệu suất cao với tính năng đặc biệt và đòi hỏi khắt khe'
					/>
					<div className='flex gap-x-[10px] gap-y-4'>
						<div className='relative max-w-[362px] max-h-[443px] flex justify-center mb-[30px]'>
							<Image src={everyone} w={362} h={443} className='rounded' />
							<Link
								to={PATH.ROOT}
								className='uppercase px-[20px] py-[8px] bg-[#ffecefad] text-primaryBg 
							absolute rounded-md border-primaryBg border border-solid top-14'
							>
								Xem tất cả
							</Link>
							<div className='border border-solid border-borderColor rounded absolute bg-white w-[80%] h-[60px] bottom-0 translate-y-[50%]'></div>
							<div className='absolute -bottom-[3%]'>
								<DuplicateImg />
							</div>
						</div>
						<div className='grid grid-cols-3 gap-x-[10px] gap-y-4'>
							{subCategory.slice(0, 6).map((item, idx) => (
								<Card
									key={idx}
									component='a'
									className='w-[171px] h-fit border border-solid border-borderColor rounded p-0'
									href={item.slug}
								>
									<Card.Section>
										<div className='relative'>
											<Image
												src={item.image}
												h={171}
												className='aspect-square'
											/>
											<div className='bg-gradient-to-t from-[#00000098] to-transparent bg-opacity-10 absolute left-0 bottom-0 w-full h-[70%]'></div>
										</div>
									</Card.Section>

									<p className='text-xl font-semibold px-4 py-5 flex justify-between items-baseline'>
										{item.name}
										<span className='text-secondary text-xs'>
											{item.quantity}
										</span>
									</p>
								</Card>
							))}
						</div>
					</div>
				</section>
			</Container>
		</div>
	);
};

export default Home;
