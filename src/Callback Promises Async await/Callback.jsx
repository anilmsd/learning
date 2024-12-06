// const axios = require('axios');
/*
1.Passing 10 as the initial value to Step1
2.If there is no error, then passing the result to Step2
3.If there is no error again, then passing the result to Step3
4.Finally, printing the result.
*/
step1(10, function(result1, error) {
	if (!error) {
		step2(result1, function(result2, error) {
			if (!error) {
				step3(result2, function(result3, error) {
					if (!error) {
						console.log('Results ' + result3);
					}
				});
			}
		});
	}
});

function step1(value, callback) {
	callback(value + 10, false);
}

function step2(value, callback) {
	callback(value + 10, false);
}

function step3(value, callback) {
	callback(value + 10, false);
}
