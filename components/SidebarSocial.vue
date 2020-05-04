<template>
  <div class="sidebar">
    <ul>
      <li>
    <nuxt-link to="/">CONTACT&SOCIAL</nuxt-link>
      </li>
    </ul>
  </div>
</template>




<style scoped>

.sidebar {
  display: none;
}

@media only screen and (min-width: 1024px) {

  .sidebar {
    display: block;
  }

  .sidebar > ul {
    position: fixed;
    top: 150px;
    left: 95vw;
    list-style-type: none;
    
  }


.sidebar > ul > li {
  width: 150px;
  /* transform: rotate(270deg); */
  margin-top: 400px;
  transform: translateX(-50%) rotate(90deg);
}

a {
  font-size: 16px;
  color: #222;
  text-decoration: none;
}

a:hover {
  color: #E62F20;
}


}



@media only screen and (min-width: 2000px) {

   a {
    font-size: 24px;
  }

  .sidebar > ul > li {
    margin-top: 650px;
  }

}

@media only screen and (min-width: 3000px) {


  .sidebar > ul > li {
    margin-top: 700px;
  }

}

</style>
