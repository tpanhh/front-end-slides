/**
 *
 *  Routes module expose route information used in compatibility feature
 *
 *  @author  Howard.Zuo
 *  @date    Dec 24th, 2014
 *
 */
(function (define, require) {
    'use strict';

    var slides = require.toUrl('slides');

    define([], function () {
        return [{
            when: '/compatibility',
            templateUrl: slides + '/compatibility/partials/Compatibility.html',
            position: 10
        }];
    });

}(define, require));