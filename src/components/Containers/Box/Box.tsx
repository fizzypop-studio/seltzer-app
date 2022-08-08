/* eslint-disable import/named */
import * as S from './Box.styles';
import { BoxProps as MUIBoxProps } from '@mui/material/Box';

export const Box = ({ ...props }: MUIBoxProps) => {
	return <S.StyledBox sx={{ p: 6 }} {...props} />;
};
