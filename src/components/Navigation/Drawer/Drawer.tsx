import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {
	ChevronLeft,
	ChevronRight,
	Dashboard,
	Mail,
	Menu,
	MoveToInbox,
} from '@mui/icons-material';
import { Typography, IconButton } from 'components';
import * as S from './Drawer.styles';

type DrawerProps = {
	children: React.ReactNode;
};

export const Drawer = ({ children }: DrawerProps) => {
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const navigationItems = [{ label: 'Dashboard', icon: <Dashboard /> }];

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<S.AppBar position="fixed" open={open}>
				<Toolbar>
					<IconButton
						icon={<Menu />}
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						sx={{
							marginRight: 5,
							...(open && { display: 'none' }),
						}}
					/>
					<Typography variant="h6" noWrap>
						SELTZER
					</Typography>
				</Toolbar>
			</S.AppBar>
			<S.NavigationDrawer variant="permanent" open={open}>
				<S.DrawerHeader>
					<IconButton
						icon={
							theme.direction === 'rtl' ? (
								<ChevronRight />
							) : (
								<ChevronLeft />
							)
						}
						onClick={handleDrawerClose}
					/>
				</S.DrawerHeader>
				<Divider />
				<List>
					{navigationItems.map((item) => (
						<ListItem
							key={item.label}
							disablePadding
							sx={{ display: 'block' }}
						>
							<ListItemButton
								sx={{
									minHeight: 48,
									justifyContent: open ? 'initial' : 'center',
									px: 2.5,
								}}
							>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: open ? 3 : 'auto',
										justifyContent: 'center',
									}}
								>
									{item.icon}
								</ListItemIcon>
								<ListItemText
									primary={item.label}
									sx={{ opacity: open ? 1 : 0 }}
								/>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</S.NavigationDrawer>
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<S.DrawerHeader />
				{children}
			</Box>
		</Box>
	);
};
