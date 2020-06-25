var mymap = L.map('mapid', { scrollWheelZoom: false }).setView(
  [29.9395084, -90.2703625],
  11
)

L.tileLayer(
  'https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.{ext}',
  {
    attribution:
      'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 18,
    ext: 'png',
  }
).addTo(mymap)

var marker = L.marker([29.974, -90.2703625]).addTo(mymap)

marker
  .bindPopup(
    '<h1 style="margin-bottom: -10px;">Hello World!</h1><h3>I am a dynamic popup that can display any information you would like! I can also look whatever way you would like to make me look!<h3>'
  )
  .openPopup()
