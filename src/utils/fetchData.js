export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '25cc85be35msh4f6b164c0410549p131610jsn5ffa4b034f53',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '25cc85be35msh4f6b164c0410549p131610jsn5ffa4b034f53',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  }


  //While making a request to the RApid API's API we need to pass in the url and along with the options( which contains the method and header object, The header object has the key and host to authenticate)
export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    console.log(response);
    const data = await response.json();
  console.log(data);
    return data;
}