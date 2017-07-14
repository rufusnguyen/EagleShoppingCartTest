$(document).ready(function() {
    
    //Booking Single Package ========================
    var bookingSingle = {
        categories: [],
        addPackageRow: () => {
            //START DYNAMIC TABLE EXTENSION
            var table = $(".dynamic-table");
            var tableArray = table.data("array");

            // Get max row id and set new id
            var newid = 0;
            var rowArray = '';
            $.each(table.find("tbody tr"), function () {
                if (parseInt($(this).data("id")) > newid) {
                    newid = parseInt($(this).data("id"));
                }
                $(this).addClass('bg-grey').removeClass('active');
                // $(this).find('input:text, input:radio, input:checkbox, select, textarea').attr('readonly', true);
                $('.readonly input:checkbox').click(function () { return false; });
                $('.readonly input:checkbox').keydown(function () { return false; });
            });
            newid++;
            rowArray = tableArray + '[' + newid + ']';

            var tr = $("<tr></tr>", {
                id: "row" + newid,
                "data-id": newid,
                "data-array": rowArray,
                "class": "active"
            });

            // loop through each td and create new elements with name of newid
            $.each(table.find("tbody tr:nth(0) td"), function () {
                var curTd = $(this);
                var children = curTd.children();

                // add new td and element if it has a nane
                if ($(this).data("name") !== undefined && $(this).data("name") !== null && $(this).data("name") !== '') {
                    var td = $("<td></td>", { "class": $(curTd).attr("class"), "data-name": $(curTd).data("name") });

                    var c = $(curTd).find($(children[0]).prop('tagName')).clone();
                    if (!c.hasClass(".ignored")) {
                        c.not(".ignored").val('');
                    }

                    var controlName = $(curTd).data("name");
                    var controlId = tableArray + '_' + newid + '_' + controlName;
                    c.attr({
                        "id": controlId,
                        "name": rowArray + '.' + $(curTd).data("name"),
                        "data-index": newid,
                        'readonly': false
                    });

                    //Empty content after adding
                    if (!c.is('select')) {
                        c.empty();
                    }

                    if (c.is('input:text:not(".ignored")')) {
                        c.attr('value', '');
                        c.bind("change keyup paste", function () {
                            c.attr('value', c.val());
                        });
                    }

                    if (c.is('textarea')) {
                        c.text('');
                        c.bind("change keyup paste", function () {
                            c.html(c.val());
                        });
                    }

                    if (c.is('input:checkbox:not(".ignored")')) {
                        c.removeAttr('checked');
                        c.val('false');
                        c.bind("click", function () {
                            c.attr({
                                "checked": c.is(":checked"),
                                "value": c.is(":checked")
                            });
                        });
                    }

                    if (c.is('select')) {
                        c.removeAttr('selected');
                    }

                    c.appendTo($(td));
                    td.appendTo($(tr));
                }
            });

            //add delete button and td
            $("<td class='text-center'></td>").append("<button data-toggle='tooltip' data-title='Delete' class='btn btn-warning glyphicon glyphicon-trash row-remove'></button>").appendTo($(tr));

            //add the new row
            $(tr).appendTo(table);

            //Invoke loading with combo tree of easyui
            //bookingSingle.populateCategorySelectTree($(tr).data('id'));

            //rebind Validate
            $('form').data('validator', null);
            $.validator.unobtrusive.parse($('form'));

            $(".row-remove").on("click", function () {
                $(this).closest("tr").remove();
                return false;
            });
        },
        init: function () {
            let parent = this;
            // Add add new row 
            $('.add-row').on('click', () => {
                parent.addPackageRow();
            });
        }
    };      
   
    bookingSingle.init();  
   
});