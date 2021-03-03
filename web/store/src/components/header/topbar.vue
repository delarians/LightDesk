<template>
  <div class="site-header__topbar topbar">
    <div class="topbar__container container">
      <div class="topbar__row">
        <div class="topbar__item topbar__item--link">
          <AppLink :to="$url.about()" class="topbar-link">
            {{ $t('header.topbar.aboutUs') }}
          </AppLink>
        </div>
        <div class="topbar__item topbar__item--link">
          <AppLink :to="$url.contacts()" class="topbar-link">
            {{ $t('header.topbar.contacts') }}
          </AppLink>
        </div>
        <div class="topbar__item topbar__item--link">
          <AppLink to="/" class="topbar-link">
            {{ $t('header.topbar.storeLocation') }}
          </AppLink>
        </div>
        <div class="topbar__item topbar__item--link">
          <AppLink :to="$url.trackOrder()" class="topbar-link">
            {{ $t('header.topbar.trackOrder') }}
          </AppLink>
        </div>
        <div class="topbar__item topbar__item--link">
          <AppLink :to="$url.blog()" class="topbar-link">
            {{ $t('header.topbar.blog') }}
          </AppLink>
        </div>
        <div class="topbar__spring" />
        <div class="topbar__item">
          <Dropdown
            :items="[
              { title: dashboard, url: $url.accountDashboard()},
              { title: editProfile, url: $url.accountProfile()},
              { title: orderHistory, url: $url.accountOrders()},
              { title: addresses, url: $url.accountAddresses()},
              { title: password, url: $url.accountPassword()},
              { title: logout, url: $url.signOut()}
            ]"
          >
            {{ $t('header.topbar.account.account') }}
          </Dropdown>
        </div>
        <div class="topbar__item">
          <Dropdown :items="currencies" @itemClick="setCurrency($event.currency)">
            {{ $t('header.topbar.currency') }}:
            <span class="topbar__item-value">{{ currency.code }}</span>
          </Dropdown>
        </div>
        <div class="topbar__item">
          <Dropdown :items="languages" :with-icons="true" @itemClick="setLanguage($event.locale)">
            {{ $t('header.topbar.language') }}:
            <span class="topbar__item-value">{{ language.code }}</span>
          </Dropdown>
        </div>
      </div>
    </div>
  </div>
  <!-- .topbar / end -->
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Getter, Mutation, State } from 'vuex-class'
import { TranslateResult } from 'vue-i18n'
import { RootState } from '~/store'
import { ICurrency } from '~/interfaces/currency'
import { ILanguage } from '~/interfaces/language'
import Dropdown from '~/components/header/dropdown.vue'
import AppLink from '~/components/shared/app-link.vue'
import dataLanguages from '~/data/languages'
import dataShopCurrencies from '~/data/shopCurrencies'
  @Component({
    components: { Dropdown, AppLink }
  })
export default class Topbar extends Vue {
  data () {
    return {
      dashboard: this.$t('header.topbar.account.dashboard') as TranslateResult,
      editProfile: this.$t('header.topbar.account.editProfile') as TranslateResult,
      orderHistory: this.$t('header.topbar.account.orderHistory') as TranslateResult,
      addresses: this.$t('header.topbar.account.addresses') as TranslateResult,
      password: this.$t('header.topbar.account.password') as TranslateResult,
      logout: this.$t('header.topbar.account.logout') as TranslateResult
    }
  }

    @State((state: RootState) => state.currency.current) currency!: ICurrency
    @Getter('locale/language') language!: ILanguage
    @Mutation('currency/set') setCurrency!: (currency: ICurrency) => void

    currencies = dataShopCurrencies.map((currency) => {
      return {
        title: `${currency.symbol} ${currency.name}`,
        currency
      }
    })

    languages = dataLanguages.map((language) => {
      return {
        title: language.name,
        icon: language.icon,
        locale: language.locale
      }
    })

    setLanguage (locale: string) {
      const fullPath = this.$route.fullPath
      const re = new RegExp(
        '^/(' + dataLanguages.map(x => x.locale).join('|') + ')(/|$)'
      )
      const path = fullPath.replace(re, '/')

      this.$router.push(`/${locale}${path}`)
    }
}
</script>
