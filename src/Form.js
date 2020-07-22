import React, { Component } from 'react'

//purpose of this form is to update state of form in response to a change in form
//when a user submits, all that data will pass to the app state, which will then update the table

class Form extends Component {
  //set initial state of the form to be an object with empty properties and assign that initial state to this.state
  initialState = {
    name: '',
    job: '',
  }
  state = this.initialState

  //this runs every time a change is made to an input
  handleChange = (event) => {
    const { name, value } = event.target

    this.setState({//to set the state of forms key and value of the inputs
      [name]: value,
    })
  }
  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

  render() {
    const { name, job } = this.state;

    return (
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange} />
        {/* call handle change method */}
        <label htmlFor="job">Job</label>
        <input
          type="text"
          name="job"
          id="job"
          value={job}
          onChange={this.handleChange} />
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );

  }

}
export default Form;