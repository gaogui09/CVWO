import React from "react"
import PropTypes from "prop-types"
import Button from '@material-ui/core/Button';
import 'typeface-roboto';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import PublishIcon from '@material-ui/icons/Publish';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import WorkIcon from '@material-ui/icons/Work';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import PeopleIcon from '@material-ui/icons/People';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import PersonIcon from '@material-ui/icons/Person';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import WarningIcon from '@material-ui/icons/Warning';
const styles = theme => ({
  white: {
    width: '670px',
    maxWidth: 800,
    backgroundColor: "#ede7f6",
  },
  purple: {
    width: '670px',
    maxWidth: 800,
    backgroundColor: '#b39ddb',
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

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      editable: false,
    };
    this.nameRef = React.createRef();
    this.timeRef = React.createRef();
    this.categoryRef = React.createRef();
  }
  handleEdit() {
    if(this.state.editable) {
      var name = this.nameRef.current.value;
      var time = this.timeRef.current.value;
      var category = this.categoryRef.current.value;
      var id = this.props.item.id;
      var item = {id: id , name: name , time: time , category: category};
      this.props.handleUpdate(item);
    }
    this.setState({ editable: !this.state.editable })
  }
  icon(category) {
    return category == 'Work' ?
    <WorkIcon /> :
    category == 'Family' ?
    <HomeWorkIcon /> :
    category == 'Friend' ?
    <PeopleIcon /> :
    category == 'Shopping' ?
    <ShoppingCartIcon /> :
    category == 'Sports' ?
    <SportsSoccerIcon /> :
    category == 'Travel' ?
    <FlightTakeoffIcon /> :
    category == 'Personal' ?
    <PersonIcon /> :
    category == 'Other' ?
    <MoreHorizIcon />
    : <WarningIcon />



  }
  
  render () {
    const { classes } = this.props;
    var list=
    <List className={this.props.flag % 2 == 0 ? classes.white : classes.purple}  >
    <ListItem>
        <ListItemAvatar>
        <Avatar>
          {this.icon(this.props.item.category)}
        </Avatar>
        </ListItemAvatar>
        <ListItemText primary={this.props.item.name} 
          secondary={this.props.item.time.substr(8,2)+this.props.item.time.substr(4,3)+'-'+this.props.item.time.substr(0,4)+' '+this.props.item.time.substr(11,5)} />
        {this.state.editable ? "" 
          : <div>
              <Button variant="contained" color="secondary" startIcon={<DeleteIcon />} onClick={this.props.handleDelete}>Delete</Button>
              <Button variant="contained" startIcon={<EditIcon />} onClick={this.handleEdit.bind(this)}>Edit</Button>
            </div>}
        
    </ListItem>
    </List>
    var ele = this.state.editable ?
      <div>
      {list}
      <TextField label="name" inputRef={this.nameRef} placeholder='Enter the name of the item'  defaultValue={this.props.item.name} />
      <TextField label="time" inputRef={this.timeRef} type="datetime-local" defaultValue={this.props.item.time}
            className={classes.textField} InputLabelProps={{shrink: true,}} />      
      <FormControl className={classes.formControl}>
        <InputLabel>Category</InputLabel>
        <Select value={this.state.category} name='category' defaultValue={this.props.item.category} inputRef={this.categoryRef}>
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
      <Button variant="contained" color="secondary" startIcon={<DeleteIcon />} onClick={this.props.handleDelete}>Delete</Button>
      <Button variant="contained" startIcon={<PublishIcon />} onClick={this.handleEdit.bind(this)}>Update</Button>
      </div> 
      : list;
    return (
      <React.Fragment>
        {ele}
      </React.Fragment>
    );
  }
}

Item.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Item);
