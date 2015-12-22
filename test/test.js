var parseSyllable=require("../parsesyllable.js");
var assert=require("assert");
describe("test parseSyllable",function(){
	it("simple root chars",function(){
		var rootchars="ཀཁགངཅཆཇཉཏཐདནཔཕབམཙཚཛཝཞཟའཡརལཤསཧཨ".split("");
		rootchars.map(function(ch){
			var parsed=parseSyllable(ch); 
			assert.equal(parsed.base , ch) ;
		});
	});	
	it("with vowels",function(){
		var syl="གུ";
		var parsed=parseSyllable(syl); 
		assert.equal(parsed.base , "ག") ;
		assert.equal(parsed.vowel , "ུ") ;
	});
	it("r super",function(){//ར上加
		var syls="རྐ,རྒ,རྔ,རྗ".split(",");
		var rootchars="ཀ,ག,ང,ཇ".split(",");
		
		syls.map(function(syl,idx){
			var parsed=parseSyllable(syl);	
			assert.equal(parsed.super , "ར") ;
			assert.equal(parsed.base , rootchars[idx]) ;
		}) 
	})
})