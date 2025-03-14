import { IBossesResponseDTO, IBossesListModel } from "../interfaces/IBossesList";

export class BossesListMapper {

  mapFrom(value: IBossesResponseDTO): IBossesListModel[] {
    const { boostable_bosses } = value;
    const bossList = boostable_bosses.boostable_boss_list.map(boss => {
      return {
        imageUrl: boss.image_url,
        name: boss.name
      }
    });
    return bossList
  }
}
