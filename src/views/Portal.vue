<!--
 * @Date: 2022-03-31 08:26:14
 * @LastEditors: geekwen
 * @LastEditTime: 2022-04-02 02:15:44
 * @FilePath: /cfweb-fe/src/views/Portal.vue
 * @Description: Description
-->
<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your One Orange"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>
