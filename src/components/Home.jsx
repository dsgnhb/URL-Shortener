import React, {Component} from 'react';
import {Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";


export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: '',
            customname: ''
        };
    }

    validateForm() {
        var regex = /\(?(?:(http|https|ftp):\/\/)?(?:((?:[^\W\s]|\.|-|[:]{1})+)@{1})?((?:www.)?(?:[^\W\s]|\.|-)+[\.][^\W\s]{2,4}|localhost(?=\/)|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(?::(\d*))?([\/]?[^\s\?]*[\/]{1})*(?:\/?([^\s\n\?\[\]\{\}\#]*(?:(?=\.)){1}|[^\s\n\?\[\]\{\}\.\#]*)?([\.]{1}[^\s\?\#]*)?)?(?:\?{1}([^\s\n\#\[\]]*))?([\#][^\s\n]*)?\)?/gi;
        return regex.test(this.state.url);
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        //Shorten URL
        //TODO: Remove whitepaces if there in custom name
    }

    render() {
        return (
            <div className="urlshortener">
                <img className="logo" src={require('../Logo.svg')}/>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="url" bsSize="large">
                        <ControlLabel>URL</ControlLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            value={this.state.url}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="customname" bsSize="large">
                        <ControlLabel>Eigener Name (optional)</ControlLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            value={this.state.customname}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <Button
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Kürzen
                    </Button>
                </form>
            </div>
        );
    }
}