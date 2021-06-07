<template>
  <div class="container login">
    <div class="row">
      <ImageSlider />
      <div class="right-col">
        <img src="../assets/logo.svg" alt="logo" />
        <p class>Log in to Instabug</p>
        <div class="social">
          <button class="social__button google">
            <img
              src="../assets/google.png"
              alt="google-icon"
              class="social__button__img"
            />
            Google
          </button>
          <button class="social__button github">
            <img
              src="../assets/github.svg"
              alt="github-icon"
              class="social__button__img"
            />
            GitHub
          </button>
          <button class="social__button microsoft">
            <img
              src="../assets/microsoft.svg"
              alt="microsoft-icon"
              class="social__button__img"
            />
            Microsoft
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageSlider from "../components/ImageSlider.vue";
export default {
  name: "Login",
  components: {
    ImageSlider,
  },
};
</script>

<style lang="scss" scoped>
@import "../style/_variables.scss";
@import "../style/_mixins.scss";

.right-col {
  width: 50%;
  float: left;
  margin-top: 50px;
  text-align: center;
}

.social__button {
  &__img {
    width: 20px;
    height: 20px;
  }
}
.google {
  @include socialBtn($color-light-blue, $color-white, $color-light-blue);
}
.github {
  @include socialBtn($color-dark-gray, $color-white, $color-dark-gray);
}
.microsoft {
  @include socialBtn($color-white, $color-dark-gray, $color-dark-gray);
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>
