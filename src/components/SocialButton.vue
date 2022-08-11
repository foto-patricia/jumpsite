<template>
  <a
    class="flex border border-2 rounded-md justify-self-start m-4"
    :class="color"
    :href="link"
    target="_blank"
    rel="noopener"
  >
    <!-- <vue-feather :type="icon" class="m-4 my-4" stroke-width="2"></vue-feather> -->
    <component :is="icon" class="m-4 my-4 stroke-current"></component>
    <p class="self-center mr-4 text-lg font-semibold">{{ name }}</p>
  </a>
</template>

<script lang="ts">
import { WhatsappIcon, FacebookIcon, InstagramIcon } from 'vue3-simple-icons';
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    WhatsappIcon,
    FacebookIcon,
    InstagramIcon,
  },
  props: {
    name: String,
    link: String,
    icon: String,
    colorName: String,
  },
  computed: {
    color(){
      return `text-${this.colorName}`;
    }
  }
})
</script>
