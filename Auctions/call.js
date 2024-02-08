function updateAuctionDetails() {
      var timeElement = document.getElementById("time");
      var lastCallElement = document.getElementById("lastCall");
      var timeAndLastCallText = timeElement.innerText;

      var parts = timeAndLastCallText.split('\n');
      var timeText = parts[0];
      var lastCallText = parts[1];

      var numbers = timeText.match(/\d+/g);
      var days = parseInt(numbers[0]);
      var hours = parseInt(numbers[1]);
      var minutes = parseInt(numbers[2]);
      var seconds = parseInt(numbers[3]);

      var totalSecondsLeft = days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds;

      if (totalSecondsLeft <= 0) {
        clearInterval(intervalID);
        timeElement.innerText = "Bidding has ended.\n" + lastCallText;
      } else {
        totalSecondsLeft--;

        var updatedDays = Math.floor(totalSecondsLeft / (24 * 60 * 60));
        var updatedHours = Math.floor((totalSecondsLeft % (24 * 60 * 60)) / (60 * 60));
        var updatedMinutes = Math.floor((totalSecondsLeft % (60 * 60)) / 60);
        var updatedSeconds = totalSecondsLeft % 60;

        var updatedTimeText = "Time remaining: " + updatedDays + ":" + padZeroes(updatedHours) + ":" + padZeroes(updatedMinutes) + ":" + padZeroes(updatedSeconds);
        timeElement.innerText = updatedTimeText + "\n" + lastCallText;

        var lastCallValue = parseFloat(lastCallText.match(/\d+/)[0]);
        var autoFilledValue = lastCallValue * 1.2;
        document.getElementById("makeCallInput").value = autoFilledValue.toFixed(2);
      }
    }

    function padZeroes(number) {
      return (number < 10 ? '0' : '') + number;
    }

    var intervalID = setInterval(updateAuctionDetails, 1000);

    function confirmBid() {
      var inputValue = parseFloat(document.getElementById("makeCallInput").value);
      var lastCallValue = parseFloat(document.getElementById("lastCall").innerText.match(/\d+/)[0]);
      
      if (isNaN(inputValue) || inputValue < lastCallValue * 1.2) {
        alert("The bid is not confirmed. Please enter a valid numeric value that is 1.2 times or greater than LAST CALL.");
        return;
      }

      var confirmation = confirm("Do you want to confirm the bid?");
      
      if (confirmation) {
        lastCallValue = inputValue.toFixed(0);
        document.getElementById("lastCall").innerText = lastCallValue + " $";
        alert("Bid confirmed! LAST CALL updated to " + lastCallValue);
      } else {
        alert("Bid not confirmed.");
      }
    }

    window.onload = function() {
      var lastCallValue = parseFloat(document.getElementById("lastCall").innerText.match(/\d+/)[0]);
      var autoFilledValue = lastCallValue * 1.2;
      document.getElementById("makeCallInput").value = autoFilledValue.toFixed(2);
    };