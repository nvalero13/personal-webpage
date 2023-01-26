<template>
  <div @mousemove="followMouse" class="max-w-[1200px] m-auto flex flex-col items-center mb-24">
    <div class="mt-16 text-main text-2xl flex flex-col items-center">
      <h2>Skills</h2>
      <hr class="mt-1 w-10 border-b-2 border-main" />
    </div>

    <div class="flex flex-wrap justify-center gap-5 mt-10 mx-10">
      <div
        v-for="skill in skills"
        @mouseenter="showDescription = true, desc=skill.desc"
        @mouseleave="showDescription = false"
        class="py-2 px-5 border-2 border-dark bg-white rounded-md text-dark hover:border-main hover:text-main cursor-default transition-all"
      >
        <p>{{ skill.title }}</p>
      </div>
    </div>

    <Transition name="bounce" mode="out-in">
    <div
      ref="followDiv"
      v-show = "showDescription"
      class="absolute w-64 border-2 bg-white py-3 px-5 border-dark text-dark rounded-md pointer-events-none"
    >
        {{ desc }}
    </div>
    </Transition>

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const showDescription = ref(false);
const desc = ref("");
const skills = ref([
  {title: "React", desc:"I have experience using React in several projects, including APIs, hooks, Redux and routing."},
  {title: "Vue", desc:"I have experience using Vue in several projects, including APIs, directives, Pinia and routing."},
  {title: "HTML, CSS & JS", desc:"I enjoy mastering the basics, creating advanced animations with CSS, and manipulating the DOM with JS."},
  {title: "Git & Github", desc:"I understand the basic functionality of a version control system."},
  {title: "React Native", desc:"I have developed 2 apps using Expo framework."},
  {title: "Tailwind", desc:"I am familiar with Bootstrap, but I prefer the freedom that Tailwind CSS gives me in terms of design."},
  {title: "Wordpress", desc:"I have used Wordpress to create an e-commerce website."},
  {title: "Supabase", desc:"I have used Supabase in multiple projects for user authentication, table creation and buckets."},
  {title: "mySQL", desc:"I know the basics of SQL and I have experience with phpMyAdmin."},
  {title: "Relational BBDD", desc:"I have knowledge of relational database model architecture."},
  {title: "Self-taught", desc:"I am self-sufficient and have ease in finding resources to learn independently."},
  {title: "Passion for development", desc:"I enjoy development. I enjoy programming and I am always working on personal projects."},
  {title: "Fast learner", desc:"I have ease in learning new concepts and adapting to new dynamics."},
  {title: "HCI basics", desc:"I know the fundamentals of HCI, I am familiar with UX/UI design and I always try to apply it in my projects."},
  {title: "Design", desc:"I have knowledge of design in general and I am aware of current trends."},
  {title: "Versatile", desc:"Maybe I do not reach excellence in everything but I adapt notably in almost everything."},

]);

const followDiv = ref(null);
const followMouse = (event) => {
  if (!followDiv.value) return;
  followDiv.value.style.left = event.layerX-128 + "px";
  followDiv.value.style.top = event.layerY+10 + "px";
};



</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.3s;
}
.bounce-leave-active {
  animation: bounce-in 0.3s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
