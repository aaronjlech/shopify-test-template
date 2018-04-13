window.slate = window.slate || {};
window.theme = window.theme || {};

/*================ Slate ================*/
// =require slate/a11y.js
// =require slate/cart.js
// =require slate/utils.js
// =require slate/rte.js
// =require slate/sections.js
// =require slate/currency.js
// =require slate/images.js
// =require slate/variants.js

/*================ Sections ================*/
// =require sections/product.js

/*================ Templates ================*/
// =require templates/customers-addresses.js
// =require templates/customers-login.js

$(document).ready(function() {
    var sections = new slate.Sections();
    sections.register("product", theme.Product);

    // Common a11y fixes
    slate.a11y.pageLinkFocus($(window.location.hash));

    $(".in-page-link").on("click", function(evt) {
        slate.a11y.pageLinkFocus($(evt.currentTarget.hash));
    });

    // Target tables to make them scrollable
    var tableSelectors = ".rte table";

    slate.rte.wrapTable({
        $tables: $(tableSelectors),
        tableWrapperClass: "rte__table-wrapper"
    });

    // Target iframes to make them responsive
    var iframeSelectors =
        '.rte iframe[src*="youtube.com/embed"],' +
        '.rte iframe[src*="player.vimeo"]';

    slate.rte.wrapIframe({
        $iframes: $(iframeSelectors),
        iframeWrapperClass: "rte__video-wrapper"
    });

    // Apply a specific class to the html element for browser support of cookies.
    if (slate.cart.cookiesEnabled()) {
        document.documentElement.className = document.documentElement.className.replace(
            "supports-no-cookies",
            "supports-cookies"
        );
    }
    $(".js-menuDropdown").click(function(evt) {
        const menu = $(this).siblings(".menu__dropdown");

        menu.toggleClass("is--open");
    });
    $(".js-addToCart").submit(function(evt) {
        evt.preventDefault();
        console.log(evt.target);
        const productId = $(this).data("productId");

        // console.log(productId);
        // CartJS.addItem(productId, quantity = 1, {
        //     success: function(data) {
        //         console.log(CartJS);
        //     }
        // });
    })
});
