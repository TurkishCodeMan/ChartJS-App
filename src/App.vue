<template>
  <body>
    <div id="app">
      <app-chart></app-chart>
      
    </div>
  </body>
</template>

<script>

import Chart from "./components/Chart"
export default {
  name: "App",
  components:{
   
    appChart:Chart
  }
};
</script>

<style>
</style>
