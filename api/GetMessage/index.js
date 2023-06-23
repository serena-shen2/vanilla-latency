module.exports = async function (context, req) {
  const url =  'https://icy-grass-026a80e10.3.azurestaticapps.net/';
const https = require('https');
let averageResponse = 0;
function testLatency(url, numAttempts) {
  let totalResponseTime = 0;
  for (let i = 0; i < numAttempts; i++) {
    const startTime = Date.now();
    https.get(url, (res) => {
      const endTime = Date.now();
      const responseTime = endTime - startTime;
      totalResponseTime += responseTime;
      if (i === numAttempts - 1) {
        const averageResponseTime = totalResponseTime / numAttempts;
        averageResponse = averageResponseTime;
      }
    });
  }
}

testLatency('https://example.com', 100);
  context.res = {
    body: { text: `Average response time: ${averageResponse} ms` },
  };
}
