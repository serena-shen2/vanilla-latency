const https = require('https');

function testLatency(url, numAttempts) {
  return new Promise((resolve, reject) => {
    let totalResponseTime = 0;
    for (let i = 0; i < numAttempts; i++) {
      const startTime = Date.now();
      https.get(url, (res) => {
        const endTime = Date.now();
        const responseTime = endTime - startTime;
        totalResponseTime += responseTime;
        if (i === numAttempts - 1) {
          const averageResponseTime = totalResponseTime / numAttempts;
          resolve(averageResponseTime);
        }
      }).on('error', (err) => {
        reject(err);
      });
    }
  });
}

module.exports = async function (context, req) {
  const url = 'https://icy-grass-026a80e10.3.azurestaticapps.net/';
  const numAttempts = 100;
  try {
    const averageResponseTime = await testLatency(url, numAttempts);
    return {
      body: { text: Average response time: ${averageResponseTime} ms` },
    };
  } catch (err) {
    return {
      status: 500,
      body: err.message,
    };
  }
};
