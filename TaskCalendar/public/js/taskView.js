function loadTaskMonth(task){

	var mes = document.getElementById("mes").innerHTML;
	var mes_numero = mes == "Janeiro" ? 1 : ( mes == "Fevereiro" ? 2 : ( mes == "Março" ? 3 : ( mes == "Abril" ? 4 : ( mes == "Maio" ? 5 : ( mes == "Junho" ? 6 : ( mes == "Julho" ? 7 : ( mes == "Agosto" ? 8 : ( mes == "Setembro" ? 9 : ( mes == "Outubro" ? 10 : ( mes == "Novembro" ? 11 : 12 ))))))))));
	var tiposEnum = Object.freeze({"Lazer":"btn-default", "Trabalhar":"btn-success", "Exercitar":"btn-info", "Estudar":"btn-warning"})

	var botao = task.tipo=="Lazer" ? tiposEnum.Lazer : ( task.tipo=="Trabalhar" ? tiposEnum.Trabalhar : ( task.tipo=="Exercitar" ? tiposEnum.Exercitar : tiposEnum.Estudar));

	if(mes_numero==task.mes_inicio && mes_numero==task.mes_fim){
		for(var i = task.dia_inicio; i<=task.dia_fim; i++){
			if(document.getElementById("dia-"+i)) document.getElementById("dia-"+i).innerHTML+="<div><button type='button' class='btn "+botao+" task' data-toggle='modal' data-placement='left' title='"+task.evento+"'' data-target='#editRemoveModal'>"+task.evento+"</button></div>";
		}
	}
	

	else if(mes_numero==task.mes_inicio && mes_numero<task.mes_fim){
		for(var i = task.dia_inicio; i<=31; i++){
			if(document.getElementById("dia-"+i)) document.getElementById("dia-"+i).innerHTML+="<div><button type='button' class='btn "+botao+" task' data-toggle='modal' data-placement='left' title='"+task.evento+"'' data-target='#editRemoveModal'>"+task.evento+"</button></div>";
		}
	}
	

	else if(mes_numero>task.mes_inicio && mes_numero<task.mes_fim){
		for(var i = 1; i<=31; i++){
			if(document.getElementById("dia-"+i)) document.getElementById("dia-"+i).innerHTML+="<div><button type='button' class='btn "+botao+" task' data-toggle='modal' data-placement='left' title='"+task.evento+"'' data-target='#editRemoveModal'>"+task.evento+"</button></div>";
		}
	}
	else if(mes_numero==task.mes_fim){
		for(var i = 1; i<=task.dia_fim; i++){
			if(document.getElementById("dia-"+i)) document.getElementById("dia-"+i).innerHTML+="<div><button type='button' class='btn "+botao+" task' data-toggle='modal' data-placement='left' title='"+task.evento+"'' data-target='#editRemoveModal'>"+task.evento+"</button></div>";
		}
	}
}

