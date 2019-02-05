import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Paper, Radio, RadioGroup, FormControlLabel, TextField, FormControl, InputLabel, Select, MenuItem, InputAdornment, Button, Grid, List, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, Divider, Table, TableHead, TableRow, TableCell, TableBody, InputBase } from '@material-ui/core';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import MoneyBagIcon from '../static/icons/ic_money_bag.svg'
import ShoppingCarIcon from '../static/icons/ic_shopping_car.svg'
import ArrowGrapchIcon from '../static/icons/ic_arrow_graph.svg'
import SearchIcon from "@material-ui/icons/Search";
function TabContainer(props) {
	return (
		<Typography component="div" style={{ padding: 8 * 3 }}>
			{props.children}
		</Typography>
	);
}

const styles = theme => ({
	root: {
		marginTop: "64px",
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
	},
});

class SimpleTabs extends React.Component {
	state = {
		value: 0,
	};

	handleChange = (event, value) => {
		this.setState({ value });
	};

	render() {
		const { classes } = this.props;
		const { value } = this.state;

		return (
			<Paper className={classes.root}>
				<AppBar position="static">
					<Tabs value={value} onChange={this.handleChange}>
						<Tab label="Principal" />
						<Tab label="Nuevo producto" />
					</Tabs>
				</AppBar>
				{value === 0 && <TabContainer><FirstTab></FirstTab></TabContainer>}
				{value === 1 && <TabContainer><SecondTab></SecondTab></TabContainer>}
			</Paper>
		);
	}
}
const CustomTableCell = withStyles(theme => ({
	head: {
		backgroundColor: "#eeeeee",
		fontSize: 16
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);
export  class FirstTab extends React.Component {
	render() {
		return <Grid container justify="space-between">
			<Grid item xs={3}>
				<Paper>
				<List>
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar alt="Remy Sharp" src="/static/icons/ic_money_bag.svg" />
						</ListItemAvatar>
						<ListItemText
							primary="$50,000"
							secondary={
							<Typography component="span" color="textPrimary">
									Total de ganancia
							</Typography>
							}
						></ListItemText>
					</ListItem>
				</List>
				</Paper>
			</Grid>
			<Grid item xs={3}>
				<Paper>
				<List>
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar alt="Remy Sharp" src="/static/icons/ic_shopping_car.svg" />
						</ListItemAvatar>
						<ListItemText
							primary="$50,000"
							secondary={
								<Typography component="span" color="textPrimary">
									Ganancia
							</Typography>
							}
						></ListItemText>
					</ListItem>
				</List>
				</Paper>
			</Grid>
			<Grid item xs={3}>
				<Paper>
				<List>
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar alt="Remy Sharp" src="/static/icons/ic_arrow_graph.svg">
							</Avatar>
						</ListItemAvatar>
						<ListItemText
							primary="+2.0%"
							secondary={
								<Typography component="span" color="textPrimary">
									Crecimiento
							</Typography>
							}
						></ListItemText>
					</ListItem>
				</List>
				</Paper>
			</Grid>
			<Grid container style={{ marginTop: "32px" }} justify="space-around">
				<Grid item xs={7} >
				<Paper style={{padding : "16px"}}>
					<Grid container justify="space-between">
						<Typography variant="h6" >
							Productos Top
						</Typography>
						<Grid item xs={6} container justify="center" alignItems="center">
							<SearchIcon style={{margin : "0px 16px"}}/>
							<InputBase 
								placeholder="Search…"
							/>
						</Grid>
					</Grid>

					<Table style={{marginTop : "16px"}}>
						<TableHead>
							<TableRow>
								<CustomTableCell>Producto</CustomTableCell>
								<CustomTableCell align="right">Disponible</CustomTableCell>
								<CustomTableCell align="right">Total</CustomTableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{[1, 2, 3, 4, 5].map((row, index) => (
								<TableRow key={index}>
									<CustomTableCell component="th" scope="row" >
										<Grid container justify="flex-start" alignItems="center">
											<Avatar src="/static/icons/ic_money_bag.svg">
											</Avatar>
											<Typography variant="body2">{"holaasasd"}</Typography>
										</Grid>
									</CustomTableCell>
									<CustomTableCell align="right">{"holaasasd"}</CustomTableCell>
									<CustomTableCell align="right">{"holaasasd"}</CustomTableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
					</Paper>
				</Grid>
				<Grid item xs={4} >
					<Paper style={{padding : "16px"}}>
					<Typography variant="h6" >
						Detalles rápidos
					</Typography>
					<List  style={{marginTop : "16px"}}>
						{
							[1, 2, 3, 4].map(el => {
								return <React.Fragment>
									<Divider></Divider>
									<ListItem>
										<ListItemAvatar>
											<Avatar>
												<MoneyBagIcon />
											</Avatar>
										</ListItemAvatar>
										<ListItemText
											primary={<Typography variant="caption" color="textSecondary">Single-line</Typography>}
										/>
										<ListItemSecondaryAction>
											<Typography variant="body2">
												290  nuevos clientes
												</Typography>
										</ListItemSecondaryAction>
									</ListItem>
								</React.Fragment>
							})
						}
					</List>
				</Paper>
				</Grid>
			</Grid>
		</Grid>;
	}
}
class SecondTab extends React.Component {

	state = {
		type: 'article',
		title: '',
		subtitle: '',
		category: '',
		description: '',
		stock: '',
		price: ''
	};
	componentDidUpdate() {
		console.log(this.state.category);

	}
	render() {
		return <form noValidate autoComplete="off">
			<RadioGroup
				aria-label="type"
				name="type"
				value={this.state.type}
				onChange={this.handleChange('type')}
				row
			>
				<FormControlLabel
					value="article"
					control={<Radio color="primary" />}
					label="Articulo"
					labelPlacement="end"
				/>
				<FormControlLabel
					value="offert"
					control={<Radio color="primary" />}
					label="Oferta"
					labelPlacement="end"
				/>
			</RadioGroup>
			<Grid container justify="space-evenly">
				<Grid item xs={7}>
					<TextField
						fullWidth
						id="title"
						label="Titulo"
						value={this.state.title}
						onChange={this.handleChange('title')}
						margin="normal"
					/>
					<TextField
						fullWidth
						id="subtitle"
						label="Subtítulo"
						value={this.state.subtitle}
						onChange={this.handleChange('subtitle')}
						margin="normal"
					/>
					<FormControl fullWidth>
						<InputLabel htmlFor="category">Category</InputLabel>
						<Select
							fullWidth
							value={this.state.category}
							onChange={this.handleChange('category')}
							inputProps={{
								name: 'category',
								id: 'category',
							}}
						>
							<MenuItem value="">
								<em>None</em>
							</MenuItem>
							<MenuItem value="ropa">ROpa</MenuItem>
							<MenuItem value={"tejico"}>TEjido</MenuItem>
							<MenuItem value={"etc"}>etc</MenuItem>
						</Select>
					</FormControl>
					<TextField
						fullWidth
						id="description"
						label="Descripción"
						multiline
						rows="4"
						value={this.state.description}
						onChange={this.handleChange('description')}
						margin="normal"
					/>
				</Grid>
				<Grid item xs={4}>
					<TitlebarGridList></TitlebarGridList>
					<TextField
						style={{ marginTop: "16px" }}
						fullWidth
						label="Cantidad"
						id="stock"
						type="number"
						value={this.state.stock}
						onChange={this.handleChange('stock')}
						InputProps={{
							startAdornment: <InputAdornment position="start">Ud</InputAdornment>,
						}}
					/>
					<TextField
						fullWidth
						label="Precio"
						id="price"
						type="number"
						value={this.state.price}
						onChange={this.handleChange('price')}
						InputProps={{
							startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
						}}
					/>

					<Grid container justify="space-evenly" style={{ marginTop: "32px" }}>
						<Button variant="contained">Guardar</Button>
						<Button variant="contained">Cancelar</Button>
					</Grid>
				</Grid>
			</Grid>
		</form>;
	}
	handleChange = name => event => {
		this.setState({ [name]: event.target.value });
	};

}
export default withStyles(styles)(SimpleTabs);



let image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6CgVGg5OjY7d64jvpXLs4MsWpykLmzOa_I6ClH2zLvycZ5J2c4g";
const tileData = [
	{
		img: image,
		title: 'Image',
		author: 'author',
	},
	{
		img: image,
		title: 'Image',
		author: 'author',
	}
];
function TitlebarGridList(props) {
	const styles = theme => ({
		root: {
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'space-around',
			overflow: 'hidden',
			// backgroundColor: theme.palette.background.paper,
		},
		gridList: {
			width: 500,
			height: 450,
		},
		icon: {
			color: 'rgba(255, 255, 255, 0.54)',
		},
	});

	let classes = styles;
	return (<div className={classes.root}>
		<GridList cellHeight={180} className={classes.gridList}>
			<GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
				<ListSubheader component="div">Imágenes</ListSubheader>
			</GridListTile>
			{tileData.map(tile => (
				<GridListTile key={tile.img}>
					<img src={tile.img} alt={tile.title} />
					<GridListTileBar
						title={tile.title}
						subtitle={<span>by: {tile.author}</span>}
						actionIcon={
							<React.Fragment>
								<IconButton className={classes.icon}>
									< EditIcon color="secondary" />
								</IconButton>
								<IconButton className={classes.icon}>
									< DeleteIcon color="secondary" />
								</IconButton>
							</React.Fragment>
						}
					/>
				</GridListTile>
			))}
		</GridList>
	</div>

	);
}