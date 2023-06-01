import React from "react";
import Card from "./Card";
import contacts from "../emojis";

function CreateCard(contacts) {
  return (
    <Card
      key={contacts.id}
      name={contacts.name}
      img={contacts.imgURL}
      tel={contacts.phone}
      email={contacts.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className='heading'>My contactss</h1>
      {contacts.map(CreateCard)}
    </div>
  );
}

export default App;
