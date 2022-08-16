/* eslint-disable import/named */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { UpgradeCard } from './UpgradeCard';

export default {
	title: 'Upgrade Card',
	component: UpgradeCard,
} as ComponentMeta<typeof UpgradeCard>;

export const Default: ComponentStory<typeof UpgradeCard> = () => (
	<UpgradeCard content="Do you want to upgrade?" buttonText="Upgrade" />
);
