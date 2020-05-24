<template>
   <nuxt-link :to="`/`"><img class="logo" src="/img/assets/logo.png" alt="Come Together logo" /></nuxt-link>
</template>
<style scoped>

.logo {
  width: 50px;
  position: absolute;
  left: 15px;
  top: 10px;
}

.logo-container > ul > li {
  list-style-type: none;
}

@media only screen and (min-width: 1024px) {
  .logo {
    width: 70px;
    left: 44px;
    top: 39px;
    position: fixed;
  }

  .logo-container > ul > li {
    display: inline-flex;
    align-items: center;
  }

  .come-together-header {
    margin-left: 30px;
  }
}


@media only screen and (min-width: 3000px) {
  .logo {
    width: 100px;
  }
}
</style>
