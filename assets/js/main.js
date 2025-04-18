const vU1 = document.querySelector('#vU1');
const aU1 = document.querySelector('#aU1');
const tU1 = document.querySelector('#tU1');
const eqU1 = document.querySelector('#eqU1');
const u1 = document.querySelector('#u1');

let vU1Value, aU1Value, tU1Value;

inputListener(vU1, newValue =>  vU1Value = newValue );
inputListener(aU1, newValue =>  aU1Value = newValue );
inputListener(tU1, newValue =>  tU1Value = newValue );

eqU1.addEventListener("click",() => {
	u1.innerHTML = ((vU1Value - (aU1Value*tU1Value))).toFixed(4);
});



const vU2 = document.querySelector('#vU2');
const aU2 = document.querySelector('#aU2');
const sU2 = document.querySelector('#sU2');
const eqU2 = document.querySelector('#eqU2');
const u2 = document.querySelector('#u2');

let vU2Value, aU2Value, sU2Value;

inputListener(vU2, newValue =>  vU2Value = newValue );
inputListener(aU2, newValue =>  aU2Value = newValue );
inputListener(sU2, newValue =>  sU2Value = newValue );

eqU2.addEventListener("click",() => {
	u2.innerHTML = (Math.sqrt((vU2Value*vU2Value) - (2*aU2Value*sU2Value))).toFixed(4);
});



const vU3 = document.querySelector('#vU3');
const sU3 = document.querySelector('#sU3');
const tU3 = document.querySelector('#tU3');
const eqU3 = document.querySelector('#eqU3');
const u3 = document.querySelector('#u3');

let vU3Value, sU3Value, tU3Value;

inputListener(vU3, newValue =>  vU3Value = newValue );
inputListener(sU3, newValue =>  sU3Value = newValue );
inputListener(tU3, newValue =>  tU3Value = newValue );

eqU3.addEventListener("click",() => {
	u3.innerHTML = (((2*sU3Value)/tU3Value) - vU3Value).toFixed(4);
});



const aU4 = document.querySelector('#aU4');
const sU4 = document.querySelector('#sU4');
const tU4 = document.querySelector('#tU4');
const eqU4 = document.querySelector('#eqU4');
const u4 = document.querySelector('#u4');

let aU4Value, sU4Value, tU4Value;

inputListener(aU4, newValue =>  aU4Value = newValue );
inputListener(sU4, newValue =>  sU4Value = newValue );
inputListener(tU4, newValue =>  tU4Value = newValue );

eqU4.addEventListener("click",() => {
	u4.innerHTML = ((sU4Value/tU4Value) - ((aU4Value*tU4Value)/2)).toFixed(4);
});




const uV1 = document.querySelector('#uV1');
const aV1 = document.querySelector('#aV1');
const tV1 = document.querySelector('#tV1');
const eqV1 = document.querySelector('#eqV1');
const v1 = document.querySelector('#v1');

let uV1Value, aV1Value, tV1Value;

inputListener(uV1, newValue =>  uV1Value = newValue );
inputListener(aV1, newValue =>  aV1Value = newValue );
inputListener(tV1, newValue =>  tV1Value = newValue );

eqV1.addEventListener("click",() => {
	v1.innerHTML = (uV1Value + (aV1Value*tV1Value)).toFixed(4);
});



const uV2 = document.querySelector('#uV2');
const aV2 = document.querySelector('#aV2');
const sV2 = document.querySelector('#sV2');
const eqV2 = document.querySelector('#eqV2');
const v2 = document.querySelector('#v2');

let uV2Value, aV2Value, sV2Value;

inputListener(uV2, newValue =>  uV2Value = newValue );
inputListener(aV2, newValue =>  aV2Value = newValue );
inputListener(sV2, newValue =>  sV2Value = newValue );

eqV2.addEventListener("click",() => {
	v2.innerHTML = (Math.sqrt((uV2Value*uV2Value) + (2*aV2Value*sV2Value))).toFixed(4);
});



const uV3 = document.querySelector('#uV3');
const sV3 = document.querySelector('#sV3');
const tV3 = document.querySelector('#tV3');
const eqV3 = document.querySelector('#eqV3');
const v3 = document.querySelector('#v3');

let uV3Value, sV3Value, tV3Value;

inputListener(uV3, newValue =>  uV3Value = newValue );
inputListener(sV3, newValue =>  sV3Value = newValue );
inputListener(tV3, newValue =>  tV3Value = newValue );

