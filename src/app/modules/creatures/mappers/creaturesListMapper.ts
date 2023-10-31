import { ICreaturesListModel, ICreaturesListResponseDTO, ICreaturesResponseDTO } from "../interfaces/ICreaturesList";

export class CreaturesListMapper {

  mapFrom(value: ICreaturesResponseDTO): ICreaturesListModel[] {
    const { creatures } = value;
    const creatureList: ICreaturesListModel[] = creatures.creature_list.map(creature => {
      return {
        image: creature.image_url,
        name: creature.name,
        race: creature.race
      }
    })
    return creatureList;
  }
}
