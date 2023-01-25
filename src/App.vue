
<template>
  <div>
    <Nav/>
    <Header id="header-section"/>
    <About id="about-section"/>
    <Skills id="skills-section"/>
    <Work id="work-section" />  
    <Contact id="contact-section" />
    <Footer />  
  </div>
</template>

<script setup>
import Nav from './components/Nav.vue';
import Header from './components/Header.vue';
import About from './components/About.vue'
import Skills from './components/Skills.vue';
import Work from './components/Work.vue';
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue';
</script>

<style scoped>

</style>
