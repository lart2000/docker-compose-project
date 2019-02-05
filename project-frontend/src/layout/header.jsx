import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { fade } from '@material-ui/core/styles/colorManipulator';
const drawerWidth = 240;
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Notifications from '@material-ui/icons/Notifications'
import MailIcon from '@material-ui/icons/Mail';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import FaceIcon from "@material-ui/icons/Face";
import FingerPrintIcon from "@material-ui/icons/Fingerprint";
import { Avatar, Grid, IconButton, Button, Menu, MenuItem } from '@material-ui/core';
import menu from './menu.jsx';
import Link from 'next/link';
const styles = theme => ({
	root: {
		display: 'flex',
	},
	appBar: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	toolbar: {
		display: 'flex',
		justifyContent: 'space-between'

	},
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing.unit * 3,
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing.unit,
			width: 'auto',
		},
	},
	searchIcon: {
		width: theme.spacing.unit * 9,
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
		width: '100%',
	},
	inputInput: {
		paddingTop: theme.spacing.unit,
		paddingRight: theme.spacing.unit,
		paddingBottom: theme.spacing.unit,
		paddingLeft: theme.spacing.unit * 10,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: 120,
			'&:focus': {
				width: 200,
			},
		},
	},
	iconEnabled: {

	}
});
class PermanentDrawerLeft extends React.Component {
	state = {
		anchorEl: null,
	};

	handleClick = event => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleClose = () => {
		this.setState({ anchorEl: null });
	};

	constructor(props) {
		super(props);
	}

	render() {
		const {
			props,
		} = this;
		const { anchorEl } = this.state;
		const { classes } = props;

		return (
			<div className={classes.root}>
				<CssBaseline />
				<AppBar position="fixed" className={classes.appBar}>
					<Toolbar className={classes.toolbar}>
						<Typography variant="h6" color="inherit" noWrap>
							Permanent drawer
              			</Typography>
						<Grid container style={{ maxWidth: "400px" }} justify="flex-end">
							<Link prefetch passHref href="/chat-room">
								<a style={{ textDecoration: "none" }}>
									<IconButton>
										<MailIcon />
									</IconButton>
								</a>
							</Link>
							<Link prefetch passHref href="/support">
								<a style={{ textDecoration: "none" }}>
									<IconButton>
										<Notifications />
									</IconButton>
								</a>
							</Link>
							<Button
							aria-owns={anchorEl ? 'simple-menu' : undefined}
							aria-haspopup="true"
							onClick={this.handleClick}
							>
							{"lesly ramirez"}
							<ExpandMoreIcon></ExpandMoreIcon>
							</Button>
							<Menu
								id="simple-menu"
								anchorEl={anchorEl}
								open={Boolean(anchorEl)}
								onClose={this.handleClose}
								>
								<MenuItem onClick={this.handleClose}><FaceIcon/>Perfil</MenuItem>
								<MenuItem onClick={this.handleClose}><FingerPrintIcon/>Cambiar Contraseña</MenuItem>
								<MenuItem onClick={this.handleClose}><ExitToAppIcon/>Logout</MenuItem>
							</Menu>
							<Avatar src="/static/man-user.svg" ></Avatar>
						</Grid>
					</Toolbar>
				</AppBar>
				<Drawer
					className={classes.drawer}
					variant="permanent"
					classes={{
						paper: classes.drawerPaper,
					}}
					anchor="left"
				>

					<Grid container style={{ background: "url('https://www.topofandroid.com/wp-content/uploads/2015/05/Android-L-Material-Design-Wallpapers-12.jpg')" }} alignItems="center" justify="center">
						<Avatar src="/static/man-user.svg" style={{
							width: "200px",
							height: "200px",
							background: "gray"
						}}
						></Avatar>
					</Grid>
					<div className={classes.toolbar} />
					<Divider />
					<List>
						{menu.map((item, index) => (
							<Link href={item.path} prefetch passHref>
								<a style={{ textDecoration: "none" }}>
									<ListItem button key={item.name}>
										<ListItemIcon >
											<item.icon style={{ width: "24px", height: "24px" }}></item.icon>
										</ListItemIcon>
										<ListItemText primary={<Typography noWrap variant="body1"> {item.name} </Typography>} />
									</ListItem>
								</a>
							</Link>

						))}
					</List>


				</Drawer>
				<main className={classes.content}>
					<div className={classes.toolbar} />
					{
						props.children
					}

				</main>
			</div>
		);
	}
}

PermanentDrawerLeft.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PermanentDrawerLeft);

