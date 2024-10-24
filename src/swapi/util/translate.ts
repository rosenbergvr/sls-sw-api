import { translate } from "@vitalets/google-translate-api";

export default class Translate {
  public async translateAttributes(json) {
    const translatedJson = {};
    for (const key in json) {
      const new_key = await this.translateText(key);
      translatedJson[new_key] = json[key];
    }
    return translatedJson;
  }

  private async translateText(text: string) {
    return await translate(text, { to: "es" })
      .then((res) => {
        return res.text.replaceAll(" ", "_");
      })
      .catch((err) => {
        console.error(err);
        return "attribute_not_translate";
      });
  }
}
