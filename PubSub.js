
/*
Notes:

pubsub.subscribe  = events.on('peopleChanged', someHandler) or events.emit(.....)
pubsub.unsubscribe  = events.off
pubsub.publish  = events.emit

on / subscribe:  events.on('peopleChanged', someHandler)
 -takes eventName
 -if it doesnt exist lets create that array
    
    events: {
        peopleChanged: [someHandler]  
    }


in another module:  events.on('peopleChanged', someOtherHandler);

    events: {
        peopleChanged: [someHandler, someOtherHandler]
    }


events.emit('peopleChanged', 3);

    if the event (peopleChanged) exists
        for each item in the events peopleChanged array
            call that function with the data that was given



*/


var events = {
    events: {},
    on: function(eventName, fn) {
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push(fn);  
    },
    off: function(eventName, fn) {
        if(this.events[eventName]) {
            for(var i = 0; i < this.events[eventName].length; i++) {
                if(this.events[eventName][i] === fn) {
                    this.events[eventName].splice(i, 1);
                    break;
                }
            }
        }
    },
    emit: function(eventName, data) {
        if(this.events[eventName]) {
            this.events[eventName].forEach(function(fn) {
                // console.log("hello from emit");
                // console.log(events);
                fn(data);
            });
        }
    }
};


// events.on("meowMix", function(numCats) {
//     console.log("numCats:  " + numCats);
// });

// events.emit("meowMix", 14);

//my question:  how does the emit property know which function to call?  
//A:  it is saved (the WHOLE function) in the events object (within events) along with the event name
