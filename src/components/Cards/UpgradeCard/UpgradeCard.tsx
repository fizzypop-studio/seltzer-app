/* eslint-disable import/named */
import * as S from './UpgradeCard.styles';
import { CardProps as MUICardProps } from '@mui/material/Card';
import { Button, Typography } from 'components';
import { ElectricBolt } from '@mui/icons-material';

type UpgradeCardProps = MUICardProps & {
	content: string;
	buttonText?: string;
};

export const UpgradeCard = ({
	content,
	buttonText,
	...props
}: UpgradeCardProps) => {
	return (
		<S.StyledUpgradeCard elevation={0} {...props}>
			<S.IconWrapper>
				<ElectricBolt />
			</S.IconWrapper>
			<Typography variant="body1" className="content">
				{content}
			</Typography>
			{buttonText && <Button text={buttonText} />}
		</S.StyledUpgradeCard>
	);
};
