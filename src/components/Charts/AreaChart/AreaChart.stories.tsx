import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AreaChart } from './AreaChart';

export default {
	title: 'Area Chart',
	component: AreaChart,
} as ComponentMeta<typeof AreaChart>;

export const Default: ComponentStory<typeof AreaChart> = () => <AreaChart />;
