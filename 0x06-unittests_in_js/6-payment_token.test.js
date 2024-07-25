const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a successful response when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        try {
          expect(response).to.deep.equal({ data: 'Successful response from the API' });
          done();
        } catch (error) {
          done(error);
        }
      })
      .catch(done);
  });

  it('should not resolve when success is false', (done) => {
    getPaymentTokenFromAPI(false)
      .then(() => {
        done(new Error('Expected promise to be rejected or to not resolve'));
      })
      .catch(() => {
        done();
      });
  });
});
