import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from "next/head";
import { Grid, withStyles, Fab, Snackbar, Typography, TextField, Input, InputAdornment, IconButton, FormControl, InputLabel, Button, Checkbox, FormControlLabel, Link, MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
const styles = theme => ({
	root: {
	},
	left: {
		overflow: "hidden",
		maxHeight :"100vh"
	},
	right: {
		
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit
	}
})

class Login extends Component {
	state = {
		showPassword: false,
		password: '',
		userName: '',
		rememberMe: false,
	}
	
	render() {
		let { classes } = this.props;
		return (
			<Grid container className={classes.root}>
				<Grid item md={6} className={classes.left}>
					<img src="https://www.topofandroid.com/wp-content/uploads/2015/05/Android-L-Material-Design-Wallpapers-12.jpg" alt="" />
				</Grid>
				<Grid item md={6} className={classes.right} container justify="center" alignContent="space-between" style={{marginTop : "32px"}}>
					<Grid xs={8} style= {{boxSizing : "border-box"}}>
						<Typography variant="h2" align="center">
							Corea Beauty Peru
						</Typography>
						<Typography variant="subtitle1" align="center">
							¡Bienvenido de vuelta! Por favor, ingrese a su cuenta
						</Typography>
						<TextField fullWidth
							id="userName"
							label="Nombre de usuario"
							className={classes.textField}
							value={this.state.name}
							onChange={this.handleChange('userName')}
							margin="normal"
							style = {{ marginTop : "32px"}}
						/>
						<FormControl fullWidth
							className={classes.textField}
							
						>
							<InputLabel htmlFor="adornment-amount">Contraseña</InputLabel>
							<Input
								id="password"
								type={this.state.showPassword ? 'text' : 'password'}
								value={this.state.password}
								onChange={this.handleChange('password')}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="Toggle password visibility"
											onClick={this.handleClickShowPassword}
										>
											{this.state.showPassword ? <Visibility /> : <VisibilityOff />}
										</IconButton>
									</InputAdornment>
								}
							/>
						</FormControl>
						<Grid container justify="space-between" alignItems="baseline" style={{marginTop : "16px"}}>
							<FormControlLabel 
								control={
									<Checkbox
										checked={this.state.rememberMe}
										onChange={this.handleChange('rememberMe')}												
									/>
								}
								label="Recordar"
							/>
							<Link href={"javascript: void(0);"} variant="caption" 
							>
								Olvidaste tu constraseña
							</Link>
						</Grid>

						<Grid item xs container justify="space-between" style={{marginTop : "32px"}}>
							<Button variant="contained" color="primary" >
								Ingresar
							</Button>
							<Button variant="outlined" color="primary">
								Registrar
							</Button>
						</Grid>
					</Grid>
					<Grid item xs={8} style={{marginBottom : "8px"}}>
						<Typography variant="caption" align="center" className={classes.termins} >
						© 2019 Terminos de uso. Políticas de privacidad 
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		)
	}

	handleClickShowPassword = () => {
		this.setState((state) => ({
			showPassword: !(state.showPassword)
		}))
	
	}
	handleChange = (name) => (event) => {
		let newValue = {
			rememberMe: event.target.checked,
			password: event.target.value,
			userName: event.target.value,
		}
		this.setState({
			[name]: newValue[name]
		})
		console.log(this.state);

	}
}
Login.propTypes = {
	classes: PropTypes.object.isRequired
}
export default withStyles(styles)(Login);