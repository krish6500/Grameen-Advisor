import {test} from 'node:test';import assert from 'node:assert/strict';import {businesses,assess,alternatives,matches} from '../dist/advisor.mjs';
const b=businesses.find(x=>x.id==='kitchen'),resources={assets:['kitchen','water'],skill:'cooking',capital:30000},economics={price:80,variable:45,fixed:6000};
test('unknown evidence never implies viable market',()=>{assert.equal(assess({business:b,resources,economics}).status,'More evidence needed');});
test('low obtainable demand flags intended idea',()=>{const a=assess({business:b,resources,economics,demand:100,knownCompetitors:2});assert.equal(a.breakEven,172);assert.equal(a.status,'Rework before investing');});
test('competition is a caution signal even with higher demand',()=>{assert.equal(assess({business:b,resources,economics,demand:400,mappedCount:6}).status,'Rework before investing');});
test('zero mapped results never means zero competition',()=>{const a=assess({business:b,resources,economics,mappedCount:0});assert.equal(a.status,'More evidence needed');assert.ok(a.tasks.some(x=>x.includes('may still exist')));});
test('adequate assumptions permit pilot, not growth guarantee',()=>{assert.equal(assess({business:b,resources,economics,demand:300,knownCompetitors:2}).status,'Worth a small pilot');});
test('same kitchen resources rank food preserves first',()=>{const a=alternatives(b,resources);assert.equal(a[0].id,'preserves');assert.equal(a[0].fit.missing.length,0);assert.ok(!a.some(x=>x.id===b.id));});
test('negative contribution flagged regardless of demand',()=>{assert.equal(assess({business:b,resources,economics:{...economics,variable:90},demand:10000,knownCompetitors:0}).status,'Rework before investing');});
test('OSM category matching uses tags only',()=>{assert.equal(matches(b,{amenity:'restaurant'}),true);assert.equal(matches(b,{shop:'dairy'}),false);});

test('zero mapped entries with positive demand still needs competition evidence',()=>{assert.equal(assess({business:b,resources,economics,demand:300,mappedCount:0}).status,'More evidence needed');});
test('missing skills are a caution',()=>{assert.equal(assess({business:b,resources:{...resources,skill:'digital'},economics,demand:300,knownCompetitors:0}).status,'Rework before investing');});

test('custom milk plan prioritises reuse of cows over unrelated land',()=>{const intended={id:'custom',assets:['livestock','custom:milk chiller']};const r={assets:['livestock','custom:milk chiller','water','land'],skill:'farming',capital:50000};assert.equal(alternatives(intended,r)[0].id,'dairy');});
