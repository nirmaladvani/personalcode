var loadPixel = function () {
  var spcid_cookie = getCookie('spcid');
  var convtype = ['e', 'a', 's'];
  var spcid_conv;
  const queryParams = new URLSearchParams(window.location.search);

  if(isNumeric(spcid_cookie)){
    spcid_conv = spcid_cookie;
  } else if (queryParams.has('spcid')) {
    if(isNumeric(queryParams.get('spcid'))){
      spcid_conv = queryParams.get('spcid');
    }
  }

  if(isNumeric(spcid_conv)){
    if (convtype.indexOf(sp_convtype) == -1) {
      sp_convtype = 'a';
    }
    if(typeof sp_amt == 'undefined'){
      sp_amt = '';
    }
    if(typeof sp_ref == 'undefined'){
      sp_ref = '';
    }

    var url = 'https://link.studyportalstracking.com/api/' + sp_convtype + '/post/?uid=176637&s1=' + spcid_conv + '&amt=' + sp_amt + '&ref=' + sp_ref;

    var panel = document.createElement('div');
    panel.setAttribute('id', 'pixel_container');
    panel.style.height = '0px';
    panel.style.width = '0px';
    panel.style.overflow = 'hidden';

    var iFrame = document.createElement('iframe');
    iFrame.setAttribute('src', url);
    iFrame.setAttribute('frameborder', '0');
    iFrame.setAttribute('height', '0');
    iFrame.setAttribute('width', '0');
    iFrame.setAttribute('noresize', '0');
    iFrame.setAttribute('id', 'convframe');
    iFrame.setAttribute('name', 'convframe');
    iFrame.setAttribute('allowtransparency', 'true');
    var scripts = document.getElementsByTagName('script');
    var index = scripts.length - 1;
    var myScript = scripts[index];
    panel.appendChild(iFrame);
    myScript.parentNode.appendChild(panel);

    if (typeof testURL !== 'undefined') {
        testURL = null;
    }
  }
};

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

function isNumeric(num){
  return !isNaN(num)
}

loadPixel();