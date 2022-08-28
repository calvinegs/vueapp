<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/> -->
  <!-- <ProductList /> -->

  <router-view/>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useStore } from 'vuex';
import { HttpHandler } from './data/httpHandler';
// import ProductList fsrom "./views/ProductList.vue"

export default defineComponent({
  name: "App",
  // components: { ProductList },

  setup() {
    const store = useStore();
    const handler = new HttpHandler();
    onMounted(() => store.dispatch("loadProducts", handler.loadProducts));
  },
});
</script>