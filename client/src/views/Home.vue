<template>
  <div class="home">
    <TheNavigation />
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import TheNavigation from "@/components/TheNavigation.vue";

export default {
  name: "Home",
  components: {
    TheNavigation
  }
};
</script>
