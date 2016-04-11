// Ad blocker is keepig the linkedin and twitter icons from showing...
// use image instead

document.addEventListener('DOMContentLoaded', function () {
  var twitterLink = document.getElementById('link-twitter')
    , linkedInLink = document.getElementById('link-linked-in')
    , twitterIcon = twitterLink.children[0]
    , linkedInIcon = linkedInLink.children[0]


  if (window.getComputedStyle(twitterIcon).getPropertyValue('display') == 'none') {
    twitterLink.innerHTML = '<img src="./assets/images/twitter-64.png" style="height:1em;width:1em" >'
  }

  if (window.getComputedStyle(linkedInIcon).getPropertyValue('display') == 'none') {
    linkedInLink.innerHTML = '<img src="./assets/images/li-img-64.png" style="height:1em;width:1em" >'
  }

})
