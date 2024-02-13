$(document).ready(function(){
    $("header button").click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $("#botao-adicionar").on("click", function(){
        const texto = $("#Texto-formulario").val();
        if(texto) {
            if($.inArray(texto, tarefas) === -1) {
                tarefas.push(texto);
                atualizarTarefas();
                $("#Texto-formulario").val("");
                $("#Texto-formulario").fadeIn();
            } else {
                if (confirm("Tarefa já existe! Deseja substituí-la?")) {
                    const index = tarefas.indexOf(texto);
                    tarefas.splice(index, 1);
                    tarefas.push(texto);
                    atualizarTarefas();
                    $("#Texto-formulario").val("");
                    $("#Texto-formulario").fadeIn();
                }
            }
        }
    });

    const tarefas = [];

    function atualizarTarefas() {
        $("#lista-tarefas").empty();
        tarefas.forEach(function(tarefa) {
            const span = $("<span>").text(tarefa);
            const a = $("<a>").attr("href", "#").text("X");
            a.on("click", function(event) {
                event.preventDefault();
                const index = tarefas.indexOf(tarefa);
                tarefas.splice(index, 1);
                atualizarTarefas();
            });
            const li = $("<li>").append(span).append(a);
            li.addClass("tarefa");
            li.hide();
            $("#lista-tarefas").append(li);
            li.fadeIn();
        });
    }

    $("#lista-tarefas").on("click", "li", function(){
        $(this).toggleClass("completo");
    });
});


a