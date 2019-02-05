import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Divider, InputBase, Paper, Grid, ListItemIcon, ListSubheader, TextField, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'
import { fade } from '@material-ui/core/styles/colorManipulator';
import Send  from '@material-ui/icons/Send'
import ImageIcon from "@material-ui/icons/Image";
import dynamic from 'next/dynamic';

const styles = theme => ({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
		borderRight: "1px solid rgba(0, 0, 0, 0.12)"
	},
	inline: {
		display: 'inline',
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing.unit * 2,
		marginLeft: 0,
		marginTop: theme.spacing.unit,
		marginBottom: theme.spacing.unit,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing.unit * 3,
			width: 'auto',
		},
	},
	searchIcon: {
		width: theme.spacing.unit * 4,
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
		paddingLeft: theme.spacing.unit * 5,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: 200,
		},
	},
	yourMessages: {
		maxWidth: "200px",
		padding: "8px",
		backgroundColor: "#1e88e5",
		borderRadius: "16px",
		borderBottomRightRadius: "0px",
		color: "#ffffff"
	},
	friendMessages: {
		maxWidth: "200px",
		backgroundColor: "#eeeeee",
		padding: "8px",
		borderRadius: "16px",
		borderBottomLeftRadius: "0px",
	}
});

class ChatRoom extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { classes } = this.props;

		return (
			<Paper style={{ margin: "64px" }}>
				<Grid container >
					<Grid item xs={4}>
						<ListPeople classes={classes}></ListPeople>
					</Grid>
					<Grid item xs={8}>
						<Messages classes={classes}></Messages>
					</Grid>
				</Grid>
			</Paper>);
	}
}

class Messages extends React.Component {
	state = {
		message : ""
	}
	render() {
		const { classes } = this.props;
		return <Grid container  alignContent="space-between" style={{height : "100%"}}>
			<Grid item xs={12} >
				<ListItem alignItems="flex-start" button >
					<ListItemAvatar>
						<Avatar alt="Remy Sharp" src="/static/man-user.svg" />
					</ListItemAvatar>
					<ListItemText
						primary={
							<Grid container justify="space-between">
								<Typography noWrap>Brunch this weekend?</Typography>
								<Typography noWrap >{"3 min "} ago</Typography>
							</Grid>
						}
						secondary={<Typography noWrap variant="caption"
						>I'll be in your neighborhood doing errands this…</Typography>}
					/>
				</ListItem>
				<Divider></Divider>
				<List component="nav"
				>
					<ListItem>
						<Grid container>
							<Grid item xs={12}>
							<ListItemText primary={
								<Grid container justify="flex-start">
									<Typography className={classes.friendMessages}>send message</Typography>
								</Grid>
							} />
							</Grid>
							<Grid item xs={12}>
							<Typography variant="caption" color="textSecondary">10:32</Typography>
							</Grid>
						</Grid>
					</ListItem>
					<ListItem >
						<Grid container>
							<Grid item xs={12} >
								<ListItemText primary={
									<Grid container justify="flex-end">
										<Typography className={classes.yourMessages}>send message</Typography>
									</Grid>
								} style={{paddingRight: "0px"}}/>
							</Grid>
							<Grid item xs={12} container justify="flex-end">
								<Typography variant="caption" color="textSecondary">10:32</Typography>
							</Grid>
						</Grid>
					</ListItem>
					
				</List>
			</Grid>
			<Grid item xs={12} container justify="space-evenly" style={{ borderTop : "1px solid rgba(0, 0, 0, 0.12)"}}>
				<Grid item xs ={8}>
					<TextField
					fullWidth
					id="message"
					label="Escribe un mensaje"
					multiline
					rowsMax="4"	
					value={this.state.message}
					onChange={this.handleChange('message')}
					margin="normal"
					/>
				</Grid>
				<Grid item  xs={2} container justify="center" alignItems="center">
					<IconButton aria-label="Delete" >
						<Send fontSize="large" />
					</IconButton>
				</Grid>
				</Grid>
		</Grid>
	}
	handleChange = (name)=>(event)=>{
		this.setState({[name]: event.target.value})
	}
}


class ListPeople extends React.Component {
	state = {
		search: "",
	}
	constructor(props) {
		super(props);
	}

	render() {
		const { classes } = this.props;
		return (
			<List className={classes.root}>
				<div className={classes.search}>
					<div className={classes.searchIcon}>
						<SearchIcon />
					</div>
					<InputBase
						placeholder="Search…"
						classes={{
							root: classes.inputRoot,
							input: classes.inputInput,
						}}
					/>
				</div>
				{(() => {
					return [1, 2, 3, 4, 5].map((item, index) => (
						<React.Fragment >
							<Divider />
							<ListItem alignItems="flex-start" button >
								<ListItemAvatar>
									<Avatar alt="Remy Sharp" src="/static/man-user.svg" />
								</ListItemAvatar>
								<ListItemText
									primary={
										<Grid container justify="space-between">
											<Typography noWrap>Brunch this weekend?</Typography>
											<Typography noWrap >{"3 min "} ago</Typography>
										</Grid>
									}
									secondary={<Typography noWrap variant="caption" color="textSecondary"
									>I'll be in your neighborhood doing errands this…</Typography>}
								/>
							</ListItem>
						</React.Fragment>
					))
				})()
				}
			</List>
		);
	}
}


export default withStyles(styles)(ChatRoom);
