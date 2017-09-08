app.controller('EditListController',function($routeParams,ProjectDataService,$location){
	var self = this;
	self._id = $routeParams.projectId;
	self.projectLists = ProjectDataService.projectLists;
	self.project = self.projectLists[self._id];

	self.projectName = self.project.name;
	self.projectWebsite = self.project.site;
	self.projectDesc = self.project.description;

	self.saveList = function(){
		ProjectDataService.projectLists[self._id].name = self.projectName;
		ProjectDataService.projectLists[self._id].site = self.projectWebsite;
		ProjectDataService.projectLists[self._id].description = self.projectDesc;
		ProjectDataService.showToastStatus = "Save";
		$location.path("/");
	};

	self.deleteList = function(){
		self.projectLists.splice(self._id,1);
		ProjectDataService.showToastStatus = "Delete";
		$location.path("/");
	};

	self.goBack = function(){
		$location.path("/");
	};
});