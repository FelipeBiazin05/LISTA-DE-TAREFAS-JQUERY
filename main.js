$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();

        const tarefa = $('#nomeDaTarefa').val()
        const novaTarefa = $(`<li><a id="link" href="#"></a></li>`); 
        $(`<li><a id="link" href="#">${tarefa}</a></li>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul') ;
        $('#nomeDaTarefa').val('');

        $('#link').click(function(event) {
            const novaTarefa = $(`<li><a id="link" href="#"></a></li>`); 
            event.preventDefault(); 
                sublinharTexto(novaTarefa);
        });
        
            function sublinharTexto() {
                let elemento = document.getElementById('link').val();
                elemento.style.textDecoration=('line-through');
            }
    });
});
