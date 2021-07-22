i=0;
	function colorchange(){

		if (i%2==0){
			document.getElementById("whole").style.background="#2F4F4F";
			document.getElementById("aboutme").style.background="#2F4F4F";
			document.getElementById("projects").style.background="#2F4F4F";
			document.getElementById("skill").style.background="#2F4F4F";
			document.getElementById("nightday").style.background="#2F4F4F";
			document.getElementById("first").style.opacity=0.5;
		}

		if(i%2==1){
			document.getElementById("whole").style.background="cyan";
			document.getElementById("aboutme").style.background="#6699FF";
			document.getElementById("projects").style.background="#990099";
			document.getElementById("skill").style.background="#66CCFF";
			document.getElementById("nightday").style.background="lightskyblue";
			document.getElementById("first").style.opacity=1;
			
		}
		i +=1
	}