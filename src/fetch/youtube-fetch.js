export default class YoutubeFetch {
  constructor(key) {
    this.requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    this.key = key;
  }

  async popular() {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&type=video&maxResults=30&regionCode=KR&locale=KR&key=${this.key}`,
      this.requestOptions
    );
    const result = await response.json();
    return result.items;
  }

  async search(value) {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=30&q=${value}&key=${this.key}`,
      this.requestOptions
    );
    const result = await response.json();

    return result.items.map((item) => ({ ...item, id: item.id.videoId }));
  }
}
