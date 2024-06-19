import Api from '@/services/Api'
export default {
    index() {
        return Api().get('Batteries')
    },
    showByDate(date) {
        return Api().get('BatteryDATE/' + date)
    },
    // showTotalByDate(date) {
    //     return Api().get('PVTOTALDATE/' + date)
    // },
    // showTotalByMonth(month) {
    //     return Api().get('PVTOTALMONTH/' + month)
    // },
    // showTotalByYear(year) {
    //     return Api().get('PVTOTALYEAR/' + year)
    // },
    post(PV) {
        return Api().post('Battery', PV)
    }
}