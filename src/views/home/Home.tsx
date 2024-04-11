import { Banner, Button, DuplicateImg, TitleSection } from '@/components';
import { Avatar, Card, Container, Image } from '@mantine/core';
import sell1 from '@/assets/Images/sell-1.jpg';
import sell2 from '@/assets/Images/sell-2.jpg';
import everyone from '@/assets/Images/everyone.jpg';
import itemImg from '@/assets/Images/item.jpg';
import itemImg2 from '@/assets/Images/item-2.jpg';
import colorImg1 from '@/assets/Images/color-1.png';
import colorImg2 from '@/assets/Images/color-2.png';
import colorImg3 from '@/assets/Images/color-3.png';
import card from '@/assets/Images/card.png';
import card2 from '@/assets/Images/card-2.png';
import card3 from '@/assets/Images/card-3.svg';
import map from '@/assets/Images/map.svg';
import contact from '@/assets/Images/contact/contact.jpg';
import contact2 from '@/assets/Images/contact/contact-2.jpg';
import contact3 from '@/assets/Images/contact/contact-3.jpg';
import contact4 from '@/assets/Images/contact/contact-4.jpg';
import policy1 from '@/assets/Images/policy/policy-1.svg';
import policy2 from '@/assets/Images/policy/policy-2.svg';
import policy3 from '@/assets/Images/policy/policy-3.svg';
import { Helmet } from 'react-helmet';
import { ArrowUpRight, ChevronDown } from 'react-feather';
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
	const colors = [
		{ image: colorImg1, name: 'Màu RAL', code: 'C35', slug: PATH.ROOT },
		{ image: colorImg2, name: 'Màu NCS', code: 'C35', slug: PATH.ROOT },
		{ image: colorImg3, name: 'Màu RAL', code: 'C35', slug: PATH.ROOT },
		{ image: colorImg1, name: 'Màu RAL', code: 'C35', slug: PATH.ROOT },
	];
	return (
		<div className='container h-full '>
			<Helmet>
				<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
				<title>Trang chủ</title>
				<base href={PATH.ROOT} />
			</Helmet>
			<Container size='md' className='mx-auto'>
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
							<Image src={everyone} className='rounded' />
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
						<div className='grid grid-cols-3 gap-x-3 gap-y-4'>
							{subCategory.slice(0, 6).map((item, idx) => (
								<Card
									key={idx}
									component='a'
									className='w-[175px] h-fit border border-solid border-borderColor rounded p-0'
									href={item.slug}
								>
									<Card.Section>
										<div className='relative'>
											<Image
												src={item.image}
												h={175}
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
					<div className='flex gap-x-3 gap-y-4'>
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
						<div className='grid grid-cols-3 gap-x-3 gap-y-4'>
							{subCategory.slice(0, 6).map((item, idx) => (
								<Card
									key={idx}
									component='a'
									className='w-[175px] h-fit border border-solid border-borderColor rounded p-0'
									href={item.slug}
								>
									<Card.Section>
										<div className='relative'>
											<Image
												src={item.image}
												h={175}
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
				{/* Color trend */}
				<section className='py-6'>
					<TitleSection
						en='COLOR TRENDS'
						vi='XU HƯỚNG MÀU SẮC'
						desc='132 màu tuyển chọn giúp bạn chọn màu bạn yêu thích cho ngôi nhà của mình'
					/>
					<div className='grid grid-cols-4 gap-x-[13px] gap-y-[13px]'>
						{colors.slice(0, 4).map((item, idx) => (
							<Card
								key={idx}
								component='a'
								className='w-[216px] h-fit border border-solid border-borderColor rounded p-0'
								href={item.slug}
							>
								<Card.Section>
									<Image src={item.image} h={216} className='aspect-square' />
								</Card.Section>

								<p className='text-base font-bold px-4 py-5 '>
									{item.name}
									<span className='text-secondary text-xs'>
										Mã số: {item.code}
									</span>
								</p>
							</Card>
						))}
					</div>
				</section>
				{/* Card */}
				<section className='py-6 max-w-full'>
					<div className='flex justify-between gap-4 mb-4'>
						<div className='border border-solid border-borderColor rounded p-7 text-right'>
							<div className='flex justify-between'>
								<Image src={card} alt='card' />
								<div>
									<p className='text-[26px]'>Thẻ màu miễn phí</p>
									<Button variant='outline' mt={19} w={189}>
										Đặt ngay
									</Button>
								</div>
							</div>
							<p className='mt-6 text-sm'>
								Bảng màu gồm 132 sắc thái được tuyển chọn cẩn thận, với câu
								chuyện hấp dẫn đằng sau, sẽ giúp bạn chọn được màu sắc yêu thích
								cho ngôi nhà của mình.
							</p>
						</div>
						<div className='border border-solid border-borderColor rounded p-7 text-right'>
							<div className='flex justify-between'>
								<Image src={card} alt='card' />
								<div>
									<p className='text-[26px]'>Thẻ màu miễn phí</p>
									<Button variant='outline' mt={19} w={189}>
										Đặt ngay
									</Button>
								</div>
							</div>
							<p className='mt-6 text-sm'>
								Bảng màu gồm 132 sắc thái được tuyển chọn cẩn thận, với câu
								chuyện hấp dẫn đằng sau, sẽ giúp bạn chọn được màu sắc yêu thích
								cho ngôi nhà của mình.
							</p>
						</div>
					</div>

					<div className='relative border border-solid border-borderColor rounded flex max-w-full'>
						<Image
							src={card2}
							w={448}
							h={611}
							className='img-card'
							style={{ objectPosition: '67.10608124% 50%' }}
						/>
						<Image
							src={card3}
							w={47}
							className='absolute -scale-x-100 translate-x-1/4 translate-y-1/2 top-24 right-1/2'
						/>
						<div className='p-10'>
							<h3 className='text-3xl font-bold'>Cần một số lời khuyên?</h3>
							<p className='text-xl italic mt-12 mb-24'>
								Chuyên gia tư vấn màu sắc của chúng tôi luôn sẵn sàng và chờ đợi
								để giúp bạn biến phong cách của mình thành hiện thực.
								<br />
								<br />
								Nếu bạn muốn được tư vấn cá nhân về cách sử dụng Carte Blanche
								tại nhà, hãy đặt lịch hẹn ngay hôm nay.
							</p>

							<Button>Đặt lịch ngay</Button>
							<p className='mt-8 mb-4'>Hoặc truy cập</p>
							<Button variant='outline'>Trung tâm trợ giúp</Button>
						</div>
					</div>
				</section>
				{/* About us */}
				<section className='py-6'>
					<TitleSection
						en='ABOUT  US'
						vi='VỀ CHÚNG TÔI'
						desc='Điều gì khiến RAL trở nên đặc biệt ? Tìm hiểu năng lực của chúng tôi'
					/>
					<div className='flex border border-solid border-borderColor rounded mb-4'>
						<div className='w-80 p-10 flex flex-col justify-between'>
							<div>
								<h3 className='text-[#737373] font-bold text-justify text-[40px]'>
									123 +
								</h3>
								<p className='text-[#cdc9c9] text-2xl'>Sản phẩm</p>
							</div>
							<div>
								<h3 className='text-[#737373] font-bold text-justify text-[40px]'>
									10,000 +
								</h3>
								<p className='text-[#cdc9c9] text-2xl'>Dự án</p>
							</div>
							<div>
								<h3 className='text-[#737373] font-bold text-justify text-[40px]'>
									985 +
								</h3>
								<p className='text-[#cdc9c9] text-2xl'>Nhà kinh doanh</p>
							</div>
						</div>
						<div className='flex-1 p-10'>
							<Image src={map} className='img-header' alt='map' />
						</div>
					</div>

					<div className='flex gap-2.5 max-h-[364px] mb-5'>
						<div className='relative max-w-[266px] max-h-[364px] overflow-hidden '>
							<Image
								src={contact}
								className='img-header rounded font-semibold !object-right'
								alt='contact'
							/>
							<p className='absolute w-full bottom-5 text-center text-[#dfe2e7] text-lg z-10'>
								Thăm quan RAL
							</p>
							<ArrowUpRight
								color='#dfe2e7'
								className='absolute bottom-2 right-2 z-20'
								size={47}
							/>
							<div className='rounded-b bg-gradient-to-t from-[#00000098] to-transparent bg-opacity-10 absolute left-0 bottom-0 w-full h-[70%]'></div>
						</div>

						<div className='flex-1 h-full flex flex-col gap-2.5'>
							<div className='grid grid-cols-2 gap-2.5'>
								<div className='relative max-h-[177px] overflow-hidden '>
									<Image
										src={contact2}
										className='img-header rounded font-semibold !object-right'
										alt='contact'
									/>
									<p className='absolute w-full bottom-5 text-center text-[#dfe2e7] text-lg z-10'>
										Trung tâm trợ giúp
									</p>
									<ArrowUpRight
										color='#dfe2e7'
										className='absolute bottom-2 right-2 z-20'
										size={47}
									/>
									<div className='rounded-b bg-gradient-to-t from-[#00000098] to-transparent bg-opacity-10 absolute left-0 bottom-0 w-full h-[70%]'></div>
								</div>
								<div className='relative max-h-[177px] overflow-hidden '>
									<Image
										src={contact3}
										className='img-header rounded font-semibold !object-right'
										alt='contact'
									/>
									<p className='absolute w-full bottom-5 text-center text-[#dfe2e7] text-lg z-10'>
										RAL Labs
									</p>
									<ArrowUpRight
										color='#dfe2e7'
										className='absolute bottom-2 right-2 z-20'
										size={47}
									/>
									<div className='rounded-b bg-gradient-to-t from-[#00000098] to-transparent bg-opacity-10 absolute left-0 bottom-0 w-full h-[70%]'></div>
								</div>
							</div>
							<div className='relative max-h-[177px] rounded overflow-hidden '>
								<Image
									src={contact4}
									className='img-header rounded '
									style={{
										transform: 'translate(-0px, -50px) rotate(0deg)',
									}}
									alt='contact'
								/>
								<p className='absolute w-full bottom-5 text-center text-[#dfe2e7] text-lg z-10'>
									Cộng đồng người dùng RAL
								</p>
								<ArrowUpRight
									color='#dfe2e7'
									className='absolute bottom-2 right-2 z-20'
									size={47}
								/>
								<div className='rounded-b bg-gradient-to-t from-[#00000098] to-transparent bg-opacity-10 absolute left-0 bottom-0 w-full h-[70%]'></div>
							</div>
						</div>
					</div>

					<div className='flex justify-between items-center'>
						<h3 className='text-secondary text-xl font-semibold'>Our Brands</h3>
						<Link
							to={PATH.ROOT}
							className='uppercase w-[100px] h-[35px] flex justify-center items-center bg-[#ffecefad] text-primaryBg 
							 rounded-md '
						>
							RAL
						</Link>
						<Link
							to={PATH.ROOT}
							className='uppercase w-[100px] h-[35px] flex justify-center items-center bg-[#ffecefad] text-primaryBg 
							 rounded-md '
						>
							INCHEM
						</Link>
						<Link
							to={PATH.ROOT}
							className='uppercase w-[100px] h-[35px] flex justify-center items-center bg-[#ffecefad] text-primaryBg 
							 rounded-md '
						>
							TIKKURILA
						</Link>
						<Link
							to={PATH.ROOT}
							className='uppercase w-[100px] h-[35px] flex justify-center items-center bg-[#ffecefad] text-primaryBg 
							 rounded-md '
						>
							RAL
						</Link>
						<Link
							to={PATH.ROOT}
							className='uppercase w-[100px] h-[35px] flex justify-center items-center bg-[#ffecefad] text-primaryBg 
							 rounded-md '
						>
							INCHEM
						</Link>
						<Link
							to={PATH.ROOT}
							className='uppercase w-[100px] h-[35px] flex justify-center items-center bg-[#ffecefad] text-primaryBg 
							 rounded-md '
						>
							TIKKURILA
						</Link>
						<Link
							to={PATH.ROOT}
							className='uppercase w-[100px] h-[35px] flex justify-center items-center bg-[#ffecefad] text-primaryBg 
							 rounded-md '
						>
							CARPOLY
						</Link>
					</div>
				</section>
				{/* Policy */}
				<section className='pb-20 flex justify-between'>
					<div className='flex items-center'>
						<Image src={policy1} w={27} h={27} />
						<div className='px-7'>
							<p className='font-semibold text-[11px] text-[#545454]'>
								Về chúng tôi
							</p>
							<p className='ont-semibold text-[11px] text-primaryBg'>
								Thông tin công ty
							</p>
						</div>
					</div>
					<div className='flex items-center'>
						<Image src={policy2} w={27} h={27} />
						<div className='px-7'>
							<p className='font-semibold text-[11px] text-[#545454]'>
								Tài liệu kỹ thuật
							</p>
							<p className='ont-semibold text-[11px] text-primaryBg'>
								Catalogue, Datasheet, MSDS
							</p>
						</div>
					</div>
					<div className='flex items-center'>
						<Image src={policy3} w={27} h={27} />
						<div className='px-7'>
							<p className='font-semibold text-[11px] text-[#545454]'>
								Báo cáo thường niên
							</p>
							<p className='ont-semibold text-[11px] text-primaryBg'>
								Thị trường & công nghệ
							</p>
						</div>
					</div>
				</section>
			</Container>
		</div>
	);
};

export default Home;
