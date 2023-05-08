const RequestError = require('../../helpers/RequestError');
const { Contact } = require('../../models/contact');

const removeById = async (req, res, _) => {
  const { id } = req.params;
  const removeBook = await Contact.findByIdAndRemove(id);

  if (!removeBook) {
    throw RequestError(404, 'Not found');
  }
  res.status(200).json({
    message: 'Contact deleted',
  });
};

module.exports = removeById;
