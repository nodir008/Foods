<script setup>
import InstagramIcon from "@/assets/images/InstagramIcon.vue";
import TelegramIcon from "@/assets/images/TelegramIcon.vue";
import PhoneIcon from "@/assets/images/PhoneIcon.vue";

import { carusel1, carusel2, carusel3, carusel4 } from "../../helpers/api/images";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";

import "swiper/css";

// const photos = ["food1.jpg", "food2.jpg", "food3.jpg", "food4.jpg"];
const photos = [carusel1, carusel2, carusel3, carusel4];
</script>

<template>
  <div class="contact">
    <Swiper class="slide"
        :modules="[Autoplay]"
        :grabCursor="true"
        :loop="true"
        :autoplay="true"
      >
        <SwiperSlide v-for="(photo, i) in photos" :key="i">
          <img class="slide__img" :src="photo" alt="" />   
        </SwiperSlide>
        <div class="contact__top">
      
      <h1 class="contact-title">Kontaktlar</h1>
      <div class="contact__links">
        <a href="https://instagram.com/_kh1kmatof__" class="contact__link">
          <span class="contact__link-decor"></span>
          <span class="contact__link-content"
            ><InstagramIcon class="contact__link-icon" />Instagramdan
            Yozish</span
          ></a
        >
        <a href="https://t.me/kh1kmatof_a" class="contact__link">
          <span class="contact__link-decor2"></span>
          <span class="contact__link-content"
            ><TelegramIcon class="contact__link-icon2" />Telegramdan
            Yozish</span
          ></a
        >
      </div>
      <button class="contact-number">
        <PhoneIcon class="contact-number-icon" />93 772 35 22
      </button>
    </div>
      </Swiper>
    <div class="container">
      <div class="contact__bottom">
        <h1 class="contact__bottom-title">IJTIMOIY TARMOQLAR</h1>
        <div class="contact__bottom-links">
          <p class="contact__bottom-text">
            Ijtimoiy tarmoqlarimizga obuna bo'ling va barcha voqealaridan
            xabardor bo'ling.
          </p>

          <div class="contact__bottom-link">
            <a class="contact__bottom-telegram" href="https://t.me/kh1kmatof_a"
              ><TelegramIcon
            /></a>
            <a
              class="contact__bottom-instagram"
              href="https://instagram.com/_kh1kmatof__"
              ><InstagramIcon
            /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
