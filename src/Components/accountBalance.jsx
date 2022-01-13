import React from 'react';

class AccountBalance extends React.Component {
    constructor(props) {
        super();
        this.state = {
            debits: props.debits ? props.debits : 0,
            credits: props.credits ? props.credits : 0,
        }
    }

    render() {
        console.log("Credits: ", this.state.credits);
        let creditsBal = 0;
        // this.state.credits.forEach(e => {
        //     creditsBal += e.amount;
        //     console.log("current amt: ", creditsBal);
        // })

        return (
            <div>
                Account balance: {creditsBal}
            </div>
        );
    }
}

export default AccountBalance;