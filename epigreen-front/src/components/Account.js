import axios from "axios";
import {GET_ACCOUNTS, LOCAL_HOST_ACCOUNT} from "../constants/back";
import React, {useEffect, useState} from "react";

export const getAccountById = async (accountId) => {
    try {
        const response = await axios.get(LOCAL_HOST_ACCOUNT + accountId);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération du compte : ", error);
        return null;
    }
};

export default function Account() {
    const [accounts, setAccounts] = useState([]);

    const setAccountData = async () => {
        axios.get(GET_ACCOUNTS).then((response) => {
            setAccounts(response.data);
        }).catch(error => {
            alert("Error occurred while loading accounts : " + error);
        });
    };

    useEffect(() => {
        setAccountData();
    }, []);

    if (accounts.length === 0) return <div className="container text-center">No account</div>;
    console.log(accounts);

    return (
        <div className="container text-center">
            <h4 className="mx-2">Liste des comptes</h4>
            <div className="row">
                <table className="table table-sm table-bordered table-hover">
                    <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Prénom</th>
                        <th scope="col">Mail</th>
                        <th scope="col">Éco-Points</th>
                    </tr>
                    </thead>
                    <tbody className="table-group-divider">
                    {
                        accounts.map((account, index) => (
                            <tr key={index}>
                                <th scope="row">{account.accountId}</th>
                                <td>{account.customer.lastname}</td>
                                <td>{account.customer.firstname}</td>
                                <td>{account.mail}</td>
                                <td>{account.ecologyPoints}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};
