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
              We’re an art collective based in Manchester. Our main objective
              is, as the name suggests, to bring people together.
            </h2>
          </div>
        </li>

        <li class="hamburger-container">
          <div class="icon">
            <div class="hamburger" v-on:click="hamburger"></div>
          </div>
        </li>
      </ul>
    </div>
    <div id="mobile-menu"></div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  },

  methods: {
    hamburger() {
      let icon = document.querySelector(".icon");
      icon.classList.toggle("cross");

      let showMobileMenu = document.getElementById("mobile-menu");
      showMobileMenu.classList.toggle("mobile-menu");
    }
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


.icon {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 25px;
  right: -5px;
  width: 45px;
  height: 60px;
  cursor: pointer;
  z-index: 1;
}

.hamburger {
  width: 30px;
  height: 3px;
  background: #444;
  position: absolute;
  top: 35px;
  right: 0px;
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
}

.hamburger:before,
.hamburger:after {
  content: "";
  position: absolute;
  width: 30px;
  height: 3px;
  background: #444;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
}

.hamburger:before {
  top: -8px;
}

.hamburger:after {
  top: 8px;
}

.icon.cross .hamburger {
  background: rgba(0, 0, 0, 0);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0);
}

.icon.cross .hamburger:before {
  top: 0;
  transform: rotate(45deg);
  background: #fff;
}
.icon.cross .hamburger:after {
  top: 0;
  transform: rotate(135deg);
  background: #fff;
}

.mobile-menu {
  width: 100vw;
  height: 100vh;
  background: #e62f20;
  position: absolute;
  top: 0;
  right: 0;
  animation: showMobile 0.5s ease-out;
}

@keyframes showMobile {

  from {
opacity: 0;
border-radius: 100% 0 0 100%;
width: 0vw;
height: 100vh;

  }

  to {

  }
  
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
