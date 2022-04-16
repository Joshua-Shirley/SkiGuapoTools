const skiers = {

    list: [],

    index: function(id) {
        var l = skiers.list.filter(s => s.id == id);
        return l;
    },

    push: function(firstName, lastName, age, gender) {
        var user = {};
        user.id = this.randomID(6);

        // Student Names        
        user.firstName = this.regexName(firstName);
        user.lastName = this.regexName(lastName);

        // Student Age
        if (this.realAge(age)) {
            user.age = parseInt(age);
        } else {
            user.age = 0;
        }

        // Deal with gender
        var g = gender.toLowerCase();
        if (g == 'male' || g == 'm') {
            user.gender = 'm';
        } else if (g == 'female' || g == 'f') {
            user.gender = 'f';
        }

        // Is this a unique skier?

        // push object into array
        this.list.push(user);
    },

    remove: function() {

    },

    randomID: function(length) {
        var result = "";
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    },

    unique: function(firstName, lastName, age, gender) {
        skiers.list.filter(s => s.firstName == firstName && s.lastName == lastName && s.gender == gender);
        return true;
    },

    regexName: function(str) {
        var s = str;
        return s;
    },

    realAge: function(str) {
        var n = false;
        var e = parseInt(str);
        if (isNaN(e)) {
            n = false;
        } else if (e < 2) {
            n = false;
        } else if (e > 100) {
            n = false;
        } else {
            n = true;
        }
        return n;
    }


}