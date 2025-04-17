// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

/*
$(document).ready(function() {
    function runCustomSelect() {
        $('#tab_select').each(function() {
            var $this = $(this),
                selectOptions = $this.children('option').length;

            $this.addClass('hide-select');
            $this.wrap('<div class="select"></div>');
            $this.after('<div class="custom-select"></div>');

            var $customSelect = $this.next('div.custom-select');
            $customSelect.text($this.children('option:selected').text());

            var $optionlist = $('<ul />', {
                'class': 'select-options'
            }).insertAfter($customSelect);

            $optionlist.hide();

            for (var i = 0; i < selectOptions; i++) {
                $('<li />', {
                    text: $this.children('option').eq(i).text(),
                    rel: $this.children('option').eq(i).val()
                }).appendTo($optionlist);
            }

            var $optionlistItems = $optionlist.children('li');

            var currentValue = $this.val();
            $optionlistItems.each(function() {
                if ($(this).attr('rel') === currentValue) {
                    $(this).addClass('active');
                }
            });

            $customSelect.click(function(e) {
                e.stopPropagation();
                $('div.custom-select.active').not(this).each(function() {
                    $(this).removeClass('active').next('ul.select-options').hide();
                });
                $(this).toggleClass('active').next('ul.select-options').slideToggle();
            });

            $optionlistItems.click(function(e) {
                e.stopPropagation();
                var selectedText = $(this).text();
                var selectedValue = $(this).attr('rel');

                $customSelect.text(selectedText).removeClass('active');
                $this.val(selectedValue);
                $optionlist.hide();

                window.location.href = selectedValue;
            });

            $(document).click(function() {
                $customSelect.removeClass('active');
                $optionlist.hide();
            });
        });
    }

    function checkAndRun() {
        if ($(window).width() <= 768 && !$('select').hasClass('hide-select')) {
            runCustomSelect();
        }
    }
    checkAndRun();
    $(window).resize(function() {
        checkAndRun();
    });
});

*/
