<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Matrix Forex — ForexBill</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#EDECEA;--card:#fff;
  --G:#1C3829;--G2:#2D5A40;--Gp:#E8F2EC;--Gb:#B4D5C0;
  --txt:#0F1611;--txt2:#4A5568;--txt3:#9AA8A0;--bdr:#E2E8E4;
  --shadow:0 1px 4px rgba(0,0,0,.06),0 4px 16px rgba(0,0,0,.06);
  --shadow-lg:0 2px 8px rgba(0,0,0,.06),0 12px 40px rgba(0,0,0,.1);
  --r:16px;--rss:7px;
}
body{font-family:'DM Sans',sans-serif;background:var(--bg);color:var(--txt);min-height:100vh;font-size:14px;display:flex;flex-direction:column}
input[type=number]::-webkit-outer-spin-button,input[type=number]::-webkit-inner-spin-button{-webkit-appearance:none}
input[type=number]{-moz-appearance:textfield}

/* ── HEADER ── */
.hdr{height:60px;background:var(--G);display:flex;align-items:center;justify-content:space-between;padding:0 24px;position:sticky;top:0;z-index:200;box-shadow:0 2px 12px rgba(0,0,0,.18)}
.logo{display:flex;flex-direction:column;gap:1px}
.logo-main{font-family:'Playfair Display',serif;font-size:17px;color:#fff;font-weight:700;letter-spacing:-.2px;line-height:1.1}
.logo-sub{font-size:9px;color:rgba(255,255,255,.38);letter-spacing:.12em;text-transform:uppercase;font-weight:500}
.beta-badge{font-size:9px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.55);background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.18);padding:2px 7px;border-radius:20px;margin-left:7px;vertical-align:middle;white-space:nowrap}
.tab-grp{background:rgba(255,255,255,.1);border-radius:10px;padding:3px;display:flex;gap:2px}
.tab-btn{padding:6px 20px;border:none;border-radius:8px;font-family:inherit;font-size:12px;font-weight:600;cursor:pointer;transition:all .2s;color:rgba(255,255,255,.55);background:transparent}
.tab-btn.on{background:#fff;color:var(--G);box-shadow:0 1px 4px rgba(0,0,0,.14)}

/* ── LAYOUT ── */
.main-wrap{flex:1}
.wrap{display:grid;grid-template-columns:minmax(0,1fr) 420px;gap:20px;padding:22px;max-width:1180px;margin:0 auto;align-items:start}
@media(max-width:900px){.wrap{grid-template-columns:1fr}}
.lc{min-width:0}

/* ── CARDS ── */
.sc{background:var(--card);border-radius:var(--r);box-shadow:var(--shadow);padding:20px;margin-bottom:14px}
.sc-lbl{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--txt3);margin-bottom:14px}
.svc-row{display:flex;align-items:center;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--bdr)}
.svc-row:last-of-type{border-bottom:none}
.svc-lbl{font-size:13px;color:var(--txt2);font-weight:500}
.svc-val{font-size:14px;font-weight:600}
.svc-inp{width:104px;text-align:right;padding:7px 11px;border:1.5px solid var(--bdr);border-radius:var(--rss);font-size:14px;font-weight:600;font-family:inherit;outline:none;transition:border-color .18s;color:var(--txt)}
.svc-inp:focus{border-color:var(--G)}
.svc-footer{background:var(--Gp);margin:-20px;margin-top:12px;padding:12px 20px;border-radius:0 0 var(--r) var(--r);display:flex;justify-content:space-between;align-items:center}
.svc-footer .lbl{font-size:12px;font-weight:700;color:var(--G)}
.svc-footer .val{font-size:16px;font-weight:700;color:var(--G)}

