<template>
  <div class="home">
    <img src="../assets/logo.svg" alt="logo" class="home__logo" />
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
    padding-top: 80px;
    width: 100px;
    height: 100px;
    display: block;
    margin: 30px auto;
  }
  &__welcome {
    @include text(normal, 26px, $color-label);
    //margin: 20px 0;
  }
  &__btn {
    @include inputArea();
    @include customBorder($color-light-blue, $color-light-blue);
    @include text(600, 16px, $color-white);
    margin-top: 30px;
    height: 40px;
    width: 200px;
    &:hover {
      background-color: $color-btn-hover;
    }
  }
}
</style>
