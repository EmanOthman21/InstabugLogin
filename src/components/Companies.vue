<template>
  <div class="companies">
    <span class="companies__title">Trusted by the top companies</span><br />
    <div class="companies__container">
      <div v-for="image in imgs" :key="image" class="companies__imgs">
        <img :src="image" alt="logo" class="companies__img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Companies",
  data: function () {
    return {
      imgs: [
        require("@/assets/lyft-full-logo.svg"),
        require("@/assets/buzzfeed-full-logo.svg"),
        require("@/assets/asana-full-logo.svg"),
        require("@/assets/one-plus-logo.svg"),
        require("@/assets/house-party-logo.svg"),
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../style/_variables.scss";
@import "../style/_mixins.scss";

.companies {
  &__container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  }
  &__title {
    @include text(normal, $text-sm, $color-companies);
  }
  &__img {
    margin: $spacing-xs;
    max-width: $spacing-md;
    max-height: $spacing-x-s;
    width: auto;
  }
}
</style>
