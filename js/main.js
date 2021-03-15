//alert("Foi po!!")
function consultaCep(){

    var cep = document.getElementById("meu_cep").value ;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    
    console.log(url);


    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            //alert(response.cep)
            $("#logradouro").html(response.logradouro)
            $("#bairro").html(response.bairro)
            $("#localidade").html(response.localidade)
            $("#uf").html(response.uf)
            $("#titulo_cep").html("CEP: " + response.cep)
        }
    })
}