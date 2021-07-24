
	function colorchange(){
		i=Number(document.getElementById("counter").innerHTML);
		i+=1
		document.getElementById("counter").style.display='none';
		document.getElementById("counter").innerHTML=i
		if (i%2==0){
			document.getElementById("whole").style.background="#2F4F4F";
			document.getElementById("aboutme").style.background="#2F4F4F";
			document.getElementById("projects").style.background="#2F4F4F";
			document.getElementById("skill").style.background="#2F4F4F";
			document.getElementById("nightday").style.background="#2F4F4F";
			document.getElementById("first").style.opacity=1;
			i=1;
			alert(i)
			
		}

		else{
			document.getElementById("whole").style.background="cyan";
			document.getElementById("aboutme").style.background="#6699FF";
			document.getElementById("projects").style.background="#990099";
			document.getElementById("skill").style.background="#66CCFF";
			document.getElementById("nightday").style.background="lightskyblue";
			document.getElementById("first").style.opacity=0.01;
			i=2;
			alert(i)
			document.getElementById("counter").innerHTML=2;
			
		}
		
		
	}

	function change(){
	i=Number(document.getElementById("imgcountter").innerHTML);
	images=["duis2.jpg","duis3.jpg","duis4.jpg","duis5.jpg","duisahme.jpg","astu_logo.png"];
	document.getElementById("check").src = images[i%6];
	i+=1;
	document.getElementById("imgcountter").innerHTML=i;
	document.getElementById("imgcountter").style.display='none';
	
	}

