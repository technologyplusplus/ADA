
function Package ( name, SecurityRule )
{
this.PackageName = name;
this.PackageCreateDate = new Date();
this.SecurityRule = SecurityRule;
}

function SecurityRule( rulename,profile,plantype )
{

this.Pages = [];
this.SecurityRuleName = rulename;
this.profile = profile;
this.PlanType = plantype;
this.getPages = function()
	{
	return this.Pages;	
	}
}


function Control (name,type,aspxname,label)
{
this.name = name;
this.type = type;
this.aspname = aspxname;
this.controlLabel = label;	
}


function Page( href )
{
this.ControlArray = [];	
this.href = href;
this.numbercontrols = this.ControlArray.length;
// this.addControl = function ( Control ) { ControlArray.push( Control );  }
this.getControls = function ()
	{
	return this.ControlArray;
	}
this.numbercontrols = function () { return ControlArray.length };		

	
}