function step1(value) {
	return value+10;
}

function step2(value) {
	return value+10;
}

function step3(value) {
	return value+10;
}

async function result(){
    const result1=await step1(10);
    const result2=await step2(result1);
    const result3=await step3(result2);
    console.log(result3);
}
result();
