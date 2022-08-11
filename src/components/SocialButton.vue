<template>
  <a
    class="flex border rounded-md justify-self-start m-4"
    :class="color"
    :href="link"
    target="_blank"
    rel="noopener"
  >
    <vue-feather :type="icon" class="m-4 my-4" stroke-width="2"></vue-feather>
    <p class="self-center mr-4 text-lg font-semibold">{{ name }}</p>
  </a>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, computed } from "vue";

interface Props {
  name: string;
  link: string;
  icon: string;
}

const props = withDefaults(defineProps<Props>(), {
  name: "Facebook",
  link: "https://www.facebook.com",
  icon: "facebook",
});

const color = computed(() => `text-${props.icon}`);
</script>
