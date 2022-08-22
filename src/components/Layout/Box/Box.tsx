import * as S from './Box.styles';
import { BoxProps as MUIBoxProps } from '@mui/material/Box';

export type BoxProps = MUIBoxProps & {
	hasElevation?: boolean;
};

export const Box = ({ hasElevation, ...props }: BoxProps) => {
	return <S.StyledBox sx={{ p: 6 }} hasElevation={hasElevation} {...props} />;
};
