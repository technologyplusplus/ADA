	

function AddGame( e )
{
	 e.preventDefault();
	$.ajax({
			method: "POST",
			url: "http://localhost/mbg_services/games/new"	,
			data: $( '#form_newgame' ).serialize(),			
			dataType: 'json',
			success: function (response ) { $("#message").empty().append("<h2>Success!!!");$( "#results" ).empty().append( GetGames() );  },
			error: function (response) { $( "#results" ).empty().append( response ); }
			});	
}	


function UpdateGame()
	{
	$.ajax({
			method: "POST",
			url: "http://localhost/mbg_services/games/update",
			data: $( '#UpdateGameForm' ).serialize(),			
			dataType: 'json',
			success: function (response ) { $("#message").empty().append("<h2>Success!!!");  },
			error: function (response) { $( "#results" ).empty().append( response ); }
			});	
	}
	
	
	
function GetGames()
	{
	$.ajax({
			method: "GET",
			url: "http://localhost/mbg_services/games/all",		
			data: { format: 'html' },			
			dataType: 'html',
			success: function (response ) { console.log("happy"); $( "#results" ).empty().append( response ); },
			error: function (response) { $( "#results" ).empty().append( response ); }
			});	
	}
	
	
function GetAllBusinesses()
	{
	$.ajax({
			method: "GET",
			url: "http://localhost/mbg_services/businesses/all",		
			data: { format: 'json' },			
			dataType: 'json',
			success: function (response ) { console.log("get all biz"); $( "#results" ).empty().append( response ); },
			error: function (response) { $( "#results" ).empty().append( response ); }
			});	
	}	
	
	
function GetAllBusinesses2()
	{
	$.ajax({
			method: "GET",
			url: "http://localhost/mbg_services/businesses/all",		
			data: { format: 'json' },			
			dataType: 'json',
		    success: function ( response ) { MarkUpBusinesses( response )  },
			error: function (response) { $( "#results" ).empty().append( response ); }
			});	
	}	
	
	
function AddBusiness()
	{
		console.log( "I made it here. " );
		$.ajax({
		method: 'POST',
		url: "http://localhost/mbg_services/business/new",
		data: $( '#form_addbiz' ).serialize(),
		dataType: 'json',
		success:  $('#results').empty().append( "The update was submitted." ),
		error: function (response) { $( "#results" ).empty().append( response ); }
		}).done( $('#newpacccode').hide());
	}
	
	
function UpdateBusiness( event )
	{
    event.preventDefault();
	var BizID = $( "#updateBiz input[name='bizId']" ).val();
	console.log( BizID)
	$.ajax({
			method: "POST",
			url: "http://localhost/mbg_services/business/update/" + BizID,
			data: $( '#updateBiz' ).serialize(),			
			dataType: 'json',
			success: function (response ) { $("#message").empty().append("<h2>Success!!!");  },
			error: function (response) { $( "#results" ).empty().append( response ); }
			});	
	}
	
	
	
function GetAllGames()
	{
	$.ajax({
			method: "GET",
			url: "http://localhost/mbg_services/games/all",		
			data: { format: 'json' },			
			dataType: 'json',
			success: function ( response ){  AddGamesToBizForm( response );  },
			error: function ( response) { $( "#results" ).empty().append( response ); }
			});	
	}
	
	
function GetActiveGames()
	{
	$.ajax({
			method: "GET",
			url: "http://localhost/mbg_services/games/active",		
			data: { format: 'json' },			
			dataType: 'json',
			success: function ( response ){  EditGame( response ); },
			error: function ( response) { $( "#results" ).empty().append( response ); }
			});	
	}
	
function GetBusinesses()
	{	
	  $.ajax({
			method: "GET",
			url: "http://localhost/mbg_services/businesses",			
			data: { format: 'html' },			
			dataType: 'html',
			success:  function (response) { $( "#results" ).empty().append( response ); },
			error: function (response) { $( "#results" ).empty().append( response ); }
			});
	} 		
	
	
function GetBusiness( event )
{
	event.preventDefault();
	var BizID = event.target.id.substring( 10 );
	 $.ajax({
			method: "GET",
			url: "http://localhost/mbg_services/businesses/"+ BizID,			
			data: { format: 'json' },			
			dataType: 'json',
			success:  function (response) { MarkUpBusiness( response ) },
			error: function (response) { $( "#results" ).empty().append( response ); }
			});	
}
 	
			
	
