<template>
  <AppLayout>
    <div class="container space-y-4">
      <div class="flex items-center">
        <h2 class="text-2xl font-semibold">Account Management</h2>
      </div>
      <Tabs />
      <div class="p-4 space-y-4 rounded">
        <h2 class="text-lg font-semibold">Account</h2>
        <form class="space-y-4">
          <div class="grid gap-4 md:grid-cols-4">
            <div class="col-span-2 space-y-4">
              <label class="font-semibold" for="company"> Company </label>
              <input
                id="company"
                class="w-full px-4 py-2 bg-white border rounded-md outline-none"
                type="text"
              />
            </div>
            <div class="col-span-2 space-y-4">
              <label class="font-semibold" for="vatId"> VAT ID </label>
              <input
                id="vatId"
                class="w-full px-4 py-2 bg-white border rounded-md outline-none"
                type="text"
              />
            </div>
            <div class="col-span-2 space-y-4">
              <label class="font-semibold" for="firstName"> First Name </label>
              <input
                id="firstName"
                class="w-full px-4 py-2 bg-white border rounded-md outline-none"
                type="text"
              />
            </div>
            <div class="col-span-2 space-y-4">
              <label class="font-semibold" for="lastName"> Last Name </label>
              <input
                id="lastName"
                class="w-full px-4 py-2 bg-white border rounded-md outline-none"
                type="text"
              />
            </div>
            <div class="col-span-2 space-y-4">
              <label class="font-semibold" for="street"> Street </label>
              <input
                id="street"
                class="w-full px-4 py-2 bg-white border rounded-md outline-none"
                type="text"
              />
            </div>
            <div class="col-span-2 space-y-4">
              <label class="font-semibold" for="zip"> ZIP Code </label>
              <input
                id="zip"
                class="w-full px-4 py-2 bg-white border rounded-md outline-none"
                type="number"
              />
            </div>

            <div class="col-span-2 space-y-4">
              <label class="font-semibold" for="city"> City / Location </label>
              <input
                id="city"
                class="w-full px-4 py-2 bg-white border rounded-md outline-none"
                type="text"
              />
            </div>
            <div class="col-span-2 space-y-4">
              <label class="font-semibold" for="city"> Country </label>
              <input
                id="country"
                class="w-full px-4 py-2 bg-white border rounded-md outline-none"
                type="text"
              />
            </div>
            <div class="col-span-4 p-4 text-sm bg-gray-100 rounded-md">
              <span></span>
              <p>
                To change your customer data, please contact our
                <a href="#" class="text-blue-500 hover:underline"
                  >customer service</a
                >
              </p>
            </div>
            <div
              class="flex items-center justify-end col-span-4 gap-4 py-4 text-sm"
            >
              <button class="px-12 py-3 text-white bg-blue-500 rounded">
                Save
              </button>
              <button class="px-12 py-3 rounded bg-gray-50">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </AppLayout>
</template>

<script setup>
import Tabs from "../components/Tabs.vue";
import AppLayout from "../layouts/AppLayout.vue";
</script>
