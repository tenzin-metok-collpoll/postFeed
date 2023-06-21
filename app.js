let app=angular.module("myApp",[]);
app.controller('myCtr',function($scope){
    $scope.id=0;
    $scope.name=["Rahul kumar","ajay devgan","deepika padukone","akshay kumar"]
    $scope.show=false;
    $scope.history=[{
      messg:"PM Modi meets Elon Musk, discuss Tesla, Starlink India plans: All you need to know",
      likes:56,
      comments: [{
        content: "30-minute intervals",
        editMode:false},
        {
        content: "disappeared on Sunday",
        editMode: false }]
    },
  {
    messg:"India slams China for blocking proposal to designate 26/11 planner",
    likes:3,
    comments: [{
      content:"Internal US Department",
      editmode:false
      },{
        content:"🔥🔥🔥🔥🔥🔥",
        editmode:false
      },{
        content:"🤣🤣🤣🤣",
        editmode:false
      }
      
      ]
  },
{
  messg: "submarine carrying five crew members disappeared on Sunday, American media is reporting. Internal US Department of Homeland Security memos say the banging sounds could be heard for hours at 30-minute intervals.",
  likes: 10000,
  comments: [{
    content: "🥳🥳🥳🥳🥳🥳🥳🥳",
    editmode:false
  }]
}];
    $scope.count=0;
    $scope.temp;
    $scope.editMode = false;
    $scope.editModes = false;
    $scope.newComment = ''; // Initialize the new comment input
    $scope.showCommentInput = false; // Set initial state to show the comment input field
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
//add comments
  $scope.addComment = function (i) {
    console.log('i: ', i);
    $scope.showCommentInput = false;
    if (i.val !== '') {
      i.comments.push({
        content: i.val,
        editMode: false
      })
      i.val=''; 
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
  //edit comments
  $scope.EditComment = function (i,j) {
  j.editMode=true;
  j.editedComment=j.content;
  };
  //save comments
  $scope.saveComment= function(i,j){
    j.editMode=false;
    j.content = j.editedComment;
  }
  //cancel comments
  $scope.cancelComment = function (){
    j.editMode=false;
  }
  //delete comment
   $scope.deleteComment = function(i,j) {
    var index = $scope.history[i].comments.indexOf(j);
    if (index > -1) {
      $scope.history[i].comments.splice(index, 1); // Remove the comment from the comments array
    }
  };

})

