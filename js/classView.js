let classView = {
    currentGroup: 0,

    init: function() {
        document.addEventListener("DOMContentLoaded", function() {
            classView.studentView();
        });
    },

    newGroup: function() {
        var obj = {};
        obj.id = group.length;
        var d = new Date();
        d.setHours(0, 0, 0, 0);
        obj.date = d;
        obj.list = [];
        group.push(obj);
        this.currentGroup = obj.id;
    },

    studentView: function() {
        document.querySelector("#students").innerHTML = "";
        var cls = group.data.filter(g => g.id == this.currentGroup);
        if (cls.length > 0) {
            cls[0].list.forEach(s => {
                var student = skiers.filter(skier => skier.id == s)[0];
                document.querySelector("#students").appendChild(this.studentRow(student));
            });
        }
    },

    studentRow: function(obj) {
        var div = document.createElement("div");
        div.classList.add("row");
        div.classList.add("student");
        div.id = obj.id;

        var divIcon = document.createElement("div");
        divIcon.classList.add("col-2");
        divIcon.classList.add("gender");
        var svg = icon.insert("skier");
        if (obj.gender == 'm') {
            svg.classList.add("male");
        } else if (obj.gender == 'f') {
            svg.classList.add("female");
        }
        divIcon.appendChild(svg);

        var divName = document.createElement("div");
        divName.classList.add("col-6");
        divName.classList.add("name");
        divName.innerHTML = obj.firstName + ' ' + obj.lastName;

        var divEdit = document.createElement("div");
        divEdit.classList.add("col-4");
        divEdit.classList.add("buttons");

        var MABtn = document.createElement("button");
        MABtn.type = "button";
        MABtn.name = "studentMA";
        MABtn.classList.add("btn");
        MABtn.innerHTML = "MA";
        divEdit.appendChild(MABtn);

        var EdBtn = document.createElement("button");
        EdBtn.type = "button";
        EdBtn.name = "studentDetails";
        EdBtn.classList.add("btn");
        EdBtn.appendChild(icon.insert("gear"));
        /* divEdit.appendChild(EdBtn); */

        var aEdit = document.createElement("a");
        aEdit.href = "#edit";
        aEdit.classList.add("gear");
        aEdit.appendChild(icon.insert("gear"));
        divEdit.appendChild(aEdit);

        div.appendChild(divIcon);
        div.appendChild(divName);
        div.appendChild(divEdit);

        return div;
    }
}

classView.init();