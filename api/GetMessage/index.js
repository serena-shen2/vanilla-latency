module.exports = async function (context, req) {
  const url =  'https://icy-grass-026a80e10.3.azurestaticapps.net/';
  let totalMilliseconds = 0;

  for (let i = 0; i < 100; i++) {
    const start = Date.now();
    const response = await fetch(url);
    const content = await response.text();
    const end = Date.now();
    totalMilliseconds += end - start;
  }

  const averageMilliseconds = totalMilliseconds / 100;
  context.res = {
    body: { text: `Average response time: ${averageMilliseconds} ms` },
  };
}
