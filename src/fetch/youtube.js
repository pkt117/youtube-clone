class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  async popular() {
    const response = await this.youtube.get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        type: "video",
        maxResults: 30,
        regionCode: "KR",
        locale: "KR",
      },
    });
    return response.data.items;
  }

  async search(value) {
    const response = await this.youtube.get("search", {
      params: {
        part: "snippet",
        type: "video",
        maxResults: 30,
        q: value,
      },
    });
    return response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
  }
}

export default Youtube;
