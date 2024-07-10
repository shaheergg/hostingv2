<template>
  <AppLayout>
    <div class="container space-y-4">
      <div class="flex items-center">
        <h2 class="text-2xl font-semibold">Dashboard</h2>
      </div>
      <div class="px-4 py-2 bg-blue-100 rounded">
        <span class="text-sm text-blue-500">All systems are operational</span>
      </div>
      <Stats />
      <Maintenance />
    </div>
  </AppLayout>
</template>

<script setup>
import Maintenance from "../components/Maintenance.vue";
import Stats from "../components/Stats.vue";
import AppLayout from "../layouts/AppLayout.vue";
</script>
