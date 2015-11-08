// Ad blocker is keepig the logo icons from showing...
// use text instead

document.addEventListener('DOMContentLoaded', function () {
  var twitterLink = document.getElementById('link-twitter')
    , linkedInLink = document.getElementById('link-linked-in')
    , twitterIcon = twitterLink.children[0]
    , linkedInIcon = linkedInLink.children[0]


  if (twitterIcon.style.getPropertyValue('display') == 'none') {
    twitterIcon.style.setPropertyValue('display', 'inline-block')
  }

  if (linkedInIcon.style.getPropertyValue('display') == 'none') {
    linkedInIcon.style.setPropertyValue('display', 'inline-block')
  }

})
