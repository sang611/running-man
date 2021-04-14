<template>
  <div id="dtp-chart">
    <ApexCharts type="line" height="450" :options="chartOptions" :series="series"></ApexCharts>
  </div>
</template>

<script>

import ApexCharts from "vue-apexcharts";
let distances = new Array(50).fill(undefined).map(() => Math.floor(Math.random() * 300) + 10);
let times = new Array(50).fill(undefined).map(() => Math.floor(Math.random() * 50) + 10);
let paces = distances.map((km, index) => Math.floor(km/times[index]) );

export default {
  name: "DTPLineChart",
  components: {ApexCharts},
  data: () => ({
    series: [
      {
        name: "Distance",
        data: distances
      },
      {
        name: "Pace",
        data: paces
      },
      {
        name: "Time",
        data: times
      }
    ],
    chartOptions: {
      chart: {
        type: 'line',
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 1.5,
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      yaxis: {
        categories: [],
        labels: {
          show: true
        }
      },
      xaxis: {
        categories: [],
        labels: {
          show: true,
          formatter: function (val) {
            return val % 10 == 0 ? val : ''
          },
        },

      },


    },


  }),

  methods: {}
}
</script>

<style scoped>

</style>
