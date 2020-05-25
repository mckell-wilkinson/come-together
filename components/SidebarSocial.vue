<template>
  <div class="sidebar">
    <ul>
      <li>
        <nuxt-link
          v-bind:class="{ active: $route.path.includes('/contact') }"
          to="/contact"
          >CONTACT&SOCIAL</nuxt-link
        >
      </li>
    </ul>
  </div>
</template>

<style scoped>
.sidebar {
  display: none;
}

.active {
  color: #e62f20;
}

@media only screen and (min-width: 1024px) {
  .sidebar {
    display: block;
  }

  .sidebar > ul {
    position: fixed;
    top: 50px;
    left: 95vw;
    list-style-type: none;
    width: 0;
  }

  .sidebar > ul > li {
    /* transform: rotate(270deg); */
    margin-top: 62vh;
    transform: translateX(-50%) rotate(90deg);
  }

  a {
    font-size: 16px;
    color: #222;
    text-decoration: none;
  }

  a:hover {
    color: #e62f20;
  }
}

@media only screen and (min-width: 2000px) {
  a {
    font-size: 24px;
  }
}
</style>
