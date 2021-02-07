<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 mx-auto">
        <h3 class="text-center">Chart JS Using</h3>
        <br>
        <h5 class="text-warning text-center">World Average Celcius Change</h5>
        <br> 
        <canvas id="myChart"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Chart from "chart.js";
export default {
  data() {
    return {
      data: [],
      xs: [],
      ys: [],
    };
  },
  methods: {
    createChart() {
      var ctx = document.getElementById("myChart").getContext("2d");
      new Chart(ctx, {
        type: "line",
        data: {
          labels: this.xs, //X axis
          datasets: [
            {
              label: "Global Average Temperatures",
              data: this.ys, //y axis
              fill: false,

              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive:true,
          scales: {
            yAxes: [
              {
                ticks: {
                  callback:function(value){
                      return value+'°C'
                  }
                },
              },
            ],
          },
        },
      });
    },
  },
  async beforeMount() {
    let res = await axios.get("ZonAnn.TS+dSST.csv");

    const data = res.data;
    const table = data.split(/\n/).slice(1);
    table.forEach((row) => {
      const columns = row.split(",");
      const year = columns[0];
      this.xs.push(year);
      const temp = columns[1];
      this.ys.push(parseFloat(temp) +14);
      //console.log(year, temp);
    });

    console.log("mount");
    this.createChart();
  },
};
</script>

<style>
</style>