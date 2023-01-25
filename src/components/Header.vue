<template>
    <div class="max-w-[1200px] pt-32 m-auto flex justify-around flex-col-reverse items-center md:flex-row ">
        
        <div id="left" class="flex flex-col justify-between md:h-[400px] items-center md:items-start text-center md:text-start p-0 md:p-8">
            <div class="md:mt-8 ">
                <div class=" text-3xl md:text-5xl lg:text-[58px] font-bold text-dark leading-8 md:leading-[48px] lg:leading-[64px]">
                    Hi! I'm <span class="text-main">Nil Valero</span> <br/>
                    Frontend Developer
                </div>

                <div id="buttons" class="flex justify-center md:justify-start gap-2 md:gap-5 mt-6">
                    <a href="#contact-section" class="px-6 py-3 bg-main rounded-md text-white hover:scale-105 transition-all">Contact</a>
                    <a href="/files/DNI.pdf" target="_blank" class="px-6 py-3 bg-white rounded-md text-main border-2 border-main hover:scale-105 transition-all"><i class="fa-solid fa-file-arrow-down mr-2"></i>Download CV</a>
                </div>
            </div>
            <div class="flex gap-5 text-dark text-3xl mt-10">
                <a href="https://linkedin.com/in/nil-valero-pi-69828b1b9" target="_blank"><i class="fa-brands fa-linkedin hover:text-main transition-all"></i></a>
                <a href="https://github.com/nvalero13" target="_blank"><i class="fa-brands fa-square-github hover:text-main transition-all"></i></a>
                <a href="https://www.behance.net/nilvalero" target="_blank"><i class="fa-brands fa-square-behance hover:text-main transition-all"></i></a>
            </div>
        </div>

        <div>
            <img class="max-w-[300px] md:max-w-[500px] object-contain" src="../assets/portrait.png" alt="Portrait">
        </div>


    </div>
</template>

<script setup>


</script>

<style scoped>

</style>