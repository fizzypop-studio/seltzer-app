/* eslint-disable import/named */
import * as S from './Container.styles';
import { ContainerProps as MUIContainerProps } from '@mui/material/Container';

export interface ContainerProps extends MUIContainerProps {
	centered?: boolean;
}

export const Container = ({ ...props }: ContainerProps) => {
	return <S.StyledContainer {...props} />;
};
