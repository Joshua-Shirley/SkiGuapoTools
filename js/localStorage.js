let local = {
    save: function() {
        localStorage.setItem("skier", JSON.stringify(skiers));
        localStorage.setItem("group", JSON.stringify(group));
    },
    load: function() {
        var obj = JSON.parse(localStorage["skiers"]);
        skiers = [];
    }
}