eqV3.addEventListener("click",() => {
	v3.innerHTML = (((2*sV3Value)/tV3Value) - uV3Value).toFixed(4);
});




const uA1 = document.querySelector('#uA1');
const vA1 = document.querySelector('#vA1');
const tA1 = document.querySelector('#tA1');
const eqA1 = document.querySelector('#eqA1');
const a1 = document.querySelector('#a1');

let uA1Value, vA1Value, tA1Value;

inputListener(uA1, newValue =>  uA1Value = newValue );
inputListener(vA1, newValue =>  vA1Value = newValue );
inputListener(tA1, newValue =>  tA1Value = newValue );

eqA1.addEventListener("click",() => {
	a1.innerHTML = ((vA1Value-uA1Value) / tA1Value).toFixed(4);
});



const uA2 = document.querySelector('#uA2');
const vA2 = document.querySelector('#vA2');
const sA2 = document.querySelector('#sA2');
const eqA2 = document.querySelector('#eqA2');
const a2 = document.querySelector('#a2');

let uA2Value, vA2Value, sA2Value;

inputListener(uA2, newValue =>  uA2Value = newValue );
inputListener(vA2, newValue =>  vA2Value = newValue );
inputListener(sA2, newValue =>  sA2Value = newValue );

eqA2.addEventListener("click",() => {
	a2.innerHTML = (((vA2Value*vA2Value)-(uA2Value*uA2Value)) / (2*sA2Value)).toFixed(4);
});



const uA3 = document.querySelector('#uA3');
const sA3 = document.querySelector('#sA3');
const tA3 = document.querySelector('#tA3');
const eqA3 = document.querySelector('#eqA3');
const a3 = document.querySelector('#a3');

let uA3Value, sA3Value, tA3Value;

inputListener(uA3, newValue =>  uA3Value = newValue );
inputListener(sA3, newValue =>  sA3Value = newValue );
inputListener(tA3, newValue =>  tA3Value = newValue );

eqA3.addEventListener("click",() => {
	a3.innerHTML = ((2*(sA3Value-(uA3Value*tA3Value))) / (tA3Value*tA3Value)).toFixed(4);
});




const uS1 = document.querySelector('#uS1');
const vS1 = document.querySelector('#vS1');
const tS1 = document.querySelector('#tS1');
const eqS1 = document.querySelector('#eqS1');
const s1 = document.querySelector('#s1');

let uS1Value, vS1Value, tS1Value;

inputListener(uS1, newValue =>  uS1Value = newValue );
inputListener(vS1, newValue =>  vS1Value = newValue );
inputListener(tS1, newValue =>  tS1Value = newValue );

eqS1.addEventListener("click",() => {
	s1.innerHTML = (((uS1Value+vS1Value)/2) * tS1Value).toFixed(4);
});



const uS2 = document.querySelector('#uS2');
const vS2 = document.querySelector('#vS2');
const aS2 = document.querySelector('#aS2');
const eqS2 = document.querySelector('#eqS2');
const s2 = document.querySelector('#s2');

let uS2Value, vS2Value, aS2Value;

inputListener(uS2, newValue =>  uS2Value = newValue );
inputListener(vS2, newValue =>  vS2Value = newValue );
inputListener(aS2, newValue =>  aS2Value = newValue );

eqS2.addEventListener("click",() => {
	s2.innerHTML = (((vS2Value*vS2Value)-(uS2Value*uS2Value)) / (2*aS2Value)).toFixed(4);
});



const uS3 = document.querySelector('#uS3');
const aS3 = document.querySelector('#aS3');
const tS3 = document.querySelector('#tS3');
const eqS3 = document.querySelector('#eqS3');
const s3 = document.querySelector('#s3');

let uS3Value, aS3Value, tS3Value;

inputListener(uS3, newValue =>  uS3Value = newValue );
inputListener(aS3, newValue =>  aS3Value = newValue );
inputListener(tS3, newValue =>  tS3Value = newValue );

eqS3.addEventListener("click",() => {
	s3.innerHTML = ((uS3Value*tS3Value) + ((aS3Value*(tS3Value*tS3Value))/2)).toFixed(4);
});




const uT1 = document.querySelector('#uT1');
const vT1 = document.querySelector('#vT1');
const aT1 = document.querySelector('#aT1');
const eqT1 = document.querySelector('#eqT1');
const t1 = document.querySelector('#t1');

let uT1Value, vT1Value, aT1Value;

