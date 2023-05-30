import { IBaseInformation } from "src/app/Interfaces/IBaseInformation";

export interface IWorldsDetails extends IBaseInformation {
  worlds: {
    world: {
      battleye_date: string;
      battleye_protected: boolean;
      creation_date: string;
      game_world_type: string;
      location: string;
      name: string;
      online_players: {
        level: number;
        name: string;
        vocation: string;
      }[];
      players_online: number;
      premium_only: boolean;
      pvp_type: string;
      record_date: string;
      record_players: number;
      status: string;
      tournament_world_type: string;
      transfer_type: string;
      world_quest_titles: string[];
    };
  };
}

export interface IWorldDetails {
  world: {
    battleye_date: string;
    battleye_protected: boolean;
    creation_date: string;
    game_world_type: string;
    location: string;
    name: string;
    online_players: {
      level: number;
      name: string;
      vocation: string;
    }[];
    players_online: number;
    premium_only: boolean;
    pvp_type: string;
    record_date: string;
    record_players: number;
    status: string;
    tournament_world_type: string;
    transfer_type: string;
    world_quest_titles: string[];
  };
}
