<script setup lang="ts">
import type Tag from '~~/types/Tag';

const config = useAppConfig();
const socials = computed(() =>
  config.footer.socials ? Object.values(config.footer.socials).filter(i => i?.icon && i?.link) : []
);

const navigation = [
  {
    title: "Directory",
    links: [{ title: "Submit", link: "/submit" }, { title: "Advertise", link: "/advertise" }],
  },
  {
    title: "Legal",
    links: [
      //{ title: "Privacy Policy", link: "/legal/terms-of-service" },
      { title: "Privacy Policy", link: "/legal/privacy-policy" },
    ],
  },
];
</script>

<template>
  <footer class="border-t dark:border-gray-600 font-display" aria-labelledby="footer-heading">
    <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8">
          <AppLogo />
          <div class="flex space-x-6">
            <a
              v-for="(item, key) in socials"
              :key="item?.link"
              :href="item?.link"
              class="text-gray-400 hover:text-gray-500"
            >
              <span class="sr-only">{{ key }}</span>
              <Icon :name="item.icon!" class="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div v-for="navItem in navigation" :key="navItem.title" class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                {{ navItem.title }}
              </h3>
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in navItem.links" :key="item.title">
                  <NuxtLink
                    :to="item.link"
                    class="text-sm leading-6 text-gray-600 dark:text-gray-300 hover:dark:text-gray-400 hover:text-gray-900"
                  >
                    {{ item.title }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-16 border-t border-gray-900/10 dark:border-gray-600 pt-8 sm:mt-20 lg:mt-24">
        <p class="text-xs leading-5 text-gray-500">
          &copy; {{ new Date().getFullYear() }} {{ config.general.title }} All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
