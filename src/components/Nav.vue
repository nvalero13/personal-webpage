<template>
    <div class="w-full border-b-2 border-main bg-white bg-opacity-70 backdrop-blur-xl backdrop-brightness-125 fixed">
        <div class="m-auto w-[1200px] py-6 flex items-center justify-between text-dark text-lg">
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