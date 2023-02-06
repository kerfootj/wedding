<script setup lang="ts">
import { onMounted } from "vue";
import Hero from "./components/hero/Hero.vue";
import Invitation from "./components/invitation/Invitation.vue";
import Navbar from "./components/nav/Navbar.vue";

onMounted(() => {
  console.log("here");
});
</script>

<template>
  <Navbar />
  <Hero />
  <Invitation />
</template>
