$(document).ready(function() {

$('form').on('submit', function(e) {
    e.preventDefault();

    const tarefa = $('#nomeDaTarefa').val();
    const novaTarefa = $(`<li><a class="link" href="#">${tarefa}</a></li>`);

    $('ul').append(novaTarefa);
    $('#nomeDaTarefa').val('');

        $('.link').click(function(event) {
            event.preventDefault();
            $(this).css('text-decoration', 'line-through');
        });
    });
});
