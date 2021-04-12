import {getRandom} from "../public/js/seeder";
var assert = require("assert");

describe("seeder", function() 
{
    describe("#getRandom()", function() 
    {
        it("should not return a null value", function() 
        {
            assert.notStrictEqual(getRandom(), null);
        });

        it("should return a voting value greater than 15, function()", function() 
        {
            assert.ok(getRandom().votes >= 15);
        });
    });
});