<template>
  <div class="hero">
    <Header />
    <div class="content">
      <h1 class="come-together fade-in">Come Together Collective</h1>
      <img class="roundel fade-in" src="/img/assets/roundel.svg" alt="Come Together design" />
      <h2 class="intro fade-in">
        We’re an art collective based in Manchester. Our main objective is, as
        the name suggests, to bring people together.
      </h2>
    </div>
    <div class="welcome-container">
      <img
        class="welcome appear"
        id="welcome"
        src="/img/assets/welcome.svg"
        alt="Welcome from the Come Together Collective"
      />
    </div>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";

export default {
  components: {
    Header
  },
  mounted() {
    let image = document.getElementById("welcome");
    if (process.browser && image) {
      //rotate welcome icon on scroll
      window.document.onscroll = function() {
        scrollRotate();
      };

      function scrollRotate() {
        image.style.transform = "rotate(-" + window.pageYOffset / 2.5 + "deg)";
      }
    }
  }
};
</script>

<style scoped>
.content {
  margin-top: 0;
}

.hero {
  background: #f6f2f1;
  text-align: center;
  position: relative;
  padding: 0;
  position: relative;
  min-height: 90vh;
}

h1 {
  font-size: 2.3em;
  margin-top: 2em;
}
h1.come-together,
.intro {
  display: block;
}

h2 {
  font-weight: 500;
  font-size: 1.2em;
  margin-top: 1em;
}

.roundel {
  margin: 0 auto;
  padding: 2em 0;
  width: 80%;
  display: block;
}

.welcome-container {
  display: none;
}

.intro {
  padding-bottom: 4em;
}

@media only screen and (min-width: 400px) {
  .roundel {
    width: 60%;
  }
}

@media only screen and (min-width: 600px) {
  .roundel {
    width: 40%;
  }

  .welcome-container {
    display: block;
    position: absolute;
    bottom: 0;
  }
  .welcome {
    width: 4.5em;
    position: relative;
    bottom: -54px;
    left: 33vw;
  }
}

@media only screen and (min-width: 900px) {
  .welcome {
    bottom: -57px;
  }
}

@media only screen and (min-width: 1024px) {
  .roundel {
    margin: 30vh auto 0;
    transform: translateY(-40%);
    padding: 0;
  }

  h1.come-together,
  .intro {
    display: none;
  }

  .roundel {
    width: 35%;
  }

  .welcome {
    bottom: -66px;
  }
}

@media only screen and (min-width: 1200px) {
  .roundel {
    width: 30%;
  }

  .welcome {
    bottom: -75px;
  }
}

@media only screen and (min-width: 1400px) {
  .welcome {
    bottom: -84px;
  }
}

@media only screen and (min-width: 1600px) {
  .welcome {
    bottom: -88px;
  }
}
</style>