inputListener(uT1, newValue =>  uT1Value = newValue );
inputListener(vT1, newValue =>  vT1Value = newValue );
inputListener(aT1, newValue =>  aT1Value = newValue );

eqT1.addEventListener("click",() => {
	t1.innerHTML = ((vT1Value-uT1Value) / aT1Value).toFixed(4);
});



const uT2 = document.querySelector('#uT2');
const vT2 = document.querySelector('#vT2');
const sT2 = document.querySelector('#sT2');
const eqT2 = document.querySelector('#eqT2');
const t2 = document.querySelector('#t2');

let uT2Value, vT2Value, sT2Value;

inputListener(uT2, newValue =>  uT2Value = newValue );
inputListener(vT2, newValue =>  vT2Value = newValue );
inputListener(sT2, newValue =>  sT2Value = newValue );

eqT2.addEventListener("click",() => {
	t2.innerHTML = ((2*sT2Value) / (uT2Value+vT2Value)).toFixed(4);
});





const sUniV = document.querySelector('#sUniV');
const tUniV = document.querySelector('#tUniV');
const eqUniV = document.querySelector('#eqUniV');
const uniV = document.querySelector('#uniV');

let sUniVValue, tUniVValue;

inputListener(sUniV, newValue =>  sUniVValue = newValue );
inputListener(tUniV, newValue =>  tUniVValue = newValue );

eqUniV.addEventListener("click",() => {
	uniV.innerHTML = (sUniVValue / tUniVValue).toFixed(4);
});



const vUniS = document.querySelector('#vUniS');
const tUniS = document.querySelector('#tUniS');
const eqUniS = document.querySelector('#eqUniS');
const uniS = document.querySelector('#uniS');

let vUniSValue, tUniSValue;

inputListener(vUniS, newValue =>  vUniSValue = newValue );
inputListener(tUniS, newValue =>  tUniSValue = newValue );

eqUniS.addEventListener("click",() => {
	uniS.innerHTML = (vUniSValue * tUniSValue).toFixed(4);
});



const vUniT = document.querySelector('#vUniT');
const sUniT = document.querySelector('#sUniT');
const eqUniT = document.querySelector('#eqUniT');
const uniT = document.querySelector('#uniT');

let vUniTValue, sUniTValue;

inputListener(vUniT, newValue =>  vUniTValue = newValue );
inputListener(sUniT, newValue =>  sUniTValue = newValue );

eqUniT.addEventListener("click",() => {
	uniT.innerHTML = (sUniTValue / vUniTValue).toFixed(4);
});





const aAdd = document.querySelector('#aAdd');
const bAdd = document.querySelector('#bAdd');
const eqAdd = document.querySelector('#eqAdd');
const add = document.querySelector('#add');

let aAddValue, bAddValue;

inputListener(aAdd, newValue =>  aAddValue = newValue );
inputListener(bAdd, newValue =>  bAddValue = newValue );

eqAdd.addEventListener("click",() => {
	add.innerHTML = (aAddValue + bAddValue).toFixed(4);
  
});



const aSub = document.querySelector('#aSub');
const bSub = document.querySelector('#bSub');
const eqSub = document.querySelector('#eqSub');
const sub = document.querySelector('#sub');

let aSubValue, bSubValue;

inputListener(aSub, newValue =>  aSubValue = newValue );
inputListener(bSub, newValue =>  bSubValue = newValue );

eqSub.addEventListener("click",() => {
	sub.innerHTML = (aSubValue - bSubValue).toFixed(4);
});



const aMul = document.querySelector('#aMul');
const bMul = document.querySelector('#bMul');
const eqMul = document.querySelector('#eqMul');
const mul = document.querySelector('#mul');

let aMulValue, bMulValue;

inputListener(aMul, newValue =>  aMulValue = newValue );
inputListener(bMul, newValue =>  bMulValue = newValue );

eqMul.addEventListener("click",() => {
	mul.innerHTML = (aMulValue * bMulValue).toFixed(4);
});



const aDiv = document.querySelector('#aDiv');
const bDiv = document.querySelector('#bDiv');
const eqDiv = document.querySelector('#eqDiv');
const div = document.querySelector('#div');

let aDivValue, bDivValue;

inputListener(aDiv, newValue =>  aDivValue = newValue );
inputListener(bDiv, newValue =>  bDivValue = newValue );

eqDiv.addEventListener("click",() => {
	div.innerHTML = (aDivValue / bDivValue).toFixed(4);
});




function inputListener(element, callback) {
    element.addEventListener("input", e => {
        callback(Number(e.target.value));
    });
}