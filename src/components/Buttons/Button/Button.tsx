import * as S from './Button.styles';
import { ButtonProps as MUIButtonProps } from '@mui/material/Button';

export interface ButtonProps extends MUIButtonProps {
	text: string;
}

export const Button = ({ text, ...props }: ButtonProps) => {
	return <S.StyledButton {...props}>{text}</S.StyledButton>;
};
