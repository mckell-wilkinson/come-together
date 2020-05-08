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
            <h2 v-show="$route.path === '/'" class="intro-header appear">
              We’re an art collective based in Manchester. Our main objective
              is, as the name suggests, to bring people together.
            </h2>
          </div>
        </li>

        <li class="hamburger-container">
          <div class="icon icon-background">
            <div class="hamburger" v-on:click="hamburger"></div>
          </div>
        </li>
      </ul>
    </div>
    <div id="mobile-menu" class="mobile-menu hide">
       <img class="roundel" src="/img/assets/roundel.svg" alt="" />
      <ul class="hide mobile-items" id="mobile-items">
        <li>
          <nuxt-link to="/blog"><h3>BLOG</h3></nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about"><h3>ABOUT</h3></nuxt-link>
        </li>
        <li>
          <nuxt-link to="/events"><h3>EVENTS</h3></nuxt-link>
        </li>
        <li>
          <nuxt-link to="/events"><h3>CONTACT & SOCIAL</h3></nuxt-link>
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
  },

  methods: {
    hamburger() {
      const icon = document.querySelector(".icon");
      icon.classList.toggle("cross"); 
      icon.classList.toggle("icon-background");

      const mobileMenu = document.getElementById("mobile-menu");
      mobileMenu.classList.toggle("hide");

      const mobileItems = document.getElementById("mobile-items");
      mobileItems.classList.toggle("hide");
    }
  }
};
</script>

<style scoped>

.hide {
  display: none;
}

.header-container > .content > ul {
  display: inline-flex;
  list-style-type: none;
  justify-content: space-between;
  padding: 0;
  margin-top: 55px;
}

.icon {
  position: fixed;
  transform: translate(-50%, -50%);
  top: 25px;
  right: -5px;
  width: 45px;
  height: 45px;
  cursor: pointer;
  z-index: 1;
}

.icon-background {
  background: #f6f2f1;
  border-radius: 100%;
  opacity: 0.8;
}

.hamburger {
  width: 27px;
  height: 3px;
  background: #222;
  position: fixed;
  top: 23px;
  right: 5px;
  transform: translate(-50%, -50%);
  transition: 0.5s;
}

.hamburger:before,
.hamburger:after {
  content: "";
  position: fixed;
  width: 30px;
  height: 3px;
  background: #222;
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
  position: fixed;
  top: 0;
  right: 0;
  animation: showMobile 0.6s ease-out;
}

.roundel {
  width: 700px;
  opacity: 0.2;
  animation: showMobile 0.6s ease-out;
}

.mobile-items {
  position: fixed;
  top: 50vh;
  transform: translateY(-50%);
  text-align: center;
}

.mobile-items > li > a {
  color: #fff;
  text-decoration: none;
  font-size: 1.8em;
}

.mobile-items > li {
  list-style-type: none;
  margin: 0 0 2em;
}

@keyframes showMobile {
  from {
    opacity: 0;
    border-radius: 0 0 0 10000px;
    width: 0vw;
    height: 0vh;
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
