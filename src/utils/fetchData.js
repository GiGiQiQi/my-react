//API connection function
export const exerciseOptions = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '1a2a9b82bdmsh35fe66c8a0d9160p1eaf62jsn57399841e0c6',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };
//Function for Fectching Data from the API
export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}