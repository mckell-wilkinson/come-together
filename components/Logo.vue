<template>


<div class="logo-container">
  <ul>
    <li>
  <img class="appear logo" src="/img/logo.svg" alt="">
   <h1 class="come-together-header">Come Together Collective</h1>
    </li>
 
  </ul>

  
  </div>

</template>
<style scoped>
.appear {
  animation: 1s appear;
  margin: auto;
}

.logo {
  width: 50px;
  float: left;
}

.logo-container > ul >li {
  list-style-type:none;
}

@media only screen and (min-width: 1024px) {

  .logo {
    width: 100px;
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
