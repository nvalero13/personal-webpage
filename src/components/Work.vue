<template>
  <div class="max-w-[1200px] m-auto flex flex-col items-center mb-24">
    <div class="mt-16 text-main text-2xl flex flex-col items-center">
      <h2>Projects</h2>
      <hr class="mt-1 w-10 border-b-2 border-main" />
    </div>

    <div
      
      class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 mx-10"
    >
    
      <article v-for="project in projects"
        class="w-[300px] cursor-pointer hover:shadow-lg hover:scale-105 transition-all"
      >
      <a :href="project.link">
        <img
          class="shadow-inner h-48 w-full object-cover object-left rounded-t-md"
          :src="project.img"
          :alt="`${project.title} Image`"
        />
        <div
          class="bg-white border-t-4 border-main p-5 shadow-md h-56 flex flex-col justify-between text-dark rounded-b-md"
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
import PaperBagImg from '../assets/paper-bag.png'
import TuduImg from '../assets/tudu.png'
import MetImg from '../assets/met.png'
import PenjapenjollsImg from '../assets/penjapenjolls.png'

const projects = ref([
  {
    img: PaperBagImg,
    title: "Paper Bag",
    desc: "A paper bag raffle maker with funny animations.",
    link: "https://github.com/nvalero13/paper-bag",
    tags: "HTML, CSS & Javascript",
  },
  {
    img: TuduImg,
    title: "Tudú",
    desc: "Task manager that allows the creation of tasks, subtasks, categories and filters by date.",
    link: "https://github.com/nvalero13/ironhack-final-project",
    tags: "Vue, Supabase, Tailwind",
  },
  {
    img: PenjapenjollsImg,
    title: "Penjapenjolls",
    desc: "E-commerce of contemporary jewelry",
    link: "https://penjapenjolls.com/",
    tags: "Wordpress, Photography",
  },
  {
    img: MetImg,
    title: "Met Museum Gallery",
    desc: "Unconventional web gallery that consumes the MET museum API.",
    link: "https://github.com/nvalero13/met-web",
    tags: "React, API",
  },
]);
</script>

<style scoped></style>
