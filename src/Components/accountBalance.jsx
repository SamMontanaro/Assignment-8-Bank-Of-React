import React, { useEffect } from 'react';

class AccountBalance extends React.Component {
    render() {
        console.log("Credits: ", this.props.creditsTotal);
        console.log("Debits: ", this.props.debitsTotal);

        return (
            <div>
                Account balance: {this.props.creditsTotal || this.props.debitsTotal}
            </div>
        );
    }
}

export default AccountBalance;