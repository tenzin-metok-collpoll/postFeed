let app=angular.module("myApp",[]);
app.controller('myCtr',function($scope){
    console.log("hoiii");
    $scope.id=0;
    $scope.name="Rahul kumar"
    $scope.show=false;
    $scope.history=[];
    $scope.count=0;
    $scope.editMode = false;
    $scope.editModes = false;
    // $scope.comments = []; // Initialize an empty array to store comments
    $scope.newComment = ''; // Initialize the new comment input
    $scope.showCommentInput = false; // Set initial state to show the comment input field
    
    $scope.content = "With supporting text below as a natural lead-in to additional content.";
    $scope.Edit = function() {
      if ($scope.editMode) {
        // Save changes
        $scope.editMode = false;
      } else {
        // Enter edit mode
        $scope.editMode = true;
      }
    };
    $scope.setId = function (i){
      $scope.id=i;
    }
    // adding a new content in feed
    $scope.addToFeed = function() {
        $scope.show=false;
        $scope.history.push({
          messg:$scope.story,
          comments: []
        });
        // $scope.difference = moment($scope.yourDate).fromNow();
        $scope.story="";

       
    };
    //likes
    $scope.incrementLike = function(){
      $scope.count+=1;
    };
    //dislike
    $scope.decrementLike = function(){
      $scope.count-=1;
    };
    $scope.onShow = function () {
      $scope.show = true;
    };

  $scope.addComment = function (i) {
    $scope.newComment = $scope.$$childTail.val;
    console.log('$scope.$$childTail.val;: ', $scope.$$childTail.val);

    if ($scope.$$childTail.val !== '') {
      $scope.history[i].comments.push($scope.$$childTail.val);// Add the new comment to the comments array
      console.log("&^&^&^&^&^",$scope.history);     
      $scope.newComment = ''; // Clear the new comment input
      $scope.showCommentInput = false; // Hide the comment input field
    }
  };
  //save changes to edit content feed
  $scope.saveChanges = function () {
    console.log("+++=",$scope.editedContent);
    $scope.history[$scope.id].messg = $scope.editedContent;
    $scope.editMode = false;
  };
  //delete a feed
  $scope.deleteFeed = function(i){
    $scope.history.splice(i, 1);
  }
  $scope.saveComment = function (i,j) {
    console.log('editedComment: ', $scope);
    var index = $scope.history[i].comments.indexOf(j);
    $scope.history[i].comments[index] = $scope.$$childTail.val;

    $scope.editModes = false;
  };
  $scope.EditComment = function (i,j) {
    console.log("///////comment",i,j);
    if ($scope.editModes) {
      console.log("%%%%%%%%%%");
      // Save changes
      $scope.saveComment(i,j);
    } else {
      console.log(")))))))))");
      // Enter edit mode
      $scope.editModes = true;
      $scope.history[i].comments[index] = $scope.history[i].comments[index];

    }
  };
  $scope.deleteComment = function(i,j) {
    console.log('i,j: ', i,j);

    var index = $scope.history[i].comments.indexOf(j);
    if (index > -1) {
      $scope.history[i].comments.splice(index, 1); // Remove the comment from the comments array
    }
  };

})

