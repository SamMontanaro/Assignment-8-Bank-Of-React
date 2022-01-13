import React from 'react';
import { Link } from 'react-router-dom';

class UserProfile extends React.Component {
    render() {
        return (
            <div>
                <h1 className='text-center bg-warning m-0 p-3'>User Profile</h1>

                <div className='container'>
                    <div className='d-flex justify-content-center'>
                        <Link to={"/"} className='m-3 d-block'>Home</Link>
                        <Link to={"/userProfile"} className='m-3 d-block'>User Profile</Link>
                        <Link to={"/debits"} className='m-3 d-block'>Debits</Link>
                        <Link to={"/credits"} className='m-3 d-block'>Credits</Link>
                    </div>

                    <div className='card text-dark bg-light mt-3'>
                        <div className='card-body'>
                            <div className='card-text'>
                                <p className='p-3 pb-0'><b>Username: </b>{this.props.userName}</p>
                                <p className='p-3'><b>Member Since: </b>{this.props.memberSince}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserProfile;