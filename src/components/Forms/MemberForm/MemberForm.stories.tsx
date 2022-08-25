import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemberForm } from './MemberForm';

export default {
	title: 'Member Form',
	component: MemberForm,
} as ComponentMeta<typeof MemberForm>;

const handleCancel = () => console.log('Cancel');

export const Default: ComponentStory<typeof MemberForm> = () => (
	<MemberForm handleCancel={handleCancel} />
);
