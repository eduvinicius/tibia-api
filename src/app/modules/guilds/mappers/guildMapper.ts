import { IGuildModel, IGuildResponse } from "../interfaces/IGuild";


export class GuildMapper {

  mapFrom(guild: IGuildResponse): IGuildModel {
    return {
      active: guild.guild.active,
      logoUrl: guild.guild.logo_url,
      name: guild.guild.name,
      world: guild.guild.world,
      description: guild.guild.description,
      founded: guild.guild.founded,
      playersOnline: guild.guild.players_online,
      playersOffline: guild.guild.players_offline,
      totalMembers: guild.guild.members_total,
      members: guild.guild.members
    }
  }
}
