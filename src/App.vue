<script setup lang="ts">
import PageContainer from "./components/common/PageContainer.vue";
import Navbar from "./components/nav/Navbar.vue";
import Hero from "./components/hero/Hero.vue";
import Map from "./components/location/Map.vue";
import Invitation from "./components/invitation/Invitation.vue";
import RSVP from "./components/rsvp/RSVP.vue";
</script>

<template>
  <Navbar />
  <PageContainer>
    <Hero image="kamloops" />
    <Invitation />
    <Hero image="sunset" />
    <Map />
    <RSVP />
  </PageContainer>
</template>
