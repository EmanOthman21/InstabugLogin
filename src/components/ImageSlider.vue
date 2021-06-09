<template>
  <div class="slider">
    <img
      :src="curImgSrc"
      alt="product-img"
      class="slider__img"
      draggable="false"
    />
    <p class="slider__txt">{{ this.curText }}</p>
    <div>
      <span
        class="slider__dot"
        :class="{ active: index === currentIndex }"
        v-for="(item, index) in 3"
        :key="item"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageSlider",
  data: function () {
    return {
      imgs: [
        require("@/assets/overview.svg"),
        require("@/assets/bug-reporting.svg"),
        require("@/assets/crash-reporting.svg"),
      ],
      labels: [
        "Accelerate Your Entire Mobile Team Workflow",
        "The Most Comprehensive Bug Reporting Tool for Mobile Apps",
        "Secure Crash Reporting With Real-Time Alerts",
      ],
      currentIndex: 0,
      timer: null,
    };
  },
  created: function () {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.imgs.length;
    }, 2000);
  },
  computed: {
    curImgSrc: function () {
      return this.imgs[this.currentIndex];
    },
    curText: function () {
      return this.labels[this.currentIndex];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../style/_variables.scss";
@import "../style/_mixins.scss";

.slider {
  width: 50%;
  float: left;
  height: 100vh;
  text-align: center;
  background-color: $color-dark-blue;

  &__img {
    padding-top: $spacing-md;
    width: 35vw;
    height: 60vh;
    display: block;
    margin: 0 auto;
  }

  &__txt {
    @include text(26px, $color-white);
    margin: 50px 0;
  }
  &__dot {
    height: $spacing-xs;
    width: $spacing-xs;
    margin: 0 2px;
    border: 2px solid white;
    border-radius: 50%;
    display: inline-block;
    &.active {
      background-color: white;
    }
  }
}
</style>
