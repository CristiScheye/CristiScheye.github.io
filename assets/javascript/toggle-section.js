document.addEventListener('DOMContentLoaded', function () {
  var toggles = document.getElementsByClassName('section-toggle')

  Array.prototype.forEach.call(toggles, function (toggle) {

    toggle.onclick = function (e) {
      var t = e.target

      if (t.classList.contains('active')) {
        t.classList.remove('active')
        t.innerHTML = 'See More'
      }
      else {
        t.classList.add('active')
        t.innerHTML = 'See Less'
      }

    }
  })
})

