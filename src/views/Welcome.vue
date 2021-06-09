<template>
  <div class="home">
    <img
      src="../assets/logo.svg"
      alt="logo"
      class="home__logo"
      draggable="false"
    />
    <span class="home__welcome"
      >Welcome to <strong>{{ email }}</strong></span
    >
    <br />
    <button @click="logout" class="home__btn">Logout</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: function () {
    return { email: "" };
  },
  created() {
    this.email = window.localStorage.getItem("userEmail");
  },
  methods: {
    logout() {
      window.localStorage.removeItem("userEmail");
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../style/_variables.scss";
@import "../style/_mixins.scss";
.home {
  text-align: center;
  &__logo {
    padding-top: $spacing-md;
    width: 7.25em;
    height: 7.25em;
    display: block;
    margin: $spacing-x-s auto;
  }
  &__welcome {
    @include text(26px, $color-label);
  }
  &__btn {
    @include inputArea();
    @include customBorder($color-light-blue, $color-light-blue);
    @include text($text-md, $color-white, bold);
    margin-top: $spacing-x-s;
    height: $spacing-x-md;
    width: 12.5em;
    &:hover {
      background-color: $color-btn-hover;
    }
  }
}
</style>
