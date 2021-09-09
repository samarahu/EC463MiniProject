// src/components/contacts.js

import React from 'react'

const Contacts = ({ contacts }) => {
  return (
    <div>
      <center><h1>Recipe Ingredient Nutritional Information</h1></center>
      {contacts.map((contact) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{contact.description}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{"Nutritional Information:"}</h6>
            <p class="card-text">{contact.foodNutrients[0].nutrientName + ": " + contact.foodNutrients[0].nutrientNumber + " " + contact.foodNutrients[0].unitName}</p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Contacts