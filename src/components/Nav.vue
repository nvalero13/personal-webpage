<template>
    <div class="w-full border-b-2 border-main bg-white bg-opacity-70 backdrop-blur-xl backdrop-brightness-125 fixed">
        <div class="m-auto w-[1200px] py-6 flex items-center justify-between text-dark text-lg">
            <h3 class="font-black">Nil Valero</h3>
            <nav class="flex gap-10 font-bold ">
                <a v-for="navLink in navLinks" class="border-b-2 border-transparent hover:border-b-2 hover:border-main transition-all" href="">{{ navLink }}</a>
            </nav>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const navLinks = ref(["About","Skills","Work","Contact"]);
</script>

<style scoped>

</style>