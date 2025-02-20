import { IGuildModel, IGuildResponse } from "../interfaces/IGuild";


export class GuildMapper {

  mapFrom(guild: IGuildResponse): IGuildModel {
    return {
      active: guild.guilds.guild.active,
      logoUrl: guild.guilds.guild.logo_url,
      name: guild.guilds.guild.name,
      world: guild.guilds.guild.world,
      description: guild.guilds.guild.description,
      founded: guild.guilds.guild.founded,
      playersOnline: guild.guilds.guild.players_online,
      playersOffline: guild.guilds.guild.players_offline,
      totalMembers: guild.guilds.guild.members_total,
      members: guild.guilds.guild.members
    }
  }
}
