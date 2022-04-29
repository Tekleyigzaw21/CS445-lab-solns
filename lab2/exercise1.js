var University = /** @class */ (function () {
    function University(name, dept) {
        this.name = name;
        this.dept = dept;
    }
    University.prototype.graduation = function (year) {
        console.log("Graduating ".concat(this.dept, " ").concat(year, " students"));
    };
    return University;
}());
var miu = new University("MIU", "MSD");
miu.graduation(2021);
