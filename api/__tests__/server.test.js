const request = require('supertest')
const server = require('../server')
const db = require('../data/db-config')
const Users = require('../users/users-model')

const userOne = {username:"Hercules", password:"1234"}
const userTwo = {username:"Max", password:"1234"}
const BASE_URL = "http://localhost:5000"

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})
beforeEach(async () => {
  await db.seed.run()
})
afterAll(async (done) => {
  await db.destroy()
  done()
})

//sanity tests ---------------
it('sanity check', () => {
  expect(true).not.toBe(false)
})

describe('server.js', () => {
  it('is the correct testing environment', async () => {
    expect(process.env.NODE_ENV).toBe('testing')
  })
})

//api endpoints tests ----

//register
describe("[POST] /api/auth/register - REGISTER", ()=>{
  it("tests the response of register to be correct object format", async ()=>{
    const res = await request(server).post(`${BASE_URL}/api/auth/register`).send(userOne)
    // const hashedPass = res.body.password;
    expect(res.body).toMatchObject({role_name: "Renter", user_id:4, username:"Hercules"})
  })
  it("tests that the username must be unique and show error `username taken` if not", async ()=>{
    await request(server).post(`${BASE_URL}/api/auth/register`).send(userOne)
    const res = await request(server).post(`${BASE_URL}/api/auth/register`).send(userOne) //add the same username
    expect(res.body).toBe("username taken")
  })
  it("tests that user was added to the db", async ()=>{
    await request(server).post(`${BASE_URL}/api/auth/register`).send(userOne) //add one user
    const user = await Users.find();
    expect(user).toHaveLength(3);

    await request(server).post(`${BASE_URL}/api/auth/register`).send(userTwo) //add another user
    const users = await Users.find();
    expect(users).toHaveLength(4);
  })
  it("tests that register must have a username and password", async ()=>{
    const res = await request(server).post(`${BASE_URL}/api/auth/register`).send({password: "what`s my name again?"}) // don`t send a username
    expect(res.body).toBe("username and password required")
  })
})

//login
describe("[POST] /api/auth/login - LOGIN", ()=>{
  it("tests the response for login to be `welcome back, user` and give a token", async ()=>{
    await request(server).post(`${BASE_URL}/api/auth/register`).send(userOne) //first register a user
    const login = await request(server).post(`${BASE_URL}/api/auth/login`).send(userOne) //login with it
    expect(login.body.message).toBe("Welcome back, Hercules");
    expect(login.body.token).toBeTruthy(); //a token was given in the response
  })
  it("tests that login must have a username and password", async ()=>{
    const login = await request(server).post(`${BASE_URL}/api/auth/login`).send({username: "I forgot my pass"}) // don`t include a password
    expect(login.body).toBe("username and password required")
  })
  it("test that the wrong password will give `invalid credentials` error", async ()=>{
    await request(server).post(`${BASE_URL}/api/auth/register`).send(userOne)
    const login = await request(server).post(`${BASE_URL}/api/auth/login`).send({username: "Hercules", password: "abc"}) //give the wrong password
    expect(login.body).toBe("Invalid credentials.")
  })
})

//get techitems (authorization required)
describe("[GET] /api/techitems - techitems", ()=>{
  it("tests the response to be 200 ok with an authorized token and have a length of 3", async ()=>{
    await request(server).post(`${BASE_URL}/api/auth/register`).send(userOne) //register
    const login = await request(server).post(`${BASE_URL}/api/auth/login`).send(userOne) //login
    const token = login.body.token //get token
    const res = await request(server).get(`${BASE_URL}/api/techitems`).set(`Authorization`, token) //request techitems with the token
    expect(res.status).toBe(200)
    expect(res.body).toHaveLength(3)
  })
  it("tests the response error to be 401 with no token", async ()=>{
    const res = await request(server).get(`${BASE_URL}/api/techitems`) //no token
    expect(res.status).toBe(401)
  })
  it("tests the response message to be `token required` with no token", async ()=>{
    const res = await request(server).get(`${BASE_URL}/api/techitems`) //no token
    expect(res.body).toBe("token required")
  })
  it("tests the response message to be `token invalid` with the wrong token", async ()=>{
    const wrong = "iamawbadtoken1234$%&@(!_)("
    const res = await request(server).get(`${BASE_URL}/api/techitems`).set(`Authorization`, wrong) //the wrong token
    expect(res.body).toBe("token invalid")
  })
})