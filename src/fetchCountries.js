export function fetchCountries(name) {
  const URL = 'https://restcountries.com/v3.1/name/';
  return fetch(
    `${URL}${name}?fields=name,capital,population,flags,languages`
  ).then(response => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  });
}