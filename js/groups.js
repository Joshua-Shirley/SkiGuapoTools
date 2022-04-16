const group = {

    current: 0,
    nextId: 0,

    data: [],

    groupTypes: [
        { id: 'p', type: "Private" },
        { id: 'g', type: "Group" },
        { id: 't', type: "Team" },
        { id: 'l', type: "Locals Program" }
    ],

    duration: [
        { id: 1, type: "Full Day" },
        { id: 2, type: "Half Day AM" },
        { id: 3, type: "Half Day PM" }
    ],

    index: function(key, value) {
        return this.data.findIndex(arr => arr[key] === value);
    },

    newClass: function() {
        var obj = {};
        obj.id = this.nextId + 1;
        var d = new Date();
        d.setHours(0, 0, 0, 0);
        obj.date = d.toISOString();
        obj.list = [];
        obj.type = 'g';
        this.data.push(obj);
        this.current = obj.id;
        this.setNextId(obj.id);
        return obj.id;
    },

    remove: function(index) {
        this.data = this.data.filter(arr => arr.id != index);
    },

    addClass: function(groupName, groupType, duration) {
        var id = this.newClass();
        var index = this.index("id", id);
        if (typeof groupName !== 'undefined') {
            this.data[index].name = groupName;
        }
        if (typeof groupType !== 'undefined') {
            if (this.groupTypeId(groupType) != false) {
                this.data[index].groupType = this.groupTypeId(groupType);
            }
        }
        if (typeof duration !== 'undefined') {
            console.log(duration);
        }
    },

    groupTypeId: function(value) {
        var index = this.groupTypes.findIndex(arr => arr.type.toLowerCase() == value.toLowerCase());
        if (index != -1) {
            return this.groupTypes[index].id;
        } else {
            return false;
        }
    },

    setDuration: function(duration) {
        var index = this.duration.findIndex(arr => arr.type == duration);
        return index > -1 ? index : false;
    },

    setNextId: function(id) {
        this.nextId = id;
    },

    addStudent: function() {

    },

    save: function() {
        localStorage.setItem("group", JSON.stringify(this.data));
    },

    load: function() {
        this.data = JSON.parse(localStorage["group"]);
    }

}