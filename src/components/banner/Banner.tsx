import banner from '@/assets/Images/banner/banner.jpg';
import { Image } from '@mantine/core';
import { Minus, PlusCircle } from 'react-feather';
import { Button } from '..';

const Banner = () => {
	return (
		<div className='py-5 flex gap-[10px]'>
			<div className='max-w-[416px] flex-shrink-0 h-fit'>
				<div className='relative max-h-[375px]  overflow-hidden '>
					<Image
						src={banner}
						className='img-header rounded !h-[375px] !object-right'
						alt='banner'
					/>
					<p className='absolute bottom-6 right-6 text-secondary z-10'>1/10</p>
					<div className='rounded-b bg-gradient-to-t from-[#00000098] to-transparent bg-opacity-10 absolute left-0 bottom-0 w-full h-[70%]'></div>
				</div>
				<p className='px-[18px] py-[10px] bg-[#ffecef] text-[#9a9293] text-xs rounded mt-4'>
					Trước khi bắt đầu, hãy nhớ chuẩn bị các tài liệu cần thiết và sản phẩm
					hợp lệ nhé. <span className='text-[#fe6380]'>Xem chi tiết</span>
				</p>
			</div>
			<div className='max-w-[486px]'>
				<div className='px-[20px] border border-solid border-borderColor rounded'>
					<div className='flex py-6 justify-between'>
						<div>
							<h3 className='text-lg text-black font-semibold'>
								1. Khuyến mãi cho Khách hàng mới
							</h3>
							<div className='mt-4 text-[#545454] text-[13px]'>
								<p>Đăng ký bằng số điện thoại và email</p>
								<p>
									Lưu ý: Bạn có thể đăng nhập trực tiếp bằng điện thoại và email
									đã đăng ký trên RAL for Business
								</p>
								<p className='text-[#a6a6a6]'>2 phút</p>
							</div>
						</div>
						<Minus color='#747474' />
					</div>
					<div className='flex justify-between py-6 border-t border-solid border-borderColor'>
						<div>
							<h3 className='text-lg text-black font-semibold'>
								2. Khuyến mãi cho KH thân thiết
							</h3>
						</div>
						<PlusCircle color='#747474' />
					</div>
					<div className='flex justify-between py-6 border-t border-solid border-borderColor'>
						<div>
							<h3 className='text-lg text-black font-semibold'>
								3. Vui lòng chờ kết quả
							</h3>
						</div>
						<PlusCircle color='#747474' />
					</div>
					<div className='flex justify-between py-6 border-t border-solid border-borderColor'>
						<div>
							<h3 className='text-lg text-black font-semibold'>
								4. Thiết lập tài khoản và bắt đầu mua sắm
							</h3>
						</div>
						<PlusCircle color='#747474' />
					</div>
				</div>
				<div className='flex gap-5 justify-end mt-11'>
					<Button variant='outline' className=' w-[190px] h-[36px]'>
						Đăng ký
					</Button>
					<Button className=' w-[190px] h-[36px]'>Shop Now</Button>
				</div>
			</div>
		</div>
	);
};

export default Banner;
