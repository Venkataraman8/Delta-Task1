var food=[],i=1,total=0,cal;


				
				
				//function to load from memory
				function Function1()
				{
					
			    if(localStorage.gender1)
				{
					if(localStorage.getItem("gender1")=="male")
					document.getElementsByClassName("gen")[0].checked=true;
				
				  else if(localStorage.getItem("gender1")=="female")
					document.getElementsByClassName("gen")[1].checked=true;
				}
				
				if(localStorage.weight1)
					document.getElementById("weight").value=localStorage.getItem("weight1");
				
				if(localStorage.height1)
					document.getElementById("height").value=localStorage.getItem("height1");
					
				if(localStorage.age1)	
					document.getElementById("age").value=localStorage.getItem("age1");
					
				if(localStorage.exercise1)	
				document.getElementById("exercise").value=localStorage.getItem("exercise1");
					
					
				}
	
		   
		   
		   
	//function to calcualate required calories.	   
			function Calculate(){
				
				document.getElementById("cal1").style.display="block";
				
				
		if(document.getElementsByClassName("gen")[0].checked==true)
		{
			var g="male";
		
		}
		
		else if(document.getElementsByClassName("gen")[1].checked==true)
		{
			var g="female";
		
		}
		localStorage.setItem("gender1",g);
		
		
		var a = document.getElementById("age").value;
		localStorage.setItem("age1",a);
	
		var h = document.getElementById("height").value;
		localStorage.setItem("height1",h);
		
		var w = document.getElementById("weight").value;
		localStorage.setItem("weight1",w);
		
		var e= document.getElementById("exercise").value;
		localStorage.setItem("exercise1",e);
		
	
		var BMR;
		if(g=="male"){
		BMR = 10 * w + 6.25 * h - 5 * a + 5    ;     <!--(man)-->
	}	
		
		else if(g=="female"){
        BMR = 10 * w + 6.25 * h - 5 * a - 161  ;    <!--(woman)-->
		}
		
		
		
		
		switch(e){
		case "1": cal=BMR*1.2;break;
		case "2": cal=BMR*1.375;break;
		case "3": cal=BMR*1.55;break;
		case "4": cal=BMR*1.725;break;
		case "5": cal=BMR*1.9;break;
		}
		
		
		document.getElementById("calories").value=cal;
		}
		
					
				//function to add and find total calories consumed by user
				function add()
				{	
				
					
					var li=document.createElement("li");
					var Input1=document.getElementById("foodname").value;
					var Input2=document.getElementById("amount").value;
					var Input3=document.getElementById("calorie count").value;
	
					
					food[i]=Input2*Input3;
					
					
					
					
					var t=document.createTextNode(Input1+"_____"+Input2);
					li.appendChild(t);
					
					if(Input1==' '||Input2==' ')
					{alert("Cannot be left blank");
					}
					
					else{
					document.getElementById("Ul").appendChild(li);
					
					}
					
					
					document.getElementById("foodname").value="";
					document.getElementById("amount").value="";
					document.getElementById("calorie count").value="";
					
					total=total+food[i];
					i++;
					
					
					
				}
	       
		   
		   
		   //function to calculate if user meets requirements
		   function Eat(){
		   
		   
		   document.getElementById("totalf").value=total;
		   
		   if(total>cal+100) alert("Excess");
		   else if(total<cal-100) alert("Deficit");
		   else alert("Perfect");
		   }