let app=angular.module("myApp",[]);
app.controller('myCtr',function($scope){
    console.log("hoiii");
    $scope.id=0;
    $scope.name="Rahul kumar"
    $scope.show=false;
    $scope.history=[];
    $scope.count=0;
    $scope.temp;
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
          likes:0,
          comments: []
        });
        // $scope.difference = moment($scope.yourDate).fromNow();
        $scope.story="";

       
    };
    //likes
    $scope.incrementLike = function(i){
      console.log('i: ', i);
      var indexx = $scope.history.indexOf(i);
      $scope.history[indexx].likes+=1;
      console.log($scope.history);
    };
    //dislike
    $scope.decrementLike = function(i){
      var indexx = $scope.history.indexOf(i);
      $scope.history[indexx].likes-=1;
      console.log($scope.history);
    };
    $scope.onShow = function () {
      $scope.show = true;
    };

  $scope.addComment = function (i) {
    $scope.showCommentInput = false;
    $scope.newComment = $scope.$$childTail.val;
    if ($scope.$$childTail.val !== '') {
      
      $scope.history[i].comments.push({
        content: $scope.$$childTail.val,
        editMode: false
      });// Add the new comment to the comments array
      $scope.$$childTail.val=''; 
      console.log("=-=-=-=-=-=",$scope.history);
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
  // $scope.saveComment = function (i,j) {
  //   console.log(' $scope.$$childTail.val: ',  $scope.$$childTail.$$childTail.editedComment);
  //   var indexx = $scope.history.indexOf(i);
  //   var index = $scope.history[i].comments.indexOf(j);
  //   $scope.history[indexx].comments[index].content = $scope.$$childTail.$$childTail.editedComment;
  //   console.log('-=-=-=------------: ', $scope.history);
  //   $scope.history[indexx].comments[index].editMode = false;
  //   console.log('$scope.history::::::::: ', $scope.history);
  // };
  $scope.EditComment = function (i,j) {
    console.log('$scope.history::::::::: ', $scope.history);
   
    var indexx = $scope.history.indexOf(i);
    var index = $scope.history[indexx].comments.indexOf(j);
    if ($scope.history[indexx].comments[index].editMode){
      console.log("==",$scope);
      if($scope.$$childTail.$$childTail.editedComment!==undefined){
          $scope.history[indexx].comments[index].content = $scope.$$childTail.$$childTail.editedComment;
          console.log('_+_+}}_+_+ ', $scope.$$childTail.$$childTail.editedComment);
          $scope.history[indexx].comments[index].editMode = false;
      }
      else{
        $scope.history[indexx].comments[index].content=j.content;
        $scope.history[indexx].comments[index].editMode = true;

      }
    }
    else{
      $scope.history[indexx].comments[index].content=j.content;
      $scope.history[indexx].comments[index].editMode = false;
    }
    // // $scope.history[indexx].comments[index].content = j.content;
    // $scope.history[indexx].comments[index].editMode = true;
    // if ($scope.history[indexx].comments[index].editMode) {
    //   $scope.history[indexx].comments[index].content = $scope.$$childTail.$$childTail.editedComment;
    //   console.log('$scope.$$childTail.$$childTail.editedComment: ', $scope.$$childTail.$$childTail.editedComment);
    //   $scope.history[indexx].comments[index].editMode = false;
    //   console.log('$scope.history::::::::: ', $scope.history);
    // } else {
    //   $scope.history[indexx].comments[index].content = $scope.history[indexx].comments[index].content;
    // }
  };
  $scope.deleteComment = function(i,j) {
    var index = $scope.history[i].comments.indexOf(j);
    if (index > -1) {
      $scope.history[i].comments.splice(index, 1); // Remove the comment from the comments array
    }
  };

})