function loadTaskWeek(task){
	var mes = document.getElementById("mes").innerHTML;
	var mes_numero = mes == "Janeiro" ? 1 : ( mes == "Fevereiro" ? 2 : ( mes == "Março" ? 3 : ( mes == "Abril" ? 4 : ( mes == "Maio" ? 5 : ( mes == "Junho" ? 6 : ( mes == "Julho" ? 7 : ( mes == "Agosto" ? 8 : ( mes == "Setembro" ? 9 : ( mes == "Outubro" ? 10 : ( mes == "Novembro" ? 11 : 12 ))))))))));
	var tiposEnum = Object.freeze({"Lazer":"btn-default", "Trabalhar":"btn-success", "Exercitar":"btn-info", "Estudar":"btn-warning"})

	var botao = task.tipo=="Lazer" ? tiposEnum.Lazer : ( task.tipo=="Trabalhar" ? tiposEnum.Trabalhar : ( task.tipo=="Exercitar" ? tiposEnum.Exercitar : tiposEnum.Estudar));

	if(mes_numero==task.mes_inicio && task.dia_inicio==task.dia_fim && mes_numero==task.mes_fim){
		for(var i = task.dia_inicio; i<=task.dia_fim; i++){
			for(var j = task.hora_inicio; j<=task.hora_fim; j++){
				if(document.getElementById(i+"-"+j)) {
					document.getElementById(i+"-"+j).innerHTML+="<div><button type='button' class='btn weekbutton "+botao+" ' data-toggle='modal' data-placement='left' title='"+task.evento+"' data-target='#editRemoveModal'></button></div>";
				}
				
			}
		}
	}

	else if(mes_numero==task.mes_inicio && task.dia_inicio<task.dia_fim && mes_numero==task.mes_fim){
		for(var i = task.dia_inicio; i<=task.dia_fim; i++){
			if(i==task.dia_inicio){
				for(var j = task.hora_inicio; j<=24; j++){
					if(document.getElementById(i+"-"+j)) {
						document.getElementById(i+"-"+j).innerHTML+="<div><button type='button' class='btn weekbutton "+botao+" ' data-toggle='modal' data-placement='left' title='"+task.evento+"'' data-target='#editRemoveModal'></button></div>";
					}
				}
			}
			else if(i<task.dia_fim){
				for(var j = 0; j<=24; j++){
					if(document.getElementById(i+"-"+j)) {
						document.getElementById(i+"-"+j).innerHTML+="<div><button type='button' class='btn weekbutton "+botao+" ' data-toggle='modal' data-placement='left' title='"+task.evento+"'' data-target='#editRemoveModal'></button></div>";
					}
				}
			}
			else if(i==task.dia_fim){
				for(var j = 0; j<=task.hora_fim; j++){
					if(document.getElementById(i+"-"+j)) {
						document.getElementById(i+"-"+j).innerHTML+="<div><button type='button' class='btn weekbutton "+botao+" ' data-toggle='modal' data-placement='left' title='"+task.evento+"'' data-target='#editRemoveModal'></button></div>";
					}
				}
			}
		}
	}

	else if(mes_numero==task.mes_inicio && mes_numero<task.mes_fim){
		for(var i = task.dia_inicio; i<=31; i++){
			if(i==task.dia_inicio){
				for(var j = task.hora_inicio; j<=24; j++){
					if(document.getElementById(i+"-"+j)) {
						document.getElementById(i+"-"+j).innerHTML+="<div><button type='button' class='btn weekbutton "+botao+" ' data-toggle='modal' data-placement='left' title='"+task.evento+"'' data-target='#editRemoveModal'></button></div>";
					}
				}
			}
			else {
				for(var j = 0; j<=24; j++){
					if(document.getElementById(i+"-"+j)) {
						document.getElementById(i+"-"+j).innerHTML+="<div><button type='button' class='btn weekbutton "+botao+" ' data-toggle='modal' data-placement='left' title='"+task.evento+"'' data-target='#editRemoveModal'></button></div>";
					}
				}
			}
		}
	}

	else if(mes_numero>task.mes_inicio && mes_numero<task.mes_fim){
		for(var i=1; i<=31; i++){
			for(var j = 0; j<=24; j++){
				if(document.getElementById(i+"-"+j)) {
					document.getElementById(i+"-"+j).innerHTML+="<div><button type='button' class='btn weekbutton "+botao+" ' data-toggle='modal' data-placement='left' title='"+task.evento+"'' data-target='#editRemoveModal'></button></div>";
				}
			}
		}
	}

	else if(mes_numero==task.mes_fim){
		for(var i=1; i<=task.dia_fim; i++){
			if(i==task.dia_fim){
				for(var j = 0; j<=task.hora_fim; j++){
					if(document.getElementById(i+"-"+j)) {
					document.getElementById(i+"-"+j).innerHTML+="<div><button type='button' class='btn weekbutton "+botao+" ' data-toggle='modal' data-placement='left' title='"+task.evento+"'' data-target='#editRemoveModal'></button></div>";
					}
				}
			}
			else{
				for(var j = 0; j<=24; j++){
					if(document.getElementById(i+"-"+j)) {
						document.getElementById(i+"-"+j).innerHTML+="<div><button type='button' class='btn weekbutton "+botao+" ' data-toggle='modal' data-placement='left' title='"+task.evento+"'' data-target='#editRemoveModal'></button></div>";
					}
				}
			}
		}
	}
}