export const handler = async () => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'firstLambdaDeploy! Your function executed successfully!',
      number: Math.random() * 100, // add a comment
      input: { message: "Here comes the Sun and I say It's alright" }
    }),
  };

  return response;
}
