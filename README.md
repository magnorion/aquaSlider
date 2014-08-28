aquaSlider
==========

![alt tag](http://url/to/img.png)

### Sobre
Este slider foi desenvolvido em jQuery e possui um pesso de 6Kb(css e js Juntos!) em seu site.
Ele é bem básico e fácil de personalizar, graças ao seu .Js e .Css serem de fácil entendimento!

### Implementação

Arquivos externos
```
<!-- ADD No head -->
  <script src="aqua.min.js"></script>
	<link rel="stylesheet" href="aqua.min.css" />
<!-- END -->
```

Estrutura no HTML
```
<!-- ADD extamente onde quer que o slider apareça -->
<div id="container">
	<div id="reciveImage">
		<img src="img/img1.jpg" />
		<img src="img/img2.jpg" />
		<img src="img/img3.jpg" />
		<img src="img/img4.jpg" />
		<img src="img/img5.jpg" />
		<img src="img/img6.jpg" />
	</div>
	<div id="controlLeft"></div>
	<div id="controlRight"></div>
	<div class="pagCount"></div>
</div>
<!-- End -->
```

Trigger do Plugin
```
<!-- ADD no Header ou antes do fim do Body -->
<script>
  jQuery(document).ready(function(){
		getImages("#reciveImage",1000);
  });
</script>
<!-- END -->
```

### Atualizações
Logo, postarei possiveis atualizações ^^

### Contato ou Suporte
Tem alguma ideia, dúvida ou algum problema com o plugin, mande um email para lucas_front@yahoo.com.br .
Ficarei grato pelo contato e responderei o mais rápido possível!

Muito obrigado.
Lucas.
