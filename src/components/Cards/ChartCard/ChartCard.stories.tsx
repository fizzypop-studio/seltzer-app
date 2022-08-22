import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChartCard } from './ChartCard';
import { AreaChart } from 'components';

export default {
	title: 'Chart Card',
	component: ChartCard,
} as ComponentMeta<typeof ChartCard>;

export const Default: ComponentStory<typeof ChartCard> = () => (
	<ChartCard
		title="Weekly Sales"
		subtitle="(+43%) than last year"
		chart={<AreaChart />}
	/>
);
