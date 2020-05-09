<template>
  <div>
    <Header />
    <div class="content">
      <ul class="about-intro">
        <h1>About</h1>
        <li>
          <p>
            <strong>
              We are an arts and community events collective based in Chorlton,
              Manchester. Our mission is to offer a platform to artists and
              performers to exhibit their work while bringing people together to
              share temporary creative spaces.
            </strong>
          </p>
          <p>
            Our DIY events see residential homes and local venues undergo
            metamorphosis into cinemas, galleries and concert halls that come
            down as quickly as they go up. We create one-night-only experiences
            and invite folks in to be present with the art and with one another.
            Community connections are central to our work and we aim to be a
            part of making our community a creative, engaged and supportive one.
            We are an open door collective and welcome everyone to get involved
            and collaborate with us, from artists looking for their first chance
            to exhibit to local charities and other events organisers. So have a
            little look around, meet the team and see what we’ve been up to so
            far.
          </p>
          <p>
            Say hello, get in touch and we’ll see you soon.
          </p>
        </li>
      </ul>
      <ul class="meet-team">
        <li>
          <h3>Rosin</h3>
          <p class="job-title">Creative Director and Media Manager</p>
          <img class="roundel" src="/img/assets/roisin.png" alt="" />
        </li>
        <li>
          <h3>Ellie</h3>
          <p class="job-title">Creative Director and Media Manager</p>
          <img class="roundel" src="/img/assets/ellie.png" alt="" />
        </li>
        <li>
          <h3>Laura Lanks</h3>
          <p class="job-title">Creative Director and Media Manager</p>
          <img class="roundel" src="/img/assets/roisin.png" alt="" />
        </li>
        <li>
          <h3>Rosin</h3>
          <p class="job-title">Creative Director and Media Manager</p>
          <img class="roundel" src="/img/assets/roisin.png" alt="" />
        </li>
        <li>
          <h3>Rosin</h3>
          <p class="job-title">Creative Director and Media Manager</p>
          <img class="roundel" src="/img/assets/roisin.png" alt="" />
        </li>
        <li>
          <h3>Rosin</h3>
          <p class="job-title">Creative Director and Media Manager</p>
          <img class="roundel" src="/img/assets/roisin.png" alt="" />
        </li>
      </ul>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    Footer
  }
};
</script>
