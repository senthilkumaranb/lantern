// The Api module is designed to handle all interactions with sendgrid

var EmailApi = (function() {
    var requestPayload;
    var responsePayload;
    var messageEndpoint = '/api/send';
  
    // Publicly accessible methods defined
    return {
      sendMail: sendMail,
  
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
    function sendMail() {
    
      // Built http request
      var http = new XMLHttpRequest();
      http.open('POST', messageEndpoint, true);
      //http.setRequestHeader('Content-type', 'application/json');
      http.onreadystatechange = function() {
        if (http.readyState === 4 && http.status === 200 && http.responseText) {
          EmailApi.setResponsePayload(http.responseText);
        }
      };
  
      // Send request
      http.send();
    }
  }());
  