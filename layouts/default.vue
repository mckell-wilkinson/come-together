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

a {
  color: #e62f20;
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

/*Blogs styled here */

.blog-item {
  margin: 0 auto 3em;
}

#blog-list {
  margin: 3em auto;
}

#blog-list li {
  list-style-type: none;
}

#blog-list > .blog-item > .blog-content > ul > .blog-img {
  margin-bottom: 1em;
}

.blog-description {
  font-size: 1em;
  margin: 0.5em 0 0;
}

.blog-date {
  font-size: 0.7em;
  opacity: 0.8;
}

#more-blogs {
  background: none;
  border: solid 5px #222;
  color: #222;
  padding: 15px 20px;
  font-size: 16px;
  border-radius: 100px;
  max-width: 200px;
  font-weight: bold;
  font-family: "Corben", cursive;
  transition: 0.3s;
}

#more-blogs:hover {
  color: #fff;
  background-color: #e62f20;
  border: solid 5px #e62f20;
}
@media only screen and (min-width: 1024px) {
  #blog-list > li {
    width: 32.8%;
    display: inline-flex;
    margin: 2em auto 0;
  }

  #blog-list > .blog-item > .blog-content > ul > .blog-img {
    margin-bottom: 0;
  }

  .blog-item:nth-child(3n + 1) > .blog-content {
    padding: 0 0 0 1em;
  }

  .blog-item:nth-child(3n + 2) > .blog-content {
    padding: 0 1em 0 0;
  }

  .blog-item:nth-child(3n + 3) > .blog-content {
    padding: 0 0.5em;
  }

  .blog-item:nth-child(1) > .blog-content {
    padding: 0;
  }

  .blog-description {
    display: none;
  }

  .blog-date {
    margin: 0.5em 0 0;
  }

  #blog-list > li:nth-child(1) {
    width: 100%;
  }

  #blog-list > li:nth-child(1) > .blog-content > ul {
    display: inline-flex;
    justify-content: space-between;
    padding: 0;
    margin: 0;
  }

  #blog-list > li:nth-child(1) > .blog-content > ul > li:nth-child(1) {
    width: 60%;
    float: left;
  }

  #blog-list > li:nth-child(1) > .blog-content > ul > li:nth-child(2) {
    width: 35%;
  }

  #blog-list > li:nth-child(1) > .blog-content > ul > li > .blog-description {
    display: block;
    font-size: 0.6em;
  }

  #blog-list > li:nth-child(1) {
    margin: 0;
    padding: 0;
  }

  #blog-list > li:nth-child(2) {
    margin-top: 1em;
    padding: 0;
  }
  #blog-list > li:nth-child(3) {
    margin-top: 1em;
    padding: 0;
  }
  #blog-list > li:nth-child(4) {
    margin-top: 1em;
    padding: 0;
  }
}
</style>
