<template>
	<div class="max-w-[1200px] m-auto pt-32 w-auto flex justify-between">
		<div
			id="left"
			class="ml-8 flex flex-col justify-between md:h-[400px] lg:h-[450px] items-center md:items-start text-center md:text-start p-0 md:p-8"
		>
			<div class="md:mt-8">
				<div
					class="cursor-default font-extralight text-3xl md:text-4xl lg:text-[58px] leading-8 md:leading-[42px] lg:leading-[64px] text-light"
				>
					Hi! I'm
					<span
						class="text-main font-regular hover:text-purple cursor-default transition-all"
						>Nil Valero</span
					>
					<br />
					Frontend Developer
				</div>

				<div
					id="buttons"
					class="flex justify-center md:justify-start gap-2 md:gap-5 mt-6"
				>
					<a
						href="#contact-section"
						class="px-6 py-3 bg-main text-white border-2 border-main transition-all hover:bg-purple hover:border-purple"
						>Contact</a
					>
					<a
						href="/files/Nil_Valero_Pi_CV.pdf"
						target="_blank"
						class="px-6 py-3 text-light border-2 border-light hover:border-purple transition-all"
						><i class="fa-solid fa-file-arrow-down mr-2"></i>Download CV</a
					>
				</div>
			</div>
			<div class="flex gap-5 text-dark text-3xl mt-10">
				<a
					href="https://linkedin.com/in/nil-valero-pi-69828b1b9"
					target="_blank"
					><i
						class="fa-brands fa-linkedin text-light hover:text-purple transition-all"
					></i
				></a>
				<a href="https://github.com/nvalero13" target="_blank"
					><i
						class="fa-brands fa-square-github text-light hover:text-purple transition-all"
					></i
				></a>
				<a href="https://www.behance.net/nilvalero" target="_blank"
					><i
						class="fa-brands fa-square-behance text-light hover:text-purple transition-all"
					></i
				></a>
			</div>
		</div>
	</div>
</template>

<script setup></script>

<style scoped></style>
