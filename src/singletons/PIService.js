class APIService {
    constructor() {
      if (APIService.instance) {
        return APIService.instance;
      }
      this.baseUrl = 'https://api.example.com';
      APIService.instance = this;
    }
  
    async fetchData(endpoint) {
      const response = await fetch(`${this.baseUrl}/${endpoint}`);
      return await response.json();
    }
  }
  
  const instance = new APIService();
  Object.freeze(instance);
  
  export default instance;
  