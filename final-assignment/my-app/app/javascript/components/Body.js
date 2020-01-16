import React from "react"
import PropTypes from "prop-types"
import AllItems from './AllItems'
import NewItem from './NewItem'
import $ from 'jquery'
import Grid from '@material-ui/core/Grid';
class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    };
  }
  componentDidMount() {
    $.getJSON('api/v1/items.json', (response) => { this.setState({ items: response }) });
  }
  handleSubmit(item) {
    var newState = this.state.items.concat(item);
    this.setState({ items: newState })
  }
  removeItemClient(id) {
    var newItems = this.state.items.filter((item) => {
        return item.id != id;
    });
    this.setState({ items: newItems });
  }
  handleDelete(id) {
    $.ajax({
        url: `/api/v1/items/${id}`,
        type: 'DELETE',
        success:() => {
          this.removeItemClient(id);
       }
    });
  }
  updateItems(item) {
    var items = this.state.items.filter((i) => { return i.id != item.id });
    items.push(item);

    this.setState({items: items });
  }
  handleUpdate(item) {
    $.ajax({
            url: `/api/v1/items/${item.id}`,
            type: 'PUT',
            data: { item: item },
            success: () => {
                this.updateItems(item);

            }
        }
  )}
  render () {
    return (
      <React.Fragment>
        <Grid container spacing={5} direction="column" alignItems="center" justify="center" >
          <Grid item xs={12}><NewItem handleSubmit={this.handleSubmit.bind(this)}/></Grid> 
          <Grid item xs={12}><AllItems  items={this.state.items}  handleDelete={this.handleDelete.bind(this)} onUpdate={this.handleUpdate.bind(this)}/>  </Grid>  
        </Grid> 
      </React.Fragment>
    );
  }
}

export default Body
