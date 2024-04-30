const request = require('supertest');
const app = require('../app');

describe('GET /companies', () => {
  test('should return list of companies', async () => {
    const response = await request(app).get('/companies');
    expect(response.status).toBe(200);
    expect(response.body.companies).toBeDefined();
  });
});