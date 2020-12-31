const faunadb = require('faunadb')
const fetch = require("node-fetch");

const query = faunadb.query
const client = new faunadb.Client({
  secret: process.env.SUPER_SECRET_FAUNADB_KEY
})

//Build URL Query
const baseURL = "https://api.unsplash.com/search/photos"
const search = "pancake"
const page = 1
const unSplashKey = process.env.SUPER_SECRET_UNSPLASH_KEY


const createPancakeObjects = (array) => {
    return array.map(item => {
      return {
        unsplash_id: item.id,
        urls: item.urls,
        author: item.author,
        links: item.links,
        unsplash_user: {
          username: item.user.username,
          name: item.user.name,
          credit_Url: item.user.links.html,
        }
      }
    })
  }

const getPancakesFromUnsplash = async () => {
    return fetch(`${baseURL}?query=${search}&page=${page}&client_id=${unSplashKey}`, { headers: { "Accept": "application/json" }})
      .then(response => response.json())
      .then(data => ({
        statusCode: 200,
        body: JSON.stringify(createPancakeObjects(data.results))
      }))
      .catch(error => ({ statusCode: 422, body: String(error) }));
  };

module.exports.handler = async (event, context, callback) => {
    //verify secret auth header (make sure rogue nation states don't have us query unsplash a ton)
    const {headers} = event
    const AuthorizationHeader = headers['Authorization']

    if(AuthorizationHeader !== process.env.SUPER_SECRET_ADMIN_KEY)
        return callback(null, {
            statusCode: 500,
            body: 'you shall not pass'
          })
    //get pancake urls from unsplash

    /* DANNY YOU GOT THIS */
    
    

    //save shiny new pancakes to fauna

    const unsplashData = await getPancakesFromUnsplash()

    client.query(
        query.Map(
            unsplashData,
            query.Lambda(
                ['unsplash-pancake'],
                query.Create(
                    query.Collection('pancakes'),
                    query.Var('unsplash-pancake')
                )
            )
        )
    )
    .then(res => true)
    .catch(err => console.log(err))

    return callback(null, {
      statusCode: 200,
      body: '⊂◉‿◉つ'
    })
  }