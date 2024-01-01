/*
 * Selector Widget
 * https://github.com/lets-fiware/selector-widget
 *
 * Copyright (c) 2020-2024 Kazuhito Suda
 * Licensed under the MIT license.
 */

/* exported SelectorWidget */
/* global MashupPlatform, StyledElements */

var SelectorWidget = (function () {

    "use strict";

    // =========================================================================
    // CLASS DEFINITION
    // =========================================================================

    var SelectorWidget = function SelectorWidget() {
        MashupPlatform.prefs.registerCallback(function (new_preferences) {

        }.bind(this));

        layout = new StyledElements.VerticalLayout();

        layout.center.addClassName('loading');
        layout.center.disable();
        layout.insertInto(document.body);
        layout.repaint();

        MashupPlatform.wiring.registerCallback('entityInput', inputCallback);
    };

    // =========================================================================
    // PRIVATE MEMBERS
    // =========================================================================

    var layout;

    var inputCallback = function inputCallback(entities) {
        var options = document.createElement('div');
        options.setAttribute('id', 'options');
        layout.center.appendChild(options);

        var attr = MashupPlatform.prefs.get('attribute');
        if (attr == '') {
            attr = 'name';
        }

        var container = document.getElementById('options');
        entities.forEach(e => {
            let optionElement = document.createElement('div');
            optionElement.className = 'se-btn';
            optionElement.setAttribute('id', e[attr]);
            optionElement.tabindex = 0;
            optionElement.appendChild(document.createTextNode(e.name));
            optionElement.addEventListener('click', (event) => {
                MashupPlatform.wiring.pushEvent('entityOutput', e);
            });
            container.insertBefore(optionElement, null);
        });

        layout.center.enable();
    };

    /* test-code */
    SelectorWidget.prototype = {
    };

    /* end-test-code */

    return SelectorWidget;

})();
