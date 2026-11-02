import {test} from 'node:test';import assert from 'node:assert/strict';import {calculate} from '../dist/finance.mjs';
const base={principal:100000,rate:12,months:12,price:100,variable:60,fixed:10000,units:400,income:30000,expenses:15000,debt:1000};
test('EMI matches independent amortization and known value',()=>{const v=calculate(base);assert.ok(Math.abs(v.emi-8884.8788678)<.00001);let b=base.principal;for(let i=0;i<12;i++)b=b*1.01-v.emi;assert.ok(Math.abs(b)<1e-7);});
test('zero interest and zero loan',()=>{assert.equal(calculate({...base,rate:0}).emi,100000/12);assert.equal(calculate({...base,principal:0}).emi,0);});
test('break even, profit and household buffer',()=>{const v=calculate(base);assert.equal(v.breakEven,250);assert.equal(v.operating,6000);assert.equal(v.revenue,40000);assert.equal(v.buffer,14000-v.emi);assert.equal(v.cash,6000-v.emi);});
test('nonpositive margins have no break even',()=>{assert.equal(calculate({...base,variable:100}).breakEven,null);assert.equal(calculate({...base,variable:110}).breakEven,null);});
test('invalid numbers and months rejected',()=>{for(const patch of [{rate:-1},{price:0},{months:0},{months:1.5},{principal:NaN}])assert.throws(()=>calculate({...base,...patch}));});
test('fractional break even rounds up and small rates stay finite',()=>{assert.equal(calculate({...base,fixed:10001}).breakEven,251);assert.ok(Number.isFinite(calculate({...base,rate:1e-10}).emi));});
