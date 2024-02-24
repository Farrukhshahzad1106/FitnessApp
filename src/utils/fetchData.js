export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3c4a0077b8msh4fb41612055e912p1ab04fjsn5c06103a1555',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}