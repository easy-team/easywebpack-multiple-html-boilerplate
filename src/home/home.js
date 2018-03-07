import './home.css';
import $ from 'jquery';

$('#jq').html('Webpack JQuery Import by externals!!!!!!');

window.fetch('/debug').then(res => {
  res.text().then(text =>{
    console.log(text);
  });
});