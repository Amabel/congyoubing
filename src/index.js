const congyoubings = require('./congyoubing')

module.exports.get = async (event, context, callback) => {
  const body = JSON.stringify({
    congyoubing:
      congyoubings.data[Math.floor(Math.random() * congyoubings.data.length)],
  })

  const response = {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS,GET',
    },
    statusCode: 200,
    body,
  }

  callback(null, response)
}
