import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/table/list',
    method: 'get',
    params
  })
}
// 前五項
// data: {
//   items:[
//     {
//       author: "name",
//       display_time: "2000-11-02 13:12:12",
//       id: "640000200609294332",
//       pageviews: 1543,
//       status: "draft",
//       title: "Isshz bwyih qovig olpnysigx sdbms usrmyz qkhvvchn otyhyzxjx romvn kah fqid."
//     },
//     {
//       author: "name",
//       display_time: "1982-06-17 20:16:26",
//       id: "130000199012157380",
//       pageviews: 1542,
//       status: "published",
//       title: "Oxhg ujnm wtptvfik cpxvl thjjnhrx mxkp rulg kev wnamrjp esdwq iugfegz qinwklg."
//     },
//     {
//       author: "name",
//       display_time: "1976-12-06 23:06:27",
//       id: "520000201602048056",
//       pageviews: 3891,
//       status: "draft",
//       title: "Oxhg ujnm wtptvfik cpxvl thjjnhrx mxkp rulg kev wnamrjp esdwq iugfegz qinwklg."
//     },
//     {
//       author: "name",
//       display_time: "2008-08-18 11:56:58",
//       id: "370000197902188379",
//       pageviews: 1431,
//       status: "published",
//       title: "Cnogwb uipt josjec ciyb zsjrymoxh jtklspoh ojpbytr iojpbsgkhl citvumrd lmxob fpjbm mbpehxqbdo."
//     },
//     {
//       author: "name",
//       display_time: "2003-10-26 08:46:59",
//       id: "61000020080829783X",
//       pageviews: 3835,
//       status: "published",
//       title: "Idxph pjkhwo itlrmpick klpin nrqpf oxeug nxp dspg cvhcdbyrp nojty voaqljco xiw awnlpjimdq muyyyxgix."
//     }
//   ],
//   total: 30
// }
//
