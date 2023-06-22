module.exports = async function (context, req) {
  const url = 'https://mango-pond-0a4fd7900.3.azurestaticapps.net'; // Replace with the URL of the website you want to test

  let totalResponseTime = 0;

  context.res = {
    body: { text: "Hello from the API0" },
  };
};
