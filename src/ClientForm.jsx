import React, { useState } from "react";

const ClientForm = (props) => {

  const [newClients, setNewClient] = useState("");


  const handleChange = event => {
    setNewClient(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const id = new Date().getTime();
    const nom = newClients;

    props.onClientAdd({ id, nom });

    setNewClient("");

    // this.setState({ nouveauClient: "" });
  };

    return (
      <form onSubmit={handleSubmit}>
        <input
          value={newClients}
          onChange={handleChange}
          type="text"
          placeholder="Ajouter un client"
        />
        <button>Confirmer</button>
      </form>
    );
}

export default ClientForm;
