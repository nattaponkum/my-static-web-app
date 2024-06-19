<template>
  <div>
    <base-header type="gradient-egat" class="pb-6 pb-8 pt-5 pt-md-8">
      <!-- Card stats 1st row-->
      <div class="row">
        <div class="col-xl-3 col-lg-6">
          <stats-card
            
            type="gradient-info"
            
            icon="ni ni-money-coins"
            class="mb-4 mb-xl-0"
          >

            <!-- Card body -->
            <div class="row">
              <div class="col">
                <h5 class="card-title text-uppercase text-muted mb-0">
                  Serial number
                </h5>
                <span class="h4 font-weight-bold mb-0">{{ 
                  
                  "xxxx-1111-2023"
                }}</span>
              </div>
            </div>
          </stats-card>
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            
            type="gradient-red"
            icon="ni ni-bulb-61"
            class="mb-4 mb-xl-0"
          >
            <!-- Card body -->
            <div class="row">
              <div class="col">
                <h5 class="card-title text-uppercase text-muted mb-0">
                  Battery Operation Status
                </h5>
                <span class="h4 font-weight-bold mb-0">{{ 
                 "Operating"
                }}</span>
              </div>
            </div>
          </stats-card>
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            
            type="gradient-orange"
            
            icon="ni ni-bulb-61"
            class="mb-4 mb-xl-0"
          >

            <!-- Card body -->
            <div class="row">
              <div class="col">
                <h5 class="card-title text-uppercase text-muted mb-0">
                  Charge/discharge mode
                </h5>
                <span class="h5 font-weight-bold mb-0">{{ 
                  "Maximum self-consumption"
                }}</span>
              </div>
            </div>
          </stats-card>
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            
            type="gradient-green"
            icon="ni ni-money-coins"
            class="mb-4 mb-xl-0"
          >


            <!-- Card body -->
            <div class="row">
              <div class="col">
                <h5 class="card-title text-uppercase text-muted mb-0">
                  Rated capacity
                </h5>
                <span class="h4 font-weight-bold mb-0">{{ 
                  "10,000 kWh"
                }}</span>
              </div>
            </div>
          </stats-card>
        </div>
        
      </div>

      <br>
      <!-- 2nd row -->
      <div class="row">
        <div class="col-xl-3 col-lg-6">
          <stats-card
            
            type="gradient-info"
            
            icon="ni ni-money-coins"
            class="mb-4 mb-xl-0"
          >

            <!-- Card body -->
            <div class="row">
              <div class="col">
                <h5 class="card-title text-uppercase text-muted mb-0">
                  Working Status
                </h5>
                <span class="h4 font-weight-bold mb-0">{{ 
                  "Running"
                }}</span>
              </div>
            </div>
            <template slot="footer">
              <div v-if="this.PacLastMonthTotal > 0">
                <div v-if="this.PacDiffMonthTotal > 0">
                  <span class="text-success mr-2">
                    <i class="fa fa-arrow-up"></i
                    >{{
                        
                        (
                          (this.PacDiffMonthTotal / this.PacLastMonthTotal) *
                          100
                        ).toFixed(2)
                        
                    }}%
                  </span>
                  <span class="text-nowrap">Since Last Month</span>
                </div>
                <div v-else>
                  <span class="text-danger mr-2">
                    <i class="fa fa-arrow-down"></i
                    >{{
                        (this.PacLastMonthTotal) 
                    }}%
                  </span>
                  <span class="text-nowrap">Since Last Month</span>
                </div>
              </div>
            </template>


            
          </stats-card>
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            
            type="gradient-red"
            icon="ni ni-bulb-61"
            class="mb-4 mb-xl-0"
          >
            <!-- Card body -->
            <div class="row">
              <div class="col">
                <h5 class="card-title text-uppercase text-muted mb-0">
                  SOC
                </h5>
                <span class="h4 font-weight-bold mb-0">{{ 
                  numberWithCommas(87.45)
                }}%</span>
              </div>
            </div>
           
          </stats-card>
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            
            type="gradient-orange"
            
            icon="ni ni-bulb-61"
            class="mb-4 mb-xl-0"
          >

            <!-- Card body -->
            <div class="row">
              <div class="col">
                <h5 class="card-title text-uppercase text-muted mb-0">
                 Charge/discharge power
                </h5>
                <span class="h5 font-weight-bold mb-0">{{ 
                  numberWithCommas(0.043)
                }}kWh</span>
              </div>
            </div>
            
          </stats-card>
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            
            type="gradient-green"
            icon="ni ni-money-coins"
            class="mb-4 mb-xl-0"
          >


            <!-- Card body -->
            <div class="row">
              <div class="col">
                <h5 class="card-title text-uppercase text-muted mb-0">
                  Internal temperature
                </h5>
                <span class="h4 font-weight-bold mb-0">{{ 
                  numberWithCommas(44.9)
                }}°C</span>
              </div>
            </div>
               
          </stats-card>
        </div>
        
      </div>
      <br>
      <!-- 3rd row -->
      <div class="row">
        <div class="col-xl-3 col-lg-6">
          <stats-card
            
            type="gradient-info"
            
            icon="ni ni-money-coins"
            class="mb-4 mb-xl-0"
          >

            <!-- Card body -->
            <div class="row">
              <div class="col">
                <h5 class="card-title text-uppercase text-muted mb-0">
                  Daily discharge energy
                </h5>
                <span class="h4 font-weight-bold mb-0">{{ 
                  numberWithCommas(1.24)
                }}kWh</span>
              </div>
            </div>
            
          </stats-card>
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            
            type="gradient-red"
            icon="ni ni-bulb-61"
            class="mb-4 mb-xl-0"
          >
            <!-- Card body -->
            <div class="row">
              <div class="col">
                <h5 class="card-title text-uppercase text-muted mb-0">
                  Total discharge energy
                </h5>
                <span class="h4 font-weight-bold mb-0">{{ 
                  numberWithCommas(166.371)
                }}kWh</span>
              </div>
            </div>
           
          </stats-card>
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            
            type="gradient-orange"
            
            icon="ni ni-bulb-61"
            class="mb-4 mb-xl-0"
          >

            <!-- Card body -->
            <div class="row">
              <div class="col">
                <h5 class="card-title text-uppercase text-muted mb-0">
                 Bus voltage
                </h5>
                <span class="h5 font-weight-bold mb-0">{{ 
                  numberWithCommas(492.1)
                }}V</span>
              </div>
            </div>
            
          </stats-card>
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            
            type="gradient-green"
            icon="ni ni-money-coins"
            class="mb-4 mb-xl-0"
          >


            <!-- Card body -->
            <div class="row">
              <div class="col">
                <h5 class="card-title text-uppercase text-muted mb-0">
                  Bus current
                </h5>
                <span class="h4 font-weight-bold mb-0">{{ 
                  numberWithCommas(0.1)
                }}A</span>
              </div>
            </div>
               
          </stats-card>
        </div>
        
      </div>

    </base-header>

    <!--Charts-->
    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-xl-10 mb-10 mb-xl-10">
          <card type="default" header-classes="bg-transparent">
            <div slot="header" class="row align-items-center">
              <div class="col">
                <h6 class="text-light text-uppercase ls-1 mb-1">
                  Battery power
                </h6>
                <h5 class="h3 text-white mb-0">Charge/Discharge Power by time</h5>
              </div>
            </div>
            <line-chart
              :height="350"
              ref="bigChart"
              :chart-data="bigLineChart.chartData"
              :extra-options="bigLineChart.extraOptions"
            ></line-chart>
          </card>
        </div>

        <!-- <div class="col-xl-5">
          <card header-classes="bg-transparent">
            <div slot="header" class="row align-items-center">
              <div class="col">
                <h6 class="text-uppercase text-muted ls-1 mb-1">
                  Power Generation
                </h6>
                <h5 class="h3 mb-0">Generation History</h5>
              </div>
              <div class="col">
                <ul class="nav nav-pills justify-content-end">
                  <li class="nav-item mr-2 mr-md-0">
                    <a
                      class="nav-link py-2 px-3"
                      href="#"
                      :class="{ active: bigLineChart.activeIndex === 0 }"
                      @click.prevent="initBigChart(0)"
                    >
                      <span class="d-none d-md-block">Month</span>
                      <span class="d-md-none">M</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link py-2 px-3"
                      href="#"
                      :class="{ active: bigLineChart.activeIndex === 1 }"
                      @click.prevent="initBigChart(1)"
                    >
                      <span class="d-none d-md-block">Year</span>
                      <span class="d-md-none">Y</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <bar-chart
              :height="350"
              ref="barChart"
              :chart-data="redBarChart.chartData"
            ></bar-chart>
          </card>
        </div> -->
      </div>
      <!-- End charts-->

      <!--Tables-->
      <!-- <div class="row mt-5">
        <div class="col-xl-12 mb-5 mb-xl-0"> -->
          <!-- <pv-devices-table></pv-devices-table> -->
          <!-- temporary remove PV station table -->
          <!-- <page-visits-table></page-visits-table> -->
        <!-- </div>
      </div> -->
      <div class="row mt-5">
        <div class="col-xl-12">
          <!-- <social-traffic-table></social-traffic-table> -->
        </div>
      </div>
      <!--End tables-->

      <!-- Stat cards -->
      <!-- <div class="row">
        <div class="col-xl-6 col-lg-6">
          <stats-card
            title="CO2 Reduction "
            type="gradient-blue"
            sub-title="2,356 KgCO2e"
            icon="ni ni-cloud-download-95"
            class="mb-4 mb-xl-0"
          >
            <template slot="footer">
              <span class="text-success mr-2">
                <i class="fa fa-arrow-up"></i> 3.48%
              </span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>
        <div class="col-xl-4 col-lg-4">
          <stats-card
            title="Reducing Deforestation"
            type="gradient-green"
            sub-title="350,897"
            icon="ni ni-bulb-61"
            class="mb-4 mb-xl-0"
          >
            <template slot="footer">
              <span class="text-success mr-2">
                <i class="fa fa-arrow-up"></i> 12.18%
              </span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>
        <div class="col-xl-4 col-lg-4">
          <stats-card
            title="Standard Coal Saved"
            type="gradient-red"
            sub-title="924"
            icon="ni ni-basket"
            class="mb-4 mb-xl-0"
          >
            <template slot="footer">
              <span class="text-danger mr-2">
                <i class="fa fa-arrow-down"></i> 5.72%
              </span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>
      </div> -->
      <!-- End stat cards -->
    </div>
  </div>
