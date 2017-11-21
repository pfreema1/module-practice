var statsModule = (function() {
    var $statsModule = $("#statsModule");
    var $statsCountEl = $statsModule.find(".counter");


    var statsCount = 0;

    // function increaseStatsCount() {
    //     statsCount++;
    //     render();
    // }

    // function decreaseStatsCount() {
    //     statsCount--;
    //     render();
    // }

    function peopleChanged(people) {
        statsCount = people.length;
        render();
    }

    //render
    function render() {
        $statsCountEl.text(statsCount);
    }

    return {
        peopleChangedMethod: peopleChanged
    };


})();