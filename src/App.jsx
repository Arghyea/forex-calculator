// FINAL CLEAN VERSION (NO PARSE ERRORS + FIXED LOGIC)
import React, { useState } from "react";
import html2canvas from "html2canvas";

const currencies = ["USD","THB","EUR","AED","VND","MYR","SGD","IDR","JPY","KRW","CNY","AUD","NZD","PHP","SAR","GBP","LKR","HKD"];

const denomMap = {
  USD: 10, EUR: 50, GBP: 50, AED: 100, THB: 1000,
  VND: 500000, IDR: 100000, JPY: 10000, KRW: 50000,
  CNY: 100, SAR: 500, default: 10
};

export default function App(){
  const [mode,setMode] = useState("SALE");
  const [service,setService] = useState(250);

  const [saleRows,setSaleRows] = useState([
    {currency:"USD",type:"INR",value:"",rate:"",rounded:true}
  ]);

  const [encRows,setEncRows] = useState([
    {currency:"USD",value:"",rate:""}
  ]);

  const rows = mode === "SALE" ? saleRows : encRows;
  const setRows = mode === "SALE" ? setSaleRows : setEncRows;

  const updateRow=(i,key,val)=>{
    const copy=[...rows];
    copy[i][key]=val;
    setRows(copy);
  };

  const addRow=()=> setRows([...rows,{currency:"USD",type:"INR",value:"",rate:"",rounded:true}]);
  const removeRow=(i)=> setRows(rows.filter((_,idx)=>idx!==i));

  function slabGST(amt){
    let tax=45;
    if(amt>25000) tax += (Math.min(amt,100000)-25000)*0.0018;
    if(amt>100000) tax += (amt-100000)*0.0009;
    return tax;
  }

  let items=[];
  let subtotal=0;

  rows.forEach(r=>{
    const rate=parseFloat(r.rate);
    const value=parseFloat(r.value);
    if(!rate||!value) return;

    if(mode==="SALE"){

      let inrInput, currencyQty;

      if(r.type === "INR"){
        inrInput = value;

        let usable = inrInput;
        for(let i=0;i<8;i++){
          const gst = slabGST(usable);
          usable = inrInput - gst - service - (service*0.18);
        }

        currencyQty = usable / rate;

      } else {
        currencyQty = value;
        inrInput = currencyQty * rate;
      }

      const rawExact = inrInput / rate;
      const exact = currencyQty;

      const step = denomMap[r.currency] || denomMap.default;
      const down = Math.floor(exact/step)*step;
      const up = Math.ceil(exact/step)*step;
      const rounded = (exact - down) <= (up - exact) ? down : up;

      const finalQty = r.rounded ? rounded : exact;
      const inr = finalQty * rate;

      subtotal += inr;

      items.push({
        currency:r.currency,
        rawExact,
        exact,
        finalQty,
        rate,
        inr,
        inputType:r.type
      });

    } else {
      const inrRaw = value * rate;
      const slab = slabGST(inrRaw);
      const serviceGST = service * 0.18;
      const final = inrRaw - slab - service - serviceGST;

      subtotal += final;

      items.push({
        currency:r.currency,
        inrRaw,
        slab,
        serviceGST,
        finalQty:value,
        rate,
        inr:final
      });
    }
  });

  const slab = slabGST(subtotal);
  const serviceGST = service * 0.18;

  const total = mode==="SALE"
    ? subtotal + slab + service + serviceGST
    : subtotal;

  const copyImage=async()=>{
    const el=document.getElementById("bill");
    const canvas=await html2canvas(el,{scale:3});
    const blob=await new Promise(r=>canvas.toBlob(r));
    await navigator.clipboard.write([new ClipboardItem({"image/png":blob})]);
  };

  return (
    <div style={page}>

      <div style={modeWrap}>
        <button onClick={()=>setMode("SALE")} style={modeBtn(mode==="SALE")}>Sale</button>
        <button onClick={()=>setMode("ENCASHMENT")} style={modeBtn(mode==="ENCASHMENT")}>Encashment</button>
      </div>

      <div style={serviceWrap}>
        <span style={{color:"#aaa"}}>Service:</span>
        <input
          type="number"
          value={service}
          onChange={e=>setService(Number(e.target.value))}
          style={serviceInput}
        />
      </div>

      <div style={card}>
        {rows.map((r,i)=>(
          <div key={i} style={rowBox}>

            <select value={r.currency} onChange={e=>updateRow(i,'currency',e.target.value)} style={input}>
              {currencies.map(c=>(<option key={c}>{c}</option>))}
            </select>

            {mode==="SALE" && (
              <select value={r.type} onChange={e=>updateRow(i,'type',e.target.value)} style={input}>
                <option value="INR">INR Budget</option>
                <option value="CUR">Currency</option>
              </select>
            )}

            <input placeholder="Amount" value={r.value} onChange={e=>updateRow(i,'value',e.target.value)} style={input}/>

            <input placeholder="Rate" value={r.rate} onChange={e=>updateRow(i,'rate',e.target.value)} style={input}/>

            {mode==="SALE" && (
              <button style={toggle} onClick={()=>{
                const copy=[...rows];
                copy[i].rounded=!copy[i].rounded;
                setRows(copy);
              }}>{r.rounded?"Rounded":"Exact"}</button>
            )}

            <button style={removeBtn} onClick={()=>removeRow(i)}>−</button>
          </div>
        ))}

        <button style={addBtn} onClick={addRow}>+ Add Currency</button>
      </div>

      <div style={cardGrid}>
        {items.map((i,idx)=>(
          <div key={idx} style={currencyCard}>
            <div style={label}>
              {mode==="SALE"
                ? (i.inputType === "CUR" ? "YOU PAY" : "YOU GET")
                : "YOU RECEIVE"}
            </div>

            <div style={big}>
              {mode==="SALE"
                ? (i.inputType === "CUR"
                  ? `₹${Math.round(i.inr)}`
                  : `${Math.round(i.finalQty)} ${i.currency}`)
                : `₹${Math.round(i.inr)}`}
            </div>

            {mode==="SALE" && i.inputType === "INR" && (
              <>
                <div style={sub}>Exact: {i.exact.toFixed(2)}</div>
                <div style={sub}>Before: {i.rawExact.toFixed(2)}</div>
              </>
            )}

          </div>
        ))}
      </div>

      <div id="bill" style={bill}>
        <h2 style={billTitle}>FOREX QUOTATION</h2>

        {items.map((i,idx)=>(
          <div key={idx} style={billRow}>
            <span>{i.currency} {Math.round(i.finalQty)} @ {i.rate}</span>
            <span>₹{Math.round(mode==="SALE"?i.inr:(i.inrRaw))}</span>
          </div>
        ))}

        <hr/>

        <div style={billRow}><span>Subtotal</span><span>₹{Math.round(subtotal)}</span></div>

        {mode==="SALE" && (
          <>
            <div style={billRow}><span>Goods & Service Charge (Slabwise)</span><span>₹{Math.round(slab)}</span></div>
            <div style={billRow}><span>Service</span><span>₹{service}</span></div>
            <div style={billRow}><span>GST (18%)</span><span>₹{Math.round(serviceGST)}</span></div>
          </>
        )}

        <hr/>

        <div style={{...billRow,fontSize:22,fontWeight:800}}>
          <span>Final Payable</span>
          <span>₹{Math.round(total)}</span>
        </div>
      </div>

      <button style={copyBtn} onClick={copyImage}>Copy Bill</button>

    </div>
  );
}

