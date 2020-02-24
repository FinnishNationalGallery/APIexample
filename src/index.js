const axios = require("axios")

const API_KEY = process.env.API_KEY

async function main() {
  const results = await search({
    searchTerms: ["kissa"],
    hasImage: true,
  })

  results.forEach(result => {
    const author = result.people.find(p => p.role.fi === 'taiteilija')
    console.log({
      title: result.title.fi,
      author: `${author.firstName} ${author.familyName}`,
      imageUrl: result.multimedia[0].jpg['500'],
    })
  })
}

async function search(params) {
  const response = await httpClient.post("/v1/search", params)
  return response.data
}

const httpClient = axios.create({
  baseURL: 'https://www.kansallisgalleria.fi/api',
  headers: {'x-api-key': API_KEY},
})


main().catch(err => {
  if (err.response) {
    console.error(err.response.status, err.response.data)
  } else {
    console.error(err)
  }
  process.exit(1)
})
