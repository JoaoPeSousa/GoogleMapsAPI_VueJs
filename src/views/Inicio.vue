<template>
  <div class="ui grid">
    <div class="six wide column">
      <form class="ui segment large form">
        <h1>- Sistema de apoio ao visitante em grande eventos -</h1>
        <div class="ui segment">
          <div class="field">
            <div class="ui right icon input large">
              <input
                type="text"
                placeholder="Insira o local"
                v-model="endereco"
                ref="autocomplete"
              />
              <i class="map marker alternate link icon" @click="minhaLocalizacao"></i>
            </div>
          </div>
          <div class="field">
            <div class="two fields">
              <div class="field">
                <select v-model="type">
                  <option value="doctor">Hospitais/Clínicas</option>
                  <option value="police">Policia</option>
                  <option value="restaurant">Restaurante</option>
                  <option value="bar">Bares</option>
                  <option value="bank">Bancos</option>
                  <option value="bakery">Padarias</option>
                  <option value="airport">Aeroportos</option>
                  <option value="car_rental">Alugar Carro</option>
                  <option value="atm">Caixa eletronico</option>
                </select>
              </div>
              <div class="field">
                <select v-model="radius">
                  <option value="5">5 km</option>
                  <option value="10">10 km</option>
                  <option value="15">15 km</option>
                  <option value="20">20 km</option>
                </select>
              </div>
            </div>
          </div>
          <button class="ui button" @click="procuraLocais">Procurar!</button>
        </div>
      </form>
      <h1 style="color: white">- Lista de interesses -</h1>
      <div class="ui segment" style="max-height:500px;overflow:scroll">
        <div class="ui divided items">
          <div class="item" v-for="place in places" :key="place.id">
            <div class="content">
              <div class="header">{{ place.name }}</div>
              <div class="meta">{{ place.vicinity }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div class="ten wide column segment ui" ref="map"></div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Inicio',
  data () {
    return {
      lat: 0,
      lng: 0,
      type: '',
      radius: '',
      places: [],
      endereco: ''
    }
  },

  mounted () {
    // eslint-disable-next-line no-new
    const autocomplete = new window.google.maps.places.Autocomplete(
      this.$refs.autocomplete, {
        types: ['establishment'],
        componentRestrictions: { country: ['BR'] },
        fields: ['place_id', 'geometry', 'name']
      })

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace()
      this.minhaLocalizacao(place.geometry.location.lat(), place.geometry.location.lng())
    })
  },

  methods: {
    minhaLocalizacao (lat = null, lng = null) {
      if (lat !== null && lng !== null) {
        this.lat = lat
        this.lng = lng
        this.coordenadasGeograficas(lat, lng)
      } else {
        navigator.geolocation.getCurrentPosition(
          position => {
            this.lat = position.coords.latitude
            this.lng = position.coords.longitude
            this.coordenadasGeograficas(position.coords.latitude, position.coords.longitude)
          },
          // eslint-disable-next-line handle-callback-err
          error => {
            console.log('Error getting location')
          }
        )
      }
    },

    procuraLocais () {
      const URL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${
        this.lat
      },${this.lng}&type=${this.type}&radius=${this.radius *
      1000}&key=YOUR_KEY_HERE`
      console.log(this.lat)
      axios.get(URL, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      }).then(response => {
        this.places = response.data.results
        this.marcaLocalizacoes()
      }).catch(error => {
        console.log(error.message)
      })
    },

    async coordenadasGeograficas (lat, long) {
      try {
        var {
          data
        } = await axios.get(
          'https://maps.googleapis.com/maps/api/geocode/json?latlng=' +
          lat +
          ',' +
          long +
          '&key=YOUR_API_KEY'
        )
        if (data.error_message) {
          console.log(data.error_message)
        } else {
          this.endereco = data.results[0].formatted_address
        }
      } catch (error) {
        console.log(error.message)
      }
    },
    marcaLocalizacoes () {
      const map = new window.google.maps.Map(this.$refs.map, {
        zoom: 15,
        center: new window.google.maps.LatLng(this.lat, this.lng),
        mapTypeId: window.google.maps.MapTypeId.ROADMAP
      })
      const infowindow = new window.google.maps.InfoWindow()
      this.places.forEach((place) => {
        const lat = place.geometry.location.lat
        const lng = place.geometry.location.lng
        const marker = new window.google.maps.Marker({
          position: {
            lat: lat,
            lng: lng
          },
          map: map
        })
        window.google.maps.event.addListener(marker, 'click', () => {
          infowindow.setContent(`<div class="ui header">${place.name}</div><p>${place.vicinity}</p>`)
          infowindow.open(map, marker)
        })
      })
    }
  }

}
</script>
