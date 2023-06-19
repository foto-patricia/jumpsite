<template>
  <span class="flex place-content-center text-lg font-bold font-sans m-2"
    >Foto-Patricia</span
  >
  <div class="mx-8 md:mx-4 lg:flex lg:place-content-center">
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-evenly"
    >
      <FeatherButton
        name="Kontakt"
        link="/vcard.vcf"
        icon="user-plus"
        color-name="contact"
      />
      <FeatherButton
        name="Homepage"
        link="https://www.foto-patricia.ch"
        icon="home"
        color-name="website"
      />
      <SimpleIconButton
        name="Facebook"
        link="https://www.facebook.com/FotoPatriciaPolakova"
        icon="FacebookIcon"
        color-name="facebook"
      />
      <SimpleIconButton
        name="Instagram"
        link="https://www.instagram.com/fotopatriciapolakova/"
        icon="InstagramIcon"
        color-name="instagram"
      />
      <SimpleIconButton
        name="WhatsApp"
        link="https://api.whatsapp.com/send?phone=41763471818"
        icon="WhatsappIcon"
        color-name="whatsapp"
      />
    </div>
  </div>

  <!-- <div
    class="grid grid-cols-2 md:grid-cols-4 bg-yellow-400 gap-4 justify-evenly"
  >
    <div class="bg-indigo-400">
      <p>Hello</p>
    </div>
    <div class="bg-indigo-400">
      <p>Hello</p>
    </div>
    <div class="bg-indigo-400">
      <p>Hello</p>
    </div>
    <div class="bg-indigo-400">
      <p>Hello</p>
    </div>
  </div> -->
</template>

<script setup lang="ts">
import SimpleIconButton from "./components/SimpleIconButton.vue";
import FeatherButton from "./components/FeatherButton.vue";
</script>
