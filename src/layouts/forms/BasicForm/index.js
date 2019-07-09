import React  from 'react'; 
import { makeStyles } from '@material-ui/core/styles'; 
import TextField from '@material-ui/core/TextField'; 
import Button from '@material-ui/core/Button'; 

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1), 
  }, 
  input: {
    display: 'none', 
  },
}));


class BasicForm extends React.Component {
    const classes = useStyles(); 

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
        <Button variant='raised' color="primary" type="submit">Submit</Button>
      </form>
    );
  }
}

export default function BasicForm() { 
  const classes = useStyles(); 

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  return ( 
    <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <TextField type="text" value={this.state.value} onChange={this.handleChange} />
      </label>
      <Button variant='contained' color="primary" className={classes.button} type="submit">Submit</Button>
    </form>
  )
}