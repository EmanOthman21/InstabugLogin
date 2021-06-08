<template>
  <div class="container login">
    <div class="row">
      <ImageSlider />
      <div class="right-col">
        <img src="../assets/logo.svg" alt="logo" />
        <p class>Log in to Instabug</p>
        <div class="social">
          <a href="#" class="social__button google">
            <span>
              <img
                src="../assets/google.png"
                alt="google-icon"
                class="social__button__img"
              />
            </span>
            Google
          </a>
          <a href="#" class="social__button github">
            <img
              src="../assets/github.svg"
              alt="github-icon"
              class="social__button__img"
            />
            GitHub
          </a>
          <a href="#" class="social__button microsoft">
            <img
              src="../assets/microsoft.svg"
              alt="microsoft-icon"
              class="social__button__img"
            />
            Microsoft
          </a>
        </div>
        <div class="divider">
          <span class="divider__title">OR</span>
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
    float: left;
    margin: 0 0 0px 10px;
    position: relative;
    top: -4px;
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
.divider {
  border: 1px solid $color-light-gray;
  height: 0;
  display: block;
  line-height: 1px;
  margin: 25px auto;
  max-width: 25vw;

  &__title {
    background: $color-white;
    font-size: 18px;
    padding: 0 15px;
    color: $color-dark-gray;
    font-weight: 600;
  }
}
</style>
