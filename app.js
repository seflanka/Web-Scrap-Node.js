const request = require('request-promise');
const cheerio = require('cheerio');
const Crawler = require('crawler');

const crawpgFilha = new Crawler({
    rateLimit: 5000,
    callback: function(error, res, done){
        if(error){
            console.log(error);
        }else{
            let $ = res.$;
            const codigo =  $('#fund-ticker').text().trim();
            const administrador = $('#informations--admin > div.top-content > div.text-wrapper > span.administrator-name').text().trim();
            const dataBase = $('#last-revenues--table > tbody > tr:nth-child(1) > td:nth-child(1)').text().trim();
            const dataPagamento = $('#last-revenues--table > tbody > tr:nth-child(1) > td:nth-child(2)').text().trim();
            const cotacao = $('#last-revenues--table > tbody > tr:nth-child(1) > td:nth-child(3)').text().trim();
            const dy = $('#last-revenues--table > tbody > tr:nth-child(1) > td:nth-child(4)').text().trim();
            const dividendo = $('#last-revenues--table > tbody > tr:nth-child(1) > td:nth-child(5)').text().trim();

        }
        
    }
    
})


crawpgFilha.queue('https://fiis.com.br/aiec11/') 