const { Contact } = require('../models');
const { isEmpty } = require('../helpers');

class ContactController {
  static readAllContacts(req, res) {
    return Contact.findAll()
      .then(contacts => {
        if (isEmpty(contacts)) {
          return res.status(404).send({
            message: 'Contact List is Empty'
          });
        }

        return res.status(200).send(contacts);
      })
      .catch(err => res.status(500).send(err));
  }

  static readOneContact(req, res) {
    return Contact.findByPk(req.params.id)
      .then(contact => {
        if (!contact) {
          return res.status(404).send({
            message: 'Contact Not Found'
          });
        }

        return res.status(200).send(contact);
      })
      .catch(err => res.status(500).send(err));
  }

  static addContact(req, res) {
    return Contact.create(req.body)
      .then(contact => res.status(201).send(contact))
      .catch(err => res.status(500).send(err));
  }

  static updateContact(req, res) {
    return Contact.findByPk(req.params.id)
      .then(contact => {
        if (!contact) {
          return res.status(404).send({
            message: 'Contact Not Found'
          });
        }

        return contact.update(req.body);
      })
      .then(contact => res.status(201).send(contact))
      .catch(err => res.status(500).send(err));
  }

  static deleteContact(req, res) {
    Contact.findByPk(req.params.id)
      .then(contact => {
        if (!contact) {
          return res.status(404).send({
            message: 'Contact Not Found'
          });
        }

        return contact.destroy();
      })
      .then(() => res.status(204).send())
      .catch(err => res.status(500).send(err));
  }
}

module.exports = ContactController;
