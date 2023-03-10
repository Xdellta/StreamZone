<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import Navigation from './components/Navigation.vue'
  import AsideMenu from './components/AsideMenu.vue'
</script>

<template>
  <nav>
    <Navigation />
  </nav>

  <main>
    <aside>
      <AsideMenu />
    </aside>

    <RouterView />
  </main>
</template>

<style scoped>
  nav {
    position: fixed;
    width: 100%;
    height: 85px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4%;
    background-color: var(--main2);
    z-index: 1;
  }

  main {
    width: 100%;
    height: 100%;
    display: flex;
  }

  aside {
    position: fixed;
    width: 290px;
    height: 100%;
    padding: 85px 22px 0 22px;
    display: flex;
    flex-direction: column;
    border-right: 3px solid var(--main2);
  }
</style>