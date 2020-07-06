import React, { Component } from 'react';
class ContactForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            firstname: '',
            lastname: '',
            mobile: '',
            email: '',
            city: '',
            country: '',
            message: ''
        }
    }

    HandleFirstNameChange = event => {
        this.setState({
            firstname: event.target.value
        })
    }

    HandleLastNameChange = event => {
        this.setState({
            lastname: event.target.value
        })
    }

    HandleMobileChange = event => {
        this.setState({
            mobile: event.target.value
        })
    }

    HandleEmailChange = event => {
        this.setState({
            email: event.target.value
        })
    }


    HandleCityChange = event => {
        this.setState({
            city: event.target.value
        })
    }


    HandleCountryChange = event => {
        this.setState({
            country: event.target.value
        })
    }

    HandleMessageChange = event => {
        this.setState({
            message: event.target.value
        })
    }




    HandleSubmit = event => {
        alert('Your details are successfully submitted')
    }

    render() {
        return (
            <form className="container" onSubmit={this.HandleSubmit}>
                <div>
                    <label>First Name</label>
                    <input type="text" className="col-sm-4" value={this.state.firstname} onChange={this.HandleFirstNameChange} />


                    <div>
                        <label>Last Name</label>
                        <input type="text" className="col-sm-4" value={this.state.lastname} onChange={this.HandleLastNameChange} />
                    </div>

                    <label>Mobile</label>
                    <input type="text" className="col-sm-4 ml-4" value={this.state.mobile} onChange={this.HandleMobileChange} />

                    <div>
                        <label>Email</label>
                        <input type="text" className="col-sm-4 ml-5 " value={this.state.email} onChange={this.HandleEmailChange} />
                    </div>

                    <label>City</label>
                    <input type="text" className="col-sm-4 ml-5" value={this.state.city} onChange={this.HandleCityChange} />

                    <div>
                        <label>Country</label>
                        <input type="text" className="col-sm-4 ml-4" value={this.state.country} onChange={this.HandleCountryChange} />
                    </div>
                    <div>
                        <label>Message</label>
                        <textarea className="col-sm-4 ml-4" value={this.state.message} onChange={this.HandleMessageChange} />
                    </div>

                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default ContactForm


