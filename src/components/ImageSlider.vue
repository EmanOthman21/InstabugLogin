<template>
  <div class="slider"></div>
</template>

<script>
export default {
  name: "ImageSlider",
  data: function () {
    return {};
  },
  created: function () {},
  computed: {},
};
</script>

<style lang="scss" scoped>
.slider {
  width: 50vw;
  height: 100vh;
  background-color: #012376;
  @media (max-width: 992px) {
    display: none;
  }
}
</style>
