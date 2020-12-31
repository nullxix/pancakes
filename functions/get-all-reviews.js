const faunadb = require('faunadb')

const query = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET
})

exports.handler = (event, context, callback) => {

  return client.query(query.Paginate(query.Match(query.Ref("indexes/all_reviews"))))
  .then((response) => {
    const reviewRefs = response.data

    const getAllReviewDataQuery = reviewRefs.map((ref) => {
      return query.Get(ref)
    })

    return client.query(getAllReviewDataQuery).then((ret) => {
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify(ret)
      })
    })
  }).catch((error) => {
    console.log("error", error)
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify(error)
    })
  })
}