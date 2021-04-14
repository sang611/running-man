<template>
  <div id="distance-chart">
      <h3><b>Thống kê</b></h3>
      <a-divider/>
    <apexchart type="bar" :height="height" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import ApexCharts from "vue-apexcharts";
export default {

name: "StatisticColumnChart",
  components: {
    apexchart: ApexCharts,
  },
  props: ['height'],
  data: () => ({

    series: [{
      name: 'Run',
      data: new Array(10).fill(undefined).map(() => Math.floor(Math.random() * 200))
    }],
    chartOptions: {

      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false
        }
      },
      colors: ['#FA4C5F'],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
          borderRadius: 10,
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10'],
      },
      yaxis: {
        title: {
          text: 'km'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return  val + " km"
          }
        }
      }
    }
  })

}
</script>

<style scoped>

</style>
