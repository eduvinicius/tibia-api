import { ICreatureResponseDTO, ICreatureModel } from "../interfaces/ICreature";


export class CreatureMapper {

  mapFrom(creature: ICreatureResponseDTO): ICreatureModel {
    return {
      name: creature.creature.name,
      image: creature.creature.image_url,
      description: creature.creature.description,
      immune: creature.creature.immune,
      strong: creature.creature.strong,
      weakness: creature.creature.weakness,
      hitpoints: creature.creature.hitpoints,
      experiencePoints: creature.creature.experience_points,
      lootList: creature.creature.loot_list
    }
  }
}
