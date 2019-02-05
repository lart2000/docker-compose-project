import Header from './../src/layout/header';

import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import getPageContext from '../src/getPageContext';
import Store from './../redux/store';
import { Provider } from "react-redux";


class MyApp extends App {
	constructor(props) {
		super(props);
		this.pageContext = getPageContext();
	}
	
	static async getInitialProps({router}){
		// let isLogin = getStatus();
		// let routes = new MyRoutes();
		// let header = false;
		// let current_route = router.route;
		// if(islogin && routes.routes_login.includes(current_route)){
		// 	header = true;
		// }
		
		console.log(router.route);
		return {}
	} 
	componentDidMount() {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles && jssStyles.parentNode) {
			jssStyles.parentNode.removeChild(jssStyles);
		}
	}
	
	
	render() {
		const { Component, pageProps } = this.props;
		return (
			<Container>
				<Head>
					<title>Corea Beauty Peru</title>
				</Head>
				{/* Wrap every page in Jss and Theme providers */}
				<JssProvider
					registry={this.pageContext.sheetsRegistry}
					generateClassName={this.pageContext.generateClassName}
				>
					{/* MuiThemeProvider makes the theme available down the React
              tree thanks to React context. */}
					<MuiThemeProvider
						theme={this.pageContext.theme}
						sheetsManager={this.pageContext.sheetsManager}
					>
						{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
						<CssBaseline />
						{/* Pass pageContext to the _document though the renderPage enhancer
				to render collected styles on server side. */}
						<Provider store={Store}>
							<React.Fragment>
								<div style={{minHeight: "100vh", overflow: "hidden"}}>
								{(()=>{
									let userlogin =true;
									if (userlogin) {
										return <Header>
											<Component pageContext={this.pageContext} {...pageProps} />
										</Header>
									}else{
										return <Component pageContext={this.pageContext} {...pageProps} />
									}
								})()}
									
								</div >
							</React.Fragment>
							
						</Provider>
					</MuiThemeProvider>
				</JssProvider>
			</Container>
		);
	}
}

export default MyApp;
