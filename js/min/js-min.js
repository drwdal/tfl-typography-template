var weights=["L","R","M","H","T"],h1Index=-1,h2Index=-1,h3Index=-1,h4Index=-1,pIndex=-1,navHidden=!0;$("#btNav").click(function(e){$("#nav").slideToggle("fast"),navHidden===!0?($(this).css("bottom","240px"),$(this).html("Save"),navHidden=!1):($(this).css("bottom","40px"),$(this).html("h1 — p"),navHidden=!0),e.preventDefault()}),$(function(){$("#h1").on("click",function(e){h1Index=(h1Index+1)%weights.length,$("h1").removeClass().addClass(weights[h1Index]),$("#h1Text").html(weights[h1Index]),e.preventDefault()}),$("#h2").on("click",function(e){h2Index=(h2Index+1)%weights.length,$("h2").removeClass().addClass(weights[h2Index]),$("#h2Text").html(weights[h2Index]),e.preventDefault()}),$("#h3").on("click",function(e){h3Index=(h3Index+1)%weights.length,$("h3").removeClass().addClass(weights[h3Index]),$("#h3Text").html(weights[h3Index]),e.preventDefault()}),$("#h4").on("click",function(e){h4Index=(h4Index+1)%weights.length,$("h4").removeClass().addClass(weights[h4Index]),$("#h4Text").html(weights[h4Index]),e.preventDefault()}),$("#p").on("click",function(e){pIndex=(pIndex+1)%weights.length,$("p").removeClass().addClass(weights[pIndex]),$("#pText").html(weights[pIndex]),e.preventDefault()}),$("#btReset").click(function(e){h1Index=0,h2Index=0,h3Index=0,h4Index=0,pIndex=0,$("h1").removeClass().addClass(weights[h1Index]),$("#h1Text").html(weights[h1Index]),$("h2").removeClass().addClass(weights[h2Index]),$("#h2Text").html(weights[h2Index]),$("h3").removeClass().addClass(weights[h3Index]),$("#h3Text").html(weights[h3Index]),$("h4").removeClass().addClass(weights[h4Index]),$("#h4Text").html(weights[h4Index]),$("p").removeClass().addClass(weights[pIndex]),$("#pText").html(weights[pIndex]),$("h1").css("font-size",""),$("#h1Input").val("48"),$("h2").css("font-size",""),$("#h2Input").val("40"),$("h3").css("font-size",""),$("#h3Input").val("32"),$("h4").css("font-size",""),$("#h4Input").val("24"),$("p").css("font-size",""),$("#pInput").val("16"),e.preventDefault()})}),$("#h1Input").on("click",function(e){"48"===$(this).val()&&$(this).val(""),e.preventDefault()}),$("#h1Input").on("keyup",function(){$("h1").css("font-size",$(this).val()+"px")}),$("#h2Input").on("click",function(e){"40"===$(this).val()&&$(this).val(""),e.preventDefault()}),$("#h2Input").on("keyup",function(){$("h2").css("font-size",$(this).val()+"px")}),$("#h3Input").on("click",function(e){"32"===$(this).val()&&$(this).val(""),e.preventDefault()}),$("#h3Input").on("keyup",function(){$("h3").css("font-size",$(this).val()+"px")}),$("#h4Input").on("click",function(e){"24"===$(this).val()&&$(this).val(""),e.preventDefault()}),$("#h4Input").on("keyup",function(){$("h4").css("font-size",$(this).val()+"px")}),$("#pInput").on("click",function(e){"16"===$(this).val()&&$(this).val(""),e.preventDefault()}),$("#pInput").on("keyup",function(){$("p").css("font-size",$(this).val()+"px")});