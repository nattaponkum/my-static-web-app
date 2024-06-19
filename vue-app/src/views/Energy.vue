<template>
  <div>
    <base-header type="gradient-egat" class="pb-6 pb-8 pt-5 pt-md-8">
      <!-- Card stats -->
    </base-header>

    <!--Charts-->
    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-xl-12 mb-5 mb-xl-0">
          <card type="default" header-classes="bg-transparent">
            <div slot="header" class="row align-items-center">
              <div class="col">
                <!-- <h6 class="text-light text-uppercase ls-1 mb-1">
                  Power Generation
                </h6> -->
                <h5 class="h3 text-white mb-0">Signal(s) by time</h5>
              </div>
            </div>

            <line-chart
              :height="350"
              ref="bigChart"
              :chart-data="bigLineChart.chartData"
              :extra-options="bigLineChart.extraOptions"
            >
            </line-chart>
            <div class="col">
              <ul class="nav nav-pills justify-content-end">
                <li class="nav-item mr-2 mr-md-0">
                  <!-- <a
                    class="nav-link py-2 px-3"
                    href="#"
                    :class="{ active: bigLineChart.activeIndex === 0 }"
                    @click.prevent="initBigChart(0)"
                  >
                    <span class="d-none d-md-block">Month</span>
                    <span class="d-md-none">M</span>
                  </a> -->
                </li>
                <li class="nav-item">
                  <!-- <a
                    class="nav-link py-2 px-3"
                    href="#"
                    :class="{ active: bigLineChart.activeIndex === 1 }"
                    @click.prevent="initBigChart(1)"
                  >
                    <span class="d-none d-md-block">Week</span>
                    <span class="d-md-none">W</span>
                  </a> -->
                </li>
              </ul>
            </div>
          </card>
        </div>
      </div>
      <!-- End charts-->

      <!--Tables-->
      <div class="row">
        <div class="col-xl-12 mb-5 mb-xl-0">
          <!-- <pv-devices-table></pv-devices-table> -->
          Date
          <div class="col-xl-3 mb-1 mb-xl-3">
            <base-input addon-left-icon="ni ni-calendar-grid-58">
              <flat-picker
                slot-scope="{ focus, blur }"
                @on-open="focus"
                @on-close="blur"
                :config="{ allowInput: true }"
                class="form-control datepicker"
                v-model="date"
                @on-change="refreshBigChart()"
              >
              </flat-picker>
            </base-input>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12 mb-5 mb-xl-0">
          Signal Criteria
          <!-- <social-traffic-table></social-traffic-table> -->
          <div class="container">
            <div class="row">
              <div class="col-sm">
                <base-checkbox
                  class="mb-3"
                  v-model="signal.Vpv1"
                  @input="initBigChart()"
                  >Vpv1</base-checkbox
                >
              </div>
              <div class="col-sm">
                <base-checkbox
                  class="mb-3"
                  v-model="signal.Ipv1"
                  @input="initBigChart()"
                  >Ipv1</base-checkbox
                >
              </div>
              <div class="col-sm">
                <base-checkbox
                  class="mb-3"
                  v-model="signal.Ppv1"
                  @input="initBigChart()"
                  >Ppv1</base-checkbox
                >
              </div>
            </div>
            <div class="row">
              <div class="col-sm">
                <base-checkbox
                  class="mb-3"
                  v-model="signal.Vpv2"
                  @input="initBigChart()"
                  >Vpv2</base-checkbox
                >
              </div>
              <div class="col-sm">
                <base-checkbox
                  class="mb-3"
                  v-model="signal.Ipv2"
                  @input="initBigChart()"
                  >Ipv2</base-checkbox
                >
              </div>
              <div class="col-sm">
                <base-checkbox
                  class="mb-3"
                  v-model="signal.Ppv2"
                  @input="initBigChart()"
                  >Ppv2</base-checkbox
                >
              </div>
            </div>
            <div class="row">
              <div class="col-sm">
                <base-checkbox
                  class="mb-3"
                  v-model="signal.Vac"
                  @input="initBigChart()"
                  >Vac</base-checkbox
                >
              </div>
              <div class="col-sm">
                <base-checkbox
                  class="mb-3"
                  v-model="signal.Iac"
                  @input="initBigChart()"
                  >Iac</base-checkbox
                >
              </div>
              <div class="col-sm">
                <base-checkbox
                  class="mb-3"
                  v-model="signal.Pac"
                  @input="initBigChart()"
                  >Pac</base-checkbox
                >
              </div>
            </div>
            <div class="row">
              <div class="col-sm">
                <base-checkbox
                  class="mb-3"
                  v-model="signal.Temperature"
                  @input="initBigChart()"
                  >Temperature</base-checkbox
                >
              </div>
              <div class="col-sm"></div>
              <div class="col-sm"></div>
            </div>
          </div>
        </div>
      </div>
      <!--End tables-->
    </div>
  </div>
