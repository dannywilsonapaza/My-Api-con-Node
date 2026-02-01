const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);


const app = require('../index').app;

describe('Suite de pruebas e2e para el curso', ()=>{
    it('esperamos un hola mundo', (done)=>{
        chai.request('http://localhost:3000')
        .get('/')
        .end((err,res)=>{
            console.log('A')
            chai.assert.equal(res.text, 'Hola Mundo');
            done()
        })
        console.log('B')
    })

    })