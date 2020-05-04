<template>
  <div class="header-container">
    <Logo />
    <div class="content">
      <ul>
        <li>
          <h1 class="come-together-header">Come Together Collective</h1>
        </li>
        <li class="intro-header-list">
          <div class="float-right">
            <h2 class="intro-header">
              We’re an art collective based in Manchester. Our main objective is, as the name suggests, to bring people together.
            </h2>
          </div>
        </li>

        <li class="hamburger-container">
          <img class="hamburger" src="/img/menu.svg" alt="Hamburger menu" />
        </li>
      </ul>
    </div>
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

<style scoped>
.header-container > .content > ul {
  display: inline-flex;
  list-style-type: none;
  justify-content: space-between;
  padding: 0;
  margin-top: 55px;
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
    font-size: 16px;
  }

  .float-right {
    width: 86%;
    float: right;
  }
}


@media only screen and (min-width: 2000px) {

  .intro-header {
    font-size: 24px;
  }

}

@media only screen and (min-width: 3000px) {

  .intro-header {
    font-size: 30px;
  }

}

</style>
