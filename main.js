const form = $('form')

tarefas = []

$('#btn-add').click(function() {
    if(form.css('display') == 'none') {
        form.slideDown()
        form.css({'display': 'flex'})
    } else {
        form.slideUp()
    }
})

$('#btn-cancel').click(function() {
    form.slideUp()
})

$('form').submit(function(e) {
    e.preventDefault()
    const input = $('input:text')
    tarefas.push(input.val())

    if(tarefas.length % 2 == 1){
        const novoItem = $('<li class="cinza1"></li>')
        novoItem.text(input.val())
        $(novoItem).appendTo('ul')

    } else {
        const novoItem = $('<li class="cinza2"></li>')
        novoItem.text(input.val())
        $(novoItem).appendTo('ul')

    }
    input.val('')
})

$('ul').on('click', 'li', function(e) {
    const li = $(e.target)
    li.toggleClass('check')
});

$('#limpa-lista').click(function() {
    $('ul').empty()
})