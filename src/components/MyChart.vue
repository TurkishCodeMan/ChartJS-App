<template>
  <div class="container-fluid p-4">
    <h2 class="text-center text-primary p-3">Covid-19 Graphical Change</h2>
    <div class="row h-100">
      <div class="col-md-4 col-sm-6 col-lg-4" v-if="confirmed.length > 0">
        <app-line-chart
          :label="'Confirmed'"
          :chartData="confirmed"
          :bgColor="'#F7D51B'"
          :options="options"
        ></app-line-chart>
      </div>
      <div class="col-md-4 col-sm-6 col-lg-4" v-if="deaths.length > 0">
        <app-line-chart
          :label="'Deaths'"
          :chartData="deaths"
          :bgColor="'#FB0505'"
          :options="options"
        ></app-line-chart>
      </div>
      <div class="col-md-4 col-sm-6 col-lg-4" v-if="recovered.length > 0">
        <app-line-chart
          :label="'Recovered'"
          :chartData="recovered"
          :bgColor="'#40F13F'"
          :options="options"
        ></app-line-chart>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import LineChart from "./LineChart";
export default {
  name: "MyChart",
  data() {
    return {
      confirmed: [],
      deaths: [],
      recovered: [],
      options: {
        legend: {
          display: true,
          labels: {
            fontSize: 16, //point style's size is based on font style not boxed width.
            usePointStyle: true,
          },
        },
        responsive: true,
        responsiveAnimationDuration: 800,
        mainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                // callback: function (value) {
                // },
              },
            },
          ],
        },
      },
    };
  },
  components: {
    appLineChart: LineChart,
  },
  async mounted() {
    const { data } = await axios.get(
      "https://covidapi.info/api/v1/global/count"
    );
    let dataa = Object.entries(data.result);
    dataa.forEach((element) => {
      let date = moment(element[0]).format("MM/DD");
      element[1].deaths;
      element[1].recovered;

      //Charta gidecek veride bir x bir y ekseni için veri olmalı
      this.confirmed.push({ date, total: element[1].confirmed });
      this.deaths.push({ date, total: element[1].deaths });
      this.recovered.push({ date, total: element[1].recovered });
    });
  },
};
</script>

<style scoped>
</style>