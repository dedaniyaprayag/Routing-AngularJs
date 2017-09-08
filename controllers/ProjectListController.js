app.controller('ProjectListController',function(ProjectDataService){
    var self = this;
    self.showToastStatus = null;

    self.projectLists = ProjectDataService.projectLists;

    self.showToastStatus = ProjectDataService.showToastStatus;
    // -----------------------------------------------------------------------
    // Function: showToast
    //  Used to toast messages on browser.
    //
    // Parameters:
    //  None
    //  
    // Returns:
    //  None
    //
    // Exception:
    //  None.
    // -----------------------------------------------------------------------
    self.showToast = function() {
        if(!self.showToastStatus) return;
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 4000);
    };

    self.showToast();

    self.toastString = function() {
        if(!self.showToastStatus) return;
        else if(self.showToastStatus == 'Save') return ' Record Saved Successfully';
        else return ' Record Deleted Successfully';
           
    };

 	// -----------------------------------------------------------------------
    // Function: showToast
    //  Used to toast messages on browser.
    //
    // Parameters:
    //  None
    //  
    // Returns:
    //  None
    //
    // Exception:
    //  None.
    // -----------------------------------------------------------------------
    self.filterList = function() {
    	var serchText;
    	if(!self.serchText) {
    		self.projectLists = angular.copy(ProjectDataService.projectLists);
    	}
    	serchText = self.serchText.toString();
    	self.projectLists = self.projectLists.filter(function(user){
    		if(user.name.indexOf(serchText) > -1 ){
    			return true;
    		}
    		else {
    			return false;
    		}
    	});
    };
});