</template>
<script>
// Charts
import * as chartConfigs from "@/components/Charts/config";
import LineChart from "@/components/Charts/LineChart";
// import BarChart from "@/components/Charts/BarChart";
import BatteryService from "@/services/BatteryService.js";

// read battery data from text file while in mockup state
// import * as readline from 'node:readline/promises';
const fs = require("fs");
const readline = require("readline");

function getData(){
  const streamBattery = fs.createReadStream("./charge-discharge-power.csv");
  const reader = readline.createInterface({ input: streamBattery });
  let data = [];
  reader.on("line", row => {
    // 👇 split a row string into an array
    // then push into the data array
    data.push(row.split(","));
  });

  reader.on("close", () => {
    // 👇 reached the end of file
    console.log("allData:"+this.bigLineChart.allData)
  });
  return data;
}
function getLabels(){
  const streamTimeBattery = fs.createReadStream("./time-battery.csv");
  const reader = readline.createInterface({ input: streamTimeBattery });
  let data = [];
  reader.on("line", row => {
    // 👇 split a row string into an array
    // then push into the data array
    data.push(row.split(","));
  });

  reader.on("close", () => {
    // 👇 reached the end of file
    console.log("allLabels:"+data)
  });
  return data;
}

    

// Tables
// import SocialTrafficTable from './Dashboard/SocialTrafficTable';
// import PageVisitsTable from './Dashboard/PageVisitsTable.vue';
// import PVDevicesTable from "./Dashboard/PVDevicesTable";

