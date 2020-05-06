"use strict";

const chai = require("chai"),
  {
    expect
  } = chai,
  subscribersController = require("../controllers/subscribersController"),
  chaiHTTP = require("chai-http"),
  app = require("../main");

chai.use(chaiHTTP);

describe("subscribersController", () => {
  describe("/subscribers GET", () => {
    it("it should GET all the students", done => {
      chai
        .request(app)
        .get("/subscribers")
        .end((errors, res) => {
          expect(res).to.have.status(200);
          expect(errors).to.be.equal(null);
          done();
        });
    });
  });

  describe("getSubscriberParams", () => {
    it("should convert request body to contain the name attributes of the user object", () => {
      var body = {
        name: "Nate",
        grade1: "A",
        grade2: "C",
        grade3: "B",
        grade4: "A"
      };
      expect(subscribersController.getSubscriberParams(body)).to.include({
        name: "Nate",
        grade1: "A",
        grade2: "C",
        grade3: "B",
        grade4: "A"
      });
    });

    it("should return an empty object with empty request body input", () => {
      var emptyBody = {};
      expect(subscribersController.getSubscriberParams(emptyBody)).to.deep.include({});
    });
  });
});