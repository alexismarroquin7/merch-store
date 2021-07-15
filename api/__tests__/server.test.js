const request = require('supertest');
const server = require('../server');
const db = require('../data/db-config');
const {products} = require('../data/sample-data/products');

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});
beforeEach(async () => {
  await db.seed.run();
});
afterAll(async () => {
  await db.destroy();
});

it('sanity check', () => {
  expect(true).not.toBe(false);
});

describe('server.js', () => {
  it('is the correct testing environment', async () => {
    expect(process.env.NODE_ENV).toBe('testing');
  });
  it('populates db with seed data', async () => {
    const myProducts = await db('products');
    expect(myProducts).toMatchObject(products);
  });
});
