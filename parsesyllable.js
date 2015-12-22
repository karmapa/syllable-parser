var parseSyllable=function(syl){
	var base_vowels=/^([ཀཁགངཅཆཇཉཏཐདནཔཕབམཙཚཛཝཞཟའཡརལཤསཧཨ])([ིེོུ]?)$/;
	var r_super=/^ར([ྐྒྔྗ])$/

	var m=syl.match(base_vowels);
	if(m) return {base:m[1],vowel:m[2]};	
	m=syl.match(r_super);
	if(m) return {base:String.fromCharCode(m[1].charCodeAt(0)-80), super:"ར"};	

	return {err:1};
}

if (typeof module!=="undefined") {
	module.exports=parseSyllable;
} else {
	window.parseSyllable=parseSyllable;	
}