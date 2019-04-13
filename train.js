  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDbGNObcR2yQupwE7TQhCbH2IXOdKT_cdE",
    authDomain: "train-schedule-952a5.firebaseapp.com",
    databaseURL: "https://train-schedule-952a5.firebaseio.com",
    projectId: "train-schedule-952a5",
    storageBucket: "train-schedule-952a5.appspot.com",
    messagingSenderId: "817526577715"
  };
  firebase.initializeApp(config);


  var trainRecordData = firebase.database();

  $("#submitRecord").on("click",function(event){
    event.preventDefault("");
    var nameOfTrain= $("#nameOfTrain").val().trim();
    var destinationOfTrain= $("#destinationOfTrain").val().trim();
    var firstTrainTime=$("#firstTrainTime").val().trim();
    var frequency =$("#frequency").val().trim();
    
    
    var trainSchedule = {
      trainName : nameOfTrain,
      destination:destinationOfTrain,
      firstTrainTime:firstTrainTime,
      frequency:frequency,
      
    }

    trainRecordData.ref().push(trainSchedule);

    $("#trainNameDisplay").html(record.val().trainName)
    $("#destinationDisplay").html(record.val().destination)
    $("#firstTrainTimeDisplay").html(record.val().firstTrainTime)
    $("#frequenctyDisplay").html(record.val().frequency)

  }) 

  firebase.database().ref().on("value",function(record){
    
  })


    
      
    
      
      
