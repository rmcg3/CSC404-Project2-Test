"use strict";

const mongoose = require("mongoose");
const subscriberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  grade1: {
    type: String,
    required: true
  },
  grade2: {
    type: String,
    required: true
  },
  grade3: {
    type: String,
    required: true

  },
  grade4: {
    type: String,
    required: true
  }
});

subscriberSchema.methods.getInfo = function() {
  return `Name: ${this.name} grade1: ${this.grade1} grade2: ${this.grade2} grade3: ${this.grade3} grade4: ${this.grade4}`;
};

subscriberSchema.methods.findLocalSubscribers = function() {
  return this.model("Subscriber")
    .find({
      name: this.name
    })
    .exec();
};

module.exports = mongoose.model("Subscriber", subscriberSchema);