/* ── CURRENCY ROW ── */
.cr{background:var(--card);border-radius:var(--r);box-shadow:var(--shadow);padding:18px;margin-bottom:12px;border-left:3px solid var(--G);transition:box-shadow .2s}
.cr:hover{box-shadow:var(--shadow-lg)}
.cr-top{display:flex;align-items:center;gap:8px;margin-bottom:14px}
.cr-idx{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--txt3)}
.cr-tag{background:var(--G);color:#fff;font-size:11px;font-weight:700;padding:2px 9px;border-radius:30px}
.cr-del{margin-left:auto;width:26px;height:26px;border:none;border-radius:6px;background:#FEF2F2;color:#EF4444;font-size:12px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .18s;flex-shrink:0}
.cr-del:hover{background:#FEE2E2}
.cr-grid{display:grid;grid-template-columns:1fr 1fr;gap:11px}
.inp-g{display:flex;flex-direction:column;gap:5px}
.inp-lbl{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:var(--txt3)}
.inp{width:100%;padding:9px 12px;border:1.5px solid var(--bdr);border-radius:var(--rss);font-size:13px;font-weight:500;font-family:inherit;color:var(--txt);background:#fff;outline:none;transition:border-color .18s}
.inp:focus{border-color:var(--G)}
.inp.pfx{padding-left:22px}
.pfx-wrap{position:relative}
.pfx-sym{position:absolute;left:10px;top:50%;transform:translateY(-50%);font-size:12px;color:var(--txt3);pointer-events:none;z-index:1}
.mode-bar{display:flex;gap:2px;background:var(--bg);border-radius:9px;padding:3px;margin-top:12px}
.mode-btn{flex:1;padding:6px;border:none;border-radius:7px;font-size:11px;font-weight:600;font-family:inherit;cursor:pointer;background:transparent;color:var(--txt3);transition:all .18s}
.mode-btn.on{background:var(--G);color:#fff;box-shadow:0 1px 4px rgba(0,0,0,.14)}
.cr-result{margin-top:10px;padding:10px 13px;background:var(--Gp);border:1px solid var(--Gb);border-radius:9px;display:flex;justify-content:space-between;align-items:center}
.cr-rl{font-size:11px;color:var(--G);font-weight:500}
.cr-rv{font-size:14px;font-weight:700;color:var(--G)}

/* ── DENOM HINT ── */
.dh{margin-top:9px;background:#FFFBEB;border:1px solid #F59E0B;border-radius:9px;padding:10px 12px;font-size:12px;color:#78350F}
.dh-btns{display:flex;gap:7px;margin-top:7px;flex-wrap:wrap}
.dh-btn{padding:5px 11px;border:1.5px solid #F59E0B;border-radius:7px;background:#fff;font-size:11px;font-weight:700;color:#92400E;cursor:pointer;font-family:inherit;transition:all .15s}
.dh-btn:hover{background:#FEF3C7}

/* ── ADD BTN ── */
.add-btn{width:100%;padding:13px;border:2px dashed var(--bdr);border-radius:var(--r);background:transparent;font-size:13px;font-weight:600;color:var(--txt3);cursor:pointer;font-family:inherit;transition:all .2s;display:flex;align-items:center;justify-content:center;gap:6px}
.add-btn:hover{border-color:var(--G);color:var(--G);background:var(--Gp)}

/* ── TCS ── */
.tcs-trigger{display:flex;align-items:center;justify-content:center;margin-bottom:14px;margin-top:2px}
.tcs-trigger-btn{background:none;border:1.5px dashed #D6D3D1;font-family:inherit;font-size:12px;font-weight:600;color:#78716C;cursor:pointer;padding:7px 18px;border-radius:8px;transition:all .18s;display:flex;align-items:center;gap:6px}
.tcs-trigger-btn:hover{background:#F5F5F4;border-color:#A8A29E}
.tcs-card{background:#FAFAF9;border:1.5px solid #D6D3D1;border-radius:var(--r);padding:16px 18px;margin-bottom:14px;animation:fadeIn .2s ease}
@keyframes fadeIn{from{opacity:0;transform:translateY(-5px)}to{opacity:1;transform:translateY(0)}}
.tcs-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}
.tcs-title{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.09em;color:#57534E}
.tcs-close{background:none;border:none;font-size:13px;color:#A8A29E;cursor:pointer;padding:3px 7px;border-radius:5px;font-family:inherit;font-weight:600;transition:background .15s}
.tcs-close:hover{background:rgba(120,113,108,.1)}
.tcs-type-bar{display:flex;gap:2px;background:rgba(120,113,108,.1);border-radius:9px;padding:3px;margin-bottom:12px}
.tcs-type-btn{flex:1;padding:7px 6px;border:none;border-radius:7px;font-size:11px;font-weight:600;font-family:inherit;cursor:pointer;background:transparent;color:#78716C;transition:all .18s}
.tcs-type-btn.on{background:#fff;color:#1C1917;box-shadow:0 1px 4px rgba(0,0,0,.12)}
.tcs-row{display:flex;justify-content:space-between;align-items:center;padding:7px 0;font-size:13px;border-bottom:1px solid rgba(120,113,108,.12)}
.tcs-row .tl{color:#78716C;font-weight:500}
.tcs-row .tv{font-weight:700;color:#44403C}
.tcs-row .tv.big{font-size:16px;color:#1C1917}
.tcs-zero{padding:10px 0;font-size:12px;color:#A8A29E;text-align:center;font-weight:500}
.tcs-field{margin-top:10px;padding-top:10px;border-top:1px solid rgba(120,113,108,.12)}
.tcs-field-lbl{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:#78716C;margin-bottom:6px}
.tcs-field-note{font-size:10px;color:#A8A29E;margin-top:4px;line-height:1.4}
.tcs-inp{width:100%;padding:8px 12px 8px 22px;border:1.5px solid #D6D3D1;border-radius:var(--rss);font-size:13px;font-weight:600;font-family:inherit;background:#fff;color:var(--txt);outline:none;transition:border-color .18s}
.tcs-inp:focus{border-color:#78716C}
.tcs-note{margin-top:10px;padding-top:8px;border-top:1px solid rgba(120,113,108,.12);font-size:11px;color:#A8A29E;line-height:1.5}
/* Full LRS toggle */
.tcs-full-lrs-wrap{margin-bottom:12px}
.tcs-full-lrs-btn{width:100%;text-align:left;background:#F5F5F4;border:1.5px solid #D6D3D1;border-radius:var(--rss);padding:9px 12px;font-family:inherit;font-size:12px;font-weight:600;color:#57534E;cursor:pointer;display:flex;align-items:center;gap:9px;transition:all .18s;line-height:1.4}
.tcs-full-lrs-btn:hover{border-color:#A8A29E;background:#EEEEEC}
.tcs-full-lrs-btn.on{background:#1C3829;border-color:#1C3829;color:#fff}
.tcs-full-lrs-check{width:16px;height:16px;border-radius:4px;border:1.5px solid currentColor;display:flex;align-items:center;justify-content:center;font-size:10px;flex-shrink:0;font-weight:700;opacity:.7;transition:all .18s}
.tcs-full-lrs-btn.on .tcs-full-lrs-check{opacity:1;background:rgba(255,255,255,.2);border-color:rgba(255,255,255,.6)}
.tcs-mode-note{font-size:11px;color:#78716C;margin-bottom:12px;font-weight:500}

/* ── SPLIT MODAL ── */
.split-overlay{position:fixed;inset:0;background:rgba(15,22,17,.5);z-index:500;display:none;align-items:flex-start;justify-content:center;padding:14px;overflow-y:auto;backdrop-filter:blur(2px)}
.split-modal{background:var(--bg);border-radius:var(--r);width:100%;max-width:860px;box-shadow:0 20px 60px rgba(0,0,0,.25);animation:fadeIn .22s ease;margin:auto}
.split-modal-hdr{background:var(--G);border-radius:var(--r) var(--r) 0 0;padding:13px 18px;display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.split-modal-title{font-family:'Playfair Display',serif;font-size:16px;color:#fff;font-weight:700;flex:1;min-width:80px}
.split-hdr-right{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.split-cnt-bar{display:flex;gap:2px;background:rgba(255,255,255,.1);border-radius:9px;padding:3px}
.split-cnt-btn{padding:5px 12px;border:none;border-radius:7px;font-size:12px;font-weight:700;font-family:inherit;cursor:pointer;background:transparent;color:rgba(255,255,255,.5);transition:all .18s}
.split-cnt-btn.on{background:#fff;color:var(--G)}
.split-copy-all{background:rgba(255,255,255,.13);border:1px solid rgba(255,255,255,.2);color:#fff;padding:5px 11px;border-radius:8px;font-size:11px;font-weight:700;font-family:inherit;cursor:pointer;display:flex;align-items:center;gap:5px;transition:all .18s;white-space:nowrap}
.split-copy-all:hover{background:rgba(255,255,255,.22)}
.split-modal-x{background:rgba(255,255,255,.1);border:none;color:#fff;width:28px;height:28px;border-radius:8px;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:14px;transition:background .15s;flex-shrink:0}
.split-modal-x:hover{background:rgba(255,255,255,.22)}

/* Encashment toolbar */
.split-toolbar{display:flex;align-items:center;justify-content:space-between;padding:9px 18px;background:var(--card);border-bottom:1px solid var(--bdr);gap:8px;flex-wrap:wrap}
.split-cust-bar{display:flex;gap:2px;background:var(--bg);border-radius:9px;padding:3px}
.split-cust-btn{padding:5px 12px;border:none;border-radius:7px;font-size:11px;font-weight:600;font-family:inherit;cursor:pointer;background:transparent;color:var(--txt3);transition:all .18s;white-space:nowrap}
.split-cust-btn.on{background:var(--G);color:#fff}

/* Remaining tracker */
.split-remain{display:flex;gap:7px;flex-wrap:wrap;padding:9px 18px;background:#F7F8F7;border-bottom:1px solid var(--bdr)}
.sri{display:flex;align-items:center;gap:6px;padding:4px 10px;border-radius:7px;font-size:11px;font-weight:600;background:var(--bg);border:1px solid var(--bdr)}
.sri.done{background:#E8F2EC;border-color:var(--Gb);color:var(--G)}
.sri.over{background:#FEF2F2;border-color:#FCA5A5;color:#B91C1C}

/* Split cards */
.split-cards-wrap{padding:14px;display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));gap:12px}
.sp-card{background:var(--card);border-radius:var(--r);box-shadow:var(--shadow);overflow:hidden;border-top:3px solid var(--G)}
.sp-card.locked{border-top-color:#F59E0B}
.sp-card-hdr{display:flex;align-items:center;justify-content:space-between;padding:10px 13px;border-bottom:1px solid var(--bdr)}
.sp-num{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.09em;color:var(--G);display:flex;align-items:center;gap:5px}
.sp-lock-ico{font-size:10px;color:#F59E0B}
.sp-acts{display:flex;gap:5px}
.sp-act{width:26px;height:26px;border:1.5px solid var(--bdr);border-radius:5px;background:#fff;color:var(--txt2);cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .15s;font-size:10px;font-family:inherit}
.sp-act:hover{border-color:var(--G);color:var(--G)}
.sp-act.unlock-btn{border-color:#F59E0B;color:#B45309;background:#FFFBEB;font-weight:700}
.sp-act.unlock-btn:hover{background:#FEF3C7}

/* Split card body */
.sp-body{padding:12px 13px;display:flex;flex-direction:column;gap:9px}
.sp-sec-lbl{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.09em;color:var(--txt3);margin-bottom:-2px}
.sp-curr-grp{display:flex;flex-direction:column;gap:4px}
.sp-curr-row{display:flex;align-items:center;gap:8px}
.sp-curr-left{display:flex;align-items:center;gap:6px;min-width:68px}
.sp-curr-flag{font-size:14px;line-height:1}
.sp-curr-code{font-size:12px;font-weight:700;color:var(--G)}
.sp-inp{width:130px;text-align:right;padding:7px 10px;border:1.5px solid var(--bdr);border-radius:var(--rss);font-size:13px;font-weight:600;font-family:inherit;outline:none;transition:border-color .18s;color:var(--txt);background:#fff;margin-left:auto}
.sp-inp:focus{border-color:var(--G)}
.sp-inp.locked-inp{border-color:#F59E0B;background:#FFFDF5}
.sp-curr-derived{font-size:11px;color:var(--txt3);padding-left:2px;padding-bottom:2px}
.sp-denom{background:#FFFBEB;border:1px solid #F59E0B;border-radius:7px;padding:6px 9px;font-size:11px;color:#78350F}
.sp-denom-btns{display:flex;gap:6px;flex-wrap:wrap;margin-top:4px}
.sp-total-fx{font-size:12px;color:var(--txt3);font-weight:500;text-align:right;padding:3px 0}
.sp-sc-row{display:flex;align-items:center;justify-content:space-between;gap:8px;padding-top:5px;border-top:1px solid var(--bdr)}
.sp-sc-lbl{font-size:11px;color:var(--txt3);font-weight:600}
.sp-divider{height:1px;background:var(--bdr)}
.sp-summary{background:var(--bg);border-radius:var(--rss);padding:9px 11px;font-size:12px}
.sp-sum-row{display:flex;justify-content:space-between;padding:3px 0;color:var(--txt2)}
.sp-sum-row span:last-child{font-weight:600;color:var(--txt)}
.sp-sum-total{display:flex;justify-content:space-between;padding:7px 0 4px;font-weight:700;font-size:13px;border-top:1.5px solid var(--G);margin-top:5px;color:var(--G)}
.sp-pay-modes{display:flex;gap:5px;flex-wrap:wrap;margin-top:4px}
.sp-pay-chip{padding:3px 9px;border-radius:20px;font-size:10px;font-weight:700;background:var(--G);color:#fff}

/* ── RIGHT PANEL ── */
.rc{position:sticky;top:78px}
.bill-outer{background:var(--card);border-radius:var(--r);box-shadow:var(--shadow-lg);overflow:hidden;margin-bottom:12px}
.bill-empty{padding:52px 24px;text-align:center;color:var(--txt3)}
.bill-empty-ico{font-size:36px;opacity:.35;display:block;margin-bottom:10px}
.bill-empty p{font-size:13px;line-height:1.6}
.tbar{padding:10px 14px;border-radius:var(--rss);font-size:12px;display:flex;align-items:center;gap:7px;margin-bottom:12px;font-weight:500}
.tbar.ok{background:var(--Gp);color:var(--G);border:1px solid var(--Gb)}
.tbar.warn{background:#FFF7ED;color:#92400E;border:1px solid #FED7AA}

/* ── ACTION BTNS ── */
.act-row{display:grid;grid-template-columns:1fr 40px 40px;gap:9px}
.act-btn{padding:12px 10px;border:none;border-radius:var(--rss);font-family:inherit;font-size:13px;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;transition:all .2s}
.act-btn.full{grid-column:span 3}
.act-btn.pri{background:var(--G);color:#fff}
.act-btn.pri:hover{background:var(--G2);box-shadow:0 4px 14px rgba(28,56,41,.3)}
.act-btn.sec{background:#fff;color:var(--txt);border:1.5px solid var(--bdr);box-shadow:var(--shadow)}
.act-btn.sec:hover{border-color:var(--G);color:var(--G)}
.act-btn.ico{width:40px;height:40px;padding:0;border-radius:var(--rss);background:#fff;border:1.5px solid var(--bdr);box-shadow:var(--shadow);color:var(--txt2)}
.act-btn.ico:hover{border-color:var(--G);color:var(--G)}

/* ── PICKER ── */
.curr-picker{position:relative}
.curr-display{width:100%;padding:9px 34px 9px 12px;border:1.5px solid var(--bdr);border-radius:var(--rss);font-size:13px;font-weight:500;font-family:inherit;color:var(--txt);background:#fff;cursor:pointer;text-align:left;display:flex;align-items:center;gap:7px;outline:none;transition:border-color .18s;white-space:nowrap;overflow:hidden}
.curr-display:hover,.curr-display.open{border-color:var(--G)}
.cd-arrow{position:absolute;right:10px;top:50%;transform:translateY(-50%);pointer-events:none;color:var(--txt3);transition:transform .18s}
.curr-display.open .cd-arrow{transform:translateY(-50%) rotate(180deg)}
.curr-flag{font-size:15px;line-height:1;flex-shrink:0}
.curr-drop{position:absolute;top:calc(100% + 5px);left:0;right:0;background:#fff;border:1.5px solid var(--G);border-radius:10px;box-shadow:0 8px 28px rgba(0,0,0,.14);z-index:300;overflow:hidden}
.curr-search{width:100%;padding:9px 12px;border:none;border-bottom:1px solid var(--bdr);font-size:13px;font-family:inherit;outline:none;color:var(--txt)}
.curr-search::placeholder{color:var(--txt3)}
.curr-list{max-height:200px;overflow-y:auto;overscroll-behavior:contain}
.curr-opt{padding:9px 12px;font-size:13px;cursor:pointer;display:flex;align-items:center;gap:8px;color:var(--txt);transition:background .12s}
.curr-opt:hover{background:var(--Gp)}
.curr-opt.selected{background:var(--Gp);font-weight:600;color:var(--G)}
.curr-opt-code{font-weight:700;min-width:36px;color:var(--G)}
.curr-opt-name{color:var(--txt2);font-size:12px;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.curr-no-results{padding:12px;font-size:12px;color:var(--txt3);text-align:center}

/* ── TOAST / FOOTER ── */
.toast{position:fixed;bottom:22px;left:50%;transform:translateX(-50%) translateY(80px);background:#111;color:#fff;padding:10px 22px;border-radius:30px;font-size:13px;font-weight:500;transition:transform .3s cubic-bezier(.34,1.56,.64,1);z-index:999;pointer-events:none;white-space:nowrap}
.toast.show{transform:translateX(-50%) translateY(0)}
.app-footer{padding:14px;text-align:center;font-size:11px;color:var(--txt3);font-weight:500;letter-spacing:.02em}

@media print{
  .hdr,.lc,.act-row,.tbar,.app-footer{display:none!important}
  .wrap{display:block!important;padding:0!important}
  .rc{position:static!important}
  .bill-outer{box-shadow:none!important;border-radius:0!important;margin:0!important}
  body{background:#fff!important}
}
</style>
</head>
<body>

<header class="hdr">
  <div class="logo">
    <div style="display:flex;align-items:center">
      <span class="logo-main">Matrix Forex</span>
      <span class="beta-badge">Beta</span>
    </div>
    <span class="logo-sub">Foreign Exchange</span>
  </div>
  <div class="tab-grp">
    <button class="tab-btn on" id="tbSale" onclick="switchType('sale')">Sale</button>
    <button class="tab-btn" id="tbEnc" onclick="switchType('encashment')">Encashment</button>
  </div>
</header>

<div class="main-wrap">
<div class="wrap">
  <div class="lc">
    <div class="sc">
      <div class="sc-lbl">Service Charges</div>
      <div class="svc-row">
        <span class="svc-lbl">Service Charge (₹)</span>
        <input class="svc-inp" id="inpSC" type="number" value="250" min="0" oninput="onSC(this.value)">
      </div>
      <div class="svc-row">
        <span class="svc-lbl">Service Tax @ 18%</span>
        <span class="svc-val" id="lblSCT">₹45.00</span>
      </div>
      <div class="svc-footer">
        <span class="lbl">Total Service Charges</span>
        <span class="val" id="lblSCTotal">₹295.00</span>
      </div>
    </div>
    <div id="crContainer"></div>
    <div id="encCustBar" style="display:none;margin-bottom:14px"></div>
    <div id="tcsSection"></div>
    <button class="add-btn" onclick="addRow()">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
      Add Currency
    </button>
  </div>

  <div class="rc">
    <div class="bill-outer"><div id="billInner">
      <div class="bill-empty"><span class="bill-empty-ico">🧾</span><p>Enter a rate and amount<br>to generate your bill</p></div>
    </div></div>
    <div class="tbar" id="tbar" style="display:none"></div>
    <div class="act-row">
      <button class="act-btn pri full" onclick="copyImg()">
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><rect x="4" y="4" width="9" height="9" rx="1.5" stroke="white" stroke-width="1.4"/><path d="M3 10H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v1" stroke="white" stroke-width="1.4" stroke-linecap="round"/></svg>
        Copy Bill Image
      </button>
      <button class="act-btn sec" onclick="doPrint()" style="grid-column:1">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="2" y="5" width="10" height="6" rx="1.2" stroke="currentColor" stroke-width="1.3"/><path d="M4 5V2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V5M4 9h6" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>
        Print
      </button>
      <button class="act-btn ico" onclick="openSplitModal()" title="Split Bill" style="grid-column:2;grid-row:2">
        <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M2 8h12M8 2v12M5 5 2 2M5 11l-3 3M11 5l3-3M11 11l3 3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>
      </button>
      <button class="act-btn ico" onclick="copyTxt()" title="Copy as Text" style="grid-column:3;grid-row:2">
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M5 2h5.5A1.5 1.5 0 0 1 12 3.5V11a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 11V5l1-3z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><path d="M6 5h4M6 7.5h4M6 10h2.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>
      </button>
    </div>
  </div>
</div>
</div>

<footer class="app-footer">Matrix Forex &nbsp;·&nbsp; Built by Arghya</footer>

<!-- SPLIT MODAL -->
<div class="split-overlay" id="splitOverlay" onclick="splitBgClick(event)">
  <div class="split-modal" id="splitModal">
    <div class="split-modal-hdr">
      <span class="split-modal-title">Bill Split</span>
      <div class="split-hdr-right">
        <div class="split-cnt-bar" id="splitCntBar"></div>
        <button class="split-copy-all" onclick="copyAllSplits()">
          <svg width="12" height="12" viewBox="0 0 15 15" fill="none"><rect x="4" y="4" width="9" height="9" rx="1.5" stroke="white" stroke-width="1.4"/><path d="M3 10H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v1" stroke="white" stroke-width="1.4" stroke-linecap="round"/></svg>
          Copy All
        </button>
      </div>
      <button class="split-modal-x" onclick="closeSplitModal()">✕</button>
    </div>
    <div class="split-toolbar" id="splitToolbar" style="display:none">
      <span style="font-size:11px;font-weight:600;color:var(--txt3)">Customer Type</span>
      <div class="split-cust-bar">
        <button class="split-cust-btn on" id="custIndian" onclick="setCustType('indian')">Indian (≤$1,000 cash)</button>
        <button class="split-cust-btn" id="custForeign" onclick="setCustType('foreign')">Foreign National (≤$3,000 cash)</button>
      </div>
    </div>
    <div class="split-remain" id="splitRemain"></div>
    <div class="split-cards-wrap" id="splitCardsWrap"></div>
  </div>
</div>

<div id="snapTarget" style="position:fixed;left:-9999px;top:0;width:500px;background:#fff;z-index:-1"></div>
<div class="toast" id="toast"></div>

<script>
// ══════════ CURRENCIES ══════════
const CURRENCIES=[
  {code:'USD',name:'US Dollar',flag:'🇺🇸',dec:2},
  {code:'EUR',name:'Euro',flag:'🇪🇺',dec:2},
  {code:'GBP',name:'British Pound',flag:'🇬🇧',dec:2},
  {code:'AED',name:'UAE Dirham',flag:'🇦🇪',dec:2},
  {code:'SGD',name:'Singapore Dollar',flag:'🇸🇬',dec:2},
  {code:'THB',name:'Thai Baht',flag:'🇹🇭',dec:0},
  {code:'MYR',name:'Malaysian Ringgit',flag:'🇲🇾',dec:2},
  {code:'JPY',name:'Japanese Yen',flag:'🇯🇵',dec:0},
  {code:'IDR',name:'Indonesian Rupiah',flag:'🇮🇩',dec:0},
  {code:'VND',name:'Vietnamese Dong',flag:'🇻🇳',dec:0},
  {code:'KRW',name:'South Korean Won',flag:'🇰🇷',dec:0},
  {code:'CAD',name:'Canadian Dollar',flag:'🇨🇦',dec:2},
  {code:'AUD',name:'Australian Dollar',flag:'🇦🇺',dec:2},
  {code:'SAR',name:'Saudi Riyal',flag:'🇸🇦',dec:2},
  {code:'LKR',name:'Sri Lankan Rupee',flag:'🇱🇰',dec:0},
  {code:'CNY',name:'Chinese Yuan',flag:'🇨🇳',dec:2},
  {code:'BHD',name:'Bahraini Dinar',flag:'🇧🇭',dec:3},
  {code:'OMR',name:'Omani Rial',flag:'🇴🇲',dec:3},
  {code:'QAR',name:'Qatari Riyal',flag:'🇶🇦',dec:2},
  {code:'CHF',name:'Swiss Franc',flag:'🇨🇭',dec:2},
  {code:'NZD',name:'New Zealand Dollar',flag:'🇳🇿',dec:2},
  {code:'RUB',name:'Russian Ruble',flag:'🇷🇺',dec:0},
  {code:'DKK',name:'Danish Krone',flag:'🇩🇰',dec:2},
  {code:'SEK',name:'Swedish Krona',flag:'🇸🇪',dec:2},
];
const SNAP={USD:5,EUR:10,GBP:5,AED:10,SGD:5,THB:50,MYR:5,JPY:1000,IDR:100000,
  VND:500000,KRW:10000,CAD:5,AUD:5,SAR:10,LKR:500,CNY:10,BHD:1,OMR:1,QAR:5,
  CHF:5,NZD:5,RUB:500,DKK:50,SEK:50};

// ══════════ STATE ══════════
const ST={sale:{rows:[],uid:0},encashment:{rows:[],uid:0}};
let TYPE='sale', SC=250;
function S(){return ST[TYPE];}
function cinfo(c){return CURRENCIES.find(x=>x.code===c)||CURRENCIES[0];}

// TCS
let tcsEnabled=false, tcsType='personal', tcsPrior=0, tcsLoan=0, tcsMode='manual', tcsFullLRS=false;
const TCS_THR=1000000;
const TCS_RATES={education:0.02,personal:0.20};

// Split
let splitCount=2, splitData=[], splitCustType='indian';

// ══════════ TYPE SWITCH ══════════
function switchType(t){
  TYPE=t;
  if(t==='encashment'){tcsEnabled=false;tcsMode='manual';tcsType='personal';tcsPrior=0;tcsLoan=0;tcsFullLRS=false;}
  document.getElementById('tbSale').classList.toggle('on',t==='sale');
  document.getElementById('tbEnc').classList.toggle('on',t==='encashment');
  renderEncCustBar();
  renderAll();updateBill();
}

// ══════════ ROW OPS ══════════
function addRow(){const st=S();st.rows.push({id:st.uid++,code:'USD',rate:'',amount:'',mode:'currency'});renderAll();updateBill();}
function removeRow(id){S().rows=S().rows.filter(r=>r.id!==id);renderAll();updateBill();}
function setMode(id,mode){const r=S().rows.find(x=>x.id===id);if(r){r.mode=mode;r.amount='';renderRowEl(r);updateBill();}}
function setCode(id,code){const r=S().rows.find(x=>x.id===id);if(!r)return;r.code=code;renderRowEl(r);updateRowHints(r);updateBill();}
function setField(id,f,v){
  const r=S().rows.find(x=>x.id===id);if(!r)return;r[f]=v;
  const rate=parseFloat(r.rate)||0,amt=parseFloat(r.amount)||0;
  if(rate>0&&amt>0)updateRowHints(r);
  else{const h=document.getElementById('hints-'+r.id);if(h)h.innerHTML='';}
  updateBill();
}
function applySnap(id,amt){const r=S().rows.find(x=>x.id===id);if(!r)return;r.amount=String(amt);r.mode='currency';renderRowEl(r);updateBill();}
function updateRowHints(r){const el=document.getElementById('hints-'+r.id);if(el)el.innerHTML=buildHints(r);}
function buildHints(r){
  const isSale=TYPE==='sale',isINR=isSale&&r.mode==='inr';
  const rate=parseFloat(r.rate)||0,amt=parseFloat(r.amount)||0;
  let currAmt=0,forexINR=0;
  if(isINR){forexINR=amt;currAmt=rate>0?amt/rate:0;}else{currAmt=amt;forexINR=amt*rate;}
  let out='';
  if(amt>0&&rate>0){
    out+=isINR
      ?`<div class="cr-result"><span class="cr-rl">Customer gets</span><span class="cr-rv">${fcurr(currAmt,r.code)} ${r.code}</span></div>`
      :`<div class="cr-result"><span class="cr-rl">INR Value</span><span class="cr-rv">${fINR(forexINR)}</span></div>`;
    const unit=SNAP[r.code]||1;
    if(unit>1&&currAmt>0){
      const fl=Math.floor(currAmt/unit)*unit,ce=Math.ceil(currAmt/unit)*unit;
      if(Math.abs(fl-currAmt)>0.001){
        const fd=(fl-currAmt)*rate,cd=(ce-currAmt)*rate;
        out+=`<div class="dh">💡 <strong>${fcurr(currAmt,r.code)} ${r.code}</strong> isn't a clean denomination
          <div class="dh-btns">
            <button class="dh-btn" onclick="applySnap(${r.id},${fl})">↓ ${fcurr(fl,r.code)} ${r.code} (${fINR(fd)})</button>
            <button class="dh-btn" onclick="applySnap(${r.id},${ce})">↑ ${fcurr(ce,r.code)} ${r.code} (+${fINR(Math.abs(cd))})</button>
          </div></div>`;
      }
    }
  }
  return out;
}

// ══════════ SERVICE CHARGE ══════════
function onSC(v){
  SC=parseFloat(v)||0;
  const t=SC*0.18;
  document.getElementById('lblSCT').textContent='₹'+fn(t);
  document.getElementById('lblSCTotal').textContent='₹'+fn(SC+t);
  updateBill();
}

// ══════════ CALC ══════════
function slabGST(inr){
  if(inr<=0)return 0;if(inr<=25000)return 45;
  let g=45;
  if(inr<=100000)return g+(inr-25000)*0.0018;
  g+=(100000-25000)*0.0018;
  if(inr<=1000000)return g+(inr-100000)*0.0009;
  g+=(1000000-100000)*0.0009;
  return g+(inr-1000000)*0.0009;
}
function calcRowData(r){
  const rate=parseFloat(r.rate)||0,amt=parseFloat(r.amount)||0;
  let forexINR=0,currAmt=0;
  if(r.mode==='inr'){forexINR=amt;currAmt=rate>0?amt/rate:0;}else{currAmt=amt;forexINR=amt*rate;}
  return{forexINR,currAmt,rate};
}
function calcTCS(totalFX){
  if(!tcsEnabled||TYPE!=='sale')return{tcsAmount:0,taxableExcess:0,selfFunded:0,selfFundedTaxable:0,loanAmt:0};

  // Fast path: full LRS limit declared — entire bill is taxable
  if(tcsFullLRS){
    const rate=TCS_RATES[tcsType];
    if(tcsType==='education'&&tcsLoan>0){
      const loan=Math.min(tcsLoan,totalFX);
      const selfFunded=Math.max(0,totalFX-loan);
      return{tcsAmount:selfFunded*0.02,taxableExcess:selfFunded,selfFunded,selfFundedTaxable:selfFunded,loanAmt:loan};
    }
    return{tcsAmount:totalFX*rate,taxableExcess:totalFX,selfFunded:totalFX,selfFundedTaxable:totalFX,loanAmt:0};
  }

  const running=tcsPrior+totalFX;
  if(running<=TCS_THR)return{tcsAmount:0,taxableExcess:0,selfFunded:0,selfFundedTaxable:0,loanAmt:0};

  if(tcsType==='personal'){
    const excess=Math.min(totalFX,running-TCS_THR);
    return{tcsAmount:excess*0.20,taxableExcess:excess,selfFunded:totalFX,selfFundedTaxable:excess,loanAmt:0};
  }

  // Education: loan portion is 0%, self-funded follows threshold
  const loan=Math.min(tcsLoan,totalFX);
  const selfFunded=Math.max(0,totalFX-loan);
  const thresholdAvail=Math.max(0,TCS_THR-tcsPrior);
  const loanUsesThresh=Math.min(loan,thresholdAvail);
  const thresholdForSelf=Math.max(0,thresholdAvail-loanUsesThresh);
  const selfFundedExempt=Math.min(selfFunded,thresholdForSelf);
  const selfFundedTaxable=Math.max(0,selfFunded-selfFundedExempt);
  return{tcsAmount:selfFundedTaxable*0.02,taxableExcess:selfFundedTaxable,selfFunded,selfFundedTaxable,loanAmt:loan};
}
function payModes(total){
  if(TYPE==='sale'){
    return total<50000?['Cash','UPI','Bank Transfer']:total<100000?['UPI','Bank Transfer']:['Bank Transfer'];
  }
  // Encashment: no UPI ever. Cash only within USD equivalent limit.
  const usdRate=getUSDRate();
  const cashLimitINR=(mainCustType==='foreign'?3000:1000)*usdRate;
  return total<=cashLimitINR?['Cash','Bank Transfer']:['Bank Transfer'];
}
function getUSDRate(){
  // Try to find USD rate from current rows; fall back to 85
  const usdRow=S().rows.find(r=>r.code==='USD'&&parseFloat(r.rate)>0);
  if(usdRow)return parseFloat(usdRow.rate);
  // Estimate from any currency present using approximate cross-rates
  return 85;
}
let mainCustType='indian';
function setMainCustType(t){
  mainCustType=t;
  document.getElementById('mct-indian').classList.toggle('on',t==='indian');
  document.getElementById('mct-foreign').classList.toggle('on',t==='foreign');
  updateBill();
}
function renderEncCustBar(){
  const el=document.getElementById('encCustBar');if(!el)return;
  if(TYPE!=='encashment'){el.style.display='none';return;}
  el.style.display='block';
  el.innerHTML=`<div class="sc" style="padding:14px 18px">
    <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px">
      <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--txt3)">Customer Type</span>
      <div class="mode-bar" style="margin-top:0;flex:0 0 auto">
        <button class="mode-btn${mainCustType==='indian'?' on':''}" id="mct-indian" onclick="setMainCustType('indian')">Indian (≤$1,000 cash)</button>
        <button class="mode-btn${mainCustType==='foreign'?' on':''}" id="mct-foreign" onclick="setMainCustType('foreign')">Foreign (≤$3,000 cash)</button>
      </div>
    </div>
  </div>`;
}
function calcAll(){
  const scGst=Math.round(SC*0.18*100)/100;
  let totalFX=0;
  const computed=S().rows.map(r=>{const c=calcRowData(r);totalFX+=c.forexINR;return{...r,...c};});
  const slab=slabGST(totalFX);
  const {tcsAmount,taxableExcess}=calcTCS(totalFX);
  const base=TYPE==='sale'?totalFX+slab+SC+scGst:totalFX-slab-SC-scGst;
  const total=base+Math.round(tcsAmount);
  return{computed,totalFX,slab,sc:SC,scGst,tcsAmount:Math.round(tcsAmount),taxableExcess:Math.round(taxableExcess),total,pmodes:payModes(total)};
}

// ══════════ RENDER ROWS ══════════
function renderAll(){
  const c=document.getElementById('crContainer');c.innerHTML='';
  S().rows.forEach(r=>{const d=document.createElement('div');d.id='row-'+r.id;d.innerHTML=buildRow(r);c.appendChild(d);});
}
function renderRowEl(r){const el=document.getElementById('row-'+r.id);if(el)el.innerHTML=buildRow(r);}
function buildRow(r){
  const isSale=TYPE==='sale',isINR=isSale&&r.mode==='inr';
  const idx=S().rows.findIndex(x=>x.id===r.id)+1;
  const info=cinfo(r.code);
  const modeBar=isSale?`<div class="mode-bar">
    <button class="mode-btn${r.mode==='currency'?' on':''}" onclick="setMode(${r.id},'currency')">By Currency Amount</button>
    <button class="mode-btn${r.mode==='inr'?' on':''}" onclick="setMode(${r.id},'inr')">By INR Budget</button>
  </div>`:'';
  return`<div class="cr">
    <div class="cr-top">
      <span class="cr-idx">Currency ${idx}</span>
      <span class="cr-tag">${info.flag} ${r.code}</span>
      ${S().rows.length>1?`<button class="cr-del" onclick="removeRow(${r.id})">✕</button>`:''}
    </div>
    <div class="cr-grid">
      <div class="inp-g">
        <label class="inp-lbl">Currency</label>
        ${buildPicker(r.id,r.code)}
      </div>
      <div class="inp-g">
        <label class="inp-lbl">Rate (₹ per 1 ${r.code})</label>
        <div class="pfx-wrap"><span class="pfx-sym">₹</span>
          <input class="inp pfx" type="number" placeholder="0.00000" value="${r.rate}" oninput="setField(${r.id},'rate',this.value)" step="0.00001">
        </div>
      </div>
    </div>
    ${modeBar}
    <div class="inp-g" style="margin-top:12px">
      <label class="inp-lbl">${isINR?'INR Budget (₹ forex value)':`Amount (${r.code})`}</label>
      <div class="pfx-wrap">
        ${isINR?'<span class="pfx-sym">₹</span>':''}
        <input class="inp${isINR?' pfx':''}" type="number" placeholder="0" value="${r.amount}" oninput="setField(${r.id},'amount',this.value)">
      </div>
    </div>
    <div id="hints-${r.id}">${buildHints(r)}</div>
  </div>`;
}

// ══════════ CURRENCY PICKER ══════════
let openPickerId=null;
function buildPicker(rowId,sel){
  const info=cinfo(sel);
  return`<div class="curr-picker" id="picker-${rowId}">
    <button type="button" class="curr-display" id="pdisp-${rowId}" onclick="togglePicker(${rowId})">
      <span class="curr-flag">${info.flag}</span>
      <span style="font-weight:600;color:var(--G)">${sel}</span>
      <span style="color:var(--txt2);font-size:12px;flex:1;overflow:hidden;text-overflow:ellipsis">${info.name}</span>
      <svg class="cd-arrow" width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
    </button>
  </div>`;
}
function togglePicker(id){
  if(openPickerId!==null&&openPickerId!==id)closePicker(openPickerId);
  if(openPickerId===id){closePicker(id);return;}
  openPickerId=id;
  const btn=document.getElementById('pdisp-'+id);btn.classList.add('open');
  const picker=document.getElementById('picker-'+id);
  const r=S().rows.find(x=>x.id===id);
  const sel=r?r.code:'USD';
  const drop=document.createElement('div');drop.className='curr-drop';drop.id='pdrop-'+id;
  drop.innerHTML=dropHTML(id,sel,'');
  picker.appendChild(drop);
  const inp=drop.querySelector('.curr-search');
  if(inp){inp.focus();inp.addEventListener('input',()=>filterDrop(id,inp.value));inp.addEventListener('keydown',e=>dropKey(e,id));}
}
function dropHTML(id,sel,filter){
  const m=CURRENCIES.filter(c=>!filter||c.code.toLowerCase().includes(filter.toLowerCase())||c.name.toLowerCase().includes(filter.toLowerCase()));
  const opts=m.length===0?`<div class="curr-no-results">No results</div>`:m.map(c=>`<div class="curr-opt${c.code===sel?' selected':''}" onclick="pickerSel(${id},'${c.code}')" data-code="${c.code}"><span class="curr-flag">${c.flag}</span><span class="curr-opt-code">${c.code}</span><span class="curr-opt-name">${c.name}</span></div>`).join('');
  return`<input class="curr-search" placeholder="Search…" value="${filter}" autocomplete="off" spellcheck="false"><div class="curr-list">${opts}</div>`;
}
function filterDrop(id,val){
  const r=S().rows.find(x=>x.id===id);const sel=r?r.code:'USD';
  const drop=document.getElementById('pdrop-'+id);if(!drop)return;
  const list=drop.querySelector('.curr-list');
  const m=CURRENCIES.filter(c=>!val||c.code.toLowerCase().includes(val.toLowerCase())||c.name.toLowerCase().includes(val.toLowerCase()));
  list.innerHTML=m.length===0?`<div class="curr-no-results">No results</div>`:m.map(c=>`<div class="curr-opt${c.code===sel?' selected':''}" onclick="pickerSel(${id},'${c.code}')" data-code="${c.code}"><span class="curr-flag">${c.flag}</span><span class="curr-opt-code">${c.code}</span><span class="curr-opt-name">${c.name}</span></div>`).join('');
}
function dropKey(e,id){
  if(e.key==='Escape')closePicker(id);
  if(e.key==='Enter'){const drop=document.getElementById('pdrop-'+id);const first=drop&&drop.querySelector('.curr-opt');if(first)pickerSel(id,first.dataset.code);}
}
function pickerSel(id,code){closePicker(id);setCode(id,code);}
function closePicker(id){
  if(id===null)return;
  const btn=document.getElementById('pdisp-'+id);if(btn)btn.classList.remove('open');
  const drop=document.getElementById('pdrop-'+id);if(drop)drop.remove();
  if(openPickerId===id)openPickerId=null;
}
document.addEventListener('click',e=>{
  if(openPickerId===null)return;
  const picker=document.getElementById('picker-'+openPickerId);
  if(picker&&!picker.contains(e.target))closePicker(openPickerId);
},true);

// ══════════ TCS ══════════
function enableTCS(mode){tcsEnabled=true;tcsMode=mode||'manual';renderTCSSection();updateBill();}
function disableTCS(){tcsEnabled=false;tcsMode='manual';tcsPrior=0;tcsLoan=0;tcsFullLRS=false;renderTCSSection();updateBill();}
function setTCSType(t){tcsType=t;if(t!=='education')tcsLoan=0;renderTCSSection();updateBill();}
function toggleFullLRS(){
  tcsFullLRS=!tcsFullLRS;
  if(tcsFullLRS){tcsPrior=0;tcsLoan=0;}  // clear inputs — irrelevant in full mode
  renderTCSSection();
  refreshBillOnly();
}
function setTCSPrior(v){
  tcsPrior=parseFloat(v)||0;
  // Only update the summary numbers — do NOT rebuild the card (would kill input focus)
  updateTCSSummaryEl();
  refreshBillOnly();
}
function setTCSLoan(v){
  tcsLoan=parseFloat(v)||0;
  updateTCSSummaryEl();
  refreshBillOnly();
}
// Update just the summary numbers inside the existing TCS card
function updateTCSSummaryEl(){
  const el=document.getElementById('tcs-summary');if(!el)return;
  el.innerHTML=buildTCSSummaryHTML();
}
function buildTCSSummaryHTML(){
  let totalFX=0;
  S().rows.forEach(r=>{const c=calcRowData(r);totalFX+=c.forexINR;});
  if(totalFX<=0)return`<div class="tcs-zero">Enter forex amount to calculate TCS</div>`;
  const tcsResult=calcTCS(totalFX);
  const {tcsAmount,taxableExcess,selfFunded,selfFundedTaxable,loanAmt}=tcsResult;
  const rate=TCS_RATES[tcsType];
  const ratePct=(rate*100).toFixed(0);

  // Full LRS fast path — simple display
  if(tcsFullLRS){
    if(tcsType==='education'&&tcsLoan>0){
      return`
        <div class="tcs-row"><span class="tl">Total Forex</span><span class="tv">${fINR(Math.round(totalFX))}</span></div>
        <div class="tcs-row"><span class="tl">Loan (0% rate)</span><span class="tv">${fINR(Math.round(loanAmt))}</span></div>
        <div class="tcs-row"><span class="tl">Self-funded (taxable)</span><span class="tv">${fINR(Math.round(selfFundedTaxable))}</span></div>
        <div class="tcs-row" style="border-bottom:none"><span class="tl">TCS @ 2%</span><span class="tv big">${fINR(Math.round(tcsAmount))}</span></div>`;
    }
    return`
      <div class="tcs-row"><span class="tl">Full amount taxable</span><span class="tv">${fINR(Math.round(totalFX))}</span></div>
      <div class="tcs-row" style="border-bottom:none"><span class="tl">TCS @ ${ratePct}%</span><span class="tv big">${fINR(Math.round(tcsAmount))}</span></div>`;
  }

  // Prior usage / threshold path
  const running=tcsPrior+totalFX;
  if(tcsType==='education'&&tcsLoan>0){
    const thresholdAvail=Math.max(0,TCS_THR-tcsPrior);
    const thresholdForSelf=Math.max(0,thresholdAvail-Math.min(loanAmt,thresholdAvail));
    return`
      <div class="tcs-row"><span class="tl">Total Forex</span><span class="tv">${fINR(Math.round(totalFX))}</span></div>
      ${tcsPrior>0?`<div class="tcs-row"><span class="tl">Prior LRS Usage</span><span class="tv">${fINR(tcsPrior)}</span></div>`:''}
      <div class="tcs-row"><span class="tl">Loan (0% rate)</span><span class="tv">${fINR(Math.round(loanAmt))}</span></div>
      <div class="tcs-row"><span class="tl">Self-funded</span><span class="tv">${fINR(Math.round(selfFunded))}</span></div>
      <div class="tcs-row"><span class="tl">Threshold left for self-funded</span><span class="tv">${fINR(thresholdForSelf)}</span></div>
      ${selfFundedTaxable>0
        ?`<div class="tcs-row"><span class="tl">Taxable (self-funded above ₹10L)</span><span class="tv">${fINR(Math.round(selfFundedTaxable))}</span></div>
           <div class="tcs-row" style="border-bottom:none"><span class="tl">TCS @ 2%</span><span class="tv big">${fINR(Math.round(tcsAmount))}</span></div>`
        :`<div class="tcs-zero">Self-funded portion within ₹10L — no TCS</div>`}`;
  }
  if(running<=TCS_THR)return`<div class="tcs-zero">Running total under ₹10,00,000 — no TCS</div>`;
  return`
    <div class="tcs-row"><span class="tl">Current Forex</span><span class="tv">${fINR(Math.round(totalFX))}</span></div>
    ${tcsPrior>0?`<div class="tcs-row"><span class="tl">Prior LRS Usage</span><span class="tv">${fINR(tcsPrior)}</span></div>
    <div class="tcs-row"><span class="tl">Running Total</span><span class="tv">${fINR(Math.round(running))}</span></div>`:''}
    ${taxableExcess>0
      ?`<div class="tcs-row"><span class="tl">Taxable Excess (above ₹10L)</span><span class="tv">${fINR(Math.round(taxableExcess))}</span></div>
         <div class="tcs-row" style="border-bottom:none"><span class="tl">TCS @ ${ratePct}%</span><span class="tv big">${fINR(Math.round(tcsAmount))}</span></div>`
      :`<div class="tcs-zero">Running total under ₹10,00,000 — no TCS</div>`}`;
}
// Refresh the right-panel bill only (no TCS card rebuild)
function refreshBillOnly(){
  const inner=document.getElementById('billInner');
  const tbar=document.getElementById('tbar');
  const has=S().rows.some(r=>(parseFloat(r.rate)||0)>0&&(parseFloat(r.amount)||0)>0);
  if(!has){inner.innerHTML=`<div class="bill-empty"><span class="bill-empty-ico">🧾</span><p>Enter a rate and amount<br>to generate your bill</p></div>`;tbar.style.display='none';return;}
  const data=calcAll();
  inner.innerHTML=billHTML(data,{});
  const totalR=Math.round(data.total);
  tbar.style.display='flex';
  if(totalR<50000){tbar.className='tbar ok';tbar.textContent='✓ Under ₹50,000 — All payment methods available';}
  else if(totalR<100000){tbar.className='tbar warn';tbar.textContent=`⚠ ₹${fn(totalR-50000)} over ₹50,000 — Cash not allowed`;}
  else{tbar.className='tbar warn';tbar.textContent='⚠ Over ₹1,00,000 — Bank Transfer only';}
}

function renderTCSSection(){
  const el=document.getElementById('tcsSection');if(!el)return;
  if(TYPE!=='sale'){el.innerHTML='';return;}
  if(!tcsEnabled){
    el.innerHTML=`<div class="tcs-trigger"><button class="tcs-trigger-btn" onclick="enableTCS('manual')">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="1.3"/><path d="M6 3.5v5M3.5 6h5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>
      Apply TCS
    </button></div>`;
    return;
  }
  let totalFX=0;
  S().rows.forEach(r=>{const c=calcRowData(r);totalFX+=c.forexINR;});
  const isAuto=tcsMode==='auto';

  // Full LRS toggle
  const fullLRSToggle=`<div class="tcs-full-lrs-wrap">
    <button class="tcs-full-lrs-btn${tcsFullLRS?' on':''}" onclick="toggleFullLRS()">
      <span class="tcs-full-lrs-check">${tcsFullLRS?'✓':''}</span>
      Full LRS limit already used — apply TCS on entire amount
    </button>
  </div>`;

  // Mode note (shown only when NOT using full LRS toggle and not auto)
  const modeNote=(!tcsFullLRS&&!isAuto)
    ?`<div class="tcs-mode-note">Manual — enter prior LRS usage below if applicable</div>`
    :(!tcsFullLRS&&isAuto)
      ?`<div class="tcs-mode-note">Auto-applied — transaction exceeds ₹10,00,000</div>`
      :'';

  const loanField=tcsType==='education'?`
    <div class="tcs-field">
      <div class="tcs-field-lbl">Education Loan Amount (₹)</div>
      <div class="pfx-wrap"><span class="pfx-sym" style="color:#78716C">₹</span>
        <input class="tcs-inp" type="number" placeholder="0 — leave blank if none" value="${tcsLoan>0?tcsLoan:''}" oninput="setTCSLoan(this.value)">
      </div>
      <div class="tcs-field-note">Loan from a specified institution (Sec. 80E) covers taxable portion at 0%</div>
    </div>`:'';

  // Prior usage field — hidden when full LRS is on
  const priorField=tcsFullLRS?'':`
    <div class="tcs-field">
      <div class="tcs-field-lbl">Prior LRS Usage This FY (₹)</div>
      <div class="pfx-wrap"><span class="pfx-sym" style="color:#78716C">₹</span>
        <input class="tcs-inp" type="number" placeholder="0 — leave blank if none" value="${tcsPrior>0?tcsPrior:''}" oninput="setTCSPrior(this.value)">
      </div>
    </div>`;

  el.innerHTML=`<div class="tcs-card">
    <div class="tcs-header">
      <div class="tcs-title">TCS — LRS</div>
      <button class="tcs-close" onclick="disableTCS()">✕</button>
    </div>
    ${fullLRSToggle}
    ${modeNote}
    <div class="tcs-type-bar">
      <button class="tcs-type-btn${tcsType==='personal'?' on':''}" onclick="setTCSType('personal')">Personal / Other (20%)</button>
      <button class="tcs-type-btn${tcsType==='education'?' on':''}" onclick="setTCSType('education')">Education (2%)</button>
    </div>
    <div id="tcs-summary">${buildTCSSummaryHTML()}</div>
    ${priorField}
    ${loanField}
    <div class="tcs-note">ℹ️ TCS is an advance tax. Fully refundable when filing ITR. Reflected in Form 26AS.</div>
  </div>`;
}

// ══════════ UPDATE BILL ══════════
function updateBill(){
  const inner=document.getElementById('billInner');
  const tbar=document.getElementById('tbar');
  renderEncCustBar();
  if(TYPE==='sale'){
    let totalFX=0;S().rows.forEach(r=>{const c=calcRowData(r);totalFX+=c.forexINR;});
    if(totalFX>TCS_THR&&!tcsEnabled){tcsEnabled=true;tcsMode='auto';}
    else if(totalFX<=TCS_THR&&tcsEnabled&&tcsMode==='auto'){tcsEnabled=false;tcsMode='manual';}
  }
  renderTCSSection();
  const has=S().rows.some(r=>(parseFloat(r.rate)||0)>0&&(parseFloat(r.amount)||0)>0);
  if(!has){inner.innerHTML=`<div class="bill-empty"><span class="bill-empty-ico">🧾</span><p>Enter a rate and amount<br>to generate your bill</p></div>`;tbar.style.display='none';return;}
  const data=calcAll();
  inner.innerHTML=billHTML(data,{});
  const totalR=Math.round(data.total);
  if(TYPE==='sale'){
    tbar.style.display='flex';
    if(totalR<50000){tbar.className='tbar ok';tbar.textContent='✓ Under ₹50,000 — All payment methods available';}
    else if(totalR<100000){tbar.className='tbar warn';tbar.textContent=`⚠ ₹${fn(totalR-50000)} over ₹50,000 — Cash not allowed`;}
    else{tbar.className='tbar warn';tbar.textContent='⚠ Over ₹1,00,000 — Bank Transfer only';}
  }else{tbar.style.display='none';}
}

// ══════════ BILL HTML (clean, no inputs) ══════════
function nowStr(){return new Date().toLocaleDateString('en-IN',{day:'2-digit',month:'long',year:'numeric'});}

function billHTML(data,opts){
  const {computed,totalFX,slab,sc,scGst,tcsAmount,total,pmodes}=data;
  const active=computed.filter(r=>r.forexINR>0);
  const slabR=Math.round(slab),scGstR=Math.round(scGst),totalR=Math.round(total);
  const typeLabel=opts.typeLabel||(TYPE==='sale'?'SALE':'ENCASHMENT');
  const totalLabel=opts.totalLabel||(TYPE==='sale'?'TOTAL PAYABLE':'AMOUNT RECEIVABLE');
  const splitBadge=opts.splitLabel?`<div style="font-size:10px;color:rgba(255,255,255,.4);margin-top:6px;letter-spacing:.1em;text-transform:uppercase">${opts.splitLabel}</div>`:'';
  const chips=pmodes.map(m=>`<span style="padding:5px 14px;border-radius:20px;font-size:11px;font-weight:600;background:rgba(255,255,255,.12);color:#fff;border:1px solid rgba(255,255,255,.2);display:inline-block">${m}</span>`).join('');
  const tRows=active.map(r=>{
    const rv=parseFloat(r.rate)||0;const rd=rv<0.01?5:rv<1?4:2;
    const fi=cinfo(r.code);
    return`<tr>
      <td style="padding:10px 6px;border-bottom:1px solid #E8EDED;font-size:13px"><span style="font-weight:700;color:#1C3829;display:inline-flex;align-items:center;gap:4px"><span style="font-size:14px">${fi.flag}</span><span>${r.code}</span></span></td>
      <td style="padding:10px 6px;border-bottom:1px solid #E8EDED;font-size:13px;color:#1A202C;font-weight:500">${fcurr(r.currAmt,r.code)}</td>
      <td style="padding:10px 6px;border-bottom:1px solid #E8EDED;font-size:13px;color:#1A202C;font-weight:500">₹${rv.toFixed(rd)}</td>
      <td style="padding:10px 6px;border-bottom:1px solid #E8EDED;font-size:13px;text-align:right;font-weight:700;color:#0F1611">${fINR(r.forexINR)}</td>
    </tr>`;
  }).join('');
  const sub=active.length>1?`<tr><td colspan="3" style="padding:10px 6px 6px;font-weight:700;border-top:2px solid #1C3829;font-size:13px">Subtotal</td><td style="padding:10px 6px 6px;text-align:right;font-weight:700;border-top:2px solid #1C3829;font-size:13px">${fINR(totalFX)}</td></tr>`:'';
  const tcsRow=tcsAmount>0?`<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 4px;font-size:13px;background:#F5F5F4;border-radius:4px;margin-top:2px">
    <span style="color:#57534E;font-weight:600">TCS @ ${tcsType==='education'?'2%':'20%'} (${tcsType==='education'?'Education':'Personal'})</span>
    <span style="font-weight:700;color:#1C1917;font-size:14px">${fINR(tcsAmount)}</span></div>`:'';
  return`<div style="font-family:'DM Sans',sans-serif;background:#fff">
  <div style="background:#1C3829;padding:22px 28px 20px;text-align:center">
    <div style="font-size:11px;letter-spacing:.18em;color:rgba(255,255,255,.5);text-transform:uppercase;margin-bottom:8px;font-weight:600">Matrix Forex</div>
    <div style="font-size:10px;letter-spacing:.12em;color:rgba(255,255,255,.38);text-transform:uppercase">Foreign Exchange Transaction</div>
    <div style="display:inline-block;margin-top:12px;padding:4px 18px;border:1px solid rgba(255,255,255,.22);border-radius:20px;font-size:11px;font-weight:700;letter-spacing:.12em;color:#fff;background:rgba(255,255,255,.1)">${typeLabel}</div>
    ${splitBadge}
  </div>
  <div style="padding:20px 28px">
    <div style="font-size:11px;color:#6B7A72;text-align:right;margin-bottom:16px">${nowStr()}</div>
    <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#6B7A72;padding-bottom:7px;border-bottom:1px solid #E2E8E4">Currencies</div>
    <table style="width:100%;border-collapse:collapse;margin-bottom:18px">
      <thead><tr>
        <th style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:#6B7A72;padding:8px 6px 6px;text-align:left;border-bottom:1px solid #E2E8E4">Currency</th>
        <th style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:#6B7A72;padding:8px 6px 6px;text-align:left;border-bottom:1px solid #E2E8E4">Amount</th>
        <th style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:#6B7A72;padding:8px 6px 6px;text-align:left;border-bottom:1px solid #E2E8E4">Rate</th>
        <th style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:#6B7A72;padding:8px 6px 6px;text-align:right;border-bottom:1px solid #E2E8E4">INR</th>
      </tr></thead>
      <tbody>${tRows}${sub}</tbody>
    </table>
    <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#6B7A72;padding-bottom:7px;border-bottom:1px solid #E2E8E4">Charges</div>
    <div style="margin-bottom:16px">
      <div style="display:flex;justify-content:space-between;align-items:center;padding:9px 0;border-bottom:1px solid #F0F4F1;font-size:13px"><span style="color:#2D3748">Goods &amp; Service Tax (Slabwise)</span><span style="font-weight:600;color:#0F1611">${fINR(slabR)}</span></div>
      <div style="display:flex;justify-content:space-between;align-items:center;padding:9px 0;border-bottom:1px solid #F0F4F1;font-size:13px"><span style="color:#2D3748">Service Charges</span><span style="font-weight:600;color:#0F1611">${fINR(sc)}</span></div>
      <div style="display:flex;justify-content:space-between;align-items:center;padding:9px 0;${tcsAmount>0?'border-bottom:1px solid #F0F4F1;':''}font-size:13px"><span style="color:#2D3748">Service Tax @ 18%</span><span style="font-weight:600;color:#0F1611">${fINR(scGstR)}</span></div>
      ${tcsRow}
    </div>
  </div>
  <div style="background:#1C3829;padding:18px 28px">
    <div style="display:flex;align-items:baseline;justify-content:space-between">
      <span style="font-size:11px;font-weight:600;color:rgba(255,255,255,.55);text-transform:uppercase;letter-spacing:.07em">${totalLabel}</span>
      <span style="font-family:'DM Sans',sans-serif;font-size:34px;font-weight:700;color:#fff;letter-spacing:-.5px">${fINR(totalR)}</span>
    </div>
  </div>
  <div style="background:#1C3829;padding:0 28px 18px">
    <div style="font-size:10px;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.38);margin-bottom:8px">Accepted Payment Methods</div>
    <div style="display:flex;gap:7px;flex-wrap:wrap">${chips}</div>
  </div>
</div>`;
}

// ══════════ SPLIT FEATURE ══════════
function getActiveCurrs(){
  return S().rows
    .filter(r=>(parseFloat(r.rate)||0)>0&&(parseFloat(r.amount)||0)>0)
    .map(r=>{
      const c=calcRowData(r);const info=cinfo(r.code);
      return{code:r.code,rate:c.rate,totalCurr:c.currAmt,totalINR:c.forexINR,dec:info.dec,flag:info.flag};
    });
}

function initSplits(){
  const ac=getActiveCurrs();
  splitData=Array.from({length:splitCount},(_,i)=>{
    const currAmounts={};
    ac.forEach(c=>{
      const share=+(c.totalCurr/splitCount).toFixed(c.dec);
      currAmounts[c.code]=i<splitCount-1?share:+(c.totalCurr-share*(splitCount-1)).toFixed(c.dec);
    });
    return{currAmounts,locked:false,sc:SC};
  });
}

function setSplitCount(n){splitCount=n;initSplits();renderSplitModal();}
function setCustType(t){
  splitCustType=t;
  document.getElementById('custIndian').classList.toggle('on',t==='indian');
  document.getElementById('custForeign').classList.toggle('on',t==='foreign');
  splitData.forEach((_,i)=>renderSplitCard(i));
}

function setSplitCurr(i,code,val){
  splitData[i].currAmounts[code]=parseFloat(val)||0;
  splitData[i].locked=true;
  rebalanceSplits(i);
  renderSplitRemaining();
  // Re-render all cards (rebalancing changes unlocked splits)
  renderSplitModal();
}
function snapSplitCurr(i,code,amt){
  splitData[i].currAmounts[code]=amt;
  splitData[i].locked=true;
  rebalanceSplits(i);
  renderSplitRemaining();
  renderSplitModal();
}
function setSplitSC(i,val){
  splitData[i].sc=parseFloat(val)||0;
  renderSplitCard(i);
}
function unlockSplit(i){
  splitData[i].locked=false;
  const ac=getActiveCurrs();
  const flexible=splitData.map((sp,idx)=>!sp.locked?idx:-1).filter(x=>x>=0);
  ac.forEach(c=>{
    const lockedSum=splitData.reduce((s,sp)=>sp.locked?s+(sp.currAmounts[c.code]||0):s,0);
    const residual=Math.max(0,+(c.totalCurr-lockedSum).toFixed(c.dec));
    const share=+(residual/flexible.length).toFixed(c.dec);
    flexible.forEach((idx,j)=>{
      splitData[idx].currAmounts[c.code]=j<flexible.length-1?share:+(residual-share*(flexible.length-1)).toFixed(c.dec);
    });
  });
  renderSplitModal();
}

function rebalanceSplits(editedIdx){
  const ac=getActiveCurrs();
  const flexible=splitData.map((sp,i)=>(!sp.locked&&i!==editedIdx)?i:-1).filter(x=>x>=0);
  if(flexible.length===0)return;
  ac.forEach(c=>{
    const lockedSum=splitData.reduce((s,sp,i)=>(sp.locked||i===editedIdx)?s+(sp.currAmounts[c.code]||0):s,0);
    const residual=Math.max(0,+(c.totalCurr-lockedSum).toFixed(c.dec));
    const share=+(residual/flexible.length).toFixed(c.dec);
    flexible.forEach((idx,j)=>{
      splitData[idx].currAmounts[c.code]=j<flexible.length-1?share:+(residual-share*(flexible.length-1)).toFixed(c.dec);
    });
  });
}

function calcSplitResult(sp){
  const ac=getActiveCurrs();
  let totalFX=0;
  const computed=ac.map(c=>{
    const currAmt=sp.currAmounts[c.code]||0;
    const forexINR=currAmt*c.rate;
    totalFX+=forexINR;
    return{code:c.code,currAmt,forexINR,rate:c.rate};
  }).filter(r=>r.currAmt>0||r.forexINR>0);
  const slab=slabGST(totalFX);
  const scGst=Math.round(sp.sc*0.18*100)/100;
  const base=TYPE==='sale'?totalFX+slab+sp.sc+scGst:totalFX-slab-sp.sc-scGst;
  const total=Math.round(base);
  const pmodes=splitPayModes(total);
  return{computed,totalFX,slab,sc:sp.sc,scGst,tcsAmount:0,taxableExcess:0,total,pmodes};
}

function splitPayModes(total){
  if(TYPE==='sale')return payModes(total);
  // Encashment: check USD-equivalent cash limit
  const usdC=getActiveCurrs().find(c=>c.code==='USD');
  const usdRate=usdC?usdC.rate:85;
  const limitUSD=splitCustType==='foreign'?3000:1000;
  const limitINR=limitUSD*usdRate;
  return total<=limitINR?['Cash','Bank Transfer']:['Bank Transfer'];
}

function openSplitModal(){
  if(getActiveCurrs().length===0){toast('Enter currency rate & amount first');return;}
  initSplits();
  document.getElementById('splitOverlay').style.display='flex';
  document.getElementById('splitToolbar').style.display=TYPE==='encashment'?'flex':'none';
  renderSplitModal();
}
function closeSplitModal(){document.getElementById('splitOverlay').style.display='none';}
function splitBgClick(e){if(e.target===document.getElementById('splitOverlay'))closeSplitModal();}

function renderSplitModal(){
  document.getElementById('splitCntBar').innerHTML=[2,3,4,5].map(n=>`<button class="split-cnt-btn${n===splitCount?' on':''}" onclick="setSplitCount(${n})">${n}</button>`).join('');
  renderSplitRemaining();
  const wrap=document.getElementById('splitCardsWrap');wrap.innerHTML='';
  splitData.forEach((_,i)=>{const d=document.createElement('div');d.id='sp-'+i;wrap.appendChild(d);renderSplitCard(i);});
}

function renderSplitRemaining(){
  const el=document.getElementById('splitRemain');if(!el)return;
  const ac=getActiveCurrs();
  let html='';
  ac.forEach(c=>{
    const alloc=splitData.reduce((s,sp)=>s+(sp.currAmounts[c.code]||0),0);
    const rem=+(c.totalCurr-alloc).toFixed(c.dec);
    const over=rem<-0.01,done=Math.abs(rem)<0.01;
    html+=`<div class="sri${over?' over':done?' done':''}">
      <span>${c.flag} ${c.code}</span>
      <span>${done?'✓':over?`⚠ +${fcurr(Math.abs(rem),c.code)}`:fcurr(rem,c.code)+' left'}</span>
    </div>`;
  });
  el.innerHTML=html;
}

function renderSplitCard(i){
  const el=document.getElementById('sp-'+i);if(!el)return;
  const sp=splitData[i];
  const ac=getActiveCurrs();
  const lockIcon=sp.locked?`<span class="sp-lock-ico">🔒</span>`:'';
  const unlockBtn=sp.locked?`<button class="sp-act unlock-btn" onclick="unlockSplit(${i})" title="Unlock">↺</button>`:'';

  // Currency input rows with derived INR and denom hints
  const currRows=ac.map(c=>{
    const amt=sp.currAmounts[c.code]||0;
    const derived=amt*c.rate;
    const rv=c.rate;const rd=rv<0.01?5:rv<1?4:2;
    let denomHTML='';
    const unit=SNAP[c.code]||1;
    if(unit>1&&amt>0){
      const fl=Math.floor(amt/unit)*unit,ce=Math.ceil(amt/unit)*unit;
      if(Math.abs(fl-amt)>0.001){
        const fd=(fl-amt)*c.rate,cd=(ce-amt)*c.rate;
        denomHTML=`<div class="sp-denom">💡 ${fcurr(amt,c.code)} ${c.code} isn't clean
          <div class="sp-denom-btns">
            <button class="dh-btn" onclick="snapSplitCurr(${i},'${c.code}',${fl})">↓ ${fcurr(fl,c.code)} (${fINR(fd)})</button>
            <button class="dh-btn" onclick="snapSplitCurr(${i},'${c.code}',${ce})">↑ ${fcurr(ce,c.code)} (+${fINR(Math.abs(cd))})</button>
          </div></div>`;
      }
    }
    return`<div class="sp-curr-grp">
      <div class="sp-curr-row">
        <div class="sp-curr-left"><span class="sp-curr-flag">${c.flag}</span><span class="sp-curr-code">${c.code}</span></div>
        <input class="sp-inp${sp.locked?' locked-inp':''}" type="number" value="${amt||''}" placeholder="0"
          step="${c.dec===0?1:c.dec===3?0.001:0.01}"
          oninput="setSplitCurr(${i},'${c.code}',this.value)">
      </div>
      <div class="sp-curr-derived">× ₹${rv.toFixed(rd)} = ${derived>0?fINR(derived):'—'}</div>
      ${denomHTML}
    </div>`;
  }).join('');

  const d=calcSplitResult(sp);
  const tcsOnThis=(i===0&&tcsEnabled)?Math.round(calcTCS(
    splitData.reduce((s,sp2,idx)=>{
      const ac2=getActiveCurrs();
      return s+ac2.reduce((ss,c)=>ss+(sp2.currAmounts[c.code]||0)*c.rate,0);
    },0) // total FX across all splits
  ).tcsAmount):0;

  // Actually for TCS on split 1: TCS is calculated on the TOTAL bill's TCS, not per-split
  // Get the full bill TCS and put it on split 1
  const mainTCS=(i===0&&tcsEnabled)?Math.round(calcTCS(
    getActiveCurrs().reduce((s,c)=>s+c.totalINR,0)
  ).tcsAmount):0;

  const grandTotal=Math.round(d.total+mainTCS);
  const chips=splitPayModes(grandTotal).map(m=>`<span class="sp-pay-chip">${m}</span>`).join('');
  const lbl=TYPE==='sale'?'Total Payable':'Amount Receivable';
  const mainTCSRow=mainTCS>0?`<div class="sp-sum-row" style="color:#57534E"><span>TCS (${tcsType==='education'?'2%':'20%'})</span><span style="color:#1C1917">${fINR(mainTCS)}</span></div>`:'';

  // Total forex INR for this split
  const splitFxINR=ac.reduce((s,c)=>s+(sp.currAmounts[c.code]||0)*c.rate,0);

  el.innerHTML=`<div class="sp-card${sp.locked?' locked':''}">
    <div class="sp-card-hdr">
      <span class="sp-num">Split ${i+1} of ${splitCount} ${lockIcon}</span>
      <div class="sp-acts">
        ${unlockBtn}
        <button class="sp-act" onclick="copySplitImg(${i})" title="Copy Image">
          <svg width="12" height="12" viewBox="0 0 15 15" fill="none"><rect x="4" y="4" width="9" height="9" rx="1.5" stroke="currentColor" stroke-width="1.4"/><path d="M3 10H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v1" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>
        </button>
        <button class="sp-act" onclick="printSplit(${i})" title="Print">
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><rect x="2" y="5" width="10" height="6" rx="1.2" stroke="currentColor" stroke-width="1.3"/><path d="M4 5V2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V5M4 9h6" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>
        </button>
      </div>
    </div>
    <div class="sp-body">
      <div class="sp-sec-lbl">Currencies</div>
      ${currRows}
      ${splitFxINR>0?`<div class="sp-total-fx">Total Forex INR: <strong>${fINR(Math.round(splitFxINR))}</strong></div>`:''}
      <div class="sp-sc-row">
        <span class="sp-sc-lbl">Service Charge</span>
        <div class="pfx-wrap" style="width:130px"><span class="pfx-sym">₹</span>
          <input class="sp-inp pfx" type="number" value="${sp.sc}" oninput="setSplitSC(${i},this.value)">
        </div>
      </div>
      <div class="sp-divider"></div>
      <div class="sp-summary">
        <div class="sp-sum-row"><span>G&S Tax (Slabwise)</span><span>${fINR(Math.round(d.slab))}</span></div>
        <div class="sp-sum-row"><span>Service Charges</span><span>${fINR(d.sc)}</span></div>
        <div class="sp-sum-row"><span>Service Tax (18%)</span><span>${fINR(Math.round(d.scGst))}</span></div>
        ${mainTCSRow}
        <div class="sp-sum-total"><span>${lbl}</span><span>${fINR(grandTotal)}</span></div>
        <div class="sp-pay-modes">${chips}</div>
      </div>
    </div>
  </div>`;
}

function splitBillData(i){
  const sp=splitData[i];
  const d=calcSplitResult(sp);
  const mainTCS=(i===0&&tcsEnabled)?Math.round(calcTCS(getActiveCurrs().reduce((s,c)=>s+c.totalINR,0)).tcsAmount):0;
  const total=Math.round(d.total+mainTCS);
  return{...d,tcsAmount:mainTCS,total,pmodes:splitPayModes(total)};
}

async function copySplitImg(i){
  if(typeof html2canvas==='undefined'){toast('Library loading, try again');return;}
  const data=splitBillData(i);
  const snap=document.getElementById('snapTarget');
  snap.innerHTML=billHTML(data,{splitLabel:`Split ${i+1} of ${splitCount}`});
  await new Promise(r=>setTimeout(r,120));
  try{
    const canvas=await html2canvas(snap,{scale:3,useCORS:true,allowTaint:true,backgroundColor:'#fff',logging:false,width:500,windowWidth:500,
      onclone:doc=>{const el=doc.getElementById('snapTarget');if(el){el.style.position='static';el.style.left='0';}}});
    canvas.toBlob(async blob=>{
      if(!blob){toast('Capture failed');return;}
      try{await navigator.clipboard.write([new ClipboardItem({'image/png':blob})]);toast(`✓ Split ${i+1} copied!`);}
      catch{const a=document.createElement('a');a.download=`split-${i+1}.png`;a.href=URL.createObjectURL(blob);a.click();setTimeout(()=>URL.revokeObjectURL(a.href),3000);toast(`Split ${i+1} saved as PNG`);}
    },'image/png');
  }catch(e){toast('Error capturing');console.error(e);}
}

function printSplit(i){openPrintWin(billHTML(splitBillData(i),{splitLabel:`Split ${i+1} of ${splitCount}`}));}

async function copyAllSplits(){
  if(typeof html2canvas==='undefined'){toast('Library loading, try again');return;}
  const snap=document.getElementById('snapTarget');
  snap.innerHTML=splitData.map((_,i)=>`<div style="margin-bottom:18px;box-shadow:0 2px 8px rgba(0,0,0,.1)">${billHTML(splitBillData(i),{splitLabel:`Split ${i+1} of ${splitCount}`})}</div>`).join('');
  await new Promise(r=>setTimeout(r,150));
  try{
    const canvas=await html2canvas(snap,{scale:2.5,useCORS:true,allowTaint:true,backgroundColor:'#EDECEA',logging:false,width:500,windowWidth:500,
      onclone:doc=>{const el=doc.getElementById('snapTarget');if(el){el.style.position='static';el.style.left='0';el.style.padding='14px';}}});
    canvas.toBlob(async blob=>{
      if(!blob){toast('Capture failed');return;}
      try{await navigator.clipboard.write([new ClipboardItem({'image/png':blob})]);toast('✓ All splits copied!');}
      catch{const a=document.createElement('a');a.download='all-splits.png';a.href=URL.createObjectURL(blob);a.click();setTimeout(()=>URL.revokeObjectURL(a.href),3000);toast('All splits saved as PNG');}
    },'image/png');
  }catch(e){toast('Error');console.error(e);}
}

// ══════════ COPY / PRINT MAIN ══════════
async function copyImg(){
  const has=S().rows.some(r=>(parseFloat(r.rate)||0)>0&&(parseFloat(r.amount)||0)>0);
  if(!has){toast('Generate a bill first');return;}
  if(typeof html2canvas==='undefined'){toast('Library loading, try again');return;}
  const snap=document.getElementById('snapTarget');
  snap.innerHTML=billHTML(calcAll(),{});
  await new Promise(r=>setTimeout(r,120));
  try{
    const canvas=await html2canvas(snap,{scale:3,useCORS:true,allowTaint:true,backgroundColor:'#fff',logging:false,width:500,windowWidth:500,
      onclone:doc=>{const el=doc.getElementById('snapTarget');if(el){el.style.position='static';el.style.left='0';}}});
    canvas.toBlob(async blob=>{
      if(!blob){toast('Capture failed');return;}
      try{await navigator.clipboard.write([new ClipboardItem({'image/png':blob})]);toast('✓ Bill copied — paste in WhatsApp!');}
      catch{const a=document.createElement('a');a.download=`forex-bill-${Date.now()}.png`;a.href=URL.createObjectURL(blob);a.click();setTimeout(()=>URL.revokeObjectURL(a.href),3000);toast('Saved as PNG');}
    },'image/png');
  }catch(e){toast('Error capturing');console.error(e);}
}
function copyTxt(){
  const has=S().rows.some(r=>(parseFloat(r.rate)||0)>0&&(parseFloat(r.amount)||0)>0);
  if(!has){toast('Generate a bill first');return;}
  const d=calcAll();
  const typeLabel=TYPE==='sale'?'SALE':'ENCASHMENT';
  const totalLabel=TYPE==='sale'?'TOTAL PAYABLE':'AMOUNT RECEIVABLE';
  const lines=d.computed.filter(r=>r.forexINR>0).map(r=>{
    const rv=parseFloat(r.rate)||0;const rd=rv<0.01?5:rv<1?4:2;
    return`  ${cinfo(r.code).flag} ${r.code}  ${fcurr(r.currAmt,r.code)} × ₹${rv.toFixed(rd)} = ${fINR(r.forexINR)}`;
  }).join('\n');
  const sub=d.computed.filter(r=>r.forexINR>0).length>1?`\n  Subtotal  ${fINR(d.totalFX)}`:'';
  const tcsLine=d.tcsAmount>0?`\n  TCS (${tcsType==='education'?'2%':'20%'})  ${fINR(d.tcsAmount)}`:'';
  const txt=`━━━━━━━━━━━━━━━━━━━━━\nMatrix Forex — ${typeLabel}\n━━━━━━━━━━━━━━━━━━━━━\n${nowStr()}\n\nCURRENCIES:\n${lines}${sub}\n\nCHARGES:\n  G&S Tax (Slabwise)  ${fINR(Math.round(d.slab))}\n  Service Charges     ${fINR(d.sc)}\n  Service Tax (18%)   ${fINR(Math.round(d.scGst))}${tcsLine}\n━━━━━━━━━━━━━━━━━━━━━\n${totalLabel}: ${fINR(Math.round(d.total))}\nPayment: ${d.pmodes.join(' | ')}`;
  navigator.clipboard.writeText(txt).then(()=>toast('✓ Text copied')).catch(()=>toast('Copy failed'));
}
function doPrint(){
  const has=S().rows.some(r=>(parseFloat(r.rate)||0)>0&&(parseFloat(r.amount)||0)>0);
  if(!has){toast('Generate a bill first');return;}
  openPrintWin(billHTML(calcAll(),{}));
}
function openPrintWin(content){
  const win=window.open('','_blank','width=580,height=750,menubar=no,toolbar=no');
  if(!win){toast('Allow pop-ups for print');return;}
  win.document.write(`<!DOCTYPE html><html><head><meta charset="UTF-8">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
    <title> </title>
    <style>*{box-sizing:border-box;margin:0;padding:0}body{background:#fff;font-family:'DM Sans',sans-serif}@page{margin:0;size:auto}@media print{body{margin:0}a[href]:after{content:none!important}}</style>
  </head><body>${content}<script>document.fonts.ready.then(()=>{setTimeout(()=>{window.print();},350);});<\/script></body></html>`);
  win.document.close();
}

// ══════════ TOAST / FORMAT ══════════
let toastTimer;
function toast(msg){clearTimeout(toastTimer);const el=document.getElementById('toast');el.textContent=msg;el.classList.add('show');toastTimer=setTimeout(()=>el.classList.remove('show'),2800);}
function fn(n,d=2){return Math.abs(n).toLocaleString('en-IN',{minimumFractionDigits:d,maximumFractionDigits:d});}
function fINR(n){return'₹'+fn(n);}
function fcurr(n,code){const i=CURRENCIES.find(c=>c.code===code)||{dec:2};return n.toLocaleString('en-IN',{maximumFractionDigits:i.dec,minimumFractionDigits:0});}

// ══════════ INIT ══════════
(function(){const s=document.createElement('script');s.src='https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';s.onerror=()=>console.warn('html2canvas not loaded');document.head.appendChild(s);})();
onSC(250);addRow();
</script>
</body>
</html>
