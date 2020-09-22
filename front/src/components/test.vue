<template>

    <div class="anounce">
        <div class="introAnounce">
          <v-row>
            <v-col cols="12" md="3">
              <v-text-field name="depart" label="depart" outlined></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
              <v-text-field name="arrivé" label="arrivé" outlined></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
              <v-text-field name="date" label="date" outlined></v-text-field>
            </v-col>
            <v-col cols="12" md="3" class="try">
              <v-btn class="searchBtn">
                <v-icon>mdi-magnify</v-icon>Search
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </div>
</template>