import React, { useEffect, useState } from 'react';
import axios from "axios";
import '../styles/Sample.css';
import { GET_SAMPLES, LOCAL_HOST_SAMPLE, UPDATE_SAMPLES, ADD_SAMPLES } from "../constants/back";

export default function Sample() {
  const [samples, setSamples] = useState([]);  // État pour stocker la liste des échantillons
  //AJOUT CHAT GPT=================================
  const [newSample, setNewSample] = useState({
    dateSample: '', // Date de l'échantillon
    stringSample: '', // Champ texte de l'échantillon
    floatSample: '', // Champ numérique de l'échantillon
    sampleType: 'SAMPLE_TYPE1' // Exemple de valeur par défaut pour le type d'échantillon
  });
  const [isAdding, setIsAdding] = useState(false);  // État pour gérer l'affichage du formulaire d'ajout

  // Fonction pour charger les échantillons depuis l'API
  const setSampleData = async () => {
    axios.get(GET_SAMPLES).then((response) => {
      setSamples(response.data);  // Met à jour l'état avec les échantillons récupérés
    }).catch(error => {
      alert("Error Ocurred while loading data:" + error);  // Affiche une erreur en cas de problème
    });
  }

  // Fonction de confirmation avant de supprimer un échantillon
  const confirmRemoveSample = (id) => {
    if (window.confirm('Are you sure?')) {
      removeSample(id);  // Appel de la fonction de suppression si l'utilisateur confirme
    }
  };

  // Fonction pour supprimer un échantillon
  const removeSample = async (id) => {
    axios.delete(LOCAL_HOST_SAMPLE + id).then((response) => {
      setSampleData();  // Recharge les données après suppression
    }).catch(error => {
      alert("Error Ocurred in removeSample:" + error);  // Affiche une erreur si la suppression échoue
    });
  }

  // Fonction pour gérer le changement de date d'un échantillon
  const handleChangeDate = (idSample, newDate) => {
    setSamples(prevData => prevData.map(
      row => row.idSample === idSample ? { ...row, dateSample: newDate } : row)  // Met à jour la date de l'échantillon
    );
  }

  // Fonction pour mettre à jour la date d'un échantillon dans la base de données
  const updateDate = async (sample) => {
    axios.post(UPDATE_SAMPLES, sample).then((response) => {
      setSampleData();  // Recharge les données après la mise à jour
    }).catch(error => {
      alert("Error Ocurred in updateDate:" + error);  // Affiche une erreur si la mise à jour échoue
    });
  }

// AJOUT CHAT GPT ========================================================
  // Fonction pour ajouter un nouvel échantillon
  const addSample = async () => {
    axios.post(ADD_SAMPLES, newSample).then(() => {
      setSampleData();  // Recharge les données après l'ajout
      setIsAdding(false);  // Masque le formulaire d'ajout
    }).catch(error => {
      alert("Error occurred while adding sample: " + error);  // Affiche une erreur si l'ajout échoue
    });
  };
  //=========================================================

  useEffect(() => {
    setSampleData();  // Charge les données des échantillons dès le premier rendu du composant
  }, []);

//AJOUT ==========================================================
  // Fonction pour gérer les changements dans les champs du formulaire d'ajout
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSample(prevState => ({
      ...prevState,
      [name]: value  // Met à jour l'état de l'échantillon en fonction du champ modifié
    }));
  };
  //============================================================

  // Si aucun échantillon n'est trouvé, affiche un message
  if (samples.length === 0)
    return (<div className="container text-center">No samples</div>);

  return (
    <div className="container text-center">
      <h4 className="mx-2">Samples List</h4>



       //======================================================

      {/* Bouton pour afficher le formulaire d'ajout */}
      <button
        className="btn btn-outline-primary mb-3"
        onClick={() => setIsAdding(true)}  // Affiche le formulaire d'ajout d'échantillon
      >
        Add a Sample
      </button>
      {/* Formulaire d'ajout de sample */}
      {isAdding && (
        <div className="form-container mb-4">
          <h5>Add New Sample</h5>
          <div className="form-group">
            <label>Date:</label>
            <input
              type="date"
              name="dateSample"
              value={newSample.dateSample}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>String:</label>
            <input
              type="text"
              name="stringSample"
              value={newSample.stringSample}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Float:</label>
            <input
              type="number"
              name="floatSample"
              value={newSample.floatSample}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Sample Type:</label>
            <select
              name="sampleType"
              value={newSample.sampleType}
              onChange={handleInputChange}
              className="form-control"
            >
              <option value="SAMPLE_TYPE1">SAMPLE_TYPE1</option>
              <option value="SAMPLE_TYPE2">SAMPLE_TYPE2</option>
            </select>
          </div>
          <button className="btn btn-outline-success mt-2" onClick={addSample}>Save</button>
          <button className="btn btn-outline-secondary mt-2" onClick={() => setIsAdding(false)}>Cancel</button>
        </div>
      )}
      //==========================================================


      {/* Liste des échantillons */}
      <div className="row">
        <table className="table table-sm table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Date</th>
              <th scope="col">String</th>
              <th scope="col">Float</th>
              <th scope="col">Type</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {
              samples.map((sample, index) => (
                <tr key={index}>
                  <th scope="row">{sample.idSample}</th>
                  <td>
                    <div className="input-group mb-3">
                      <input type="date"
                             className="form-control"
                             aria-describedby="button-addon2"
                             value={sample.dateSample.substring(0, 10)}  // Affichage de la date (au format YYYY-MM-DD)
                             onChange={e => handleChangeDate(sample.idSample, e.target.value)}  // Modification de la date
                      />
                      <button className="btn btn-outline-primary"
                              type="button"
                              id="button-addon2"
                              onClick={() => updateDate(sample)}  // Sauvegarde de la nouvelle date
                      >Save</button>
                    </div>
                  </td>
                  <td>{sample.stringSample}</td>
                  <td>{sample.floatSample}</td>
                  <td>{sample.sampleType}</td>
                  <td>
                    <button type="button"
                            className="btn btn-outline-danger"
                            onClick={() => confirmRemoveSample(sample.idSample)}  // Confirmation avant suppression
                    >Delete</button>
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
