import { IBossesListRequestDTO, IBossesListWebDTO } from "../interfaces/IBossesList";

export class BossesListMapper {

  mapTo(value: IBossesListRequestDTO[]): IBossesListWebDTO[] {
    const newList = value.map(item => {
      return {
        image: item.image_url,
        name: item.name
      }
    })

    return newList
  }
}
