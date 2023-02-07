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
    class="fixed flex justify-center z-50 px-4 md:px-16 w-full bg-white drop-shadow-xl">
    <nav
      class="py-2 w-full max-w-screen-lg transition-spacing ease-in-out duration-300">
      <div class="flex">
        <div><span class="font-cursive text-2xl">Leia & Joel</span></div>
        <div class="ml-auto"></div>
        <div class="hidden xs:flex">
          <NavLink href="#location">Location</NavLink>
          <NavLink href="#schedule">Schedule</NavLink>
          <NavLink href="#invitation">RSVP</NavLink>
        </div>
      </div>
    </nav>
  </div>
</template>
