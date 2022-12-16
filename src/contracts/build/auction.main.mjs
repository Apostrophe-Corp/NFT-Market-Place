// Automatically generated with Reach 0.1.12 (1f68dfdb)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (1f68dfdb)';
export const _backendVersion = 26;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Contract;
  return {
    accepted: [ctc0, ctc1, ctc2, ctc2, ctc3],
    bidSuccess: [ctc1, ctc1],
    created: [ctc1, ctc2],
    down: [ctc1, ctc1, ctc2, ctc4, ctc1],
    endSuccess: [ctc1, ctc1],
    rejected: [ctc0, ctc1, ctc2, ctc2, ctc3]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc5 = stdlib.T_Object({
    deadline: ctc2,
    description: ctc3,
    owner: ctc0,
    price: ctc2,
    title: ctc4
    });
  const ctc6 = stdlib.T_Contract;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc2, ctc2, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Struct([['id', ctc2], ['blockEnded', ctc2], ['lastBid', ctc2]]);
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc5, ctc6, ctc9],
      6: [ctc0, ctc1, ctc4, ctc0, ctc2, ctc2, ctc9, ctc2],
      7: [ctc0, ctc1, ctc6, ctc10, ctc2, ctc0, ctc2, ctc6, ctc4, ctc2, ctc11, ctc0, ctc7, ctc7, ctc2, ctc9, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function _Auctioneer_acceptSale6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Auctioneer_acceptSale6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Auctioneer_acceptSale6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc3, ctc3, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    Auctioneer_acceptSale0_428: ctc7,
    Auctioneer_rejectSale0_428: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v668, v669, v716, v739, v742, v1104, v1113, v1114] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc0, ctc1, ctc2, ctc0, ctc3, ctc3, ctc6, ctc3]);
  const v1123 = ctc.selfAddress();
  const v1125 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:182:28:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:182:28:function exp)', 'at ./src/contracts/auction.rsh:176:58:application call to "runAuctioneer_acceptSale0_428" (defined at: ./src/contracts/auction.rsh:180:21:function exp)', 'at ./src/contracts/auction.rsh:176:58:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:176:58:function exp)'],
    msg: 'in',
    who: 'Auctioneer_acceptSale'
    });
  const v1127 = stdlib.addressEq(v1123, v668);
  stdlib.assert(v1127, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/auction.rsh:183:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:182:28:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:182:28:function exp)', 'at ./src/contracts/auction.rsh:182:28:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:182:28:function exp)', 'at ./src/contracts/auction.rsh:176:58:application call to "runAuctioneer_acceptSale0_428" (defined at: ./src/contracts/auction.rsh:180:21:function exp)', 'at ./src/contracts/auction.rsh:176:58:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:176:58:function exp)'],
    msg: 'You are not the Seller',
    who: 'Auctioneer_acceptSale'
    });
  const v1131 = ['Auctioneer_acceptSale0_428', v1125];
  
  const txn1 = await (ctc.sendrecv({
    args: [v668, v669, v716, v739, v742, v1104, v1113, v1114, v1131],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:185:31:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1146], secs: v1148, time: v1147, didSend: v553, from: v1145 } = txn1;
      
      switch (v1146[0]) {
        case 'Auctioneer_acceptSale0_428': {
          const v1149 = v1146[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctioneer_acceptSale"
            });
          ;
          const v1156 = true;
          const v1157 = await txn1.getOutput('Auctioneer_acceptSale', 'v1156', ctc4, v1156);
          
          const v2914 = v1113;
          const v2915 = v1114;
          const v2916 = stdlib.le(v1147, v1104);
          const v2917 = v2916 ? false : false;
          if (v2917) {
            sim_r.isHalt = false;
            }
          else {
            const v2918 = v1113[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:204:33:application', stdlib.UInt_max, '0')];
            const v2919 = v2918[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:204:33:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v739,
              tok: v669
              });
            sim_r.txns.push({
              kind: 'from',
              to: v668,
              tok: undefined /* Nothing */
              });
            null;
            sim_r.txns.push({
              kind: 'halt',
              tok: v669
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Auctioneer_rejectSale0_428': {
          const v1171 = v1146[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc0, ctc3, ctc3, ctc6, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v1146], secs: v1148, time: v1147, didSend: v553, from: v1145 } = txn1;
  switch (v1146[0]) {
    case 'Auctioneer_acceptSale0_428': {
      const v1149 = v1146[1];
      undefined /* setApiDetails */;
      ;
      const v1156 = true;
      const v1157 = await txn1.getOutput('Auctioneer_acceptSale', 'v1156', ctc4, v1156);
      if (v553) {
        stdlib.protect(ctc9, await interact.out(v1149, v1157), {
          at: './src/contracts/auction.rsh:181:25:application',
          fs: ['at ./src/contracts/auction.rsh:181:25:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:181:25:function exp)', 'at ./src/contracts/auction.rsh:187:39:application call to "notify" (defined at: ./src/contracts/auction.rsh:186:34:function exp)', 'at ./src/contracts/auction.rsh:186:34:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:186:34:function exp)'],
          msg: 'out',
          who: 'Auctioneer_acceptSale'
          });
        }
      else {
        }
      
      const v2914 = v1113;
      const v2915 = v1114;
      const v2916 = stdlib.le(v1147, v1104);
      const v2917 = v2916 ? false : false;
      if (v2917) {
        return;
        }
      else {
        const v2918 = v1113[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:204:33:application', stdlib.UInt_max, '0')];
        const v2919 = v2918[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:204:33:application', stdlib.UInt_max, '0')];
        ;
        ;
        null;
        return;
        }
      break;
      }
    case 'Auctioneer_rejectSale0_428': {
      const v1171 = v1146[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Auctioneer_rejectSale6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Auctioneer_rejectSale6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Auctioneer_rejectSale6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc3, ctc3, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    Auctioneer_acceptSale0_428: ctc7,
    Auctioneer_rejectSale0_428: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v668, v669, v716, v739, v742, v1104, v1113, v1114] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc0, ctc1, ctc2, ctc0, ctc3, ctc3, ctc6, ctc3]);
  const v1133 = ctc.selfAddress();
  const v1135 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:193:28:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:193:28:function exp)', 'at ./src/contracts/auction.rsh:176:58:application call to "runAuctioneer_rejectSale0_428" (defined at: ./src/contracts/auction.rsh:191:21:function exp)', 'at ./src/contracts/auction.rsh:176:58:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:176:58:function exp)'],
    msg: 'in',
    who: 'Auctioneer_rejectSale'
    });
  const v1137 = stdlib.addressEq(v1133, v668);
  stdlib.assert(v1137, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/auction.rsh:194:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:193:28:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:193:28:function exp)', 'at ./src/contracts/auction.rsh:193:28:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:193:28:function exp)', 'at ./src/contracts/auction.rsh:176:58:application call to "runAuctioneer_rejectSale0_428" (defined at: ./src/contracts/auction.rsh:191:21:function exp)', 'at ./src/contracts/auction.rsh:176:58:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:176:58:function exp)'],
    msg: 'You are not the Seller',
    who: 'Auctioneer_rejectSale'
    });
  const v1141 = ['Auctioneer_rejectSale0_428', v1135];
  
  const txn1 = await (ctc.sendrecv({
    args: [v668, v669, v716, v739, v742, v1104, v1113, v1114, v1141],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:196:31:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1146], secs: v1148, time: v1147, didSend: v553, from: v1145 } = txn1;
      
      switch (v1146[0]) {
        case 'Auctioneer_acceptSale0_428': {
          const v1149 = v1146[1];
          
          break;
          }
        case 'Auctioneer_rejectSale0_428': {
          const v1171 = v1146[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctioneer_rejectSale"
            });
          ;
          const v1186 = false;
          const v1187 = await txn1.getOutput('Auctioneer_rejectSale', 'v1186', ctc4, v1186);
          
          const v2947 = v1113;
          const v2948 = v1114;
          const v2949 = stdlib.le(v1147, v1104);
          const v2950 = v2949 ? false : false;
          if (v2950) {
            sim_r.isHalt = false;
            }
          else {
            const v2953 = v1113[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:214:33:application', stdlib.UInt_max, '0')];
            const v2954 = v2953[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:214:33:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v668,
              tok: v669
              });
            sim_r.txns.push({
              kind: 'from',
              to: v739,
              tok: undefined /* Nothing */
              });
            null;
            sim_r.txns.push({
              kind: 'halt',
              tok: v669
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc0, ctc3, ctc3, ctc6, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v1146], secs: v1148, time: v1147, didSend: v553, from: v1145 } = txn1;
  switch (v1146[0]) {
    case 'Auctioneer_acceptSale0_428': {
      const v1149 = v1146[1];
      return;
      break;
      }
    case 'Auctioneer_rejectSale0_428': {
      const v1171 = v1146[1];
      undefined /* setApiDetails */;
      ;
      const v1186 = false;
      const v1187 = await txn1.getOutput('Auctioneer_rejectSale', 'v1186', ctc4, v1186);
      if (v553) {
        stdlib.protect(ctc9, await interact.out(v1171, v1187), {
          at: './src/contracts/auction.rsh:192:25:application',
          fs: ['at ./src/contracts/auction.rsh:192:25:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:192:25:function exp)', 'at ./src/contracts/auction.rsh:198:39:application call to "notify" (defined at: ./src/contracts/auction.rsh:197:34:function exp)', 'at ./src/contracts/auction.rsh:197:34:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:197:34:function exp)'],
          msg: 'out',
          who: 'Auctioneer_rejectSale'
          });
        }
      else {
        }
      
      const v2947 = v1113;
      const v2948 = v1114;
      const v2949 = stdlib.le(v1147, v1104);
      const v2950 = v2949 ? false : false;
      if (v2950) {
        return;
        }
      else {
        const v2953 = v1113[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:214:33:application', stdlib.UInt_max, '0')];
        const v2954 = v2953[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:214:33:application', stdlib.UInt_max, '0')];
        ;
        ;
        null;
        return;
        }
      break;
      }
    }
  
  
  };
export async function _Auctioneer_stopAuction7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Auctioneer_stopAuction7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Auctioneer_stopAuction7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc6 = stdlib.T_Struct([['id', ctc4], ['blockEnded', ctc4], ['lastBid', ctc4]]);
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc4, ctc4, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Data({
    Auctioneer_stopAuction0_123: ctc3,
    Bidder_bid0_123: ctc10,
    Bidder_optIn0_123: ctc3
    });
  const ctc12 = stdlib.T_Null;
  const ctc13 = stdlib.T_Tuple([ctc4, ctc12]);
  
  
  const [v668, v669, v671, v690, v695, v708, v714, v715, v716, v736, v738, v739, v740, v741, v742, v749, v750] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc2, ctc3, ctc4, ctc0, ctc4, ctc2, ctc5, ctc4, ctc6, ctc0, ctc7, ctc7, ctc4, ctc9, ctc4]);
  const v761 = ctc.selfAddress();
  const v763 = stdlib.protect(ctc3, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:152:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:152:36:function exp)', 'at ./src/contracts/auction.rsh:107:31:application call to "runAuctioneer_stopAuction0_123" (defined at: ./src/contracts/auction.rsh:150:29:function exp)', 'at ./src/contracts/auction.rsh:107:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:107:31:function exp)'],
    msg: 'in',
    who: 'Auctioneer_stopAuction'
    });
  const v765 = stdlib.addressEq(v761, v668);
  stdlib.assert(v765, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/auction.rsh:153:46:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:152:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:152:36:function exp)', 'at ./src/contracts/auction.rsh:152:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:152:36:function exp)', 'at ./src/contracts/auction.rsh:107:31:application call to "runAuctioneer_stopAuction0_123" (defined at: ./src/contracts/auction.rsh:150:29:function exp)', 'at ./src/contracts/auction.rsh:107:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:107:31:function exp)'],
    msg: 'You are not the Seller',
    who: 'Auctioneer_stopAuction'
    });
  const v769 = ['Auctioneer_stopAuction0_123', v763];
  
  const txn1 = await (ctc.sendrecv({
    args: [v668, v669, v671, v690, v695, v708, v714, v715, v716, v736, v738, v739, v740, v741, v742, v749, v750, v769],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:155:39:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v800], secs: v802, time: v801, didSend: v317, from: v799 } = txn1;
      
      switch (v800[0]) {
        case 'Auctioneer_stopAuction0_123': {
          const v803 = v800[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctioneer_stopAuction"
            });
          ;
          null;
          const v817 = {
            blockEnded: v801,
            id: v695,
            lastBid: v742
            };
          const v818 = await txn1.getOutput('Auctioneer_stopAuction', 'v817', ctc6, v817);
          
          const v2955 = v817;
          const v2956 = v739;
          const v2957 = v740;
          const v2958 = false;
          const v2959 = v742;
          const v2961 = v749;
          const v2962 = v750;
          const v2963 = stdlib.le(v801, v736);
          const v2964 = v2963 ? false : false;
          if (v2964) {
            sim_r.isHalt = false;
            }
          else {
            const v2965 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v671,
                remote: ({
                  accs: [],
                  apps: [],
                  bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0'),
                  fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0'),
                  toks: []
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
            const v2966 = await txn1.getOutput('internal', 'v2965', ctc13, v2965);
            const v2967 = v2966[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0')];
            const v2968 = stdlib.add(v750, v2967);
            null;
            const v2970 = stdlib.safeAdd(v801, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
            const v2996 = v749;
            const v2997 = v2968;
            const v2998 = stdlib.le(v801, v2970);
            if (v2998) {
              sim_r.isHalt = false;
              }
            else {
              const v3000 = v749[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:204:33:application', stdlib.UInt_max, '0')];
              const v3001 = v3000[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:204:33:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v739,
                tok: v669
                });
              sim_r.txns.push({
                kind: 'from',
                to: v668,
                tok: undefined /* Nothing */
                });
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: v669
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          break;
          }
        case 'Bidder_bid0_123': {
          const v897 = v800[1];
          
          break;
          }
        case 'Bidder_optIn0_123': {
          const v991 = v800[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc3, ctc4, ctc0, ctc4, ctc2, ctc5, ctc4, ctc6, ctc0, ctc7, ctc7, ctc4, ctc9, ctc4, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v800], secs: v802, time: v801, didSend: v317, from: v799 } = txn1;
  switch (v800[0]) {
    case 'Auctioneer_stopAuction0_123': {
      const v803 = v800[1];
      undefined /* setApiDetails */;
      ;
      null;
      const v817 = {
        blockEnded: v801,
        id: v695,
        lastBid: v742
        };
      const v818 = await txn1.getOutput('Auctioneer_stopAuction', 'v817', ctc6, v817);
      if (v317) {
        stdlib.protect(ctc12, await interact.out(v803, v818), {
          at: './src/contracts/auction.rsh:151:33:application',
          fs: ['at ./src/contracts/auction.rsh:151:33:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:151:33:function exp)', 'at ./src/contracts/auction.rsh:163:47:application call to "notify" (defined at: ./src/contracts/auction.rsh:156:42:function exp)', 'at ./src/contracts/auction.rsh:156:42:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:156:42:function exp)'],
          msg: 'out',
          who: 'Auctioneer_stopAuction'
          });
        }
      else {
        }
      
      const v2955 = v817;
      const v2956 = v739;
      const v2957 = v740;
      const v2958 = false;
      const v2959 = v742;
      const v2961 = v749;
      const v2962 = v750;
      const v2963 = stdlib.le(v801, v736);
      const v2964 = v2963 ? false : false;
      if (v2964) {
        return;
        }
      else {
        const v2965 = undefined /* Remote */;
        const v2966 = await txn1.getOutput('internal', 'v2965', ctc13, v2965);
        const v2967 = v2966[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0')];
        const v2968 = stdlib.add(v750, v2967);
        const v2969 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v2967);
        stdlib.assert(v2969, {
          at: './src/contracts/auction.rsh:168:37:application',
          fs: [],
          msg: 'remote bill check',
          who: 'Auctioneer_stopAuction'
          });
        null;
        const v2970 = stdlib.safeAdd(v801, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
        const v2996 = v749;
        const v2997 = v2968;
        const v2998 = stdlib.le(v801, v2970);
        if (v2998) {
          return;
          }
        else {
          const v3000 = v749[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:204:33:application', stdlib.UInt_max, '0')];
          const v3001 = v3000[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:204:33:application', stdlib.UInt_max, '0')];
          ;
          ;
          null;
          return;
          }}
      break;
      }
    case 'Bidder_bid0_123': {
      const v897 = v800[1];
      return;
      break;
      }
    case 'Bidder_optIn0_123': {
      const v991 = v800[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Bidder_bid7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_bid7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_bid7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc6 = stdlib.T_Struct([['id', ctc4], ['blockEnded', ctc4], ['lastBid', ctc4]]);
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc4, ctc4, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Data({
    Auctioneer_stopAuction0_123: ctc3,
    Bidder_bid0_123: ctc10,
    Bidder_optIn0_123: ctc3
    });
  const ctc12 = stdlib.T_Tuple([ctc0, ctc4]);
  const ctc13 = stdlib.T_Null;
  const ctc14 = stdlib.T_Tuple([ctc4, ctc13]);
  
  
  const [v668, v669, v671, v690, v695, v708, v714, v715, v716, v736, v738, v739, v740, v741, v742, v749, v750] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc2, ctc3, ctc4, ctc0, ctc4, ctc2, ctc5, ctc4, ctc6, ctc0, ctc7, ctc7, ctc4, ctc9, ctc4]);
  const v773 = stdlib.protect(ctc10, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:124:49:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:124:49:function exp)', 'at ./src/contracts/auction.rsh:107:31:application call to "runBidder_bid0_123" (defined at: ./src/contracts/auction.rsh:124:30:function exp)', 'at ./src/contracts/auction.rsh:107:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:107:31:function exp)'],
    msg: 'in',
    who: 'Bidder_bid'
    });
  const v774 = v773[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v776 = stdlib.gt(v774, v742);
  stdlib.assert(v776, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/auction.rsh:125:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:124:49:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:124:49:function exp)', 'at ./src/contracts/auction.rsh:107:31:application call to "runBidder_bid0_123" (defined at: ./src/contracts/auction.rsh:124:30:function exp)', 'at ./src/contracts/auction.rsh:107:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:107:31:function exp)'],
    msg: 'Your bid is too low, please try again',
    who: 'Bidder_bid'
    });
  const v783 = ['Bidder_bid0_123', v773];
  
  const txn1 = await (ctc.sendrecv({
    args: [v668, v669, v671, v690, v695, v708, v714, v715, v716, v736, v738, v739, v740, v741, v742, v749, v750, v783],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [v774, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v800], secs: v802, time: v801, didSend: v317, from: v799 } = txn1;
      
      switch (v800[0]) {
        case 'Auctioneer_stopAuction0_123': {
          const v803 = v800[1];
          
          break;
          }
        case 'Bidder_bid0_123': {
          const v897 = v800[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bidder_bid"
            });
          const v903 = v897[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:124:30:spread', stdlib.UInt_max, '0')];
          const v908 = stdlib.add(v750, v903);
          sim_r.txns.push({
            amt: v903,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v928 = [v739, v742];
          const v929 = await txn1.getOutput('Bidder_bid', 'v928', ctc12, v928);
          
          if (v740) {
            null;
            const v3347 = v738;
            const v3348 = v799;
            const v3349 = false;
            const v3350 = v741;
            const v3351 = v903;
            const v3353 = v749;
            const v3354 = v908;
            const v3355 = stdlib.le(v801, v736);
            const v3356 = v3355 ? v741 : false;
            if (v3356) {
              sim_r.isHalt = false;
              }
            else {
              const v3357 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v671,
                  remote: ({
                    accs: [],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0'),
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc13.defaultValue /* simReturnVal */];})();
              const v3358 = await txn1.getOutput('internal', 'v3357', ctc14, v3357);
              const v3359 = v3358[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0')];
              const v3360 = stdlib.add(v908, v3359);
              null;
              const v3362 = stdlib.safeAdd(v801, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
              const v3388 = v749;
              const v3389 = v3360;
              const v3390 = stdlib.le(v801, v3362);
              if (v3390) {
                sim_r.isHalt = false;
                }
              else {
                const v3392 = v749[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:204:33:application', stdlib.UInt_max, '0')];
                const v3393 = v3392[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:204:33:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v799,
                  tok: v669
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v668,
                  tok: undefined /* Nothing */
                  });
                null;
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v669
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}}
          else {
            const v941 = stdlib.sub(v908, v742);
            sim_r.txns.push({
              kind: 'from',
              to: v739,
              tok: undefined /* Nothing */
              });
            null;
            const v3396 = v738;
            const v3397 = v799;
            const v3398 = false;
            const v3399 = v741;
            const v3400 = v903;
            const v3402 = v749;
            const v3403 = v941;
            const v3404 = stdlib.le(v801, v736);
            const v3405 = v3404 ? v741 : false;
            if (v3405) {
              sim_r.isHalt = false;
              }
            else {
              const v3406 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v671,
                  remote: ({
                    accs: [],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0'),
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc13.defaultValue /* simReturnVal */];})();
              const v3407 = await txn1.getOutput('internal', 'v3406', ctc14, v3406);
              const v3408 = v3407[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0')];
              const v3409 = stdlib.add(v941, v3408);
              null;
              const v3411 = stdlib.safeAdd(v801, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
              const v3437 = v749;
              const v3438 = v3409;
              const v3439 = stdlib.le(v801, v3411);
              if (v3439) {
                sim_r.isHalt = false;
                }
              else {
                const v3441 = v749[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:204:33:application', stdlib.UInt_max, '0')];
                const v3442 = v3441[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:204:33:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v799,
                  tok: v669
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v668,
                  tok: undefined /* Nothing */
                  });
                null;
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v669
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}}
          break;
          }
        case 'Bidder_optIn0_123': {
          const v991 = v800[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc3, ctc4, ctc0, ctc4, ctc2, ctc5, ctc4, ctc6, ctc0, ctc7, ctc7, ctc4, ctc9, ctc4, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v800], secs: v802, time: v801, didSend: v317, from: v799 } = txn1;
  switch (v800[0]) {
    case 'Auctioneer_stopAuction0_123': {
      const v803 = v800[1];
      return;
      break;
      }
    case 'Bidder_bid0_123': {
      const v897 = v800[1];
      undefined /* setApiDetails */;
      const v903 = v897[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:124:30:spread', stdlib.UInt_max, '0')];
      const v904 = stdlib.gt(v903, v742);
      stdlib.assert(v904, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/auction.rsh:125:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:124:49:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:124:49:function exp)', 'at ./src/contracts/auction.rsh:107:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:124:49:function exp)', 'at ./src/contracts/auction.rsh:107:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:107:31:function exp)'],
        msg: 'Your bid is too low, please try again',
        who: 'Bidder_bid'
        });
      const v908 = stdlib.add(v750, v903);
      ;
      const v928 = [v739, v742];
      const v929 = await txn1.getOutput('Bidder_bid', 'v928', ctc12, v928);
      if (v317) {
        stdlib.protect(ctc13, await interact.out(v897, v929), {
          at: './src/contracts/auction.rsh:124:31:application',
          fs: ['at ./src/contracts/auction.rsh:124:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:124:31:function exp)', 'at ./src/contracts/auction.rsh:129:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:128:50:function exp)', 'at ./src/contracts/auction.rsh:128:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:128:50:function exp)'],
          msg: 'out',
          who: 'Bidder_bid'
          });
        }
      else {
        }
      
      if (v740) {
        null;
        const v3347 = v738;
        const v3348 = v799;
        const v3349 = false;
        const v3350 = v741;
        const v3351 = v903;
        const v3353 = v749;
        const v3354 = v908;
        const v3355 = stdlib.le(v801, v736);
        const v3356 = v3355 ? v741 : false;
        if (v3356) {
          return;
          }
        else {
          const v3357 = undefined /* Remote */;
          const v3358 = await txn1.getOutput('internal', 'v3357', ctc14, v3357);
          const v3359 = v3358[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0')];
          const v3360 = stdlib.add(v908, v3359);
          const v3361 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3359);
          stdlib.assert(v3361, {
            at: './src/contracts/auction.rsh:168:37:application',
            fs: [],
            msg: 'remote bill check',
            who: 'Bidder_bid'
            });
          null;
          const v3362 = stdlib.safeAdd(v801, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
          const v3388 = v749;
          const v3389 = v3360;
          const v3390 = stdlib.le(v801, v3362);
          if (v3390) {
            return;
            }
          else {
            const v3392 = v749[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:204:33:application', stdlib.UInt_max, '0')];
            const v3393 = v3392[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:204:33:application', stdlib.UInt_max, '0')];
            ;
            ;
            null;
            return;
            }}}
      else {
        const v941 = stdlib.sub(v908, v742);
        ;
        null;
        const v3396 = v738;
        const v3397 = v799;
        const v3398 = false;
        const v3399 = v741;
        const v3400 = v903;
        const v3402 = v749;
        const v3403 = v941;
        const v3404 = stdlib.le(v801, v736);
        const v3405 = v3404 ? v741 : false;
        if (v3405) {
          return;
          }
        else {
          const v3406 = undefined /* Remote */;
          const v3407 = await txn1.getOutput('internal', 'v3406', ctc14, v3406);
          const v3408 = v3407[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0')];
          const v3409 = stdlib.add(v941, v3408);
          const v3410 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3408);
          stdlib.assert(v3410, {
            at: './src/contracts/auction.rsh:168:37:application',
            fs: [],
            msg: 'remote bill check',
            who: 'Bidder_bid'
            });
          null;
          const v3411 = stdlib.safeAdd(v801, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
          const v3437 = v749;
          const v3438 = v3409;
          const v3439 = stdlib.le(v801, v3411);
          if (v3439) {
            return;
            }
          else {
            const v3441 = v749[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:204:33:application', stdlib.UInt_max, '0')];
            const v3442 = v3441[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:204:33:application', stdlib.UInt_max, '0')];
            ;
            ;
            null;
            return;
            }}}
      break;
      }
    case 'Bidder_optIn0_123': {
      const v991 = v800[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Bidder_optIn7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_optIn7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_optIn7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc6 = stdlib.T_Struct([['id', ctc4], ['blockEnded', ctc4], ['lastBid', ctc4]]);
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc4, ctc4, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Data({
    Auctioneer_stopAuction0_123: ctc3,
    Bidder_bid0_123: ctc10,
    Bidder_optIn0_123: ctc3
    });
  const ctc12 = stdlib.T_Null;
  const ctc13 = stdlib.T_Tuple([ctc4, ctc12]);
  
  
  const [v668, v669, v671, v690, v695, v708, v714, v715, v716, v736, v738, v739, v740, v741, v742, v749, v750] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc2, ctc3, ctc4, ctc0, ctc4, ctc2, ctc5, ctc4, ctc6, ctc0, ctc7, ctc7, ctc4, ctc9, ctc4]);
  const v787 = stdlib.protect(ctc3, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:137:48:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:137:48:function exp)', 'at ./src/contracts/auction.rsh:107:31:application call to "runBidder_optIn0_123" (defined at: ./src/contracts/auction.rsh:137:30:function exp)', 'at ./src/contracts/auction.rsh:107:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:107:31:function exp)'],
    msg: 'in',
    who: 'Bidder_optIn'
    });
  const v791 = ['Bidder_optIn0_123', v787];
  
  const txn1 = await (ctc.sendrecv({
    args: [v668, v669, v671, v690, v695, v708, v714, v715, v716, v736, v738, v739, v740, v741, v742, v749, v750, v791],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v800], secs: v802, time: v801, didSend: v317, from: v799 } = txn1;
      
      switch (v800[0]) {
        case 'Auctioneer_stopAuction0_123': {
          const v803 = v800[1];
          
          break;
          }
        case 'Bidder_bid0_123': {
          const v897 = v800[1];
          
          break;
          }
        case 'Bidder_optIn0_123': {
          const v991 = v800[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bidder_optIn"
            });
          const v1002 = stdlib.add(v750, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'));
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'),
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1040 = stdlib.ge(v1002, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:141:83:application', stdlib.UInt_max, '900000'));
          if (v1040) {
            const v1044 = stdlib.sub(v1002, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:141:83:application', stdlib.UInt_max, '900000'));
            sim_r.txns.push({
              kind: 'from',
              to: v708,
              tok: undefined /* Nothing */
              });
            const v1046 = stdlib.ge(v1044, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:142:84:application', stdlib.UInt_max, '100000'));
            if (v1046) {
              const v1050 = stdlib.sub(v1044, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:142:84:application', stdlib.UInt_max, '100000'));
              sim_r.txns.push({
                kind: 'from',
                to: v668,
                tok: undefined /* Nothing */
                });
              const v1051 = true;
              const v1052 = await txn1.getOutput('Bidder_optIn', 'v1051', ctc7, v1051);
              
              const v3788 = v738;
              const v3789 = v739;
              const v3790 = v740;
              const v3791 = v741;
              const v3792 = v742;
              const v3794 = v749;
              const v3795 = v1050;
              const v3796 = stdlib.le(v801, v736);
              const v3797 = v3796 ? v741 : false;
              if (v3797) {
                sim_r.isHalt = false;
                }
              else {
                const v3798 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v671,
                    remote: ({
                      accs: [],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0'),
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
                const v3799 = await txn1.getOutput('internal', 'v3798', ctc13, v3798);
                const v3800 = v3799[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0')];
                const v3801 = stdlib.add(v1050, v3800);
                null;
                const v3803 = stdlib.safeAdd(v801, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                const v3829 = v749;
                const v3830 = v3801;
                const v3831 = stdlib.le(v801, v3803);
                if (v3831) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v3833 = v749[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:204:33:application', stdlib.UInt_max, '0')];
                  const v3834 = v3833[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:204:33:application', stdlib.UInt_max, '0')];
                  sim_r.txns.push({
                    kind: 'from',
                    to: v739,
                    tok: v669
                    });
                  sim_r.txns.push({
                    kind: 'from',
                    to: v668,
                    tok: undefined /* Nothing */
                    });
                  null;
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v669
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}}
            else {
              const v1058 = true;
              const v1059 = await txn1.getOutput('Bidder_optIn', 'v1058', ctc7, v1058);
              
              const v3837 = v738;
              const v3838 = v739;
              const v3839 = v740;
              const v3840 = v741;
              const v3841 = v742;
              const v3843 = v749;
              const v3844 = v1044;
              const v3845 = stdlib.le(v801, v736);
              const v3846 = v3845 ? v741 : false;
              if (v3846) {
                sim_r.isHalt = false;
                }
              else {
                const v3847 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v671,
                    remote: ({
                      accs: [],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0'),
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
                const v3848 = await txn1.getOutput('internal', 'v3847', ctc13, v3847);
                const v3849 = v3848[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0')];
                const v3850 = stdlib.add(v1044, v3849);
                null;
                const v3852 = stdlib.safeAdd(v801, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                const v3878 = v749;
                const v3879 = v3850;
                const v3880 = stdlib.le(v801, v3852);
                if (v3880) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v3882 = v749[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:204:33:application', stdlib.UInt_max, '0')];
                  const v3883 = v3882[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:204:33:application', stdlib.UInt_max, '0')];
                  sim_r.txns.push({
                    kind: 'from',
                    to: v739,
                    tok: v669
                    });
                  sim_r.txns.push({
                    kind: 'from',
                    to: v668,
                    tok: undefined /* Nothing */
                    });
                  null;
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v669
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}}}
          else {
            const v1066 = stdlib.ge(v1002, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:142:84:application', stdlib.UInt_max, '100000'));
            if (v1066) {
              const v1070 = stdlib.sub(v1002, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:142:84:application', stdlib.UInt_max, '100000'));
              sim_r.txns.push({
                kind: 'from',
                to: v668,
                tok: undefined /* Nothing */
                });
              const v1071 = true;
              const v1072 = await txn1.getOutput('Bidder_optIn', 'v1071', ctc7, v1071);
              
              const v3886 = v738;
              const v3887 = v739;
              const v3888 = v740;
              const v3889 = v741;
              const v3890 = v742;
              const v3892 = v749;
              const v3893 = v1070;
              const v3894 = stdlib.le(v801, v736);
              const v3895 = v3894 ? v741 : false;
              if (v3895) {
                sim_r.isHalt = false;
                }
              else {
                const v3896 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v671,
                    remote: ({
                      accs: [],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0'),
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
                const v3897 = await txn1.getOutput('internal', 'v3896', ctc13, v3896);
                const v3898 = v3897[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0')];
                const v3899 = stdlib.add(v1070, v3898);
                null;
                const v3901 = stdlib.safeAdd(v801, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                const v3927 = v749;
                const v3928 = v3899;
                const v3929 = stdlib.le(v801, v3901);
                if (v3929) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v3931 = v749[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:204:33:application', stdlib.UInt_max, '0')];
                  const v3932 = v3931[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:204:33:application', stdlib.UInt_max, '0')];
                  sim_r.txns.push({
                    kind: 'from',
                    to: v739,
                    tok: v669
                    });
                  sim_r.txns.push({
                    kind: 'from',
                    to: v668,
                    tok: undefined /* Nothing */
                    });
                  null;
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v669
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}}
            else {
              const v1078 = true;
              const v1079 = await txn1.getOutput('Bidder_optIn', 'v1078', ctc7, v1078);
              
              const v3935 = v738;
              const v3936 = v739;
              const v3937 = v740;
              const v3938 = v741;
              const v3939 = v742;
              const v3941 = v749;
              const v3942 = v1002;
              const v3943 = stdlib.le(v801, v736);
              const v3944 = v3943 ? v741 : false;
              if (v3944) {
                sim_r.isHalt = false;
                }
              else {
                const v3945 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v671,
                    remote: ({
                      accs: [],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0'),
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
                const v3946 = await txn1.getOutput('internal', 'v3945', ctc13, v3945);
                const v3947 = v3946[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0')];
                const v3948 = stdlib.add(v1002, v3947);
                null;
                const v3950 = stdlib.safeAdd(v801, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                const v3976 = v749;
                const v3977 = v3948;
                const v3978 = stdlib.le(v801, v3950);
                if (v3978) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v3980 = v749[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:204:33:application', stdlib.UInt_max, '0')];
                  const v3981 = v3980[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:204:33:application', stdlib.UInt_max, '0')];
                  sim_r.txns.push({
                    kind: 'from',
                    to: v739,
                    tok: v669
                    });
                  sim_r.txns.push({
                    kind: 'from',
                    to: v668,
                    tok: undefined /* Nothing */
                    });
                  null;
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v669
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}}}
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc3, ctc4, ctc0, ctc4, ctc2, ctc5, ctc4, ctc6, ctc0, ctc7, ctc7, ctc4, ctc9, ctc4, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v800], secs: v802, time: v801, didSend: v317, from: v799 } = txn1;
  switch (v800[0]) {
    case 'Auctioneer_stopAuction0_123': {
      const v803 = v800[1];
      return;
      break;
      }
    case 'Bidder_bid0_123': {
      const v897 = v800[1];
      return;
      break;
      }
    case 'Bidder_optIn0_123': {
      const v991 = v800[1];
      undefined /* setApiDetails */;
      const v1002 = stdlib.add(v750, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'));
      ;
      const v1040 = stdlib.ge(v1002, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:141:83:application', stdlib.UInt_max, '900000'));
      if (v1040) {
        const v1044 = stdlib.sub(v1002, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:141:83:application', stdlib.UInt_max, '900000'));
        ;
        const v1046 = stdlib.ge(v1044, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:142:84:application', stdlib.UInt_max, '100000'));
        if (v1046) {
          const v1050 = stdlib.sub(v1044, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:142:84:application', stdlib.UInt_max, '100000'));
          ;
          const v1051 = true;
          const v1052 = await txn1.getOutput('Bidder_optIn', 'v1051', ctc7, v1051);
          if (v317) {
            stdlib.protect(ctc12, await interact.out(v991, v1052), {
              at: './src/contracts/auction.rsh:137:31:application',
              fs: ['at ./src/contracts/auction.rsh:137:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:137:31:function exp)', 'at ./src/contracts/auction.rsh:145:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:140:50:function exp)', 'at ./src/contracts/auction.rsh:140:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:140:50:function exp)'],
              msg: 'out',
              who: 'Bidder_optIn'
              });
            }
          else {
            }
          
          const v3788 = v738;
          const v3789 = v739;
          const v3790 = v740;
          const v3791 = v741;
          const v3792 = v742;
          const v3794 = v749;
          const v3795 = v1050;
          const v3796 = stdlib.le(v801, v736);
          const v3797 = v3796 ? v741 : false;
          if (v3797) {
            return;
            }
          else {
            const v3798 = undefined /* Remote */;
            const v3799 = await txn1.getOutput('internal', 'v3798', ctc13, v3798);
            const v3800 = v3799[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0')];
            const v3801 = stdlib.add(v1050, v3800);
            const v3802 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3800);
            stdlib.assert(v3802, {
              at: './src/contracts/auction.rsh:168:37:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Bidder_optIn'
              });
            null;
            const v3803 = stdlib.safeAdd(v801, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
            const v3829 = v749;
            const v3830 = v3801;
            const v3831 = stdlib.le(v801, v3803);
            if (v3831) {
              return;
              }
            else {
              const v3833 = v749[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:204:33:application', stdlib.UInt_max, '0')];
              const v3834 = v3833[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:204:33:application', stdlib.UInt_max, '0')];
              ;
              ;
              null;
              return;
              }}}
        else {
          const v1058 = true;
          const v1059 = await txn1.getOutput('Bidder_optIn', 'v1058', ctc7, v1058);
          if (v317) {
            stdlib.protect(ctc12, await interact.out(v991, v1059), {
              at: './src/contracts/auction.rsh:137:31:application',
              fs: ['at ./src/contracts/auction.rsh:137:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:137:31:function exp)', 'at ./src/contracts/auction.rsh:145:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:140:50:function exp)', 'at ./src/contracts/auction.rsh:140:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:140:50:function exp)'],
              msg: 'out',
              who: 'Bidder_optIn'
              });
            }
          else {
            }
          
          const v3837 = v738;
          const v3838 = v739;
          const v3839 = v740;
          const v3840 = v741;
          const v3841 = v742;
          const v3843 = v749;
          const v3844 = v1044;
          const v3845 = stdlib.le(v801, v736);
          const v3846 = v3845 ? v741 : false;
          if (v3846) {
            return;
            }
          else {
            const v3847 = undefined /* Remote */;
            const v3848 = await txn1.getOutput('internal', 'v3847', ctc13, v3847);
            const v3849 = v3848[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0')];
            const v3850 = stdlib.add(v1044, v3849);
            const v3851 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3849);
            stdlib.assert(v3851, {
              at: './src/contracts/auction.rsh:168:37:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Bidder_optIn'
              });
            null;
            const v3852 = stdlib.safeAdd(v801, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
            const v3878 = v749;
            const v3879 = v3850;
            const v3880 = stdlib.le(v801, v3852);
            if (v3880) {
              return;
              }
            else {
              const v3882 = v749[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:204:33:application', stdlib.UInt_max, '0')];
              const v3883 = v3882[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:204:33:application', stdlib.UInt_max, '0')];
              ;
              ;
              null;
              return;
              }}}}
      else {
        const v1066 = stdlib.ge(v1002, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:142:84:application', stdlib.UInt_max, '100000'));
        if (v1066) {
          const v1070 = stdlib.sub(v1002, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:142:84:application', stdlib.UInt_max, '100000'));
          ;
          const v1071 = true;
          const v1072 = await txn1.getOutput('Bidder_optIn', 'v1071', ctc7, v1071);
          if (v317) {
            stdlib.protect(ctc12, await interact.out(v991, v1072), {
              at: './src/contracts/auction.rsh:137:31:application',
              fs: ['at ./src/contracts/auction.rsh:137:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:137:31:function exp)', 'at ./src/contracts/auction.rsh:145:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:140:50:function exp)', 'at ./src/contracts/auction.rsh:140:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:140:50:function exp)'],
              msg: 'out',
              who: 'Bidder_optIn'
              });
            }
          else {
            }
          
          const v3886 = v738;
          const v3887 = v739;
          const v3888 = v740;
          const v3889 = v741;
          const v3890 = v742;
          const v3892 = v749;
          const v3893 = v1070;
          const v3894 = stdlib.le(v801, v736);
          const v3895 = v3894 ? v741 : false;
          if (v3895) {
            return;
            }
          else {
            const v3896 = undefined /* Remote */;
            const v3897 = await txn1.getOutput('internal', 'v3896', ctc13, v3896);
            const v3898 = v3897[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0')];
            const v3899 = stdlib.add(v1070, v3898);
            const v3900 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3898);
            stdlib.assert(v3900, {
              at: './src/contracts/auction.rsh:168:37:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Bidder_optIn'
              });
            null;
            const v3901 = stdlib.safeAdd(v801, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
            const v3927 = v749;
            const v3928 = v3899;
            const v3929 = stdlib.le(v801, v3901);
            if (v3929) {
              return;
              }
            else {
              const v3931 = v749[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:204:33:application', stdlib.UInt_max, '0')];
              const v3932 = v3931[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:204:33:application', stdlib.UInt_max, '0')];
              ;
              ;
              null;
              return;
              }}}
        else {
          const v1078 = true;
          const v1079 = await txn1.getOutput('Bidder_optIn', 'v1078', ctc7, v1078);
          if (v317) {
            stdlib.protect(ctc12, await interact.out(v991, v1079), {
              at: './src/contracts/auction.rsh:137:31:application',
              fs: ['at ./src/contracts/auction.rsh:137:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:137:31:function exp)', 'at ./src/contracts/auction.rsh:145:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:140:50:function exp)', 'at ./src/contracts/auction.rsh:140:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:140:50:function exp)'],
              msg: 'out',
              who: 'Bidder_optIn'
              });
            }
          else {
            }
          
          const v3935 = v738;
          const v3936 = v739;
          const v3937 = v740;
          const v3938 = v741;
          const v3939 = v742;
          const v3941 = v749;
          const v3942 = v1002;
          const v3943 = stdlib.le(v801, v736);
          const v3944 = v3943 ? v741 : false;
          if (v3944) {
            return;
            }
          else {
            const v3945 = undefined /* Remote */;
            const v3946 = await txn1.getOutput('internal', 'v3945', ctc13, v3945);
            const v3947 = v3946[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0')];
            const v3948 = stdlib.add(v1002, v3947);
            const v3949 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3947);
            stdlib.assert(v3949, {
              at: './src/contracts/auction.rsh:168:37:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Bidder_optIn'
              });
            null;
            const v3950 = stdlib.safeAdd(v801, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
            const v3976 = v749;
            const v3977 = v3948;
            const v3978 = stdlib.le(v801, v3950);
            if (v3978) {
              return;
              }
            else {
              const v3980 = v749[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:204:33:application', stdlib.UInt_max, '0')];
              const v3981 = v3980[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:204:33:application', stdlib.UInt_max, '0')];
              ;
              ;
              null;
              return;
              }}}}
      break;
      }
    }
  
  
  };
export async function Seller(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Seller expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Seller expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Object({
    adminContract: ctc0,
    deadline: ctc1,
    description: ctc2,
    owner: ctc3,
    price: ctc1,
    title: ctc4,
    tokenId: ctc5
    });
  const ctc7 = stdlib.T_Object({
    deadline: ctc1,
    description: ctc2,
    owner: ctc3,
    price: ctc1,
    title: ctc4
    });
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc9 = stdlib.T_Tuple([ctc1, ctc3]);
  const ctc10 = stdlib.T_Null;
  const ctc11 = stdlib.T_Tuple([ctc1, ctc10]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Data({
    Auctioneer_stopAuction0_123: ctc12,
    Bidder_bid0_123: ctc13,
    Bidder_optIn0_123: ctc12
    });
  const ctc15 = stdlib.T_Struct([['id', ctc1], ['blockEnded', ctc1], ['lastBid', ctc1]]);
  const ctc16 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc17 = stdlib.T_Bool;
  const ctc18 = stdlib.T_Data({
    Auctioneer_acceptSale0_428: ctc12,
    Auctioneer_rejectSale0_428: ctc12
    });
  const ctc19 = stdlib.T_Tuple([ctc1, ctc1, ctc17]);
  const ctc20 = stdlib.T_Array(ctc19, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  
  const v645 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v646 = [v645];
  const v650 = stdlib.protect(ctc6, interact.getAuction, 'for Seller\'s interact field getAuction');
  const v651 = v650.adminContract;
  const v652 = v650.deadline;
  const v653 = v650.description;
  const v654 = v650.owner;
  const v655 = v650.price;
  const v656 = v650.title;
  const v657 = v650.tokenId;
  
  const v667 = {
    deadline: v652,
    description: v653,
    owner: v654,
    price: v655,
    title: v656
    };
  
  const txn1 = await (ctc.sendrecv({
    args: [v657, v667, v651],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:71:16:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5, ctc7, ctc0],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:71:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v669, v670, v671], secs: v673, time: v672, didSend: v44, from: v668 } = txn1;
      
      const v674 = v646[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:71:16:dot', stdlib.UInt_max, '0')];
      const v675 = stdlib.Array_set(v674, '0', stdlib.checkedBigNumberify('./src/contracts/auction.rsh:71:16:dot', stdlib.UInt_max, '0'));
      const v676 = stdlib.Array_set(v646, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:71:16:dot', stdlib.UInt_max, '0'), v675);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v669
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc7, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v669, v670, v671], secs: v673, time: v672, didSend: v44, from: v668 } = txn1;
  const v674 = v646[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:71:16:dot', stdlib.UInt_max, '0')];
  const v675 = stdlib.Array_set(v674, '0', stdlib.checkedBigNumberify('./src/contracts/auction.rsh:71:16:dot', stdlib.UInt_max, '0'));
  const v676 = stdlib.Array_set(v646, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:71:16:dot', stdlib.UInt_max, '0'), v675);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v668, v669, v670, v671, v676],
    evt_cnt: 0,
    funcNum: 1,
    lct: v672,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:73:16:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:11:13:decimal', stdlib.UInt_max, '1'), v669]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v680, time: v679, didSend: v51, from: v678 } = txn2;
      
      ;
      const v681 = v676[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:73:16:dot', stdlib.UInt_max, '0')];
      const v682 = v681[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:73:16:dot', stdlib.UInt_max, '0')];
      const v683 = stdlib.add(v682, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:11:13:decimal', stdlib.UInt_max, '1'));
      const v685 = stdlib.Array_set(v681, '0', v683);
      const v686 = stdlib.Array_set(v676, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:73:16:dot', stdlib.UInt_max, '0'), v685);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:11:13:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v669
        });
      const v690 = [];
      const v691 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v671,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:84:48:application', stdlib.UInt_max, '0'),
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:84:48:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc1.defaultValue /* simReturnVal */];})();
      const v692 = await txn2.getOutput('internal', 'v691', ctc8, v691);
      const v694 = v692[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:84:48:application', stdlib.UInt_max, '0')];
      const v695 = v692[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:84:48:application', stdlib.UInt_max, '1')];
      const v704 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v671,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:85:68:application', stdlib.UInt_max, '0'),
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:85:68:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc3.defaultValue /* simReturnVal */];})();
      const v705 = await txn2.getOutput('internal', 'v704', ctc9, v704);
      const v707 = v705[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:85:68:application', stdlib.UInt_max, '0')];
      const v708 = v705[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:85:68:application', stdlib.UInt_max, '1')];
      const v712 = stdlib.add(v694, v707);
      const v714 = v679;
      const v715 = await ctc.getContractInfo();
      const v716 = v670.title;
      const v717 = v670.description;
      const v718 = v670.price;
      const v722 = {
        blockCreated: v679,
        contractInfo: v715,
        description: v717,
        id: v695,
        owner: v668,
        price: v718,
        title: v716,
        tokenId: v669
        };
      const v723 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v671,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:100:39:application', stdlib.UInt_max, '0'),
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:100:39:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc10.defaultValue /* simReturnVal */];})();
      const v724 = await txn2.getOutput('internal', 'v723', ctc11, v723);
      const v726 = v724[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:100:39:application', stdlib.UInt_max, '0')];
      const v731 = stdlib.add(v712, v726);
      const v735 = v670.deadline;
      const v736 = stdlib.safeAdd(v679, v735);
      null;
      const v737 = {
        blockEnded: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        lastBid: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v738 = v737;
      const v739 = v668;
      const v740 = true;
      const v741 = true;
      const v742 = stdlib.checkedBigNumberify('./src/contracts/auction.rsh:110:25:decimal', stdlib.UInt_max, '0');
      const v743 = v679;
      const v749 = v686;
      const v750 = v731;
      
      if (await (async () => {
        const v759 = stdlib.le(v743, v736);
        const v760 = v759 ? v741 : false;
        
        return v760;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v1091 = await (async () => {
          sim_r.txns.push({
            kind: 'remote',
            obj: v671,
            remote: ({
              accs: [],
              apps: [],
              bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0'),
              fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0'),
              toks: []
              })
            })
          return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc10.defaultValue /* simReturnVal */];})();
        const v1092 = await txn3.getOutput('internal', 'v1091', ctc11, v1091);
        const v1094 = v1092[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0')];
        const v1099 = stdlib.add(v750, v1094);
        null;
        const v1104 = stdlib.safeAdd(v743, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
        const v1105 = true;
        const v1106 = true;
        const v1107 = v743;
        const v1113 = v749;
        const v1114 = v1099;
        
        if (await (async () => {
          const v1121 = stdlib.le(v1107, v1104);
          const v1122 = v1121 ? v1106 : false;
          
          return v1122;})()) {
          sim_r.isHalt = false;
          }
        else {
          if (v1105) {
            const v1193 = v1113[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:204:33:application', stdlib.UInt_max, '0')];
            const v1194 = v1193[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:204:33:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v739,
              tok: v669
              });
            sim_r.txns.push({
              kind: 'from',
              to: v668,
              tok: undefined /* Nothing */
              });
            null;
            sim_r.txns.push({
              kind: 'halt',
              tok: v669
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v1215 = v1113[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:214:33:application', stdlib.UInt_max, '0')];
            const v1216 = v1215[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:214:33:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v668,
              tok: v669
              });
            sim_r.txns.push({
              kind: 'from',
              to: v739,
              tok: undefined /* Nothing */
              });
            null;
            sim_r.txns.push({
              kind: 'halt',
              tok: v669
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc5, ctc7, ctc0, ctc20],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v680, time: v679, didSend: v51, from: v678 } = txn2;
  ;
  const v681 = v676[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:73:16:dot', stdlib.UInt_max, '0')];
  const v682 = v681[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:73:16:dot', stdlib.UInt_max, '0')];
  const v683 = stdlib.add(v682, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:11:13:decimal', stdlib.UInt_max, '1'));
  const v685 = stdlib.Array_set(v681, '0', v683);
  const v686 = stdlib.Array_set(v676, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:73:16:dot', stdlib.UInt_max, '0'), v685);
  ;
  const v687 = stdlib.addressEq(v668, v678);
  stdlib.assert(v687, {
    at: './src/contracts/auction.rsh:73:16:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Seller'
    });
  const v690 = [];
  const v691 = undefined /* Remote */;
  const v692 = await txn2.getOutput('internal', 'v691', ctc8, v691);
  const v694 = v692[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:84:48:application', stdlib.UInt_max, '0')];
  const v695 = v692[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:84:48:application', stdlib.UInt_max, '1')];
  const v700 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v694);
  stdlib.assert(v700, {
    at: './src/contracts/auction.rsh:84:48:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Seller'
    });
  const v704 = undefined /* Remote */;
  const v705 = await txn2.getOutput('internal', 'v704', ctc9, v704);
  const v707 = v705[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:85:68:application', stdlib.UInt_max, '0')];
  const v708 = v705[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:85:68:application', stdlib.UInt_max, '1')];
  const v712 = stdlib.add(v694, v707);
  const v713 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v707);
  stdlib.assert(v713, {
    at: './src/contracts/auction.rsh:85:68:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Seller'
    });
  const v714 = v679;
  const v715 = await ctc.getContractInfo();
  const v716 = v670.title;
  const v717 = v670.description;
  const v718 = v670.price;
  const v722 = {
    blockCreated: v679,
    contractInfo: v715,
    description: v717,
    id: v695,
    owner: v668,
    price: v718,
    title: v716,
    tokenId: v669
    };
  const v723 = undefined /* Remote */;
  const v724 = await txn2.getOutput('internal', 'v723', ctc11, v723);
  const v726 = v724[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:100:39:application', stdlib.UInt_max, '0')];
  const v731 = stdlib.add(v712, v726);
  const v732 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v726);
  stdlib.assert(v732, {
    at: './src/contracts/auction.rsh:100:39:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Seller'
    });
  const v735 = v670.deadline;
  const v736 = stdlib.safeAdd(v679, v735);
  null;
  const v737 = {
    blockEnded: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    lastBid: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v738 = v737;
  let v739 = v668;
  let v740 = true;
  let v741 = true;
  let v742 = stdlib.checkedBigNumberify('./src/contracts/auction.rsh:110:25:decimal', stdlib.UInt_max, '0');
  let v743 = v679;
  let v749 = v686;
  let v750 = v731;
  
  let txn3 = txn2;
  while (await (async () => {
    const v759 = stdlib.le(v743, v736);
    const v760 = v759 ? v741 : false;
    
    return v760;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc14],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v800], secs: v802, time: v801, didSend: v317, from: v799 } = txn4;
    switch (v800[0]) {
      case 'Auctioneer_stopAuction0_123': {
        const v803 = v800[1];
        undefined /* setApiDetails */;
        ;
        null;
        const v817 = {
          blockEnded: v801,
          id: v695,
          lastBid: v742
          };
        await txn4.getOutput('Auctioneer_stopAuction', 'v817', ctc15, v817);
        const cv738 = v817;
        const cv739 = v739;
        const cv740 = v740;
        const cv741 = false;
        const cv742 = v742;
        const cv743 = v801;
        const cv749 = v749;
        const cv750 = v750;
        
        v738 = cv738;
        v739 = cv739;
        v740 = cv740;
        v741 = cv741;
        v742 = cv742;
        v743 = cv743;
        v749 = cv749;
        v750 = cv750;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Bidder_bid0_123': {
        const v897 = v800[1];
        undefined /* setApiDetails */;
        const v903 = v897[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:124:30:spread', stdlib.UInt_max, '0')];
        const v904 = stdlib.gt(v903, v742);
        stdlib.assert(v904, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/auction.rsh:125:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:124:49:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:124:49:function exp)', 'at ./src/contracts/auction.rsh:107:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:124:49:function exp)', 'at ./src/contracts/auction.rsh:107:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:107:31:function exp)'],
          msg: 'Your bid is too low, please try again',
          who: 'Seller'
          });
        const v908 = stdlib.add(v750, v903);
        ;
        const v928 = [v739, v742];
        await txn4.getOutput('Bidder_bid', 'v928', ctc16, v928);
        if (v740) {
          null;
          const cv738 = v738;
          const cv739 = v799;
          const cv740 = false;
          const cv741 = v741;
          const cv742 = v903;
          const cv743 = v801;
          const cv749 = v749;
          const cv750 = v908;
          
          v738 = cv738;
          v739 = cv739;
          v740 = cv740;
          v741 = cv741;
          v742 = cv742;
          v743 = cv743;
          v749 = cv749;
          v750 = cv750;
          
          txn3 = txn4;
          continue;}
        else {
          const v941 = stdlib.sub(v908, v742);
          ;
          null;
          const cv738 = v738;
          const cv739 = v799;
          const cv740 = false;
          const cv741 = v741;
          const cv742 = v903;
          const cv743 = v801;
          const cv749 = v749;
          const cv750 = v941;
          
          v738 = cv738;
          v739 = cv739;
          v740 = cv740;
          v741 = cv741;
          v742 = cv742;
          v743 = cv743;
          v749 = cv749;
          v750 = cv750;
          
          txn3 = txn4;
          continue;}
        break;
        }
      case 'Bidder_optIn0_123': {
        const v991 = v800[1];
        undefined /* setApiDetails */;
        const v1002 = stdlib.add(v750, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'));
        ;
        const v1040 = stdlib.ge(v1002, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:141:83:application', stdlib.UInt_max, '900000'));
        if (v1040) {
          const v1044 = stdlib.sub(v1002, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:141:83:application', stdlib.UInt_max, '900000'));
          ;
          const v1046 = stdlib.ge(v1044, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:142:84:application', stdlib.UInt_max, '100000'));
          if (v1046) {
            const v1050 = stdlib.sub(v1044, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:142:84:application', stdlib.UInt_max, '100000'));
            ;
            const v1051 = true;
            await txn4.getOutput('Bidder_optIn', 'v1051', ctc17, v1051);
            const cv738 = v738;
            const cv739 = v739;
            const cv740 = v740;
            const cv741 = v741;
            const cv742 = v742;
            const cv743 = v801;
            const cv749 = v749;
            const cv750 = v1050;
            
            v738 = cv738;
            v739 = cv739;
            v740 = cv740;
            v741 = cv741;
            v742 = cv742;
            v743 = cv743;
            v749 = cv749;
            v750 = cv750;
            
            txn3 = txn4;
            continue;}
          else {
            const v1058 = true;
            await txn4.getOutput('Bidder_optIn', 'v1058', ctc17, v1058);
            const cv738 = v738;
            const cv739 = v739;
            const cv740 = v740;
            const cv741 = v741;
            const cv742 = v742;
            const cv743 = v801;
            const cv749 = v749;
            const cv750 = v1044;
            
            v738 = cv738;
            v739 = cv739;
            v740 = cv740;
            v741 = cv741;
            v742 = cv742;
            v743 = cv743;
            v749 = cv749;
            v750 = cv750;
            
            txn3 = txn4;
            continue;}}
        else {
          const v1066 = stdlib.ge(v1002, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:142:84:application', stdlib.UInt_max, '100000'));
          if (v1066) {
            const v1070 = stdlib.sub(v1002, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:142:84:application', stdlib.UInt_max, '100000'));
            ;
            const v1071 = true;
            await txn4.getOutput('Bidder_optIn', 'v1071', ctc17, v1071);
            const cv738 = v738;
            const cv739 = v739;
            const cv740 = v740;
            const cv741 = v741;
            const cv742 = v742;
            const cv743 = v801;
            const cv749 = v749;
            const cv750 = v1070;
            
            v738 = cv738;
            v739 = cv739;
            v740 = cv740;
            v741 = cv741;
            v742 = cv742;
            v743 = cv743;
            v749 = cv749;
            v750 = cv750;
            
            txn3 = txn4;
            continue;}
          else {
            const v1078 = true;
            await txn4.getOutput('Bidder_optIn', 'v1078', ctc17, v1078);
            const cv738 = v738;
            const cv739 = v739;
            const cv740 = v740;
            const cv741 = v741;
            const cv742 = v742;
            const cv743 = v801;
            const cv749 = v749;
            const cv750 = v1002;
            
            v738 = cv738;
            v739 = cv739;
            v740 = cv740;
            v741 = cv741;
            v742 = cv742;
            v743 = cv743;
            v749 = cv749;
            v750 = cv750;
            
            txn3 = txn4;
            continue;}}
        break;
        }
      }
    
    }
  const v1091 = undefined /* Remote */;
  const v1092 = await txn3.getOutput('internal', 'v1091', ctc11, v1091);
  const v1094 = v1092[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0')];
  const v1099 = stdlib.add(v750, v1094);
  const v1100 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1094);
  stdlib.assert(v1100, {
    at: './src/contracts/auction.rsh:168:37:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Seller'
    });
  null;
  const v1104 = stdlib.safeAdd(v743, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
  let v1105 = true;
  let v1106 = true;
  let v1107 = v743;
  let v1113 = v749;
  let v1114 = v1099;
  
  let txn4 = txn3;
  while (await (async () => {
    const v1121 = stdlib.le(v1107, v1104);
    const v1122 = v1121 ? v1106 : false;
    
    return v1122;})()) {
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc18],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1146], secs: v1148, time: v1147, didSend: v553, from: v1145 } = txn5;
    switch (v1146[0]) {
      case 'Auctioneer_acceptSale0_428': {
        const v1149 = v1146[1];
        undefined /* setApiDetails */;
        ;
        const v1156 = true;
        await txn5.getOutput('Auctioneer_acceptSale', 'v1156', ctc17, v1156);
        const cv1105 = true;
        const cv1106 = false;
        const cv1107 = v1147;
        const cv1113 = v1113;
        const cv1114 = v1114;
        
        v1105 = cv1105;
        v1106 = cv1106;
        v1107 = cv1107;
        v1113 = cv1113;
        v1114 = cv1114;
        
        txn4 = txn5;
        continue;
        break;
        }
      case 'Auctioneer_rejectSale0_428': {
        const v1171 = v1146[1];
        undefined /* setApiDetails */;
        ;
        const v1186 = false;
        await txn5.getOutput('Auctioneer_rejectSale', 'v1186', ctc17, v1186);
        const cv1105 = false;
        const cv1106 = false;
        const cv1107 = v1147;
        const cv1113 = v1113;
        const cv1114 = v1114;
        
        v1105 = cv1105;
        v1106 = cv1106;
        v1107 = cv1107;
        v1113 = cv1113;
        v1114 = cv1114;
        
        txn4 = txn5;
        continue;
        break;
        }
      }
    
    }
  if (v1105) {
    const v1193 = v1113[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:204:33:application', stdlib.UInt_max, '0')];
    const v1194 = v1193[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:204:33:application', stdlib.UInt_max, '0')];
    ;
    ;
    null;
    return;
    }
  else {
    const v1215 = v1113[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:214:33:application', stdlib.UInt_max, '0')];
    const v1216 = v1215[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:214:33:application', stdlib.UInt_max, '0')];
    ;
    ;
    null;
    return;
    }
  
  
  
  };
export async function Auctioneer_acceptSale(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Auctioneer_acceptSale expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Auctioneer_acceptSale expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _Auctioneer_acceptSale6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Auctioneer_rejectSale(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Auctioneer_rejectSale expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Auctioneer_rejectSale expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _Auctioneer_rejectSale6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Auctioneer_stopAuction(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Auctioneer_stopAuction expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Auctioneer_stopAuction expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Auctioneer_stopAuction7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bidder_bid(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder_bid expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder_bid expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Bidder_bid7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bidder_optIn(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder_optIn expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder_optIn expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Bidder_optIn7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Auctioneer_acceptSale()byte`, `Auctioneer_rejectSale()byte`, `Auctioneer_stopAuction()(uint64,uint64,uint64)`, `Bidder_bid(uint64)(address,uint64)`, `Bidder_optIn()byte`],
    pure: [],
    sigs: [`Auctioneer_acceptSale()byte`, `Auctioneer_rejectSale()byte`, `Auctioneer_stopAuction()(uint64,uint64,uint64)`, `Bidder_bid(uint64)(address,uint64)`, `Bidder_optIn()byte`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAQAAEGBKCNBggFIKD3NpaHyKoBs7bPiAjSuNG7DqCbvIEBBwLAhD0mBQEBAQAABWFwcElEBPqGEQkiNQAxGEEJaipkSSJbNQFJIQVbNQKBEFs1CDYaABdJQQB3IjUEIzUGSSEJDEAAPkkhCgxAACNJIQsMQAAOIQsSRCo1/yk0/1BCA0shChJEKjX/KDT/UEIDPSEJEkQqNf+AAQI0/1AhBa9QQgBKSSEMDEAAECEMEkQ2GgE1/yg0/1BCADOBoIvqTBJEKjX/KTT/UCEFr1BCAB42GgIXNQQ2GgM2GgEXSSUMQAOQSSEGDEAC4iEGEkQhDTQBEkQ0BEkiEkw0AhIRRClkKGRQSTUDSUpKSkpKSkpJVwAgNf8hB1s1/oEoWzX9SCo1/IEwWzX7VzggNfqBWFs1+YFgWzX4V2gUNfeBfFs19leEGDX1V5wgNfRXvAEXNfNXvQEXNfKBvgFbNfFXxhE18IHXAVs170k1BTXugAQArHLNNO5QsDTuIlVJIwxAAfZJIQ4MQAE9IQ4SRDTvIQ8INe0hD4gIMjTtIQgPQQCeNO0hCAk17LEisgEhCLIII7IQNPqyB7M07CEED0EASbEisgEhBLIII7IQNP+yB7OACQAAAAAAAAQbAbAoNQc0/zT+NP00/DT7NPo0+TT4NPc09jT1NPQ08zTyNPEyBjTwNOwhBAlCBRKACQAAAAAAAAQiAbAoNQc0/zT+NP00/DT7NPo0+TT4NPc09jT1NPQ08zTyNPEyBjTwNOxCBNw07SEED0EASbEisgEhBLIII7IQNP+yB7OACQAAAAAAAAQvAbAoNQc0/zT+NP00/DT7NPo0+TT4NPc09jT1NPQ08zTyNPEyBjTwNO0hBAlCBIuACQAAAAAAAAQ2AbAoNQc0/zT+NP00/DT7NPo0+TT4NPc09jT1NPQ08zTyNPEyBjTwNO1CBFVINO5XAQg17TTtF0k17DTxDUQ07zTsCDXrNOyIBueACAAAAAAAAAOgNPQ08RZQULA09DTxFlA1BzTzQQAxJwQ0+xZQNOwWULA0/zT+NP00/DT7NPo0+TT4NPc09jT1MQAiNPI07DIGNPA060ID57EisgE08bIII7IQNPSyB7MnBDT7FlA07BZQsDT/NP40/TT8NPs0+jT5NPg09zT2NPUxACI08jTsMgY08DTrNPEJQgOjSIAEuKNKizT7FlA08RZQsDT7FjIGFlA08RZQNe2ACAAAAAAAAAMxNO1QsDTtNQc0/zT+NP00/DT7NPo0+TT4NPc09jTtNPQ08yI08TIGNPA070IDTkgkNAESRDQESSISTDQCEhFEKWQoZFBJNQNJSkpKVwAgNf8hB1s1/lcoFDX9VzwgNfyBXFs1+4FkWzX6V2wRNfmBfVs1+Ek1BTX3gASue9QGNPdQsDT3IlVAACaACQAAAAAAAASEAbAoNQc0/zT+NP00/DT7NPojIjIGNPk0+EID6IAJAAAAAAAABKIAsCk1BzT/NP40/TT8NPs0+iIiMgY0+TT4QgPCSSMMQAHxIxJEsSKyASSyEDQIshizIzQBEkQ0BEkiEkw0AhIRRClkKGRQSTUDSUpJVwAgNf8hB1s1/lcolDX9gbwBWzX8V8QRNfuABJqLkXSwNPtXABE1+iM0/ogFETT/MQASRCo1+Ss0/BZQAzX3Mgp4NfYyCmA09gkWNfWxIrIBJLIQNPyyGIAEbe29gLIaszIKYDT2CTT1FwkWtwA+VwQAUDX4gAgAAAAAAAACszT4ULA0+Ek19yJbNfY09yEFWzX1IjT2EkQrNPwWUAM18zIKeDXyMgpgNPIJFjXxsSKyASSyEDT8shiABGyt5G+yGrMyCmA08gk08RcJFrcAPlcEAFA19IAIAAAAAAAAAsA09FCwNPRJNfMiWzXyIjTyEkQxGDXxNP1XgBQ18Cs0/BZQAzXuMgp4Ne0yCmA07QkWNeyxIrIBJLIQNPyyGIAEuXDLpLIaNPUWNPEWUDIGFlA0/1A08FA0/VcIUFA0/Vd4CFA0/hZQshqzMgpgNO0JNOwXCRa3AD5XBABQNe+ACAAAAAAAAALTNO9QsDTvSTXuIls17SI07RJEgASPDzUGNPUWUDT/ULA0/zT+NPw0+TT1NPNXCCAyBjTxNPAyBjT9IlsIgRivNP8jIyIyBjT7NPpJIlsjCBZcAFwANPY08gg07QhCALBIgcCaDIgDWLEisgEkshAishiABgcxADIJErIegAEHsh+ztD01CCI0ARJENARJIhJMNAISEURJNQVJSSJbNf9XCJQ1/oGcAVs1/YAE7SmI4zT/FlA0/lA0/RZQsIERr0k1/ElXABEhBa9cAFwANfshBIgC7LEisgEishIlshAyCrIUNP+yEbMxADT/FlA0/lA0/RZQNPtQKUsBVwB/ZyhLAVd/VmdIIzUBMgY1AkICVzX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU19DXzNfI18TXwNe817jT9NPcONPsQQQBXNO407xZQNPAWUDTxUDTyFlA081A09BZQNPUWUDT2UDT3FlA0+FA0+VA0+hZRBwhQKFA0/BZQNP5QNP8WUClLAVcAf2coSwFXf2BnSCENNQEyBjUCQgHRKzTwFlADNewyCng16zIKYDTrCRY16rEisgEkshA08LIYgASi8NoBsho0+LIaszIKYDTrCTTqFwkWtwA+VwQAUDXtgAgAAAAAAAAEQzTtULA07Uk17CJbNesiNOsSRIAEteyPATTyFlA0/BZQNO5QNPUWUDT0FlCwNO407zT2NPk0/DT9gTIIIyM0/TT+NP806whCAAA1/zX+Nf01/DX7Nfo1+TX4Nfc19jX1NP00+g40/BBBADQ09TT2FlA091A0+FA0+RZQNPoWUDT+UDT/FlApSwFXAH9nKEsBV38GZ0gkNQEyBjUCQgDnNPtBAFuxIrIBNP5XABEiW7ISJbIQNPiyFDT2shGzsSKyATT/sggjshA09bIHs4AE7qaZxDT3UDT5FlA09VA0+FA09hZQsLEisgEishIlshAyCbIVMgqyFDT2shGzQgBbsSKyATT+VwARIluyEiWyEDT1shQ09rIRs7EisgE0/7III7IQNPiyB7OABKVPms0091A0+RZQNPVQNPhQNPYWULCxIrIBIrISJbIQMgmyFTIKshQ09rIRs0IAADEZIQYSRLEisgEkshA0CLIYIQayGbOxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWNAgWUFBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIEDMTUSRCIxNhJEIjE3EkQiNQEiNQIiNQhC/6c0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECUSRDgRTwISRDgSEkSJ`,
  appClear: `Bw==`,
  companionInfo: {
    publish1: 1
    },
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 223,
  unsupported: [],
  version: 11,
  warnings: [`Step 1 calls a remote object at /app/src/contracts/auction.rsh:100:39:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 1 calls a remote object at /app/src/contracts/auction.rsh:84:48:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 1 calls a remote object at /app/src/contracts/auction.rsh:85:68:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 2 calls a remote object at /app/src/contracts/auction.rsh:168:37:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"components":[{"internalType":"uint256","name":"_deadline","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes16","name":"elem2","type":"bytes16"}],"internalType":"struct T8","name":"_description","type":"tuple"},{"internalType":"address payable","name":"_owner","type":"address"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"bytes20","name":"_title","type":"bytes20"}],"internalType":"struct T9","name":"elem2","type":"tuple"},{"internalType":"address payable","name":"elem3","type":"address"}],"internalType":"struct T10","name":"v4006","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"components":[{"internalType":"uint256","name":"_deadline","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes16","name":"elem2","type":"bytes16"}],"internalType":"struct T8","name":"_description","type":"tuple"},{"internalType":"address payable","name":"_owner","type":"address"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"bytes20","name":"_title","type":"bytes20"}],"internalType":"struct T9","name":"elem2","type":"tuple"},{"internalType":"address payable","name":"elem3","type":"address"}],"indexed":false,"internalType":"struct T10","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T5","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Auctioneer_acceptSale0_428","type":"bool"},{"internalType":"bool","name":"_Auctioneer_rejectSale0_428","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T6","name":"which","type":"uint8"},{"internalType":"bool","name":"_Auctioneer_stopAuction0_123","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_Bidder_bid0_123","type":"tuple"},{"internalType":"bool","name":"_Bidder_optIn0_123","type":"bool"}],"internalType":"struct T6","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T7","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1051","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1058","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1071","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1078","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T17","name":"v0","type":"tuple"}],"name":"_reach_oe_v1091","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1156","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1186","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T14","name":"v0","type":"tuple"}],"name":"_reach_oe_v691","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"indexed":false,"internalType":"struct T15","name":"v0","type":"tuple"}],"name":"_reach_oe_v704","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T17","name":"v0","type":"tuple"}],"name":"_reach_oe_v723","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"blockEnded","type":"uint256"},{"internalType":"uint256","name":"lastBid","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v817","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T1","name":"v0","type":"tuple"}],"name":"_reach_oe_v928","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes20","name":"v0","type":"bytes20"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v2","type":"address"},{"indexed":false,"internalType":"address payable","name":"v3","type":"address"},{"indexed":false,"internalType":"address payable","name":"v4","type":"address"}],"name":"accepted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"}],"name":"bidSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"}],"name":"created","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v2","type":"address"},{"indexed":false,"internalType":"address payable","name":"v3","type":"address"},{"indexed":false,"internalType":"uint256","name":"v4","type":"uint256"}],"name":"down","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"}],"name":"endSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes20","name":"v0","type":"bytes20"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v2","type":"address"},{"indexed":false,"internalType":"address payable","name":"v3","type":"address"},{"indexed":false,"internalType":"address payable","name":"v4","type":"address"}],"name":"rejected","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Auctioneer_acceptSale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Auctioneer_rejectSale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Auctioneer_stopAuction","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"blockEnded","type":"uint256"},{"internalType":"uint256","name":"lastBid","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v3996","type":"uint256"}],"name":"Bidder_bid","outputs":[{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T1","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Bidder_optIn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"v4008","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Auctioneer_acceptSale0_428","type":"bool"},{"internalType":"bool","name":"_Auctioneer_rejectSale0_428","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"internalType":"struct T4","name":"v4023","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T6","name":"which","type":"uint8"},{"internalType":"bool","name":"_Auctioneer_stopAuction0_123","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_Bidder_bid0_123","type":"tuple"},{"internalType":"bool","name":"_Bidder_optIn0_123","type":"bool"}],"internalType":"struct T6","name":"elem1","type":"tuple"}],"internalType":"struct T7","name":"v4035","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x601f196001600160401b03608062003fa038819003601f8101851683018481118482101762000555578392829160405283398101036101408112620006405760405191608083018381108582111762000555576040528051835262000067602082016200067d565b602084015260e0603f1983011262000640576060604051926200008a8462000645565b60408301518452605f1901126200064057604051620000a98162000661565b606082015181526080820151602082015260a08201516001600160801b031981168103620006405760408201526020830152620000e960c082016200067d565b604083015260e08101516060830152610100810151906001600160601b0319821682036200064057826101209260806200012b9501526040850152016200067d565b60608201524360035560405160c081018181108482111762000555576040526000815260006020820152600060408201526200016662000692565b606082015260405190604082019082821085831117620005555760009260a0926040528381528360208201526080820152015260405190620001a88262000661565b620001b262000692565b825260208201620001c2620006c2565b8152620001ce620006c2565b604084015260ff6004541662000627577faf21c54356e0cb238c07cd6d2a0ba48aa0a87eb5fccc9285719045c4cfe7472b6101606040513381528451602082015260018060a01b036020860151166040820152620002356040860151606083019062000709565b60608501516001600160a01b0316610140820152a1815180159081156200061a575b50156200060157600083515260006020845101526000604084510152825181515251805160406020820151910151151560405191620002968362000661565b6000835260208301526040820152620002ae620006c2565b9160005b60018110620005b15750508152604083015234620005985760405190620002d98262000645565b60008252600060208301526040820192604051620002f78162000645565b600081526200030562000692565b60208201526000604082015260006060820152600060808201528452604060608401916000835260808501936200033b620006c2565b855233865260018060a01b036020820151166020870152828101518752606060018060a01b0391015116835201518252620003a16001948560005543865560405194336020870152602060018060a01b0391015116604086015251606085019062000709565b516001600160a01b03166101408301525160008361016084015b8183106200056b57505050506101a081526101c08101818110848211176200055557604052805192831162000555576002548281811c911680156200054a575b60208210146200053457601f8111620004c7575b50602090601f84116001146200045e578394509083929160009462000452575b50501b916000199060031b1c1916176002555b6040516138079081620007998239f35b0151925038806200042f565b919383169160026000528360206000209360005b87828210620004ad5750501062000493575b505050811b0160025562000442565b015160001960f88460031b161c1916905538808062000484565b848601518755909501946020948501948793500162000472565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f850160051c8101916020861062000529575b601f0160051c019083905b8281106200051c5750506200040f565b600081550183906200050c565b909150819062000501565b634e487b7160e01b600052602260045260246000fd5b90607f1690620003fb565b634e487b7160e01b600052604160045260246000fd5b606060209160408651805183528481015185840152015115156040820152019301910190918490620003bb565b60405163100960cb60e01b815260096004820152602490fd5b620005bd818362000770565b51620005ca828662000770565b52620005d7818562000770565b506000198114620005eb57600101620002b2565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b815260086004820152602490fd5b9050600154143862000257565b60405163100960cb60e01b815260076004820152602490fd5b600080fd5b60a081019081106001600160401b038211176200055557604052565b606081019081106001600160401b038211176200055557604052565b51906001600160a01b03821682036200064057565b60405190606082016001600160401b03811183821017620005555760405260006040838281528260208201520152565b6040519060208083016001600160401b0381118482101762000555576040528260005b828110620006f257505050565b8290620006fe62000692565b8184015201620006e5565b8051825260208082015180518285015290810151604080850191909152908101516001600160801b031916606080850191909152908201516001600160a01b03166080808501919091529082015160a084015201516001600160601b03191660c090910152565b906001811015620007825760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80631e93b0f1146100f45780632d2ae6eb146100eb57806334d3e29e146100e25780634a96cc0b146100d9578063573b8510146100d05780636f49e231146100c757806383230757146100be578063980e632f146100b5578063ab53f2c6146100ac578063b6279224146100a35763d2526fd90361000e5761009e610c29565b61000e565b5061009e610bad565b5061009e610aff565b5061009e610a72565b5061009e610a53565b5061009e610a06565b5061009e610295565b5061009e61023b565b5061009e6101ac565b5061009e610143565b5034610113576000366003190112610113576020600354604051908152f35b600080fd5b6040809180518452602081015160208501520151910152565b6060810192916101419190610118565b565b50600036600319011261011357610158610eca565b50606080610164610f20565b61019b81610170610ffa565b6020810190600082515251151560208251015261018b610ffa565b9060008252516020820152611b0f565b01516101aa6040518092610118565bf35b506080366003190112610113576101c1610f20565b604051906101ce82610cc6565b6004358252606036602319011261011357604051916101ec83610cee565b6024359260028410156101135761022b93815260443561020b816110a9565b602082015260643561021c816110a9565b604082015260208201526112a6565b60405160008152602090f35b0390f35b50600036600319011261011357602060a0610254610f20565b61028981610260610ffa565b85810190600282515251151560608251015261027a610ffa565b90600082525186820152611b0f565b01511515604051908152f35b506020366003190112610113576102aa610f20565b5061022b6102b7366133f6565b6102bf61347b565b6102da6102d56102d160045460ff1690565b1590565b61151f565b60408051338152835160208201527fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee815969190a161031a60016000541461153f565b610349610337610328610db4565b60208082518301019101613539565b925180159081156109fa575b5061155f565b610353341561157f565b61037161036c6103666020850151610b74565b336136db565b61159f565b61038d3360018060a01b036103868551610b74565b16146115bf565b6103a461039d6020840151610b74565b3090612f1b565b610160820152476101408201526103c3600160ff196004541617600455565b7fedb83b071e2c6841276938c360832f49c5060d312edc2e0a12f9982452a232526104c4600080604051632cfbfba760e01b60208201526004815261040781610cc6565b61041c6104176060890151610b74565b610b74565b82602083519301915af1610438610431612612565b8092612dbc565b5061044860ff1960045416600455565b6104766104613061045c6020890151610b74565b612f1b565b610160860151808203610180880152146115df565b61049a47610140860151900391602086019283515260208082518301019101612f0c565b60208251015251806040850152604051918291829190916020806040830194805184520151910152565b0390a16104d6604082015151156115ff565b6104e73061045c6020850151610b74565b6101c0820152476101a0820152610506600160ff196004541617600455565b7ff7d61f4150a17b9efad6fd4c07092d4daf47fd7c7a9d7067c87176c71749823761060c60008060405160208101637541dda360e11b81526004825261054b82610cc6565b8261055c61041760608b0151610b74565b9251925af161057361056c612612565b8092612dec565b5061058360ff1960045416600455565b6105ac6105973061045c6020890151610b74565b6101c08601518082036101e08801521461161f565b6105dd6105d3476101a087015190039260608701938451526020808251830101910161362e565b6020835101611287565b516080840181905260408051825181526020928301516001600160a01b03169281019290925290918291820190565b0390a161061e6080820151511561163f565b61062b3060a08301611287565b60206040820151015160c08201515261065761064a60a0830151610b74565b602060c084015101611287565b43604060c0830151015261067b61066e8351610b74565b606060c084015101611287565b60408201516080015161069f906001600160601b031916608060c084015101611296565b60206040830151015160a060c0830151015260606040830151015160c08083015101526106df6106d26020840151610b74565b60e060c084015101611287565b6106f03061045c6020850151610b74565b6102208201527f3afccc8164821e339b73078ac8575b6c79850781f53eca51d8238e9cbed9d8356107ef476102008401908152610735600160ff196004541617600455565b61079560008060c08701516040519061077182610763602082019363063eabe760e11b855260248301613642565b03601f198101845283610d91565b8261078261041760608d0151610b74565b9251925af161078f612612565b90612e1c565b506107a560ff1960045416600455565b6107ce6107b93061045c6020890151610b74565b6102208601518082036102408801521461165f565b479051900360e084019081515251806101008501526040519182918261265f565b0390a1610802610100820151511561167f565b7fb758eeaad548e48420d76d670d08a2b8b63cf903c04cf64fbe368cbb7830eb676020604083015101516108368451610b74565b604080519283526001600160a01b0391909116602083015290a16000610120820151526000602061012083015101526000604061012083015101526109d4608061087e611a64565b9361089261088c8251610b74565b86611287565b6108ab6108a26020830151610b74565b60208701611287565b6108c46108bb6060830151610b74565b60408701611287565b6108da6108d18551151590565b15156060870152565b604084015160209081015186840152828501510151610905906001600160a01b031660a08701611287565b4360c086015261092461091b60a0860151610b74565b60e08701611287565b6040810151820151610944906001600160601b0319166101008701611296565b61095360408201515143612da8565b61012086015261012084015161014086015261097c6109728251610b74565b6101608701611287565b600161018086015260016101a086015260006101c0860152436101e086015201518051906109cf600183510192604060208201519101511515906109be610e5d565b948552602085015215156040840152565b61375d565b610200830152610100604082015151608083015151019101515101610220820152612996565b90506001541438610343565b5060003660031901126101135760206040610a1f610f20565b61028981610a2b610f5f565b8581019060018251525115158582510152610a44610f5f565b906000825251868201526112a6565b5034610113576000366003190112610113576020600154604051908152f35b5060a036600319011261011357610a87610f20565b60405190610a9482610cc6565b600435825260803660231901126101135760405191610ab283610d09565b6024359260038410156101135761022b938152604435610ad1816110a9565b6020820152610adf36613416565b6040820152608435610af0816110a9565b60608201526020820152611b0f565b503461011357600080600319360112610b71578054610b1c610db4565b906040519283918252602090604082840152835191826040850152815b838110610b5a57505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610b39565b80fd5b6001600160a01b031690565b6001600160a01b03169052565b81516001600160a01b031681526020918201519181019190915260400190565b50602036600319011261011357610bc2610f07565b506102376080610bd0610f20565b610c1b81604051610be081610cc6565b604051610bec81610d24565b6000815281526020810190610bff610fa9565b825260043581515260018251525160408251015261018b610ffa565b015160405191829182610b8d565b50600036600319011261011357602080610c41610f20565b61028981610c4d610f5f565b8481019060008251525115158582510152610c66610f5f565b906000825251858201526112a6565b90600182811c92168015610ca5575b6020831014610c8f57565b634e487b7160e01b600052602260045260246000fd5b91607f1691610c84565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b03821117610ce157604052565b610ce9610caf565b604052565b606081019081106001600160401b03821117610ce157604052565b608081019081106001600160401b03821117610ce157604052565b602081019081106001600160401b03821117610ce157604052565b60c081019081106001600160401b03821117610ce157604052565b61010081019081106001600160401b03821117610ce157604052565b60a081019081106001600160401b03821117610ce157604052565b601f909101601f19168101906001600160401b03821190821017610ce157604052565b6040519060008260025491610dc883610c75565b808352600193808516908115610e3c5750600114610dee575b5061014192500383610d91565b600260009081526000805160206137db83398151915294602093509091905b818310610e24575050610141935082010138610de1565b85548884018501529485019487945091830191610e0d565b905061014194506020925060ff191682840152151560051b82010138610de1565b6040519061014182610cee565b6040519061022082016001600160401b03811183821017610ce157604052565b6040519061024082016001600160401b03811183821017610ce157604052565b6040519061026082016001600160401b03811183821017610ce157604052565b60405190606082016001600160401b03811183821017610efa575b60405260006040838281528260208201520152565b610f02610caf565b610ee5565b60405190610f1482610cc6565b60006020838281520152565b60405190610f2d82610d3f565b600060a083828152826020820152826040820152610f49610eca565b6060820152610f56610f07565b60808201520152565b60405190610f6c82610cc6565b81600081526020610f7b610eca565b910152565b50634e487b7160e01b600052602160045260246000fd5b60021115610fa157565b610141610f80565b60405190608082016001600160401b03811183821017610fed575b6040526000606083828152826020820152604051610fe181610d24565b83815260408201520152565b610ff5610caf565b610fc4565b6040519061100782610cc6565b81600081526020610f7b610fa9565b60031115610fa157565b9092916040602060809260a085019660018060a01b03168552805182860152015180516002811015611066575b8285015260208101511515606085015201511515910152565b61106e610f80565b61104d565b51906001600160a01b038216820361011357565b6001600160601b03191690565b51906001600160601b03198216820361011357565b8015150361011357565b5190610141826110a9565b9080601f83011215610113576040918251926110d984610d24565b836060938484019381851161011357915b8483106110fa5750505050505090565b8583830312610113578351869161111082610cee565b8451825260209182860151838201528686015161112c816110a9565b878201528152019201916110ea565b6101408183031261011357610120906111b56040519361115a85610d5a565b61116383611073565b855261117160208401611073565b602086015261118260408401611094565b604086015261119360608401611073565b60608601526080830151608086015260a083015160a086015260c083016110be565b60c0840152015160e082015290565b5160028110156111d15790565b6111d9610f80565b90565b604051906111e982610d24565b8160005b602081106111f9575050565b602090611204610eca565b81840152016111ed565b6040519061016082016001600160401b0381118382101761127a575b604052816101406000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152826101008201526112706111dc565b6101208201520152565b611282610caf565b61122a565b6001600160a01b039091169052565b6001600160601b03199091169052565b90611320906112c26112bd6102d160045460ff1690565b61169f565b6040907f109eb76f82f8872ff024177afedebf0c35323f0a478a1f78956f6ddd62aa15768251806112f4873383611020565b0390a16113056006600054146116bf565b61130d610db4565b602093818580809451830101910161113b565b9461133681518015908115611513575b506116df565b0161134181516111c4565b61134a81610f97565b6114465750926113e760e0926113a08561014197611368341561171f565b8351600181527f8950a5ec8266469bf642b0dc7e29c60fe05d18a0c5783c133892d57bd3715b5f9080602081015b0390a10160019052565b6113d36113ab61120e565b956113bf6113b98651610b74565b88611287565b6113cb81860151610b74565b908701611287565b6113df81840151611087565b908501611296565b6114006113f76060830151610b74565b60608501611287565b6080810151608084015260a081015160a084015261142160c0840160019052565b6000828401524361010084015260c081015161012084015201516101408201526130c9565b611455600191959295516111c4565b61145e81610f97565b1461146a575b50505050565b6114ba82600060e09461150a9761148134156116ff565b8151600081527f64f8fe62ffb8778cf7a405f914c63688fc5d24a9a23f23f1dde61d371e9eefde90602090a101526113d36113ab61120e565b6114ca6113f76060830151610b74565b6080810151608084015260a081015160a0840152600060c08401526000828401524361010084015260c081015161012084015201516101408201526130c9565b38808080611464565b90506001541438611330565b1561152657565b60405163100960cb60e01b8152600a6004820152602490fd5b1561154657565b60405163100960cb60e01b8152600b6004820152602490fd5b1561156657565b60405163100960cb60e01b8152600c6004820152602490fd5b1561158657565b60405163100960cb60e01b8152600d6004820152602490fd5b156115a657565b60405163100960cb60e01b8152600e6004820152602490fd5b156115c657565b60405163100960cb60e01b8152600f6004820152602490fd5b156115e657565b60405163100960cb60e01b815260106004820152602490fd5b1561160657565b60405163100960cb60e01b815260126004820152602490fd5b1561162657565b60405163100960cb60e01b815260136004820152602490fd5b1561164657565b60405163100960cb60e01b815260156004820152602490fd5b1561166657565b60405163100960cb60e01b815260166004820152602490fd5b1561168657565b60405163100960cb60e01b815260186004820152602490fd5b156116a657565b60405163100960cb60e01b815260196004820152602490fd5b156116c657565b60405163100960cb60e01b8152601a6004820152602490fd5b156116e657565b60405163100960cb60e01b8152601b6004820152602490fd5b1561170657565b60405163100960cb60e01b8152601d6004820152602490fd5b1561172657565b60405163100960cb60e01b8152601c6004820152602490fd5b1561174657565b60405163100960cb60e01b8152601e6004820152602490fd5b1561176657565b60405163100960cb60e01b8152601f6004820152602490fd5b1561178657565b60405163100960cb60e01b815260206004820152602490fd5b156117a657565b602460405163100960cb60e01b8152816004820152fd5b156117c457565b60405163100960cb60e01b815260226004820152602490fd5b156117e457565b60405163100960cb60e01b815260236004820152602490fd5b1561180457565b60405163100960cb60e01b815260216004820152602490fd5b1561182457565b60405163100960cb60e01b815260256004820152602490fd5b1561184457565b60405163100960cb60e01b815260276004820152602490fd5b6040519061186a82610d3f565b600060a083611877610eca565b815260405161188581610d24565b838152602082015282604082015261189b610f07565b60608201528260808201520152565b9092916060602060a09260c0850196600180861b031685528051828601520151805160038110156118fa575b60408501526020810151151582850152604081015151608085015201511515910152565b611902610f80565b6118d6565b91908260609103126101135760405161191f81610cee565b604080829480518452602081015160208501520151910152565b906102a08282031261011357610280611950610e6a565b9261195a81611073565b845261196860208201611073565b602085015261197960408201611073565b604085015261198a606082016110b3565b6060850152608081015160808501526119a560a08201611073565b60a085015260c081015160c08501526119c060e08201611073565b60e08501526101006119d3818301611094565b9085015261012080820151908501526101406119f184828401611907565b908501526101a0611a03818301611073565b610160860152611a4a6101c094611a1b8685016110b3565b6101808801526101e092611a308486016110b3565b9088015261020095868501519088015261022084016110be565b9085015201519082015290565b5160038110156111d15790565b611a6c610e8a565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e08401528061010084015280610120840152611ab2610eca565b6101408401528061016084015280610180840152806101a0840152806101c0840152806101e0840152611ae36111dc565b610200840152610220830152565b506040513d6000823e3d90fd5b908152602081019190915260400190565b611b9190611b1b61185d565b92611b33611b2e6102d160045460ff1690565b61173f565b60407fc08304f8842fdf9fe5c32b7c33d0b2bb36997def29e0c6d0fa626741dcab6010815180611b648633836118aa565b0390a16000611b76600782541461175f565b611b7e610db4565b6020958187808094518301019101611939565b94611ba7815180159081156125af575b5061177f565b0195611bb38751611a57565b611bbc81611016565b611d89576101419650611bcf34156117fd565b60808501611caa8151946101c0967f772252bb3a260bb19eae21a8a9243292763a37c5bcfc38c9f961eb102482f434888a0197885190611c13855192839283611afe565b0390a18351855152438a86510152865182865101527fe83712c8faca6e531d069feaad32d81db7d73856355a5d4d1cf7d03d9791361b611c598651845191829182610131565b0390a160608551910152611c96611c6e611a64565b99611c82611c7c8b51610b74565b8c611287565b611c8e818b0151610b74565b908b01611287565b611ca281890151610b74565b908901611287565b611cc3611cba6060880151151590565b15156060890152565b516080870152611ce2611cd960a0870151610b74565b60a08801611287565b60c085015160c0870152611d05611cfc60e0870151610b74565b60e08801611287565b611d1f610100611d1781880151611087565b908801611296565b610120808601519087015251610140860152611d436101606113cb81870151610b74565b611d5d610180611d5581870151151590565b151590870152565b6101a085015251908301526101e043818401528101519061020091828401520151610220820152612996565b9094956001611d9b8296949651611a57565b611da481611016565b0361212c5784905101518682019080825251956101c092611dca848601988951106117bd565b610200958686015197611deb8551998a5101998285019a8b525134146117dd565b61016091608083890194611e0e6060611e048851610b74565b9201918251611287565b8d8d5190825101527f61914602faa5e0e5002f8b86509375ec8b9ce855961318b1062b0488e25bbf51611e478251865191829182610b8d565b0390a15191015261018092611e5e84890151151590565b15611fae575090919293949596979850608087019081518651518251918291611e879183611afe565b036000805160206137bb83398151915291a1611ea1611a64565b9a8851611ead90610b74565b611eb7908d611287565b80890151611ec490610b74565b611ecf918d01611287565b80880151611edc90610b74565b611ee7918c01611287565b6060878101511515908b01525160808a015260a0860151611f0790610b74565b611f149060a08b01611287565b60c086015160c08a015260e0860151611f2c90610b74565b611f399060e08b01611287565b61010080870151611f4990611087565b611f54918b01611296565b61012086810151908a015261014080870151908a0152611f779033908a01611287565b8701526101a08381015115151515908701525151908501526101e09043828601520151908301525161022082015261014190612996565b8480808d611fc0610417839651610b74565b905190828215612123575bf115612116575b608087019081518651518251918291611feb9183611afe565b036000805160206137bb83398151915291a1612005611a64565b9b8c895161201290610b74565b61201b91611287565b8089015161202890610b74565b612033918e01611287565b8088015161204090610b74565b61204b918d01611287565b6060878101511515908c01525160808b015260a086015161206b90610b74565b6120789060a08c01611287565b60c086015160c08b015260e086015161209090610b74565b61209d9060e08c01611287565b610100808701516120ad90611087565b6120b8918c01611296565b61012086810151908b015261014080870151908b01526120db9033908b01611287565b8801526101a08381015115151515908801525151908601526101e0904382870152015190840152519051900361022082015261014190612996565b61211e611af1565b611fd2565b506108fc611fcb565b61213e60029197969594929751611a57565b61214781611016565b14612155575b505050505050565b620f42406102009381858501510192612177608093848b01958652341461179f565b8351620dbba094908581106124635750620dbb9f199051019660a0809a01978852808080808d8a01986121ad6104178b51610b74565b82f115612456575b8751620186a09081116123695761228b936122248c6122939895856123519f99968080612264988f6104176121ea9151610b74565b82f11561235c575b8351600181527ff8a3fc5581ede987458851f211ecd664a40c6a0372c486e8f3e742daa269f3bc908060208101611396565b61225861222f611a64565b9b6122448d61223e8c51610b74565b90611287565b612250818b0151610b74565b908d01611287565b611c8e81890151610b74565b61227d6122746060880151151590565b151560608b0152565b808601519089015251610b74565b908601611287565b60c081015160c08501526122b66122ad60e0830151610b74565b60e08601611287565b6122d06101006122c881840151611087565b908601611296565b610120808201519085015261014080820151908501526122f861016061228b81840151610b74565b61231261018061230a81840151151590565b151590860152565b6123246101a061230a81840151151590565b6101c080820151908501526101e09043828601520151908301526201869f19905101610220820152612996565b38808080808061214d565b612364611af1565b6121f2565b5050928892612264836122246124519c6123b3987fb6b0868dbd66e91b1b18dc1e72d3dc016c6f282deeb8c1a9da524c5a951db05d61228b98518061139681906001602083019252565b60c081015160c08501526123cd6122ad60e0830151610b74565b6123df6101006122c881840151611087565b6101208082015190850152610140808201519085015261240761016061228b81840151610b74565b61241961018061230a81840151151590565b61242b6101a061230a81840151151590565b6101c080820151908501526101e090438286015201519083015251610220820152612996565b612351565b61245e611af1565b6121b5565b929950969293509190620186a09081116125455760a0612507938380806124519d966124d0966124966104178d51610b74565b82f115612538575b8351600181527f30e41ad88d1079e0b59d976d9a8919b8549253763d18e30143e70aa9d0d26075908060208101611396565b6124fb6124db611a64565b976124ef6124e98751610b74565b8a611287565b611ca281870151610b74565b6113cb81850151610b74565b6125176108d16060840151151590565b808201519085015261229361252f60a0830151610b74565b60a08601611287565b612540611af1565b61249e565b5050866124d060a0612587937fb20fd2becc995896e38609ce089fdcd4469d450654095b998227c1c2b46914f16124519b518061139681906001602083019252565b6125976108d16060840151151590565b80820151908501526123b361252f60a0830151610b74565b90506001541438611ba1565b6040519060a082016001600160401b03811183821017612605575b60405260006080836125e6610f07565b81526125f0610f07565b60208201528260408201528260608201520152565b61260d610caf565b6125d6565b3d1561265a573d906001600160401b03821161264d575b60405191612641601f8201601f191660200184610d91565b82523d6000602084013e565b612655610caf565b612629565b606090565b91909160208060408301948051845201511515910152565b61267f610e6a565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e084015280610100840152806101208401526126c5610eca565b6101408401528061016084015280610180840152806101a0840152806101c08401526126ef6111dc565b6101e0840152610200830152565b6000915b6001831061270e57505050565b600190606083519182518152602092838101518483015260408091015115159082015201920192019190612701565b9190916102806102a0820193612754838251610b80565b61276660208201516020850190610b80565b61277860408201516040850190610b80565b606081810151151590840152608081015160808401526127a060a082015160a0850190610b80565b60c081015160c08401526127bc60e082015160e0850190610b80565b610100818101516001600160601b0319169084015261012080820151908401526127ef6101408083015190850190610118565b610160810151906128066101a09283860190610b80565b612850610180820151926128216101c0948588019015159052565b820151926128366101e0948588019015159052565b8201519261020093848701528201516102208601906126fd565b0151910152565b818110612862575050565b60008155600101612857565b90601f821161287b575050565b6101419160026000526020600020906020601f840160051c830193106128a9575b601f0160051c0190612857565b909150819061289c565b80519091906001600160401b038111612989575b6128db816128d6600254610c75565b61286e565b602080601f8311600114612917575081929360009261290c575b50508160011b916000199060031b1c191617600255565b0151905038806128f5565b6002600052601f198316949091906000805160206137db833981519152926000905b878210612971575050836001959610612958575b505050811b01600255565b015160001960f88460031b161c1916905538808061294d565b80600185968294968601518155019501930190612939565b612991610caf565b6128c7565b61299e6125bb565b6101e082810180516101208086018051909591939260009110612d6957506101a086015115155b15612b1757505091612b129161022061014195612b04956129e4612677565b946129f86129f28451610b74565b87611287565b612a11612a086020850151610b74565b60208801611287565b612a2a612a216040850151610b74565b60408801611287565b612a43612a3a6060850151151590565b15156060880152565b60808301516080870152612a5d611cd960a0850151610b74565b60c083015160c0870152612a77611cfc60e0850151610b74565b612a89610100611d1781860151611087565b51908501526101408082015190850152612aab61016061228b81840151610b74565b612abd61018061230a81840151151590565b60016101a08501526101c08082015190850152610200928382015190850152015190820152612aec6007600055565b612af543600155565b6040519283916020830161273d565b03601f198101835282610d91565b6128b3565b9193509150610220846020610141960194612b3561039d8751610b74565b94606085019586524790604091828701908152612b5a600160ff196004541617600455565b612bec61014098612bbe600080898d81015182612bab6104178c805195612ba487612b966020820198634c344d9d60e01b8a5260248301610131565b03601f198101895288610d91565b0151610b74565b9251925af1612bb8612612565b90612e4c565b50612bce60ff1960045416600455565b612bdc3061045c8d51610b74565b905180820360808b01521461181d565b47905190038651527f14817e668478e3ea02591f98509635e568cd1de7a489763751f5ff93c53548b1612c2d6020885198019780895284519182918261265f565b0390a1612c3c8651511561183d565b60808401517f7e6ae24bb634ce12cd9f99dab8569ed4e4bcef7b3b7b716c00f9085228c025e36101c0860191825190612cbf612c788951610b74565b612c8560e08b0151610b74565b60c08b0151895194855260208501959095526001600160a01b039182166040850152166060830152608082019290925290819060a0820190565b0390a1612cf3612cea612cd061120e565b9a612ce4612cde8951610b74565b8d611287565b51610b74565b60208b01611287565b612d0e61010093612d0685880151611087565b908b01611296565b612d28612d1f610160870151610b74565b60608b01611287565b516080890152612d388151612d85565b60a0890152600160c0890152600160e0890152519087015261020082015190860152015190515101908201526130c9565b6129c5565b50634e487b7160e01b600052601160045260246000fd5b906032820191828111612d9b575b821061011357565b612da3612d6e565b612d93565b9190820191828111612d9b57821061011357565b15612dc45790565b805115612dd357805190602001fd5b60405163100960cb60e01b815260116004820152602490fd5b15612df45790565b805115612e0357805190602001fd5b60405163100960cb60e01b815260146004820152602490fd5b15612e245790565b805115612e3357805190602001fd5b60405163100960cb60e01b815260176004820152602490fd5b15612e545790565b805115612e6357805190602001fd5b60405163100960cb60e01b815260266004820152602490fd5b15612e845790565b805115612e9357805190602001fd5b60405163100960cb60e01b815260066004820152602490fd5b15612eb45790565b805115612ec357805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b15612ee45790565b805115612ef357805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b90816020910312610113575190565b600080916111d993826040519160208301926370a0823160e01b845260018060a01b03809216602482015260248152612f5381610cee565b5193165af1612f6a612f63612612565b8092612e7c565b5060208082518301019101612f0c565b906001811015612f8b5760051b0190565b634e487b7160e01b600052603260045260246000fd5b612fac600254610c75565b80612fb45750565b601f8111600114612fc757506000600255565b600260005261300c90601f0160051c6000805160206137db833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf612857565b6000602081208160025555565b6040519061302682610d5a565b8160e06000918281528260208201528260408201528260608201528260808201528260a08201526130556111dc565b60c08201520152565b91909161012060e061014083019460018060a01b0380825116855280602083015116602086015260018060601b0319604083015116604086015260608201511660608501526080810151608085015260a081015160a085015261285060c082015160c08601906126fd565b61010081015160a08201805190916000911061334c575060e082015115155b156131a657612b12612b049161014061014194613103613019565b926131176131118351610b74565b85611287565b6131306131276020840151610b74565b60208601611287565b6131496131406040840151611087565b60408601611296565b6131626131596060840151610b74565b60608601611287565b608082015160808501525160a084015261012081015160c0840152015160e082015261318e6006600055565b61319743600155565b6040519283916020830161305e565b5060c0810151156132dc578060207f12efbaf7d721b41313ea6075bffc8bcdaf87de4d387fbe499734cc9c29fe5c3792016132ad6131e48251610b74565b61321060608501916131f68351610b74565b6101208701515151916001600160a01b0390911690613351565b60008080806132226104178951610b74565b610140890151908282156132d3575bf1156132c6575b6132456040850151611087565b9261326961326261325b60808801519751610b74565b9351610b74565b9151610b74565b91604051958695866001600160601b0319909116815260208101919091526001600160a01b0391821660408201529181166060830152909116608082015260a00190565b0390a1600080556132be6000600155565b610141612fa1565b6132ce611af1565b613238565b506108fc613231565b8060207fdd5bfdf918cd86e0bb3c19331b121dcfa52fec6eee8c528aa1267c1106945687920161333361330f8251610b74565b6133198451610b74565b6101208501515151916001600160a01b0390911690613351565b6132ad6060830160008080806132226104178651610b74565b6130e8565b60405163a9059cbb60e01b602082019081526001600160a01b0393841660248301526044808301959095529381526133cd93600093849392849190608081016001600160401b038111828210176133d4575b6040525193165af16133bd6133b6612612565b8092612eac565b50602080825183010191016133e1565b1561011357565b6133dc610caf565b6133a3565b9081602091031261011357516111d9816110a9565b6020906003190112610113576040519061340f82610d24565b6004358252565b6020906063190112610113576040519061342f82610d24565b6064358252565b6040519061344382610d5a565b8160e060009182815282602082015282604082015282606082015282608082015261346c610eca565b60a08201528260c08201520152565b613483610eaa565b906000808352613491610f07565b602084015261349e610f07565b60408401526134ab610f07565b60608401526134b8610f07565b60808401528060a08401526134cb613436565b60c08401526134d8610f07565b60e08401526134e5610f07565b6101008401526134f3610eca565b610120840152806101408401528061016084015280610180840152806101a0840152806101c0840152806101e08401528061020084015280610220840152610240830152565b90818103906101a0821261011357604080519361355585610d76565b61355e81611073565b855261356c60208201611073565b602086015260e0603f1985011261011357606082519461358b86610d76565b828401518652605f190112610113578151936135a685610cee565b606082015185526080820151602086015260a0820151926001600160801b0319841684036101135785610140948261362698015260208301526135eb60c08401611073565b8183015260e083015160608301526136066101008401611094565b608083015286015261361b6101208201611073565b6060860152016110be565b608082015290565b90816020910312610113576111d990611073565b815181526020808301516001600160a01b039081168284015260408085015181850152606080860151909216918401919091526080808501516001600160601b0319169084015260a0808501518051918501919091529182015160c084015201516001600160801b03191660e0808301919091526101408201939261014192916101209160c08101516101008501520151910190610b80565b6040516323b872dd60e01b602082019081526001600160a01b039283166024830152306044830152600160648084019190915282526111d993600093849391929184919060a081016001600160401b03811182821017613750575b6040525193165af16133bd613749612612565b8092612edc565b613758610caf565b613736565b91906137676111dc565b9260005b600181106137795750508252565b8061378660019284612f7a565b516137918288612f7a565b5261379c8187612f7a565b5060001981146137ad575b0161376b565b6137b5612d6e565b6137a756fe472702956de3c3fddce2ef74f6a934374fc18113bc27ca360930d4b17b0ca03e405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 16288,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './src/contracts/auction.rsh:72:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './src/contracts/auction.rsh:224:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './src/contracts/auction.rsh:224:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './src/contracts/auction.rsh:176:58:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './src/contracts/auction.rsh:107:31:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Auctioneer_acceptSale": Auctioneer_acceptSale,
  "Auctioneer_rejectSale": Auctioneer_rejectSale,
  "Auctioneer_stopAuction": Auctioneer_stopAuction,
  "Bidder_bid": Bidder_bid,
  "Bidder_optIn": Bidder_optIn,
  "Seller": Seller
  };
export const _APIs = {
  Auctioneer: {
    acceptSale: Auctioneer_acceptSale,
    rejectSale: Auctioneer_rejectSale,
    stopAuction: Auctioneer_stopAuction
    },
  Bidder: {
    bid: Bidder_bid,
    optIn: Bidder_optIn
    }
  };
