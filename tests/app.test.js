const request = require('supertest');
const app = require('../src/app'); 

describe('GET /', () => {
  it('responde Hola Mundo', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toMatch(/Hola Mundo/i); 
  });
});
