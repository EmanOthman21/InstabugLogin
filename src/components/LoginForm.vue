<template>
  <form class="form" @submit.prevent="login">
    <div class="login__error" v-if="loginError" id="incorrect_data">
      <span class="login__error__text">
        Your email and/or password are correct
      </span>
    </div>
    <label for="email" class="form__label">Work Email</label>
    <br />
    <input
      id="email"
      type="email"
      class="form__input"
      :class="{ invalid: !validEmail }"
      v-model="email"
      placeholder="you@company.com"
      @blur="validateEmail()"
    />
    <span class="form__error" id="invalid_email" v-if="!validEmail"
      >Enter a valid email address</span
    >
    <br />
    <label for="password" class="form__label">Password</label>
    <a href="/login" class="form__anchor">Forget Password?</a><br />
    <input
      id="password"
      type="password"
      class="form__input"
      :class="{ invalid: !validPassword }"
      v-model="password"
      placeholder="8+ Characters"
      @input="validatePassword"
    />
    <span class="form__error" v-if="!validPassword"
      >Password must be 6 characters or more</span
    >
    <br />
    <button
      id="submit"
      type="submit"
      class="form__button"
      :disabled="!(validEmail && validPassword && email && password)"
    >
      Log In
    </button>
  </form>
</template>

<script>
export default {
  data: function () {
    return {
      email: "",
      password: "",
      validEmail: true,
      validPassword: true,
      loginError: false,
      validData: [
        { email: "mohamed@instabug.com", password: "P12345678" },
        { email: "mohamed1@instabug.com", password: "P12345678" },
        { email: "mohamed2@instabug.com", password: "P12345678" },
        { email: "mohamed3@instabug.com", password: "P12345678" },
        { email: "mohamed4@instabug.com", password: "P12345678" },
        { email: "mohamed5@instabug.com", password: "P12345678" },
        { email: "mohamed6@instabug.com", password: "P12345678" },
        { email: "mohamed7@instabug.com", password: "P12345678" },
      ],
    };
  },
  methods: {
    validateEmail() {
      //eslint-disable-next-line
      this.validEmail= !/^\S+@\S+\.\S+$/.test(this.email)? false: true;
    },
    validatePassword() {
      let addressName = this.email.substring(0, this.email.indexOf("@"));
      this.validPassword =
        this.password.includes(addressName) ||
        !/[A-Z]/.test(this.password) ||
        this.password.length < 9 ||
        !/[0-9]/.test(this.password)
          ? false
          : true;
    },
    login() {
      let exist = this.validData.find(
        (user) => user.email === this.email && user.password === this.password
      )
        ? true
        : false;
      if (exist) {
        localStorage.setItem("userEmail", this.email);
        this.$router.push("/");
      } else {
        this.loginError = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../style/_variables.scss";
@import "../style/_mixins.scss";
.form {
  &__input {
    @include inputArea();
    @include customBorder($color-white, $color-light-gray);
    color: $color-label;
    padding: $spacing-xxs 0 $spacing-xxs $spacing-xs;
    outline: none;
    &::placeholder {
      color: $color-light-gray;
    }
  }
  &__label {
    float: left;
    margin-left: 190px;
    @include text(normal, $text-sm, $color-label);
  }
  &__anchor {
    @include text(normal, $text-sm, $color-light-gray);
  }
  &__button {
    @include inputArea();
    @include text(normal, $text-sm, $color-white);
    @include customBorder($color-light-blue, $color-light-blue);
    height: $spacing-x-md;
    &:hover {
      background-color: $color-btn-hover;
    }
    &:disabled {
      @include customBorder($color-light-gray, $color-light-gray);
      cursor: not-allowed;
    }
  }
  &__error {
    @include text(normal, 11px, $color-error);
    float: left;
    margin-left: 190px;
  }
}
.invalid {
  border-color: $color-error;
}
.login__error {
  @include customBorder($color-light-semion, $color-label);
  border-radius: 3px;
  color: $color-label;
  max-width: 25vw;
  margin: $spacing-xx-s auto;
  text-align: start;
  padding: $spacing-xs 0 $spacing-xs $spacing-xxs;
}
</style>
