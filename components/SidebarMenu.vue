<template>
  <div class="sidebar">
    <ul>
      <li>
        <nuxt-link  v-bind:class="{ 'active': $route.path.includes('/blog') }" to="/blog">BLOG</nuxt-link>
      </li>
      <li>
        <nuxt-link  v-bind:class="{ 'active': $route.path == '/about' }" to="/about">ABOUT</nuxt-link>
      </li>
      <li>
        <nuxt-link  v-bind:class="{ 'active': $route.path == '/events' }" to="/events">EVENTS</nuxt-link>
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
    left: 70px;
    list-style-type: none;
    width: 0;
  }

  .sidebar > ul > li {
    margin-top: 20vh;
    transform: translateX(-50%) rotate(270deg);
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
