<template>
    <div class="w-full border-b-2 border-main bg-white bg-opacity-50 backdrop-blur-lg backdrop-brightness-125 z-10 fixed">
        <div class="m-auto max-w-[1248px] px-6 py-6 flex items-center justify-between text-dark text-lg">
            <a href="#header-section" class="font-black">Nil Valero</a>
            <nav class="flex gap-10 font-bold ">
                <a v-for="navLink in navLinks" :href="navLink.href" class="border-b-2 border-transparent cursor-pointer hover:border-b-2 hover:border-main transition-all">{{ navLink.title }}</a>
            </nav>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const navLinks = ref([{title: "About", href: "#about-section"}, {title: "Skills", href: "#skills-section"}, {title: "Work", href: "#work-section"}, {title: "Contact", href: "#contact-section"}]);
</script>

<style scoped>

</style>