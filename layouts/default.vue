<template>
  <div>
    <nuxt />
  </div>
</template>

<style>


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  line-height: 1.5;
  width: 100%;
}

body {
  font-family: "Montserrat", sans-serif;
  background: #fff;
  color: #222;
  font-size: 16px;
}

h1,
h2,
h3,
h4,
h5 {
  font-family: "Corben", cursive;
}

.content {
  width: 80%;
  margin: 0 auto;
}

@media only screen and (min-width: 400px) {
  body {
    font-size: 18px;
  }
}

@media only screen and (min-width: 600px) {
  body {
    font-size: 20px;
  }
}

@media only screen and (min-width: 900px) {
  body {
    font-size: 22px;
  }
}

@media only screen and (min-width: 1024px) {
  body {
    font-size: 24px;
  }

    .content {
    width: 75%;
  }
}

@media only screen and (min-width: 1200px) {

  body {
    font-size: 28px;
  }


}

@media only screen and (min-width: 1400px) {

  body {
    font-size: 32px;
  }

      .content {
    width: 80%;
  }

  /* .content {
    width: 78%;
  } */

}

@media only screen and (min-width: 1600px) {

  body {
    font-size: 34px;
  }

}

@media only screen and (min-width: 1800px) {

  body {
    font-size: 36px;
  }

}

@media only screen and (min-width: 2000px) {

  body {
    font-size: 40px;
  }

}

@media only screen and (min-width: 3000px) {

  body {
    font-size: 60px;
  }

}


@keyframes appear {
  from {
    opacity: 0;

  } 

  to {
    opacity: 1;
  }
}

.appear {
    animation: appear 0.3s ease-out;
}

</style>
