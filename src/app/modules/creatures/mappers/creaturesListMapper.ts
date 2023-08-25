import { ICreaturesListModel, ICreaturesListResponseDTO, ICreaturesResponseDTO } from "../interfaces/ICreaturesList";

export class CreaturesListMapper {

  mapFrom(value: ICreaturesResponseDTO): ICreaturesListModel[] {
    const creatureList: ICreaturesListResponseDTO[] = value.creatures.creature_list;
    const newCreatureList: ICreaturesListModel[] = creatureList.map(item => {
      return {
        image: item.image_url,
        name: item.name,
        race: item.race
      }
    })
    return newCreatureList;
  }
}
