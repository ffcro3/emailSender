const { Schema, model } = require("mongoose");

const ClienteSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String
    },
    emailSent: {
      type: Boolean
    },
    dateSent: {
      type: Date
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("Cliente", ClienteSchema);
