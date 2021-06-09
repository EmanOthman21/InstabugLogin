<template>
  <div class="notfound">
    <img src="../assets/not-found.jpg" alt="notfound" class="notfound__img" />
    <span class="notfound__title">404 - Page Not Found!</span>
    <span class="notfound__txt"
      >Sorry, that page doesn’t exist. What would you like to do?</span
    >
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style lang="scss" scoped>
@import "../style/_variables.scss";
@import "../style/_mixins.scss";
.notfound {
  text-align: center;
  &__img {
    padding-top: $spacing-x-s;
    width: auto;
    height: 25em;
    display: block;
    margin: $spacing-x-s auto;
  }
  &__title {
    @include text(bold, 26px, $color-dark-blue);
    display: block;
  }
  &__txt {
    @include text(normal, $text-md, $color-not-found);
    margin-top: $spacing-x-s;
    display: block;
  }
}
</style>
