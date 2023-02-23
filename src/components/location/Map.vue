<script setup lang="ts">
import { GoogleMap, Marker as MapMarker } from "vue3-google-map";
import SectionHeader from "../common/SectionHeader.vue";

const center = { lat: 50.744489, lng: -120.354175 };
const reception = { lat: 50.780344, lng: -120.329451 };
const zoom = 12;
</script>

<template>
  <section id="location" class="flex-col justify-center">
    <SectionHeader>Location</SectionHeader>
    <div class="w-full">
      <GoogleMap
        :api-key="import.meta.env.VITE_MAPS_API_KEY"
        style="width: 100%; height: 500px"
        :center="center"
        :zoom="zoom">
        <MapMarker :options="{ position: reception }" />
      </GoogleMap>
    </div>
  </section>
</template>
