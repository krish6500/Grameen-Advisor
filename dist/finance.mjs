export function calculate({principal,rate,months,price,variable,fixed,units,income,expenses,debt}) {
 const a=[principal,rate,months,price,variable,fixed,units,income,expenses,debt];
 if(a.some(x=>!Number.isFinite(x)||x<0)||months<1||!Number.isInteger(months)||price<=0) throw Error('Enter valid non-negative amounts, a positive selling price and whole months.');
 const r=rate/1200;
 const emi=principal===0?0:r===0?principal/months:principal*r/(-Math.expm1(-months*Math.log1p(r)));
 const margin=price-variable,revenue=price*units,operating=margin*units-fixed;
 return {emi,total:emi*months,interest:emi*months-principal,breakEven:margin>0?Math.ceil(fixed/margin):null,revenue,operating,cash:operating-emi,buffer:income-expenses-debt-emi,coverage:emi>0?operating/emi:null};
}
