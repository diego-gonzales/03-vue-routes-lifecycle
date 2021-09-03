<template>

    <div v-if="!pokemon">
        LOADING...
    </div>

    <template v-else>
        <h3>
            Detail Pokemon <span>#{{ pokemonId }}</span>
        </h3>
        <div>
            <img :src="pokemon.sprites?.front_default" :alt="pokemon.name">
        </div>
    </template>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { PokemonResponse } from '../interfaces/pokemon-response.interface';
import { pokemonSearch } from '../services/pokemonAPI';

export default defineComponent({
    props: {
        pokemonId: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            // pokemonId: '' // tambien podríamos igualarlo de frente a: this.$route.params.pokemonId
            pokemon: {} as PokemonResponse
        }
    },
    created() {
        /* ESTA ES UNA MANERA DE TOMAR EL PARAMETRO DE UNA URL, SIMILAR A LO QUE HACEMOS EN ANGULAR EN EL NGONINIT()
        CON EL ACTIVATEDROUTE (video 125 de curso de Vue) */
        // const { pokemonId } = this.$route.params;
        // this.pokemonId = pokemonId.toString();

        this.getPokemon();
    },
    methods: {
        async getPokemon(): Promise<void> {
            try {
                const pokemon = await pokemonSearch(this.pokemonId);
                console.log(pokemon);
                this.pokemon = pokemon;

            } catch (error) {
                this.$router.push('/');
                console.log(error);
            }
        }
    },
    watch: {
        // Este estará mirando cuando cambia la prop 'pokemonId' y hará lo que se le indica
        pokemonId() {
            this.getPokemon();
        }
    }
})
</script>