export interface IGuild {
 guilds: {
   guild: {
     active: boolean;
     description: string;
     disband_condition: string;
     disband_date: string;
     founded: string;
     guildhalls: {
       name: string;
       paid_until: string;
       world: string;
     }[];
     homepage: string;
     in_war: boolean;
     invites: {
       date: string;
       name: string;
     }[];
     logo_url: string;
     members: {
       joined: string;
       level: number;
       name: string;
       rank: string;
       status: string;
       title: string;
       vocation: string;
     }[];
     members_invited: number;
     members_total: number;
     name: string;
     open_applications: boolean;
     players_offline: number;
     players_online: number;
     world: string;
   };
 }
}

export interface IGuildMembers {
    joined: string;
    level: number;
    name: string;
    rank: string;
    status: string;
    title: string;
    vocation: string;
}



