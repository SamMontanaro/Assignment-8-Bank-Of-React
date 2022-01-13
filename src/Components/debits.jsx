import React,  {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AccountBalance from "./accountBalance";

function Debits() {
    const [debits, setDebits] = useState([]);

    const getDebits = async () => {
        await axios
            .get("https://moj-api.herokuapp.com/debits")
            .then(response => {
                setDebits(response.data);
            });
    }

    useEffect(() => {
        getDebits();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const date = new Date();
        setDebits([...debits, {
            description: document.getElementById("descInput").value,
            amount: parseFloat(document.getElementById("amtInput").value),
            date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        }]);
    }

    return (
        <div>
            <h1 className="text-center bg-warning m-0 p-3">Debits</h1>
            
            <div className='d-flex justify-content-center'>
                <Link to={"/"} className='m-3 d-block'>Home</Link>
                <Link to={"/userProfile"} className='m-3 d-block'>User Profile</Link>
                <Link to={"/debits"} className='m-3 d-block'>Debits</Link>
            </div>

            <table className="table table-light table-striped table-bordered text-center my-0">
                <thead className="table-dark">
                    <tr>
                        <th className="col-6">Description</th>
                        <th className="col-3">Amount</th>
                        <th className="col-3">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        debits.map((item, i) => {
                            return (
                            <tr key={item.id ? item.id : i}>
                                <td>{item.description}</td>
                                <td>{item.amount}</td>
                                <td>{item.date.slice(0,10)}</td>
                            </tr>
                            )
                        })
                    }
                    <tr>
                        <td>
                            <input form="addDebit" required type="text" placeholder="Enter a description" className="d-flex p-1 mx-auto" id="descInput"></input>
                        </td>
                        <td>
                            <input form="addDebit" required type="number" step={"any"} min={"0.01"} placeholder="Enter an amount" className="d-flex p-1 mx-auto" id="amtInput"></input>
                        </td>
                        <td>
                            <form id="addDebit" onSubmit={handleSubmit}>
                                <button type="submit" className="btn btn-dark">Add Debit</button>
                            </form>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Debits;