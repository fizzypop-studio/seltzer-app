import { Typography } from 'components';
import * as S from './TextDivider.styles';

export type TextDividerProps = {
	text: string;
	fullWidth?: boolean;
};

export const TextDivider = ({ text, fullWidth }: TextDividerProps) => {
	return (
		<S.StyledTextDivider fullWidth={fullWidth}>
			<Typography variant="body1">
				<span>{text}</span>
			</Typography>
		</S.StyledTextDivider>
	);
};
