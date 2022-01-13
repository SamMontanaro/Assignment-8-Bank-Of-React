import React from 'react';

class AccountBalance extends React.Component {
    constructor(props) {
        super();
        this.state = {
            debits: undefined,
            credits: undefined,
            balance: props.accountBalance
        }
    }

    render() {
        return (
            <div>
                Account balance: {this.state.balance}
            </div>
        );
    }
}

export default AccountBalance;