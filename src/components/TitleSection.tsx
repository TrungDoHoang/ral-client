import { TitleSectionPropI } from '@/types/components';

const TitleSection = (props: TitleSectionPropI) => {
	return (
		<div className='border-solid border-primaryBg border-l-[40px] pl-3 my-5'>
			<p className='uppercase font-bold flex items-center whitespace-pre-wrap text-[27px]'>
				<span className='text-primaryBg'>{props.en}</span> | {props.vi}
			</p>
			<p className='text-secondary text-xl'>{props.desc}</p>
		</div>
	);
};

export default TitleSection;
