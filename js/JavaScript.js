		function show(a)
		{
			var currvalue=document.getElementById("n1").value;
			var targetvalue=currvalue+a;
			document.getElementById("n1").value=targetvalue;
		}
		function clear1()
		{
			document.getElementById("n1").value="";
		}
		function equal()
		{
			document.getElementById("n1").value=eval(n1.value);
		}