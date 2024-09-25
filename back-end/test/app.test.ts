import request from 'supertest';
import app from '../src/app'; // Asegúrate de importar tu aplicación

describe('GET /api/v1/tours', () => {
  it('should return a list of tours', async () => {
    const res = await request(app).get('/api/v1/tours');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toBe('success');
  });
});
