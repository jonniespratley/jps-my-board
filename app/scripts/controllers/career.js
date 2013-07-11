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
			assets: null,
			assetTotal: 0,
			expenseTotal: 0,
			incomeTotal: 0
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
				labels : ['Income', 'Expenses'],
					datasets : [
						{
							fillColor : "rgba(11,126,39,0.38)",
							strokeColor : "rgba(21,133,95,0.6)",
							pointColor : "rgba(220,220,220,1)",
							pointStrokeColor : "#fff",
							data : [65,59]
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
			var self = this;
			ParseService.get('Expense', null, function(data){
					$scope.Career.data.expenses = data;
					self.buildExpenseChart();
					self.calcTotals();
			});
		},
		getAssets: function(){
			var self = this;
			ParseService.get('Asset', null, function(data){
					$scope.Career.data.assets = data;
					self.buildAssetChart();
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
			var self = this;
			//Loop all expenses, assets, and income, total up the amount field.
			var expenseTotal = 0;
			var assetTotal = 0;
			var incomeTotal = 0;
			
			angular.forEach($scope.Career.data.assets, function(obj){
				assetTotal += parseFloat(obj.amount);
			});
			angular.forEach($scope.Career.data.expenses, function(obj){
				expenseTotal += parseFloat(obj.amount);
			});
			angular.forEach($scope.Career.data.income, function(obj){
				incomeTotal += parseFloat(obj.amount);
			});
			
			$scope.Career.data.incomeTotal = incomeTotal;
			$scope.Career.data.expenseTotal = expenseTotal;
			$scope.Career.data.assetTotal = assetTotal;
			$scope.Career.chartdata.networth.datasets[0].data = [ incomeTotal, expenseTotal ];
			
			
			
		},
		
		//Build the chart data for asset chart
		buildAssetChart: function(){
			var data = $scope.Career.data.assets;
			$scope.Career.chartdata.assets = [];
			angular.forEach(data, function(obj){
				$scope.$apply(function(){
					$scope.Career.chartdata.assets.push({ color: String(obj.color), value: Number(obj.amount) });
				});
			});
		},
		
		//Build the chart data for the expenses chart
		buildExpenseChart: function(){
			var data = $scope.Career.data.expenses;
			$scope.Career.chartdata.expenses = [];
			angular.forEach(data, function(obj){
				$scope.$apply(function(){
					$scope.Career.chartdata.expenses.push({ color: String(obj.color), value: Number(obj.amount) });
				});
			});
		},
		
		
		
		//Build the charts from the data returned
		buildChart: function(name, data){
			
		}
	};
	
	window.Career = $scope.Career;
	console.log($scope);
});