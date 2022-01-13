import React from 'react';
import { Navigate } from 'react-router-dom';

class LogIn extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {
                userName: "",
                password: ""
            },
            redirect: false
        }
    }

    handleChange = (e) => {
        const updatedUser = {...this.state.user};
        const inputField = e.target.name;
        const inputValue = e.target.value;
        updatedUser[inputField] = inputValue;

        this.setState({user: updatedUser});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.mockLogin(this.state.user);
        this.setState({redirect: true});
    }

    render() {
        if (this.state.redirect) {
            return (<Navigate to="/userProfile"></Navigate>)
        }

        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit}>
                    <div className='mx-auto d-flex flex-column row'>
                        <label htmlFor='userName' className='form-label py-3 px-1 m-0'>Username: </label>
                        <input type="text" name='userName' onChange={this.handleChange} value={this.state.user.userName} className='form-control'></input>
                    </div>
                    <div className='mx-auto d-flex row'>
                        <label htmlFor='password' className='form-label py-3 px-1 m-0'>Password: </label>
                        <input type="password" name="password" className='form-control'></input>
                    </div>
                    <button className='btn btn-primary my-4 w-25 mx-auto d-flex justify-content-center'>Log In</button>
                </form>
            </div>
        )
    }
}

export default LogIn;