"use strict";

process.env.NODE_ENV = "test";

const Subscriber = require("../models/subscriber"),
  {
    expect
  } = require("chai");
require("../main");

beforeEach(done => {
  Subscriber.remove({}).then(() => {
    done();
  });
});

describe("SAVE student", () => {
  it("it should save one student", done => {
    let testSub = new Subscriber({
      name: 'Braden',
      grade1: 'A',
      grade2: 'B',
      grade3: 'C',
      grade4: 'A'
    });

    testSub.save().then(() => {
      Subscriber.find({}).then(result => {
        expect(result.length).to.eq(1);
        expect(result[0]).to.have.property("_id");
        done();
      });
    });
  });
});