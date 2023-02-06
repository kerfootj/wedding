<script lang="ts">
export default {
  props: {
    href: String,
  },
};
</script>

<template>
  <a :href="href" class="pl-8">
    <p class="font-serif">
      <slot></slot>
    </p>
  </a>
</template>
