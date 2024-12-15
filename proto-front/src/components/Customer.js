import React, {useState } from 'react';
import axios from "axios";
import {GET_CUSTOMER} from "../constants/back";

export default function Customer() {
    const [customers, setCustomer] = useState([]);

    /*return (
        <div className="Customer">
            <div className="container text-center">
                <h4 className="mx-2">Test affichage clients :</h4>
            </div>
        </div>
    );*/

    if (customers.length === 0)
        return (<div className="container text-center">No customer</div>);


    const setSampleData = async () => {
        axios.get(GET_CUSTOMER).then((response) => {
            setCustomer(response.data);
        }).catch(error => {
            alert("Error Ocurred while loading data:" + error);
        });
    }
}
