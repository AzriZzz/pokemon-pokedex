export interface IPokemonProps {
  pokemonData: IPokemonData
}export interface IPokemonData {
  image: string;
  name: string;
  id: number;
  stats?: (StatsEntity)[] | null;
  types?: (TypesEntity)[] | null;
}
export interface StatsEntity {
  base_stat: number;
  effort: number;
  stat: StatOrType;
}
export interface StatOrType {
  name: string;
  url: string;
}
export interface TypesEntity {
  slot: number;
  type: StatOrType;
}
