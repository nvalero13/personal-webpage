<template>
    <div class="w-[1200px] h-[650px] pt-32 pl-10 m-auto flex justify-around">
        
        <div id="left" class="flex flex-col justify-between h-[400px]">
            <div class="mt-16">
                <div class="text-[58px] font-bold text-dark leading-[64px]">
                    Hi! I'm <span class="text-main">Nil Valero</span> <br/>
                    Frontend Developer
                </div>

                <div id="buttons" class="flex gap-5 mt-6">
                    <button class="px-6 py-3 bg-main rounded-md text-white">Contact</button>
                    <a href="/files/DNI.pdf" target="_blank" class="px-6 py-3 bg-white rounded-md text-main border-2 border-main"><i class="fa-solid fa-file-arrow-down mr-2"></i>Download CV</a>
                </div>
            </div>
            <div class="flex gap-5 text-dark text-3xl">
                <a href="https://linkedin.com/in/nil-valero-pi-69828b1b9" target="_blank"><i class="fa-brands fa-linkedin hover:text-main transition-all"></i></a>
                <a href="https://github.com/nvalero13" target="_blank"><i class="fa-brands fa-square-github hover:text-main transition-all"></i></a>
                <a href="https://www.behance.net/nilvalero" target="_blank"><i class="fa-brands fa-square-behance hover:text-main transition-all"></i></a>
            </div>
        </div>

        <div>
            <img class="h-[500px]" src="../assets/portrait.png" alt="Portrait">
        </div>


    </div>
</template>

<script setup>


</script>

<style scoped>

</style>