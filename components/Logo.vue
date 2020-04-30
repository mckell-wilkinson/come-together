<template>



  <img class="appear logo" src="/img/logo.svg" alt="">




</template>
<style scoped>
.appear {
  animation: 1s appear;
  margin: auto;
}

.logo {
  width: 50px;
  position: absolute;
  left: 44px;
  top: 39px;

}

.logo-container > ul >li {
  list-style-type:none;
}

@media only screen and (min-width: 1024px) {

  .logo {
    width: 70px;
  }

.logo-container > ul >li {
  display: inline-flex;
  align-items: center;

}

.come-together-header {
  margin-left: 30px;
}
}



@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}


</style>
