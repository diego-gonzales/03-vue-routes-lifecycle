<template>
  <a v-if="isExternalLink" target="_blank" :href="link.path" class="normal-link">
    {{ link.name }}
  </a>

  <!-- Esta es otra manera de manejar mis router-links, es un router-link personalizado -->
  <router-link v-else :to="{ name: this.link.path, params: { pokemonId: this.link.pokemonId } }" v-slot="{ isActive }">
    <!-- v-slot={ href, isActive } / :href="href" -->
    <a :class="isActive ? 'is-active' : 'normal-link'">
      {{ link.name }}
    </a>
  </router-link>
</template>

<script lang="ts">
import { Link } from '@/modules/pokemon/interfaces/link.interface';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    link: {
      type: Object as PropType<Link>,
      required: true
    }
  },
  computed: {
    isExternalLink(): boolean {
      return this.link.path.startsWith('http');
    },
    // CREO QUE CON CUANDO TYPESCRIPT NO SIRVE (ver video 132)
    // path() {
    //   return (!this.link.pokemonId === undefined)
    //     ? { name: this.link.path }
    //     : { name: this.link.path, params: { pokemonId: this.link.pokemonId } };
    // }
  }
})
</script>

<style scoped>
.is-active {
  color: #42b983;
}
.normal-link {
  color: blue;
}
</style>