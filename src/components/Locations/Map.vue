<template>
  <div
    id="HcLocationsMap"
    v-show="showMobileControls"
    :class="(showMobileControls) ? 'd-flex flex-column' : 'd-sm-flex flex-sm-column'"
  >
    <div
      v-if="activePlace"
      class="d-sm-none flex-shrink-1 bg-white p-2 text-center text-secondary v-card"
    >
      <div class="d-flex align-items-center justify-content-between">
        <span class="flex-grow-1">{{ activePlace.name }}</span>
        <a @click.prevent="showMobileControls = false" class="close px-1">&times;</a>
      </div>
    </div>

    <div class="flex-fill embed-responsive">
      <div ref="map" class="embed-responsive-item bg-dark h-100"></div>
      <div ref="popup">
        <Popup :place="activePlace" />
      </div>
    </div>
  </div>
</template>

<script>
import { Map, TileLayer, Marker, FeatureGroup } from 'leaflet'
import Popup from './Popup'

export default {
  props: ['locations'],

  components: {
    Popup
  },

  mounted() {
    this.initMap()
  },

  data: () => ({
    showMobileControls: false,
    activePlace: null,
    map: null,
    markers: []
  }),

  methods: {
    initMap() {
      this.map = new Map(this.$refs.map, {
        center: [27.9, -82.5],
        zoom: 10
      })

      new TileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
        {
          attribution: 'Tiles &copy; Esri'
        }
      ).addTo(this.map)

      window.addEventListener('resize', this.fitBounds)

      this.addMarkers()
    },
    addMarkers() {
      this.locations.collection.forEach(place => {
        var marker = new Marker(place.coordinates, {
          opacity: 0.8,
          place_id: place.id
        })

        marker
          .bindPopup(this.$refs.popup, {
            maxWidth: 'auto'
          })
          .on('click', () => {
            this.activePlace = place
            if (!this.showMobileControls) {
              this.$emit('scroll-to', place)
            }
          })

        this.markers.push(marker)
      })

      this.map.addLayer(this.markerGroup)
      this.fitBounds()
    },
    clearMarkers() {
      if (this.markers.length) {
        this.map.removeLayer(this.markerGroup)
        this.markers = []
      }
    },
    fitBounds() {
      if (this.markers.length) {
        this.map.invalidateSize()
        this.map.fitBounds(this.markerGroup.getBounds())
      }
    },
    panTo(place) {
      this.map.panTo(place.coordinates)
    }
  },

  computed: {
    markerGroup() {
      return new FeatureGroup(this.markers)
    },
    activeMarker() {
      return this.markers.find(x => x.options.place_id == this.activePlace.id)
    }
  },

  watch: {
    locations: function() {
      this.clearMarkers()
      this.addMarkers()
    },
    activePlace: function(place) {
      if (place && this.activeMarker) {
        this.activeMarker.openPopup()
        this.panTo(place)
      }
    },
    showMobileControls: function() {
      this.$nextTick(() => {
        let place = this.activePlace
        this.fitBounds()
        this.activePlace = null
        this.activePlace = place
        this.panTo(this.activePlace)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'https://unpkg.com/leaflet@1.5.1/dist/leaflet.css';

#HcLocationsMap {
  flex: 45vw 100%;
  min-width: 45vw;
  z-index: 9999;
  position: sticky;
  top: 0;
  height: 100vh;
  // sticky-sm-top vh-sm-100
}

.leaflet-container {
  font: inherit;
}
</style>


