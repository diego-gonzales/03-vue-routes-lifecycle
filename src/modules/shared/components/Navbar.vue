<template>
  <div>
    <!-- <nav>
      <ul>
        <li>
          <router-link :to="{ name: 'Home' }">
            Pokemon List
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Detail', params: { pokemonId: 250 }}">
            Pokemon Detail
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'About' }">
            About
          </router-link>
        </li>
      </ul>
    </nav> -->
    <nav>
      <ul>
        <li>
          <CustomLink v-for="link in links" 
                      :key="link.path"
                      :link="link"/>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue';
import { Link } from '../../pokemon/interfaces/link.interface';

export default defineComponent({
  data() {
    return {
      links: [
        { path: 'Pokemon-Home', name: 'Pokemon Home'},
        { path: 'Pokemon-Detail', name: 'Pokemon Detail', pokemonId: 150 },
        // { path: '/detail/50', name: 'Pokemon Detail' },
        { path: 'Pokemon-About', name: 'Pokemon About' },
        { path: 'DBZ-Characters', name: 'DBZ Characters'},
        { path: 'DBZ-About', name: 'DBZ About'},
        { path: 'https://google.com', name: 'Google' }
      ] as Link[]
    }
  },
  components: {
    // lazyload
    CustomLink: defineAsyncComponent(() => import('./CustomLink.vue'))
  }
})
</script>

<style scoped>
/* Esta clase es aplicada por Vue por defecto (video 122, curso de Vue) */
/* .router-link-exact-active {
  color: #42b983;
} */
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    display: flex;
    justify-content: center;
}
li {
    display: inline;
    float: left;
    cursor: pointer;
}
li a {
  display: block;
  font-weight: bold;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
</style>
