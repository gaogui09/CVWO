import React from "react"
import PropTypes from "prop-types"
import TextField from '@material-ui/core/TextField';
class SearchBox extends React.Component {
    handleChange(event) {
        var newInput = event.target.value;
        this.props.onSearchTextUpdate(newInput);
    }
  render () {
    return (
      <React.Fragment>
        <div className="searchBox">
            <TextField variant="filled" helperText="※ keywords can be name / time / category of a event" type="text" onChange={this.handleChange.bind(this)} placeholder="enter keywords to search"/>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchBox