


function PACCCode( Obj )
{

//this.obj = Obj;
var obj = Obj;
	
this.getCode = function ()
  {
	return obj.pacc_codes[0].pacc_code;
  };	
	
this.getTitle = function()
	{
	return Obj.pacc_codes[0].code_title; 
	};		

this.getType = function()
  {
	return obj.pacc_codes[0].code_classtype;
	};
	
this.getPenalty = function()
  {
	return obj.pacc_codes[0].code_penalty;
	};
	
this.getNote = function()
  {
	return obj.pacc_codes[0].code_note;
	};
	
this.getChangeDate = function()
  {
	return obj.pacc_codes[0].code_changedate;
  };	
	
this.getResponsibility = function()
  {
	return obj.pacc_codes[0].code_responsibilities;
  };

this.getLanguage = function()
  {
  return obj.pacc_codes[0].code_language;
  };	
	
this.getGroup = function()
  {
  return obj.pacc_codes[0].code_group;
  };		
	
this.getSpecialCode = function()
  {
  return obj.pacc_codes[0].code_specialcode;
  };	

this.getClass = function()
  {
  return obj.pacc_codes[0].code_class;
  };		
	
}
