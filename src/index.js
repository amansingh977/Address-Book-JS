const AddressBook = require('./services/AddressBook');
const Contact = require('./models/Contact');

const addressBook = new AddressBook();

const contact1 = new Contact(
    "Aman", "Singh", "Bhopal", "India", "In", "10001", "1234567890", "amansinghrajawat09@gmail.com"
);
console.log(addressBook.addContact(contact1));
console.log(addressBook.getAllContacts());
