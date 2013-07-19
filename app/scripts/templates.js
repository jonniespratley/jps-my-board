angular.module("myBoardApp").run(["$templateCache", function($templateCache) {

  $templateCache.put("/views/about.html",
    "<article id=\"about\">\n" +
    "\t<div class=\"hero-unit center\">\n" +
    "\t\t<h1>About My-Board!</h1>\n" +
    "\t\t<p>\n" +
    "\t\t\tThis web application was created for the ChartJS Dashboard Challenge, and is open source. \n" +
    "\t\t</p>\n" +
    "\t\t<a class=\"btn btn-large btn-inverse\" href=\"https://github.com/jonniespratley/jps-my-board\" target=\"_blank\"> <i class=\"icon-github\"></i> View Project on Github</a>\n" +
    "\t</div>\n" +
    "\t<div id=\"about-row\" class=\"row-fluid\">\n" +
    "\t\t<div class=\"span12\">\n" +
    "\t\t\t<legend>\n" +
    "\t\t\t\tOverview\n" +
    "\t\t\t</legend>\n" +
    "\t\t\t<p>\n" +
    "\t\t\t\tThe purpose of this simple web application was to demonstrate using ChartJS charts to display visual data to the user in an engaging way. \n" +
    "\t\t\t\tInstead of just using 3 charts to display data I wanted to take a step further and display different types of data using the ChartJS library.\n" +
    "\t\t\t</p>\n" +
    "\t\t\t\n" +
    "\t\t\t<legend>\n" +
    "\t\t\t\tData Sources\n" +
    "\t\t\t</legend>\n" +
    "\t\t\t<p>\n" +
    "\t\t\t\tThe data comes from a variety of places, the most important things in someones life is there career, health and network, so the career data comes from my own personal bank account,\n" +
    "\t\t\t\tcareer, the health data comes from my entries, and the network data comes from my social networks.\n" +
    "\t\t\t</p>\n" +
    "\t\t\t\n" +
    "\t\t\t<legend>\n" +
    "\t\t\t\tResources\n" +
    "\t\t\t</legend>\n" +
    "\t\t\t<p>\n" +
    "\t\t\t\tThis application would not be possible without all of the great web technologies out today, here is a list of technologies used to create this web application:\n" +
    "\t\t\t</p>\n" +
    "\t\t\t<p>\n" +
    "\t\t\t\t<ul class=\"unstyled\">\n" +
    "\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t<a href=\"http://angularjs.org\" target=\"_blank\">AngularJS</a>\n" +
    "\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t<a href=\"http://chartjs.org\" target=\"_blank\">ChartJS</a>\n" +
    "\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t<a href=\"#\">Font-Awesome</a>\n" +
    "\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t<a href=\"#\">Yeoman</a>\n" +
    "\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t<a href=\"#\">Plunker</a>\n" +
    "\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t<a href=\"#\">Twitter Bootstrap</a>\n" +
    "\t\t\t\t\t</li>\n" +
    "\t\t\t\t</ul>\n" +
    "\t\t\t</p>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "</article>\n"
  );

  $templateCache.put("/views/callback.html",
    "<p>This is the callback view.</p>\n"
  );

  $templateCache.put("/views/career.html",
    "<article id=\"career\" ng-init=\"Career.init()\">\n" +
    "\t<div class=\"clearfix filters center pull-right\">\n" +
    "\t\t<div class=\"input-append\">\n" +
    "\t\t\t<input type=\"text\" class=\"input-small\" placeholder=\"Todays Date\" data-date-format=\"mm/dd/yyyy\" bs-datepicker ng-model=\"currentDate\"/>\n" +
    "\t\t\t<button class=\"btn btn-sall\" data-toggle=\"datepicker\">\n" +
    "\t\t\t\t<i class=\"icon-calendar\"></i>\n" +
    "\t\t\t</button>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\t<ol class=\"breadcrumb\">\n" +
    "\t\t<li>\n" +
    "\t\t\t<a href=\"#\">Home</a>\n" +
    "\t\t\t<span class=\"divider\">/</span>\n" +
    "\t\t</li>\n" +
    "\t\t<li class=\"active\">\n" +
    "\t\t\tMy Career\n" +
    "\t\t</li>\n" +
    "\t</ol>\n" +
    "\t<div class=\"row-fluid main-features\">\n" +
    "\t\t<div class=\"span4\">\n" +
    "\t\t\t<widget title=\"Income\" icon=\"money\" modal=\"addIncomeModal\">\n" +
    "\t\t\t\t<div ng-hide=\"(Career.data.income | filter:dateFilter).length\" class=\"alert alert-info\"><strong>Heads Up!</strong> You do not have any income for the selected date.</div>\n" +
    "\t\t\t\t<table class=\"table table-small table-hover\" ng-show=\"(Career.data.income | filter:dateFilter).length\">\n" +
    "\t\t\t\t\t<thead>\n" +
    "\t\t\t\t\t\t<tr>\n" +
    "\t\t\t\t\t\t\t<th>Name</th>\n" +
    "\t\t\t\t\t\t\t<th>Amount</th>\n" +
    "\t\t\t\t\t\t\t<th></th>\n" +
    "\t\t\t\t\t\t</tr>\n" +
    "\t\t\t\t\t</thead>\n" +
    "\t\t\t\t\t<tbody>\n" +
    "\t\t\t\t\t\t<tr ng-repeat=\"item in Career.data.income | filter:dateFilter\" id=\"income-{{item.id}}\">\n" +
    "\t\t\t\t\t\t\t<td><span class=\"label\" style=\"background-color: {{item.color}}\">&nbsp;</span> \n" +
    "\t\t\t\t\t\t\t\t<a href=\"#addIncomeModal\" data-toggle=\"modal\" ng-click=\"Career.selectIncome(item);\">{{item.title}}</a>\n" +
    "\t\t\t\t\t\t\t</td>\n" +
    "\t\t\t\t\t\t\t<td>{{item.amount | currency:$}}</td>\n" +
    "\t\t\t\t\t\t\t<td class=\"actions right\">\n" +
    "\t\t\t\t\t\t\t<button ng-click=\"Career.destroyItem( 'Income', item);\" class=\"btn btn-mini btn-danger\">\n" +
    "\t\t\t\t\t\t\t\t<i class=\"icon-remove\"></i>\n" +
    "\t\t\t\t\t\t\t</button></td>\n" +
    "\t\t\t\t\t\t</tr>\n" +
    "\t\t\t\t\t</tbody>\n" +
    "\t\t\t\t</table>\n" +
    "\t\t\t\t\n" +
    "\t\t\t\t\n" +
    "\t\t\t\t\n" +
    "\t\t\t</widget>\n" +
    "\t\t</div>\n" +
    "\t\t<!-- @TODO: [Networth] -->\n" +
    "\t\t<div class=\"span8\">\n" +
    "\t\t\t<widget title=\"Net Worth Performance\">\n" +
    "\t\t\t\t<chartjs id=\"networthChart\" type=\"bar\"\n" +
    "\t\t\t\tdata='{{Career.chartdata.networth}}'\n" +
    "\t\t\t\tng-model=\"Career.chartdata.networth\"\n" +
    "\t\t\t\twidth=\"600\" height=\"200\">\n" +
    "\t\t\t\t\t<img src=\"http://placehold.it/750x225&amp;text=Line Chart\">\n" +
    "\t\t\t\t</chartjs>\n" +
    "\t\t\t</widget>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\t<!-- @TODO: [Expenses] -->\n" +
    "\t<div class=\"row-fluid sub-features\">\n" +
    "\t\t<div class=\"span6\">\n" +
    "\t\t\t<widget title=\"Expenses\" modal=\"addExpenseModal\">\n" +
    "\t\t\t\t<div ng-hide=\"(Career.data.expenses | filter:dateFilter).length\" class=\"alert alert-info\"><strong>Heads Up!</strong> You do not have any expenses for the selected date.</div>\n" +
    "\t\t\t\t\n" +
    "\t\t\t\t<div id=\"expenses-row\" class=\"row-fluid\" ng-show=\"(Career.data.expenses | filter:dateFilter).length\">\n" +
    "\t\t\t\t\t<div class=\"span6\">\n" +
    "\t\t\t\t\t\t\n" +
    "\t\t\t\t\t\t<table class=\"table table-small table-hover\">\n" +
    "\t\t\t\t\t\t\t<thead>\n" +
    "\t\t\t\t\t\t\t\t<tr>\n" +
    "\t\t\t\t\t\t\t\t\t<th>Category</th>\n" +
    "\t\t\t\t\t\t\t\t\t<th>Amount</th>\n" +
    "\t\t\t\t\t\t\t\t\t<th></th>\n" +
    "\t\t\t\t\t\t\t\t</tr>\n" +
    "\t\t\t\t\t\t\t</thead>\n" +
    "\t\t\t\t\t\t\t<tbody>\n" +
    "\t\t\t\t\t\t\t\t<tr ng-repeat=\"item in Career.data.expenses | filter:dateFilter\" id=\"expense-{{item.id}}\">\n" +
    "\t\t\t\t\t\t\t\t\t<td><span class=\"label\" style=\"background-color: {{item.color}}\">&nbsp;</span> \n" +
    "\t\t\t\t\t\t\t\t\t\t<a href=\"#addExpenseModal\" data-toggle=\"modal\" ng-click=\"Career.selectExpense(item);\">{{item.title}}</a>\n" +
    "\t\t\t\t\t\t\t\t\t</td>\n" +
    "\t\t\t\t\t\t\t\t\t<td>{{item.amount | currency:$}}</td>\n" +
    "\t\t\t\t\t\t\t\t\t<td class=\"actions right\">\n" +
    "\t\t\t\t\t\t\t\t\t<button ng-click=\"Career.destroyItem( 'Expense', item);\" class=\"btn btn-mini btn-danger\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<i class=\"icon-remove\"></i>\n" +
    "\t\t\t\t\t\t\t\t\t</button></td>\n" +
    "\t\t\t\t\t\t\t\t</tr>\n" +
    "\t\t\t\t\t\t\t</tbody>\n" +
    "\t\t\t\t\t\t</table>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"span6 center\">\n" +
    "\t\t\t\t\t\t<chartjs id=\"expensesChart\" type=\"doughnut\" data='{{Career.chartdata.expenses}}' ng-model=\"Career.chartdata.expenses\" width=\"150\" height=\"150\">\n" +
    "\t\t\t\t\t\t\t<img src=\"http://placehold.it/200x200&amp;text=Radar Chart\" alt=\"Your browser does not support the canvas element\"/>\n" +
    "\t\t\t\t\t\t</chartjs>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</widget>\n" +
    "\t\t</div>\n" +
    "\t\t<!-- @TODO: [Assets] -->\n" +
    "\t\t<div class=\"span6\">\n" +
    "\t\t\t<widget title=\"Assets\" modal=\"addAssetModal\">\n" +
    "\t\t\t\t<div id=\"assets-row\" class=\"row-fluid\">\n" +
    "\t\t\t\t\t<div class=\"span6\">\n" +
    "\t\t\t\t\t\t<table class=\"table table-small table-hover\">\n" +
    "\t\t\t\t\t\t\t<thead>\n" +
    "\t\t\t\t\t\t\t\t<tr>\n" +
    "\t\t\t\t\t\t\t\t\t<th>Name</th>\n" +
    "\t\t\t\t\t\t\t\t\t<th>Amount</th>\n" +
    "\t\t\t\t\t\t\t\t\t<th></th>\n" +
    "\t\t\t\t\t\t\t\t</tr>\n" +
    "\t\t\t\t\t\t\t</thead>\n" +
    "\t\t\t\t\t\t\t<tbody>\n" +
    "\t\t\t\t\t\t\t\t<tr ng-repeat=\"item in Career.data.assets\" id=\"asset-{{item.id}}\">\n" +
    "\t\t\t\t\t\t\t\t\t<td><span class=\"label\" style=\"background-color: {{item.color}}\">&nbsp;</span> \n" +
    "\t\t\t\t\t\t\t\t\t\t<a href=\"#addAssetModal\" data-toggle=\"modal\" ng-click=\"Career.selectAsset(item);\">{{item.title}}</a>\n" +
    "\t\t\t\t\t\t\t\t\t</td>\n" +
    "\t\t\t\t\t\t\t\t\t<td>{{item.amount | currency:$}}</td>\n" +
    "\t\t\t\t\t\t\t\t\t<td class=\"actions right\">\n" +
    "\t\t\t\t\t\t\t\t\t<button ng-click=\"Career.destroyItem( 'Asset', item);\" class=\"btn btn-mini btn-danger\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<i class=\"icon-remove\"></i>\n" +
    "\t\t\t\t\t\t\t\t\t</button></td>\n" +
    "\t\t\t\t\t\t\t\t</tr>\n" +
    "\t\t\t\t\t\t\t</tbody>\n" +
    "\t\t\t\t\t\t</table>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t<div class=\"span6 center\">\n" +
    "\t\t\t\t\t\t<chartjs id=\"assetsChart\" type=\"pie\"\n" +
    "\t\t\t\t\t\tdata='{{Career.chartdata.assets}}'\n" +
    "\t\t\t\t\t\tng-model=\"Career.chartdata.assets\"\n" +
    "\t\t\t\t\t\twidth=\"150\" height=\"150\">\n" +
    "\t\t\t\t\t\t\t<img src=\"http://placehold.it/200x200&amp;text=Radar Chart\">\n" +
    "\t\t\t\t\t\t</chartjs>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</widget>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\t<!-- @TODO: [Expense Modal] -->\n" +
    "\t<div class=\"modal fade hide\" id=\"addExpenseModal\">\n" +
    "\t\t<div class=\"modal-header\">\n" +
    "\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n" +
    "\t\t\t\t×\n" +
    "\t\t\t</button>\n" +
    "\t\t\t<h3>Expense Details</h3>\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"modal-body\">\n" +
    "\t\t\t<form id=\"form_expense\" class=\"form-horizontal\">\n" +
    "\t\t\t\t<formitem title=\"Name:\">\n" +
    "\t\t\t\t\t<input type=\"text\" class=\"input-medium\" ng-model=\"expense.title\"/>\n" +
    "\t\t\t\t</formitem>\n" +
    "\t\t\t\t<formitem title=\"Amount:\">\n" +
    "\t\t\t\t\t<input type=\"text\" class=\"input-medium\" ng-model=\"expense.amount\" />\n" +
    "\t\t\t\t</formitem>\n" +
    "\t\t\t\t<formitem title=\"Category:\">\n" +
    "\t\t\t\t\t<input type=\"text\" class=\"input-medium\" ng-model=\"expense.category\" />\n" +
    "\t\t\t\t</formitem>\n" +
    "\t\t\t\t<formitem title=\"Date:\">\n" +
    "\t\t\t\t\t<input type=\"text\" class=\"input-medium\" ng-model=\"expense.date\" data-date-format=\"mm/dd/yyyy\" bs-datepicker>\n" +
    "\t\t\t\t</formitem>\n" +
    "\t\t\t\t<formitem title=\"Color:\">\n" +
    "\t\t\t\t\t<input colorpicker=\"hex\" class=\"input-medium\" value=\"\" type=\"text\" ng-model=\"expense.color\"/>\n" +
    "\t\t\t\t</formitem>\n" +
    "\t\t\t</form>\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"modal-footer\">\n" +
    "\t\t\t<a href=\"#\" class=\"btn\" data-dismiss=\"modal\">Close</a>\n" +
    "\t\t\t<button ng-click=\"Career.addExpense(expense)\" class=\"btn btn-primary\">\n" +
    "\t\t\t\tSave\n" +
    "\t\t\t</button>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\t<!-- @TODO: [Income Modal] -->\n" +
    "\t<div class=\"modal fade hide\" id=\"addIncomeModal\">\n" +
    "\t\t<div class=\"modal-header\">\n" +
    "\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n" +
    "\t\t\t\t×\n" +
    "\t\t\t</button>\n" +
    "\t\t\t<h3>Income Details</h3>\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"modal-body\">\n" +
    "\t\t\t<form class=\"form-horizontal\">\n" +
    "\t\t\t\t<formitem title=\"Name:\">\n" +
    "\t\t\t\t\t<input type=\"text\" class=\"input-medium\" ng-model=\"income.title\">\n" +
    "\t\t\t\t</formitem>\n" +
    "\t\t\t\t<formitem title=\"Amount:\">\n" +
    "\t\t\t\t\t<input type=\"text\" class=\"input-medium\" ng-model=\"income.amount\">\n" +
    "\t\t\t\t</formitem>\n" +
    "\t\t\t\t<formitem title=\"Date:\">\n" +
    "\t\t\t\t\t<input type=\"text\" class=\"input-medium\" ng-model=\"income.date\" data-date-format=\"mm/dd/yyyy\" bs-datepicker>\n" +
    "\t\t\t\t</formitem>\n" +
    "\t\t\t\t<formitem title=\"Color:\">\n" +
    "\t\t\t\t\t<input colorpicker=\"hex\" class=\"input-medium\" value=\"\" type=\"text\" ng-model=\"income.color\"/>\n" +
    "\t\t\t\t</formitem>\n" +
    "\t\t\t</form>\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"modal-footer\">\n" +
    "\t\t\t<a href=\"#\" class=\"btn\" data-dismiss=\"modal\">Close</a>\n" +
    "\t\t\t<button ng-click=\"Career.addIncome(income);\" class=\"btn btn-primary\">\n" +
    "\t\t\t\tSave\n" +
    "\t\t\t</button>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\t<!-- @TODO: [Asset Modal] -->\n" +
    "\t<div class=\"modal fade hide\" id=\"addAssetModal\">\n" +
    "\t\t<div class=\"modal-header\">\n" +
    "\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n" +
    "\t\t\t\t×\n" +
    "\t\t\t</button>\n" +
    "\t\t\t<h3>Asset Details</h3>\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"modal-body\">\n" +
    "\t\t\t<form class=\"form-horizontal\">\n" +
    "\t\t\t\t<formitem title=\"Name:\">\n" +
    "\t\t\t\t\t<input type=\"text\" class=\"input-medium\" ng-model=\"asset.title\"/>\n" +
    "\t\t\t\t</formitem>\n" +
    "\t\t\t\t<formitem title=\"Amount:\">\n" +
    "\t\t\t\t\t<input type=\"text\" class=\"input-medium\" ng-model=\"asset.amount\"/>\n" +
    "\t\t\t\t</formitem>\n" +
    "\t\t\t\t<formitem title=\"Category:\">\n" +
    "\t\t\t\t\t<input type=\"text\" class=\"input-medium\" ng-model=\"asset.category\"/>\n" +
    "\t\t\t\t</formitem>\n" +
    "\t\t\t\t<formitem title=\"Date:\">\n" +
    "\t\t\t\t\t<input type=\"text\" class=\"input-medium\" ng-model=\"asset.date\" data-date-format=\"mm/dd/yyyy\" bs-datepicker>\n" +
    "\t\t\t\t</formitem>\n" +
    "\t\t\t\t<formitem title=\"Color:\">\n" +
    "\t\t\t\t\t<input colorpicker=\"hex\" class=\"input-medium\" value=\"\" type=\"text\" ng-model=\"asset.color\"/>\n" +
    "\t\t\t\t</formitem>\n" +
    "\t\t\t</form>\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"modal-footer\">\n" +
    "\t\t\t<a href=\"#\" class=\"btn\" data-dismiss=\"modal\">Close</a>\n" +
    "\t\t\t<button ng-click=\"Career.addAsset(asset)\" class=\"btn btn-primary\">\n" +
    "\t\t\t\tSave\n" +
    "\t\t\t</button>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "</article>"
  );

  $templateCache.put("/views/health.html",
    "<article id=\"health\" ng-init=\"Health.init()\">\n" +
    "\t<div class=\"clearfix filters center pull-right\">\n" +
    "\t\t<div class=\"input-append\">\n" +
    "\t\t\t<input type=\"text\" class=\"input-small\" placeholder=\"Todays Date\" data-date-format=\"mm/dd/yyyy\" bs-datepicker ng-model=\"currentDate\"/>\n" +
    "\t\t\t<button class=\"btn btn-sall\" data-toggle=\"datepicker\">\n" +
    "\t\t\t\t<i class=\"icon-calendar\"></i>\n" +
    "\t\t\t</button>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\t<ol class=\"breadcrumb\">\n" +
    "\t\t<li>\n" +
    "\t\t\t<a href=\"#\">Home</a>\n" +
    "\t\t\t<span class=\"divider\">/</span>\n" +
    "\t\t</li>\n" +
    "\t\t<li class=\"active\">\n" +
    "\t\t\tMy Health\n" +
    "\t\t</li>\n" +
    "\t</ol>\n" +
    "\t<div class=\"alert alert-block \">\n" +
    "\t\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\">\n" +
    "\t\t\t&times;\n" +
    "\t\t</button>\n" +
    "\t\t<h4>My Health - Board</h4>\n" +
    "\t\t<p>\n" +
    "\t\t\tHi {{user.name}}, your personal Calorie goal is {{user.calories}}. Your plan amounts are based on meeting\n" +
    "\t\t\tyour nutrient needs. See <a data-toggle=\"modal\" href=\"#healthProfileModal\" >your plan</a> for more details.\n" +
    "\t\t</p>\n" +
    "\t</div>\n" +
    "\t<div class=\"row-fluid main-features\">\n" +
    "\t\t<div class=\"span3\">\n" +
    "\t\t\t<widget title=\"Meals\" modal=\"addFoodModal\">\n" +
    "\t\t\t\t<ul class=\"nav nav-list\">\n" +
    "\t\t\t\t\t<li class=\"nav-header\">\n" +
    "\t\t\t\t\t\tBreakfast\n" +
    "\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t<li ng-repeat=\"item in Health.data.foods | filter:filterBreakfast\">\n" +
    "\t\t\t\t\t\t{{item.title}} - {{item.calories}} cal.\n" +
    "\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t<li class=\"nav-header\">\n" +
    "\t\t\t\t\t\tLunch\n" +
    "\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t<li ng-repeat=\"item in Health.data.foods | filter:filterLunch\">\n" +
    "\t\t\t\t\t\t{{item.title}} - {{item.calories}} cal.\n" +
    "\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t<li class=\"nav-header\">\n" +
    "\t\t\t\t\t\tDinner\n" +
    "\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t<li ng-repeat=\"item in Health.data.foods | filter:filterDinner\">\n" +
    "\t\t\t\t\t\t{{item.title}} - {{item.calories}} cal.\n" +
    "\t\t\t\t\t</li>\n" +
    "\t\t\t\t</ul>\n" +
    "\t\t\t</widget>\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"span9\">\n" +
    "\t\t\t<widget title=\"Activity\" modal=\"addActivityModal\">\n" +
    "\t\t\t\t<chartjs id=\"weeklyChart\" data='{{weeklyData}}' ng-model=\"weeklyData\" type=\"bar\" width=\"700\" height=\"200\"></chartjs>\n" +
    "\t\t\t</widget>\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"row-fluid sub-features\">\n" +
    "\t\t\t<div class=\"span5\">\n" +
    "\t\t\t\t<widget title=\"Calorie Limit\">\n" +
    "\t\t\t\t\t<div class=\"center clearfix\">\n" +
    "\t\t\t\t\t\t<chartjs id=\"calorieLimitsChart\" height=\"200\" width=\"200\" data='{{dailyCalorieLimitsData}}'s type=\"doughnut\" ng-model=\"dailyCalorieLimitsData\">\n" +
    "\t\t\t\t\t\t\t<img src=\"http://placehold.it/200x150&amp;text=PieChart\">\n" +
    "\t\t\t\t\t\t</chartjs>\n" +
    "\t\t\t\t\t\t<p>\n" +
    "\t\t\t\t\t\t\t<ul class=\"inline small\">\n" +
    "\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\tAllowed: <span class=\"label label-success\">{{dailyCaloriesLimit}}</span>\n" +
    "\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\tUsed: <span class=\"label label-warning\">{{dailyCaloriesUsed}}</span>\n" +
    "\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\tRemaining: <span class=\"label label-info\">{{dailyCaloriesRemaining}}</span>\n" +
    "\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t</ul>\n" +
    "\t\t\t\t\t\t</p>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</widget>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"span7\">\n" +
    "\t\t\t\t<widget title=\"Food Group Targets\">\n" +
    "\t\t\t\t\t<div class=\"center clearfix\">\n" +
    "\t\t\t\t\t\t<chartjs id=\"dailyFoodgroupChart\" width=\"500\" height=\"200\" type=\"bar\" data='{{dailyFoodgroupsData}}' ng-model=\"dailyFoodgroupsData\">\n" +
    "\t\t\t\t\t\t\t<img src=\"http://placehold.it/500x150&amp;text=Bar Chart\">\n" +
    "\t\t\t\t\t\t</chartjs>\n" +
    "\t\t\t\t\t\t<p>\n" +
    "\t\t\t\t\t\t\t<ul class=\"inline small\">\n" +
    "\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\tGrains: <span class=\"label label-grains\">10 oz.</span>\n" +
    "\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\tVegies: <span class=\"label label-vegetables\">32 oz.</span>\n" +
    "\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\tFruits: <span class=\"label label-fruits\">20 oz.</span>\n" +
    "\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\tDairy: <span class=\"label label-dairy\">24 oz.</span>\n" +
    "\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t<li>\n" +
    "\t\t\t\t\t\t\t\t\tProteins: <span class=\"label label-protein\">7 oz.</span>\n" +
    "\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t</ul>\n" +
    "\t\t\t\t\t\t</p>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</widget>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t\t<div id=\"health-row\" class=\"row-fluid\">\n" +
    "\t\t\t<div class=\"span12\">\n" +
    "\t\t\t\t<tabs>\n" +
    "\t\t\t\t\t<pane title=\"Activities\">\n" +
    "\t\t\t\t\t\t<widget title=\"Activities\" modal=\"addActivityModal\">\n" +
    "\t\t\t\t\t\t\t<table id=\"activity-table\" class=\"table table-bordered table-small table-hover \">\n" +
    "\t\t\t\t\t\t\t\t<thead>\n" +
    "\t\t\t\t\t\t\t\t\t<tr>\n" +
    "\t\t\t\t\t\t\t\t\t\t<th>\n" +
    "\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"checkall\"/>\n" +
    "\t\t\t\t\t\t\t\t\t\t</th>\n" +
    "\t\t\t\t\t\t\t\t\t\t<th>Activity</th>\n" +
    "\t\t\t\t\t\t\t\t\t\t<th>Duration</th>\n" +
    "\t\t\t\t\t\t\t\t\t\t<th>Intensity</th>\n" +
    "\t\t\t\t\t\t\t\t\t\t<th>Calories Burned</th>\n" +
    "\t\t\t\t\t\t\t\t\t\t<th>Date</th>\n" +
    "\t\t\t\t\t\t\t\t\t\t<th>Actions</th>\n" +
    "\t\t\t\t\t\t\t\t\t</tr>\n" +
    "\t\t\t\t\t\t\t\t</thead>\n" +
    "\t\t\t\t\t\t\t\t<tbody>\n" +
    "\t\t\t\t\t\t\t\t\t<tr ng-repeat=\"item in Health.data.activities | filter:dateFilter\" id=\"activity-{{item.id}}\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<td>\n" +
    "\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\"/>\n" +
    "\t\t\t\t\t\t\t\t\t\t</td>\n" +
    "\t\t\t\t\t\t\t\t\t\t<td><a href=\"#addActivityModal\" data-toggle=\"modal\" ng-click=\"Health.selectActivity(item);\" class=\"\"> {{item.title}} </a></td>\n" +
    "\t\t\t\t\t\t\t\t\t\t<td>{{item.duration}}</td>\n" +
    "\t\t\t\t\t\t\t\t\t\t<td>{{item.intensity}}</td>\n" +
    "\t\t\t\t\t\t\t\t\t\t<td>{{item.calories}}</td>\n" +
    "\t\t\t\t\t\t\t\t\t\t<td>{{item.date | date:'mediumDate'}}</td>\n" +
    "\t\t\t\t\t\t\t\t\t\t<td class=\"actions\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<button ng-click=\"Health.destroyItem( 'Activity', item);\" class=\"btn btn-small btn-danger delete\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<i class=\"icon-remove\"></i>\n" +
    "\t\t\t\t\t\t\t\t\t\t</button></td>\n" +
    "\t\t\t\t\t\t\t\t\t</tr>\n" +
    "\t\t\t\t\t\t\t\t</tbody>\n" +
    "\t\t\t\t\t\t\t</table>\n" +
    "\t\t\t\t\t\t</widget>\n" +
    "\t\t\t\t\t</pane>\n" +
    "\t\t\t\t\t<pane title=\"Food Entries\">\n" +
    "\t\t\t\t\t\t<widget title=\"Food Entries\" modal=\"addFoodModal\">\n" +
    "\t\t\t\t\t\t\t<table id=\"food-table\" class=\"table table-bordered table-small table-hover \">\n" +
    "\t\t\t\t\t\t\t\t<thead>\n" +
    "\t\t\t\t\t\t\t\t\t<tr>\n" +
    "\t\t\t\t\t\t\t\t\t\t<th>\n" +
    "\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"checkall\"/>\n" +
    "\t\t\t\t\t\t\t\t\t\t</th>\n" +
    "\t\t\t\t\t\t\t\t\t\t<th>Food</th>\n" +
    "\t\t\t\t\t\t\t\t\t\t<th>Meal</th>\n" +
    "\t\t\t\t\t\t\t\t\t\t<th>Calories</th>\n" +
    "\t\t\t\t\t\t\t\t\t\t<th>Date</th>\n" +
    "\t\t\t\t\t\t\t\t\t\t<th>Actions</th>\n" +
    "\t\t\t\t\t\t\t\t\t</tr>\n" +
    "\t\t\t\t\t\t\t\t</thead>\n" +
    "\t\t\t\t\t\t\t\t<tbody>\n" +
    "\t\t\t\t\t\t\t\t\t<tr ng-repeat=\"item in Health.data.foods | filter:dateFilter\" id=\"food-{{item.id}}\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<td>\n" +
    "\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\"/>\n" +
    "\t\t\t\t\t\t\t\t\t\t</td>\n" +
    "\t\t\t\t\t\t\t\t\t\t<td><a href=\"#addFoodModal\" data-toggle=\"modal\" ng-click=\"Health.selectFood(item);\" class=\"\"> {{item.title}} </a></td>\n" +
    "\t\t\t\t\t\t\t\t\t\t<td>{{item.meal}}</td>\n" +
    "\t\t\t\t\t\t\t\t\t\t<td>{{item.calories}}</td>\n" +
    "\t\t\t\t\t\t\t\t\t\t<td>{{item.date | date:'mediumDate'}}</td>\n" +
    "\t\t\t\t\t\t\t\t\t\t<td class=\"actions\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<button ng-click=\"Health.destroyItem( 'Food', item);\" class=\"btn btn-small btn-danger delete\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<i class=\"icon-remove\"></i>\n" +
    "\t\t\t\t\t\t\t\t\t\t</button></td>\n" +
    "\t\t\t\t\t\t\t\t\t</tr>\n" +
    "\t\t\t\t\t\t\t\t</tbody>\n" +
    "\t\t\t\t\t\t\t</table>\n" +
    "\t\t\t\t\t\t</widget>\n" +
    "\t\t\t\t\t</pane>\n" +
    "\t\t\t\t</tabs>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t\t<!-- @TODO: [Add Activity Modal] -->\n" +
    "\t\t<div class=\"modal fade hide\" id=\"addActivityModal\">\n" +
    "\t\t\t<div class=\"modal-header\">\n" +
    "\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n" +
    "\t\t\t\t\t×\n" +
    "\t\t\t\t</button>\n" +
    "\t\t\t\t<h3>Activity Details</h3>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"modal-body\">\n" +
    "\t\t\t\t<form class=\"form-horizontal\">\n" +
    "\t\t\t\t\t<formitem title=\"Name:\">\n" +
    "\t\t\t\t\t\t<input type=\"text\" class=\"input-medium\" ng-model=\"activity.title\"/>\n" +
    "\t\t\t\t\t</formitem>\n" +
    "\t\t\t\t\t<formitem title=\"Description:\">\n" +
    "\t\t\t\t\t\t<textarea class=\"input-medium\" ng-model=\"activity.body\"></textarea>\n" +
    "\t\t\t\t\t</formitem>\n" +
    "\t\t\t\t\t<formitem title=\"Duration:\">\n" +
    "\t\t\t\t\t\t<input type=\"number\" class=\"input-medium\" ng-model=\"activity.duration\"/>\n" +
    "\t\t\t\t\t\t<span class=\"help-inline\">minutes</span>\n" +
    "\t\t\t\t\t</formitem>\n" +
    "\t\t\t\t\t<formitem title=\"Intensity:\">\n" +
    "\t\t\t\t\t\t<input type=\"text\" class=\"input-medium\" ng-model=\"activity.intensity\"/>\n" +
    "\t\t\t\t\t</formitem>\n" +
    "\t\t\t\t\t<formitem title=\"Calories Burned:\">\n" +
    "\t\t\t\t\t\t<input type=\"number\" class=\"input-medium\" ng-model=\"activity.calories\"/>\n" +
    "\t\t\t\t\t</formitem>\n" +
    "\t\t\t\t\t<formitem title=\"Date:\">\n" +
    "\t\t\t\t\t\t<input type=\"text\" class=\"input-medium\" ng-model=\"activity.date\" data-date-format=\"mm/dd/yyyy\" bs-datepicker>\n" +
    "\t\t\t\t\t</formitem>\n" +
    "\t\t\t\t</form>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"modal-footer\">\n" +
    "\t\t\t\t<a href=\"#\" class=\"btn\" data-dismiss=\"modal\">Close</a>\n" +
    "\t\t\t\t<button class=\"btn btn-primary\" ng-click=\"Health.addActivity(activity)\">\n" +
    "\t\t\t\t\tSave\n" +
    "\t\t\t\t</button>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t\t<!-- @TODO: [Add Food Modal] -->\n" +
    "\t\t<div class=\"modal fade hide\" id=\"addFoodModal\">\n" +
    "\t\t\t<div class=\"modal-header\">\n" +
    "\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n" +
    "\t\t\t\t\t×\n" +
    "\t\t\t\t</button>\n" +
    "\t\t\t\t<h3>Food Entry Details</h3>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"modal-body\">\n" +
    "\t\t\t\t<form class=\"form-horizontal\">\n" +
    "\t\t\t\t\t<formitem title=\"Name:\">\n" +
    "\t\t\t\t\t\t<input type=\"text\" class=\"input-medium\" ng-model=\"food.title\"/>\n" +
    "\t\t\t\t\t</formitem>\n" +
    "\t\t\t\t\t<formitem title=\"Meal:\">\n" +
    "\t\t\t\t\t\t<select class=\"input-medium\" ng-model=\"food.meal\" ng-options=\"meal for meal in meals\"></select>\n" +
    "\t\t\t\t\t</formitem>\n" +
    "\t\t\t\t\t<formitem title=\"Date:\">\n" +
    "\t\t\t\t\t\t<input type=\"text\" class=\"input-medium\" ng-model=\"food.date\" data-date-format=\"mm/dd/yyyy\" bs-datepicker>\n" +
    "\t\t\t\t\t</formitem>\n" +
    "\t\t\t\t\t<formitem title=\"Calories:\">\n" +
    "\t\t\t\t\t\t<input type=\"number\" class=\"input-medium\" ng-model=\"food.calories\"/>\n" +
    "\t\t\t\t\t</formitem>\n" +
    "\t\t\t\t\t<legend>\n" +
    "\t\t\t\t\t\tFood Groups\n" +
    "\t\t\t\t\t</legend>\n" +
    "\t\t\t\t\t<formitem title=\"Grains:\">\n" +
    "\t\t\t\t\t\t<input type=\"number\" class=\"input-medium\" ng-model=\"food.foodgroups.grains\"/>\n" +
    "\t\t\t\t\t</formitem>\n" +
    "\t\t\t\t\t<formitem title=\"Vegetables:\">\n" +
    "\t\t\t\t\t\t<input type=\"number\" class=\"input-medium\" ng-model=\"food.foodgroups.vegetables\"/>\n" +
    "\t\t\t\t\t</formitem>\n" +
    "\t\t\t\t\t<formitem title=\"Dairy:\">\n" +
    "\t\t\t\t\t\t<input type=\"number\" class=\"input-medium\" ng-model=\"food.foodgroups.dairy\"/>\n" +
    "\t\t\t\t\t</formitem>\n" +
    "\t\t\t\t\t<formitem title=\"Protein Foods:\">\n" +
    "\t\t\t\t\t\t<input type=\"number\" class=\"input-medium\" ng-model=\"food.foodgroups.protein\"/>\n" +
    "\t\t\t\t\t</formitem>\n" +
    "\t\t\t\t\t<formitem title=\"Oils:\">\n" +
    "\t\t\t\t\t\t<input type=\"number\" class=\"input-medium\" ng-model=\"food.foodgroups.oils\"/>\n" +
    "\t\t\t\t\t</formitem>\n" +
    "\t\t\t\t</form>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"modal-footer\">\n" +
    "\t\t\t\t<a href=\"#\" class=\"btn\" data-dismiss=\"modal\">Close</a>\n" +
    "\t\t\t\t<button ng-click=\"Health.addFood(food);\" class=\"btn btn-primary\">\n" +
    "\t\t\t\t\tSave\n" +
    "\t\t\t\t</button>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t\t<!-- @TODO: [Health Profile] -->\n" +
    "\t\t<div class=\"modal fade hide\" id=\"healthProfileModal\">\n" +
    "\t\t\t<div class=\"modal-header\">\n" +
    "\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n" +
    "\t\t\t\t\t×\n" +
    "\t\t\t\t</button>\n" +
    "\t\t\t\t<h3>Your Health Profile</h3>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"modal-body\">\n" +
    "\t\t\t\t<form class=\"form-horizontal\">\n" +
    "\t\t\t\t\t<formitem title=\"Name:\">\n" +
    "\t\t\t\t\t\t<input type=\"text\" class=\"input-medium\" ng-model=\"user.name\"/>\n" +
    "\t\t\t\t\t</formitem>\n" +
    "\t\t\t\t\t<formitem title=\"Gender:\">\n" +
    "\t\t\t\t\t\t<input type=\"text\" class=\"input-medium\" ng-model=\"user.gender\"/>\n" +
    "\t\t\t\t\t</formitem>\n" +
    "\t\t\t\t\t<formitem title=\"Height:\">\n" +
    "\t\t\t\t\t\t<input type=\"text\" class=\"input-medium\" ng-model=\"user.height\"/>\n" +
    "\t\t\t\t\t</formitem>\n" +
    "\t\t\t\t\t<formitem title=\"Weight:\">\n" +
    "\t\t\t\t\t\t<input type=\"number\" class=\"input-medium\" ng-model=\"user.weight\"/>\n" +
    "\t\t\t\t\t</formitem>\n" +
    "\t\t\t\t\t<formitem title=\"Weekly Activity Goal:\">\n" +
    "\t\t\t\t\t\t<select class=\"input-large\" ng-model=\"user.activity\">\n" +
    "\t\t\t\t\t\t\t<option value=\"30\">Less than 30 min./day of moderate activity</option>\n" +
    "\t\t\t\t\t\t\t<option value=\"45\">More than 30 min./day of moderate activity</option>\n" +
    "\t\t\t\t\t\t\t<option value=\"60\">Less than 60 min./day of moderate activity</option>\n" +
    "\t\t\t\t\t\t\t<option value=\"120\">More than 60 min./day of moderate activity</option>\n" +
    "\t\t\t\t\t\t</select>\n" +
    "\t\t\t\t\t</formitem>\n" +
    "\t\t\t\t\t<formitem title=\"Daily Calories Goal:\">\n" +
    "\t\t\t\t\t\t<input type=\"number\" class=\"input-medium\" ng-model=\"user.calories\"/>\n" +
    "\t\t\t\t\t</formitem>\n" +
    "\t\t\t\t</form>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"modal-footer\">\n" +
    "\t\t\t\t<a href=\"#\" class=\"btn\" data-dismiss=\"modal\">Close</a>\n" +
    "\t\t\t\t<button ng-click=\"Health.saveUser(user)\" class=\"btn btn-primary\">\n" +
    "\t\t\t\t\tSave\n" +
    "\t\t\t\t</button>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "</article>"
  );

  $templateCache.put("/views/login.html",
    "<div class=\"modal fade hide\" id=\"loginModal\">\n" +
    "\t<div class=\"modal-header\">\n" +
    "\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n" +
    "\t\t\t×\n" +
    "\t\t</button>\n" +
    "\t\t<h3>Login</h3>\n" +
    "\t</div>\n" +
    "\t<div class=\"modal-body\">\n" +
    "\t\t<form class=\"form-horizontal\" ng-submit=\"App.login(user)\">\n" +
    "\t\t\t<formitem title=\"Username:\">\n" +
    "\t\t\t\t<input type=\"text\" class=\"input-large\" ng-model=\"user.username\" required/>\n" +
    "\t\t\t</formitem>\n" +
    "\t\t\t<formitem title=\"Password:\">\n" +
    "\t\t\t\t<input type=\"password\" class=\"input-large\" ng-model=\"user.password\" required/>\n" +
    "\t\t\t</formitem>\n" +
    "\t\t</form>\n" +
    "\t</div>\n" +
    "\t<div class=\"modal-footer\">\n" +
    "\t\t<button ng-click=\"App.fblogin()\" class=\"btn btn-primary\">\n" +
    "\t\t\t<i class=\"icon-facebook\"></i> Login with Facebook\n" +
    "\t\t</button>\n" +
    "\t\tor\n" +
    "\t\t<button type=\"button\" class=\"btn btn-\" ng-click=\"App.login(user)\">\n" +
    "\t\t\t<i class=\"icon-lock\"></i> Login\n" +
    "\t\t</button>\n" +
    "\t</div>\n" +
    "</div>"
  );

  $templateCache.put("/views/main.html",
    "<div class=\"hero-unit hidden-\">\n" +
    "\t<div class=\"row-fluid\">\n" +
    "\t\t<div class=\"span7 center\">\n" +
    "\t\t\t<h1>Welcome {{App.currentUser.get('username')}}!</h1>\n" +
    "\t\t\t<p>My-Board is your personal career, health and life dashboard.</p>\n" +
    "\t\t\t<a class=\"btn btn-large btn-primary\" data-toggle=\"modal\" href=\"#signupModal\" ng-hide=\"App.currentUser\"><i class=\"icon-star\"></i> Sign Up</a>\n" +
    "\t\t\t\n" +
    "\t\t\t<a class=\"btn btn-large btn-\" href=\"#/about\" ><i class=\"icon-info\"></i> More Info</a>\n" +
    "\t\t\t\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"span5 right\">\n" +
    "\t\t\t<img ng-src=\"{{cdn}}/img/logo-lg.png\" alt=\"My-Board Logo\" class=\"hidden-phone\"/>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\t\n" +
    "</div>\n" +
    "<div class=\"row main-features\">\n" +
    "\t<div class=\"span4\">\n" +
    "\t\t<div class=\"well\">\n" +
    "\t\t\t<h3>\n" +
    "\t\t\t\t<i class=\"icon-briefcase icon-1x\"></i>\n" +
    "\t\t\t\tYour Career</h3>\n" +
    "\t\t\t<p>\n" +
    "\t\t\t\tAre you working enough to support your habits? View your workload and\n" +
    "\t\t\t\tcash flow to help balance your life.\n" +
    "\t\t\t</p>\n" +
    "\t\t\t<a class=\"btn btn-inverse\" href=\"#/career\"><span class=\"btn-label\">View My Career</span></a>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\t<div class=\"span4\">\n" +
    "\t\t<div class=\"well\">\n" +
    "\t\t\t<h3>\n" +
    "\t\t\t\t<i class=\"icon-medkit icon-1x\"></i>\n" +
    "\t\t\t\tYour Health</h3>\n" +
    "\t\t\t<p>\n" +
    "\t\t\t\tAre you living a healthy life? Well find out exactly how active and healthy\n" +
    "\t\t\t\tyou are, it is your life.\n" +
    "\t\t\t</p>\n" +
    "\t\t\t<a class=\"btn btn-inverse\" href=\"#/health\"><span class=\"btn-label\">View My Health</span></a>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\t<div class=\"span4\">\n" +
    "\t\t<div class=\"well\">\n" +
    "\t\t\t<h3>\n" +
    "\t\t\t\t<i class=\"icon-sitemap icon-1x\"></i>\n" +
    "\t\t\t\tYour Network</h3>\n" +
    "\t\t\t<p>\n" +
    "\t\t\t\tView your social network stats to see how invovled you really are in your\n" +
    "\t\t\t\tsocial networking world.\n" +
    "\t\t\t</p>\n" +
    "\t\t\t<a class=\"btn btn-inverse\" href=\"#/network\"><span class=\"btn-label\">View My Network</span></a>\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "</div>\n" +
    "<!-- @TODO: [Login / Signup] -->\n" +
    "<div ng-include src=\"'views/login.html'\"></div>\n" +
    "<div ng-include src=\"'views/signup.html'\"></div>"
  );

  $templateCache.put("/views/network.html",
    "\n" +
    "\n" +
    "\n" +
    "  <ol class=\"breadcrumb\">\n" +
    "    <li>\n" +
    "      <a href=\"#\">Home</a>\n" +
    "      <span class=\"divider\">/</span> \n" +
    "    </li>\n" +
    "    <li class=\"active\">My Network</li>\n" +
    "  </ol>\n" +
    "  <div class=\"row-fluid main-features\">\n" +
    "    <div class=\"span2 hidden-phone\">\n" +
    "      <widget title=\"Networks\">\n" +
    "\t\t<ul class=\"nav nav-list\">\n" +
    "\t\t\t<li class=\"nav-header\">\n" +
    "\t\t\t\tConnected\n" +
    "\t\t\t</li>\n" +
    "\t        <li>\n" +
    "\t          <a href=\"#\"><i class=\"icon-twitter-sign\"></i> Twitter</a> \n" +
    "\t        </li>\n" +
    "\t        <li>\n" +
    "\t          <a href=\"#\"><i class=\"icon-instagram\"></i> Instagram</a> \n" +
    "\t        </li>\n" +
    "\t\t\t<li>\n" +
    "\t          <a href=\"#\"><i class=\"icon-facebook-sign\"></i> Facebook</a> \n" +
    "\t        </li>\n" +
    "\t\t\t<li class=\"nav-header\">\n" +
    "\t\t\t\tNot-Connected\n" +
    "\t\t\t</li>\n" +
    "\t        <li>\n" +
    "\t          <a href=\"#\"><i class=\"icon-foursquare\"></i> Foursquare</a> \n" +
    "\t        </li>\n" +
    "\t      </ul>\n" +
    "\t</widget>\n" +
    "    </div>\n" +
    "    <div class=\"span10\">\n" +
    "\t\t<widget title=\"Social Analysis\">\n" +
    "\t\t\t<chartjs id=\"activityChart\" data='{{activityChartData}}' ng-model=\"activityChartData\" type=\"bar\" width=\"750\" height=\"185\">My Activity</chartjs>\n" +
    "\t        <img src=\"http://placehold.it/750x185&amp;text=Line Chart\" class=\"hidden\">\n" +
    "\t\t</widget>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row-fluid sub-features\">\n" +
    "    <div class=\"span6\">\n" +
    "\t\t<widget title=\"Friends\">\n" +
    "\t\t\t<div class=\"center box\">\n" +
    "\t        <img src=\"http://placehold.it/200x200&amp;text=Doughnut Chart\" class=\"hidden\">\n" +
    "\t\t\t<chartjs id=\"friendsChart\" data='{{friendsChartData}}' ng-model=\"friendsChartData\" type=\"polar\" width=\"200\" height=\"200\">My Friends</chartjs>\n" +
    "\t\t\t<ul class=\"inline small hidden-\">\n" +
    "\t          <li ng-repeat=\"item in friendsChartData\">\n" +
    "\t          <i class=\"icon-{{item.label.toLowerCase()}}\"></i>\t{{item.label}}: <span class=\"label\" style=\"background-color: {{item.color}};\">{{item.value}}</span>\n" +
    "\t          </li>\n" +
    "\t        </ul>\n" +
    "\t      </div>\n" +
    "\t\t</widget>\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"span6\">\n" +
    "\t\t<widget title=\"Trends\">\n" +
    "\t\t\t\n" +
    "\t\t\t<div class=\"box center\">\n" +
    "\t        <img src=\"http://placehold.it/200x200&amp;text=Radar Chart\" class=\"hidden\">\n" +
    "\t\t\t<chartjs id=\"trendsChart\" data='{{trendsChartData}}' ng-model=\"trendsChartData\" type=\"line\" width=\"400\" height=\"200\">My Trends</chartjs>\n" +
    "\n" +
    "\t      </div>\n" +
    "\t      \n" +
    "\t\t</widget>\n" +
    "    </div>\n" +
    "  </div>\n"
  );

  $templateCache.put("/views/oauth.html",
    "<p>\n" +
    "\tThis is the oauth view.\n" +
    "</p>\n" +
    "<pre>{{params | json}}</pre>\n" +
    "<link href=\"//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css\" rel=\"stylesheet\">\n" +
    "<div class=\"container\">\n" +
    "\t<div class=\"row-fluid\">\n" +
    "\t\t<div class=\"span5\">\n" +
    "\t\t\t<div class=\"clearfix well well-small\">\n" +
    "\t\t\t\t<!--Sidebar content-->\n" +
    "\t\t\t\t<div class=\"pull-left\">\n" +
    "\t\t\t\t\t<img src=\"http://placehold.it/100x100\" class=\"img-polaroid\"/>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"user-meta\">\n" +
    "\t\t\t\t\t<h3>Jonnie Spratley</h3>\n" +
    "\t\t\t\t\t<div class=\"klout\">\n" +
    "\t\t\t\t\t\t<span class=\"score\">23</span>\n" +
    "\t\t\t\t\t</div>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"span7\">\n" +
    "\t\t\t<!--Body content-->\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "</div>"
  );

  $templateCache.put("/views/profile.html",
    "<widget title=\"Your Profile\">\n" +
    "\t<div id=\"profile-row\" class=\"row-fluid\">\n" +
    "\t\t<div class=\"span7\">\n" +
    "\t\t\t<form class=\"form-horizontal\" id=\"profile-form\" ng-submit=\"App.saveUser(user);\">\n" +
    "\t\t\t\t<formitem title=\"Username:\">\n" +
    "\t\t\t\t\t<input type=\"text\" class=\"input-block-level\" ng-model=\"user.username\"/>\n" +
    "\t\t\t\t</formitem>\n" +
    "\t\t\t\t<formitem title=\"Email:\">\n" +
    "\t\t\t\t\t<input type=\"email\" class=\"input-block-level\" ng-model=\"user.email\"/>\n" +
    "\t\t\t\t</formitem>\n" +
    "\t\t\t\t<formitem title=\"Name:\">\n" +
    "\t\t\t\t\t<input type=\"text\" class=\"input-block-level\" ng-model=\"user.name\"/>\n" +
    "\t\t\t\t</formitem>\n" +
    "\t\t\t\t<formitem title=\"Gender:\">\n" +
    "\t\t\t\t\t<input type=\"text\" class=\"input-block-level\" ng-model=\"user.gender\"/>\n" +
    "\t\t\t\t</formitem>\n" +
    "\t\t\t\t<formitem title=\"Height:\">\n" +
    "\t\t\t\t\t<input type=\"text\" class=\"input-block-level\" ng-model=\"user.height\"/>\n" +
    "\t\t\t\t</formitem>\n" +
    "\t\t\t\t<formitem title=\"Weight:\">\n" +
    "\t\t\t\t\t<input type=\"number\" class=\"input-block-level\" ng-model=\"user.weight\"/>\n" +
    "\t\t\t\t</formitem>\n" +
    "\t\t\t\t<formitem title=\"Weekly Activity Goal:\">\n" +
    "\t\t\t\t\t<select class=\"input-block-level\" ng-model=\"user.activity\">\n" +
    "\t\t\t\t\t\t<option value=\"30\">Less than 30 min./day of moderate activity</option>\n" +
    "\t\t\t\t\t\t<option value=\"45\">More than 30 min./day of moderate activity</option>\n" +
    "\t\t\t\t\t\t<option value=\"60\">Less than 60 min./day of moderate activity</option>\n" +
    "\t\t\t\t\t\t<option value=\"120\">More than 60 min./day of moderate activity</option>\n" +
    "\t\t\t\t\t</select>\n" +
    "\t\t\t\t</formitem>\n" +
    "\t\t\t\t<formitem title=\"Daily Calories Goal:\">\n" +
    "\t\t\t\t\t<input type=\"number\" class=\"input-block-level\" ng-model=\"user.calories\"/>\n" +
    "\t\t\t\t</formitem>\n" +
    "\t\t\t\t<div class=\"form-actions\">\n" +
    "\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\">\n" +
    "\t\t\t\t\t\tUpdate Profile\n" +
    "\t\t\t\t\t</button>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</form>\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"span5\">\n" +
    "\t\t\t<p class=\"center\">\n" +
    "\t\t\t\t<img src=\"http://placehold.it/250x250&text=Gravatar\" ng-src=\"{{user.avatar}}\" alt=\"Profile Image\" class=\"img-polaroid\"/>\n" +
    "\t\t\t</p>\n" +
    "\t\t\t<div class=\"alert alert-info\">\n" +
    "\t\t\t\tTo change goto <a href=\"http://gravatar.com\" target=\"_blank\">gravatar.com</a>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "</widget>"
  );

  $templateCache.put("/views/signup.html",
    "<div class=\"modal fade hide\" id=\"signupModal\">\n" +
    "  <div class=\"modal-header\">\n" +
    "    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n" +
    "    <h3>Sign Up</h3>\n" +
    "  </div>\n" +
    "  <div class=\"modal-body\">\n" +
    "    <form class=\"form-horizontal\">\n" +
    "\t\t<formitem title=\"Username:\">\n" +
    "\t\t\t<input type=\"text\" class=\"input-large\" ng-model=\"user.username\" required/>\n" +
    "\t\t</formitem>\n" +
    "\t\t<formitem title=\"Password:\">\n" +
    "\t\t\t<input type=\"password\" class=\"input-large\" ng-model=\"user.password\" required/>\n" +
    "\t\t</formitem>\n" +
    "\t\t<formitem title=\"Email:\">\n" +
    "\t\t\t<input type=\"email\" class=\"input-large\" ng-model=\"user.email\" required/>\n" +
    "\t\t</formitem>\n" +
    "\t</form>\n" +
    "  </div>\n" +
    "  <div class=\"modal-footer\">\n" +
    "    <a href=\"#\" class=\"btn\" data-dismiss=\"modal\">Close</a>\n" +
    "    <button ng-click=\"App.signup(user)\" class=\"btn btn-primary\">Sign Up</button>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n"
  );

}]);
