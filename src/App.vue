<template>
	<Nav />
	<main class="bg-dark px-8 pb-10 md:px-20 xl:px-30">
		<Header id="header-section" />
		<About id="about-section" />
		<Skills id="skills-section" />
		<Work id="work-section" />
		<Contact id="contact-section" />
	</main>
	<Footer />
</template>

<script setup>
import Nav from './components/Nav.vue';
import Header from './components/Header.vue';
import About from './components/About.vue';
import Skills from './components/Skills.vue';
import Work from './components/Work.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
</script>

<style scoped>
#about-section,
#skills-section,
#work-section,
#contact-section {
	scroll-margin-top: 100px;
}
</style>
