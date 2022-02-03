export interface IMission {
    mission_name: string;
    launch_date_local: string;
    launch_site: {
        site_name_long: string;
    }
    links: ILinks;
    rocket: {
        rocket_name: string;
        first_stage: IFirst_stage;
        second_stage: ISecond_stage;
    }
}


interface ILinks {
    article_link: null;
    video_link: string;
}

interface IFirst_stage {
    cores: [
        {
            flight: number;
            core: {
                reuse_count: number;
                status: string;
            }
        }
    ]
}

interface ISecond_stage {
    payloads: [
        {
            payload_type: string;
            payload_mass_kg: number;
            payload_mass_lbs: number;
        }
    ]
}