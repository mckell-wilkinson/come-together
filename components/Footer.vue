<template>
  <footer>
    <div class="content">
      <div class="social-container">
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.instagram.com/cometogethercollective/"
            >
              <img
                class="social-logo"
                src="/img/assets/instagram-black.svg"
                alt="Instagram logo"
                data-not-lazy
              />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.facebook.com/pages/category/Community/Come-Together-Collective-110538887071305/"
            >
              <img
                class="social-logo"
                src="/img/assets/facebook.svg"
                alt="Facebook logo"
                data-not-lazy
              />
            </a>
          </li>
          <li>
            <nuxt-link :to="`/contact`">
              <img
                class="social-logo"
                src="/img/assets/mail.svg"
                alt="Email icon"
                data-not-lazy
              />
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="privacy-container">
        <ul>
          <li>
            <p>
              <nuxt-link :to="`/privacy`">
                Privacy statement
              </nuxt-link>
            </p>
          </li>
          <li>
            <p>
              <nuxt-link :to="`/service`">
                Terms of service
              </nuxt-link>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  components: {
    // Logo
  }
};
</script>

<style scoped>
.content {
  margin-top: 1.5em;
}
footer {
  margin: 6em auto 0;
  background: #f6f2f1;
  padding: 1em 0;
}

img {
  margin-bottom: 0;
}

.social-logo {
  width: 25px;
}

.social-container > ul {
  display: flex;
  justify-content: center;
  width: 100px;
  margin: 0 auto 0.5em;
}

.social-container > ul > li {
  text-align: center;
  margin: 0 0.5em;
}

p {
  text-align: center;
  font-size: 0.5em;
}

a {
  color: #222;
}

ul {
  list-style-type: none;
}
</style>
