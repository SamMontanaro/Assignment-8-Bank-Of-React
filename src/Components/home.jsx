import React from 'react';
import { Link } from 'react-router-dom';
import AccountBalance from './accountBalance';

class Home extends React.Component {
    render () {
        return (
            <div>
                <h1 className='text-center bg-warning m-0 p-3'>Bank of React</h1>
                <div className='container'>
                    <div className='d-flex justify-content-center'>
                        <Link to={"/"} className='m-3 d-block'>Home</Link>
                        <Link to={"/userProfile"} className='m-3 d-block'>User Profile</Link>
                        <Link to={"/debits"} className='m-3 d-block'>Debits</Link>
                    </div>
                    <div className='m-3 d-flex justify-content-center'>
                        <AccountBalance accountBalance={this.props.accountBalance}></AccountBalance>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;