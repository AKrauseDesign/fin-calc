import React  from 'react'; 

// @material-ui  
import Icon from '@material-ui/core/Icon'; 
import TextField from '@material-ui/core/TextField'; 
import Button from '@material-ui/core/Button'; 


class BasicForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <TextField type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <Button variant='contained' color="primary" type="submit">Submit</Button>
      </form>
    );
  }
}

export default BasicForm;