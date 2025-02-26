<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isActiveRoute = (path) => {
  return computed(() => route.path === path)
}
</script>

<template>
<!-- ========== HEADER ========== -->
<header class="flex flex-wrap lg:justify-start lg:flex-nowrap z-50 w-full py-4 bg-white shadow-sm">
  <nav class="relative max-w-7xl w-full flex flex-wrap lg:grid lg:grid-cols-12 basis-full items-center px-4 md:px-6 lg:px-8 mx-auto">
    <div class="lg:col-span-3 flex items-center">
      <!-- Logo -->
      <router-link to="/" class="flex-none text-xl inline-block font-semibold focus:outline-none focus:opacity-80" aria-label="Yayasan Teman Sehat">
        <img src="/logo.png" alt="Logo" class="w-16 h-16 object-contain">
      </router-link>
      <!-- End Logo -->
    </div>

    <!-- Collapse -->
    <div id="hs-navbar-hcail" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow lg:block lg:w-auto lg:basis-auto lg:order-2 lg:col-span-6" aria-labelledby="hs-navbar-hcail-collapse">
      <div class="flex flex-col gap-y-4 gap-x-0 mt-5 lg:flex-row lg:justify-center lg:items-center lg:gap-y-0 lg:gap-x-7 lg:mt-0">
        <div>
          <router-link 
            class="relative inline-block text-black font-medium focus:outline-none hover:text-green-600 transition-colors" 
            :class="{ 'before:absolute before:bottom-0 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400': isActiveRoute('/').value }"
            to="/" 
            aria-current="page">Beranda</router-link>
        </div>
        <div>
          <router-link 
            class="relative inline-block text-black font-medium focus:outline-none hover:text-green-600 transition-colors" 
            :class="{ 'before:absolute before:bottom-0 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400': isActiveRoute('/tentang').value }"
            to="/tentang">Tentang</router-link>
        </div>
        <div>
          <router-link 
            class="relative inline-block text-black font-medium focus:outline-none hover:text-green-600 transition-colors" 
            :class="{ 'before:absolute before:bottom-0 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400': isActiveRoute('/kontak').value }"
            to="/kontak">Kontak</router-link>
        </div>
        <div>
          <router-link 
            class="relative inline-block text-black font-medium focus:outline-none hover:text-green-600 transition-colors" 
            :class="{ 'before:absolute before:bottom-0 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400': isActiveRoute('/donasi').value }"
            to="/donasi">Donasi</router-link>
        </div>
      </div>
    </div>
    <!-- End Collapse -->

    <!-- Button Group -->
    <div class="flex items-center gap-x-1 lg:gap-x-2 ms-auto py-1 lg:ps-6 lg:order-3 lg:col-span-3 justify-end">
      <router-link to="/donasi" class="py-2.5 px-4 inline-flex items-center gap-x-2 text-sm font-semibold text-nowrap rounded-xl border border-transparent bg-lime-500 text-white hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 shadow-sm transition-all">
        Donasi Sekarang
      </router-link>

      <div class="lg:hidden">
        <button type="button" class="hs-collapse-toggle size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" id="hs-navbar-hcail-collapse" aria-expanded="false" aria-controls="hs-navbar-hcail" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-hcail">
          <svg class="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
          <svg class="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
    </div>
    <!-- End Button Group -->
  </nav>
</header>
<!-- ========== END HEADER ========== -->
</template>