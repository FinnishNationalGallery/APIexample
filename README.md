# Kansallisgalleria API example

## Doing searches

Using JavaScript [src/search-example.js](src/search-example.js):

```sh
npm install

export API_KEY="<your api key here>"
node src/search-example.js
```

## Dowloading the full dataset

Using JavaScript [src/dataset-example.js](src/dataset-example.js):
```sh
npm install

export API_KEY="<your api key here>"
node src/dataset-example.js
```

Using the curl command line tool:
```sh
export API_KEY="<your api key here>"
curl -o dataset.json --compress -H "x-api-key: $API_KEY" https://ww.kansallisgalleria.fi/api/v1/objects
```
