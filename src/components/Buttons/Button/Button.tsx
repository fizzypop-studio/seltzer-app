import * as S from './Button.styles';
import { ButtonProps as MUIButtonProps } from '@mui/material/Button';

export type ButtonProps = MUIButtonProps & {
	text: string;
};

export const Button = ({
	text,
	variant = 'contained',
	...props
}: ButtonProps) => {
	return (
		<S.StyledButton variant={variant} {...props}>
			{text}
		</S.StyledButton>
	);
};
