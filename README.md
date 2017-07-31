# AngularJs Tabs and Sub-tabs 

Created Tabs and Sub tabs using Angular JS using

* ng-mouseover
* ng-mouseleave
* ng-show
* ng-hide directories
# Functionality

ng-mouseleave="showShoe=false"

This function is used for sidenav

$scope.openNav = function(){
		count+=1;
		if(count == 1){
		angular.element(document.querySelector("#mySidenav")).addClass("width");
		angular.element(document.querySelector("#main")).addClass("margin");
		}
		if(count > 1){
		angular.element(document.querySelector("#mySidenav")).removeClass("width");
		angular.element(document.querySelector("#main")).removeClass("margin");
		count=0;	
		}
	};
# Version

Angular 1.x

# License

This app is developed under MIT license







