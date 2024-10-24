import axios from "axios";

export default class Swapi {

  public async getPlanetById(id: number) {
    const url = `https://swapi.py4e.com/api/planets/${id}`;
    try {
      console.time("process");
      const response = await axios.get(url);
      const planet = response.data;
      console.log(planet);
      console.timeEnd("process");
      return planet;
    } catch (error) {
      console.error(error);
      return "service_swapi_not_available";
    }
  }

  private async getPlanetSchema() {
    const url = `https://swapi.py4e.com/api/people/schema`;
    try {
      const response = await axios.get(url)
      const schema = response.data;

      console.log(schema);

      return schema;
    } catch (error) {
      console.error(error);
      return "service_swapi_not_available";
    }
  }

}



