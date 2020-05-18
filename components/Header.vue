<template>
  <div class="header-container">
    <Logo />
    <div class="content">
      <ul>
        <li>
          <h1 v-show="$route.path === '/'" class="come-together-header">Come Together Collective</h1>
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
       <div id="hamburger" v-on:click="hamburger">
  <span></span>
  <span></span>
  <span></span>
</div>
        </li>
      </ul>
    </div>
    <div id="mobile-menu" class="mobile-menu hide">
       <!-- <img class="roundel" src="/img/assets/roundel.svg" alt="" /> -->
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
      const icon = document.getElementById("hamburger");
      icon.classList.toggle("open"); 
     

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

#hamburger {
  width: 30px;
  height: 45px;
  position: fixed;
  top: 15px;
  right: 15px;
  margin: 0;
  padding: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
  z-index: 3;
}

#hamburger span {
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background: #222;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
}

#hamburger span:nth-child(1) {
  top: 0px;
}

#hamburger span:nth-child(2) {
  top: 8px;
}

#hamburger span:nth-child(3) {
  top: 18px;
}

#hamburger.open span {
  background: #fff;
}

#hamburger.open span:nth-child(1) {
  top: 8px;
  -webkit-transform: rotate(135deg);
  -moz-transform: rotate(135deg);
  -o-transform: rotate(135deg);
  transform: rotate(135deg);
}

#hamburger.open span:nth-child(2) {
  opacity: 0;
  left: -60px;
}

#hamburger.open span:nth-child(3) {
  top: 8px;
  -webkit-transform: rotate(-135deg);
  -moz-transform: rotate(-135deg);
  -o-transform: rotate(-135deg);
  transform: rotate(-135deg);
}


.mobile-menu {
  width: 100vw;
  height: 100vh;
  background: #e62f20;
  position: fixed;
  top: 0;
  right: 0;
  animation: showMobile 0.6s ease-out;
  z-index: 2;
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
