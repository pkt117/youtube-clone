let requestOptions = {
  method: "GET",
  redirect: "follow",
};

export function list_update() {
  return (
    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&regionCode=KR&locale=KR&key=AIzaSyDDdi_Tmc48Kecd46ILcN9I8GIJ2-rZww0",
      requestOptions
    )
      .then((response) => response.json())
      .then((json) => json.items)
      // .then((result) => console.log(result))
      .catch((error) => console.log("error", error))
  );
}

export function list_search(value) {
  return (
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${value}&key=AIzaSyDDdi_Tmc48Kecd46ILcN9I8GIJ2-rZww0`,
      requestOptions
    )
      .then((response) => response.json())
      .then((json) => json.items)
      // .then((result) => console.log(result.id))
      .catch((error) => console.log("error", error))
  );
}
