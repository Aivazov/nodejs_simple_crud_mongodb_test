const RequestError = require('../../helpers/RequestError');
const { Contact } = require('../../models/contact');

const updateById = async (req, res, _) => {
  const { id } = req.params;

  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true }); //new true needs to return updated result
  if (!result) {
    throw RequestError(404, 'Not found');
  }
  res.json({ message: 'Update was successful', result });
};

module.exports = updateById;
