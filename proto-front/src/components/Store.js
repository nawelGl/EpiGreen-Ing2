import React, { useEffect, useState } from 'react';
import axios from "axios";
import { GET_STORES } from "../constants/back";

export default function Store(){
    const [stores, setStores] = useState([]);

    const setStoreData = async () => {
        axios.get(GET_STORES).then((response) => {
            setStores(response.data);
        }).catch(error => {
            alert("Error occurred while loading customers: " + error);
        });
    };

    useEffect(() => {
        setStoreData();
    }, []);

    if (stores.length === 0) return <div className="container text-center">No store</div>;

    return (
        <div className="container text-center">
            <h4 className="mx-2">Liste des magasins partenaires</h4>
            <div className="row">
                <table className="table table-sm table-bordered table-hover">
                    <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nom magasin</th>
                        <th scope="col">Adresse</th>
                    </tr>
                    </thead>
                    <tbody className="table-group-divider">
                    {
                        stores.map((store, index) => (
                            <tr key={index}>
                                <th scope="row">{store.storeId}</th>
                                <td>{store.name}</td>
                                <td>{store.address.streetNumber + " " + store.address.street + ", " + store.address.zipCode + " " + store.address.city}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};
