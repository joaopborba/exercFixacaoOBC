function addContact(){
    const contactList = document.getElementById("contact-list");

    const h3 = document.createElement("h3");
    h3.innerText = 'Contato';

    const ul = document.createElement("ul");

    const nameLi = document.createElement('li');
    nameLi.innerText = 'Nome: '
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'fullname';
    
    nameLi.appendChild(nameInput);
    ul.appendChild(nameLi);

    const phoneLi = document.createElement('li');
    phoneLi.innerText = 'Telefone: '
    const phoneInput = document.createElement('input');
    phoneInput.type = 'text';
    phoneInput.name = 'phone';

    phoneLi.appendChild(phoneInput);
    ul.appendChild(phoneLi);


    contactList.append(h3, ul);
}

function removeContact(){
    const contactList = document.getElementById('contact-list');

    const titles = document.getElementsByTagName('h3');
    const contacts = document.getElementsByTagName('ul');

    contactList.removeChild(titles[titles.length - 1]);
    contactList.removeChild(contacts[contacts.length - 1]);


}