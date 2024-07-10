<template>
  <AppLayout>
    <div class="space-y-4">
      <div class="flex items-center justify-end gap-4">
        <button
          class="px-4 py-2 text-sm text-gray-600 border-2 rounded cursor-not-allowed"
          :disabled="true"
        >
          Start
        </button>
        <button class="px-4 py-2 text-sm border-2 rounded bg-gray-50">
          Restart
        </button>
        <button
          class="px-4 py-2 text-sm font-semibold text-red-500 border-2 border-red-500 rounded-md"
        >
          Kill
        </button>
        <button
          class="px-4 py-2 text-sm text-white bg-red-500 border-2 border-red-500 rounded-md"
        >
          Shutdown
        </button>
      </div>
      <dl
        class="grid grid-cols-1 gap-px px-4 mx-auto border rounded shadow bg-gray-50 md:divide-x sm:grid-cols-2 lg:grid-cols-4"
      >
        <div
          v-for="stat in stats"
          :key="stat.name"
          class="flex flex-wrap items-center justify-between px-4 py-6 bg-gray-50 gap-x-4 gap-y-2 sm:px-6 xl:px-4"
        >
          <div class="space-y-4">
            <dt class="font-medium leading-6 text-gray-600">
              {{ stat.name }}
            </dt>
            <dd
              class="flex-none w-full text-xl font-medium leading-10 tracking-tight text-blue-600 truncate"
            >
              {{ stat.value }}
            </dd>
          </div>
        </div>
      </dl>
      <div class="grid grid-cols-4 gap-4 md:grid-cols-10">
        <div
          class="flex flex-col items-center col-span-4 gap-4 p-4 border rounded shadow bg-gray-50 md:col-span-2"
        >
          <h2 class="text-lg font-semibold text-center">Bandwidth Usage</h2>
          <div class="relative">
            <CircleProgressBar
              strokeWidth="8"
              :rounded="true"
              :value="1"
              :max="100"
            />
            <span class="absolute text-xl font-semibold top-10 left-[47px]"
              >0</span
            >
          </div>
          <span class="px-4 py-1 text-xs border border-gray-600 rounded-full"
            >619 MiB / Unlimited</span
          >
        </div>
        <div class="col-span-4 p-4 border rounded shadow bg-gray-50"></div>
        <div class="col-span-4 p-4 border rounded shadow bg-gray-50"></div>
      </div>
      <div class="p-4 space-y-4 border rounded shadow bg-gray-50">
        <h2 class="text-lg font-semibold">Network</h2>
        <span class="text-sm text-gray-600">IP Address</span>
        <div class="flex items-center gap-4">
          <div class="space-y-2">
            <span class="text-sm text-gray-600">Address</span>
            <h3 class="font-semibold">213.176.64.245/24</h3>
          </div>
          <div class="space-y-2">
            <span class="text-sm text-gray-600">Gateway</span>
            <h3 class="font-semibold">213.176.64.245</h3>
          </div>
          <div class="space-y-2">
            <span class="text-sm text-gray-600">Mac Address</span>
            <h3 class="font-semibold">None</h3>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div class="col-span-1 p-4 border rounded shadow bg-gray-50">
          <div class="text-">
            <h2 class="text-lg font-semibold">Terminal</h2>
            <p class="text-sm text-gray-600">
              Remotely manage your server from the web.
            </p>
            <div class="flex items-center pt-10">
              <div class="flex-1 py-4 pr-4 space-y-4 border-r">
                <h2 class="text-lg font-semibold">noVNC</h2>
                <p class="text-sm text-gray-600">
                  Best for compatibility but lacks features and performance.
                </p>
                <button
                  class="flex items-center px-4 py-2 text-white bg-blue-500 rounded-md"
                >
                  Launch
                  <span>
                    <ArrowUpRightIcon class="w-4 h-4 ml-2" />
                  </span>
                </button>
              </div>
              <div class="flex-1 py-4 pl-4 space-y-4">
                <h2 class="text-lg font-semibold">xTerms.js</h2>
                <p class="text-sm text-gray-600">
                  Best performance but doesn't work for every operating system.
                </p>
                <button
                  class="flex items-center px-4 py-2 text-white bg-blue-500 rounded-md"
                >
                  Launch
                  <span>
                    <ArrowUpRightIcon class="w-4 h-4 ml-2" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col justify-between col-span-1 p-4 border shadow bg-gray-50"
        >
          <div class="space-y-4">
            <h2 class="text-lg font-semibold">Configure This Server</h2>
            <p class="text-sm text-gray-600">
              You are an administrator of this server. You can click below to
              visit this server's build configuration and make edits
            </p>
          </div>
          <div class="flex items-center justify-end text-sm">
            <button
              class="px-4 py-2 text-gray-600 border border-gray-600 rounded"
            >
              Configure server
            </button>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
<script setup>
import { ArrowUpRightIcon } from "@heroicons/vue/24/outline";
import AppLayout from "../layouts/AppLayout.vue";
import { CircleProgressBar } from "vue3-m-circle-progress-bar";

const stats = [
  {
    name: "State",
    value: "Running",
  },
  {
    name: "CPU",
    value: "0%",
  },
  {
    name: "Memory",
    value: "1.74 GiB / 2 GiB",
  },
  {
    name: "Uptime",
    value: "1 Days",
  },
];
</script>
