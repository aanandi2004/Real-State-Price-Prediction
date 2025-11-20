function getBathValue() {
  var uiBathrooms = document.getElementsByName("uiBathrooms");
  for (var i = 0; i < uiBathrooms.length; i++) {
    if (uiBathrooms[i].checked) return parseInt(uiBathrooms[i].value);
  }
  return -1;
}

function getBHKValue() {
  var uiBHK = document.getElementsByName("uiBHK");
  for (var i = 0; i < uiBHK.length; i++) {
    if (uiBHK[i].checked) return parseInt(uiBHK[i].value);
  }
  return -1;
}

/* ✅ CORRECT API FOR PREDICTION */
function onClickedEstimatePrice() {
  console.log("Estimate price button clicked");
  var sqft = document.getElementById("uiSqft").value;
  var bhk = getBHKValue();
  var bathrooms = getBathValue();
  var location = document.getElementById("uiLocations").value;
  var estPrice = document.getElementById("uiEstimatedPrice");

  var url = "https://real-state-price-prediction-4.onrender.com/predict_home_price";

  $.post(url, {
    total_sqft: parseFloat(sqft),
    bhk: bhk,
    bath: bathrooms,
    location: location
  }, function(data, status) {
    estPrice.innerHTML = "<h2>" + data.estimated_price.toFixed(2) + " Lakh</h2>";
    console.log("Status: ", status);
  });
}

/* ✅ CORRECT API FOR LOCATIONS */
function onPageLoad() {
  console.log("Document loaded");
  var url = "https://real-state-price-prediction-4.onrender.com/get_location_names";

  $.get(url, function(data, status) {
    console.log("Got location names response");
    if (data) {
      var locations = data.locations;
      var uiLocations = document.getElementById("uiLocations");
      $('#uiLocations').empty();
      for (var i in locations) {
        var opt = new Option(locations[i]);
        $('#uiLocations').append(opt);
      }
    }
  });
}

window.onload = onPageLoad;
