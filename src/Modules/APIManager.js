export default getEvents = value => {
    fetch(`https://api.mysportsfeeds.com/v2.1/pull/nhl/players.team=${value}`, {
      headers: {
          "Authorization": "Basic " + btoa({ea2d0048ce5a4a16ae0083d4d7} + ":" + MYSPORTSFEEDS)
      }
    });
  };
  