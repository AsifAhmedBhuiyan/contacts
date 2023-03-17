'use strict';

class Contact {
  constructor(name, city, email) {
    this._name = name;
    this._city = city;
    this._email = email;
  }

  get name() {
    return this._name;
  }

  get city() {
    return this._city;
  }

  get email() {
    return this._email;
  }
}

const contactList = [];

function addContact() {
  const contactInfo = document.getElementById("contact-info").value.trim();
  const [name, city, email] = contactInfo.split(",");
  const input = document.getElementById("input")

  if (contactList.length >= 9) {
    return;
  }

  if (!name || !city || !email) {
    input.innerText = "Please enter name, city, and email.";
    return;
  }

  if (!email.includes("@")) {
    input.innerText = "Please enter a valid email.";
    return;
  }

  const contact = new Contact(name, city, email);
  contactList.unshift(contact);
  listContacts();
  updateCount();

  const inputField = document.getElementById("contact-info");
  inputField.value = "";
  inputField.placeholder = "Contact info (name, city, email)";
}

function deleteContact(index) {
  if (index >= 0 && index < contactList.length) {
    contactList.splice(index, 1);
    listContacts();
    updateCount();
  }
}

function listContacts() {
  const contactListDiv = document.querySelector(".contact-list");
  contactListDiv.innerHTML = "";
  
  
  for (let i = 0; i < contactList.length; i++) {
    const contact = contactList[i];
    
    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contact");
    
    const nameP = document.createElement("p");
    nameP.textContent = `Name: ${contact.name}`;
    
    const cityP = document.createElement("p");
    cityP.textContent = `City: ${contact.city}`;
    
    const emailP = document.createElement("p");
    emailP.textContent = `Email: ${contact.email}`;
    
    contactDiv.appendChild(nameP);
    contactDiv.appendChild(cityP);
    contactDiv.appendChild(emailP);
    
    contactDiv.addEventListener("click", function() {
      deleteContact(i);
    });
    
    contactListDiv.appendChild(contactDiv);
  }
}

function updateCount() {
  const countDiv = document.getElementById("count");
  countDiv.textContent = `Number of contacts: ${contactList.length}`;
}

const addButton = document.querySelector("button");
addButton.addEventListener("click", addContact);





