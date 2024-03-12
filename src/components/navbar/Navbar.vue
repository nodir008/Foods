<script setup>
import { useRouter } from 'vue-router';

const pages = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/favourites",
    name: "Favourites",
  }
];
</script>

<template>
  <nav class="nav">
    <div class="container">
      <RouterLink to="/" class="nav__logo">Foods</RouterLink>
      <ul class="nav__menu">
        <li v-for="item in pages" :key="item.name">
          <RouterLink class="nav__menu-link" :to="item.path">{{item.name}}</RouterLink>
        </li>
      </ul>

      <RouterLink to="/contact"><span class="box"> Contact </span></RouterLink>
    </div>
  </nav>
</template>


