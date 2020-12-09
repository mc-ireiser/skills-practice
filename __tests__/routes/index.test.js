const request = require('supertest')
const app = require('../../app')

describe('Index Controller', () => {

  it('Renders successfully', async () => {
    const res = await request(app)
      .get('/')

    expect(res.statusCode).toBe(200)
    expect(res.type).toBe('text/html')
  })
})

