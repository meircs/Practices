let str = prompt("Enter");

if (str.includes('#')) {
	convert_hex_rgb(str);
}

else {
	convert_rgb_hex(str);
}
	// Convert HEX to RGB
	
	function convert_hex_rgb(str) {
	let RGB = [];
	let new_rgb = [];
	let HEX = str.substring(1, 7);
	let new_hex = HEX.split("");
	for (i = 0; i < new_hex.length; i = i+2) {
		var k = new_hex[i];
		var m = new_hex[i+1];
		RGB.push(k);
		RGB.push(m);
		var g = RGB.join("");
		new_rgb.push(g);
		RGB = [];
	}
		let newest_rgb = [];

		for(k = 0; k < new_rgb.length; k++) {
			var l = parseInt(new_rgb[k], 16);
			newest_rgb.push(l);

	}
		return newest_rgb;

	}
	
//Convert for RGB to HEX
	function convert_rgb_hex(str) {
		var nRGB = str.split(",");
		HEX = ["#"];
		for (a = 0; a < nRGB.length; a++) {
		  	var s = Number(nRGB[a]).toString(16);
			HEX.push(s);
		}
		var new_hex = HEX.join("");
		return new_hex;
	}

