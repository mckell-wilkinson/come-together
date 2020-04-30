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
  /* .sidebar {
    position: fixed;
    top: 50vh;
    left: -46.5%;
    display: block;
    text-align: right;
  }

  .sidebar > ul {
    list-style-type: none;
    display: inline-flex;
    transform: rotate(270deg);
  } */

  .sidebar {
    display: block;
  }

  .sidebar > ul {
    position: fixed;
    top: 150px;
    left: 30px;
    list-style-type: none;
    
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
  color: #E62F20;
}


}



</style>
