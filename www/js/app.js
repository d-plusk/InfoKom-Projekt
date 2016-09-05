'use strict';

var module = angular.module('app', ['onsen', 'ngSanitize']);
    
module.controller('AppController', function ($scope, $http) {
    
    
    //-----------------------------------Enter Code Screen--------------------------------------//
    //                                                                                          //
    
    //Design:
    
    $scope.F_login_getwidthLogo = function (id){
        var referenzWidth = referenzWidth = document.getElementById("ID_referenzCol").offsetWidth;
        if (referenzWidth <= 200){
        referenzWidth = 200;
        }
        
        var html = '<img src="img\\' + id + '.png" width="' + referenzWidth + '">';
        document.getElementById(id).innerHTML = html;
    }
    
    $scope.F_login_getBackground = function () {
        var clientWidth = document.getElementById("ID_clientWidth").offsetWidth * 3;
        
        //document.body.style.backgroundImage = "url('img/entercode_background1.png')";
        
        var html = "<img src='img\\entercode_background1.png' width='" + clientWidth + "'; style='position: absolute; z-index:-5000; overflow:hidden;'>";
        document.getElementById("background").innerHTML = html;
    }
    
    $scope.F_login_getBackground2 = function () {
        var referenzWidth = referenzWidth = document.getElementById("ID_referenzCol").offsetWidth;
        
        if (referenzWidth <= 200){
        referenzWidth = 200;
        }        
        var width = referenzWidth * 1.2;
        var marginLeft = ((window.innerWidth - width) / 2) / window.innerWidth * 100;
        
        
        var clientHeight = window.innerHeight + 1;
        var html = "<img src='img\\entercode_background2.png' width='" + width + "' height='" + clientHeight + "' style='position: absolute; z-index:-4999; left:" + marginLeft +"%;'>";
        document.getElementById("background2").innerHTML = html;
    }
    
    //Check if a valid Code is entered:
    
    $scope.F_login_checkCode = function () {
        $scope.navi.pushPage('menü.html');
        $scope.F_menu_getbuttonDimentions();
        //GOTO MENÜ
    }
    
    
    //                                                                                          //
    //-----------------------------------Enter Code Screen--------------------------------------//
    
    //----------------------------------------- Menü -------------------------------------------//
    //                                                                                          //
    
    //page__content ons-page-inner
    
    $scope.F_menu_getbuttonDimentions = function () {
        $scope.menu_buttonheight = document.getElementsByClassName("page__content ons-page-inner")[0].innerHeight;
        var verticalAmountOfButtons = 4;
        var MarginTopBottom = 10; //px
        
        $scope.menu_buttonheight = ($scope.menu_buttonheight - MarginTopBottom * 2 - (verticalAmountOfButtons * 2) * MarginTopBottom) / verticalAmountOfButtons;
    }
    
    //                                                                                          //
    //----------------------------------------- Menü -------------------------------------------//
    
    ons.ready(function(){
        
    })
    
    //NOTES THAT MAY BE USEFULL
    
    /*// ----------------------------------------- DATABASE ----------------------------------------//
    //                                                                                            //
    
    //INIT THE DATABASE
    
    var db;
    var test;
    
    $scope.initDatabase = function () {
        db = sqlitePlugin.openDatabase("db", "", "Database", 20 * 1024 * 1024); //OPEN THE DATABASE
        
        db.transaction(function (tx) { //CREATE NEEDED DATABASES
            tx.executeSql("drop table if exists markcategorys",[],function(){
                tx.executeSql("create table if not exists markcategorys(ID integer primary key asc, category TEXT, type TEXT, color TEXT)",[],onSuccess,onError)
            },onError);
            tx.executeSql("drop table if exists markedverses",[],function(){
                tx.executeSql("CREATE TABLE IF NOT EXISTS markedverses(ID INTEGER PRIMARY KEY ASC, markvers TEXT,  color TEXT)",[], onSuccess,onError)
            },onError);
        },onError)
        
    }
    //CONSOLE LOG RESULT/ERROR
    function onSuccess(transaction, resultSet) {
        console.log('Query completed: ' + JSON.stringify(resultSet));
    }
    function onError(transaction, error) {
        console.log('Query failed: ' + error.message);
    }
    
    
    
    //                                                                                            //
    // ----------------------------------------- DATABASE ----------------------------------------//*/
    
    /*// -------- SET, GET AND REMOVE FUNCTIONS FOR VERSES -------- //
    //                                                            //
    $scope.dbSetVers = function (markvers, color) {
        if(markvers != null && color != null){
            db.transaction(function (tx) {
                tx.executeSql("select * from markedverses where markvers=?",[markvers],
                    function (tx, results) {
                        //SUCCESS CALLBACK
                        if(results.rows.length == 0){//length == 0 means there is no entry of this vers
                            tx.executeSql("insert into markedverses(markvers,color) values(?,?)",[markvers,color],onSuccess,onError);
                        }else{ //That vers has already been marked before
                            tx.executeSql("update markedverses set color=? where markvers=?",[color,markvers],onSuccess, onError);
                        }
                    },
                    onError);
            });
        }
    }
    
    var gotVers;
    $scope.dbGetVers = function (markvers, color, callback) {
        //YOU CAN ONLY SORT BY MARKVERS -> OR <- Color
        if (color == null){ //SEARCH THAT VERS
            db.transaction(function (tx) {
                    tx.executeSql("select * from markedverses where markvers like ?",[markvers],
                        function (tx, results) {
                            //SUCCESS CALLBACK
                            if(results.rows.length == 0){
                                gotVers = null;
                            }else{
                                var temp = [];
                                for(var i = 0; i < results.rows.length; i++){
                                    temp[i] = results.rows._array[i];
                                }
                                gotVers = temp;
                            }
                            callback();                        
                        },onError);
            },onError)
        }
    }
    
    $scope.dbRemoveVers = function (markvers) {
        if(markvers != null){
            db.transaction(function (tx) {
                tx.executeSql("delete from markedverses where markvers=?",[markvers],onSuccess,onError)
            },onError);
        }
    }
    
    //                                                            //
    // -------- SET, GET AND REMOVE FUNCTIONS FOR VERSES -------- //*/
    
});


