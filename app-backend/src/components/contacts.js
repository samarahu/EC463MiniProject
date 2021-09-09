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
            <p class="card-text">{contact.foodNutrients[1].nutrientName + ": " + contact.foodNutrients[1].nutrientNumber + " " + contact.foodNutrients[1].unitName}</p>
            <p class="card-text">{contact.foodNutrients[2].nutrientName + ": " + contact.foodNutrients[2].nutrientNumber + " " + contact.foodNutrients[2].unitName}</p>
            <p class="card-text">{contact.foodNutrients[3].nutrientName + ": " + contact.foodNutrients[3].nutrientNumber + " " + contact.foodNutrients[3].unitName}</p>
            <p class="card-text">{contact.foodNutrients[4].nutrientName + ": " + contact.foodNutrients[4].nutrientNumber + " " + contact.foodNutrients[4].unitName}</p>
            <p class="card-text">{contact.foodNutrients[5].nutrientName + ": " + contact.foodNutrients[5].nutrientNumber + " " + contact.foodNutrients[5].unitName}</p>
            <p class="card-text">{contact.foodNutrients[6].nutrientName + ": " + contact.foodNutrients[6].nutrientNumber + " " + contact.foodNutrients[6].unitName}</p> 
          </div>
        </div>
      ))}
    </div>
  )
};

export default Contacts