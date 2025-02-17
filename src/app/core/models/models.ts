export interface CrewMember {
  id: string;
  name: string;
  status: 'active' | 'inactive' | 'retired' | 'unknown';
  agency: string;
  image: string;
  wikipedia: string;
  launches: string[];
}

interface Fairings {
  reused: boolean | null;
  recovery_attempt: boolean | null;
  recovered: boolean | null;
  ships: string[];
}

interface Links {
  patch: {
    small: string | null;
    large: string | null;
  };
  reddit: {
    campaign: string | null;
    launch: string | null;
    media: string | null;
    recovery: string | null;
  };
  flickr: {
    small: string[];
    original: string[];
  };
  presskit: string | null;
  webcast: string;
  youtube_id: string;
  article: string | null;
  wikipedia: string | null;
}

export interface CoreResponse {
  block: number;
  reuse_count: number;
  rtls_attempts: number;
  rtls_landings: number;
  asds_attempts: number;
  asds_landings: number;
  last_update: string;
  launches: string[];
  serial: string;
  status: string;
  id: string;
}

interface Core {
  core: string;
  flight: number;
  gridfins: boolean;
  legs: boolean;
  reused: boolean;
  landing_attempt: boolean | null;
  landing_success: boolean | null;
  landing_type: string | null;
  landpad: string | null;
}

export interface Launch {
  fairings: Fairings;
  links: Links;
  static_fire_date_utc: string | null;
  static_fire_date_unix: number | null;
  net: boolean;
  window: number | null;
  rocket: string;
  success: boolean | null;
  failures: string[];
  details: string | null;
  crew: string[];
  ships: string[];
  capsules: string[];
  payloads: string[];
  launchpad: string;
  flight_number: number;
  name: string;
  date_utc: string;
  date_unix: number;
  date_local: string;
  date_precision: string;
  upcoming: boolean;
  cores: Core[];
  auto_update: boolean;
  tbd: boolean;
  launch_library_id: string;
  id: string;
}

interface SpaceTrack {
  CCSDS_OMM_VERS: string;
  COMMENT: string;
  CREATION_DATE: string;
  ORIGINATOR: string;
  OBJECT_NAME: string;
  OBJECT_ID: string;
  CENTER_NAME: string;
  REF_FRAME: string;
  TIME_SYSTEM: string;
  MEAN_ELEMENT_THEORY: string;
  EPOCH: string;
  MEAN_MOTION: number;
  ECCENTRICITY: number;
  INCLINATION: number;
  RA_OF_ASC_NODE: number;
  ARG_OF_PERICENTER: number;
  MEAN_ANOMALY: number;
  EPHEMERIS_TYPE: number;
  CLASSIFICATION_TYPE: string;
  NORAD_CAT_ID: number;
  ELEMENT_SET_NO: number;
  REV_AT_EPOCH: number;
  BSTAR: number;
  MEAN_MOTION_DOT: number;
  MEAN_MOTION_DDOT: number;
  SEMIMAJOR_AXIS: number;
  PERIOD: number;
  APOAPSIS: number;
  PERIAPSIS: number;
  OBJECT_TYPE: string;
  RCS_SIZE: string;
  COUNTRY_CODE: string;
  LAUNCH_DATE: string;
  SITE: string;
  DECAY_DATE: string;
  DECAYED: number;
  FILE: number;
  GP_ID: number;
  TLE_LINE0: string;
  TLE_LINE1: string;
  TLE_LINE2: string;
}

export interface StarlinkSatellite {
  spaceTrack: SpaceTrack;
  launch: string;
  version: string;
  height_km: number | null;
  latitude: number | null;
  longitude: number | null;
  velocity_kms: number | null;
  id: string;
}

interface Dragon {
  capsule: string | null;
  mass_returned_kg: number | null;
  mass_returned_lbs: number | null;
  flight_time_sec: number | null;
  manifest: string | null;
  water_landing: boolean | null;
  land_landing: boolean | null;
}

export interface Payload {
  dragon: Dragon;
  name: string;
  type: string;
  reused: boolean;
  launch: string;
  customers: string[];
  norad_ids: number[];
  nationalities: string[];
  manufacturers: string[];
  mass_kg: number;
  mass_lbs: number;
  orbit: string;
  reference_system: string;
  regime: string;
  longitude: number | null;
  semi_major_axis_km: number;
  eccentricity: number;
  periapsis_km: number;
  apoapsis_km: number;
  inclination_deg: number;
  period_min: number;
  lifespan_years: number | null;
  epoch: string;
  mean_motion: number;
  raan: number;
  arg_of_pericenter: number;
  mean_anomaly: number;
  id: string;
}
