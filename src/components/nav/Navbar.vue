<script setup lang="ts">
import NavLink from "./NavLink.vue";
</script>

<script lang="ts">
export default {
  data: function () {
    return {
      isScrolled: false,
    };
  },
  methods: {
    handleScroll(): void {
      this.isScrolled = window.scrollY !== 0;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<template>
  <div
    class="fixed flex justify-center z-50 px-16 w-full transition-all ease-in-out duration-300"
    :class="isScrolled && 'backdrop-filter backdrop-blur'">
    <nav
      class="border-b border-white/40 py-6 w-full max-w-screen-lg transition-all ease-in-out duration-300"
      :class="isScrolled && 'py-2'">
      <div class="flex">
        <div><span class="font-cursive text-2xl">Leia & Joel</span></div>
        <div class="ml-auto"></div>
        <NavLink href="#location">Location</NavLink>
        <NavLink href="#schedule">Schedule</NavLink>
        <NavLink href="#invitation">RSVP</NavLink>
      </div>
    </nav>
  </div>
</template>
