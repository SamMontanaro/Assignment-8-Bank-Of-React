import React, { useEffect } from 'react';

class AccountBalance extends React.Component {
    render() {
        return (
            <div className='d-flex justify-content-center p-3'>
                Account balance: {(this.props.accountBalance).toFixed(2)}
            </div>
        );
    }
}

export default AccountBalance;