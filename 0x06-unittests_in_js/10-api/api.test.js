const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const { expect } = require('chai');

// Set up the Express app for testing
const app = express();
app.use(bodyParser.json());

app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.send(`Welcome ${userName}`);
});

describe('API tests', () => {
  describe('GET /available_payments', () => {
    it('should return the correct payment methods', (done) => {
      request(app)
        .get('/available_payments')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.deep.equal({
            payment_methods: {
              credit_cards: true,
              paypal: false
            }
          });
          done();
        });
    });
  });

  describe('POST /login', () => {
    it('should return a welcome message with the username', (done) => {
      request(app)
        .post('/login')
        .send({ userName: 'Betty' })
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.text).to.equal('Welcome Betty');
          done();
        });
    });
  });
});
