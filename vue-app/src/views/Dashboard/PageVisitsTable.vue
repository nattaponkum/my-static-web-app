<template>
  <div class="card">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0">PV Inverter Devices</h3>
        </div>
        <div class="col text-right">
          <a href="#!" class="btn btn-sm btn-primary">See all</a>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table thead-classes="thead-light"
                  :data="tableData">
        <template slot="columns">
          <th>Device S/N</th>
          <th>Connect Status</th>
          <th>Update Time</th>
          <th>Last User</th>
          <th>Plant Name</th>
          <th>Current Power(W)</th>
          <th>Today(kWh)</th>
          <th>This Month(kWh)</th>
          <th>Total Energy(kWh)</th>
          <!-- <th>Last User</th> -->
        </template>

        <template slot-scope="{row}">
          <th scope="row">
            {{row.sn}}
          </th>
          <td>
            {{row.status}}
          </td>
          <td>
            {{row.updateDTM}}
          </td>
          <td>
            {{row.lastUser}}
          </td>
          <td>
            {{row.plantName}}
          </td>
          <td>
            {{row.power}}
          </td>
          <td>
            {{row.todaykWh}}
          </td>
          <td>
            {{row.monthkWh}}
          </td>
          <td>
            {{row.totalkWh}}
          </td>
          
         
          <!-- <td>
            <i class="fas fa-arrow-up text-success mr-3"
               :class="row.bounceRateDirection === 'up' ? 'text-success': 'text-danger'">
            </i>
            {{row.lastUser}}
          </td> -->
        </template>

      </base-table>
    </div>

  </div>
</template>
<script>
  import PVService from "@/services/PVService.js";
  export default {
    name: 'pv-devices',
    data() {
      return {
        tableData: [
          {
            sn: 'YB03490179',
            status: 'Active',
            setting: '340',
            updateDTM: '01/09/2020',
            lastUser: 'Jessica Jone',
            plantName: 'Hang Dong 5kWh',
            power:1845.7,
            todaykWh:7.7,
            monthkWh:129.3,
            totalkWh:39865
          },
          {
            sn: 'ANAD814291',
            status: 'Active',
            setting: '340',
            updateDTM: '01/09/2020',
            lastUser: 'Jessica Jone',
            plantName: 'Hang Dong 5kWh',
            power:1845.7,
            todaykWh:7.7,
            monthkWh:129.3,
            totalkWh:39865
          }
          
        ]
      }
    },
    async mounted() {
      this.tableData = await PVService.getDate
    } 
  }
</script>
<style>
</style>
