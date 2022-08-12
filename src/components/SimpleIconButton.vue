<template>
  <a
    class="flex border border-2 border-current rounded-md"
    :class="color"
    :href="link"
    target="_blank"
    rel="noopener"
  >
    <component :is="icon" class="m-4 my-4 stroke-current stroke-1"></component>
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
