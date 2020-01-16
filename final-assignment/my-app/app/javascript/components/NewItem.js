import React from "react"
import PropTypes from "prop-types"
import $ from 'jquery'
import Button from '@material-ui/core/Button';
import PublishIcon from '@material-ui/icons/Publish';
import TextField from '@material-ui/core/TextField';
import 'typeface-roboto';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
const styles = theme => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 230,
  },
});
class NewItem extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      name: '',
      time: '',
      category: ''
    };
  }
  onChange(e) {
    this.setState({
      [e.target.name]:e.target.value
    }) 
  }
  handleClick() {
    var name = this.state.name;
    var time = this.state.time;
    var category = this.state.category;
    name!=''&&time!=''&&category!=''?
    $.ajax({
      url: "/api/v1/items",
      type: "POST",
      data: { item: { name: name, time: time, category: category } },
      success: (item) => {
        this.props.handleSubmit(item);
    }
    }):this.empty();
  }
  empty() {

  }
  render () {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <form>
          <TextField label="name" value={this.state.name} name='name' onChange={this.onChange.bind(this)} placeholder='Enter the name of the item' required/>
          <nobr> </nobr>
          <TextField label="time" name='time' value={this.state.time} type="datetime-local"
            className={classes.textField} InputLabelProps={{shrink: true,}} onChange={this.onChange.bind(this)} required/>
          <nobr> </nobr>
          <FormControl className={classes.formControl} required>
            <InputLabel>Category</InputLabel>
            <Select value={this.state.category} name='category' onChange={this.onChange.bind(this)} >
              <MenuItem value='Work'>Work</MenuItem>
              <MenuItem value='Family'>Family</MenuItem>
              <MenuItem value='Friend'>Friend</MenuItem>
              <MenuItem value='Shopping'>Shopping</MenuItem>
              <MenuItem value='Sports'>Sports</MenuItem>
              <MenuItem value='Travel'>Travel</MenuItem>
              <MenuItem value='Personal'>Personal</MenuItem>
              <MenuItem value='Other'>Other</MenuItem>
            </Select>
          </FormControl>
          <Button type='submit' className={classes.root} startIcon={<PublishIcon />} 
          onClick={this.handleClick.bind(this)}>submit</Button>
        </form>
      </React.Fragment>
    );
  }
}

NewItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewItem);
