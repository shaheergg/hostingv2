<template>
  <div class="px-4">
    <div class="flow-root mt-8">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div class="flex items-center pb-4">
            <h2 class="text-2xl font-semibold">Scheduled Maintenance</h2>
          </div>
          <div
            class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg"
          >
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="py-3.5 pl-4 pr-3 text-left text-sm text-gray-900 sm:pl-6"
                  >
                    DETAIL
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm text-gray-900"
                  >
                    STATUS
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm text-gray-900"
                  >
                    SCHEDULED FOR
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm text-gray-900"
                  >
                    SCHEDULED UNTIL
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-if="maintenance.length === 0">
                  <td
                    class="py-4 pl-4 pr-3 text-sm font-medium text-center text-gray-900 whitespace-nowrap sm:pl-6"
                    colspan="4"
                  >
                    No maintenance scheduled
                  </td>
                </tr>
                <tr v-for="person in maintenance" :key="person.email">
                  <td
                    class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"
                  >
                    {{ person.name }}
                  </td>
                  <td class="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {{ person.title }}
                  </td>
                  <td class="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {{ person.email }}
                  </td>
                  <td class="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {{ person.role }}
                  </td>
                  <td
                    class="relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-6"
                  >
                    <a href="#" class="text-indigo-600 hover:text-indigo-900"
                      >Edit<span class="sr-only">, {{ person.name }}</span></a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const maintenance = [];
</script>
