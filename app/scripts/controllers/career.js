'use strict';
angular.module('myBoardApp').controller('CareerCtrl', function ($scope, $rootScope, ParseService, App) {
	
	//Income object
	$scope.income = {
		title: null,
		amount: null,
		date: null,
		category: null,
		color: null
	};
	
	//Asset object
	$scope.asset = {
		title: null,
		amount: null,
		date: null,
		category: null,
		color: null
	};
	
	//Expense object
	$scope.expense = {
		title: '',
		amount: '',
		date: null,
		category: '',
		color: null
	};
	
	//Net Worth object
	$scope.totals = {
		income: 0,
		assets: 0,
		expenses: 0
	};
	
	//View Controller
	$scope.Career = {
		data: {
			expenses: null,
			income: null,
			assets: null
		},
		chartdata:{
			expenses: [
				{ color: '#3A8A56', value: 55 }
			],
			income: [],
			assets: [
				{ color: '#3A8A56', value: 25 }
			],
			networth: {
				labels : ["January","February","March","April","May","June","July"],
					datasets : [
						{
							fillColor : "rgba(220,220,220,0.5)",
							strokeColor : "rgba(220,220,220,1)",
							pointColor : "rgba(220,220,220,1)",
							pointStrokeColor : "#fff",
							data : [65,59,90,81,56,55,40]
						},
						{
							fillColor : "rgba(151,187,205,0.5)",
							strokeColor : "rgba(151,187,205,1)",
							pointColor : "rgba(151,187,205,1)",
							pointStrokeColor : "#fff",
							data : [28,48,40,19,96,27,100]
						}
					]
			}
		},
		init: function(){
			this.getIncome();
			this.getAssets();
			this.getExpenses();
		},
		
		addItem: function(obj){
			$scope.$apply(function(){
				$scope.Career.chartdata.assets.push(obj);
				$scope.Career.chartdata.expenses.push(obj);
			});
		},
		
		getExpenses: function(){
			ParseService.get('Expense', null, function(data){
				$scope.$apply(function(){
					$scope.Career.data.expenses = data;
				});
			});
			
		},
		getAssets: function(){
			var self = this;
			ParseService.get('Asset', null, function(data){
					$scope.Career.data.assets = data;
			});
			
		},
		getIncome: function(){
			ParseService.get('Income', null, function(data){
				$scope.$apply(function(){
					$scope.Career.data.income = data;
				});
			});
		},
		addIncome: function(o){
			ParseService.add('Income', o, function(data){
				$scope.$apply(function(){
					$scope.Career.getIncome();
					angular.element('#addIncomeModal').modal('toggle');
				});
			});
		},
		addExpense: function(o){
			ParseService.add('Expense', o, function(data){
				$scope.$apply(function(){
					$scope.Career.getExpenses();
					angular.element('#addExpenseModal').modal('toggle');
				});
			});
		},
		addAsset: function(o){
			ParseService.add('Asset', o, function(data){
				$scope.$apply(function(){
					$scope.Career.chartdata.assets.push(o);
					$scope.Career.getAssets();
					angular.element('#addAssetModal').modal('toggle');
				});
			});
		},
		
		//Calculate totals for net worth chart - 
		calcTotals: function(){
			
			//Loop all expenses, assets, and income, total up the amount field.
			
			
		},
		
		//Build the chart data for all charts
		buildAssetChart: function(){
			
			//Build asset data
			var assets = $scope.Career.data.assets;
			$scope.Career.chartdata.assets = [];
			angular.forEach(assets, function(obj){
				$scope.$apply(function(){
					$scope.Career.chartdata.assets.push({ color: String(obj.color), value: obj.amount });
				});
			});
			
		}
	};
	
	window.Career = $scope.Career;
	console.log($scope);
});