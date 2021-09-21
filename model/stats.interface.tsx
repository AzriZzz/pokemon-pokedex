export interface IPokemonProps {
  pokemonInfo: IPokemonInfo
}

export interface IPokemonInfo {
  abilities?: (AbilitiesEntity)[] | null;
  base_experience: number;
  forms?: (AbilityOrFormsEntityOrVersionOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies)[] | null;
  game_indices?: (GameIndicesEntity)[] | null;
  height: number;
  held_items?: (null)[] | null;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves?: (MovesEntity)[] | null;
  name: string;
  order: number;
  past_types?: (null)[] | null;
  species: AbilityOrFormsEntityOrVersionOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
  sprites: Sprites;
  stats?: (StatsEntity)[] | null;
  types?: (TypesEntity)[] | null;
  weight: number;
}
export interface AbilitiesEntity {
  ability: AbilityOrFormsEntityOrVersionOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
  is_hidden: boolean;
  slot: number;
}
export interface AbilityOrFormsEntityOrVersionOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies {
  name: string;
  url: string;
}
export interface GameIndicesEntity {
  game_index: number;
  version: AbilityOrFormsEntityOrVersionOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
}
export interface MovesEntity {
  move: AbilityOrFormsEntityOrVersionOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
  version_group_details?: (VersionGroupDetailsEntity)[] | null;
}
export interface VersionGroupDetailsEntity {
  level_learned_at: number;
  move_learn_method: AbilityOrFormsEntityOrVersionOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
  version_group: AbilityOrFormsEntityOrVersionOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
}
export interface Sprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other: Other;
  versions: Versions;
}
export interface Other {
  dream_world: DreamWorldOrIcons;
  official_artwork: Official_artwork;
}
export interface DreamWorldOrIcons {
  front_default: string;
  front_female?: null;
}
export interface Official_artwork {
  front_default: string;
}
export interface Versions {
  generation_i: Generation_i;
  generation_ii: Generation_ii;
  generation_iii: Generation_iii;
  generation_iv: Generation_iv;
  generation_v: Generation_v;
  generation_vi: Generation_vi;
  generation_vii: Generation_vii;
  generation_viii: Generation_viii;
}
export interface Generation_i {
  red_blue: Red_blueOrYellow;
  yellow: Red_blueOrYellow;
}
export interface Red_blueOrYellow {
  back_default: string;
  back_gray: string;
  front_default: string;
  front_gray: string;
}
export interface Generation_ii {
  crystal: CrystalOrGoldOrSilverOrFirered_leafgreenOrRuby_sapphire;
  gold: CrystalOrGoldOrSilverOrFirered_leafgreenOrRuby_sapphire;
  silver: CrystalOrGoldOrSilverOrFirered_leafgreenOrRuby_sapphire;
}
export interface CrystalOrGoldOrSilverOrFirered_leafgreenOrRuby_sapphire {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}
export interface Generation_iii {
  emerald: Emerald;
  firered_leafgreen: CrystalOrGoldOrSilverOrFirered_leafgreenOrRuby_sapphire;
  ruby_sapphire: CrystalOrGoldOrSilverOrFirered_leafgreenOrRuby_sapphire;
}
export interface Emerald {
  front_default: string;
  front_shiny: string;
}
export interface Generation_iv {
  diamond_pearl: Diamond_pearlOrHeartgold_soulsilverOrPlatinumOrAnimated;
  heartgold_soulsilver: Diamond_pearlOrHeartgold_soulsilverOrPlatinumOrAnimated;
  platinum: Diamond_pearlOrHeartgold_soulsilverOrPlatinumOrAnimated;
}
export interface Diamond_pearlOrHeartgold_soulsilverOrPlatinumOrAnimated {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}
export interface Generation_v {
  black_white: Black_white;
}
export interface Black_white {
  animated: Diamond_pearlOrHeartgold_soulsilverOrPlatinumOrAnimated;
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}
export interface Generation_vi {
  omegaruby_alphasapphire: Omegaruby_alphasapphireOrX_yOrUltra_sun_ultra_moon;
  x_y: Omegaruby_alphasapphireOrX_yOrUltra_sun_ultra_moon;
}
export interface Omegaruby_alphasapphireOrX_yOrUltra_sun_ultra_moon {
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}
export interface Generation_vii {
  icons: DreamWorldOrIcons;
  ultra_sun_ultra_moon: Omegaruby_alphasapphireOrX_yOrUltra_sun_ultra_moon;
}
export interface Generation_viii {
  icons: DreamWorldOrIcons;
}
export interface StatsEntity {
  base_stat: number;
  effort: number;
  stat: AbilityOrFormsEntityOrVersionOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
}
export interface TypesEntity {
  slot: number;
  type: AbilityOrFormsEntityOrVersionOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
}
