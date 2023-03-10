<script setup>
  import LogoIcon from './icons/logo.vue'
  import SearchIcon from './icons/search.vue'
  import BellIcon from './icons/bell.vue'
</script>

<template>
  <div class="logo">
    <LogoIcon class="LogoIcon"/>
    <h1>StreamZone</h1>
  </div>

  <div class="pagesMenu">
    <RouterLink to="/" class="link">Przegląd</RouterLink>
    <RouterLink to="/Streamy" class="link">Streamy</RouterLink>
    <RouterLink to="/Streamy" class="link">Biblioteka</RouterLink>
    <RouterLink to="/Streamy" class="link">Wydarzenia</RouterLink>
  </div>

  <div class="otherMenu">
    <SearchIcon class="otherMenu__icon"/>
    <BellIcon class="otherMenu__icon"/>
  </div>
</template>

<style lang="scss" scoped>
  .logo, .pagesMenu, .pagesMenu {
    display: flex;
    align-items: center;
  }

  .logo > h1 {
    font-size: 23px;
  }

  .LogoIcon {
    width: 50px;
    height: 50px;
  }

  .pagesMenu {
    width: 500px;
    justify-content: space-between;
    font-size: 19px;
  }

  .link {
    color: var(--gray);
    text-decoration: none;
    padding: 5.5px 20px;
    border-radius: 10px;
  }

  .link.router-link-active {
    background-color: var(--blue);
    color: var(--white);
  }

  .link:hover {
    cursor: pointer;
    transform: scale(1.02);
    color: var(--white);
  }

  .otherMenu {
    width: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .otherMenu__icon {
    width: 36px;
    height: 36px;
    padding: 4px;
    border-radius: 10px;
    fill: var(--white);
  }

  .otherMenu__icon:hover {
    cursor: pointer;
    transform: scale(1.03);
    background-color: var(--main1);
  }
</style>
