//start
var adres = document.location.href;
adres = "http://portal.republika.pl/popup/index3.asp";
plik = location.pathname;
dl = plik.length;
war = plik.charAt(dl-1);
if((war == '/')||(plik.indexOf('index.htm'))!= -1||(plik.indexOf('index.shtml'))!=-1){
var okno2=window.open(adres,'popup2','toolbar=no,menubar=no,scrollbars=no,resizable=no,height=320,width=300,left=100,top=100');
}
function g_parameters_g() {
	var dt=new Date();
	var url=new String();
	var d=document;
	url+='&tstamp='+dt.getTime();
	if (d.URL) url+='&href='+escape(d.URL);
	if (d.referrer) url+='&ref='+escape(d.referrer);
	if (window.screen) {
		var s=screen;
		if (s.width) url+='&screen='+s.width+'x'+s.height;
		if (s.colorDepth) url+='&col='+s.colorDepth;
	}
	if (d.all || d.layers) url+='&java='+navigator.javaEnabled();
	return url;
}
var gemius_url=new String('http://onet.hit.gemius.pl/redot.gif?id=wjswx2L7t4h9N21ZRDpdzfT7&l=8&jse=2');
gemius_url+=g_parameters_g();
var gemius_image = new Image(1,1);
gemius_image.src = gemius_url;
var kropka_image = new Image(1,1);
kropka_image.src = 'http://kropka.onet.pl/_s/kropka/1?DV=republika_popup&RR='+(new Date()).getTime();
function MF(_ottw)
	{with(_ottw.document.body)
	if(nodeName=='BODY')
		{_otvt=offsetWidth*offsetHeight;if(_otvt>_otmx){_otwx=_ottw;_otmx=_otvt}}
	else
		for(var i=0;i<_ottw.length;i++) MF(_ottw[i])
	}
var IE=navigator.userAgent,IEi=IE.indexOf("MSIE");IE=(IE.indexOf("Opera")<0 && IEi>=0 && IE.charAt(IEi+5)>4)
if(IE && self==top)attachEvent('onload',
function()
	{
	_otwx=top;_otmx=0
	MF(top)
	with(_otwx.document.body)
		{
		_otob=appendChild(_otwx.document.createElement('<DIV style="position:absolute;top:0;left:0;width:100%">'))
		_otwx.attachEvent('onscroll',function(){_otob.style.top=_otwx.document.body.scrollTop})
		topMargin=topMargin*1+24
		_otob.innerHTML='<DIV style=\"width:100%;border:2 outset;background-Color:#E73E3B;font-family:Verdana,Tahoma,Arial;font-size:11px;color:white;\" nowrap id=\"_kl0pq_\"><TABLE border=0 cellpadding=1 cellspacing=0 width=\"100%\"><TR><TD style=\"font-size:11px\"><B><A style=\"color:white;line-height:16px; text-decoration:none;\" href=\"http://republika.onet.pl/propis.html\" target=\"_new\" onMouseOver=\"this.style.color=\'#FFAD31\'\" onMouseOut=\"this.style.color=\'white\'\">Pojemniejsze konto WWW, bez reklam &nbsp;&#187;&nbsp;<SPAN style=\"text-decoration:underline;\">Republika PRO</SPAN>&nbsp;&laquo;</A></B></TD><TD align=right><A href=\"http://www.republika.pl\"><IMG src=\"http://republika.pl/_d/logorep4.gif\" border=0></A></TD><TD align=right><BUTTON onClick=\"_kl0pq_.parentElement.style.display=\'none\';document.body.topMargin-=24\" style=\"background-color:\'#E73E3B\';height:18;line-height:6px;font-family:Webdings;border:1 outset\">r</BUTTON></TD></TR></TABLE></DIV>'
		}
	})
//stop
