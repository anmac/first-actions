export const handler = async () => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'firstLambdaDeploy! Your function executed successfully!',
      number: Math.random() * 100,
    }),
  };

  return response;
}