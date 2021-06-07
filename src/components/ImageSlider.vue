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

.slider {
  width: 50vw;
  height: 100vh;
  text-align: center;
  background-color: $color-dark-blue;
  @media (max-width: 992px) {
    display: none;
  }

  &__img {
    padding-top: 80px;
    width: 35vw;
    height: 60vh;
    display: block;
    margin: 0 auto;
  }

  &__txt {
    color: white;
    margin: 50px 0;
    font-size: 26px;
  }
  &__dot {
    height: 8px;
    width: 8px;
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
