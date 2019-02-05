import React, { Component } from 'react'
import { Grid, Typography, ListItem, ListItemAvatar, Avatar, ListItemSecondaryAction, ListItemText, List, IconButton, Paper, withStyles, CircularProgress } from '@material-ui/core';
import BarGraphIcon from './../static/icons/ic_bar_graph.svg';
import ArrowDownIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpIcon from '@material-ui/icons/ArrowUpward';
import Chart from 'react-google-charts'
import { FirstTab } from './products';

const styles = {
	root: {
		marginTop: "64px",
		marginLeft:"64ṕx",
		marginRight:"64ṕx"
	},
	itemScore: {
		fonWeight: "bold"
	},
	itemIconBarGraph: {
		width: "32px",
		heigth: "32px"
	},
	itemIconArrowUp: {
		fill: "green",
		width: "16px",
		height: "16px"
	},
	itemIconArrowDown: {
		fill: "red",
		width: "16px",
		height: "16px"
	},
	textGood: {
		color: "green"
	},
	textBad: {
		color: "red"
	}
}


class dashboard extends Component {
	state = {
		data :[
			{
				score : 246,
				progress  : -14.2
			},
			{
				score : 245,
				progress  : 13.2
			},
			{
				score : 860.26,
				progress : 5.23
			}
		]
	}
	render() {
		let { classes } = this.props
		return (
			<Grid container justify="space-between" style={{ marginTop:"64px"}} >
				{(()=>{
					return this.state.data.map(el=>{
						return <Grid item xs={3} component={List}>
						<ListItem component={Paper} >
						<ListItemAvatar>
							<Typography variant="h6" className={classes.itemScore}>{el.score}</Typography>
						</ListItemAvatar>
							<ListItemText
							primary="Total de vendidos"
								secondary={
									<Grid container alignItems="center">
										{el.progress>0? <ArrowUpIcon className={classes.itemIconArrowUp} /> : <ArrowDownIcon className={classes.itemIconArrowDown} />}
									<Typography className={el.progress>0 ? classes.textGood : classes.textBad}>{el.progress}</Typography>
									</Grid>
									}
							/>
						</ListItem>
						<ListItemSecondaryAction>
								<BarGraphIcon className={classes.itemIconBarGraph}></BarGraphIcon>
						</ListItemSecondaryAction>
						</Grid >
					})
				})()}
				<Grid item xs={12} container style={{marginTop:"32px",minHeight:"400px"}} justify="center" alignItems="center">
				
				<Paper
				width={'100%'}
				height={'400px'}
				chartType="LineChart"
				loader={<CircularProgress variant="indeterminate"/>}
				data={[
					['x', 'Comprados', 'Vendidos'],
					["Junio", 0, 0],
					["Julio", 10, 5],
					["Agosto", 23, 15],
					["Setiembre", 17, 9],
					["Octubre", 18, 10],
					["Noviembre", 9, 5],
					["Diciembre", 11, 3],
					["Enero", 27, 19],
				]}
				options={{
					hAxis: {
					title: 'Mes',
					},
					vAxis: {
					title: 'Cantidad',
					},
					series: {
						0: { curveType: 'function' },	
						1: { curveType: 'function' },
					},
				}}
				rootProps={{ 'data-testid': '2' }}
				component = {Chart}
				square/>
				
				</Grid>
			</Grid>
		)
	}
}
export default withStyles(styles)(dashboard);