import moment from "moment";

function get2DigitNumber(digit){
  var monthNumber = digit;
  var dec = monthNumber - Math.floor(monthNumber);
  monthNumber = monthNumber - dec;
  return ("0" + monthNumber).slice(-2) + dec.toString().substr(1);
}
// comment 2 function below in mockup state
// function getPVLabelList(dataSet) {
//   return dataSet.map((x) => x.substring(x.length - 8, x.length));
// }

// function getColumn(dataSet, propertyName) {
//   return dataSet.map((x) => x[propertyName]);
// }

// async function getMonthlyDataArr(monthNumberArr){
//   var monthDataArr = [];
//   var i;
//   for (i=0;i<monthNumberArr.length;i++){
//     monthDataArr.push((await PVService.showTotalByMonth(monthNumberArr[i]).data));
//   }
//   console("monthDataArr = "+monthDataArr);
//   return monthDataArr;
// }

function getMonthNumberArr(currentMonthNumber){
  var monthArr = []
  var i, element;
  for(i=0;i<12;i++){
    if (currentMonthNumber-i <= 0) {
      element = 12 - Math.abs(currentMonthNumber-i);
    }else{
      element = currentMonthNumber-i;
    }
    monthArr.push(element)
  }
  return monthArr.reverse();
}

function getYearNumberArr(currentYearNumber){
  var yearArr = []
  var i, element;
  for(i=0;i<5;i++){
    element = currentYearNumber-i;
    yearArr.push(element)
  }
  return yearArr.reverse();
}

