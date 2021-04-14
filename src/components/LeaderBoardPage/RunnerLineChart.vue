<template>
  <div id="chart">
    <ApexCharts type="line" :height="height" :options="chartOptions" :series="series"></ApexCharts>
  </div>
</template>

<script>
import ApexCharts from "vue-apexcharts";

export default {
  name: "RunnerLineChart",
  components: {ApexCharts},
  props: [
    'height',
  ],

  data: () => ({
    series: [{
      name: "Km",
      data: new Array(5).fill(undefined).map(() => Math.floor(Math.random() * 10) )
    }],
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
        curve: 'smooth'
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
          show: false
        }
      },
      xaxis: {
        categories: [],
        labels: {
          show: false,

        }
      },
      fill: {
        type: 'gradient',

        gradient: {
          shade: 'dark',
          gradientToColors: ['#FA4C5F'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100]
        },
      },
      markers: {
        size: 4,
        colors: ["#FFA41B"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
          size: 7,
        }
      },

    },


  }),
}
</script>

<style scoped>
.apexcharts-menu-icon {
  display: none;
}
</style>
