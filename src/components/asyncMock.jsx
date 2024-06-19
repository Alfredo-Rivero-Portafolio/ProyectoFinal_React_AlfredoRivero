const products = [

   {
      id: '1',
      title: 'X-Men',
      price: 18000,
      category: 'juegos',
      pictureUrl: 'https://i.blogs.es/cf5a58/x-men-en-marvel-future-fight/1024_682.webp',
      stock: 10,
      description: 'Juego de PlayStation 4'
   },
   {
      id: '2',
      title: 'Xiaomi redmi 14 ultra ',
      price: 480000,
      category: 'celulares',
      pictureUrl: 'https://i.blogs.es/c1217b/oneplus-ultra-7/1024_2000.webp',
      stock: 10,
      description: 'Xiaomi redmi 14 ultra '
   },   {
      id: '3',
      title: 'Red Magic 9 ',
      price: 450000,
      category: 'celulares',
      pictureUrl: 'https://http2.mlstatic.com/D_799714-MLA73666307556_012024-C.jpg',
      stock: 10,
      description: ' Red Magic 9 '
   },   {
      id: '4',
      title: 'Xiaomi Note 11',
      price: 420000,
      category: 'celulares',
      pictureUrl: 'https://mla-s1-p.mlstatic.com/853026-MLA69926783192_062023-F.jpg',
      stock: 10,
      description: 'Xiaomi Note 11 '
   },   {
      id: '5',
      title: 'Battlefiel 2042',
      price: 62000,
      category: 'juegos',
      pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfDMMwz3RkiHsVYE1cqKqVn0c5GJl2I70byw&s',
      stock: 10,
      description: 'Lucha para definir el futuro en este teatro de guerra nunca antes visto. '
   },   {
      id: '6',
      title: 'Call Of Duty ',
      price: 51000,
      category: 'juegos',
      pictureUrl: 'https://gorilagames.com/img/Public/1019-producto-call-of-duty-modern-warfare-remaster-5964.jpg',
      stock: 10,
      description: 'Modern Warfare Remastered '
   },

]

export const getProducts = () => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve(products)
      }, 1000)
   })
}

export const getProductsByCategory = (productId) => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve(products.find(product => product.id === productId))
      }, 1000)
   })
}
