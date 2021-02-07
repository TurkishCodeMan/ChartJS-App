<template>
  <body class="">
    <div id="app">
      <app-temperature></app-temperature>
      <app-chart></app-chart>
      
    </div>
  </body>
</template>

<script>

import MyChart from "./components/MyChart";
import Chart from "./components/Chart"
export default {
  name: "App",
  components:{
   
    appChart:MyChart,
    appTemperature:Chart
  }
};
</script>

<style>
 body{
   min-height: 100vh;
   background: rgb(230, 230, 230);
 }

</style>
