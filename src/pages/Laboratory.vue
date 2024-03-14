<template>
  <Layout>
    <h1>Лаборатория</h1>

    <h2>Видеоесета за съвременна литература</h2>

    <p>От началото на 2023 г. издателство „Версус“ започва поредицата „Видео-есета за съвременна литература“ в YouTube, предлагащa алтернативен поглед към значимите литературни произведения както на български език, така и в превод. Критическите рефлексии са осъществени и под формата на подкаст в Spotify канала на „Версус“. Отделните епизоди имат различни водещи – Мария Калинова, Йорданка Белева, Камен Рикев, Камелия Спасова, Франческа Земярска, Иван Георгиев и др. На ротационен принцип авторите на видеата представят своя прочит на ярки заглавия, появили се през годината или пък поглед към събития, свързани със съвременната поезия и проза. Можем да открием епизоди за книгите на ВБВ, Калин Михайлов, Димитър Кенаров, Анна Лазарова, Нурие Муратова, Тодор П. Тодоров, Антоний Димов, Саша Станишич, Галин Тиханов, Галина Николова, Халдоура Тородсен, Георги Господинов, Миглена Николчина, Ани Васева, Кристиян Енчев и др. Видеозаснемането и монтирането са дело на Йоанна Нейкова. Сред важните професионалисти, които е привлякла поредицата са художникът Александър Байтошев и артистите от няма никой, Punch Deck, Infraction, допринасящи за музикалната среда. Поредицата е подкрепена от Национален фонд „Култура“.</p>
    <div class="videos">
      <iframe
          v-for="videoUrl in videos"
          width="560"
          loading="lazy"
          height="315"
          :src="'https://www.youtube.com/embed/' + videoUrl"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
      ></iframe>
    </div>
  </Layout>
</template>

<script>

export default {
  metaInfo: {
    title: 'Лаборатория'
  },
  data() {
    return {
      videos: [
        '1YQWNV3vWjE',
        'A13DE3tRa8k',
        'ay8bt5WWAjc',
        'VOOr4HFunT0',
        'O_E2aGcjw5I',
        'WIk_3Mj80cY',
        '4Hj3KyE6HuY',
        'Qvn8yCuoBW4',
        'EPfUobB0q40',
        'YBSdG19pzac',
        'LhSH-JtKpiA',
        'AR6O1RdiJ_4',
      ]
    }
  }
}
</script>


<style>
.videos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.videos iframe {
  display: block;
  margin: 15px 10px;
  aspect-ratio: 16/9;
  width: 80%;
  height: 400px;
}
</style>
