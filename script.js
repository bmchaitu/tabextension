secondhand=document.getElementById('seconds');
minutehand=document.getElementById('minutes');
hourhand=document.getElementById('hours');
digital=document.getElementById('dclock');
day=document.getElementById('day');
time=document.getElementById('time');
date= new Date();

scount=(date.getSeconds()*6);
mcount=(date.getMinutes()*6);
hcount=(date.getHours()*30);
secondhand.style.transform=`rotate(${scount+90}deg)`;
minutehand.style.transform=`rotate(${mcount+90}deg)`;
hourhand.style.transform=`rotate(${hcount+90}deg)`;

time.innerHTML='Time:-'+date.getHours()+'Hr '+date.getMinutes()+'Min';
time.setAttribute("style","top:480px;font-weight:bold")
	fdate=new Date();
	switch(fdate.getMonth())
	{
		case 1:month='January';
			   break;
		case 2:month='February';
			   break;
		case 3:month='March';
			   break;
		case 4:month='April';
			   break;
		case 5:month='May';
			   break;
		case 6:month='June';
			   break;
		case 7:month='July';
			   break;
		case 8:month='August';
			   break;
		case 9:month='September';
			   break;
		case 10:month='October';
			    break;
		case 11:month='November';
				break;
		case 12:month='December';
				break;
}
	digital.innerHTML=month+' '+fdate.getDate()+' '+fdate.getFullYear();
	digital.setAttribute("style","font-weight:bold");
	
	switch(fdate.getDay())
	{
		case 1:day.innerHTML='Monday';
			   day.setAttribute("style","font-weight:bold");
			   break;
		case 2:day.innerHTML='Tuesday';
			   day.setAttribute("style","font-weight:bold");
			   break;
		case 3:day.innerHTML='Wednesday';
			   day.setAttribute("style","font-weight:bold");
			   break;
		case 4:day.innerHTML='Thursday';
			   day.setAttribute("style","font-weight:bold");
			   break;
		case 5:day.innerHTML='Friday';
			   day.setAttribute("style","font-weight:bold");
			   break;
		case 6:day.innerHTML='Saturday';
			   day.setAttribute("style","font-weight:bold");
			   break;
	}
	
	
setInterval(()=>
{	
	secondhand.style.transform=`rotate(${scount+96}deg)`;
	if(scount==360)
	{
		minutehand.style.transform=`rotate(${mcount+96}deg)`;
		scount=0;
		if(mcount==360)
		{
			hourhand.style.transform=`rotate(${hcount+96}deg)`;
			hcount=hcount+30;
			mcount=0;
		}
		mcount=mcount+6;
	}
	scount=scount+6;
	time.innerHTML='Time:-'+new Date().getHours()+'Hr '+new Date().getMinutes()+'Min';
},1000)