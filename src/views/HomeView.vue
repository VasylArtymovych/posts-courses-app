<script setup lang="ts">
import { ref } from "vue";

const videoIds = ref([
  "zMoHZkQ4c3o",
  "ZW_FzHK_PTc",
  "pGbIOC83-So",
  "NcBjx_eyvxc",
  "KwwHtnDhCyY",
  "2B6q4ZF-WBs",
]);

const onVideoClick = (e: Event) => {
  const link = (e.currentTarget as HTMLDivElement).querySelector(
    ".video__link"
  );
  const button = (e.currentTarget as HTMLDivElement).querySelector(
    ".video__button"
  );
  const media: HTMLImageElement = (
    e.currentTarget as HTMLDivElement
  ).querySelector(".video__media")!;

  const id = parsMediaUrl(media);
  const iframe = createIframe(id);
  link && link.removeAttribute("href");
  link && link.remove();
  button && button.remove();
  (e.currentTarget as HTMLDivElement).appendChild(iframe);
};

const createIframe = (id: string): HTMLIFrameElement => {
  const iframe = document.createElement("iframe");
  iframe.setAttribute("allowfullscreen", "");
  iframe.setAttribute("src", generateUrl(id));
  iframe.setAttribute("id", "media");
  // iframe.classList.add("video__media");
  iframe.style.position = "absolute";
  iframe.style.top = "0";
  iframe.style.left = "0";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";

  return iframe;
};

const parsMediaUrl = (media: HTMLImageElement) => {
  let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)/i;
  const url = media.src;
  let match = url.match(regexp)!;

  return match[1];
};

const generateUrl = (id: string) => {
  let query = "?rel=0&showinfo=0&autoplay=1";

  return "https://www.youtube.com/embed/" + id + query;
};
</script>

<template>
  <div class="home">
    <div v-for="id in videoIds" :key="id" @click="onVideoClick" class="video">
      <a :href="'https://www.youtube.com/embed/' + id" class="video__link">
        <picture>
          <source
            :srcset="
              'https://i.ytimg.com/vi_webp/' + id + '/maxresdefault.webp'
            "
            type="image/webp"
          />
          <img
            :src="'https://i.ytimg.com/vi/' + id + '/maxresdefault.jpg'"
            alt=""
            class="video__media"
          />
        </picture>
      </a>
      <!-- <button class="video__button">
        <svg viewBox="0 0 68 48" width="100%" height="100%">
          <path
            d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
            class="video__button-shape"
          ></path>
          <path d="M 45,24 27,14 27,34" class="video__button-icon"></path>
        </svg>
      </button> -->
    </div>
  </div>
</template>

<style scoped>
.home {
  min-height: 100%;
  padding: 60px 20px 20px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

.video {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /** makes video 16:9 */
  background-color: #000000;
}
.video__link {
}
.video__media {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}
#media {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}
/* .video__button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 68px;
  height: 48px;
  background-color: transparent;
  border: none;
  outline: none;
}
.video__button-shape {
  fill: #212121;
  opacity: 0.8;
}
.video:hover .video__button-shape,
.video__button:focus .video__button-shape {
  fill: #ff0000;
  opacity: 1;
}
.video__button-icon {
  fill: #ffffff;
} */

@media (min-width: 768px) {
  .home {
    min-height: 100%;
    padding: 80px 20px 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
}
</style>

<!-- <script lang="ts">
import { defineComponent } from "vue";
import AuthForm from "@/components/AuthForm.vue";
import MainHeader from "@/components/Header/MainHeader.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    MainHeader,
    AuthForm,
  },

  setup() {
    return {};
  },
});
</script> -->

//https://www.youtube.com/embed/zMoHZkQ4c3o
