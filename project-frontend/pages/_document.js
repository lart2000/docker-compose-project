import React from 'react';
import PropTypes from 'prop-types';
import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

class MyDocument extends Document {
	render() {
		const { pageContext } = this.props;

		return (
			<html lang="en" dir="ltr">
				<Head>
					<meta charSet="utf-8" />
					{/* Use minimum-scale=1 to enable GPU rasterization */}
					<meta
						name="viewport"
						content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
					/>
					{/* PWA primary color */}
					{/* <meta name="robots" content="noindex" /> */}
					<meta name="theme-color" content={pageContext.theme.palette.primary.main} />
					<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
					<link rel="icon" type="image/x-icon" href="/static/buffalo.png" />
					<script src='https://www.google.com/recaptcha/api.js' asyn defer></script>
				</Head>
				<body>
					<Main />
					<NextScript />
					
				</body>
			</html>
		);
	}
}

MyDocument.getInitialProps = ctx => {
	let pageContext;
	const page = ctx.renderPage(Component => {
		const WrappedComponent = props => {
			pageContext = props.pageContext;
			return <Component {...props} />;
		};

		WrappedComponent.propTypes = {
			pageContext: PropTypes.object.isRequired,
		};

		return WrappedComponent;
	});

	return {
		...page,
		pageContext,
		// Styles fragment is rendered after the app and page rendering finish.
		styles: (
			<React.Fragment>
				<style
					id="jss-server-side"
					// eslint-disable-next-line react/no-danger
					dangerouslySetInnerHTML={{ __html: pageContext.sheetsRegistry.toString() }}
				/>
				{flush() || null}
			</React.Fragment>
		),
	};
};

export default MyDocument;