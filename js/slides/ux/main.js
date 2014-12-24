/**
 * ******************************************************************************************************
 *
 *  Defines the ux
 *
 *  @author  Howard.Zuo
 *  @date    Dec 24th, 2014
 *
 * ******************************************************************************************************
 */
(function (define) {
    'use strict';

    define([
        'angular',
        './Routes'
    ], function (
        angular,
        Routes) {

        var moduleName = 'ux';

        var module = angular.module(moduleName, []);

        return {
            type: 'slides',
            name: moduleName,
            routes: Routes
        };

    });

}(define));