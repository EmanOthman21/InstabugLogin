<template>
  <div class="container login">
    <div class="row">
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
        <div class="login__error" v-if="loginError">
          <span class="login__error__text">
            Your email and/or password are correct
          </span>
        </div>
        <form class="form" @submit.prevent="submit">
          <label for="email" class="form__label">Work Email</label>
          <a href="/login" class="form__anchor">Forget Password?</a><br />
          <input
            id="email"
            type="email"
            class="form__input"
            v-model="email"
            placeholder="you@company.com"
          /><br />
          <label for="password" class="form__label">Password</label><br />
          <input
            id="password"
            type="password"
            class="form__input"
            v-model="password"
            placeholder="8+ Characters"
          /><br />
          <button type="submit" class="form__button">Log In</button>
        </form>
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
  data: function () {
    return {
      email: "",
      password: "",
      loginError: false,
    };
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
  display: block;
  @include text(normal, 24px, $color-label);
  margin: 20px 0;
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
.row:after {
  content: "";
  display: table;
  clear: both;
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
.login__error {
  border: 1px solid $color-label;
  border-radius: 3px;
  background-color: $color-light-semion;
  color: $color-label;
  max-width: 25vw;
  margin: 25px auto;
  text-align: start;
  padding: 10px 0 10px 4px;
}
.form {
  &__input {
    @include inputArea();
    @include customBorder($color-white, $color-light-gray);
    color: $color-label;
    padding: 4px 0;
    &::placeholder {
      color: $color-light-gray;
      padding-left: 10px;
    }
  }
  &__label {
    float: left;
    margin-left: 190px;
    @include text(normal, 14px, $color-label);
  }
  &__anchor {
    @include text(normal, 14px, $color-light-gray);
  }
  &__button {
    @include inputArea();
    @include customBorder($color-light-gray, $color-light-gray);
    @include text(normal, 14px, $color-white);
    height: 40px;
  }
}
</style>
