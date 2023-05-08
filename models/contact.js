const { Schema, model } = require('mongoose');
const Joi = require('joi');
const { handleSchemaErrors } = require('../helpers');

const phoneRegexp = /^\(\d{3}\) \d{3}-\d{4}$/;

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for the contact'],
    },
    email: {
      type: String,
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    phone: {
      type: String,
      required: true,
      match: phoneRegexp, //example (294) 840-6685
      unique: true, //check that the book is Unique and will not repeat
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

contactSchema.post('save', handleSchemaErrors);

const Contact = model('contact', contactSchema);

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  favorite: Joi.bool(),
  phone: Joi.string().pattern(phoneRegexp).required(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.bool().required(),
});

const schemas = {
  addSchema,
  updateFavoriteSchema,
};

module.exports = {
  Contact,
  schemas,
};
