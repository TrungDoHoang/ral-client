import youtube from '@/assets/Images/youtube.svg';
import lazada from '@/assets/Images/lazada.svg';
import shoppe from '@/assets/Images/shoppe.svg';
import facebook from '@/assets/Images/facebook.svg';
import logo from '@/assets/Images/logo-footer.png';
import { Container, Image } from '@mantine/core';
import { PATH } from '@/constants';
import { Link } from 'react-router-dom';
import { Button } from '@/components';

const Footer = () => {
	const social = [
		{
			name: 'Tiktok',
			icon: youtube,
		},
		{
			name: 'Youtube',
			icon: youtube,
		},
		{
			name: 'Shopee',
			icon: shoppe,
		},
		{
			name: 'Lazada',
			icon: lazada,
		},
		{
			name: 'Tiki',
			icon: shoppe,
		},
		{
			name: 'Facebook',
			icon: facebook,
		},
	];

	const footerList = [
		{
			title: 'Công ty',
			listContent: [
				{ link: PATH.ROOT, name: 'Tại sao chọn RAL?' },
				{ link: PATH.ROOT, name: 'Tin cậy và bảo mật' },
				{ link: PATH.ROOT, name: 'Đám mây mở' },
				{ link: PATH.ROOT, name: 'Tại sao chọn RAL?' },
				{ link: PATH.ROOT, name: 'Tin cậy và bảo mật' },
				{ link: PATH.ROOT, name: 'Đám mây mở' },
				{ link: PATH.ROOT, name: 'Tại sao chọn RAL?' },
				{ link: PATH.ROOT, name: 'Tin cậy và bảo mật' },
				{ link: PATH.ROOT, name: 'Đám mây mở' },
			],
		},
		{
			title: 'Sản phẩm và giá cả',
			listContent: [
				{ link: PATH.ROOT, name: 'Tại sao chọn RAL?' },
				{ link: PATH.ROOT, name: 'Tin cậy và bảo mật' },
				{ link: PATH.ROOT, name: 'Đám mây mở' },
				{ link: PATH.ROOT, name: 'Tại sao chọn RAL?' },
				{ link: PATH.ROOT, name: 'Tin cậy và bảo mật' },
				{ link: PATH.ROOT, name: 'Đám mây mở' },
				{ link: PATH.ROOT, name: 'Tại sao chọn RAL?' },
				{ link: PATH.ROOT, name: 'Tin cậy và bảo mật' },
				{ link: PATH.ROOT, name: 'Đám mây mở' },
				{ link: PATH.ROOT, name: 'Tại sao chọn RAL?' },
				{ link: PATH.ROOT, name: 'Tin cậy và bảo mật' },
				{ link: PATH.ROOT, name: 'Đám mây mở' },
			],
		},
		{
			title: 'Giải pháp',
			listContent: [
				{ link: PATH.ROOT, name: 'Tại sao chọn RAL?' },
				{ link: PATH.ROOT, name: 'Tin cậy và bảo mật' },
				{ link: PATH.ROOT, name: 'Đám mây mở' },
				{ link: PATH.ROOT, name: 'Tại sao chọn RAL?' },
				{ link: PATH.ROOT, name: 'Tin cậy và bảo mật' },
				{ link: PATH.ROOT, name: 'Đám mây mở' },
			],
		},
		{
			title: 'Tài nguyên',
			listContent: [
				{ link: PATH.ROOT, name: 'Tại sao chọn RAL?' },
				{ link: PATH.ROOT, name: 'Tin cậy và bảo mật' },
				{ link: PATH.ROOT, name: 'Đám mây mở' },
				{ link: PATH.ROOT, name: 'Tại sao chọn RAL?' },
				{ link: PATH.ROOT, name: 'Tin cậy và bảo mật' },
				{ link: PATH.ROOT, name: 'Đám mây mở' },
				{ link: PATH.ROOT, name: 'Tại sao chọn RAL?' },
				{ link: PATH.ROOT, name: 'Tin cậy và bảo mật' },
				{ link: PATH.ROOT, name: 'Đám mây mở' },
				{ link: PATH.ROOT, name: 'Tại sao chọn RAL?' },
				{ link: PATH.ROOT, name: 'Tin cậy và bảo mật' },
				{ link: PATH.ROOT, name: 'Đám mây mở' },
			],
		},
		{
			title: 'Tương tác RAL',
			listContent: [
				{ link: PATH.ROOT, name: 'Tại sao chọn RAL?' },
				{ link: PATH.ROOT, name: 'Tin cậy và bảo mật' },
				{ link: PATH.ROOT, name: 'Đám mây mở' },
				{ link: PATH.ROOT, name: 'Tại sao chọn RAL?' },
				{ link: PATH.ROOT, name: 'Tin cậy và bảo mật' },
				{ link: PATH.ROOT, name: 'Đám mây mở' },
				{ link: PATH.ROOT, name: 'Tại sao chọn RAL?' },
				{ link: PATH.ROOT, name: 'Tin cậy và bảo mật' },
				{ link: PATH.ROOT, name: 'Đám mây mở' },
				{ link: PATH.ROOT, name: 'Tại sao chọn RAL?' },
				{ link: PATH.ROOT, name: 'Tin cậy và bảo mật' },
				{ link: PATH.ROOT, name: 'Đám mây mở' },
			],
		},
	];
	return (
		<footer>
			<Container size='xl' className='mb-5'>
				<div className='flex gap-[32px]'>
					<p>Theo dõi chúng tôi</p>
					<div className='flex gap-4'>
						{social.map((item, idx) => (
							<div
								key={idx}
								className='flex flex-col items-center justify-between'
							>
								<Image
									src={item.icon}
									className='!w-[20px] !h-[20px] img-header '
								/>
								<p className='text-secondary text-[9px]'>{item.name}</p>
							</div>
						))}
					</div>
				</div>
			</Container>
			<div className='bg-[#1d1d1d] text-white'>
				<Container size='xl' className='grid grid-cols-5 py-[25px]'>
					{footerList.map((item, idx) => (
						<div key={idx}>
							<b className='text-sm'>{item.title}</b>
							<ul>
								{item.listContent.map((content, index) => (
									<li key={index} className='text-xs mt-1 text-secondary'>
										<Link to={content.link}>{content.name}</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</Container>
				<Container
					size='xl'
					className='border-t border-t-white border-solid text-xs text-secondary flex items-center justify-between'
				>
					<div className='flex items-center gap-3'>
						<Image className='img-header !h-[56px] !w-[56px]' src={logo} />
						<p>
							Giới thiệu về RAL | Bảo mật | Điều khoản trang web | Chính sách
							bán hàng tại RAL
						</p>
					</div>
					<div className='flex items-center gap-3'>
						<p>Đăng ký nhận khuyến mãi từ RAL</p>
						<Button h={25} className='text-xs'>
							Subscribe
						</Button>
					</div>
				</Container>
			</div>
		</footer>
	);
};

export default Footer;
