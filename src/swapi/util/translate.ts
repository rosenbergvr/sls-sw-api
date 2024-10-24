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
        return this.reemplazarTildes(res.text);
      })
      .catch((err) => {
        console.error(err);
        return "attribute_not_translate";
      });
  }
  private reemplazarTildes(texto: string): string {
    const mapaTildes: { [key: string]: string } = {
        'á': 'a',
        'é': 'e',
        'í': 'i',
        'ó': 'o',
        'ú': 'u',
        'Á': 'A',
        'É': 'E',
        'Í': 'I',
        'Ó': 'O',
        'Ú': 'U',
        'ñ': 'n',
        'Ñ': 'N',
        " ": "_",
    };

    return texto.replace(/[áéíóúÁÉÍÓÚñÑ]/g, (match) => mapaTildes[match]);
  }
}
