const db = require('../db')
const { Part } = require('../models')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const parts = [
    {
      name: 'i7-8700k',
      type: 'CPU',
      price: 200,
      details:
        '3.7GHz base clock | 4.7GHz boost clock | 95 W TDP | 6 cores | Hyperthreading | Coffee Lake | LGA 1151 | UHD Graphics 630',
      brand: 'Intel',
      SKU: '',
      inUse: true,
      image:
        'https://imgs.search.brave.com/tEGOwqn4F4ojRWaKAs1pfduqbzwYy5tkPJjxlSnJGEs/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/YmhwaG90b3ZpZGVv/LmNvbS9pbWFnZXMv/aW1hZ2VzMjUwMHgy/NTAwL2ludGVsX2J4/ODA2ODRpNzg3MDBr/X2NvcmVfaTdfODcw/MGtfM183X2doel8x/MzU2NjM0LmpwZw',
      link: 'https://www.amazon.com/Intel-i7-8700K-Desktop-Processor-Unlocked/dp/B07598VZR8/ref=sr_1_1?crid=1LZXF9GBOB9TO&keywords=8700k&qid=1666886039&qu=eyJxc2MiOiIyLjE2IiwicXNhIjoiMS42MyIsInFzcCI6IjAuNjQifQ%3D%3D&sprefix=8700k%2Caps%2C136&sr=8-1&ufe=app_do%3Aamzn1.fos.ac2169a1-b668-44b9-8bd0-5ec63b24bcb5'
    },
    {
      name: '1080 Ti SC Black Edition',
      type: 'GPU',
      price: 400,
      details:
        'Part# 11G-P4-6393-KR | Memory: 11 GB GDDR5X | Core Clock: 1556 MHz | Boost Clock: 1670 MHz | TDP: 250 W | 1 HDMI | 1 DVI-D | 3 Display Ports',
      brand: 'EVGA',
      SKU: '',
      inUse: true,
      image:
        'https://imgs.search.brave.com/rInZ-nEcbTDvPraiBje7rd5rOgV4c-V8p2aMQeXdDKk/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly9kZHRl/Y2gubXgvYXNzZXRz/L3VwbG9hZHMvMDc3/OTdhZmNmNzUzMTU2/NDViNzY3Nzg4ZjU2/NjI1OTQuanBn'
    },
    {
      name: 'Vengeance LPX',
      type: 'RAM',
      price: 150,
      details: 'Speed: 3200MHz | Size: 2x16GB | Color: Black/Yellow',
      brand: 'Corsair',
      SKU: '',
      inUse: false,
      image: 'https://m.media-amazon.com/images/I/71EXOwFSf-L.jpg',
      link: 'https://www.amazon.com/Corsair-Vengeance-3200MHz-Desktop-Memory/dp/B07ZPLM1R1/ref=sr_1_3?crid=D3E7FO8N3LPD&keywords=vengeance%2Blpx&qid=1666884334&qu=eyJxc2MiOiIyLjcxIiwicXNhIjoiMi41OSIsInFzcCI6IjIuMDYifQ%3D%3D&sprefix=vengeance%2Blpx%2Caps%2C121&sr=8-3&ufe=app_do%3Aamzn1.fos.18ed3cb5-28d5-4975-8bc7-93deae8f9840&th=1'
    },
    {
      name: 'Kraken X52',
      type: 'OTHER',
      price: 150,
      details: '240mm AIO',
      brand: 'NZXT',
      SKU: '1209317dgf;hasdf',
      inUse: false,
      image: 'https://m.media-amazon.com/images/I/715a4yoIqiL.jpg',
      link: 'https://www.amazon.com/NZXT-Kraken-240mm-All-One/dp/B06XWYY83S'
    },
    {
      name: 'Core W200',
      type: 'CASE',
      price: 500,
      details: '',
      brand: 'Thermaltake ',
      SKU: '',
      inUse: false,
      image: 'https://m.media-amazon.com/images/I/71z3GVajkIL._AC_SL1500_.jpg',
      link: 'https://www.amazon.com/Thermaltake-Dismantle-Stackable-Certified-CA-1F5-00F1WN-00/dp/B01EGBZA1C'
    },
    {
      name: 'Ghost S1',
      type: 'CASE',
      price: 250,
      details:
        'Mini-ITX | Aluminum body | 188x140x322mm (HxWxD) | CPU Heatsink : Up to 66mm | PSU: SFX/SFX-L ',
      key: 720,
      brand: 'Louqe',
      SKU: '981374wersdfg',
      inUse: false,
      image:
        'https://cdn.shopify.com/s/files/1/2676/3440/products/Chassi_Limestone_A_1296x.jpg?v=1628676717',
      link: 'https://www.amazon.com/LOUQE-Ghost-Arctic-Mini-ITX-Computer/dp/B089Q83N7C/ref=sr_1_1?crid=2Q5IQ26GUBXU&keywords=louqe+ghost+s1&qid=1666886169&qu=eyJxc2MiOiIyLjY5IiwicXNhIjoiMi4yOSIsInFzcCI6IjIuNjEifQ%3D%3D&sprefix=louqe+ghost+s1%2Caps%2C106&sr=8-1&ufe=app_do%3Aamzn1.fos.18ed3cb5-28d5-4975-8bc7-93deae8f9840'
    }
  ]

  await Part.insertMany(parts)
  console.log('Created some parts')
}
const run = async () => {
  await main()
  db.close()
}

run()
