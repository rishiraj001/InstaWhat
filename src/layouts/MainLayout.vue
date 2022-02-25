<template>
  <q-layout view="lHh Lpr lFf">
    <q-header 
      class="bg-white text-grey-10"
      bordered
    >
      <q-toolbar class="constrain">
        <q-btn
        class="large-screen-only q-mr-sm"
          to="/camera"
          flat
          round
          dense
          size="18px"
          icon="eva-camera-outline"
          />

          <q-separator
            class="large-screen-only"
            vertical
            spaced 
          />

        <q-toolbar-title
          class="text-grand-hotel"
        > InstaWhat 
        </q-toolbar-title>
        <q-btn
        class="large-screen-only"
          to="/"
          flat
          round
          dense
          size="18px"
          icon="eva-home-outline" />
      </q-toolbar>
    </q-header>

    <q-footer 
        class="bg-white small-screen-only"
        bordered
      >
        <q-tabs 
          class="text-grey-10"
          active-color="primary"
          indicator-color="transparent"
        >
          <q-route-tab
            to="/"
            icon="eva-home-outline"
             />
          <q-route-tab
            to="/camera"
            icon="eva-camera-outline"
             />
        </q-tabs>
    </q-footer>

    <q-page-container class="bg-grey-1">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  data() {
    return {};
  },
};
</script>

<style lang="sass">
  .q-toolbar
    @media(min-width: $breakpoint-sm-min)
      height: 77px

  .q-toolbar__title
    font-size: 30px
    @media(max-width: $breakpoint-xs-max)
      text-align: center

  .q-footer
    .q-tab__icon
      font-size: 30px

  .text-grand-hotel
    font-family: 'Grand Hotel', 'Roboto','Helvetica Neue', Helvectica, Arial, sans-serif

  .small-screen-only
    @media(max-width: $breakpoint-xs-max)
      display: block
    @media(min-width: $breakpoint-sm-min)
      display: none

  .large-screen-only
    @media(max-width: $breakpoint-xs-max)
      display: none
    @media(min-width: $breakpoint-sm-min)
      display: block

  .constrain
    max-width: 975px
    margin: 0 auto

  .constrain-more
    max-width: 600px
    margin: 0 auto
</style>