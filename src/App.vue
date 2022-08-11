<template>
  <div class="flex">
    <SocialButton
      name="Facebook"
      link="https://www.facebook.com/PatPolPhotography"
      icon="FacebookIcon"
      color-name="facebook"
    />
    <SocialButton
      name="Instagram"
      link="https://www.instagram.com/patpol_photography/"
      icon="InstagramIcon"
      color-name="instagram"
    />
    <SocialButton
      name="WhatsApp"
      link="https://api.whatsapp.com/send?phone=41763471818"
      icon="WhatsappIcon"
      color-name="whatsapp"
    />
  </div>
</template>

<script setup lang="ts">
import SocialButton from "./components/SocialButton.vue";
</script>
