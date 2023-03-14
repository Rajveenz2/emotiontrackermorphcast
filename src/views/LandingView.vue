<script setup>
import EmotionsBars from "@/components/EmotionsBars.vue";
import CameraComponent from "@/components/CameraComponent.vue";
import { onMounted, onUnmounted, ref } from "vue";
import { getAiSdkControls } from "../morphcast-ai-sdk/ai-sdk-loader";
import SelectButton from "primevue/selectbutton";
import InputText from "primevue/inputtext";
import Image from "primevue/image";
let video = "1";
let url = [];
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
  <div class="flex-centered justify-content-center">
    <Image
      src="https://www.insightzclub.com/wp-content/uploads/2019/02/logo.png"
      alt="Image"
      width="250"
      height="60"
    />
  </div>
  <div class="card flex-centered justify-content-center gap-3">
    <InputText v-model="url" placeholder="Enter URL" @change="loadUrl()" />
  </div>
  <hr class="solid" />

  <div class="card flex-centered justify-content-center">
    <SelectButton
      v-model="video"
      :options="videos"
      optionLabel="_id"
      aria-labelledby="basic"
      @click="loadVideo(video._id)"
    />
  </div>
  <div class="flex-centered text-white" v-if="showUrl">
    <iframe
      width="1200"
      height="500"
      :src="url"
      title="YouTube video player"
      frameborder="0"
      allow="web-share"
      allowfullscreen
    ></iframe>
  </div>
  <div class="flex-centered text-white" v-if="showVideo1">
    <iframe
      width="1200"
      height="500"
      src="https://www.youtube.com/embed/23Z7aFLAm38"
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
      src="https://www.youtube.com/embed/nZ_Wxj6W-QE"
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

<script type="text/javascript">
export default {
  data() {
    return {
      url: null,
      showUrl: false,
      video: "1",
      showVideo1: false,
      showVideo2: false,
      videos: [{ _id: "1" }, { _id: "2" }],
    };
  },

  methods: {
    loadVideo(v) {
      console.log(v);
      if (v == "1") {
        this.showVideo1 = true;
        this.showVideo2 = false;
        this.showUrl = false;
      } else {
        this.showVideo2 = true;
        this.showVideo1 = false;
        this.showUrl = false;
      }
    },

    loadUrl() {
      this.showUrl = true;
      this.showVideo1 = false;
      this.showVideo2 = false;
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
  background: aqua;
  margin-top: 2%;
  margin-left: auto !important;
  margin-right: auto !important;
  /* border-radius: 10px; */
  width: auto%;
  height: 10px;
  margin-bottom: 1rem;
}
</style>