</template>
<script>
// Charts
import * as chartConfigs from "@/components/Charts/config";
import LineChart from "@/components/Charts/LineChart";
// import BarChart from "@/components/Charts/BarChart";
import PVService from "@/services/PVService.js";

// Tables
// import SocialTrafficTable from './Dashboard/SocialTrafficTable';
// import PVDevicesTable from "./Dashboard/PageVisitsTable";
import moment from "moment";
import flatPicker from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

function getPVLabelList(dataSet) {
  return dataSet.map((x) => x.substring(x.length - 8, x.length));
}

function getColumn(dataSet, propertyName) {
  return dataSet.map((x) => x[propertyName]);
}

function filterDataset(srcDataset, filterObj) {
  console.log(srcDataset);
  console.log(filterObj);
  var selectedBigLineChartDatasets = [];
  for (var i = 0; i < srcDataset.length; i++) {
    switch (srcDataset[i].label) {
      case "Vpv1":
        if (filterObj.Vpv1) {
          selectedBigLineChartDatasets.push(srcDataset[i]);
        }
        break;
      case "Ipv1":
        if (filterObj.Ipv1) {
          selectedBigLineChartDatasets.push(srcDataset[i]);
        }
        break;
      case "Ppv1":
        if (filterObj.Ppv1) {
          selectedBigLineChartDatasets.push(srcDataset[i]);
        }
        break;
      case "Vpv2":
        if (filterObj.Vpv2) {
          selectedBigLineChartDatasets.push(srcDataset[i]);
        }
        break;
      case "Ipv2":
        if (filterObj.Ipv2) {
          selectedBigLineChartDatasets.push(srcDataset[i]);
        }
        break;
      case "Ppv2":
        if (filterObj.Ppv2) {
          selectedBigLineChartDatasets.push(srcDataset[i]);
        }
        break;
      case "Vac":
        if (filterObj.Vac) {
          selectedBigLineChartDatasets.push(srcDataset[i]);
        }
        break;
      case "Iac":
        if (filterObj.Iac) {
          selectedBigLineChartDatasets.push(srcDataset[i]);
        }
        break;
      case "Pac":
        if (filterObj.Pac) {
          selectedBigLineChartDatasets.push(srcDataset[i]);
        }
        break;
      case "Temperature":
        if (filterObj.Temperature) {
          selectedBigLineChartDatasets.push(srcDataset[i]);
        }
        break;
    }
  }
  return selectedBigLineChartDatasets;
}

