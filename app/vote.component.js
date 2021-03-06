System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var VoteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VoteComponent = (function () {
                function VoteComponent() {
                }
                VoteComponent.prototype.ngOnInit = function () {
                    this.initialVotes = this.votes;
                };
                VoteComponent.prototype.outOfBounds = function () {
                    return Math.abs(this.initialVotes - (this.votes + this.myVote)) > 1;
                };
                VoteComponent.prototype.voteUp = function () {
                    if (this.outOfBounds())
                        return;
                    this.myVote += 1;
                };
                VoteComponent.prototype.voteDown = function () {
                    if (this.outOfBounds())
                        return;
                    this.myVote += -1;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "votes", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "myVote", void 0);
                VoteComponent = __decorate([
                    core_1.Component({
                        selector: 'vote',
                        template: "\n        <div class=\"vote-container\">\n            <i class=\"glyphicon glyphicon-menu-up\" (click)=\"voteUp()\" [class.active]=\"myVote == 1\"></i>\n            <span>{{ votes + myVote }} </span>\n            <i class=\"glyphicon glyphicon-menu-down\" (click)=\"voteDown()\" [class.active]=\"myVote == -1\"></i>\n        </div>\n    ",
                        styles: ["\n        .glyphicon, span {\n            cursor: pointer;\n            display: block;\n            margin: 10px 0;\n        }\n        \n        .glyphicon.active {\n            color: yellow;\n        }\n        \n        .vote-container {\n            margin-left: 10px;\n            margin-top: 10px;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VoteComponent);
                return VoteComponent;
            }());
            exports_1("VoteComponent", VoteComponent);
        }
    }
});
//# sourceMappingURL=vote.component.js.map