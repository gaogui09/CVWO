import React from "react"
import PropTypes from "prop-types"
import Item from "./Item"
import SearchBox from "./SearchBox"
class AllItems extends React.Component { 
  constructor(props) {
    super(props);
    this.state= {
      searchText: ''
    }
  }
  onUpdate(item) {
    this.props.onUpdate(item);
  }
  handleDelete(id) {
    this.props.handleDelete(id);
  }
  handleSearchTextUpdate(searchText) {
    this.state.searchText = searchText;
    this.setState(this.state);
  }
  render() {
    var flag = 0;
    var items= this.props.items.filter((item) => {
      var t = item.time.substr(8,2)+item.time.substr(4,3)+'-'+item.time.substr(0,4)+' '+item.time.substr(11,5);
      return item.name.toLowerCase().indexOf(this.state.searchText.toLowerCase()) > -1
        || t.indexOf(this.state.searchText.toLowerCase()) > -1
        || item.category.toLowerCase().indexOf(this.state.searchText.toLowerCase()) > -1;
    }).map((item) => {
      flag = flag + 1;
      return (
          <div key={item.id}>
              <Item item={item}
                    handleDelete={this.handleDelete.bind(this, item.id)}
                    handleUpdate={this.onUpdate.bind(this)}
                    flag={flag}/>
          </div>
      )
  });
    return(
      <React.Fragment>
        <div>
          <SearchBox onSearchTextUpdate={this.handleSearchTextUpdate.bind(this)}/>
          {items}
        </div>
      </React.Fragment>
    )
  }
}

export default AllItems
