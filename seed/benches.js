const db = require('../db')
const { WorkBench } = require('../models')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const benches = [
    {
      owner: 'Freeform',
      budget: 5000,
      image:
        'https://imgs.search.brave.com/n--bK2CmDwn2kfbpLAmCuacY3TUyyqeAKojrYGWSCyw/rs:fit:480:480:1/g:ce/aHR0cHM6Ly93d3cu/ZGFkZHljb21wZXIu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE3LzA0L21haW5n/ZWFyLWVwaWMtZ2Ft/aW5nLXBjLTEtNDgw/eDQ4MC5qcGc',
      userCreated: false
    },
    {
      owner: 'Professional',
      budget: 5000,
      image:
        'https://imgs.search.brave.com/6QcGzgd8h9beJbeuS47T7axIiEdc_VNI8cjgKVxn2H8/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly95ZG5l/d3MuaW4vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjAvMDUvc2V2/ZXItUEMuanBn',
      userCreated: false
    },
    {
      owner: 'Enthusiast',
      budget: 3000,
      image:
        'https://images.unsplash.com/photo-1624705013726-8cb4f9415f40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      userCreated: false
    },
    {
      owner: 'Budget',
      budget: 1000,
      image:
        'https://imgs.search.brave.com/awmXz7yh_ioSrGu8L94zeBgStSlZU_tdQAT0ORZK7n8/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9wMS5i/dWlsZHMuZ2cvYnVp/bGRzX3BpY3R1cmVz/LzI0MDAwLzI0NTQz/LzEyNTgwMC8xMjU4/MDBfMTkyMC5qcGc',
      userCreated: false
    }
  ]

  await WorkBench.insertMany(benches)
  console.log('Created some workbenches')
}
const run = async () => {
  await main()
  db.close()
}

run()
