/**
 * 
 */

function addEvent(title, startDate, endDate, startTime, endTime){
				console.log("title: " + title.value);
				console.log("start date: " + startDate.value);
				console.log("end date: " + endDate.value);
				console.log("start time: " + startTime.value); //01:23
				console.log("end time: " + endTime.value);
				
				var error = false;
				/* if (startTime < endTime){
					document.getElementById("error").innerHTML += "error message";
					error = true;
				} */
				if (title.value == null || title.value == "" || title.value == "Event Title" ){
					document.getElementById("error").innerHTML = "Please enter an Event Title. ";
					error = true;
				}
				if (startDate.value == null || startDate.value == "" || endDate.value == null || endDate.value == ""){
					document.getElementById("error").innerHTML = "Start Date or End Date cannot be empty. ";
					error = true;
				}
				else if (startDate.value > endDate.value){
					document.getElementById("error").innerHTML = "Start Date cannot be later than End Date. ";
					error = true;
				}
				else if (startDate.value == endDate.value){
					if (startTime.value == null || startTime.value == "" || endDate.value == null || endDate.value == ""){
						document.getElementById("error").innerHTML = "Start Time or End Time cannot be empty. ";
						error = true;
					}
					else if (startTime.value > endTime.value){
						document.getElementById("error").innerHTML = "Start Time cannot be later than End Time. ";
						error = true;
					}
				}
				else {
					if (startTime.value == null || startTime.value == "" || endDate.value == null || endDate.value == ""){
						document.getElementById("error").innerHTML = "Start Time or End Time cannot be empty. ";
						error = true;
					}		
				}
				/* else if (startTime.value > endTime.value){
					document.getElementById("error").innerHTML += "Start Time cannot be later than End Time. ";
					error = true;
				} */
				
				
				
				if (error == true){
					console.log("error found");
					//window.location.href = "profile.html";
					return false;
					
				}
				else{
					console.log("no errors");
					startTime = startDate.value + "T" +startTime.value + ":00-07:00";
					endTime = endDate.value + "T" + endTime.value +":00-07:00";
					console.log(startTime);
					var event = {
				    		  'summary': document.eventForm.title.value,
				    		  'start': {
				    		    //'dateTime': '2018-09-24T09:00:00-07:00',
				    		    'dateTime': startTime,
				    		    'timeZone': 'America/Los_Angeles'
				    		  },
				    		  'end': {
				    		    //'dateTime': '2018-09-24T17:00:00-07:00',
				    		    'dateTime': endTime,
				    		    'timeZone': 'America/Los_Angeles'
				    		  },
				      };
				      
				     var request = gapi.client.calendar.events.insert({
				    	  'calendarId': 'primary',
				    	  'resource': event
				    	});
				      

				      
				      request.execute(function(event) {
				    	  console.log("created");
				    	  console.table(event);
				    	  appendPre('Event created: ' + event.htmlLink);
				    	  //callback(true)
				    	});
				      
				      /* console.log(window.location);
				      window.location.href = "http://localhost:8080/xubozhu_CSCI201L_Assignment2/profile.html";
					  console.log(window.location); */
				      
					return true;

					  		
					  
				}
			}