function EditGame( data )
	{
    $( '#results' ).empty();
	$.each(data.pacc_codes, function(i, item)
		{
		$( '#results' ).append( "<tr><td><a id='GameToEdit_"+item.g_GameId+"' data-game='"+item.g_Game+"' href='#' >edit</a></td><td>" + item.g_Game + "</td></tr>"); 
		 });		  		
	}	
	
	
function EditGameForm( event )
	{
	event.preventDefault();
	var gameid = event.target.id.substring(11);	
	$( '#results' ).empty().append( "<form id='UpdateGameForm' ><label>Game:</label><input type='hidden' name='gameid' value='"+gameid+"'/><input type='text' name='game' value='"+event.target.dataset.game+"' /><input id='UpdateGame' type='submit' value='update' /></form>" );
	}
	
	
	function AddGamesToBizForm( data )
	{
		
		$.each(data.pacc_codes, function(i, item)
		{
		$( "#form_addbiz" ).append( item.g_Game + " <input value='"+item.g_GameId+"' type='checkbox' name='gamegroup' >"); 
		 });		
	}
	
	
	
	
	
		
function GetUsers()
	{
	$.ajax({
			method: "GET",
			url: "http://localhost/mbg_services/users/",			
			data: { format: 'html' },			
			dataType: 'html',
			success:  function (response) { $( "#results" ).empty().append( response ); },
			error: function (response) { $( "#results" ).empty().append( response ); }
			});
	}	
	
/*** BUSINESSES ***/	
	
	
function MarkUpBusiness( data )
	{
	$( '#results' ).empty();
	console.log( data.pacc_codes ); 
	$.each(data.pacc_codes, function(i, item)
		{
		$( '#results' ).empty().html(""+
		                         "<form id='updateBiz'><label>Business Id:</label><input type='text' disabled='true' name='bizId' value='"+item.biz_Id+"' ></div>" +
								 "<div><label>Business Name:</label><input name='business_name' value='"+item.biz_Name+"' ></div>" +
								 "<div><label>Address:</label><input name='business_address' value='"+item.biz_Address+"' ></div>" +
								 "<div><label>City:</label><input name='business_zip' value='"+item.biz_Zip+"' ></div>" +
								 "<div><label>City:</label><input name='business_city' value='"+item.biz_City+"' ></div>" +
								 "<div><label>State:</label><input name='business_state' value='"+item.biz_State+"' ></div>" +
								 "<div><label>Country:</label><input name='business_country' value='"+item.biz_Country+"' ></div>" +
						         "<div><label>Active</label><input name='business_isactive' value='"+item.biz_IsActive+"' ></div>" +
								 "<div><label>Date entered:</label><input name='business_date' value='"+item.biz_Date+"' ></div>" +
								 "<div><label>Website:</label><input name='business_website' value='"+item.biz_WebSite+"' ></div>" +
								 "<input type='submit' value='Update Business' id='updateBiz' >" +
								 "</form>"); 
		 });
}	
	
	
function MarkUpBusinesses( data )
	{
	$( '#results' ).empty();
	console.log( data.pacc_codes ); 
	$.each(data.pacc_codes, function(i, item)
		{
		$( '#results' ).append( "<tr><td><a id='bizToEdit_"+item.biz_Id+"' data-biz='"+item.biz_Name+"' href='#' >edit</a></td><td>"+item.biz_Name+"</td><td>" + item.biz_Address + "</td><td>" + item.biz_City + "</td><td>" + item.biz_State + "</td><td>" + item.biz_State+ "</td><td>" + item.biz_Country + "</td><td>" + item.biz_Country + "</td><td>" + item.biz_IsActive + "</td><td>" + item.biz_Date + "</td><td>" + item.biz_WebSite + "</td></tr>"); 
		 });
	}		
	
	
	
	
/**************  PACC CODES ***********************/	
	
	
function getPACCCODE2( byCode )
	{	
	  $.ajax({
			method: "GET",
			url: CONFIG.PACC_SERVICE + "/pacccode/" + byCode,			
			data: { format: 'json' },			
			dataType: 'json',
			success:  ViewCode,
			error: function (response) { $( "#results" ).empty().append( response ); }
			});
	} 		

