/*
 * Selector Widget
 * https://github.com/lets-fiware/selector-widget
 *
 * Copyright (c) 2020 Kazuhito Suda
 * Licensed under the MIT license.
 */

/* globals $, MashupPlatform, MockMP, SelectorWidget, StyledElements */

(function () {

    "use strict";

    describe("SelectorWidget", function () {

        var widget;

        beforeAll(function () {
            window.MashupPlatform = new MockMP({
                type: 'widget'
            });
        });

        beforeEach(function () {
            MashupPlatform.reset();
            widget = new SelectorWidget();
        });

        it("Dummy test", function () {
            expect(widget).not.toBe(null);
        });

    });

})();
