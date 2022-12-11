const mongoose = require("mongoose");

const tokenSchema = mongoose.Schema(
  {
    token: {
      type: String,
      require: true,
      index: true,
    },
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      require: true,
    },
    type: {
      type: String,
      enum: [
        'refresh', 'auth'
      ],
      require: true,
    },
    expires: {
      type: Date,
      require: true,
    },
    blacklisted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Token = mongoose.model('Token', tokenSchema);
module.exports= Token;
