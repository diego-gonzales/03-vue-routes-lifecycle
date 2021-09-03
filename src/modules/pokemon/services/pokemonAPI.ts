import { PokemonResponse } from '../interfaces/pokemon-response.interface';


export const pokemonSearch = async(pokemonId: number): Promise<PokemonResponse> => {
    return await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
                .then(resp => resp.json());
};