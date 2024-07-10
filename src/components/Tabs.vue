<template>
  <div>
    <div class="sm:hidden">
      <label for="tabs" class="sr-only">Select a tab</label>
      <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
      <select
        id="tabs"
        name="tabs"
        class="block w-full border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
      >
        <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">
          {{ tab.name }}
        </option>
      </select>
    </div>
    <div class="hidden sm:block">
      <nav class="flex flex-wrap gap-2 space-x-4" aria-label="Tabs">
        <span
          v-for="tab in tabs"
          :key="tab.name"
          :class="[
            tab.current
              ? 'bg-blue-100 text-blue-700'
              : 'text-gray-500 hover:text-gray-700',
            'rounded-md px-3 py-2 text-sm font-medium flex items-center gap-2 cursor-pointer',
          ]"
          :aria-current="tab.current ? 'page' : undefined"
        >
          <span>
            <component :is="tab.icon" class="w-4 h-4" aria-hidden="true" />
          </span>
          <span class="truncate">{{ tab.name }}</span></span
        >
      </nav>
    </div>
  </div>
</template>

<script setup>
import {
  BellIcon,
  BoltIcon,
  CodeBracketIcon,
  LockClosedIcon,
  LockOpenIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/vue/24/outline";

const tabs = [
  { name: "Account", icon: UserIcon, href: "#", current: true },
  { name: "Notifications", icon: BellIcon, href: "#", current: false },
  { name: "Security", icon: LockClosedIcon, href: "#", current: false },
  { name: "Child Accounts", icon: UsersIcon, href: "#", current: false },
  { name: "Access Control", icon: LockOpenIcon, href: "#", current: false },
  { name: "API Management", icon: CodeBracketIcon, href: "#", current: false },
  { name: "Logs", href: "#", icon: BoltIcon, current: false },
];
</script>
