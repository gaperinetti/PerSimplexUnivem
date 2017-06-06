var jq=jQuery.noConflict();
var subjectCount = 0;

function addSubjects()
{
  var newSubject = document.createElement('div');
  newSubject.id = "restricao"+subjectCount;
  var subjectInput = "<div class='restrictionV fields'><div class='six wide field'>";
  subjectInput += "<input type='text' placeholder='F"+ (subjectCount + 1)+"' id='subject"+ subjectCount + "'/></div>";
  var subjectSecondInput = "<div class='field'><label class='sinal'>&le;</label></div>";
   subjectSecondInput += '<div class="six wide field"><input type="text" id="subjectTyped' + subjectCount + '"/></div>';
  var del = "<a class='delete"+ subjectCount +"'onclick='removeSubjects("+ newSubject.id+");'> <i class='circular red trash icon'></i> </a>"    //></a> --> <i class='circular red trash icon'></i>
  var add = "<a onclick='addSubjects();' ><i class='circular red add circle icon'></i></a>"
  var butons = "<div class='two wide field'><div class='one fields'><div class='field'>"+ add +"</div><div class='field'>"+ del +"</div>";
  newSubject.innerHTML = ""+ subjectInput + subjectSecondInput + butons+"</div></div></div>";
  document.getElementById("subjects").appendChild(newSubject);
  subjectCount++;
  if(subjectCount > 0){
    jQuery('.init').hide();
  }
  jQuery('.delete0').addClass("disabled");
}

function removeSubjects(restricao)
{
  restricao.remove();
  subjectCount--;
}

function clear(){
  jQuery("#tables").empty();
  console.log("oioioi");
}
