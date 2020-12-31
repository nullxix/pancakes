const faunadb = require('faunadb')

const query = faunadb.query
const client = new faunadb.Client({
  secret: process.env.SUPER_SECRET_FAUNADB_KEY
})


/**
 * create a pancake review hollla
 */
exports.handler = (event, context, callback) => {
    
    const data = JSON.parse(event.body)

    const reviewData = {
      data: data
    }
    /* construct the fauna query */
    return client.query(query.Create(query.Ref("classes/reviews"), reviewData))
    .then((response) => {
        
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify(response)
      })
    }).catch((error) => {
      console.log("error", error)
      
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify(error)
      })
    })
  }