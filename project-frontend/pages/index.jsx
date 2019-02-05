import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Paper, TextField, Grid, Avatar, Button, InputAdornment, IconButton } from '@material-ui/core';
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";
import Recaptcha from "react-recaptcha";
import Edit from "@material-ui/icons/Edit";
import Save from "@material-ui/icons/Save";
import Cancel from "@material-ui/icons/Cancel";
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  avatar : {
	width  : "200px",
	height : "200px",
	background : "gray"
  },
  buttonFile : {
	marginTop : "16px"
  },
  inputMargin : {
	marginTop : "8px"
  }
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
		
      <Paper className={classes.root} square>
        <AppBar position="static" style = {{marginTop : "64px"}}>
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Datos personales" />
            <Tab label="Cambiar contraseña" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><FirstTab classes={classes}></FirstTab></TabContainer>}
        {value === 1 && <TabContainer><SecondTab classes={classes}></SecondTab></TabContainer>}
      </Paper>
    );
  }
}


class FirstTab extends React.Component {
	state = {
		name : "",
		email: "",
		image: "/static/man-user.svg"
	}
	render(){
		let {classes} = this.props;
		return (
		<form noValidate action="javacript:void(0);">
			<Grid container justify="space-evenly" >
				<Grid  item xs={7}>
					<TextField 
					fullWidth					
					id="standard-name"
					label="Nombre"
					value={this.state.name}
					onChange={this.handleChange('name')}
					margin="normal"
					/>
					<TextField
					fullWidth
					type="email"
					id="standard-name"
					label="Correo Electronico"
					value={this.state.email}
					onChange={this.handleChange('email')}
					margin="normal"
					/>
					<Grid item xs={12} container justify="space-evenly" className={classes.inputMargin}>
						<Button variant="contained" className={classes.buttonFile} >
							<Save  style={{ marginRight: "16px"}}/> Guardar
						</Button>
						<Button variant="contained" className={classes.buttonFile} >
							<Cancel  style={{ marginRight: "16px"}}/> Cancelar
						</Button>
					</Grid>
				</Grid>
				<Grid item xs={4} container justify="center" alignItems="center">
					<Avatar src= {this.state.image} className={classes.avatar}/>
					<Button variant="contained" className={classes.buttonFile} >
						<Edit  style={{ marginRight: "16px"}}/> Editar imagen
					</Button>
				</Grid>
			</Grid>
		</form>
		)
	}
	handleChange=(name)=>(event)=>{		
		this.setState({
			[name] : event.target.value
		})
	}
}

class SecondTab extends React.Component {
	state = {
		showPassword: false,
		currentPassword : '',
		newPassword : '',
		confirmNewPassword:'',
		captcha :false
	}
	render(){
		let {classes } = this.props;
		 return (
			<form action="javacript:void(0);">
				<Grid container justify="space-evenly" >
					<Grid item xs={6}>
						<TextField
							fullWidth
							className={classes.inputMargin}
							type={this.state.showPassword ? 'text' : 'password'}
							label="Contraseña actual"
							value={this.state.currentpassword}
							onChange={this.handleChange('currentPassword')}
							InputProps={{
								endAdornment: (
								<InputAdornment position="end">
									<IconButton
									aria-label="Toggle password visibility"
									onClick={this.handleClickShowPassword}
									>
									{this.state.showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
								),
							}}
							/>
						
						<TextField
							fullWidth
							className={classes.inputMargin}
							id="newPassword"
							type={this.state.showPassword ? 'text' : 'password'}
							label="Nueva contraseña"
							value={this.state.password}
							onChange={this.handleChange('newPassword')}
							InputProps={{
								endAdornment: (
								<InputAdornment position="end">
									<IconButton
									aria-label="Toggle password visibility"
									onClick={this.handleClickShowPassword}
									>
									{this.state.showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
								),
							}}
							/>
						<TextField
							fullWidth
							className={classes.inputMargin}
							
							id="confirmNewPassword"
							type={this.state.showPassword ? 'text' : 'password'}
							label="Repita nueva contraseña"
							value={this.state.password}
							onChange={this.handleChange('confirmNewPassword')}
							InputProps={{
								endAdornment: (
								<InputAdornment position="end">
									<IconButton
									aria-label="Toggle password visibility"
									onClick={this.handleClickShowPassword}
									>
									{this.state.showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
								),
							}}
							/>
					</Grid>
					<Grid item xs={4} container  justify="center" alignContent="space-around">
						<Recaptcha
							sitekey="6LcpFo4UAAAAAMZB4o2bZJgPL__mYAi_TTjyaiRM"
							render="explicit"
							verifyCallback = {this.handleVerifyRecaptcha}
							// onloadCallback={callback}
						/>
						<Button variant="contained" fullWidth>
							Guardar
						</Button>

					</Grid>
						
				</Grid>
			</form>
		 ) 
	}
	handleChange=(name)=>(event)=>{
		this.setState({
			[name] : event.target.value
		})
	}
	handleClickShowPassword=()=>{
		this.setState((state, props) => ({
			showPassword : !state.showPassword
		}))
	}
	handleVerifyRecaptcha=(response)=>{
		if (response) {
			this.setState({
				captcha :true
			})
			console.log("se verifico");
			
		}
	}
}
SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);
