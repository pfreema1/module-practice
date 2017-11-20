

var nameInputModule = {

    init: function() {
        this.cacheDOM();
        this.bindEvents();
        
    },
    cacheDOM: function() {
        this.$inputModule = $("#inputModule");
        this.$button = this.$inputModule.find("button");
        this.$inputField = this.$inputModule.find("input");
        this.$ul = this.$inputModule.find("ul");
    },
    bindEvents: function() {
        // console.log("this from bindEvents");
        // console.table(this);
        this.$button.on("click", this.addPerson.bind(this));
        this.$ul.on("click", this.deletePerson.bind(this));
    },
    renderText: function($el) {
        this.$ul.append($el);
        this.$inputField.val("");
    },
    addPerson: function() {
        //create element
        console.log("this from addPerson");
        console.table(this);

        var $el = $("<li>" + this.$inputField.val() + "</li>");
        this.renderText($el);
    },
    deletePerson: function(e) {
        $(e.target).remove();
    }


};

nameInputModule.init();




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


