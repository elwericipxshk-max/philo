import { BlogPost } from "./types";

export const MOCK_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Modern Dünyada Stoacılık',
    excerpt: 'Kaosun ortasında iç huzuru bulmak mümkün mü? Marcus Aurelius\'un günlüklerinden modern ofis hayatına uzanan bir rehber.',
    content: 'Stoacılık sadece acıya katlanmak değildir; neyi kontrol edebileceğimizi ve neyi edemeyeceğimizi ayırt etme sanatıdır. Günümüzde trafik sıkışıklığından iş stresine kadar her alanda, olaylara verdiğimiz tepkiler özgürlüğümüzün tek alanıdır. Epiktetos\'un dediği gibi: "İnsanları olaylar değil, olaylara dair görüşleri üzer."',
    author: 'Deniz Bilge',
    date: '12 Ekim 2023',
    tags: ['Stoacılık', 'Etik', 'Kişisel Gelişim'],
    imageUrl: 'https://picsum.photos/800/600?random=1',
    readTime: '5 dk',
    comments: [
      {
        id: 'c1',
        author: 'Anonim Okur',
        content: 'Bu yazı tam da ihtiyacım olan zamanda karşıma çıktı. Teşekkürler.',
        date: '12 Ekim 2023'
      },
      {
        id: 'c2',
        author: 'Can',
        content: 'Stoacılık bazen fazla pasifist kaçmıyor mu? Bunu modern aktivizmle nasıl birleştirebiliriz?',
        date: '13 Ekim 2023'
      }
    ]
  },
  {
    id: '2',
    title: 'Yapay Zeka Düşünebilir mi?',
    excerpt: 'Turing testinden Çin Odası argümanına, makine bilincinin felsefi sınırlarını keşfediyoruz.',
    content: 'Eğer bir makine insan gibi davranıyorsa, onun bilinci olmadığını iddia edebilir miyiz? Descartes bugün yaşasaydı, "Düşünüyorum öyleyse varım" sözünü bir silikon çip için de kullanır mıydı? Bilinç sadece biyolojik bir süreç midir, yoksa fonksiyonel bir durum mu? Searle\'ün Çin Odası argümanı, anlamı (semantik) sözdizimden (sentaks) ayırarak bu soruya ilginç bir yanıt verir.',
    author: 'Ada Lovelace',
    date: '15 Ekim 2023',
    tags: ['Zihin Felsefesi', 'Teknoloji', 'Gelecek'],
    imageUrl: 'https://picsum.photos/800/600?random=2',
    readTime: '8 dk',
    comments: []
  },
  {
    id: '3',
    title: 'Absürdizm ve Sabah Kahvesi',
    excerpt: 'Camus, Sisifos ve her sabah yataktan kalkma eyleminin anlamsızlığına karşı bir başkaldırı olarak kahve içmek.',
    content: 'Hayatın anlamsız olması, onun yaşanmaya değer olmadığı anlamına gelmez. Tam tersine, anlamı biz yaratırız. Her sabah kahve demlemek, evrenin sessizliğine karşı küçük ama onurlu bir başkaldırıdır. Camus\'nün dediği gibi: "Bir insanı yargılamak için, varoluşunu nasıl taşıdığına bakmalı." İntihar felsefi bir sorundur, kahve ise bir yanıttır.',
    author: 'Albert C.',
    date: '18 Ekim 2023',
    tags: ['Varoluşçuluk', 'Absürdizm', 'Yaşam'],
    imageUrl: 'https://picsum.photos/800/600?random=3',
    readTime: '6 dk',
    comments: [
      {
        id: 'c3',
        author: 'Sisifos Seveni',
        content: 'Kahvemi yudumlarken bu satırları okumak ironik oldu. Harika bir bakış açısı.',
        date: '19 Ekim 2023'
      }
    ]
  },
  {
    id: '4',
    title: 'Özgür İrade Bir İllüzyon mu?',
    excerpt: 'Spinoza\'nın determinizminden modern nörobilim bulgularına: Kararlarımızı gerçekten biz mi veriyoruz?',
    content: 'Spinoza\'ya göre, havaya fırlatılan bir taş düşünebilseydi, yere düşmeyi kendi özgür iradesiyle seçtiğini sanırdı. İnsanlar arzularının farkındadır ama bu arzuları oluşturan nedenlerin farkında değildir. Libet deneyleri ve modern nörobilim, beynimizin biz "karar verdim" demeden milisaniyeler önce karar mekanizmasını çalıştırdığını gösteriyor. Peki bu ahlaki sorumluluğu ortadan kaldırır mı?',
    author: 'Baruch S.',
    date: '22 Ekim 2023',
    tags: ['Metafizik', 'Nörobilim', 'Özgür İrade'],
    imageUrl: 'https://picsum.photos/800/600?random=4',
    readTime: '10 dk',
    comments: [
       {
        id: 'c4',
        author: 'Determinist',
        content: 'Özgür irade olmasa bile varmış gibi yaşamak zorundayız, paradoks burada.',
        date: '23 Ekim 2023'
      }
    ]
  },
  {
    id: '5',
    title: 'Gösteri Toplumu ve Dijital Benlik',
    excerpt: 'Guy Debord\'un kehaneti gerçek oldu mu? Sosyal medyada "görünmek" ile "olmak" arasındaki fark silikleşiyor.',
    content: 'Guy Debord, "Gösteri Toplumu"nda modern yaşamın sadece imgelerden ibaret bir temsile dönüştüğünü savunmuştu. Instagram hikayeleri ve TikTok akışları arasında, artık hayatı yaşamıyoruz; hayatı "yayınlıyoruz". Olmak (to be) yerini sahip olmaya (to have), o da yerini görünmeye (to appear) bıraktı. Gerçeklik, ekranın arkasında kaybolurken, dijital avatarlarımız bizden daha gerçek hale geliyor.',
    author: 'Jean B.',
    date: '25 Ekim 2023',
    tags: ['Politika', 'Sosyal Medya', 'Sosyoloji'],
    imageUrl: 'https://picsum.photos/800/600?random=5',
    readTime: '7 dk',
    comments: []
  },
  {
    id: '6',
    title: 'Güzellik Nedir? Kant Estetiği',
    excerpt: 'Güzellik bakanın gözünde midir, yoksa evrensel bir standart var mıdır? Estetik yargıların doğası üzerine.',
    content: 'Bir gün batımına baktığımızda hissettiğimiz haz, tamamen öznel midir? Immanuel Kant, "Yargı Yetisinin Eleştirisi"nde, estetik hazzın çıkarsız olduğunu söyler. Yani bir elmaya bakıp "güzel" demek, onu yemek istemekten farklıdır. Kant\'a göre güzel olan, "kavramsız bir memnuniyet" yaratır. Güzellik nesnede değil, zihnimizin o nesneyle girdiği özgür oyundadır.',
    author: 'Immanuel K.',
    date: '28 Ekim 2023',
    tags: ['Estetik', 'Sanat', 'Algı'],
    imageUrl: 'https://picsum.photos/800/600?random=6',
    readTime: '9 dk',
    comments: [
       {
        id: 'c5',
        author: 'Sanatsever',
        content: 'Çıkarsız haz kavramı günümüz tüketim toplumunda hala geçerli mi emin değilim.',
        date: '29 Ekim 2023'
      }
    ]
  }
];