function getMonthLabelArr(monthArr){
  var monthLabel = []
  var i;
  for (i=0;i<12;i++){
    switch (monthArr[i]) {
      case 1:
        monthLabel.push("Jan");
        break;
      case 2:
        monthLabel.push("Feb");
        break;
      case 3:
        monthLabel.push("Mar");
        break;
      case 4:
        monthLabel.push("Apr");
        break;
      case 5:
        monthLabel.push("May");
        break;
      case 6:
        monthLabel.push("Jun");
        break;
      case 7:
        monthLabel.push("Jul");
        break;
      case 8:
        monthLabel.push("Aug");
        break;
      case 9:
        monthLabel.push("Sep");
        break;
      case 10:
        monthLabel.push("Oct");
        break;
      case 11:
        monthLabel.push("Nov");
        break;
      case 12:
        monthLabel.push("Dec");
    }
  }
  return monthLabel;
}

// function getYearlyPower(year){
//   return dataSet.map((x) => x["Pac"])
// }


export default {
  components: {
    LineChart,
    // BarChart,
    // PageVisitsTable
    // PVDevicesTable
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
        Ppv2: 0.0,
        Ppv: 0.0,
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
        // ],
        allData: [],
        // allLabels: [
        //   ["6am", "10am", "12am", "2pm", "4pm", "6pm"],
        //   ["2559", "2560", "2561", "2562", "2563"],
        // ],
        allLabels: [],
        activeIndex: 0,
        chartData: {
          datasets: [],
          labels: [],
        },
        extraOptions: chartConfigs.blueChartOptions,
      },
      redBarChart: {
        allData: [
          [0, 0, 10, 30, 15, 40, 20, 30, 40, 35, 0, 0],
          [5, 25, 10, 30, 15],
        ],
        allLabels: [
          [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          ["2559", "2560", "2561", "2562", "2563"],
        ],
        activeIndex: 0,
        chartData: {
          datasets: [],
          labels: [],
        },
      },
    };
  },
  methods: {
    numberWithCommas(x) {
      var parts = x.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      console.log(parts[0])
      return parts.join(".");
    },
    initBigChart(index) {
      let redBarChartData = {
        datasets: [
          {
            label: "Pac",
            data: this.redBarChart.allData[index],
          },
        ],
        labels: this.redBarChart.allLabels[index],
      };
      this.redBarChart.chartData = redBarChartData;
      this.redBarChart.activeIndex = index;

      let bigLineChartData = {
        datasets: [
          {
            label: "Pac",
            data: this.bigLineChart.allData,
          },
        ],
        labels: this.bigLineChart.allLabels,
      };

      this.bigLineChart.chartData = bigLineChartData;
      this.bigLineChart.activeIndex = index;

      // console.log(
      //   "Output " + this.PacTodayTotal + " " + this.PacDiffTodayTotal
      // );
    },
    initTotalCards() {
      // console.log(
      //   "initTotalCards",
      //   this.PacMonthTotal,
      //   this.PacDiffMonthTotal,
      //   this.PacTodayTotal,
      //   this.PacDiffTodayTotal,
      //   this.PacUnitCost
      // );
    },
  },
  async mounted() {
    //let date = getToday();
    // for testing
    // let date = "2020-10-21";
    // this.pv = (await PVService.show(date)).data;
    // this.bigLineChart.allData = getColumn(this.pv, "Pac");
    // this.bigLineChart.allLabels = getColumn(this.pv, "Time");
    // this.bigLineChart.allLabels = getIndexList(this.bigLineChart.allLabels);

    var today = moment("2023-02-13", "YYYY-MM-DD", true);
    // var today = moment()
    var month = today.get("month", "M") + 1;
    var year = today.get("year", "YYYY");
    var yesterday = today.clone().subtract("1", "day");
    var lastMonth = today.clone().subtract("1", "month").get("month", "M") + 1;
    var lastYear = year -1;

    var strDate = today.format("YYYY-MM-DD");
    var strYesterday = yesterday.format("YYYY-MM-DD");
    var strMonth = String(month);
    var strLastMonth = String(lastMonth);
    var strYear = String(year);
    var strLastYear = String(lastYear);

    console.log("strDate =" + strDate);
    console.log("month =" + month);
    console.log("strYesterday =" + strYesterday);
    console.log("strLastMonth =" + strLastMonth);
    console.log("strYear =" + strYear);
    console.log("strLastYear =" + strLastYear);

    // comment calling backend while in mockup state
    // // call backend for data
    // this.battery = (await BatteryService.showByDate(strDate)).data;

    // // get pv by date for bigLineChart
    // // this.bigLineChart.allData = getColumn(this.battery, "charge_discharge_power");
    // // this.bigLineChart.allLabels = getPVLabelList(getColumn(this.battery, "timestamp"));

    // read csv file while in mockup state
    this.bigLineChart.allData = getData()
    this.bigLineChart.allLabels = getLabels()
    
    
    
    // get power aggregate data
    // var thisYear = (await PVService.showTotalByYear())

    // get list of monthly power data
    var monthNumberArr = getMonthNumberArr(month);
    

    // get monthlyDataArr 
    var monthlyDataArr = [];
    var i;
    for (i=0;i<monthNumberArr.length;i++){
      
      // transform 1-digit to 2-digit number
      var formattedNumber = get2DigitNumber(monthNumberArr[i]);

      // get data from Backend
      // use last year str if month number > current month number
      console.log('monthNumberArr['+i+']='+(monthNumberArr[i]+1)+' month = '+month)
      var monthlyData = (monthNumberArr[i] <= month)?(await BatteryService.showTotalByMonth(strYear+'-'+formattedNumber)).data
                                                   : (await BatteryService.showTotalByMonth((strLastYear)+'-'+formattedNumber)).data
      console.log(strYear+'-'+formattedNumber+" = "+monthlyData)
      monthlyDataArr.push(monthlyData);

    }
   
    this.redBarChart.allData[0] = monthlyDataArr;
    this.redBarChart.allLabels[0] = getMonthLabelArr(monthNumberArr);

    // get list of last 5 yearly power data
    // get list of yearly power data
    var yearNumberArr = getYearNumberArr(year);
    console.log(yearNumberArr.length);
    // get yearlyDataArr 
    var yearlyDataArr = [];
    
    for (var j=0;j<yearNumberArr.length;j++){
      console.log("j = "+j);
      var yearlyData = (await BatteryService.showTotalByYear(yearNumberArr[j])).data; 
      yearlyDataArr.push(yearlyData);
    }
    console.log("yearlyDataArr = "+yearlyDataArr);

    this.redBarChart.allData[1] = yearlyDataArr;
    this.redBarChart.allLabels[1] = yearNumberArr;

    //get pv data for cards that represent daily Pac total number
    this.PacTodayTotal = (await BatteryService.showTotalByDate(strDate)).data;
    this.PacYesterdayTotal = (
      await BatteryService.showTotalByDate(strYesterday)
    ).data;
    this.PacDiffTodayTotal = this.PacYesterdayTotal - this.PacTodayTotal;

    // get pv data for cards that represent  monthly Pac total number
    this.PacMonthTotal = (await BatteryService.showTotalByMonth(strYear+'-'+get2DigitNumber(strMonth))).data;
    this.PacLastMonthTotal = (
      await BatteryService.showTotalByMonth(strLastMonth)
    ).data;
    this.PacDiffMonthTotal = this.PacLastMonthTotal - this.PacMonthTotal;

    // get all pv data for cards that represent total number
    //this.pv = (await PVService.index()).data;
    await this.initBigChart(0);
    await this.initTotalCards();
    console.log("mounted");
  },
};
</script>
<style></style>
