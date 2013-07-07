'use strict';
angular.module('myBoardApp').controller('CareerCtrl', function ($scope, $rootScope, ParseService, App) {
	
	//Income object
	$scope.income = {
		title: null,
		amount: null,
		date: null,
		category: null
	};
	
	//Asset object
	$scope.asset = {
		title: null,
		amount: null,
		date: null,
		category: null
	};
	
	//Expense object
	$scope.expense = {
		title: '',
		amount: '',
		date: '',
		category: ''
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
		init: function(){
			App.init();
			this.getIncome();
			this.getAssets();
			this.getExpenses();
		},
		getExpenses: function(){
			ParseService.get('Expense', null, function(data){
				$scope.$apply(function(){
					$scope.Career.data.expenses = data;
				});
			});
			
		},
		getAssets: function(){
			ParseService.get('Asset', null, function(data){
				$scope.$apply(function(){
					$scope.Career.data.assets = data;
				});
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
					$scope.Career.data.income.push(data);
					angular.element('#addIncomeModal').modal('toggle');
				});
			});
		},
		addExpense: function(o){
			ParseService.add('Expense', o, function(data){
				$scope.$apply(function(){
					$scope.Career.data.expenses.push(data);
					angular.element('#addExpenseModal').modal('toggle');
				});
			});
		},
		addAsset: function(o){
			ParseService.add('Asset', o, function(data){
				$scope.$apply(function(){
					$scope.Career.data.assets.push(data);
					angular.element('#addAssetModal').modal('toggle');
				});
			});
		},
		
		//Calculate totals for net worth chart - 
		calcTotals: function(){
			
			//Loop all expenses, assets, and income, total up the amount field.
			
			
		}
	};
	
	console.log($scope);
});