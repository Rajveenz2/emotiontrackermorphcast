<script setup>
import EmotionsBars from "@/components/EmotionsBars.vue";
import CameraComponent from "@/components/CameraComponent.vue";
import { onMounted, onUnmounted, ref } from "vue";
import { getAiSdkControls } from "../morphcast-ai-sdk/ai-sdk-loader";
import Dropdown from "primevue/dropdown";

onMounted(async () => {
  const { source, start } = await getAiSdkControls();
  await source.useCamera({
    toVideoElement: document.getElementById("videoEl"),
  });
  await start();
});

onUnmounted(async () => {
  const { stop } = await getAiSdkControls();
  await stop();
});
</script>

<template>
  <div class="card flex justify-content-center">
    <Dropdown
      v-model="selectedVideo"
      :options="videos"
      optionLabel="name"
      placeholder="Select a Video"
      class="w-full md:w-14rem"
      @change="loadVideo()"
    />
  </div>

  <div class="flex-centered text-white" v-if="showVideo1">
    <iframe
      width="1200"
      height="500"
      src="https://www.youtube.com/embed/kiFategf11Y"
      title="YouTube video player"
      frameborder="0"
      allow="web-share"
      allowfullscreen
    ></iframe>
  </div>

  <div class="flex-centered text-white" v-if="showVideo2">
    <iframe
      width="1200"
      height="500"
      src="https://www.youtube.com/embed/1uu5Y8HdTLQ"
      title="YouTube video player"
      frameborder="0"
      allow="web-share"
      allowfullscreen
    ></iframe>
  </div>

  <hr class="solid" />

  <div class="flex-left text-white">
    Emotions bars<br />
    <EmotionsBars barSize="big"></EmotionsBars><br />
    <CameraComponent />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showVideo1: false,
      showVideo2: false,
      selectedVideo: [],
      videos: [
        { name: "Clutter 1", code: "1" },
        { name: "Clutter 2", code: "2" },
      ],
    };
  },

  methods: {
    loadVideo() {
      console.log(this.selectedVideo)
      if (this.selectedVideo.code == "1") {
        this.showVideo1 = true;
        this.showVideo2 = false;
      } else {
        this.showVideo2 = true;
        this.showVideo1 = false;
      }
    },
  },
};
</script>

<style type="text/css" scoped>
.flex-centered {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.flex-left {
  margin-left: auto !important;
  margin-right: auto !important;
  display: flex;
  flex-direction: right;
  align-items: center;
}

.flex-right {
  display: flex;
  flex-direction: right;
  align-items: center;
}
.text-white {
  color: white;
}

hr.solid {
  border-top: 3px solid #fff;
}

.card {
  background: var(--surface-card);
  margin-top: 2%;
  margin-left: auto !important;
  margin-right: auto !important;
  /* border-radius: 10px; */
  width: 20%;
  height: 10px;
  margin-bottom: 1rem;
}
</style>
