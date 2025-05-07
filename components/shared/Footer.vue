import { NuxtImg, NuxtLink, UIcon } from '../../.nuxt/components'
<template>
  <div class="bg-primary">
    <UContainer>
      <div class="flex flex-col md:flex-row justify-between items-start text-white py-2 text-sm">
        <NuxtImg src="bahana-logo-white.svg" alt="Logo" class="w-46 md:w-64 self-center" />
        <div class="flex flex-col gap-5 p-2">
          <ULink to="#" class="underline text-white hover:text-gray-300 transition-colors font-semibold">Syarat Penggunaan</ULink>
          <ULink to="#" class="underline text-white hover:text-gray-300 transition-colors font-semibold">Kebijakan & Privasi</ULink>
          <div class="mt-5">
            <h4 class="font-semibold">Hubungi Kami:</h4>
            <p class="text-xs font-normal">
              Gedung Graha CIMB Niaga Lt 21 <br />
              Jl Jenderal Sudirman Kav 58 <br />
              Jakarta Selatan 12190
            </p>
          </div>
        </div>
        <div class="flex flex-col gap-5 p-2">
          <ULink to="#" class="underline text-white hover:text-gray-300 transition-colors font-semibold">Cybersecurity</ULink>
          <ULink to="#" class="underline text-white hover:text-gray-300 transition-colors font-semibold">Karir</ULink>
          <div class="mt-7 flex flex-col gap-4">
            <ULink to="#" class="text-white hover:text-gray-300 transition-colors text-xs font-normal flex items-center gap-2">
              <UIcon name="circum:mail" class="text-white" />
              support.bahanatcw@bahana.co.id
            </ULink>
            <ULink to="#" class="text-white hover:text-gray-300 transition-colors text-xs font-normal flex items-center gap-2">
              <UIcon name="f7:phone" class="text-white" />
              (021) 2505277
            </ULink>
          </div>
        </div>
        <div class="flex flex-col gap-5 p-2">
          <ULink to="#" class="underline text-white hover:text-gray-300 transition-colors font-semibold">FAQ</ULink>
          <ULink to="#" class="underline text-white hover:text-gray-300 transition-colors font-semibold">Prosedur Penanganan Pengaduan & Pelaporan Pelanggaran</ULink>
          <div class="mt-7 flex flex-col gap-4">
            <ULink to="#" class="text-white hover:text-gray-300 transition-colors text-xs font-normal flex items-center gap-2">
              <UIcon name="mdi:instagram" class="text-white" />
              @bahana_tcw
            </ULink>
            <div></div>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
  <div class="bg-(--bahana-darker) text-center text-xs font-normal text-white py-2">
    <span>PT Bahana TCW Investment Management berizin dan diawasi oleh Otoritas Jasa Keuangan</span>
  </div>
</template>

<script setup lang="ts"></script>
