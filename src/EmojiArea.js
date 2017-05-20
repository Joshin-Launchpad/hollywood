import React, { Component } from 'react';


$(document).ready(function() {
	$("#emojionearea1").emojioneArea({

		pickerPosition: "right",
    	tonesStyle: "bullet",

	});
});

$("#click").click(function(){
text = 	$("#emojionearea1").val();
//alert(text);
$("#display").html(text);
})

* {
  font-family: Arial, Helvetica, san-serif;
}
.row:after, .row:before {
  content: " ";
  display: table;
  clear: both;
}
.span6 {
  float: left;
  width: 48%;
  padding: 1%;
}

.emojionearea-standalone {
  float: right;
}

<div className="row">
  <div className="span6">
    <textarea id="emojionearea1"></textarea>
  </div>
</div>

<button id="click">preview</button>

<div id="display">
</div>
