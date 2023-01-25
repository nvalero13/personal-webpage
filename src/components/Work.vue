<template>
  <div class="max-w-[1200px] m-auto flex flex-col items-center mb-16">
    <div class="mt-16 text-main text-2xl flex flex-col items-center">
      <h2>Work</h2>
      <hr class="mt-1 w-10 border-b-2 border-main" />
    </div>

    <div
      
      class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mx-10"
    >
    
      <article v-for="project in projects"
        class="w-[300px] cursor-pointer hover:shadow-lg hover:scale-105 transition-all"
      >
      <a :href="project.link">
        <img
          class="shadow-inner h-48 w-full object-cover rounded-t-md"
          :src="project.img"
          :alt="`${project.title} Image`"
        />
        <div
          class="border-t-4 border-main p-3 shadow-md h-48 flex flex-col justify-between text-dark rounded-b-md"
        >
          <div>
            <h3 class="text-xl font-bold my-1">{{ project.title }}</h3>
            <p>{{ project.desc }}</p>
          </div>

          <p class="text-main">{{ project.tags }}</p>
        </div>
        </a>
      </article>
 
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const projects = ref([
  {
    img: "src/assets/paper-bag.png",
    title: "Paper Bag",
    desc: "A paper bag raffle maker with funny animations",
    link: "https://github.com/nvalero13/paper-bag",
    tags: "HTML, CSS & Javascript",
  },
  {
    img: "src/assets/tudu.png",
    title: "Tudú",
    desc: "Task manager",
    link: "https://github.com/nvalero13/ironhack-final-project",
    tags: "Vue, Supabase, Tailwind",
  },
  {
    img: "src/assets/met.png",
    title: "Met",
    desc: "Met Museum Gallery",
    tags: "React, API",
  },
]);
</script>

<style scoped></style>
