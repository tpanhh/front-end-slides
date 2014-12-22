/**
 *
 *  Routes module expose route information used in cover feature
 *
 *  @author  Howard.Zuo
 *  @date    Dec 22th, 2014
 *
 */
(function (define, require) {
    'use strict';

    var slides = require.toUrl('slides');

    define([], function () {
        return [{
            when: '/learn',
            controller: 'LearnController',
            templateUrl: slides + '/learn/partials/Learn.html',
            position: 3
        }];
    });

}(define, require));