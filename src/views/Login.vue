<template>
  <div class="container login">
    <div>
      <ImageSlider />
      <div class="right-col">
        <img src="../assets/logo.svg" alt="logo" />
        <span class="instabug">Log in to Instabug</span>
        <div class="social">
          <a href="/login" class="social__button google">
            <span>
              <img
                src="../assets/google.png"
                alt="google-icon"
                class="social__button__img"
              />
            </span>
            Google
          </a>
          <a href="/login" class="social__button github">
            <img
              src="../assets/github.svg"
              alt="github-icon"
              class="social__button__img"
            />
            GitHub
          </a>
          <a href="/login" class="social__button microsoft">
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
        <LoginForm />
        <Companies />
      </div>
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

.right-col {
  width: 50%;
  float: left;
  margin-top: 50px;
  text-align: center;
}

.instabug {
  @include text(normal, 24px, $color-label);
  display: block;
  margin: 15px 0;
}
.social__button {
  @include inputArea();
  @include text(600, 16px, $color-white);
  padding: 12px 0 0 0;
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
  margin: 25px auto;
  max-width: 25vw;

  &__title {
    background: $color-white;
    font-size: 18px;
    padding: 0 5px;
    color: $color-dark-gray;
    font-weight: 600;
  }
}
</style>
