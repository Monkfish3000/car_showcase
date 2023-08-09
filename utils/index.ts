export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': 'dc9db1b44cmshfe6839673e6ee04p15733djsn790a9ef56723',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };
  const response = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
    { headers: headers }
  );

  const results = await response.json();

  return results;
}
