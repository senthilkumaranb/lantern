// The Api module is designed to handle all interactions with sendgrid

var PolicyApi = (function() {
    var requestPayload;
    var responsePayload;
    var messageEndpoint = '/api/getPolicy';
  
    // Publicly accessible methods defined
    return {
      readPolicy: readPolicy,
  
      // The request/response getters/setters are defined here to prevent internal methods
      // from calling the methods without any of the callbacks that are added elsewhere.
      getRequestPayload: function() {
        return requestPayload;
      },
      setRequestPayload: function(newPayloadStr) {
        requestPayload = JSON.parse(newPayloadStr);
      },
      getResponsePayload: function() {
        return responsePayload;
      },
      setResponsePayload: function(newPayloadStr) {
        responsePayload = JSON.parse(newPayloadStr);
      }
    };
  
    // Send a message request to the server
    function readPolicy() {
    
      // Built http request
      var http = new XMLHttpRequest();
      http.open('POST', messageEndpoint, true);
      //http.setRequestHeader('Content-type', 'application/json');
      http.onreadystatechange = function() {
        if (http.readyState === 4 && http.status === 200 && http.responseText) {
          PolicyApi.setResponsePayload(http.responseText);
          var resvalue = JSON.parse(http.responseText);
          console.log(resvalue.tres);
          $('#tresstate').val(resvalue.tres);
          console.log($('#tresstate').val());
        }
      };

      // Send request
      http.send();

    }
  }());
  