<script>
import { Line } from "vue-chartjs";
export default {
  extends: Line,
  props: {
    label: {
      type: String,
    },
    chartData: {
      type: Array,
    },
    options: {
      type: Object,
    },
    bgColor: {
      type: String,
    },
  },

  mounted() {
    const xLabels = this.chartData.map((d) => d.date);
    const yLabels = this.chartData.map((d) => d.total);

    this.renderChart(
      {
        labels: xLabels,
        datasets: [
          {
            label: this.label,
            backgroundColor: this.bgColor,
            fill: false,
            data: yLabels,
            borderColor: this.bgColor,
          },
        ],
      },
      this.options
    );
  },
};
</script>

<style>
</style>