<template>
  <div class="flex flex-wrap">
    <SimpleIconButton
      name="Facebook"
      link="https://www.facebook.com/PatPolPhotography"
      icon="FacebookIcon"
      color-name="facebook"
    />
    <SimpleIconButton
      name="Instagram"
      link="https://www.instagram.com/patpol_photography/"
      icon="InstagramIcon"
      color-name="instagram"
    />
    <SimpleIconButton
      name="WhatsApp"
      link="https://api.whatsapp.com/send?phone=41763471818"
      icon="WhatsappIcon"
      color-name="whatsapp"
    />
    <FeatherButton
      name="Homepage"
      link="https://www.patpol-photography.ch"
      icon="home"
      color-name="website"
    />
    <FeatherButton
      name="Kontakt"
      link="/vcard.vcf"
      icon="user-plus"
      color-name="contact"
    />
  </div>
</template>

<script setup lang="ts">
import SimpleIconButton from "./components/SimpleIconButton.vue";
import FeatherButton from "./components/FeatherButton.vue";
</script>
