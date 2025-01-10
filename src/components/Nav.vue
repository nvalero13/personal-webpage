<template>
	<div class="fixed w-full z-20">
		<div class="border-b-2 border-light bg-dark bg-opacity-75 backdrop-blur-lg">
			<div
				class="m-auto max-w-[1248px] px-6 py-6 flex items-center justify-between text-light text-lg font-light"
			>
				<a href="#header-section" class="font-extralight">Nil Valero</a>
				<nav v-if="!mobile">
					<ul class="flex gap-10 font-extralight">
						<li v-for="navLink in navLinks">
							<a
								:href="navLink.href"
								class="border-b-2 border-transparent cursor-pointer hover:border-b-2 hover:border-main transition-all"
								>{{ navLink.title }}</a
							>
						</li>
					</ul>
				</nav>
				<button
					v-else
					@click="isShow = !isShow"
					class="flex flex-col justify-between w-5 h-4 transition-all"
				>
					<div
						class="bg-main h-0.5 w-full origin-left transition-all"
						:class="isShow ? 'rotate-45 w-[20px]' : ''"
					></div>
					<Transition name="fade">
						<div
							v-show="!isShow"
							class="bg-main h-0.5 w-full origin-left transition-all"
						></div>
					</Transition>
					<div
						class="bg-main h-0.5 w-full origin-left transition-all"
						:class="isShow ? '-rotate-45 w-[20px]' : ''"
					></div>
				</button>
			</div>
		</div>
		<Transition name="slide">
			<nav v-if="mobile && isShow">
				<ul
					class="z-10 left-0 top-18 w-full bg-dark bg-opacity-75 backdrop-blur-lg border-b-2 border-light gap-5 font-extralight mb-5"
				>
					<a
						v-for="navLink in navLinks"
						:href="navLink.href"
						class="cursor-pointer transition-all"
						><li class="py-3 px-6 border-b text-light">
							{{ navLink.title }}
						</li></a
					>
				</ul>
			</nav>
		</Transition>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const mobile = ref(false);
const isShow = ref(false);

const navLinks = ref([
	{ title: 'About', href: '#about-section' },
	{ title: 'Skills', href: '#skills-section' },
	{ title: 'Projects', href: '#work-section' },
	{ title: 'Contact', href: '#contact-section' },
]);

onMounted(() =>
	window.innerWidth < 768 ? (mobile.value = true) : (mobile.value = false)
);

window.addEventListener('resize', () => {
	if (window.innerWidth < 768) mobile.value = true;
	else mobile.value = false;
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: width 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
	width: 0px;
}

.slide-enter-active,
.slide-leave-active {
	transition: all 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
	transform: translateX(700px);
}
</style>
