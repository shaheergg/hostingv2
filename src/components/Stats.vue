<template>
  <dl
    class="grid grid-cols-1 gap-px px-4 mx-auto border rounded sm:grid-cols-2 lg:grid-cols-4"
  >
    <div
      v-for="stat in stats"
      :key="stat.name"
      class="flex flex-wrap items-center justify-between px-4 py-6 bg-white gap-x-4 gap-y-2 sm:px-6 xl:px-4"
    >
      <div class="space-y-4">
        <dt class="text-3xl font-medium leading-6 text-black">
          {{ stat.value }}
        </dt>
        <dd
          class="flex-none w-full font-medium leading-10 tracking-tight text-blue-600 truncate"
        >
          {{ stat.name }}
        </dd>
      </div>
      <div>
        <span
          class="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full"
        >
          <component :is="stat.icon" class="w-5 h-5 text-blue-500"
        /></span>
      </div>
    </div>
  </dl>
</template>

<script setup>
import {
  BoltIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  FlagIcon,
} from "@heroicons/vue/24/outline";

const stats = [
  {
    name: "Recent DDos Attacks",
    value: "12",
    icon: BoltIcon,
  },
  {
    name: "Unhandled Abuse Cases",
    value: "3",
    icon: FlagIcon,
  },
  {
    name: "Traffic usage",
    value: "12 TB",
    icon: ChartBarIcon,
  },
  {
    name: "Unhandled Invoices",
    value: "5",
    icon: CurrencyDollarIcon,
  },
];
</script>
