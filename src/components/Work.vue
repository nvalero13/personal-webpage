<template>
     <div class="max-w-[1200px] m-auto flex flex-col items-center">
        <div class="mt-16 text-main text-2xl flex flex-col items-center">
            <h2>Work</h2>
            <hr class="mt-1 w-10 border-b-2 border-main" />
        </div>

        <div class="flex flex-wrap justify-center gap-5 mt-10 mx-10">
            <div v-for="skill in skills" class="py-2 px-5 border-2 border-dark  rounded-md text-dark hover:border-main hover:text-main transition-all"><p>{{ skill }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>