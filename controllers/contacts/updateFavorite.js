const RequestError = require('../../helpers/RequestError');
const { Contact } = require('../../models/contact');

const updateFavorite = async (req, res, _) => {
  const { id } = req.params;

  console.log('updateFavorite works');
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw RequestError(404, 'Not found');
  }
  res.json({ message: 'Update was successful', result });
};

module.exports = updateFavorite;
