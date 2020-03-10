const axios = require("axios")
const fs = require("fs").promises

const API_KEY = process.env.API_KEY

async function main() {
  const filename = "dataset.json"
  const allObjects = await downloadFullDataset()
  await fs.writeFile(filename, prettyPrintJson(allObjects))
  console.log(`Downloaded full dataset containing ${allObjects.length} objects to file: ${filename}`)
}

async function downloadFullDataset() {
  const response = await httpClient.get("/v1/objects")
  return response.data
}

function prettyPrintJson(value) {
  return JSON.stringify(value, null, 2)
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
