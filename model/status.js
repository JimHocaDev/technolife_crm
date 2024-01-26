const { model, Schema } = require("mongoose");

const StatusSchema = new Schema(
  {
    statusName: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    lids: [
      {
        type: Schema.Types.ObjectId,
        ref: "Lid",
      },
    ],
  },
  { timestamps: true }
);

module.exports = model("Status", StatusSchema);
