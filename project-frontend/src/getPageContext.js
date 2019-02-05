/* eslint-disable no-underscore-dangle */

import { SheetsRegistry } from 'jss';
import { createMuiTheme, createGenerateClassName } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

import red from "@material-ui/core/colors/red";
import { pink } from '@material-ui/core/colors';
// A theme with custom primary and secondary color.
// It's optional.

const colors= {
	primary  : red["A100"],
	secondary: pink["100"],
}
const theme = createMuiTheme({
  palette: {
	// type : "dark",
    primary: {
    //   light: red["A100"],
      main: colors.primary,
    //   dark: red["A400"],
    },
    secondary: {
    //   light: green[300],
      main: colors.secondary,
    //   dark: green[700],
	},
	// error:{
		
	// },
	// background :{

	// },	
  },
  typography: {
	useNextVariants: true,
	
  },

});

function createPageContext() {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName(),
  };
}

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  }

  // Reuse context on the client-side.
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}