const page={background:"#020617",minHeight:"100vh",padding:40,fontFamily:"-apple-system"};

const modeWrap={display:"flex",justifyContent:"center",gap:20,marginBottom:30};
const modeBtn=(a)=>({padding:"14px 30px",borderRadius:999,background:a?"#fff":"#111",color:a?"#000":"#aaa"});

const serviceWrap={display:"flex",justifyContent:"center",gap:10,marginBottom:20};
const serviceInput={padding:10,borderRadius:10,width:100,textAlign:"center"};

const card={background:"#111",padding:20,borderRadius:20,maxWidth:1000,margin:"auto"};
const rowBox={display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr auto auto",gap:10,marginBottom:10};

const input={padding:14,borderRadius:12,background:"#020617",border:"1px solid #333",color:"white"};
const toggle={padding:"10px",background:"#1c1c1e",borderRadius:10,color:"white"};
const removeBtn={padding:"8px 12px",background:"#ff3b30",border:"none",borderRadius:8,color:"white"};
const addBtn={marginTop:10,padding:"12px 20px",borderRadius:12,background:"#fff",color:"#000"};

const cardGrid={display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",gap:20,marginTop:40,maxWidth:1000,marginInline:"auto"};

const currencyCard={background:"#111",padding:20,borderRadius:20,textAlign:"center"};
const label={fontSize:12,color:"#777"};
const big={fontSize:32,fontWeight:700,color:"white",margin:"10px 0"};
const sub={fontSize:12,color:"#aaa"};

const bill={background:"#fff",padding:30,borderRadius:28,maxWidth:550,margin:"50px auto"};
const billTitle={textAlign:"center",marginBottom:20,color:"#000",fontWeight:900,fontSize:20};
const billRow={display:"flex",justifyContent:"space-between",marginBottom:10};

const copyBtn={display:"block",margin:"auto",padding:"12px 20px",borderRadius:12,background:"#007aff",color:"white"};