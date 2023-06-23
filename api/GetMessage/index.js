module.exports = async function (context, req) {
const https = require('https');

  function testLatency(url, numAttempts) {
  let totalResponseTime = 0;
  for (let i = 0; i < numAttempts; i++) {
    const startTime = Date.now();
    https.get(url, (res) => {
      const endTime = Date.now();
      const responseTime = endTime - startTime;
      totalResponseTime += responseTime;
      if (i === numAttempts - 1) {
        const averageResponse = totalResponseTime / numAttempts;
          context.res = {
            body: { text: `Average response time: ${averageResponse} ms` },
          };
      }
    });
  }
}

testLatency('https://icy-grass-026a80e10.3.azurestaticapps.net/', 100);

}
