const { Contact } = require('../../models/contact');

const add = async (req, res, _) => {
  const newContact = await Contact.create(req.body);
  res.status(201).json({ message: 'Entry added successfully' });
};

module.exports = add;
