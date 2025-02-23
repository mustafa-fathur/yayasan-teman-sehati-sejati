<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  youtubeUrl: {
    type: String,
    required: true
  }
})

const isPlaying = ref(false)

const getYouTubeVideoId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  return (match && match[2].length === 11) ? match[2] : null
}

const videoId = getYouTubeVideoId(props.youtubeUrl)
const embedUrl = computed(() => `https://www.youtube.com/embed/${videoId}?autoplay=1`)
</script>

<template>
  <!-- Hero -->
  <div class="relative overflow-hidden">
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div class="max-w-2xl text-center mx-auto">
        <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl">
          Designed for you to get more <span class="text-blue-600">simple</span>
        </h1>
        <p class="mt-3 text-lg text-gray-800">Build your business here. Take it anywhere.</p>
      </div>

      <div class="mt-10 relative max-w-5xl mx-auto">
        <div class="w-full h-96 sm:h-[480px] rounded-xl overflow-hidden relative">
          <template v-if="isPlaying">
            <iframe
              :src="embedUrl"
              class="w-full h-full absolute inset-0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </template>
          <template v-else>
            <div 
              class="w-full h-full bg-[url('https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80')] bg-no-repeat bg-center bg-cover"
            >
              <div class="flex flex-col justify-center items-center size-full">
                <button
                  @click="isPlaying = true"
                  class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                >
                  <svg
                    class="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Play the overview
                </button>
              </div>
            </div>
          </template>
        </div>

        <!-- Decorative elements -->
        <div class="absolute bottom-12 -start-20 -z-[1] size-48 bg-gradient-to-b from-orange-500 to-white p-px rounded-lg">
          <div class="bg-white size-48 rounded-lg"></div>
        </div>
        <div class="absolute -top-12 -end-20 -z-[1] size-48 bg-gradient-to-t from-blue-600 to-cyan-400 p-px rounded-full">
          <div class="bg-white size-48 rounded-full"></div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Hero -->
</template> 