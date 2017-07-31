var app = angular.module('myApp',[]);
app.controller('myCtrl',function($scope){
							// sidenav function
	var count=0;
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
			//dropdown menu function
	$scope.showShoes = function(){
		$scope.showShoe = true;
		$scope.showClothing = false;
		$scope.showBrand = false;
		$scope.showSkating = false;
		$scope.showJournals = false;
	};
	$scope.showCloths = function(){
		$scope.showShoe = false;
		$scope.showClothing = true;
		$scope.showBrand = false;
		$scope.showSkating = false;
		$scope.showJournals = false;
	};
	$scope.showBrands = function(){
		$scope.showShoe = false;
		$scope.showClothing = false;
		$scope.showBrand = true;
		$scope.showSkating = false;
		$scope.showJournals = false;
	};
	$scope.showSkate = function(){
		$scope.showShoe = false;
		$scope.showClothing = false;
		$scope.showBrand = false;
		$scope.showSkating = true;
		$scope.showJournals = false;
	};
	$scope.showJournal = function(){
		$scope.showShoe = false;
		$scope.showClothing = false;
		$scope.showBrand = false;
		$scope.showSkating = false;
		$scope.showJournals = true;
	};
	$scope.showNone = function(){
		$scope.showShoe = false;
		$scope.showClothing = false;
		$scope.showBrand = false;
		$scope.showSkating = false;
		$scope.showJournals = false;
	};
			//accordion function
		$scope.showDescript = true;
		angular.element(document.querySelector("#descript")).removeClass("glyphicon-plus");
		angular.element(document.querySelector("#descript")).addClass("glyphicon-minus");
	$scope.showDescriptive = function(){
		if($scope.showDescript == false){
		$scope.showDescript = true;
		angular.element(document.querySelector("#descript")).removeClass("glyphicon-plus");
		angular.element(document.querySelector("#descript")).addClass("glyphicon-minus");
		}
		else{
		$scope.showDescript = false;
		angular.element(document.querySelector("#descript")).addClass("glyphicon-plus");
		angular.element(document.querySelector("#descript")).removeClass("glyphicon-minus");	
		}	
	};
		$scope.showDetails = false;
	$scope.showDetail = function(){
		if($scope.showDetails == false){
		$scope.showDetails = true;
		angular.element(document.querySelector("#detail")).removeClass("glyphicon-plus");
		angular.element(document.querySelector("#detail")).addClass("glyphicon-minus");
		}
		else{
		$scope.showDetails = false;
		angular.element(document.querySelector("#detail")).addClass("glyphicon-plus");
		angular.element(document.querySelector("#detail")).removeClass("glyphicon-minus");	
		}
	};
		$scope.showReturns = false;
	$scope.showShipping = function(){
		if($scope.showReturns == false){
		$scope.showReturns = true;
		angular.element(document.querySelector("#shipping")).removeClass("glyphicon-plus");
		angular.element(document.querySelector("#shipping")).addClass("glyphicon-minus");
		}
		else{
		$scope.showReturns = false;
		angular.element(document.querySelector("#shipping")).addClass("glyphicon-plus");
		angular.element(document.querySelector("#shipping")).removeClass("glyphicon-minus");	
		}
	};
			//slider image click function
	$scope.showCap1 = function(){
		angular.element(document.querySelectorAll(".item")).removeClass("active");
		angular.element(document.querySelector("#image1")).addClass("active");
		angular.element(document.querySelectorAll(".dot")).removeClass("active");
		angular.element(document.querySelector("#dot1")).addClass("active");
	};
	$scope.showCap2 = function(){
		angular.element(document.querySelectorAll(".item")).removeClass("active");
		angular.element(document.querySelector("#image2")).addClass("active");
		angular.element(document.querySelectorAll(".dot")).removeClass("active");
		angular.element(document.querySelector("#dot2")).addClass("active");
	};
	$scope.showCap3 = function(){
		angular.element(document.querySelectorAll(".item")).removeClass("active");
		angular.element(document.querySelector("#image3")).addClass("active");
		angular.element(document.querySelectorAll(".dot")).removeClass("active");
		angular.element(document.querySelector("#dot3")).addClass("active");
	};
	$scope.showCap4 = function(){
		angular.element(document.querySelectorAll(".item")).removeClass("active");
		angular.element(document.querySelector("#image4")).addClass("active");
		angular.element(document.querySelectorAll(".dot")).removeClass("active");
		angular.element(document.querySelector("#dot4")).addClass("active");
	}
});