const table = document.getElementById("contacts");
const addContact = document.getElementById("add-contact")
const url = "https://serene-tundra-64006.herokuapp.com/contacts";

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

// saat pertama kali website dibuka
fetch(url)
  .then(response => response.json())
  .then(contacts => {
    return contacts.map((contact, index) => {
      const tr = createNode('tr');

      let td = createNode('td');
      td.textContent = index;
      tr.appendChild(td);

      td = createNode('td')
      td.textContent = `${contact.first_name}`
      tr.appendChild(td);

      td = createNode('td');
      td.textContent = `${contact.last_name}`
      tr.appendChild(td);

      td = createNode('td');
      td.textContent = `${contact.phone}`
      tr.appendChild(td);

      td = createNode('td');
      td.

      table.appendChild(tr);
    })
  })
  .catch(error => console.error(error));