import { IBaseInformation } from "src/app/shared/Interfaces/IBaseInformation";

export interface IWorlds extends IBaseInformation {
  worlds: {
    players_online: number;
    record_date: string;
    record_players: number;
    regular_worlds: {
      battleye_date: string;
      battleye_protected: boolean;
      game_world_type: string;
      location: string;
      name: string;
      players_online: number;
      premium_only: boolean;
      pvp_type: string;
      status: string;
      tournament_world_type: string;
      transfer_type: string;
    }[];
    tournament_worlds: {
      battleye_date: string;
      battleye_protected: boolean;
      game_world_type: string;
      location: string;
      name: string;
      players_online: number;
      premium_only: boolean;
      pvp_type: string;
      status: string;
      tournament_world_type: string;
      transfer_type: string;
    }[];
  };
}



export interface IRegularWorlds {
  name: string;
  status: string;
  players_online: number;
  location: string;
  pvp_type: string;
  premium_only: boolean;
  transfer_type: string;
  battleye_protected: boolean;
  battleye_date: string;
  game_world_type: string;
  tournament_world_type: string;
}
