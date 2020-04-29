<template>
  <div class="header-container">
    <ul>
      <li>
        <Logo />
      </li>
      <li class="intro-header-list">
        <h2 class="intro-header">
          We’re an art collective based in Manchester. Our main objective is to bring people together through music and the arts. 
        </h2>
      </li>

      <li class="hamburger-container">
        <img class="hamburger" src="/img/menu.svg" alt="Hamburger menu" />
      </li>
    </ul>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  }
};
</script>

<style>
.header-container > ul {
  display: inline-flex;
  list-style-type: none;
  justify-content: space-between;
  padding: 0;
  margin-top: 30px;
}

.hamburger {
  width: 30px;
  float: right;
}

  h1.come-together-header,
  .intro-header {
    display: none;
  }


@media only screen and (min-width: 1024px) {
  

    h1.come-together-header,
  .intro-header {
    display: block;
  }
  .header-container > ul > li {
    justify-content: space-between;
    align-content: flex-end;
  }

  .hamburger-container {
    display: none;
  }

  h1.come-together-header {
    font-size: 0.6em;
  }


  h1.come-together-header,
  .intro-header {
    text-align: left;
    padding: 0;
    margin: 0;
  }
    .intro-header {
    font-size: 0.8em;
    transform: translateY(35px);
    text-align: right;
    
  }
}



</style>
