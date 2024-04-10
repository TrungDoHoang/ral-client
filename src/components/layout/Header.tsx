import logo from '@/assets/Images/logo.webp';
import Qr from '@/assets/Images/qr-code.svg';
import { PATH } from '@/constants';
import { Avatar, Container, Image } from '@mantine/core';
import { Download, PhoneCall, Search, ShoppingCart } from 'react-feather';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
	const navItem = [
		{
			path: PATH.ROOT,
			name: 'Tổng quan',
		},
		{
			path: PATH.CONTACT,
			name: 'Giải pháp',
		},
		{
			path: PATH.CONTACT,
			name: 'Sản phẩm',
		},
		{
			path: PATH.CONTACT,
			name: 'Tài nguyên',
		},
		{
			path: PATH.CONTACT,
			name: 'Site map',
		},
	];

	const navRights = [
		{
			path: PATH.ROOT,
			name: <Search />,
		},
		{
			path: PATH.ROOT,
			name: <PhoneCall />,
		},
		{
			path: PATH.ROOT,
			name: <Download />,
		},
		{
			path: PATH.ROOT,
			name: <Image src={Qr} className='!w-[20px] !h-[20px] img-header ' />,
		},
		{
			path: PATH.LOGIN,
			name: <Avatar radius='xl' />,
		},
		{
			path: PATH.CART,
			name: <ShoppingCart />,
		},
	];

	return (
		<header>
			{/* Navigation bar */}
			<Container
				size='xl'
				className='relative border-b border-solid border-borderColor flex m-auto bg-white text-black md:flex-wrap md:justify-start'
			>
				<div className='flex w-full h-[50px] lg:h-[58px] flex-wrap items-center px-3'>
					<h1 className='h-full mr-2'>
						<Link to={PATH.ROOT}>
							<Image
								src={logo}
								className='img-header transform scale-[1.2]'
								alt='logo'
							/>
						</Link>
					</h1>
					{/* Navigation links */}
					<div className='!visible  h-full items-center flex justify-between basis-auto flex-1'>
						<ul className='mr-auto flex flex-col lg:flex-row'>
							{navItem.map((item, idx) => (
								<li key={idx} className='mb-4 lg:mb-0 lg:pr-2 pointer-events'>
									<NavLink className='block lg:p-2' to={item.path}>
										{item.name}
									</NavLink>
								</li>
							))}
						</ul>
						<ul className='flex flex-col gap-[50px] items-center lg:flex-row'>
							{navRights.map((item, idx) => (
								<li key={idx} className='mb-4 lg:mb-0'>
									<NavLink className='block' to={item.path}>
										{item.name}
									</NavLink>
								</li>
							))}
						</ul>
					</div>
				</div>
			</Container>
		</header>
	);
};

export default Header;
