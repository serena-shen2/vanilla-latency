module.exports = async function (context, req) {
  const url = 'https://mango-pond-0a4fd7900.3.azurestaticapps.net'; // Replace with the URL of the website you want to test
  
  let totalResponseTime = 0;
  
  for (let i = 0; i < 100; i++) {
    const startTime = Date.now();
    fetch(url)
      .then(() => {
        const endTime = Date.now();
        const responseTime = endTime - startTime;
        totalResponseTime += responseTime;
        if (i === 99) {
          const averageResponseTime = totalResponseTime / 100;
          document.getElementById('response-time').innerText = `Average response time: ${averageResponseTime}ms`;
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
};
