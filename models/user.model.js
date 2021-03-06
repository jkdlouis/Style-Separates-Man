const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require('mongoose-unique-validator');

let schema = new Schema({
  firstName: { type: String || null, required: true },
  lastName : { type: String || null, required: true },
  password : { type: String || null, required: true },
  address  : { type: String || null },
  city     : { type: String || null },
  zipcode  : { type: String || null },
  state    : { type: String || null },
  email    : { type: String || null, required: true, unique: true },
  birthMonth : { type: String || null },
  birthDate : { type: Number || null },
  birthYear : { type: Number || null},
  favorMartialArt : { type: String || null},
  product : [{ type: Schema.Types.ObjectId, ref: 'Product'}]
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);