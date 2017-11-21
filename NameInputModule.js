var nameInputModule = (function () {
    var people = [];

    var $inputModule = $("#inputModule");
    var $inputField = $inputModule.find("input");
    var $button = $inputModule.find("button");
    var $namesList = $inputModule.find("ul");

    //handle button press
    $button.on("click", addName);
    //handle user clicking on name (delete)
    $namesList.on("click", deleteName);


    function addName(value) {
        //first if statement is there so we can use the module in console
        if (typeof value == "string") {
            people.push(value);
        } else {
            people.push($inputField.val());
            $inputField.val("");
        }

        render();
    }

    function deleteName(e) {
        var indexOfPerson;
        if (typeof e == "string") {
            indexOfPerson = people.indexOf(e);
            if(indexOfPerson != -1) {
                people.splice(indexOfPerson, 1);
            } else {
                console.log("error:  Person does not exist!");
            }
        } else {
            //need to remove that person from the list!
            //get text from dom
            var name = $(e.target).text();
            // console.log("name:  " + name);
            //remove name from person array
            indexOfPerson = people.indexOf(name);
            // console.log("indexofperson:  " + indexOfPerson);
            people.splice(indexOfPerson, 1);
            
        }

        render();
    }

    function render() {

        statsModule.peopleChangedMethod(people);

        //clear out list and re render
        $namesList.html("");

        for (var i = 0; i < people.length; i++) {
            $namesList.append("<li>" + people[i] + "</li>");
        }
    }



    //controls what is exposed!
    return {
        addPerson: addName,
        deletePerson: deleteName
    };



})();









/********BASIC MODULE STYLE */

// var nameInputModule = {

//     init: function() {
//         this.cacheDOM();
//         this.bindEvents();

//     },
//     cacheDOM: function() {
//         this.$inputModule = $("#inputModule");
//         this.$button = this.$inputModule.find("button");
//         this.$inputField = this.$inputModule.find("input");
//         this.$ul = this.$inputModule.find("ul");
//     },
//     bindEvents: function() {
//         // console.log("this from bindEvents");
//         // console.table(this);
//         this.$button.on("click", this.addPerson.bind(this));
//         this.$ul.on("click", this.deletePerson.bind(this));
//     },
//     renderText: function($el) {
//         this.$ul.append($el);
//         this.$inputField.val("");
//     },
//     addPerson: function() {
//         //create element
//         console.log("this from addPerson");
//         console.table(this);

//         var $el = $("<li>" + this.$inputField.val() + "</li>");
//         this.renderText($el);
//     },
//     deletePerson: function(e) {
//         $(e.target).remove();
//     }


// };

// nameInputModule.init();


/****************OLD STYLE */

// //cache dom elements
// var $inputModule = $("#inputModule");
// var $button = $inputModule.find("button");
// var $inputField = $inputModule.find("input");
// var $ul = $inputModule.find("ul");

// //insert text
// $button.on("click", function() {
//     console.log("input field value:  " + $inputField.val());

//     $ul.append("<li>" + $inputField.val() + "</li>");

//     //clear inputfield
//     $inputField.val("");
// });


// //delete name
// $ul.on("click", function(e) {
//     $(e.target).remove();
// });


