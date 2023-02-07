<script setup lang="ts">
defineProps<{
  image: "kamloops" | "sunset";
}>();
</script>

<template>
  <section id="hero">
    <div
      class="h-screen max-w-screen bg-cover bg-fixed bg-no-repeat"
      :class="
        image === 'kamloops'
          ? 'bg-kamloops'
          : image === 'sunset'
          ? 'bg-sunset'
          : ''
      ">
      <div class="flex justify-center">
        <!-- <img class="h-[360px]" src="/img/names.png" />  -->
      </div>
    </div>
  </section>
</template>
