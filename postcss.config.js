module.exports = {
  plugins: [
    require('autoprefixer'),
    require('css-mqpacker'),
    require('cssnano')({
      preset: [
        'default',
        {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    }),
  ],
};
/* Этот файл должен находиться в корне проекта для корректной работы.
Попытка поместить этот файл в папку JS и указать путь для postcss
loader-у как у парня в видосе у меня не получилось.
Link to the video: https://www.youtube.com/watch?v=qqTIqwQX8nc&t=821s

css-mqpacker — 22:10 — https://www.youtube.com/watch?v=qqTIqwQX8nc&t=821s.
2:20 — https://www.youtube.com/watch?v=QF3EcxymIcc&list=PLkCrmfIT6LBQWN02hNj6r1daz7965GxsV&index=6
Вкратце, группирует media запросы, разбросанные в коде, что сокращает его объем.
Без плагина:
@media screen and (max width: 1920px){
    font-size: 20px;
}
@media screen and (max width: 1920px){
    color: green;
}
@media screen and (max width: 1920px){
    display: flex;
}
С плагином:
@media screen and (max width: 1920px){
    font-size: 20px;
    color: green;
    display: flex;
}

cssnano — minimize css code
discardComments: {
    removeAll: true
} — remove all comments
*/
