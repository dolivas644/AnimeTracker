const fetchAnime = () => {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/top/anime`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('result is: ', JSON.stringify(result, null, 4));
      return [result, null];
    } catch (err) {
      return [null, err];
    } 
  };
};
