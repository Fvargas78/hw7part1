$(function () {

        /* Event handler for font-text radio buttons */
        $("#attribute_table :radio").on("click",
            function () {
                $("#example_text").css($(this).attr("name"), $(this).val());
            });

        /* Event handler for background color selection box */
        $("#color").on("change",
            function() {
                $("#example_text").css($(this).attr("name"), $(this).val());
            });

        /* Event handler for font style checkboxes */
        $("#attribute_table :checkbox").on("change",
            function () {
                $("#example_text").css($(this).attr("name"), this.checked ? $(this).val() : "");
            });

        $("#theme_table :radio").on("click",
            function() {

                /* resets css applied from attributes table */
                $("#example_text").css("background-color", "");
                $("#example_text").css("font-family", "");
                $("#example_text").css("font-style", "");
                $("#example_text").css("font-weight", "");

                /* selects default input, and unchecks checkboxes */
                $("#color").val("");
                $("#default").prop("checked", true)
                $("#bold").prop("checked", false)
                $("#italic").prop("checked", false)
                $("#example_text").removeClass().addClass($(this).val());
            });
});
