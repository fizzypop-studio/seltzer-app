import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import {
	AccountCircle,
	ChevronLeft,
	ChevronRight,
	Dashboard,
	ElectricBolt,
	Group,
	Search,
	Menu as MenuIcon,
	More,
	Notifications,
} from '@mui/icons-material';
import {
	ActionModal,
	Box,
	Typography,
	IconButton,
	Toolbar,
	IconActionCard,
} from 'components';
import { useWindowDimensions } from 'hooks/use-window-dimensions';
import { useRouter } from 'hooks/use-router';
import { useTranslation } from 'react-i18next';
import * as S from './Drawer.styles';

type DrawerProps = {
	children: React.ReactNode;
};

export const Drawer = ({ children }: DrawerProps) => {
	const [open, setOpen] = useState<boolean>(false);
	const [logoutModalOpen, setLogoutModalOpen] = useState<boolean>(false);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
		useState<null | HTMLElement>(null);
	const navigate = useNavigate();
	const theme = useTheme();
	const { isMobile } = useWindowDimensions();
	const { t } = useTranslation();
	const { drawerRoutes } = useRouter();

	const notificationCount = 17;

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

	const handleOpenLogoutModal = () => {
		setLogoutModalOpen(true);
	};

	const handleCloseLogoutModal = () => {
		setLogoutModalOpen(false);
	};

	const handleLogout = () => {
		navigate('/logout');
	};

	const handleUpgrade = () => {
		console.log('Upgrade Account');
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
			<MenuItem onClick={() => navigate('/dashboard/account')}>
				{t('navigation.myAccount')}
			</MenuItem>
			<MenuItem onClick={handleOpenLogoutModal}>
				{t('navigation.pages.logout')}
			</MenuItem>
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
						<Badge badgeContent={notificationCount} color="error">
							<Notifications />
						</Badge>
					}
					size="large"
					color="inherit"
				></IconButton>
				<Typography variant="body1">
					{t('navigation.pages.notifications')}
				</Typography>
			</MenuItem>
			<MenuItem onClick={handleProfileMenuOpen}>
				<IconButton
					icon={<AccountCircle />}
					size="large"
					color="inherit"
				></IconButton>
				<Typography variant="body1">
					{t('navigation.myAccount')}
				</Typography>
			</MenuItem>
		</Menu>
	);

	return (
		<S.Wrapper sx={{ display: 'flex' }}>
			<CssBaseline />
			<S.AppBar position="fixed" open={open} elevation={0}>
				<Toolbar>
					<IconButton
						icon={<MenuIcon />}
						color="inherit"
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
							placeholder={t('general.placeholders.search')}
						/>
					</S.Search>
					<Box sx={{ flexGrow: 1 }} />
					<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
						<IconButton
							icon={
								<Badge
									badgeContent={notificationCount}
									color="error"
								>
									<Notifications />
								</Badge>
							}
							size="large"
							color="inherit"
						></IconButton>
						<IconButton
							icon={
								<Avatar
									alt="Bruce Wayne"
									src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
								/>
							}
							onClick={handleProfileMenuOpen}
							sx={{ p: 0 }}
						></IconButton>
					</Box>
					<Box sx={{ display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							icon={<More />}
							size="large"
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
				<List>
					{drawerRoutes.map((item) => (
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
								onClick={() => navigate(item.to)}
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
				{open && (
					<S.DrawerFooter>
						<IconActionCard
							content="Upgrade to PRO for more users"
							icon={<ElectricBolt />}
							buttonText="Upgrade"
							onClick={handleUpgrade}
						/>
					</S.DrawerFooter>
				)}
			</S.NavigationDrawer>
			<Box
				component="main"
				className="drawer-content"
				sx={{ flexGrow: 1, p: 3 }}
			>
				<S.DrawerHeader />
				{children}
			</Box>
			{renderMobileMenu}
			{renderMenu}
			<ActionModal
				open={logoutModalOpen}
				onClose={handleCloseLogoutModal}
				title="Logout User"
				content="Are you sure you want to log out?"
				actionText="Logout"
				onActionClick={handleLogout}
				onRequestClose={handleCloseLogoutModal}
			/>
		</S.Wrapper>
	);
};
