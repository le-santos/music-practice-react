export default async function fetchApiData(endpoint) {
  const url = `${process.env.REACT_APP_API_BASE_URL}${endpoint}`;
  console.log(url);
  const response = await fetch(url);
  const json = await response.json();
  const data = await json;

  return data;
}
