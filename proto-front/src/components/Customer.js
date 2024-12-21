import React, { useEffect, useState } from 'react';
import axios from "axios";
import { GET_CUSTOMERS } from "../constants/back";

export default function Customer() {
    const [customers, setCustomers] = useState([]);

    const setCustomerData = async () => {
        console.log("@@@@@@@@@@@@@@@@@@@@ TESTO TESTO @@@@@@@@@@@@@@@@@@@");
        axios.get(GET_CUSTOMERS).then((response) => {
            console.log("@@@@@@@@@@@@@@@@@@@@ RÉPONSE : ", response.data);
            setCustomers(response.data);
        }).catch(error => {
            alert("Error occurred while loading customers: " + error);
        });
    };

    useEffect(() => {
        setCustomerData();
    }, []);

    if (customers.length === 0) return <div className="container text-center">No customers</div>;

    return (
        <div className="container text-center">
            <h4 className="mx-2">Customer List</h4>
            <div className="row">
                <table className="table table-sm table-bordered table-hover">
                    <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                    </tr>
                    </thead>
                    <tbody className="table-group-divider">
                    {
                        customers.map((customer, index) => (
                            <tr key={index}>
                                <th scope="row">{customer.id}</th>
                                <td>{customer.name}</td>
                                <td>{customer.email}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};
