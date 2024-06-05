import { describe, it, before, after } from 'node:test';
import assert from 'node:assert';
import buildApp from '../app.js';

describe('GET /', () => {
  let app;

  before(async () => {
    app = await buildApp();
  });

  after(async () => {
    await app.close();
  });

  it('returns status 200', async () => {
    const response = await app.inject({
      url: '/',
    });
    assert.deepStrictEqual(response.statusCode, 200);
    assert.strictEqual(
      response.headers['content-type'],
      'application/json; charset=utf-8'
    );
    assert.deepEqual(JSON.parse(response.payload), { hello: 'world' });
  });
});