import Layout from '../components/Layout';
import React, {Component} from 'react';

class NameForm extends Component {
    // constructor for react component is called before it's mounted.
    // Uses for constructor in react:
    // 1. initializing local state by assigning an object to this.state
    // 2. binding event handler methos to an instance.
    constructor(props) {
        // only need to pass props to super() when you want to access this.props in constructor
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        alert(`A name was submitted: ${this.state.value}`);
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <Layout>
                    <form onSubmit={this.handleSubmit}>
                        <label>Name:</label>
                        <input
                            type="text"
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                        <input type="submit" value="Submit" />
                    </form>
                </Layout>
            </div>
        );
    }
}
export default NameForm;
