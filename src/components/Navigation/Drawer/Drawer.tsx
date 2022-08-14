import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {
	AccountCircle,
	ChevronLeft,
	ChevronRight,
	Dashboard,
	Search,
	Menu as MenuIcon,
	More,
	Notifications,
} from '@mui/icons-material';
import { Box, Typography, IconButton } from 'components';
import { useWindowDimensions } from 'hooks/use-window-dimensions';
import * as S from './Drawer.styles';

type DrawerProps = {
	children: React.ReactNode;
};

export const Drawer = ({ children }: DrawerProps) => {
	const theme = useTheme();
	const [open, setOpen] = useState<boolean>(false);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
		useState<null | HTMLElement>(null);
	const { isMobile } = useWindowDimensions();

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const menuId = 'primary-search-account-menu';
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			id={menuId}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			<MenuItem onClick={handleMenuClose}>My account</MenuItem>
		</Menu>
	);

	const mobileMenuId = 'primary-search-account-menu-mobile';
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem>
				<IconButton
					icon={
						<Badge badgeContent={17} color="error">
							<Notifications />
						</Badge>
					}
					size="large"
					aria-label="show 17 new notifications"
					color="inherit"
				></IconButton>
				<p>Notifications</p>
			</MenuItem>
			<MenuItem onClick={handleProfileMenuOpen}>
				<IconButton
					icon={<AccountCircle />}
					size="large"
					aria-label="account of current user"
					aria-controls="primary-search-account-menu"
					aria-haspopup="true"
					color="inherit"
				></IconButton>
				<p>Profile</p>
			</MenuItem>
		</Menu>
	);

	const navigationItems = [{ label: 'Dashboard', icon: <Dashboard /> }];

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<S.AppBar position="fixed" open={open}>
				<Toolbar>
					<IconButton
						icon={<MenuIcon />}
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
					<S.Search>
						<S.SearchIconWrapper>
							<Search />
						</S.SearchIconWrapper>
						<S.StyledInputBase
							placeholder="Search…"
							inputProps={{ 'aria-label': 'search' }}
						/>
					</S.Search>
					<Box sx={{ flexGrow: 1 }} />
					<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
						<IconButton
							icon={
								<Badge badgeContent={17} color="error">
									<Notifications />
								</Badge>
							}
							size="large"
							aria-label="show 17 new notifications"
							color="inherit"
						></IconButton>
						<IconButton
							icon={<AccountCircle />}
							size="large"
							edge="end"
							aria-label="account of current user"
							aria-controls={menuId}
							aria-haspopup="true"
							onClick={handleProfileMenuOpen}
							color="inherit"
						></IconButton>
					</Box>
					<Box sx={{ display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							icon={<More />}
							size="large"
							aria-label="show more"
							aria-controls={mobileMenuId}
							aria-haspopup="true"
							onClick={handleMobileMenuOpen}
							color="inherit"
						></IconButton>
					</Box>
				</Toolbar>
			</S.AppBar>
			<S.NavigationDrawer
				ModalProps={{
					keepMounted: isMobile,
				}}
				variant={isMobile ? 'temporary' : 'permanent'}
				open={open}
			>
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
			{renderMobileMenu}
			{renderMenu}
		</Box>
	);
};
