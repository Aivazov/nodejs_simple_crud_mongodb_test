const express = require('express');
const controllers = require('../../controllers/contacts/index');
const ctrlWrapper = require('../../helpers/ctrlWrapper');
const { validateBody, isValidId } = require('../../middlewares/');
const { schemas } = require('../../models/contact');

const router = express.Router();

router.get('/', ctrlWrapper(controllers.getAll));

router.get('/:id', isValidId, ctrlWrapper(controllers.getById));

router.post('/', validateBody(schemas.addSchema), ctrlWrapper(controllers.add));

router.delete('/:id', isValidId, ctrlWrapper(controllers.removeById));

router.put(
  '/:id',
  isValidId,
  validateBody(schemas.addSchema),
  ctrlWrapper(controllers.updateById)
);

router.patch(
  '/:id/favorite',
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrlWrapper(controllers.updateFavorite)
);

module.exports = router;
