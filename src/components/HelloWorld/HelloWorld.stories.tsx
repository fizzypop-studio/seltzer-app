import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HelloWorld } from './HelloWorld';

export default {
	title: 'Components/HelloWorld',
	component: HelloWorld,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
} as ComponentMeta<typeof HelloWorld>;

const Template: ComponentStory<typeof HelloWorld> = () => <HelloWorld />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
	user: {
		name: 'Jane Doe',
	},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
