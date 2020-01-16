import React from "react"
import PropTypes from "prop-types"
import Header from './Header'
import Body from './Body'
import Grid from '@material-ui/core/Grid';
import Background from '../../assets/images/image.jpg';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
var sectionStyle = {
  backgroundSize: '100% 100%',
  backgroundImage: `url(${Background})`, 
  backgroundAttachment: 'fixed',
};
var style = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(20),
      height: theme.spacing(15),
    },
  },
  color: {
    background: 'transparent'
  }
});
class Main extends React.Component {
  render () {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div style={sectionStyle}>
          <Grid container spacing={9} direction="column" alignItems="center" justify="center" >
            <div className={classes.root}><Paper elevation={0} className={classes.color}/></div>
            <Grid item xs={8}><Header /></Grid> 
            <Grid item xs={8}><Body  /></Grid>  
            <div className={classes.root}><Paper elevation={0} className={classes.color}/></div>
          </Grid>
        </div> 
      </React.Fragment>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(style)(Main);