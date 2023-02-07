<script setup lang="ts">
defineProps<{ href: string }>();
</script>

<template>
  <a :href="href" class="pl-8">
    <p class="font-serif">
      <slot></slot>
    </p>
  </a>
</template>
