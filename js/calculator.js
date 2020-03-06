var memory;
var count = 0;

function cencel() {
	document.form.resultview.value = memory;
}
function insert(num) {
	if (!document.form.resultview.value.includes('Error')) {
		memory = document.form.resultview.value;
		if (count == 0 && num != '.') {
			document.form.resultview.value = '';
			count++;
		} else {
			count++;
		}
		if (document.form.resultview.value.length <= 24) {
			document.form.resultview.value += num;
		} else {
			document.form.resultview.value = 'Error: Too big data!';
		}
	}
}
function clean() {
	if (!document.form.resultview.value.includes('Error')) {
		memory = document.form.resultview.value;
	}
	document.form.resultview.value = '0';
	count = 0;
}
function backspace() {
	if (!document.form.resultview.value.includes('Error')) {
		memory = document.form.resultview.value;
		var result = document.form.resultview.value;
		document.form.resultview.value = result.substring(0, result.length - 1);
		if (memory.length == 1) {
			count = 0;
			document.form.resultview.value = '0';
		}
	}
}
function equal() {
	if (!document.form.resultview.value.includes('Error')) {
		memory = document.form.resultview.value;
		var result = document.form.resultview.value;
		if (result) {
			if (result.includes('%')) {
				var percentArray = result.split(' %: ');
				document.form.resultview.value = (percentArray[0] * percentArray[1]) / 100;
			} else {
				if (eval(result) != 'Infinity') {
					document.form.resultview.value = eval(result);
				} else {
					document.form.resultview.value = 'Error: division by zero';
				}
			}
		}
	}
}
function root() {
	if (!document.form.resultview.value.includes('Error')) {
		memory = document.form.resultview.value;
		equal();
		document.form.resultview.value = Math.sqrt(document.form.resultview.value);
	}
}
function one_div_x() {
	if (!document.form.resultview.value.includes('Error')) {
		equal();
		if (document.form.resultview.value != 0) {
			document.form.resultview.value = 1 / document.form.resultview.value;
		} else {
			document.form.resultview.value = 'Error: division by zero';
		}
	}
}
function percent() {
	if (!document.form.resultview.value.includes('Error')) {
		equal();
		document.form.resultview.value += ' %: ';
	}
}
