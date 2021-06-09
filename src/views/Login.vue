<template>
  <div class="container login">
    <ImageSlider />
    <div class="right-col">
      <img src="../assets/logo.svg" alt="logo" />
      <span class="instabug">Log in to Instabug</span>
      <div class="social">
        <router-link to="/login" class="social__button google">
          <span>
            <img
              src="../assets/google.png"
              alt="google-icon"
              class="social__button__img"
            />
          </span>
          Google
        </router-link>
        <router-link to="/login" class="social__button github">
          <img
            src="../assets/github.svg"
            alt="github-icon"
            class="social__button__img"
          />
          GitHub
        </router-link>
        <router-link to="/login" class="social__button microsoft">
          <img
            src="../assets/microsoft.svg"
            alt="microsoft-icon"
            class="social__button__img"
          />
          Microsoft
        </router-link>
      </div>
      <div class="divider">
        <span class="divider__title">OR</span>
      </div>
      <LoginForm />
      <Companies />
    </div>
  </div>
</template>

<script>
import ImageSlider from "../components/ImageSlider.vue";
import LoginForm from "../components/LoginForm.vue";
import Companies from "../components/Companies.vue";

export default {
  name: "Login",
  components: {
    ImageSlider,
    LoginForm,
    Companies,
  },
};
</script>

<style lang="scss" scoped>
@import "../style/_variables.scss";
@import "../style/_mixins.scss";

.login {
  overflow: hidden;
}

.right-col {
  max-height: 100vh;
  width: 50%;
  float: left;
  margin-top: 3.125em;
  text-align: center;
}

.instabug {
  @include text(normal, 24px, $color-label);
  display: block;
  margin: 1em 0;
}
.social__button {
  @include inputArea();
  @include text(bold, $text-md, $color-white);
  padding: $spacing-s 0 0 0;
  &__img {
    width: $spacing-xx-s;
    height: $spacing-xx-s;
    float: left;
    margin: 0 0 0 $spacing-s;
    position: relative;
    top: -4px;
  }
}
.google {
  @include customBorder($color-light-blue, $color-light-blue);
}
.github {
  @include customBorder($color-dark-gray, $color-dark-gray);
}
.microsoft {
  @include customBorder($color-white, $color-dark-gray);
  color: $color-dark-gray;
}

.divider {
  background-color: $color-light-gray;
  height: 1px;
  display: block;
  line-height: 2px;
  margin: $spacing-x-s auto;
  width: 400px;

  &__title {
    @include text(bold, $text-md, $color-dark-gray);
    background: $color-white;
    padding: 0 $spacing-xs;
  }
}
</style>
