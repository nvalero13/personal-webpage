<template>
    <div class="max-w-[1200px] m-auto flex flex-col items-center">
        <div class="mt-16 text-main text-2xl flex flex-col items-center">
            <h2>Skills</h2>
            <hr class="mt-1 w-10 border-b-2 border-main" />
        </div>

        <div class="flex flex-wrap gap-5 mt-10">
            <div v-for="skill in skills" class="py-2 px-5 border shadow-sm border-main rounded-md text-dark">{{ skill }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const skills = ref(["React", "Vue", "HTML, CSS & JS", "Git & Github", "React Native", "Tailwind", "Wordpress", "Fast learner", "mySQL", "phpMyAdmin", "Supabase", "Relational BBDD"]);
</script>

<style scoped>

</style>