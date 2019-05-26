var food=[],i=0,total=0,cal,t=[],f=0,k=0;


				
				
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
				var flag=0;
				
				document.getElementById("cal1").style.display="block";
				
				
		if(document.getElementsByClassName("gen")[0].checked==true)
		{
			var g="male";
		
		}
		
		else if(document.getElementsByClassName("gen")[1].checked==true)
		{
			var g="female";
		
		}
		else {alert("Gender cannot be left blank");flag=-1;}
		localStorage.setItem("gender1",g);
		
		
		var a = document.getElementById("age").value;
		if(a=="") {alert("Age cannot be left blank");flag=-1;}
		else localStorage.setItem("age1",a);
	
		var h = document.getElementById("height").value;
		if(h=="") {alert("Height cannot be left blank");flag=-1;}
		else localStorage.setItem("height1",h);
		
		var w = document.getElementById("weight").value;
		if(w=="") {alert("Weight cannot be left blank");flag=-1;}
		else localStorage.setItem("weight1",w);
		
		var e= document.getElementById("exercise").value;
		if(e=="") {alert("Exercise cannot be left blank");flag=-1;}
		else localStorage.setItem("exercise1",e);
		
		if(flag==0)
			{
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
		f=3;
		 }
		}
		
				
				//function to add and find total calories consumed by user
				function add()
				{	
				
					
					
					var Input1=document.getElementById("foodname").value;
					var Input2=document.getElementById("amount").value;
					var Input3=document.getElementById("calorie count").value;
					
					if(Input1=="") {alert("name of food item undefined"); f=-1;}
					if(Input2=="") {alert("number of servings undefined"); f=-1;}
					if(Input3=="") {alert("calorie count undefined"); f=-1;}
					
					
					
					
					
					
					
					
					  var li = document.createElement("li");
				
						var t = document.createTextNode(Input1+" : "+Input2+" servings each with "+Input3+" calories.");
						li.appendChild(t);
						
							document.getElementById("myList1").appendChild(li);
							
					food[i]=Input2*Input3;
					i++;
					total=total+Input2*Input3;
					alert(total);
					document.getElementById("foodname").value="";
					document.getElementById("amount").value="";
					document.getElementById("calorie count").value="";
					
					
					
					
					
				
				}
	       
		   
		   
		   //function to calculate if user meets requirements
		   function Eat(){
		   
		   if(f==3)
		   {
		   document.getElementById("totalf").value=total;
		   
		   if(total>cal+100) alert("Excess");
		   else if(total<cal-100) alert("Deficit");
		   else alert("Perfect");
		   
		   }
		   }
		   
		   function Clear()
		   { 
		   
			 var div = document.getElementById("myList1");
              div.childNodes[k].style.display = "none";
			  total=total-food[k];
			  k++;
			
		    
			 
		   }