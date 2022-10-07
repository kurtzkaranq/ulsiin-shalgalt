const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListsSchema = new Schema({
  title: {
    type: String,
  },
  status: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

const Lists = mongoose.model("lists", ListsSchema);

module.exports = Lists;
