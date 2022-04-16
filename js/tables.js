let ObjectToTable = {

    inputObjectArray: [],
    outPutObjectArray: [],
    columnsHead: [],

    init: function(obj) {
        this.inputObjectArray = obj;

        toTable.id = "test";
        toTable.addClass("table");

        var headCells = this.getColumns();
        toTable.head = headCells;
        toTable.columns = headCells.length;



        toTable.create();

        return toTable.code;
    },

    getColumns: function() {
        var cols = new Set();
        this.inputObjectArray.forEach(obj => {
            Object.keys(obj).forEach(name => {
                cols.add(this.toProperCase(name));
            });
        });
        this.columnsHead = Array.from(cols);
        return Array.from(cols);
    },

    toProperCase: function(word) {
        var str = word[0].toUpperCase();
        for (l = 1; l < word.length; l++) {
            str += word[l].toLowerCase();
        }
        return str;
    },

    fillRowData: function() {

        // use the object keys to build the array
        // loop through the inputObjectArray
        this.inputObjectArray.forEach(arr => {
            var n = [];
            // get the object keys
            for (i = 0; i < this.headCells.length; i++) {
                n[i] = this.headCells[i]
            };
        });
        var arr = [];
        this.inputObjectArray.forEach(obj => {
            var n = [];
            for (i = 0; i < this.columnsHead.length; i++) {
                n[i] = obj[this.columnsHead[i].toLowerCase()];
            }
            console.log(n);
        });

    }

}

let toTable = {
    id: "",
    class: [],
    columns: 0,
    rows: 0,
    headArray: [],
    footerArray: [],
    code: "",

    addClass: function(name) {
        if (this.class.indexOf(name) === -1) {
            this.class.push(name);
        }
    },

    create: function() {
        var t = document.createElement("table");
        if (this.id != "") {
            t.id = this.id;
        }
        this.class.forEach(cls => {
            t.classList.add(cls)
        });
        // Add the Header
        t.appendChild(this.header());
        // Add the Body
        t.appendChild(this.body());
        // Add the Footer

        this.code = t;
    },

    header: function() {
        var h = document.createElement("thead");
        if (this.head.length > 0) {
            var tr = this.row();
            h.appendChild(tr);
            for (c = 0; c < this.columns; c++) {
                if (this.headArray[c] != undefined) {
                    var str = this.headArray[c];
                } else {
                    var str = "";
                }
                tr.appendChild(this.headCell(str));
            }
        }
        return h;
    },

    body: function() {
        var b = document.createElement("tbody");
        for (r = 0; r < this.rows; r++) {
            var tr = this.row();
            b.appendChild(tr);
            for (c = 0; c < this.columns; c++) {
                tr.appendChild(this.cell("cell"));
            }
        }
        return b;
    },

    footer: function() {
        var f = document.createElement("tfoot");
        return f;
    },

    row: function() {
        var tr = document.createElement("tr");
        return tr;
    },

    cell: function(ele) {
        var td = document.createElement("td");
        td.append(ele);
        return td;
    },

    headCell: function(ele) {
        var th = document.createElement("th");
        th.appendChild(this.appendType(ele));
        return th;
    },

    appendType: function(element) {
        var t = typeof(element);
        var node = "";
        switch (t) {
            case "object":
                node = element;
                break;
            case "string":
                node = document.createTextNode(element);
                break;
            case "number":
            case "bigint":
            case "boolean":
                node = document.createTextNode(element.toString());
                break;
            case "":
            case "undefined":
                node = document.createTextNode("");
                break;
        }
        return node;
    }


}