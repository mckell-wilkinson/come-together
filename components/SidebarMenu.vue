<template>
  <div class="sidebar">
    <ul>
      <li>
        <nuxt-link to="/blog">BLOG</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">ABOUT</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/events">EVENTS</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.sidebar {
  display: none;
}

@media only screen and (min-width: 1024px) {
  .sidebar {
    display: block;
  }

  .sidebar > ul {
    position: fixed;
    top: 150px;
    left: 70px;
    list-style-type: none;
    width: 0;
  }

  .sidebar > ul > li {
    width: 150px;
    /* transform: rotate(270deg); */
    margin-top: 100px;
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

  .sidebar > ul > li {
    margin-top: 200px;
  }
}
</style>
