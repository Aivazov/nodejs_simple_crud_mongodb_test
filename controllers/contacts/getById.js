const RequestError = require('../../helpers/RequestError');
const { Contact } = require('../../models/contact');

const getById = async (req, res, next) => {
  const { id } = req.params;
  const result = await Contact.findById(id);

  if (!result) {
    throw RequestError(404, 'Not found');
  }
  res.json(result);
};

module.exports = getById;
