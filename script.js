document.addEventListener('DOMContentLoaded', function() {
    function randomString() {
        var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
        var str = '';
        for (var i = 0; i < 10; i++) {
            str += chars[Math.floor(Math.random() * chars.length)];
        }
        return str;
    }

    //Generowanie templatek przez Mustache.js
    function generateTemplate(name, data, basicElement) {
        var template = document.getElementById(name).innerHTML;
        var element = document.createElement(basicElement || 'div');

        Mustache.parse(template);
        element.innerHTML = Mustache.render(template, data);

        return element;
    }
    function Column(name) {
        var self = this;

        this.id = randomString();
        this.name = name;
        this.class = name.replace(/\s/g, '').toLowerCase();
        this.element = generateTemplate('column-template', { name: this.name, id: this.id, class:this.class  });

        this.element.querySelector('.column').addEventListener('click', function (event) {
            if (event.target.classList.contains('close')) {
                self.removeColumn();
            }

            if (event.target.classList.contains('add-card')) {
                var windowPrompt = prompt("Enter the name of the card");
                if (windowPrompt != "") {
                    self.addCard(new Card(windowPrompt));
                    return;
                } else {
                    document.querySelector('.errors-column').innerHTML = "Puste pole";
                    return false;
                }
            }
        });
    }
    Column.prototype = {
        addCard: function(card) {
            this.element.querySelector('ul').appendChild(card.element);
        },
        removeColumn: function() {
            this.element.parentNode.removeChild(this.element);
        }
    };
    function Card(description) {
        var self = this;

        this.id = randomString();
        this.description = description;
        this.element = generateTemplate('card-template', { description: this.description }, 'li');

        this.element.querySelector('.card').addEventListener('click', function (event) {
            event.stopPropagation();

            if (event.target.classList.contains('close')) {
                self.removeCard();
            }
        });
    }
    Card.prototype = {
        removeCard: function() {
            this.element.parentNode.removeChild(this.element);
        }
    }
    var board = {
        name: 'Kanban Board',
        addColumn: function(column) {
            this.element.appendChild(column.element);
            initSortable(column.id); //About this feature we will tell later
        },
        element: document.querySelector('#board .column-container')
    };
    function initSortable(id) {
        var el = document.getElementById(id);
        var sortable = Sortable.create(el, {
            group: 'kanban',
            sort: true
        });
    }
    document.querySelector('#board .create-column').addEventListener('click', function() {
        var name = prompt('Enter a column name');
        if(name != ''){
            var column = new Column(name);
            board.addColumn(column);
        } else {
            document.querySelector('.errors-board').innerHTML = "Puste pole";
            return false;
        }

    });

    // CREATING COLUMNS
    var todoColumn = new Column('To do');
    var doingColumn = new Column('Doing');
    var doneColumn = new Column('Done');

// ADDING COLUMNS TO THE BOARD
    board.addColumn(todoColumn);
    board.addColumn(doingColumn);
    board.addColumn(doneColumn);

// CREATING CARDS
    var card1 = new Card('New task');
    var card2 = new Card('Create kanban boards')
    var card3 = new Card('Issue bug');

// ADDING CARDS TO COLUMNS
    todoColumn.addCard(card1);
    doingColumn.addCard(card2);
    doneColumn.addCard(card3);
});