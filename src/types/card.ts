export interface Point {
    x: number;
    y: string;
}

export interface ApiPoint {
    last_changed: string;
    last_updated: string;
    state: string;
    entity_id: string;
}

export interface Repartition {
    ok: number;
    ko: number;
    none: number;
}

export interface Period {
    from: number;
    to: number;
}

export interface CacheData {
    points: Point[];
    lastFetched: number;
    lastChanged: number;
    hoursToShow: number;
}
