
const app = require('../server') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)

beforeAll(async() => {
  process.env.NODE_ENV = 'test';
})

test('search photos by text "watch" with perPage=10 ', async done => {
    const body = {
      text:"watch",
      perPage:"10",
      pageNumber:"1"
    }
    const response = await request.post('/api/flickr/serachByText').send(body);
    expect(response.status).toBe(200);
    expect(response.body.length).toEqual(10);
    done()
});

test('search photos by empty text', async done => {
  const body = {
    text:"",
    perPage:"10",
    pageNumber:"1"
  }
  const response = await request.post('/api/flickr/serachByText').send(body);
  expect(response.status).toBe(500);
  done()
});


afterAll(async () => {
  console.log("after all tests")
});