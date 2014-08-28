function getImages(div){
	var divImage = div;

	var count = 1;
	var coutSquares = 1;

	jQuery(divImage).find("img").each(function(){
		if(count == 1){
			jQuery(this).addClass("select");
		}
		else{
			jQuery(this).addClass("desSelect");
		}
		count++;
	});
	count = 1;
	jQuery(divImage).find("img").each(function(){
		if(count == 1){
			jQuery(".pagCount").append("<div class='contadorImagens ativado imageNumber_"+count+"'></div>");
		}
		else{
			jQuery(".pagCount").append("<div class='contadorImagens desativado imageNumber_"+count+"'></div>");
		}
		count++;

	});
	
	var sizeWidth = jQuery(divImage).find("img").css("width").split("p");
	var sizeHeight = jQuery(divImage).find("img").css("height").split("p");

	function squaresAnimation(){
		var calculoImage = sizeWidth[0] * sizeHeight[0];

		// var squareWidth = jQuery(".squareBox").css("width").split("p");
		// var squareHeight = jQuery(".squareBox").css("height").split("p");


		var square = document.createElement("a");
		square.href = "#";
	}
	squaresAnimation();
	var numTotal = count-1;
	var checkEvent1 = false;
	var checkEvent2 = false;
	jQuery(".contadorImagens").click(function(){
		var clickContador = 1;

		//Pega o numero do contador que deseja chegar!
		var classeNumber = jQuery(this).attr("class").split(" ");
		if(classeNumber[1] == "desativado"){
			getNumber = classeNumber[2].split("_");
		}else{
			getNumber = classeNumber[1].split("_");
		}
		
		var finalNumber = getNumber[1];
		var NumeroDaImagem = parseFloat(finalNumber);
		// end --
		

		//pega o contador atual
		var countAtual = jQuery(".pagCount").find(".ativado").attr("class").split(" ");
		if(countAtual[1] == "ativado"){
			getNumberAtual = countAtual[2].split("_");
		}else{
			getNumberAtual = countAtual[1].split("_");
		}
		var finalNumberAtual = getNumberAtual[1];
		var NumeroDaImagemAtual = Number(finalNumberAtual);
		// end ---

		if(NumeroDaImagem == NumeroDaImagemAtual){
			return false;
		}
		if(NumeroDaImagem < NumeroDaImagemAtual){
			clicks = NumeroDaImagemAtual - NumeroDaImagem;

			for(i = 0; i < clicks; i++){
				jQuery("#controlLeft").trigger("click");
			}

		}else{
			clicks  = NumeroDaImagem - NumeroDaImagemAtual;
			for(i = 0; i < clicks; i++){
				jQuery("#controlRight").trigger("click");
			}
		}
		// var contadorcheck = Number(count);
		// var contadorChecker = contadorcheck-1;
		
		// var checaClick = NumeroDaImagem;
	});
	
	leftCounter = 1;
	rightCount = count;
	function nextImage(){
		var left = jQuery(divImage).find(".select").css("width");
		var cutPixel = left.substring(0,3);
		var stringPixel = Number(cutPixel);
		var contadorMais = count-2;
		var numberLeft = stringPixel+contadorMais;
		var animateLeft = "-"+numberLeft;
		
		var contadoraLeft = count-1;
		if(leftCounter >= contadoraLeft || identifyFinal == true){
			jQuery(divImage).find(".desSelect").each(function(){
				jQuery(this).animate({marginLeft:0},2000);
			});
			jQuery(divImage).find(".select").removeClass("select").addClass("desSelect").animate({marginLeft:0},"slow");
			jQuery(divImage).find(".desSelect").first().removeClass("desSelect").addClass("select");
			leftCounter = 0;
			rightCount = count;
			identifyFinal = false;
			jQuery(".pagCount").find(".ativado").removeClass("ativado").addClass("desativado");
			jQuery(".pagCount").find(".desativado").first().removeClass("desativado").addClass("ativado");
		}
		else{
		jQuery(divImage).find(".select").first().animate({marginLeft:animateLeft},1000);
			jQuery(divImage).find(".select").removeClass("select").addClass("desSelect").next().removeClass("desSelect").addClass("select");
			jQuery(".pagCount").find(".ativado").removeClass("ativado").addClass("desativado").next().removeClass("desativado").addClass("ativado");
		}

		leftCounter++;
		rightCount--;
			
	}

	var identifyFinal = false;
	var contadoraRight = rightCount-1;
	function prevImage(){
		var right = jQuery(divImage).find(".select").css("width");
		var cutPixel = right.substring(0,3);
		var stringPixel = Number(cutPixel);
		var numberRight = stringPixel;
		var animateRight = "-"+numberRight;
		
	if(!jQuery(divImage).find(".select").prev().is("img")){
		
		jQuery(divImage).find(".select").removeClass("select").addClass("desSelect");
		jQuery(divImage).find(".desSelect").last().removeClass("desSelect").addClass("select");
		
		jQuery(divImage).find(".desSelect").each(function(){
			jQuery(this).animate({marginLeft:animateRight},1500);
		});

		identifyFinal = true;
		leftCounter = count;

		jQuery(".pagCount").find(".ativado").removeClass("ativado").addClass("desativado");
		jQuery(".pagCount").find(".desativado").last().removeClass("desativado").addClass("ativado");
	}	

	else{
		jQuery(divImage).find(".select").prev().animate({marginLeft:0},1000);
		jQuery(divImage).find(".select").removeClass("select").addClass("desSelect").prev().removeClass("desSelect").addClass("select");

		jQuery(".pagCount").find(".ativado").removeClass("ativado").addClass("desativado").prev().removeClass("desativado").addClass("ativado");
	}
		leftCounter--;
		rightCount++;
		identifyFinal = false;
		
	}

	var checkEventOver = false;

	jQuery("#container").mouseover(function(){
		checkEventOver = true;
		jQuery("#controlRight").stop().animate({opacity:0.5});
		jQuery("#controlLeft").stop().animate({opacity:0.5});
	});

	jQuery("#container").mouseout(function(){
		if(jQuery(this).is(":hover")){
			return false;
		}
		else{
			jQuery("#controlRight").stop().animate({opacity:0});
			jQuery("#controlLeft").stop().animate({opacity:0});
			checkEventOver = false;
			
		}
	});

	jQuery("#controlRight").click(function(){
		nextImage();
	});

	jQuery("#controlLeft").click(function(){
		prevImage();
	});
}

