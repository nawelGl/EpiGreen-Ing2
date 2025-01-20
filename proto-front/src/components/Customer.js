import React, { useEffect, useState } from 'react';
import axios from "axios";
import { GET_CUSTOMERS } from "../constants/back";

export default function Customer() {
    const [customers, setCustomers] = useState([]);

    const setCustomerData = async () => {
        axios.get(GET_CUSTOMERS).then((response) => {
            setCustomers(response.data);
        }).catch(error => {
            alert("Error occurred while loading customers: " + error);
        });
    };

    useEffect(() => {
        setCustomerData();
    }, []);

    if (customers.length === 0) return <div className="container text-center">No customers</div>;
    console.log(customers);

    return (
        <div className="container text-center">
            <h4 className="mx-2">Liste des clients</h4>
            <div className="row">
                <table className="table table-sm table-bordered table-hover">
                    <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Prénom</th>
                        <th scope="col">Adresse</th>
                    </tr>
                    </thead>
                    <tbody className="table-group-divider">
                    {
                        customers.map((customer, index) => (
                            <tr key={index}>
                                <th scope="row">{customer.customerId}</th>
                                <td>{customer.lastname}</td>
                                <td>{customer.firstname}</td>
                                <td>
                                    {customer.address.streetNumber} {customer.address.street},
                                    {customer.address.zipCode} {customer.address.city}
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};