function getCodeByTitle( byTitle )	
	{	
	$.ajax({
			method: "GET",
			url: CONFIG.PACC_SERVICE + "/pacccode/title/" + byTitle,
			data: { format: 'json' },			
			dataType: 'json',
      success:   PopulateCodeList,	
			error: function (response) { $( "#results" ).empty().show().append( response ); }
			});
} 		

function getPACCCODEForEdit( byCode )
	{	
	  $.ajax({
			method: "GET",
			url: CONFIG.PACC_SERVICE + "/pacccode/" + byCode,			
			data: { format: 'json' },			
			dataType: 'json',
      success:   PopulateEditForm,
			error: function (response) { $( "#results" ).empty().append( response ); }
			});
	} 		

function AddNewCodeForm()
{
	$.ajax({
		method: 'POST',
		url: CONFIG.PACC_SERVICE + "/pacccode/new",
		data: $( '#form_newpacccode' ).serialize(),
    dataType: 'json',
		success:  $('#results').empty().append( "The update was submitted." ).show(),
		error: function (response) { $( "#results" ).empty().append( response ).show(); }
		}).done( $('#newpacccode').hide());
}

function EditCodeForm()
{
	$.ajax({
		method: 'POST',
		url: CONFIG.PACC_SERVICE + "/pacccode/edit",
		data: $( '#form_editpacccode' ).serialize(),
    dataType: 'json',
		success: $('#results').empty().append( "The PACC code was updated." ).show(),
		error: function (response) { $( "#results" ).empty().append( response ).show(); }
		}).done( $('#editpacccode').hide());
}	

function PopulateEditForm ( response )
{
  var Code = new PACCCode(response); 
	$( "#form_editpacccode input[id='code']" ).val( Code.getCode() );
	$( "#form_editpacccode input[id='title']" ).val( Code.getTitle() );	
	$( "#form_editpacccode input[id='group']" ).val( Code.getGroup() );
	$( "#form_editpacccode input[id='speccode']" ).val( Code.getSpecialCode() );
	$( "#form_editpacccode input[id='crimeclass']" ).val( Code.getClass() );
	$( "#form_editpacccode input[id='changedate']" ).val( Code.getChangeDate() );	
	$( "#form_editpacccode textarea[id='language']" ).val( Code.getLanguage() );
	$( "#form_editpacccode textarea[id='note']" ).val( Code.getNote() );
	$( "#form_editpacccode input[id='penalty']" ).val( Code.getPenalty() );
	$( "#form_editpacccode input[id='classtype'] " ).val( Code.getType() );
	$( "#form_editpacccode input[id='responsibilities']" ).val( Code.getResponsibility() );
}

function ViewCode( response )
{
	var Code2 = new PACCCode(response);
	var _WebCode2 = new MarkupPACCCode(); 				
	$( "#results" ).empty().append( 				                    
		  "<a href='#' class='btn btn-primary' id='doedit_"+ Code2.getCode()+"'>Edit Code</a>" + 
	    _WebCode2.setTitle(Code2.getCode() + " " + Code2.getTitle()) +
  		_WebCode2.setLanguage("<h4>Language</h4>" + Code2.getLanguage()) +
			_WebCode2.setNote("<h4>Note</h4>" + Code2.getNote()) +
			_WebCode2.setPenalty("<h4>Penalty</h4>" + Code2.getPenalty()) +
			_WebCode2.setType("<h4>Type</h4>" + Code2.getType()) +
			_WebCode2.setResponsibility("<h4>Responsibilities</h4>" + Code2.getResponsibility()) + 
			_WebCode2.setChangeDate("<h4>Change Date:</h4>" + Code2.getChangeDate()) 															
			).css("color","black").show();			
}

function PopulateCodeList( response )
{
	var Code = new PACCCode( response ); 
	var objTable = $("<table class='table table-striped' ><tr><th>PACC Code</th><th>Title</th></tr>").attr("id","codetable");
	$("#results").empty().append( objTable ).show();
	for(var counter = 0; counter < Code.obj.pacc_codes.length; counter++)
		{
		var tr = "<tr>";
	  var td1 = "<td><a href='#' id='doview_"+ Code.obj.pacc_codes[counter]["pacc_code"] +"'>"+Code.obj.pacc_codes[counter]["pacc_code"]+"</a></td>";
		var td2 = "<td>"+Code.obj.pacc_codes[counter]["code_title"]+"</td></tr>";
		$("#codetable").append(tr+td1+td2).css("color","black"); 
		}
}



