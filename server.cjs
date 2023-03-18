const yahooFinance = require('yahoo-finance2').default // NOTE the .default
async function generateStockHTML() {
  //   const res = await yahooFinance.search('BRK-A')
  //   console.log(res)
  const query = '^NSEI'
  const queryOptions = { period1: '2023-03-17', interval: '1d' /* ... */ }
  const result = await yahooFinance._chart(query, queryOptions)
  const queryOptions2 = { period1: '2023-03-17', interval: '5m' /* ... */ }
  const result2 = await yahooFinance._chart(query, queryOptions2)
  console.log(result)
  console.log(result2)
}

generateStockHTML()
