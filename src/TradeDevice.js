// TradeDevice Javascript API Library
// License: MIT
// TradeDevice.com

var api_root;
var country;

var url = "tradedevice.com/api/";

function TradeDevice(country) {
	if(country === "US") {
		country = "us";
	}
	if(country === "CA") {
		country = "ca";
	}
	this.country = country;
}

TradeDevice.prototype.getApiRoot = function()
{
	country = this.country;
	root = country + this.url;
	return root;
});

TradeDevice.prototype.getData = function(query)
{
	data;
	root = this.getApiRoot();
	fin = root + query;
	json = new XMLHttpRequest();
	json.open('GET', fin, true);
	json.onload = function() {
		data = window.JSON.parse(json);
	};
	return data;
});
