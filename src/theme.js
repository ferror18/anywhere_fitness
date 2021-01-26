import { createMuiTheme } from '@material-ui/core/styles';
import './App.css'
const lineHeight = "1.5em"
const fontFamily = '"Poppins", "Roboto", "Helvetica", "Arial", "sans-serif"'

const theme = createMuiTheme({
    //colors
  palette: {
    primary: {
      main: '#0db9fd ',
    },
    secondary: {
      main: '#011638',  
    },
    background: {
      default: '#F3F4F7'
    }
},
    typography: {
    htmlFontSize: 16,
    fontFamily:fontFamily,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1:{
        fontFamily: fontFamily,
        fontWeight: 300,
        fontSize: "5.8125rem",
        lineHeight: lineHeight,
        letterSpacing: "-1.5px"
    },
    h2:{
        fontFamily: fontFamily,
        fontWeight: 300,
        fontSize: "3.625rem",
        lineHeight: lineHeight,
        letterSpacing: "-0.5px"
    },
    h3:{
        fontFamily: fontFamily,
        fontWeight: 400,
        fontSize: "2.875rem",
        lineHeight: lineHeight,
        letterSpacing: "0px"
    },
    h4:{
        fontFamily: fontFamily,
        fontWeight: 400,
        fontSize: "2.0625rem",
        lineHeight: lineHeight,
        letterSpacing: "0.25px"
    },
    h5:{
        fontFamily: fontFamily,
        fontWeight: 400,
        fontSize: "1.4375rem",
        lineHeight: lineHeight,
        letterSpacing: "0px"
    },
    h6:{
        fontFamily: fontFamily,
        fontWeight: 500,
        fontSize: "1.1875rem",
        lineHeight: lineHeight,
        letterSpacing: "0.15px"
    },
    subtitle1:{
        fontFamily: fontFamily,
        fontWeight: 400,
        fontSize: "0.9375rem",
        lineHeight: lineHeight,
        letterSpacing: "0.15px"
    },
    subtitle2:{
        fontFamily: fontFamily,
        fontWeight: 500,
        fontSize: "0.8125rem",
        lineHeight: lineHeight,
        letterSpacing: "0.1px"
    },
    body1:{
        fontFamily: fontFamily,
        fontWeight: 400,
        fontSize: "0.9375rem",
        lineHeight: lineHeight,
        letterSpacing: "0.5px"
    },
    body2:{
        fontFamily: fontFamily,
        fontWeight: 400,
        fontSize: "0.8125rem",
        lineHeight: lineHeight,
        letterSpacing: "0.25px"
    },
    button:{
        fontFamily: fontFamily,
        fontWeight: 500,
        fontSize: "0.8125rem",
        lineHeight: lineHeight,
        letterSpacing: "1.25px"
    },
    caption:{
        fontFamily: fontFamily,
        fontWeight: 400,
        fontSize: "0.75rem",
        lineHeight: lineHeight,
        letterSpacing: "0.4px"
    },
    overline:{
        fontFamily: fontFamily,
        fontWeight: 400,
        fontSize: "0.625rem",
        lineHeight: lineHeight,
        letterSpacing: "1.5px"
    }
}
// Font

});

export default theme