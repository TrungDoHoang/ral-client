import { ButtonPropsI } from '@/types/components';
import { Button as Btn } from '@mantine/core';

const Button = (props: ButtonPropsI) => {
	return (
		<Btn
			{...props}
			className={`${props.className} ${
				props.variant == 'outline'
					? 'bg-white text-primaryBg border-primaryBg'
					: 'bg-primaryBg text-white'
			} `}
		>
			{props.children}
		</Btn>
	);
};

export default Button;
