exports.handler = async event => {
  const body = JSON.parse(event.body)
  const { name, email, message } = body.payload
  const response = await fetch(
    'https://graphql.fauna.com/graphql',
    {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.FAUNA_API_SECRET}` },
      body: {
        query: `
        mutation($name: String! $email: String!  $message: String!  ) {
          mutation {
            createPlus(data: {
              name: $name
              email: $email
              message: $message
            }) {
              _id
            }
          }
        }
        `,
        variables: { name, email, message }
      }
    })
    .then(response => response.json())
    .catch(error => console.error(error))
  console.log(response)
  return {
    statusCode: 200,
    body: 'stu'
  }
}