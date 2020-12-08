import React, { useState } from "react";
import ReactDOM from "react-dom";
import Client from "./Client";
import ClientForm from "./ClientForm";

import "./styles.css";

const App =  () => {

  const [clients, setNewCilent] = useState([
    { id: 1, nom: "Lior Chamla" },
    { id: 2, nom: "Magali Pernin" },
    { id: 3, nom: "Joseph Durand" }
  ])

  const handleDelete = id => {
    const updatetedClients = [...clients];
    const index = clients.findIndex(client => client.id === id);

    updatetedClients.splice(index, 1);

    setNewCilent(updatetedClients);
  };

  const handleAdd = client => {
    const updatetedClients = [...clients];
    updatetedClients.push(client);

    setNewCilent(updatetedClients);
  };


    const title = "Liste des clients";

    return (
      <div>
        <h1>{title}</h1>
        <ul>
          {clients.map(client => (
            <Client
              key={client.id}
              details={client}
              onDelete={handleDelete}
            />
          ))}
        </ul>
        <ClientForm onClientAdd={handleAdd} />
      </div>
    );
  }

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement); 
