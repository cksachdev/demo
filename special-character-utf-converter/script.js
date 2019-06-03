var myApp = angular.module("myApp", []);

myApp.controller("myController", [
  "$scope",
  "$location",
  "$filter",
  "$timeout",
  function($scope, $location, $filter, $timeout) {
    $scope.settingHolder = {
      description: "",
      specialCharacter: "",
      symbolReplaced: "",
      symbolutfValue: ""
    };
    $scope.siteSettingHolder = {
      allSettings: [angular.copy($scope.settingHolder)]
    };

    $scope.FontvalueTypes = [
      "UniversalMath1 BT, serif",
      "Calibri, serif",
      "Chanakya",
      "Book Antiqua"
    ];

    $scope.selectedSiteIndex = 0;
    $scope.siteSettings = [];

    $scope.updateSettings = function() {
      stringified = JSON.stringify($scope.siteSettings);
      localStorage.setItem("symboltable", stringified);

      chrome.storage.sync.set({ codeRed: stringified }, function() {
        var locval = localStorage.getItem("symboltable");
        console.log(locval);
        console.log("Settings saved");
      });
    };

    $scope.getSettings = function() {
      stringified = localStorage.getItem("symboltable");
      $scope.siteSettings = JSON.parse(stringified);

      chrome.storage.sync.get(["symboltable"], function(items) {
        if (items.codeRed != null) {
          console.log("this is items:", items);
          $scope.siteSettings = JSON.parse(items.codeRed);
        }
      });
    };

    $scope.addSetting = function() {
      $scope.siteSettings[$scope.selectedSiteIndex].allSettings.push(
        angular.copy($scope.settingHolder)
      );
    };
    $scope.getutfValue = function() {};

    $scope.addSiteSetting = function() {
      $scope.siteSettings.push(angular.copy($scope.siteSettingHolder));
      $scope.selectedSiteIndex = $scope.siteSettings.length - 1;
    };

    $scope.removeSetting = function(index) {
      $scope.siteSettings[$scope.selectedSiteIndex].allSettings.splice(index, 1);
    };

    $scope.removeSiteSetting = function(index) {
      $scope.siteSettings.splice(index, 1);
      $scope.selectedSiteIndex = $scope.siteSettings.length - 1;
    };

    $scope.init = function() {
      $scope.getSettings();
      if ($scope.siteSettings == null || $scope.siteSettings.length == 0) {
        $scope.siteSettings = [];
        $scope.addSiteSetting();
        console.log($scope.siteSettings[0].allSettings);
      }
    };
    $scope.init();
    console.log($scope.siteSettings[0].allSettings);
  }
]);