export default {
  components: {
    // PVDevicesTable,
    flatPicker,
    LineChart,
    // BarChart,
    // PageVisitsTable,
    // SocialTrafficTable,
  },
  data() {
    return {
      pv: {
        Alias: "",
        Time: "",
        Status: "",
        Vpv1: 0.0,
        Ipv1: 0.0,
        Ppv1: 0.0,
        Vpv2: 0.0,
        Ipv2: 0.0,
        Ppv2: 0.0,
        Vac: 0.0,
        Iac: 0.0,
        Fac: 0.0,
        Pac: 0.0,
        PacR: 0.0,
        Temperature: 0.0,
        Eac_today: 0.0,
        Eac_total: 0.0,
        T_total: 0.0,
        IPM_Temperature: 0.0,
        P_BUS_Voltage: 0.0,
        Power_Factor: 0.0,
        Epv1_today: 0.0,
        Epv1_total: 0.0,
        Epv2_total: 0.0,
        Epv_total: 0.0,
      },
      PacMonthTotal: 0,
      PacLastMonthTotal: 0,
      PacDiffMonthTotal: 0,

      PacTodayTotal: 0,
      PacYesterdayTotal: 0,
      PacDiffTodayTotal: 0,

      PacUnitCost: 5,
      bigLineChart: {
        // allData: [
        //   [0, 10, 30, 15, 40, 20],
        //   [0, 20, 5, 25, 10, 30],
        //   [0, 25, 15, 35, 15, 35],
        // ],
        // allLabels: [
        //   ["6am", "10am", "12am", "2pm", "4pm", "6pm"]
        // ],
        allData: [
          [], //Vpv1
          [], //Ipv1
          [], //Ppv1
          [], //Vpv2
          [], //Ipv2
          [], //Ppv2
          [], //Vac
          [], //Iac
          [], //Pac
          [], //Temperature
        ],
        allLabels: [],
        activeIndex: 1,
        chartData: {
          datasets: [],
          labels: [],
        },
        extraOptions: chartConfigs.redChartOptions, //blueChartOptions
      },
      date: "",
      signal: {
        Vpv1: true,
        Ipv1: true,
        Ppv1: true,
        Vpv2: false,
        Ipv2: false,
        Ppv2: false,
        Vac: false,
        Iac: false,
        Pac: false,
        Temperature: false,
      },
    };
  },
  methods: {
    async getAllSignalByDate(strDate) {
      // call backend for data
      console.log(strDate);
      this.pv = (await PVService.showByDate(strDate)).data;

      // get pv by date for bigLineChart
      this.bigLineChart.allData[0] = getColumn(this.pv, "Vpv1");
      this.bigLineChart.allData[1] = getColumn(this.pv, "Ipv1");
      this.bigLineChart.allData[2] = getColumn(this.pv, "Ppv1");
      this.bigLineChart.allData[3] = getColumn(this.pv, "Vpv2");
      this.bigLineChart.allData[4] = getColumn(this.pv, "Ipv2");
      this.bigLineChart.allData[5] = getColumn(this.pv, "Ppv2");
      this.bigLineChart.allData[6] = getColumn(this.pv, "Vac");
      this.bigLineChart.allData[7] = getColumn(this.pv, "Iac");
      this.bigLineChart.allData[8] = getColumn(this.pv, "Pac");
      this.bigLineChart.allData[9] = getColumn(this.pv, "Temperature");

      this.bigLineChart.allLabels = getPVLabelList(getColumn(this.pv, "Time"));
    },
    async refreshBigChart() {
      // console.log("call refreshBigChart()");
      // get pv by date for bigLineChart
      // var plotDate = moment(this.date, "YYYY-MM-DD", true);
      // var strDate = plotDate.format("YYYY-MM-DD");

      await this.getAllSignalByDate(this.date);

      this.initBigChart();
    },

    initBigChart() {
      // console.log("call initBigChart()");
      let bigLineChartData = {
        datasets: [
          {
            label: "Vpv1",
            data: this.bigLineChart.allData[0],
            borderColor: "green",
            pointStyle: "circle",
            pointRadius: 3,
          },
          {
            label: "Ipv1",
            data: this.bigLineChart.allData[1],
            borderColor: "green",
            pointStyle: "cross",
            pointRadius: 3,
            // backgroundColor: "red",
          },
          {
            label: "Ppv1",
            data: this.bigLineChart.allData[2],
            borderColor: "green",
            pointStyle: "triangle",
            pointRadius: 3,
            // backgroundColor: "blue",
          },
          {
            label: "Vpv2",
            data: this.bigLineChart.allData[3],
            borderColor: "red",
            pointStyle: "circle",
            pointRadius: 3,
          },
          {
            label: "Ipv2",
            data: this.bigLineChart.allData[4],
            borderColor: "red",
            pointStyle: "triangle",
            pointRadius: 3,
          },
          {
            label: "Ppv2",
            data: this.bigLineChart.allData[5],
            borderColor: "red",
            pointStyle: "cross",
            pointRadius: 3,
          },
          {
            label: "Vac",
            data: this.bigLineChart.allData[6],
            borderColor: "blue",
            pointStyle: "circle",
            pointRadius: 3,
          },
          {
            label: "Iac",
            data: this.bigLineChart.allData[7],
            borderColor: "blue",
            pointStyle: "cross",
            pointRadius: 3,
          },
          {
            label: "Pac",
            data: this.bigLineChart.allData[8],
            borderColor: "blue",
            pointStyle: "triangle",
            pointRadius: 3,
          },
          {
            label: "Temperature",
            data: this.bigLineChart.allData[9],
            borderColor: "yellow",
            pointStyle: "star",
            pointRadius: 3,
          },
        ],
        labels: this.bigLineChart.allLabels,
      };
      // filter dataset by checkbox
      bigLineChartData.datasets = filterDataset(
        bigLineChartData.datasets,
        this.signal
      );

      this.bigLineChart.chartData = bigLineChartData;
    },
  },
  watch: {
    date: function () {
      this.refreshBigChart();
    },
  },
  async mounted() {
    // this.initBigChart();

    this.date = "2020-09-25";
    //var plotDate = moment(this.date, "YYYY-MM-DD", true);
    var plotDate = moment();
    var month = plotDate.get("month", "M") + 1;
    var year = plotDate.get("year", "YYYY");
    // var yesterday = plotDate.clone().subtract("1", "day");
    // var lastMonth = plotDate.clone().subtract("1", "month").get("month", "M") + 1;

    var strDate = plotDate.format("YYYY-MM-DD");
    // var strYesterday = yesterday.format("YYYY-MM-DD");
    // var strMonth = String(month);
    // var strLastMonth = String(lastMonth);
    var strYear = String(year);

    console.log("signal =" + this.signal.Vpv1);
    console.log("strDate =" + strDate);
    console.log("month =" + month);
    // console.log("strYesterday =" + strYesterday);
    // console.log("strLastMonth =" + strLastMonth);
    console.log("strYear =" + strYear);

    this.getAllSignalByDate(this.date);

    this.initBigChart();
  },
};
</script>
<style></style>
